import styled from "styled-components";

export const StyledMainPage = {
  Wrapper: styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    color: white;
  `,
  Content: styled.div`
    display: flex;
    gap: 50px;
    font-size: 20px;
  `,
  Image: styled.img``,
  Info: styled.div``,
  Title: styled.h2``,
  Skill: styled.li``,
  SkillList: styled.ul``,
  SkillsLevelWrapper: styled.div`
    height: 3px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  `,
  SkillsLevel: styled.div`
    height: 3px;
    background-color: #fff;
    width: ${(props) => props.width};
  `,
  LanguageListItem: styled.li`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `,
  LanguageList: styled.ul`
    width: 300px;
  `,
  LangLevelWrapper: styled.li`
    display: flex;
    justify-content: space-between;
    gap: 2%;

    div {
      width: 18%;
      height: 7px;
      border-radius: 3px;
      background-color: white;
      opacity: ${(props) => (props.base ? "0.2" : "1")};
    }

    /* передаем base (число) динамично и -n+base закрасит элменты до элемента с порядковым номером base */
    > div:nth-child(${(props) => `-n+${props.base}`}) {
      opacity: 1;
    }
  `,
};
