// Write your code here.
import './index.css'

const Card = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <div className={`${className} card-design`}>
      <h1 className="heading">{title}</h1>
      <p className="desc">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image-design" alt={`${title}-img`} />
      </div>
    </div>
  )
}
export default Card
