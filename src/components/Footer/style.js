import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 50px;
display:flex;
`;

export const Card = styled.div`
width: 25%;
padding: 20px;
display:flex;
justify-content: center;
`;
Card.Metoshi = styled.div`
font-size: 16px;
font-weight: 700;
color: #817499;
margin-left: 35px;
`;
export const Card2 = styled.div`
width: 50%;
padding: 20px;
display:flex;
justify-content: space-between;
`;

Card2.Item = styled.span`
color:white;
font-weight:bold;
cursor:pointer;
`