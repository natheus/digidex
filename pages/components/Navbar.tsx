import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.sass";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/digivice.png" width="30" height="30" alt="Digivice" />
        <h1>DigiDex</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
