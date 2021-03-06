import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href="https://bssteelfabricator.com/" />
            <link rel="shortcut icon" href="/img/logo.ico" type="image/x-icon"/>
            <script async src="https://kit.fontawesome.com/f5be5aaf66.js" crossOrigin="anonymous"></script>
            </Head>
            <body className="font-body text-primary-800">
            <Main />                
            </body>
            <NextScript />
        </Html>
        )
    }
}