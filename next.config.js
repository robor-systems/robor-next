const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

module.exports = {
  reactStrictMode: true,
  devIndicators: false,
  bundlePagesRouterDependencies: true,
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "robor-team.s3.eu-central-1.amazonaws.com" },
      { hostname: "upload.vectorlogo.zone" },
      { hostname: "vectorlogo.zone" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "svgshare.com" },
      { hostname: "upload.wikimedia.org" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|mp4|jpeg)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/work",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/work/:slug",
        destination: "/clients/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
