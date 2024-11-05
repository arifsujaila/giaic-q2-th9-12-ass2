import Link from "next/link"
import React from 'react'
import styles from './about.module.css'
import Header from "../component/header/header"
import Footer from "../component/header/footer/footer"

const page = () => {
  return (
    <body className={styles.pagecolor} >
      <div>
        <Header></Header>
          <h1 className={styles.font}>I am a Student of GIAIC</h1>
      </div>
        <Footer></Footer>
    </body>
  )
}

export default page
