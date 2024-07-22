import { Route, Routes } from "react-router-dom";
import { Navbar } from './components';
import { GameList, GameForm } from "./components";
export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<GameList />}/>
          <Route path="/create-game" element={<GameForm />}/>
          <Route path="/edit-game/:id" element={<GameForm />}/>
        </Routes>
      </div>
    </div>
  )
}
