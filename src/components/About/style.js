import styled from "styled-components";
import bg from '../../images/Group66.png'


export const Container = styled.div`
background: url(${bg});
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 650px;
display: flex;
`;

export const LeftCard = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content: center;
`;
LeftCard.Faq = styled.img`
`;


export const RightCard = styled.div`
width:50%;
height:100%;
display:flex;
justify-content: start;
`;
export const Center = styled.div`
width: 600px;
margin-top:150px;
`
RightCard.MainText = styled.span`
color: white;
font-size:32px;
font-weight:bold;
`;
RightCard.Text = styled.p`
color: white;
`;
RightCard.Nft = styled.p`
color: white;
font-weight: bold;
cursor:pointer;
`
