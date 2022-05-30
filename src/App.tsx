import "./App.css";
import CounterApp from "./components/CounterApp";
import useGetData from "./hooks/useGetData";
// import useHooks from "./hooks/useHooks";

function App() {
  const [res, getData, loading, err] = useGetData();

  const getDataHandeler = (): void => {
    getData("https://jsonplaceholder.typicode.com/todos", "link error");
  };
  return (
    <div className="App">
      <h3>This is Simple Typescript</h3>
      <CounterApp />
      <div>
        <button style={{margin: "10px 5px" }} onClick={getDataHandeler}>GetData</button>
        <div>
          {loading && <p>Loding Data......</p>}
          {err && <p>{err}</p>}
          <div>
            {res.map((item) => (
              <div
                key={item.id}
                style={{ border: "1px solid gray", margin: "5px" }}
              >
                <h4>{item.title}</h4>
                <p>Status: &nbsp; {item.completed ? "Completed" : "Incompleted"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
