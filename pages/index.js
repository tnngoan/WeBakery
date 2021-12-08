import Head from "next/head";
const poster2 = require("../public/img/poster.png");
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WeBakery</title>
        <meta name="WeBake" content="Best local bake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="bg-transparent min-h-screen"></div>
        <div className="bg-red-50 border-2 min-h-screen"></div>
        <div className="min-h-screen">
          <Image src={poster2} width={1600} height={800} />
        </div>
      </main>
    </div>
  );
}
