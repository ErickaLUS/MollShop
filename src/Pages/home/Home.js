import React from 'react'
import FeaturedProducts from '../../Components/featuredProducts/FeaturedProducts'
import Slider from '../../Components/slider/Slider'

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
}

export default Home