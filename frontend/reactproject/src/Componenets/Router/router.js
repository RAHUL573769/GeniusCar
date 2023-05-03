import Banner from "../HomePage/Banner";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },

      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> }
    ]
  }
]);

export default router;
