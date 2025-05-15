'use client';

 import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Assuming you'll create this CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wise</title>
        <meta name="description" content="Connecting NGOs and individuals during times of crisis." />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with your favicon */}
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}>WISE</div>
        <ul className={styles.navList}>
          <li>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>become a volunteer</button>
              <div className={styles.dropdownContent}>
                <Link href="/ngo/signup">Sign Up as NGO</Link>
                <Link href="/citsignup">Sign Up as Individual</Link>
              </div>
            </div>
          </li> 
             <li>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>LogIn</button>
             
            </div>
          </li> 
        </ul>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Responding Together, Recovering Stronger.</h1>
            <p className={styles.heroSubtitle}>Connecting NGOs, individuals, and vital resources during critical times.</p>
          </div>
          <div className={styles.heroImage}>
             <img src="https://www.communitiesprepared.org.uk/wp-content/uploads/2024/05/together-brc-mobile.webp" alt="People helping each other" />
          </div>
        </section>

        <div className={styles.mapLinkContainer}>
          <p>See ongoing crises near you:</p>
          <Link href="/mapp" className={styles.mapLink}>
            <span role="img" aria-label="Map">🗺️</span> Explore the Crisis Map
          </Link>
        </div>

        <section className={styles.description}>
          <h2>Understanding and Addressing Crises</h2>
          <p>WISE is a platform built to streamline the process of crisis management. We aim to connect Non-Governmental Organizations (NGOs) with individuals affected by crises, facilitating the efficient delivery of aid and support. Our platform enables real-time information sharing, coordinated response efforts, and empowers individuals to seek and offer help effectively. From natural disasters to humanitarian emergencies, CrisisConnect strives to be the central hub for resilience and recovery.</p>
        </section>

        <div className={styles.addCrisisContainer}>
          <h3>Report a Crisis Event</h3>
          <p>If you are aware of a crisis event that needs attention, please report it here.</p>
          <Link href="/add" className={styles.addCrisisButton}>
            Report Crisis
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CrisisConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}