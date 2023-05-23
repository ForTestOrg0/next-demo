import Head from "next/head";
import METADATA from "@/config/metadata";
import localFont from "next/font/local";
import { GetServerSidePropsContext } from "next";
import type { AppProps } from "next/app";
type MetaProps = {
  metadata: {
    title: string;
    description: string;
  }
};

const eina = localFont({
  src: [
    {
      path: "../styles/fonts/Eina01.otf",
      weight: "400",
    },
    {
      path: "../styles/fonts/Eina01-SemiBold.otf",
      weight: "600",
    },
  ],
  variable: "--font-eina",
});
export default function RootLayout({
  context,
  children,
  pageProps,
}: {
  context?: GetServerSidePropsContext;
  children: React.ReactNode;
  pageProps: AppProps & MetaProps;
}) {
  const metadata = pageProps?.metadata || {};
  return (
    <div
      id="subscan-app"
      className={`${eina.variable} font-sans flex h-screen flex-col ${
        context?.req.cookies.theme || ""
      }`}
    >
      <Head>
        <title>{metadata?.title || METADATA["default"]["title"]}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta name="Keywords" content="Polkadot,explorer,Kusama,Edgeware,search,extrinsic"></meta>
        <meta
          name="description"
          content={metadata?.description || METADATA["default"]["description"]}
        />
        <meta
          property="og:title"
          content={metadata?.title || METADATA["default"]["title"]}
        />
        <meta
          property="og:description"
          content={metadata?.description || METADATA["default"]["description"]}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.subscan.io/favicon.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@subscan_io" />
        <meta name="twitter:title" data-vmid="twitter:title" content={metadata?.title || METADATA["default"]["title"]} />
        <meta name="twitter:image" content="https://www.subscan.io/favicon.png" />
        <meta name="twitter:description" content={metadata?.description || METADATA["default"]["description"]} />
      </Head>
      {children}
    </div>
  );
}
