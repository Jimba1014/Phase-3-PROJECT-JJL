import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [infos, setInfos] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("localhost:9292")
    .then((r) => r.json())
    .then(data => setShows(data))
  }, []);

}

export default App;
