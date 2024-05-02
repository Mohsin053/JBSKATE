import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

//main Screens
import DashboardLayout from "./screens/DashboardLayout";
import Login from "./screens/MainScreens/Login";
import Players from "./screens/MainScreens/Players";
import Users from "./screens/MainScreens/Users";
import Store from "./screens/MainScreens/Store";
import Badges from "./screens/MainScreens/Badges";

//side Screens
import UserProfile from "./screens/SecondaryScreens/UserProfile";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Players />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/store",
            element: <Store />,
          },
          {
            path: "/badges",
            element: <Badges />,
          },
          {
            path: "/userProfile",
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
