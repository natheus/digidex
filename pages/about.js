import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>DigiDex é um App construído em Next.js para consultar Digimons.</p>
      <Image
        src="/weregarurumon.png"
        alt="Weregarurumon"
        width="500"
        height="726"
      />
    </div>
  );
}
