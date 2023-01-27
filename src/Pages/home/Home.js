import React from 'react'
import FeaturedProducts from '../../Components/featuredProducts/FeaturedProducts'
import Slider from '../../Components/slider/Slider'
import Categories from '../../Components/categories/Categories';
function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
}

export default Home