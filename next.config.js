module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "robor-team.s3.eu-central-1.amazonaws.com",
      "upload.vectorlogo.zone",
      "vectorlogo.zone",
      "raw.githubusercontent.com",
      "svgshare.com",
      "upload.wikimedia.org",
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|mp4)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
