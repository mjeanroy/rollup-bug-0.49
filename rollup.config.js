const babel = require('rollup-plugin-babel');

module.exports = {
  input: './index.js',
  output: {
    file: './index.bundle.js',
    format: 'es',
  },

  plugins: [
    babel(),
  ],
};
