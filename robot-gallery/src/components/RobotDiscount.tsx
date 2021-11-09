import styles from './Robot.module.css'
import { RobotProp } from './Robot'
import { withAddToCart } from './AddToCart'

const RobotDiscount: React.FC<RobotProp> = ({
  id,
  name,
  email,
  store,
  addToCart,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{store.state.name}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(RobotDiscount)
