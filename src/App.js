import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Home } from './components/home';
import { ContactUs } from './components/ContactUs';
import { TopNav } from "./components/TopNav";
import { About } from "./components/about";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";


export default function App() {
  return (
    <Router >
      <div>
      <TopNav></TopNav>
        <Switch>
          <Route path="/contacts" element={<ContactUs />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About></About>}>
          </Route>
          <Route path="/" index element={<Home />}>
          </Route>
          <Route path="/experiences" element={<Experiences />}>
          </Route>
          <Route path="/projects" element={<Projects ></Projects>}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}