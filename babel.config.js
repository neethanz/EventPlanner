module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        // extensions: ['.tsx', '.json', '.ts', '.js'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
