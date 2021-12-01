import Head from "next/head";
import Image from "next/image";
import poster from "/public/img/logo-freshbake.png";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WeBakery</title>
        <meta name="WeBake" content="Best local bake" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <main>
        <Navbar />
      </main>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="ZmFmYTZlZDQtNjNkYi00NzE2LWI4YjItYmRiNzI5NWNiMWY2NjM3NjEwMDg3OTY4NTY1Mzc0"
        hidden
      ></div>
    </div>
  );
}
