import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
        <Html lang="en">
            <Head>
                <meta name="msvalidate.01" content="BC521B11B3711C6DDC71123C9C5BE31A" />
                <script src="https://kit.fontawesome.com/91e25bab1c.js" crossorigin="anonymous"></script>
            </Head>
            <body className="font-body text-primary-800">
                <Main />      
                <NextScript />
            </body>
        </Html>
        )
    }
}