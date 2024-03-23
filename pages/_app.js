import { ThemeProvider, GlobalStyle } from '@react95/core';
import { Analytics } from "@vercel/analytics/react"
import './index.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
