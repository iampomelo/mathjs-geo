import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/mathjs-geo.min.js',
    format: 'umd',
    name: 'mathgeo'
  },
  plugins: [
    resolve(),
    babel({
      include: 'src/**'
    }),
    uglify()
  ]
};