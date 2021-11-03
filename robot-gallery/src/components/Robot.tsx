interface RobotProp {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProp> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot
