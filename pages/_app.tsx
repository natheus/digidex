import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "./components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
