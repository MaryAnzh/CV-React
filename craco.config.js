const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
      ];
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.toString().includes("svg"),
      );

      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/i;
      }

      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  },
};
