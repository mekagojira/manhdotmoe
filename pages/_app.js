import 'scss/index.scss';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextSeo
                title="manh.moe"
                description="Call me MDN"
                canonical="https://www.manh.moe/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'manh.moe',
                    description: 'Call me MDN',
                    images: [
                        {
                            url: '/san.jpeg',
                            width: 886,
                            height: 886,
                            alt: 'San',
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: 'manh.moe',
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
