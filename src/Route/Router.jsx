import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import ErrorPage from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/category-details/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);
export default router;
