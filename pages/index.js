import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WeBakery</title>
        <meta name="WeBake" content="Best bake online" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <main></main>
      <footer>This is footer </footer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key={`${process.env.SNIPCART_KEY}`}
        hidden
      ></div>
    </div>
  );
}
