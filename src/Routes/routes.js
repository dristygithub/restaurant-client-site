import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import AddReview from "../Pages/ReviewContainer/AddReview";
import MyReviews from "../Pages/ReviewContainer/MyReviews";
import AddService from "../Pages/AllServices/AddService";
import PrivateRoute from "./PrivateRoute";
import UpdateReview from "../Pages/ReviewContainer/UpdateReview";
import BKash from "../Pages/OrderContainer/BKash";
import Stripe from "../Pages/OrderContainer/Stripe";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () =>
          fetch("https://resturant-site-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://resturant-site-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resturant-site-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://resturant-site-server.vercel.app/allReviews/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

      {
        path: "/bkash/:id",
        element: <BKash></BKash>,
      },
      {
        path: "/stripe/:id",
        element: <Stripe></Stripe>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
