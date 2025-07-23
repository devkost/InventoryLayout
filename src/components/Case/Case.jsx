import "./Case.css"
import IconAttach from "../../assets/case/attach.svg"
import IconLock from "../../assets/lock.svg";
import ItemBurger from "../../assets/items/burger.svg";
import DragableItem from '../Item/Item';

const CELLS_X = 5
const CELLS_Y = 4

const Items = {
    1: {
        img: ItemBurger,
        size: ["49rem", "49rem"],
    },
}

const PlayerData = {
    0: 1,
    1: 1,
    2: 1,
}
export { PlayerData }

const Case = () => {
    return (
        <div className="window-case" >
            <div className="case-inventory" >
                <h1>Инвентарь</h1>

                <div className="inventory__cells" >
                    <ul>
                        {
                            [...Array( 10 ) ].map( ( _, index ) => (
                                <li className="cell" id={ index } >
                                    { Items[ PlayerData[ index ] ] &&
                                        <DragableItem itemData={ Items[ PlayerData[ index ] ] }/>   
                                    }
                                </li>
                            ) )
                        }
                    </ul>
                </div>

            </div>

            <div className="case-bag" >
                <h1>Рюкзак</h1>

                <div className="bag__cells" >
                    <ul>
                        {
                            [...Array( CELLS_X*CELLS_Y ) ].map( () => (
                                <li className="cell" >
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="bag__not-available">
                    <img src={ IconLock } style={ { width: "42rem", height: "52rem" } } />
                    <p>Приобретите  или наденьте<br/>рюкзак для разблокировки слотов</p>
                </div>
            </div>
        </div>
    )
}

export default Case