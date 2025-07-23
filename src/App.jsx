import "./App.css"
import Environment  from "./components/Environment/Environment.jsx"
import Person from "./components/Person/Person.jsx";
import Case from "./components/Case/Case.jsx"

const App = () => {
    return (
        <div className="inventory-container">
            <div className="container__exit" >
                <p>Закрыть</p>
                <button>ESC</button>
            </div>

            <Environment />
            <Person />
            <Case />
        </div>
    )
}

export default App