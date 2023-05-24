import React from "react";
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import {
  GenericFallback,
  ServiceWorkerToastContainer,
  RequireIdentity
} from "@dxos/react-appkit";
import { ClientProvider } from "@dxos/react-client";

import { Config, Dynamics, Defaults } from "@dxos/config";
import { useRegisterSW } from "virtual:pwa-register/react";

//components
import { Tasks } from "./components/Tasks";
import { Root } from "./components/Root";


//potentially useless
import { ErrorBoundary } from "./ErrorBoundary";
import { Welcome } from "./Welcome";

import "./main.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireIdentity/>,
    children: [{
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Root /> },
        { path: ':spaceKey', element: <Root /> },
        { path: ':spaceKey/:state', element: <Root /> },
      ]}
    ]
  }
]);

// Dynamics allows configuration to be supplied by the hosting KUBE.
const config = async () => new Config(await Dynamics(), Defaults());

export const App = () => {
  const serviceWorker = useRegisterSW();

  return (
    <ClientProvider config={config} fallback={GenericFallback}>
      <ServiceWorkerToastContainer {...serviceWorker} />
        <RouterProvider router={router} /> 
    </ClientProvider>
  );
};
