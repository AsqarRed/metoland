import styled from "styled-components";

// // 991619670

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: 1200px;
  background-size: cover;
  background-repeat: no-repeat;

  `;


// @media screen and (max-width: 1336px)  { font-size: 18px}
// @media screen and (max-width: 767px)  { font-size: 12px}
// @media screen and (max-width: 430px)  { font-size: 8px}

// @media screen and (max-width: 1336px)  { font-size: 12px; width: 60px}
// @media screen and (max-width: 767px)  { font-size: 10px; margin-left: 10px; height: 25px}
// @media screen and (max-width: 430px)  { font-size: 7px; width: 45px; margin-left: 5px}



export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  max-width: 1920px;
@media screen and (max-width: 1336px)
@media screen and (max-width: 767px)  { position: fixed;}
`;




export const NavItems = styled.div`
  width: 100%;
  display: flex;
  flex: ${({ logo }) => logo  ? '1' : '1.3'} ;
  align-items: center;
  justify-content: ${({ logo }) => logo ? 'start' : 'space-around'} ;
  padding: 0 20px 0 50px;
`;

NavItems.Text = styled.div`
text-transform: none;
font-size: 15px;
color: #ffffff;
font-weight: bold;
cursor: pointer;
@media screen and (max-width: 1336px)  { font-size: 15px}
@media screen and (max-width: 1000px)  { font-size: 12px}
@media screen and (max-width: 767px)  {}
`;

NavItems.Btn = styled.div`
padding: 10px;
width: 120px;
cursor: pointer;
border-radius: 12px;
border:none;
background: #2e2868;
font-weight: bold;
color: white;
text-align: center;
@media screen and (max-width: 1336px)  {width: 140px; height: 45px; font-size: 13px}
@media screen and (max-width: 1100px)  {width: 100px; height: 38px; font-size: 10px}
@media screen and (max-width: 767px)  {display: none}
`;

// @media screen and (max-width: 1336px)  {width: 340px;}
// @media screen and (max-width: 1000px)  {width: 280px;}
// @media screen and (max-width: 767px)  {width: 220px;}
// @media screen and (max-width: 1000px)  {flex-direction: column}
// @media screen and (max-width: 1000px)  {margin-top: 230px;}
// @media screen and (max-width: 1500px)  {img{height: 300px}}
// @media screen and (max-width: 1335px)  {img{height: 260px;}}
// @media screen and (max-width: 1180px)  { img{height: 230px; margin: 0}};
// @media screen and (max-width: 1000px)  { display: ${({ img }) => img && 'none'};}
// @media screen and (max-width: 1500px)  {font-size: 60px}
// @media screen and (max-width: 1335px)  {font-size: 50px}
// @media screen and (max-width: 1180px)  {font-size: 40px}
// @media screen and (max-width: 571px)  {font-size: 30px}
// @media screen and (max-width: 1500px)  {font-size: 25px}
// @media screen and (max-width: 1336px)  {font-size: 20px; margin: 25px 0 40px 0}
// @media screen and (max-width: 1180px)  {font-size: 17px; margin: 25px 0 30px 0;}
// @media screen and (max-width: 1336px)  {width: 130px; height: 30px; font-size: 12px;}


export const Sidebar = styled.div`
position: fixed;
width: 70%;
height: 100vh;
background: #2e2868;
display: none;
z-index: 999;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px)  {display: flex}
`
Sidebar.Text = styled.div`
color: #fff;
font-size: 25px;
font-weight: bold;
`
export const Bar = styled.div`
  width: 25px;
  height: 23px;
  margin: 18px;
  display: none;
@media  (max-width: 767px) {display: block}
`
export const Bars = styled.div`
  width: 25px;
  height: 2.4px;
  float: right;
  border-radius: 3px;
  transform: ${({ a }) => a && 'rotate(45deg) translate(5px, 8px)'};
  transform: ${({ c }) => c && 'rotate(-45deg) translate(5px, -8px)'};
  width: ${({ b }) => b && '0px'};
  margin: 3.5px;
  background: ${({ color }) => color ? '#111' : '#fff'} ;
  transition: all .3s;
`