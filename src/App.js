import "./App.css";
import { createBrowserRouter,
   RouterProvider, Outlet
 } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/products/Products";
import Product from "./Pages/product/Product";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import './app.scss'
const Layout=()=>{
  return(<div className="app">
<Navbar/>
<Outlet/>
<Footer/>

</div>) 
    
  
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
