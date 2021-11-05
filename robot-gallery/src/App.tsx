import React, { useState } from 'react'
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import { ShoppingCart } from './components/ShoppingCart'

interface Props {}

interface State {
  robotGallery: any[]
  count: number
}

const App: React.FC = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </button>
      {/* <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div> */}
    </div>
  )
}

export default App
