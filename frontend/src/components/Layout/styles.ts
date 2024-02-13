import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
`;
export const ToolBar = styled.header`
  height: 80px;
  background-color: #fefefe;
  box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.056);
`;
export const Sidebar = styled.div`
  /* position: fixed; */
  min-height: 100vh;
  height: 100%;
  width: 240px;
  background-color: #fff;
  padding: 32px 20px;
  z-index: 2;
  ul {
    margin-top: 40px;
    list-style-type: none;

    li a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #444;
      padding: 8px 0px;
      cursor: pointer;
      transition: all 100ms;
    }

    li a:hover {
      padding-left: 8px;
    }

    li:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.main`
  padding: 32px;
`;
