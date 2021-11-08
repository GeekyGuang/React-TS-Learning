import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { useContext } from 'react'

interface RobotProp {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProp> = ({ id, name, email }) => {
  const store = useContext(appContext)
  const addToCart = () => {
    if (store.setState) {
      store.setState({
        ...store.state,
        shoppingCartItems: [...store.state.shoppingCartItems, { id, name }],
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{store.state.name}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot
