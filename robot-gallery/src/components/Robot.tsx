import styles from './Robot.module.css'
import { appContext } from '../index'
import { useContext } from 'react'

interface RobotProp {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProp> = ({ id, name, email }) => {
  const user = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{user.name}</p>
    </div>
  )
}

export default Robot
