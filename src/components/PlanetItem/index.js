// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {imageUrl, description, name} = details

  return (
    <div className="item">
      <img src={imageUrl} alt={`planet  ${name}`} className="img" />
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
