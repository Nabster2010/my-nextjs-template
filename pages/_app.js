import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "../hooks/useTranslation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { dir } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
