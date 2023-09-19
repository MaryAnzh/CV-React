import React from "react";
import {
    FooterLink,
    FooterStyle

} from "./footer.styled";

export const Footer: React.FC = () => {
    return (
        <FooterStyle>
            <p>©2023, Minsk</p>
            <FooterLink
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MaryAnzh?tab=repositories">
                GitHub
            </FooterLink>
        </FooterStyle>
    );
}