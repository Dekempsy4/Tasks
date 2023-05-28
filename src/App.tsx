import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  GenericFallback,
} from "@dxos/react-appkit";
import { ClientProvider } from "@dxos/react-client";

import { Config, Dynamics, Defaults } from "@dxos/config";

//componentss
import { Root } from "./components/Root";



import "./main.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Root /> },
      { path: ':spaces', element: <Root /> },
      { path: ':spaces/:spaceKey', element: <Root /> },
    ]}
]);

// Dynamics allows configuration to be supplied by the hosting KUBE.
const config = async () => new Config(await Dynamics(), Defaults());

export const App = () => {

  return (
    <ClientProvider config={config} fallback={GenericFallback}>
      <RouterProvider router={router} /> 
    </ClientProvider>
  );
};
