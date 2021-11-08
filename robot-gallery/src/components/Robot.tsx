import styles from './Robot.module.css'
import { appContext } from '../index'

interface RobotProp {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProp> = ({ id, name, email }) => {
  return (
    <appContext.Consumer>
      {(value) => (
        <div className={styles.cardContainer}>
          <img src={`https://robohash.org/${id}`} alt="robot" />
          <h2>{name}</h2>
          <p>{email}</p>
          <p>作者：{value.name}</p>
        </div>
      )}
    </appContext.Consumer>
  )
}

export default Robot
