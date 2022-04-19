import { Container, ContactText, SocMedia, SocMediaLink, Instagram} from "./style";
import contact from '../../images/Contactt.png'
import insta from '../../images/Instagram.png'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/Twiiter.png'
import linked from '../../images/LinkedIn.png'
import telegram from '../../images/Telegram.png'
import discord from '../../images/Discord.png'



export const Contact = ()=>{
    return <Container>
        <ContactText>
            <img src={contact}/>
        </ContactText>

        <SocMedia>

        <SocMediaLink>
                <img src={insta}/>
         </SocMediaLink>

        <SocMediaLink>
            <img src={facebook}/>
        </SocMediaLink>

        <SocMediaLink>
            <img src={twitter}/>
        </SocMediaLink>

        <SocMediaLink>
            <img src={linked}/>
        </SocMediaLink>

        <SocMediaLink>
            <img src={telegram}/>
        </SocMediaLink>

        <SocMediaLink>
            <img src={discord}/>
        </SocMediaLink>

        </SocMedia>

            <hr/>
    </Container>
};
export default Contact;