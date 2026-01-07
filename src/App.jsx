import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"

const Home = () => <h1>Home Page</h1>
const Contact = () => <h1>Contact Page</h1>
const Login = () => <h1>Login Page</h1>
const Privacy = () => <h1>Privacy Page</h1>
const Signup = () => <h1>Signup Page</h1>

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
