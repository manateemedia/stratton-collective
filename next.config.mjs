/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    // Permanent (301) redirects from old Squarespace URLs so rankings carry over.
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/apostile", destination: "/apostille", permanent: true },
      { source: "/newberryflorida", destination: "/newberry-florida", permanent: true },
      { source: "/notary-locations-1", destination: "/service-areas", permanent: true },
      { source: "/notary-locations", destination: "/service-areas", permanent: true },
      { source: "/ineedanotary", destination: "/mobile-notary", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/what-are-legal-document-preparers", destination: "/what-is-a-notary-how-does-an-online-notary-work", permanent: true },
      { source: "/what-is-a-notary-how-does-an-online-notary-work/:post+", destination: "/what-is-a-notary-how-does-an-online-notary-work", permanent: true },
      { source: "/blog/:path*", destination: "/what-is-a-notary-how-does-an-online-notary-work", permanent: true },
      { source: "/:town(gainesville|newberry|high-springs|alachua|lake-city|jacksonville|archer|hawthorne|micanopy|waldo)", destination: "/:town-florida", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
