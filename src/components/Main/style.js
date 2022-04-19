import styled from "styled-components";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import vector from "../../images/Vector.png";

export const Container = styled.div`

width: 100%;
display: block;
justify-content: center;
padding: 30px 0;
  width: 100%;
  display: block;
  justify-content: center;
  padding: 30px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 45vh;
`;

export const LeftSide = styled.div`
  width: 30%;
  padding: 10px;
  justify-content: end;
`;

LeftSide.Div = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 12px;
  border: 1px solid white;
  background: url(${image1});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: auto;
`;

export const MiddleSide = styled.div`
  width: 40%;
  padding: 10px;
`;

MiddleSide.Text = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  display: flex;
  margin-top: 50px;
  display: block;
  background: url(${vector});
  background-size: 470px;
  background-repeat: no-repeat;
  background-position: center;
`;

MiddleSide.Text.Span = styled.span`
  color: #ffffff;
  font-size: 95px;
  font-weight: 500;
`;

MiddleSide.Text.P = styled.p`
  color: #ffffff;
  font-size: 45px;
  font-weight: 700;
  color: #ff14b1;
  padding: 0;
  margin-top: 5px;
`;

export const RightSide = styled.div`
  width: 30%;
  padding: 10px;
`;

RightSide.Div = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 20px;
  background: url(${image2});
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 120px;
  border: 1px solid white;
`;

export const MenuNav = styled.div`
  margin-top: 150px;
  width: 95%;
  height: 30px;
  padding: 20px 5px;
  display: flex;
  border-radius: 30px;
  margin-left: 30px;
  backdrop-filter: blur(1px);
  background: rgba(255, 255, 255, 0.04);
`;

MenuNav.Item = styled.div`
  width: 120px;
  height: 22px;
  padding: 5px;
  text-align: center;
  border-radius: 20px;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: none;
`;

export const Category = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
 justify-content: center; 
`;

Category.Item = styled.div`
  height: 400px;
  width: 240px;
  left: 55px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.04);
  text-align: center;
  display: block;
  margin: 20px 8px;
`;
Category.Item.Title = styled.span`
  width: 200px;
  height: 40px;
  background: #150633;
  color: white;
  padding: 0 32px 8px 32px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-weight: bold;
`;
Category.Item.Img = styled.img`
width: ${({ only }) => (only ? "30%" : "240px")};
height: ${({ only }) => (only ? "150px" : "260px")};
margin-top: 8px;
position: relative ;
`;
Category.Item.C = styled.span`
  position: absolute;
  margin-top: 230px;
  margin-left: -60px;
  font-weight: bolder;
  font-size: 30px;
  color: white;
`;

Category.Item.Btn = styled.button`
height: 60px;
width: 220px;
left: 70px;
border-radius: 12px;
font-weight: bold;
background: #150633;
color:white;
cursor: pointer;
font-size:20px;
`;

Category.Item.Span = styled.span`
color: white;
`;
export const imgs = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
