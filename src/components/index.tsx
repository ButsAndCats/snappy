import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  IndexTemplate,
  CollectionsTemplate,
  CollectionTemplate
} from "./templates/index";

const routes = [
  {
    path: "/",
    exact: true,
    children: () => (
      <React.Suspense fallback={<p>Loading</p>}>
        <IndexTemplate />
      </React.Suspense>
    )
  },
  {
    path: "/collections",
    exact: true,
    children: () => (
      <React.Suspense fallback={<p>Loading</p>}>
        <CollectionsTemplate />
      </React.Suspense>
    )
  },
  {
    path: "/collections/:handle",
    exact: true,
    children: () => (
      <React.Suspense fallback={<p>Loading</p>}>
        <CollectionTemplate />
      </React.Suspense>
    )
  }
]

export const App: React.FC = () => (
  <Router>
    <header>
      <Link to="/">Home</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/collections/all">All</Link>
    </header>
    <main>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            {...route}
          />
        ))}
      </Switch>
    </main>
    <footer>
      Footer
    </footer>
  </Router>
)