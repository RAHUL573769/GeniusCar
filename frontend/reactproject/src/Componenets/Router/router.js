import CheckOut from "../CheckOut/CheckOut";
import Banner from "../HomePage/Banner";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";

import SignUp from "../SignUp/SignUp";
import Private from "./../PrivateAuth/Private";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },

      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/orders",
        element: (
          <Private>
            {" "}
            <Orders></Orders>
          </Private>
        )
      },
      {
        path: "/checkout/:id",
        element: (
          <Private>
            {" "}
            <CheckOut></CheckOut>
          </Private>
        ),

        loader: ({ params }) => {
          return `https://backend-rudrarahul77-gmailcom.vercel.app/services/${params.id}`;
        }
      }
    ]
  }
]);

export default router;
