import Image from 'next/image';
import umbrella from "../../../../../public/assets/umbrella.svg";
import umbrellaDown from "../../../../../public/assets/umbrella-down.svg";
import doller from "../../../../../public/assets/doller.svg";
import history from "../../../../../public/assets/history.svg";
import coverage from "../../../../../public/assets/coverage.svg";
import screen from "../../../../../public/assets/screen.svg";

export default function benefits() {
    return (
        <>
            <div className="grid lg:grid-cols-[auto,23%,23%] lg:gap-y-0 gap-y-[38px] gap-x-[38px] mb-8 items-center">
                <div>
                    <Image
                        src={umbrella}
                        alt="benefits"
                        className="mx-auto min-h-[286px] object-contain"
                    />
                </div>
                <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:min-h-[322px] h-full">
                    <div className="icon">
                        <Image
                            src={doller}
                            alt="prices"
                            width={37}
                            height={37}
                            className="object-contain mx-auto mb-[26.96px]"
                        />
                    </div>
                    <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Competitive Prices</h3>
                    <p className="font-normal text-[#00000099] text-base text-center">We provide competitive rates on all our products with no hidden fees or surprises along the way—you&apos;ll always know exactly what you&apos;re paying for!</p>
                </div>
                <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:min-h-[322px] h-full">
                    <div className="icon">
                        <Image
                            src={history}
                            alt="24/7 Support"
                            width={37}
                            height={37}
                            className="object-contain mx-auto mb-[26.96px]"
                        />
                    </div>
                    <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">24/7 Support</h3>
                    <p className="font-normal text-[#00000099] text-base text-center">Our team is available 24/7 via phone or email if you ever need help navigating the process or filing claims during an emergency.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-[23%,23%,auto] lg:gap-y-0 gap-y-[38px] gap-x-[38px] mb-8 items-center">
                <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:min-h-[322px] h-full">
                    <div className="icon">
                        <Image
                            src={coverage}
                            alt="Variety of Coverage Options"
                            width={37}
                            height={37}
                            className="object-contain mx-auto mb-[26.96px]"
                        />
                    </div>
                    <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Variety of Coverage Options</h3>
                    <p className="font-normal text-[#00000099] text-base text-center">We offer a wide range of options for your life insurance needs, so no matter what situation you&apos;re facing, we&apos;ll be there for you.</p>
                </div>
                <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:min-h-[322px] h-full">
                    <div className="icon">
                        <Image
                            src={screen}
                            alt="Online Application"
                            width={37}
                            height={37}
                            className="object-contain mx-auto mb-[26.96px]"
                        />
                    </div>
                    <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Online Application</h3>
                    <p className="font-normal text-[#00000099] text-base text-center"> We offer a fast and easy online application process so you can apply for insurance in just a few minutes! You can get free quotes from our website with just a few clicks!</p>
                </div>
                <div>
                    <Image
                        src={umbrellaDown}
                        alt="benefits"
                        className="mx-auto lg:min-h-[286px] min-h-40 object-contain"
                    />
                </div>
            </div>
        </>
    );
}