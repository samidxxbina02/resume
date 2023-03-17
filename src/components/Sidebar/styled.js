import styled from "styled-components";

export const StyledSidebar = {
  Block: styled.div`
    z-index: 999;
    background-color: black;
  `,
  Wrapper: styled.div`
    padding: ${(props) => (props.isToggle ? "50px 20px" : "50px 30px")};
    transition: padding 0.8s;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    > div:nth-child(1) {
      height: 20vh;
    }
    > div:nth-child(2) {
      height: 60vh;
    }
    > div:nth-child(3) {
      height: 20vh;
    }
  `,
  Logo: styled.span``,
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ListItem: styled.li`
    padding: 8px 25px;
    border-radius: 25px;
    :hover {
      background-color: rgb(38, 38, 38);
    }
  `,
  ListItemIcon: styled.span``,
  ListItemTitle: styled.span``,
  ListItemWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
  `,
  Header: styled.div``,
  Body: styled.div``,
  Footer: styled.div`
    cursor: pointer;
  `,
};
