import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ResetDialog,
  GenericFallback,
  ServiceWorkerToastContainer,
  ThemeProvider,
  appkitTranslations,
} from "@dxos/react-appkit";
import { ClientProvider } from "@dxos/react-client";

import { Config, Dynamics, Defaults } from "@dxos/config";
import { useRegisterSW } from "virtual:pwa-register/react";

//components
import { Tasks } from "./components/Tasks";
import { SpacesBar } from "./components/SpacesBar";


//potentially useless
import { ErrorBoundary } from "./ErrorBoundary";
import { Welcome } from "./Welcome";

import "./main.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SpacesBar />,
    children: [
      { path: '/', element: <Tasks /> },
      { path: ':spaceKey', element: <Tasks /> },
      { path: ':spaceKey/:state', element: <Tasks /> },
    ],
  },
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
