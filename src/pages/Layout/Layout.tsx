import React from 'react'
import Header from './Header'
import styles from './Layout.module.scss'

export default function Layout(props: {
  children: React.ReactChild | React.ReactChild[]
}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
