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
          <h1>Join us to become a:</h1>
          <br></br>
          <ul className={styles.clubDetails}>
            <li>
              <span>Editor Manager:</span> <br></br>&nbsp; -Administer and make major editing decisions on our magazine.
            </li>
            <li>
              <span>Design Manager:</span> <br></br>&nbsp; -Administer and make major designing decisions on our magazine. 
            </li>
            <li>
              <span>Website Manager:</span> <br></br>&nbsp; -Administer and make major designing decisions on our website. 
            </li>
            <li>
              <span>Column/Section Editor:</span> <br></br>&nbsp; -Review submissions, make grammatical edits, create themes for each magazine section.
            </li>
            <li>
              <span>Column/Section Designer:</span> <br></br>&nbsp; -Make stylistic decisions. Use Canva to design our magazine.
            </li>
            <li>
              <span>公众号 Editor & Designer:</span> <br></br>&nbsp; - Design & Refurbish our website on 公众号
            </li>
            <li>
              <span>Columnist:</span> <br></br>&nbsp; -Commit to writing one newsletter article per week. 
            </li>
            <li>
              <span>
              Club Leader Patron:</span> <br></br>&nbsp; -Advocate your club’s products on our magazine!

            </li>
          </ul>
        </div>
        
        <div className={styles.clubImage}>
          
          <Image
            src="/poster.png"
            alt="Club Image"
            width={500}
            height={650}
            className={styles.image}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}



