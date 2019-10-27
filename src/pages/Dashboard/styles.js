import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    button {
      width: 172px;
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.4s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          margin-left: 5px;
        }
      }
    }
  }
`;

export const MeetList = styled.ul`
  margin-top: 30px;
  align-items: center;

  li {
    display: flex;
    justify-content: space-between;
    text-align: left;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    padding: 30px 20px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    h3 {
      display: flex;
      align-items: center;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #fff;

      p {
        margin-right: 20px;
        color: #9f9f9f;
      }
    }
  }

  /**
  div {
    text-align: left;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #f64c75;
    margin-bottom: 10px;
    font-weight: bold;
  }
   */
`;
