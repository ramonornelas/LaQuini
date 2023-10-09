import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch("/api/message")).json();
      setData(text);
    })();
  });

  return (
    <div>
      <h1>Datos JSON de API Local</h1>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
