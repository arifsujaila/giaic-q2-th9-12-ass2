import React from 'react'
import styles from './contect.module.css'
import Header from "../component/header/header"
import Footer from "../component/header/footer/footer"

const page = () => {
  return (
    <body className={styles.pagecolor} >
        <div>
          <Header></Header>
            <h1 className={styles.font}>email : arifsujaila2@gmail.com</h1>
        </div>
          <Footer></Footer>
    </body>
  )
}

export default page
