import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import ReactEditor from "./ReactEditor"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <ReactEditor />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
