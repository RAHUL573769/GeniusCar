import Banner from "../HomePage/Banner";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [{ path: "/", element: <Banner></Banner> }]
  }
]);

export default router;
