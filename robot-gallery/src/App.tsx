import React, { useEffect, useState } from 'react'
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
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setRobotGallery(data)
      } catch (e: any) {
        setErrorMsg(e.message)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

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
      <ShoppingCart />
      {(!errorMsg || errorMsg !== '') && <div>{errorMsg}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r: any) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        <div>loading 数据加载中...</div>
      )}
    </div>
  )
}

export default App
