import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link
                    href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/css/animate.css" />
                <link rel="stylesheet" href="/css/icomoon.css" />
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/flexslider.css" />
                <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/css/style.css" />

                <script src="/js/modernizr-2.6.2.min.js" />
                <script src="/js/respond.min.js" />
                <script src="/js/jquery.min.js"></script>
                <script src="/js/jquery.easing.1.3.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/jquery.waypoints.min.js"></script>
                <script src="/js/jquery.flexslider-min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/jquery.countTo.js"></script>
                <script src="/js/main.js"></script>
            </Head>
            <body className="hide-scroll">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
