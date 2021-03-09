import utils from "../utils.js"

const StarDisplay = () => {
  const stars = utils.random(1,9)
  return(
    utils.range(1, stars).map(starId => 
      <div key={starId} className="star"></div>
    )
  )
}

export default StarDisplay