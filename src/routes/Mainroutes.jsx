import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Login from "../component/login/Login";
import Regestration from "../component/regestration/Regestration";


const Mainroutes = createBrowserRouter([
{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[
        {
        path:"/Login",
        element:<Login></Login>
        },
        {
         path:"/Regestration",
         element:<Regestration></Regestration>   
        }
    ]
}
])

export default Mainroutes;