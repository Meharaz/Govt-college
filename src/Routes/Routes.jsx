import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Academic from "../Pages/Academic/Academic";
import Admission from "../Pages/Admission/Admission";
import Departments from "../Pages/Departments/Departments";
import Notice from "../Pages/Notice/Notice";
import ExecutiveMembers from "../Pages/ExecutiveMembers/ExecutiveMembers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/academic",
          element: <Academic/>,
        },
        {
          path: "/admission",
          element: <Admission/>,
        },
        {
          path: "/departments",
          element: <Departments/>,
        },
        {
          path: "/notice",
          element: <Notice/>,
        },
        {
          path: "/ecmembers",
          element: <ExecutiveMembers/>,
        },
      ],
    },
  ]);