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
          <br></br>
          <h1>The Mortals</h1>
          <ul className={styles.clubDetails}>
            <li>
              <span>Who are we?</span> <br></br>&nbsp; Basis China&apos;s inter-school student magazine
            </li>
            <li>
              <span>Who are the leaders?</span> <br></br>&nbsp; Timmy Zhang,BIPH <br></br>&nbsp; Albert Wang,BIPH
            </li>
            <li>
              <span>Who sponsors us?</span> <br></br>&nbsp; Mr. Quirk, head of school <br></br>&nbsp; Mr. Ken, head of operations 
            </li>
            <li>
              <span>What do we publish?</span> <br></br>&nbsp; Editorials <br></br>&nbsp; Poetry <br></br>&nbsp; Essays <br></br>&nbsp; Novella/short stories <br></br>&nbsp; Student columns (yes, your own column) <br></br>&nbsp; “BASIS word of the year” (wonder what it is for 2024?) <br></br>&nbsp; “BASIS quote of the school year” <br></br>&nbsp; Senior letters to future generations (wanna read to-be Stanford student&apos;s writing?) 
            </li>
            <li>
              <span>How do we publish?</span><br></br>&nbsp; Print publications at all Basis China schools <br></br>&nbsp; School-wide parent email Website <br></br>&nbsp; WeChat official account 
            </li>
            
          </ul>
        </div>
        
        <div className={styles.clubImage}>
          
          <Image
            src="./placeholder.png"
            alt="Club Image"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}



