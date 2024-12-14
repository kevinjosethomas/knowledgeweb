module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/readme",
        permanent: true,
      },
    ];
  },
};
