import React from "react";
import Cat from "../animation/Cat";
import { StyledAbout } from "./styled";

const About = ({ name, age, occupation, description, language }) => {
  return (
    <StyledAbout.Wrapper>
      <StyledAbout.Title>Всем привет,меня зовут Альбина</StyledAbout.Title>
      <StyledAbout.Content>
        Я начинающий Front-end разработчик, заканчиваю курсы Мakers. Родилась в
        городе Бишкек - 3 августа 2002 года. Софтскиллы прокачены, могу найти
        общий язык с кем угодно.Люблю развиваться , много читаю,люблю
        рисовать,играть в волейбол и баскетбол. В свободное время смотрю сериалы
        и аниме,играю в идео-игры и еще кодю. Начала увлекаться IT потому что
        мой молодой человек 'Middle-разработчик' вдохновил меня на это, да и
        сама тематика и эстетика frilance работы. В будущем хочу отдыхая на
        берегу моря, сидя за ноутом - зарабатывать деньги.
      </StyledAbout.Content>
      <Cat />
    </StyledAbout.Wrapper>
  );
};

export default About;
