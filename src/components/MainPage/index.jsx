import React from "react";
import { languagesData, skillsData } from "./const";
import { StyledMainPage } from "./styled";

export default function MainPage() {
  return (
    <StyledMainPage.Wrapper>
      <StyledMainPage.Content>
        <div>
          <h2>Samidinova Albina</h2>
          <h2>Fronted-Developer</h2>
          <h2>IT-skills</h2>
          <StyledMainPage.SkillList>
            {skillsData.map((skill, idx) => (
              <StyledMainPage.Skill key={idx}>
                <h3>{skill.language}</h3>
                <StyledMainPage.SkillsLevelWrapper class="skills_level_wrapper">
                  <StyledMainPage.SkillsLevel
                    width={skill.percent}
                    class={skill.skill_level_class}
                  />
                </StyledMainPage.SkillsLevelWrapper>
              </StyledMainPage.Skill>
            ))}
          </StyledMainPage.SkillList>
        </div>
        <StyledMainPage.Image src="https://i.pinimg.com/564x/93/1f/bb/931fbb5a339d96b6ff8c3db34d2e759c.jpg" />
        <div>
          <div>
            <h2>Language</h2>
            <StyledMainPage.LanguageList>
              {languagesData.map((language, idx) => {
                return (
                  <StyledMainPage.LanguageListItem key={idx}>
                    <h3>{language.language}</h3>
                    <StyledMainPage.LangLevelWrapper base={language.base}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </StyledMainPage.LangLevelWrapper>
                    <span>{language.lvl}</span>
                  </StyledMainPage.LanguageListItem>
                );
              })}
            </StyledMainPage.LanguageList>
          </div>
        </div>
      </StyledMainPage.Content>
    </StyledMainPage.Wrapper>
  );
}
