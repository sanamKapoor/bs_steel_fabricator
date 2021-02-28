import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'B.S Steel Fabricator and Doors',
  keywords: 'bs steel, bs steel fabricator, doors, japani chokhat, bs steel saha, saha ambala, japani chokhat near me, steel gates, railing, grill',
  description: 'B.S Steel Fabricator and Doors was formed by Mr. Balwinder Singh in 2003 with a strong vision of providing quality products and services. We provide best service in the market on our products like Japanese Steel Door Frame (Japani Chokhat) and Window, Steel Gates and Railing, and almost all types of doors for your home.',
}

export default Meta
