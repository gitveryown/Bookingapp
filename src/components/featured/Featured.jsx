import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/689726.jpg?k=f8d1c8291c4fb3bc8f05cf29871d4b6d020c835dbf0b36ade3b66783bcbe6f76&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Atlanta,Ga</h1>
        <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/968315.jpg?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Barcelona, Spain</h1>
        <h1>456 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/693538.jpg?k=a0f59068e765bf5c423e84eb83ccc8ba1bf30eed3b89d5fbfa8c9d17316cdffa&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Cala Anguila, Spain</h1>
        <h1>789 properties</h1>
        </div>
      </div>
    </div>
  )
}

export default Featured




