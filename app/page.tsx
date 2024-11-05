
import styles from "./page.module.css";
import Header from "./component/header/header";
import Footer from "./component/header/footer/footer";

export default function Home() {
  return (
  <body className={styles.pagecolor}>
    <div >
      <Header></Header>
       <div>
        <h1 className={styles.font}>Welcome to our company</h1>
       </div>
    </div>
      <Footer></Footer>
  </body>
  );
}
