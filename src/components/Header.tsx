import styled from "styled-components";
import logoGrowTwitter from "../assets/logo_growtweet.svg";

const HeaderStyled = styled.div`
padding: 12px;
background-color: #f5f5f5;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 200px;

margin-bottom: 8px;

`;


export function Header() {
    return (
        <HeaderStyled>
            <img src={logoGrowTwitter} alt="Logo GrowTwitter" />
        </HeaderStyled>
    );
}