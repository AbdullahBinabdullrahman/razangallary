import React from "react";
import Layout from "../components/layout";
import Collections from "../components/collections";
import { Cairo } from "next/font/google";
import "../app/globals.css";
const cairo = Cairo({
  weight: "400",
  subsets: ["latin"],
});

const IndexPage = () => {
  return (
    <div className={cairo.className}>
      <Layout>
        <Collections />
      </Layout>
    </div>
  );
};

export default IndexPage;
