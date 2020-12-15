import React from "react";
import ALaCarteMenu from "../components/ALaCarteMenu/MenuList"
import Counter from "../components/Counter";

function Alacarte(props) {
    return (
        <>  
            <Counter/>
            <ALaCarteMenu />
        </>
    );
}

export default Alacarte;