import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DrummingPage from './pages/DrummingPage';
import HomePage from './pages/HomePage';
import RouteLayout from './pages/RouteLayout';

function App() {


  const router = createBrowserRouter([
    {path: '/', element: <RouteLayout />, children: [
      
      {index: true, element: <HomePage />},
      {path: 'drumming', element: <DrummingPage />},
    ]}
  ])
  return (
    <RouterProvider router={router} /> 
   
  );
}

export default App;
