import React from "react";
import Document, { Html, Head, Main, NextScript, } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
          <Head>
              <meta property="og:type" content="website" />
              <meta property="og:title" content="온누리교회 임직 감사 예배에 초대합니다" />
              <meta property="og:image" content="https://raw.githubusercontent.com/ShinJongUng/OnnuriInvitation/main/public/images/og-image.png" />
              <meta property="og:image:width" content="1200"/>
              <meta property="og:image:height" content="630"/>
            <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css" />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => materialSheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>
  };
};