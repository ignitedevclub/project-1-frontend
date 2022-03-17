import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider themes={['light', 'dark']} defaultTheme="light">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}