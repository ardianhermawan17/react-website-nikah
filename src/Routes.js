import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import LoginView from "./views/auth/LoginView";

// LAYOUT
import MainLayout from "./layouts/MainLayout";
import FormLayout from "./layouts/FormLayout";
import LoadingScreen from "./components/LoadingScreen";
//Guard
import AccountGuard from "./components/Guard/AccountGuard";

const routesConfig = [
  {
    exact: true,
    path: '/',
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to="/masuk" />,
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/Error404View'))
  },
  {
    path: '/form',
    layout: MainLayout,
    guard: AccountGuard,
    routes: [
      {
        exact: true,
        path: '/form/main',
        component: lazy(() => import('src/views/pages/MainFormView'))
      },
      {
        exact: true,
        path: '/form/selesai',
        component: lazy(() => import('src/views/pages/FormSelesaiView'))
      },
      {
        // eslint-disable-next-line react/display-name
        component: () => <Redirect to="/404" />
      },
    ]
  },
  {
    path: '/form-nikah',
    layout: FormLayout,
    guard: AccountGuard,
    routes: [
      {
        exact: true,
        path: '/form-nikah/n1',
        component: lazy(() => import('src/views/pages/FormNikah/FormN1'))
      },
      {
        exact: true,
        path: '/form-nikah/n2',
        component: lazy(() => import('src/views/pages/FormNikah/FormN2'))
      },
      {
        exact: true,
        path: '/form-nikah/n3',
        component: lazy(() => import('src/views/pages/FormNikah/FormN3'))
      },
      {
        exact: true,
        path: '/form-nikah/n4',
        component: lazy(() => import('src/views/pages/FormNikah/FormN4'))
      },
      {
        // eslint-disable-next-line react/display-name
        component: () => <Redirect to="/404" />
      },
    ]
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/masuk',
        component: LoginView
      },
      {
        exact: true,
        path: '/daftar',
        component: lazy(() => import('src/views/auth/RegisterView'))
      },
      {
        // eslint-disable-next-line react/display-name
        component: () => <Redirect to="/404" />
      },
    ],
  },
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {/* eslint-disable-next-line array-callback-return */}
      {routes.map((route) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={JSON.stringify(route)}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes
                      ? renderRoutes(route.routes)
                      : <Component {...props} />}
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
    </Switch>
  </Suspense>
) : null);

const Routes = () => renderRoutes(routesConfig)

export default Routes;
