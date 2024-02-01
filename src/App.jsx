import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages'
import FetchData from "./components/FetchData";
const router = createBrowserRouter([
  {
path:'/',
element: <HomeLayout/>,
children:[
  {
    index:true,
    element: <Landing/>
    
      },
       {
        path:'/cocktail',
        element: <Cocktail/>
        
          },
          {
            path:'/newsletter',
            element: <FetchData cat ="collection2"/>
            
              },
              {
                path:'/about',
                element: <FetchData cat ="Collection3"/>
                
                  },
]
  },
 
]) 

const App = () => {
  return <RouterProvider router ={router}/>
};
export default App;
