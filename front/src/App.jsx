import "./App.scss";
import { ListPictures } from "./components/list_pictures/ListPictures";
import { NavBar } from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ListPictures />
      </main>
    </div>
  );
}

export default App;
