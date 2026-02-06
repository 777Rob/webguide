import React, { useState } from "react"
// import "./style.css" // Commented out to debug

function Popup() {
  console.log("POPUP COMPONENT MOUNTED")
  return (
    <div style={{ padding: 20, background: "yellow", color: "black" }}>
      <h1>WebGuide Works!</h1>
      <p>If you see this, basic React is working.</p>
    </div>
  )
}

export default Popup
