import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Base Application'}</p>
      <p className={slogan}>{'Not much functionality'}</p>
    </div>
  )
}
