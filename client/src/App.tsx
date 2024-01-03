import "./App.css";

function App() {
  return (
    <>
      <form action="/api/weatherforecast" method="GET">
        <input value="test"></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
