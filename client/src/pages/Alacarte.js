import React from "react";
import ALaCarteMenu from "../components/ALaCarteMenu/MenuList"
import Counter from "../components/Counter";
import BackButton from "../components/BackButton";
function Alacarte(props) {
    return (
        <>
            <BackButton />
            <Counter/>
            <ALaCarteMenu />
        </>
    );
}

export default Alacarte;