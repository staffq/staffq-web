import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

//home page - ss

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Staffq</title>
        <meta name="description" content="Staffq" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid px-5">
        <div className="row p-0 vh-100">
          <div className="col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
            <img src="/images/group.png" width="100%" alt="staffq" />
          </div>
          <div className="col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
            <img src="/images/staffqgif.gif" width="100%" alt="staffq" />
          </div>
        </div>
      </div>
    </div>
  );
}
