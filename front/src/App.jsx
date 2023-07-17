import "./App.scss";
import { ListPictures } from "./components/list_pictures/ListPictures";
import { NavBar } from "./components/navbar/NavBar";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <main>
        <ListPictures />
      </main> */}
      <Toaster />
    </div>
  );
}

export default App;
