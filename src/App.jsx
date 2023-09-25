import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Forms from "./pages/Forms"
import CreateForm from "./pages/CreateForm"


function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/registration" element={ <Registration/> } />
      <Route path="/forms" element={ <Forms/> } />
      <Route path="/create-form" element={ <CreateForm/> } />
    </Routes>
  )
}

export default App

