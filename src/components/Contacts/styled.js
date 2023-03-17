import styled from "styled-components";

export const StyledContacts = {
  Wrapper: styled.div`
    color: white;

    font-style: oblique;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-left: 25%;
    border-radius: 60px;
    gap: 100px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
  LinkWrapper: styled.span``,
  Link: styled.a`
    color: white;
    text-decoration: none;

    @media screen and (max-width: 900px) {
    }
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  ListItem: styled.li`
    display: flex;
    gap: 5%;
  `,
};
