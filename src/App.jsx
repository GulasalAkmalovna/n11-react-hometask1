import { useState } from "react";
import Table from "./components/table";
import Home from "./pages/home";
import About from "./pages/about";

export default function App() {
   const [count, setCount] = useState(0);
   const [login, setLogin] = useState(false);
   const [user, setUser] = useState([
      {
         id: 1,
         FirstName: "John",
         LastName: "Doe",
         age: 17,
         city: "New York",
      },
      {
         id: 2,
         FirstName: "Jane",
         LastName: "Doe",
         age: 35,
         city: "New York",
      },
      {
         id: 3,
         FirstName: "Jack",
         LastName: "Smith",
         age: 15,
         city: "New York",
      },
      {
         id: 4,
         FirstName: "Jill",
         LastName: "Wilk",
         age: 44,
         city: "New York",
      },
   ]);

   return (
      <div>
         <div className="container mt-5">
            <Home count={count} />
            <About setCount={setCount} />
         </div>
         <Table user={user} setUser={setUser} />
         <div className="container mt-5">
            <h1>{login ? "welcome" : "login"}</h1>
            <button
               className="btn btn-info mt-5"
               onClick={() => setLogin((login) => !login)}
            >
               {login ? "logout" : "login"}
            </button>
         </div>
      </div>
   );
}
