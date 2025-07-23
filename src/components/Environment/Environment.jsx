import "./Environment.css"
import IconLock from "../../assets/lock.svg"

const CELLS_X = 5
const CELLS_Y = 7

const Environment = () => {
    return (
        <div className="window-environment">
            <h1>Взаимодействие с окружением</h1>

            <div className="environment__cells" >
                <ul>
                    {
                        [...Array( CELLS_X*CELLS_Y ) ].map( () => (
                            <li className="cell">
                            </li>
                        ) )
                    }
                </ul>
            </div>

            <div className="environment__not-available">
                <img src={ IconLock } style={ { width: "42rem", height: "52rem" } } />
                <p>Отсутствуют элементы для<br/>взаимодействия</p>
            </div>
        </div>
    )
}

export default Environment