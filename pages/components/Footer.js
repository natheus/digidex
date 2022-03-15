import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>DigiDex by <a className={styles.footerName} href="https://github.com/natheus/" target="_blank"> Natheus</a></span> &copy; 2022
      </p>
    </footer>
  );
}
