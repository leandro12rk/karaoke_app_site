import React, { useContext } from "react";
import NavBar from "./utils/NavBar";
import PlayerBar from "./utils/PlayerBar";
import Home from "./pages/Home";
import Header from "./utils/Header";
import AboutUs from "./pages/AboutUs";
import MissingPage from "./pages/MissingPage";
import Settings from "./pages/Settings";
import { LanguajeContext } from "./context/LanguageContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function rutas() {
  const ruta = [
    {
      ruta: { es: "build/es", en: "build/en" },
      pagina: <Home />,
    },
    {
      ruta: { es: "es/sobre-nosotros", en: "en/about-us" },
      pagina: <AboutUs />,
    },
    // {
    //   ruta: { es: "es/:categoria", en: "en/:category" },
    //   pagina: ,
    // },
    {
      ruta: { es: "es/:categoria", en: "en/:category" },
      pagina: <Settings />,
    },
    // {
    //   ruta: { es: "es/:categoria/:music", en: "en/:category/:music" },
    //   pagina: ,
    // },
    {
      /* Ruta para manejar cualquier otra ruta no definida */
      ruta: { es: "*", en: "*" },
      pagina: <MissingPage />,
    },
  ];
  return ruta;
}
function App() {
  const { idioma, toggleIdioma } = useContext(LanguajeContext);

  return (
    <div className="App">
      <div className="container">
        <div>
          <NavBar></NavBar>
          <div className="body">
            <Header></Header>
            <div className="container-body">
              <BrowserRouter>
                <Routes>
                  <Route
                    path={"build/"}
                    element={<Navigate to={`build/${idioma}`} replace />}
                  />

                  {/* Revisar las rutas definidas en el array */}
                  {/* {rutas().map((data, index) => (
                    <Route
                      path={data.ruta[idioma]}
                      element={data.pagina}
                      key={index}
                    />
                  ))} */}
                </Routes>
              </BrowserRouter>
              <Home></Home>
            </div>
          </div>
        </div>
        <PlayerBar></PlayerBar>
      </div>
    </div>
  );
}

export default App;
