import { RouterProvider } from "react-router-dom";
import Mainroutes from "./routes/Mainroutes";


const App = () => {
  return (
    <>
      <RouterProvider router={Mainroutes}></RouterProvider>
    </>
  );
};

export default App;