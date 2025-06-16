'use client';

import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css'; // Assuming you'll create this CSS module
import { useEffect, useState } from 'react';
import { auth } from '/lib/firebase'; // adjust path based on your folder structure
import { onAuthStateChanged, signOut } from 'firebase/auth';
 export default function Home() {

  const [userEmail, setUserEmail] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setUserEmail(null);
    setDropdownOpen(false);
  };



    const [loading, setLoading] = useState(true);
  
     const [userRole, setUserRole] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
     const [error, setError] = useState(null);
  
    // Track authentication state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserEmail(user.email);
        } else {
          setUserEmail(null);
          setUserRole(null);
          setUserProfile(null);
          setLoading(false);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    // Fetch user role and profile when email is available
    useEffect(() => {
      const fetchUserRole = async () => {
        if (!userEmail) return;
  
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch(`/api/get-user-role?email=${encodeURIComponent(userEmail)}`);
          const data = await response.json();
  
          if (response.ok) {
            setUserRole(data.role);
            setUserProfile(data);
          } else {
            setError(data.error || 'Failed to fetch user role');
          }
        } catch (err) {
          console.error('Error fetching user role:', err);
          setError('Error connecting to server. Please try again.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserRole();
    }, [userEmail]);
  
    // Role-based permission checks
    const isVolunteer = () => userRole === 'volunteer';
    const isEmployee = () => userRole === 'employee';



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
          {userEmail ? (
            <li className={styles.dropdown}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={styles.dropbtn}
              >
                {userEmail}
              </button>
              {dropdownOpen && (
                <div className={styles.dropdownContent}>
                  <button onClick={handleSignOut} className={styles.signOutBtn}>
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Become a Volunteer</button>
                  <div className={styles.dropdownContent}>
                    <Link href="/ngosignup">Sign Up as NGO</Link>
                    <Link href="/citsignup">Sign Up as Individual</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.dropdown}>  <Link href="/login">
                  <button className={styles.dropbtn}>LogIn</button>
                </Link>
                </div>
              </li>
            </>
          )}
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
 {isEmployee() &&  
        <div className={styles.addCrisisContainer}>
          <h3>Report a Crisis Event</h3>
          <p>If you are aware of a crisis event that needs attention, please report it here.</p>
          <Link href="/addcrisis" className={styles.addCrisisButton}>
            Report Crisis
          </Link>
        </div> }

         {isVolunteer() &&  
        <div className={styles.addCrisisContainer}>
          <h3>see services you are enrolled in</h3>
          <p>Ihere you can check all pending - ongoing and finished services you are enrolled in</p>
          <Link href="VolunteerServicesDashboard" className={styles.addCrisisButton}>
            Check Services
          </Link>
        </div> }


      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CrisisConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}