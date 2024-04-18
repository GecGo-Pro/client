import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import theme from "@/theme/themeConfig";
import { CookiesProvider } from "next-client-cookies/server";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </ConfigProvider>
);

export default App;
