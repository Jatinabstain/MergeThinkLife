import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/how-it-works',
        destination: '/howItWorks'
      },
      {
        source: '/about-us',
        destination: '/aboutUs'
      },
      {
        source: '/short-term-disability-insurance',
        destination: '/shortTermDisabilityInsurance'
      },
      {
        source: '/term-life-insurance',
        destination: '/termLifeInsurance'
      },
      {
        source: '/blog-category',
        destination: '/blogCategory'
      },
      {
        source: '/privacy-policy',
        destination: '/privacyPolicy'
      },
      {
        source: '/terms-conditions',
        destination: '/termsConditions'
      },
      {
        source: '/500',
        destination: '/error500'
      },
      {
        source: '/coming-soon',
        destination: '/comingSoon'
      },
    ]
  }
};

export default nextConfig;
