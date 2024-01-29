
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import About from './About/About'
import Inventory from './Inventory/Inventory'
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'
import { productsAndCartLoader } from './Loaders/productsAndCartLoader'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'






function App() {
  const router = createBrowserRouter([
    {path : '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        loader:  ()=> fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: 'order',
        loader : productsAndCartLoader, 
        element: <Order></Order>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path : 'about',
        element : <About></About>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path : 'signup',
        element : <SignUp></SignUp>
      }
    ]
  },

 
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
