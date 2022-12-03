import {Canvas} from "@react-three/fiber";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    // https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#setting-up-the-canvas
    <div className="App">
      <header>Header</header>
      <main>
        <div id="canvas-container">
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="blue" position={[0, 0, 5]} />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Canvas>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
