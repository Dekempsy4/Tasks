import React from "react";
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
import { TodoList } from "./components/TodoList";

//potentially useless
import { ErrorBoundary } from "./ErrorBoundary";
import { Welcome } from "./Welcome";

import "./main.css";

// Dynamics allows configuration to be supplied by the hosting KUBE.
const config = async () => new Config(await Dynamics(), Defaults());

export const App = () => {
  const serviceWorker = useRegisterSW();
  return (
    <ClientProvider config={config} fallback={GenericFallback}>
      {/* <ServiceWorkerToastContainer {...serviceWorker} /> */}
      <TodoList />
    </ClientProvider>
  );
};
