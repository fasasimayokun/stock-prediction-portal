
const Button = ({ text, classNm }) => {
  return (
    <>
      <a className={`btn ${classNm}`}>{text}</a>
    </>
  )
}

export default Button