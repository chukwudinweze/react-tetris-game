import classes from "./App.module.css";
import Game from "./components/Game";

function App() {
  return (
    <div className={classes.App}>
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
