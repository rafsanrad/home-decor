import { createBrowserRouter } from "react-router"; //named import
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading...</p>,
    children: [
      {
        index:true,   // path: "/" dileo same hobe.
        element: <Home></Home>,
        loader: ()=>fetch('./furnitureData.json'),
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
  // eitar kaj error element kore dey.
  // {
  //   path:"*", //* mane define path baade onno jekono path e erropage ta show korbe.
  //   element:<ErrorPage></ErrorPage>
  // }
]);
export default router;
