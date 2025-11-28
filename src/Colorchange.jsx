import React, { useState } from "react";

function Colorchange() {   // ✅ must be Colorchange, not Colourchange
  const [color, setColor] = useState("lightblue");
  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Color Changer App</h1>
      <p>Click a button to change the background color</p>
      <div>
        {colors.map((c, index) => (
          <button
            key={index}
            onClick={() => setColor(c)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: c,
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Colorchange;   // ✅ must match function name
