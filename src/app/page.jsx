import React from 'react'
import styles from "./page.module.scss";
import Contact from '@/components/Contact';

const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}></div>
      <Contact />
    </div>
  )
}

export default page
