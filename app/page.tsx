import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.description}>
          <header>
              <ul>
                  <li>
                      <Link href="/" passHref> <a>Home</a></Link>
                  </li>
                  <li>
                      <Link href="/events" passHref> <a>Events</a></Link>
                  </li>
                  <li>
                      <Link href="/about-us" passHref> <a>AboutUs</a></Link>
                  </li>
              </ul>
          </header>
        <p>
          Hello World!
        </p>
      </div>
    </main>
  );
}


