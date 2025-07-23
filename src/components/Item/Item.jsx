import { useEffect, useState } from "react";
import { PlayerData } from "../Case/Case.jsx";

const DragableItem = ({ itemData }) => {
    const [isFollowing, setIsFollowing] = useState( false )
    const [followingPosition, setFollowingPosition] = useState( false )

    const renderItem = () => {
        const style = {
            position: 'absolute',
            width: itemData.size[ 0 ], 
            height: itemData.size[ 1 ],
            left: isFollowing ? followingPosition.x : 'auto',
            top: isFollowing ? followingPosition.y : 'auto',
            pointerEvents: isFollowing ? 'none' : 'auto',
            zIndex: isFollowing ? 'none' : '1000'
        }

        return (
            <img src={ itemData.img } style={ { userSelect: "none", ...style } } onPointerDown={ () => setIsFollowing( true ) } />
        )
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if ( isFollowing ) {
                setFollowingPosition({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseUp = () => {
            if ( isFollowing ) {
                setIsFollowing( false );
                setFollowingPosition( false )

                // const elementUnderCursor = document.elementFromPoint( e.clientX, e.clientY );
                // if ( elementUnderCursor ) {
                //     return true;
                // }

            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener( "mouseup", handleMouseUp );
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener( "mouseup", handleMouseUp );
        };
    }, [ isFollowing ]);

    return (
        renderItem()
    )
}
export default DragableItem;