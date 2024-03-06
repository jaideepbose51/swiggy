import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";
import React from "react";
function App()
{
  return (
  <React.Fragment>
    <Header />
    <AppRoutes />
  </React.Fragment>
  );
}
export default App;