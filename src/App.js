import './App.scss';
import {Route, Routes, Navigate} from "react-router-dom";
import {LoginPage} from "./components/LoginPage"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/*" element={<Navigate to="/login"/>}/>
            {/*<Route to="/register"/>*/}
        </Routes>
    </div>
  );
}

export default App;
