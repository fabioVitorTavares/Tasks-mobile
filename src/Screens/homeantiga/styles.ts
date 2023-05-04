import { displayFlexCenter } from "../../Styles/DefaultStyles";
import styled from "styled-components";


export const BackgroundApp = styled.View`
width: 100%;
height: 100%;
padding-vertical: 20px;
`;

export const ContainerHomeSup = styled.View`
${displayFlexCenter}
width: 100%;
height: 40%;
`;

export const ContainerHomeInf = styled.View`
${displayFlexCenter}
width: 100%;
height: 60%;
padding: 20px;
`;

export const SafeAreaViewApp = styled.SafeAreaView`
${displayFlexCenter}
width: 100%;
height: 200px;
`;

export const MenuHome = styled.View`
${displayFlexCenter}
justify-content: space-between;
width: 100%;
height: 100%;
background-color: #0004;
padding: 20px;
`;

export const Gap = styled.View`
width: 15px;
`;

export const CardCalendar = styled.View`
${displayFlexCenter}
width: 100%;
height: 45%;
border-radius: 15px;
background-color: #fff;
`;

export const CardMenu = styled.View`
${displayFlexCenter}
width: 45%;
height: 100%;
border-radius: 15px;
background-color: #fff;
`;

export const ContainerCardsMenu = styled.View`
${displayFlexCenter}
justify-content: space-between;
flex-direction: row;
width: 100%;
height: 45%;
`;