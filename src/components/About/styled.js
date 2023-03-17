import styled from "styled-components";

export const StyledAbout = {
  Wrapper: styled.div`
    z-index: 999;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  `,

  Title: styled.h1`
    width: 35%;
    border: 5px solid transparent;
    border-image: linear-gradient(
      to left top,
      #adf2f7 10%,
      transparent 30%,
      transparent 70%,
      #adf2f7 90%
    );
    border-image-slice: 1;
    margin-left: -100px;
  `,

  Content: styled.p`
    font-size: 27px;
    width: 65%;
    text-align: center;
    border: 5px solid transparent;
    border-image: linear-gradient(
      to left top,
      #adf2f7 10%,
      transparent 30%,
      transparent 70%,
      #adf2f7 90%
    );
    border-image-slice: 1;
  `,
};
