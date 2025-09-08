import './App.css';

function App() {
  const [startNode, setStartNode] = useState("");
  const [endNode, setEndNode] = useState("");
  const [routeResult, setRouteResult] = useState(null);
  const handleRoute = () => {
    if (!startNode || !endNode) {
      alert("Please select both start and end nodes");
      return;
    }
    const start = nodes[startNode];
    const end = nodes[endNode];
    setRouteResult({
      start: start.name,
      end: end.name,
      startConnections: start.connections.map((c) => nodes[c].name),
      endConnections: end.connections.map((c) => nodes[c].name),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
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
