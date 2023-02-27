// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotClass: 'slick-dots',
  }

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem details={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
