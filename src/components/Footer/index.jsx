import { Container, Card, Card2 } from "./style";
import minstar from '../../images/minstar-gray.png'

export const Footer=()=>{
    return <Container>
                <Card>
                    <Card.Metoshi>
                      ©Metoshi, 2021
                    </Card.Metoshi>
                        
                </Card>

                <Card2>
                    <Card2.Item>Our products <img src={minstar}/></Card2.Item>
                    <Card2.Item>Red Panda <img src={minstar}/></Card2.Item>
                    <Card2.Item>Tokenomics <img src={minstar}/></Card2.Item>
                    <Card2.Item>Roadmap <img src={minstar}/></Card2.Item>
                    <Card2.Item>Whitepapper <img src={minstar}/></Card2.Item>
                    <Card2.Item>Contacts</Card2.Item>

                </Card2>

                <Card>
                  <Card2.Item>ENG </Card2.Item>
                  <Card2.Item> | </Card2.Item>
                  <Card2.Item> RUS</Card2.Item>
                  
                </Card>

    </Container>
};
export default Footer;