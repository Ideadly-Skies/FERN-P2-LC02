import { createBrowserRouter, RouterProvider } from "react-router";
import './App.css'
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/products/add",
        element: <AddProductPage/>
      }
    ]
  },
]);

function App() {
    
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App