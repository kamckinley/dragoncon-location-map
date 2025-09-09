import './App.css';
import { nodes } from "./data/nodes";
import { Building } from "./data/building";
import React, { useState } from 'react';

function App() {
   const [startBuilding, setStartBuilding] = useState("");
   const [startNode, setStartNode] = useState("");
   const [endBuilding, setEndBuilding] = useState("");
   const [endNode, setEndNode] = useState("");
   const [route, setRoute] = useState(null);
  //  const startRooms = nodes.filter(n => n.building === startBuilding);

  const handleRoute = () => {
    if (!startNode || !endNode) {
      alert("Please select both start and end nodes");
      return;
    }
    console.log("start:", startKey, "end:", endKey);
    const start = nodes[startNode];
    const end = nodes[endNode];
    const path = computePath(start, end);
    setRoute(path);
  };

  const computePath = () => {
    //TODO next
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="DragonConFootprint.png" className="App-logo" alt="logo" />
        <h1>
          DragonCon Locator Map
        </h1>
        <p>
          Total nodes: {Object.keys(nodes).length} 
        </p>
        <div>
          <label>
            <select value={startBuilding} onChange={(e) => setStartBuilding(e.target.value)}>
              <option value=""> Select Start Building</option>
              {Object.keys(Building).map((key) => (
                <option key={key} value={key}>{Building[key]}</option>
              ))}
            </select>
          </label>

          {startBuilding && (
            <label>
              <select value={startNode} onChange={(e) => setStartNode(e.target.value)}>
                <option value=""> Select Start Room</option>
                {Object.keys(nodes).map((key) => (
                  <option key={key} value={key}>{nodes[key].name}</option>
                ))}
              </select>
            </label>
          )}

        </div>
        <div>
          <label>
            <select value={endBuilding} onChange={(e) => setEndBuilding(e.target.value)}>
              <option value=""> Select End Building</option>
              {Object.keys(Building).map((key) => (
                <option key={key} value={key}>{Building[key]}</option>
              ))}
            </select>
          </label>

          {endBuilding && (
            <label>
              <select value={endNode} onChange={(e) => setEndNode(e.target.value)}>
                <option value=""> Select End Location</option>
                {Object.keys(nodes).map((key) => (
                  <option key={key} value={key}>{nodes[key].name}</option>
                ))}
              </select>
            </label>
        )}
        </div>

        <button
          onClick={handleRoute}
        >
          Route
        </button>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
