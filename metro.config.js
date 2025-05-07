const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// Extend asset and source extensions
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

// Add SVG transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Export combined config with NativeWind

module.exports = withNativeWind(config, { input: `./app/globals.css` })
