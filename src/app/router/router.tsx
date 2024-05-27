import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {Suspense} from 'react';
import {Main} from 'src/pages/main';
import {LazyAbout} from 'src/pages/about';
import {LazyShop} from 'src/pages/shop';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'Loading'}><LazyAbout/></Suspense>,
      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading'}><LazyShop/></Suspense>,
      }
    ]
  },
]);

export const Router = () => {
  return <RouterProvider router={router}/>
}