import React from "react";
import { ArrowStyle } from "./arrow.styled";

type ArrowSVGProps = {
    deration: 'prev' | 'next',
}

export const ArrowSVG: React.FC<ArrowSVGProps> = (props) => {
    return (
        <ArrowStyle
            viewBox="0 0 30 15.7"
            xmlns="http://www.w3.org/2000/svg"
            deration={props.deration} >
            <path d="M29.7,1.4l-14,14c-0.4,0.4-1,0.4-1.4,0l-14-14c-0.4-0.4-0.4-1,0-1.4h29.4C30.1,0.4,30.1,1,29.7,1.4z" />
        </ArrowStyle>
    );
}