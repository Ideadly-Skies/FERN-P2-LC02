import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
        <div>-- Main Layout --</div>  
        <Outlet/> 
    </>
  )
}

export default MainLayout