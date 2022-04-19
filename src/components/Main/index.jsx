import {
  Container,
  Wrapper,
  MenuNav,
  Category,
  imgs,
  LeftSide,
  MiddleSide,
  RightSide,
} from "./style";
import { myChest } from "./myChest";
import { buyNft } from "./buyNft";
import { myNft } from "./myNft";
import { useState } from "react";

export const Main = () => {
  const [data, setData] = useState(buyNft);
  const [active, setActive] = useState("buy");

  function myChestFunc() {
    setData(myChest);
    setActive("chest");
  }

        
    function myChestFunc(){
        setData(myChest);
        setActive('chest');
    }

    function buyNfttFunc(){
        setData(buyNft);
        setActive("buy");
    }
    function myNftFunc(){
        setData(myNft);
        setActive("myNft");
    }
        

  return (
    <Container>
<Wrapper>

  <LeftSide>
    <LeftSide.Div/>
  </LeftSide>

  <MiddleSide>
  <MiddleSide.Text>
    <MiddleSide.Text.Span>Metoland</MiddleSide.Text.Span>
    <MiddleSide.Text.P>Buy you metoland NFT!</MiddleSide.Text.P>
  </MiddleSide.Text>
  </MiddleSide>

    <RightSide>
      <RightSide.Div/>
    </RightSide>
</Wrapper>

      <MenuNav>
        <MenuNav.Item
          style={{
            background: active == "buy" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={buyNfttFunc}
        >
          Buy NFT
        </MenuNav.Item>
        <MenuNav.Item
          style={{
            background: active == "chest" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={myChestFunc}
        >
          My Chest
        </MenuNav.Item>
        <MenuNav.Item
          style={{
            background: active == "myNft" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={myNftFunc}
        >
          My NFT
        </MenuNav.Item>
      </MenuNav>


      <Category>
        {data.map((item, index) => {
          return (
            <span key={index}>
              <Category.Item style={item.onlyImg && imgs}>
                {item.title && 
                  <Category.Item.Title>{item.title}</Category.Item.Title>
                }
                <Category.Item.Img src={item.img}/>
                <Category.Item.C src={item.twelve}/>
                <Category.Item.Btn disabled={item.disable}>{item.price}</Category.Item.Btn>
                {item.aviable && item.count && 
                  <Category.Item.Span>
                    {item.aviable} : {item.count}
                  </Category.Item.Span>
                }
              </Category.Item>
            </span>
          );
        })}
      </Category>
    </Container>
  );
};
export default Main;
