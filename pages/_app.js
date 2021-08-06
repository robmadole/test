import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
