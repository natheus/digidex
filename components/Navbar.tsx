import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/digivice.png" width="30" height="30" alt="Digivice" />
        <h1>DigiDex</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
