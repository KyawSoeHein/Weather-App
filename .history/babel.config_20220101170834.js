module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-proposal-decorators'],
  '@ember-decorators/babel-transforms': {
    decoratorsBeforeExport: false,
  },
};
