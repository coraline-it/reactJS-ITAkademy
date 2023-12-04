import React from 'react';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './view/TodoList';
import Home from './view/Home';
import { Weather } from './view/Weather';

const rootElement =
  document.getElementById('root');
const root =
  createRoot(rootElement);

const router = createBrowserRouter(
  [  {
    path: '/',
    element: <Home />
    },
    {
    path:'/todolist',
    element: <TodoList />
    },
    {
      path:'/weather',
      element: <Weather />
      },
  ]
)


root.render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();