// // const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// // const config = getDefaultConfig(__dirname);

// // module.exports = withNativeWind(config, { input: "./global.css" });

// const { getDefaultConfig } = require("expo/metro-config");
// const path = require("path");

// const config = getDefaultConfig(__dirname, {
//   // Do not disable CSS support when using Tailwind.
//   isCSSEnabled: true,
// });

// config.resolver = {
//   ...config.resolver,
//   assetExts: config.resolver.assetExts.filter(ext => ext !== "css"),
//   sourceExts: [...config.resolver.sourceExts, "ts", "tsx", "js", "jsx"],
//   alias: {
//     "@": path.resolve(__dirname), // Ensures "@/..." resolves properly
//     "@components": path.resolve(__dirname, "components"),
//   },
// };

// // module.exports = config;
// module.exports = withNativeWind(config, { input: './global.css' })


const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true, // Ensures CSS is not disabled
});

// Ensure Metro supports both Tailwind (NativeWind) and SVGs
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "css");
config.resolver.sourceExts.push("ts", "tsx", "js", "jsx", "svg"); // Add "svg" support

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver.alias = {
  "@": path.resolve(__dirname),
  "@components": path.resolve(__dirname, "components"),
};

module.exports = withNativeWind(config, { input: "./global.css" });







