import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title="Pierre Lavalley"
                description="Articles tech & dev et sur tous les sujets qui me passionnent !"
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
