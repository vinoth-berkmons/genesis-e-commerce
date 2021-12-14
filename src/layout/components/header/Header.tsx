import React, { FC } from "react";
import { NavigationMenu } from "../navigation/NavigationMenu";
import { HeaderStyle } from "./HeaderStyle";


const Header: FC = () => {
    return (
        <HeaderStyle>
           <NavigationMenu/>
        </HeaderStyle>

    )
}

export { Header }