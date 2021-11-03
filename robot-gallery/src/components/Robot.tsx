import styles from './Robot.module.css'

interface RobotProp {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProp> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot
