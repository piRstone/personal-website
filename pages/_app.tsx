import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'fr-FR',
                    site_name: 'Pierre Lavalley',
                    url: process.env.NEXT_PUBLIC_BASE_URL,
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
