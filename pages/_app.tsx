import { AppProps } from 'next/app'
import '../styles/index.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
