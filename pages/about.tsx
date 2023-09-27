import styles from "../styles/about.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About project</h1>
      <p>DigiDex v2 is an App built on Next.js to query Digimons.</p>
      <Image
        src="/weregarurumon.png"
        alt="Weregarurumon"
        width="500"
        height="726"
      />
      <p>
        Thank you{" "}
        <a href="https://github.com/heyshadowsmith" target="_blank">
          Shadow Smith
        </a>{" "}
        for API in v1 site:{" "}
        <a href="https://digimon-api.vercel.app/">
          https://digimon-api.vercel.app/
        </a>
        <br />
        Thank you{" "}
        <a href="https://github.com/Vinicius-Brito-Costa" target="_blank">
          Vinicius Brito Costa
        </a>{" "}
        for API in v2 site:{" "}
        <a href="https://digimon-api.com/">https://digimon-api.com/</a>
        <br />
        Digimon and other media relating to the franchise are registered
        trademarks of Bandai.
      </p>
    </div>
  );
}
