import "./Person.css"
import Hat from "../../assets/person/hat.svg"
import Mask from "../../assets/person/mask.svg"
import Back  from "../../assets/person/back.svg"
import Watch from "../../assets/person/watch.svg"
import IconPerson from "../../assets/person/IconPerson.svg"
import Clothes from "../../assets/person/clothes.svg"
import IconBag from "../../assets/person/IconBag.svg"
import IconHand from "../../assets/person/IconHand.svg"

const ACCESSORIES = [
    {
        img: Hat,
        size: [ "43rem", "29rem" ],
    },
    {
        img: Mask,
        size: [ "45rem", "32rem" ],
    },
    {
        img: Back,
        size: [ "43rem", "43rem" ]
    },
    {
        img: Watch,
        size: [ "29rem", "41rem" ]
    }
]

const Person = () => {
    return (
        <div className="window-person">
            <div className="person__header" >
                <p className="header__name">Ivan Ivanov</p>
                <p className="header__money">13,000 ₽</p>
            </div>

            <div className="person__appearance" >
                <div className="appearance__accessories-cells">
                    <ul>
                        {
                            ACCESSORIES.map( obj => (
                                <li className="cell" >
                                    <img src={ obj.img } style={ { width: obj.size[ 0 ], height: obj.size[ 1 ] } } />
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="appearance__person" >
                    <img src={ IconPerson } style={ { width: "157rem", height: "390rem" } } />
                </div>

                <div className="appearance__item" >
                    <div className="item__clothes" >
                        <h1>Одежда</h1>
                        <div className="cell">
                            <img src={ Clothes } style={ { width: "48rem", height: "43rem" } } />
                        </div>
                    </div>

                    <div className="item__bag" >
                        <h1>Рюкзак</h1>
                        <div className="cell">
                            <img src={ IconBag } style={ { width: "35rem", height: "43rem" } } />
                        </div>
                    </div>
                </div>
            </div>

            <div className="person__hands" >
                <h1>Руки</h1>

                <div className="cell" style={ { width: "100%", height: "130rem" } } >
                    <img src={ IconHand } style={ { width: "72rem", height: "41rem" } } />
                </div>
            </div>

            <div className="person__footer" >
                <h1>Быстрый доступ</h1>

                <div className="footer__accessories-cells">
                    <ul>
                        {
                            [...Array( 5 ) ].map( ( _, index ) => (
                                <li className="cell" style={ { position: "relative" } }>
                                    <div className="cell__number" >{ index+1 }</div>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Person