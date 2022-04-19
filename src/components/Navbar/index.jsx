// import { Container, LeftCard, MiddleCard, RightCard } from "./style";
import minstar from '../../images/minstar-gray.png'

import { Container,  Nav,  NavItems, Sidebar, Bar, Bars } from "./style";
import React, { useState } from "react";
import './index.css';
import logo from '../../images/Logo.png'

export const Navbar=()=>{

const [isOpen, setIsopen] = useState(false);

  return (

    <Container>
      <Nav>
        <Sidebar click={isOpen} className={`sidebar ${isOpen === true ? 'active' : ''}`}>
          <Sidebar.Text> Home <img src={minstar}/></Sidebar.Text>
          <Sidebar.Text> Buy NFT <img src={minstar}/> </Sidebar.Text>
          <Sidebar.Text> Whitepaper <img src={minstar}/> </Sidebar.Text>
          <Sidebar.Text> Contacts <img src={minstar}/></Sidebar.Text>
          <Sidebar.Text> 0x16cd...f345 </Sidebar.Text>
          <Sidebar.Text> ENG</Sidebar.Text>
          <Sidebar.Text>RUS </Sidebar.Text>

        </Sidebar>

        <NavItems logo> 
        <img src={logo}/>  
        </NavItems>
        <NavItems>
          <NavItems.Text> Home <img src={minstar}/> </NavItems.Text>
          <NavItems.Text> Buy NFT <img src={minstar}/> </NavItems.Text>
          <NavItems.Text> Whitepaper <img src={minstar}/> </NavItems.Text>
          <NavItems.Text> Contacts <img src={minstar}/> </NavItems.Text>
      
          
        </NavItems>

        <NavItems >  
            <NavItems.Text> ENG | RUS</NavItems.Text>

              <NavItems.Btn>0x16cd...f345</NavItems.Btn>
        </NavItems>

        <Bar onClick={() => setIsopen(!isOpen)}>
          <Bars a={isOpen} />
          <Bars b={isOpen} />
          <Bars c={isOpen} />
        </Bar>
      </Nav >

    

    </Container>

  );
};
export default Navbar;