import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
//   Añadir al BrowserRouter  para el deploy: basename="/web-react-nextui" 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/web-react-nextui">
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
