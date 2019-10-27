import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      width: 900px;
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

    textarea {
      resize: none;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      padding: 20px 15px;
      color: #fff;

      &::placeholder {
        padding-top: 80px;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .saveButton {
      width: 180px;
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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
