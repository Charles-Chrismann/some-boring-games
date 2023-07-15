import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 96px 1fr;
`

const AppHeader = styled.header`
  height: 100%;
`

const AppBody = styled.main`
  height: 100%;
  overflow: scroll;
`

const PaintWithYourFriendsComponent = React.lazy(() => import('./pages/games/PaintWithYourFriends'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'users',
        element: <div>Usera</div>,
      },
      {
        path: 'games',
        children: [
          { path: '', element: <div>GAMES</div> },
          { 
            path: 'PaintWithYourFriends',
            element: 
            <React.Suspense fallback={<div>Loading...</div>}>
              <PaintWithYourFriendsComponent />
            </React.Suspense>
          },
          { path: '*', element: <div>tf ?</div> },
        ]
      }
    ]
  }
])

export function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </AppWrapper>
  )
}

export function Root() {
  async function getApi() {
    let resp = await fetch('/api');
    let data = await resp.json();
    console.log(data);
  }
  getApi();

  return (
    <>
      <AppHeader>Header</AppHeader>
      <AppBody>

        <Outlet />
      </AppBody>

    </>
  );
}

export default App;
