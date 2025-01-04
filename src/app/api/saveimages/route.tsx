import { NextRequest, NextResponse } from 'next/server'; // Importing NextRequest and NextResponse
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const imagesFolder = path.join(process.cwd(), 'public', 'images');
const imageCachePath = path.join(process.cwd(), 'imageCache.json');

// Ensure the 'images' folder exists
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder, { recursive: true });
}

// Load the image cache (if exists)
let imageCache: { [key: string]: number } = {}; // Declare the type explicitly
if (fs.existsSync(imageCachePath) && fs.statSync(imageCachePath).size > 0) {
  imageCache = JSON.parse(fs.readFileSync(imageCachePath, 'utf8'));
}

function isImageCacheExpired(fileName: string) {
  const currentTime = Date.now();
  const lastSavedTime = imageCache[fileName];

  const cacheExpirationTime =  Number(process.env.CACHE_EXPIRATION_TIME || 3600000);

  // If the image is not in the cache or was saved more than 1 hour ago, we need to re-fetch it
  if (!lastSavedTime || (currentTime - lastSavedTime) > cacheExpirationTime) {
    return true;
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body of the request
    const { pages } = await req.json(); // This will parse the request body and destructure `pages`

    const validFileNames = []; // Initialize an array to store valid file names
    const newExpireFileNames = []; // Initialize an array to store valid file names

    // Loop through each page and process the image
    for (const page of pages) {
      const { id, image_url } = page;

      if (image_url) {
        const fileName = `${id}.jpg`; // Adjust extension if necessary
        
        const filePath = path.join(imagesFolder, fileName);
        
        if (fs.existsSync(filePath) && !isImageCacheExpired(fileName)) {
          validFileNames.push(fileName); 
          continue; 
        }

        // Fetch the image using the fetch API
        const response = await fetch(image_url);
        if (!response.ok) {
          console.error(`Failed to fetch image for page ID: ${id}`);
          continue; // Skip to the next image if fetching fails
        }

        // Convert the response to a buffer
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Save the image to the file system
        fs.writeFileSync(filePath, buffer);

        imageCache[fileName] = Date.now();
        fs.writeFileSync(imageCachePath, JSON.stringify(imageCache));
        newExpireFileNames.push(fileName); 
      }
    }

    // Return the response with valid and expired file names
    return NextResponse.json(
      { validFilenames: validFileNames, newExpireFileNames: newExpireFileNames },
      { status: 200 }
    );

  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      // If the error is not an instance of Error, handle it gracefully
      return NextResponse.json({ error: 'An unknown error occurred.' }, { status: 500 });
    }
  }
}
