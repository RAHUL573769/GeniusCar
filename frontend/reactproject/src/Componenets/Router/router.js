import Banner from "../HomePage/Banner";
import HomePage from "../HomePage/HomePage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [{ path: "/", element: <HomePage></HomePage> }]
  }
]);

export default router;
