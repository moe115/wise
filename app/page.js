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
          <li>
            <Link href="/Volunteers" className={styles.navLink}>
              Volunteers
            </Link>
          </li>
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

        <section className={styles.reputationSection}>
          <h2>How Volunteer Reputation Scoring Works</h2>
          <div className={styles.reputationContent}>
            <p className={styles.reputationIntro}>
              Our reputation system rewards volunteers for their active participation and contribution to crisis response efforts. 
              Your reputation score reflects your commitment to helping communities in need.
            </p>
            
            <div className={styles.scoreBreakdown}>
              <h3>Ways to Earn Reputation Points:</h3>
              <div className={styles.scoreGrid}>
                <div className={styles.scoreItem}>
                  <div className={styles.scoreIcon}>📝</div>
                  <div className={styles.scoreDetails}>
                    <h4>Submit a Testimony</h4>
                    <p className={styles.points}>+0.5 points</p>
                    <p>Share your experience and provide valuable insights about crisis situations</p>
                  </div>
                </div>
                
                <div className={styles.scoreItem}>
                  <div className={styles.scoreIcon}>🤝</div>
                  <div className={styles.scoreDetails}>
                    <h4>Enroll in a Service</h4>
                    <p className={styles.points}>+1.0 point</p>
                    <p>Show your commitment by volunteering for crisis response services</p>
                  </div>
                </div>
                
                <div className={styles.scoreItem}>
                  <div className={styles.scoreIcon}>✅</div>
                  <div className={styles.scoreDetails}>
                    <h4>Complete a Service</h4>
                    <p className={styles.points}>+1.5 points</p>
                    <p>Successfully finish your volunteer service and make a real impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.reputationBenefits}>
              <h3>Benefits of Higher Reputation:</h3>
              <ul>
                <li>🌟 Enhanced credibility within the volunteer community</li>
                <li>🏆 Recognition for your contributions to crisis response</li>
                <li>📈 Priority consideration for specialized volunteer opportunities</li>
                <li>🎯 Access to advanced training and leadership roles</li>
              </ul>
            </div>
            
            <div className={styles.reputationCTA}>
              <p>Ready to start building your reputation? <Link href="/citsignup" className={styles.reputationLink}>Join as a volunteer</Link> and begin making a difference in your community!</p>
            </div>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 CrisisConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}