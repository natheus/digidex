import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>DigiDex v2 by <a className={styles.footerName} href="https://github.com/natheus/" target="_blank"> Natheus</a></span> &copy; 2023
      </p>
    </footer>
  );
}
