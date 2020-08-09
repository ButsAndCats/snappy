import * as React from "react"
import * as ReactDOM from "react-dom"

import { App } from "./components/index"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  ReactDOM.render(<App />, root);
})
