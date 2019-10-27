import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #f94d6a;
    font-weight: bold;
    font-size: 30px;
  }
  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
    color: #fff;
  }
`;

export const Profile = styled.div`
  display: flex;

  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-left: 10px;
    margin-right: 10px;

    strong {
      display: block;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    border: none;
    margin-left: 20px;
    padding: 10px 25px;
    color: #fff;

    font-size: 16px;
    font-weight: bold;
    background: #d44059;
    border-radius: 4px;
  }
`;
