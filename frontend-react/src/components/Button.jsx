import { Link } from 'react-router-dom'

const Button = ({ text, classNm, url }) => {
  return (
    <>
      <Link to={`${url}`} className={`btn ${classNm}`}>{text}</Link>
    </>
  )
}

export default Button