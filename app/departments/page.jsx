import Navbar from "../(components)/Navbar";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../(components)/Footer";

export default function MortalsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.clubSection}>
        <div className={styles.clubText}>
          <h1>Our Departments</h1>
          
          <ul className={styles.clubDetails}>
            <li>
              <span>Editing Department</span> <br></br>&nbsp; -Review submissions, make grammatical edits, create themes for each magazine section
            </li>
            <li>
              <span>Designing Department</span> <br></br>&nbsp; -Make stylistic decisions. Use Canva to design our magazine
            </li>
            <li>
              <span>Publicity Department</span> <br></br>&nbsp; -Refurbish our website on Wix <br></br>&nbsp; -Design article layout on Wechat account
            </li>
            <li>
              <span>Columns</span> <br></br>&nbsp; -Commit to writing newsletter articles <br></br>&nbsp; -Publish them on a distinct page for each issue
            </li>
            
            
          </ul>
        </div>
        
        <div className={styles.clubImage}>
          
          <Image
            src="./organization.png"
            alt="Club Image"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}



