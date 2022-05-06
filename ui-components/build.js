const envFilePlugin = require('./envfile-plugin')

const APP_BASE = 'src'
const ENTRY_FILE = '/components/index.js'
const OUTPUT_DIR = 'dist'
const OUTPUT_FILE = 'lib.js'

function build(entryFile, outFile) {
  require('esbuild')
    .build({
      entryPoints: [entryFile],
      outfile: outFile,
      bundle: true,
      sourcemap: true,
      watch: false,
      logLevel: 'silent',
      minify: false,
      loader: {
        '.js': 'jsx',
      },
      plugins: [envFilePlugin],
      format: 'esm',
      target: ['esnext']
    })
    .then(r => {
      console.log('Build succeeded.')
    })
    .catch(e => {
      console.log('Error building:', e.message)
      process.exit(1)
    })
}

build(`${APP_BASE}/${ENTRY_FILE}`, `${OUTPUT_DIR}/${OUTPUT_FILE}`)
