import Link from "next/link"
import React from 'react'
import styles from './header.module.css'

const Header= () => {
  return (
    <div>
      <span className={styles.nevbar}> <h3>Sujaila & co</h3>
      
          <ul className={styles.nevbar1}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contect">Contect Us</Link>
            </li>
          </ul></span>
         
         </div>
  )
}
export default Header