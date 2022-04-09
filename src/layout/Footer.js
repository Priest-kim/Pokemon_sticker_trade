import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterArea>
        <SocialArea>
          <SocialIcons>
            <Icon>
              <FontAwesomeIcon icon={faFacebookF} size="2x" color="#4267B2" />
            </Icon>
          </SocialIcons>
          <SocialIcons>
            <Icon>
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#1da1f2" />
            </Icon>
          </SocialIcons>
          <SocialIcons>
            <Icon>
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#e1306c" />
            </Icon>
          </SocialIcons>
          <SocialIcons>
            <Icon>
              <FontAwesomeIcon icon={faYoutube} size="2x" color="#ff0000" />
            </Icon>
          </SocialIcons>
        </SocialArea>
        <ContactArea>
          <Infomation>
            상호명 : (주) Constto Company 대표 Jaden(김현빈)
            <br />
            사업자 등록 번호 : XXX-XX-XXXXX | 통신판매업 신고번호 제 xxx-경기
            안산시-xxxx호
            <br />
            경기도 안산시 단원구 당곡로 8 진양빌딩 대표번호 000-0000-0000 <br />
            Copright by Jaden
          </Infomation>
        </ContactArea>
      </FooterArea>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
`;

const FooterArea = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialArea = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100px;
  background-color: transparent;
`;
const SocialIcons = styled.a`
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: inline-flex;
  text-decoration: none;
  margin: 0 40px;
  border-radius: 50%;
  background-color: #bababa;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

const Icon = styled.i`
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 60px;
`;

const ContactArea = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 100px;
  background-color: transparent;
`;
const Infomation = styled.p`
  min-width: 700px;
  margin: 0;
  font-weight: 1000;
  font-size: 1.5rem;
  color: #bababa;
`;
