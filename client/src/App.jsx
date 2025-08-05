import { createBrowserRouter, RouterProvider } from "react-router";
import './App.css'
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

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
        path: "/add-grocery",
        element: <AddProductPage/>
      },
      {
        path: "/edit-grocery/:id",
        element: <EditProductPage/>
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