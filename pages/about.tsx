import styles from "../styles/About.module.sass";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About project</h1>
      <p>DigiDex is an App built on Next.js to query Digimons.</p>
      <Image
        src="/weregarurumon.png"
        alt="Weregarurumon"
        width="500"
        height="726"
      />
    </div>
  );
}
