import React from 'react'
import './categories.scss'
import  {Link} from 'react-router-dom'
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/12887213/pexels-photo-12887213.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1416377/pexels-photo-1416377.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/12887670/pexels-photo-12887670.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories