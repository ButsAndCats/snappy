import * as React from "react"
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

export const App: React.FC = () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
)