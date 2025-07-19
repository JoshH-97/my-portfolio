import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Education = lazy(() => import("./pages/Education"));

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="work" element={<Work />} />
              <Route path="contact" element={<Contact />} />
              <Route path="education" element={<Education />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
