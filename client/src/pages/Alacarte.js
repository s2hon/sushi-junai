import React from "react";
import ALaCarteMenu from "../components/ALaCarteMenu/MenuList";
import Header from "../components/Header";
import HeaderTopbar from "../components/HeaderTopbar";

function Alacarte(props) {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <ALaCarteMenu />
        </>
    );
}

export default Alacarte;