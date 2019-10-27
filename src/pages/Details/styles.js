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

    div {
      display: flex;
    }
  }

  p {
    color: #fff;
  }
`;

export const EditButton = styled.div`
  display: flex;

  button {
    width: 150px;
    margin: 5px 0 0 15px;
    height: 44px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }

    div {
      align-items: center;
      justify-content: center;

      p {
        margin-left: 10px;
      }
    }
  }
`;

export const CancelButton = styled.div`
  display: flex;

  button {
    width: 120px;
    margin: 5px 0 0 15px;
    height: 44px;
    background: #4dbaf9;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.03, '#4dbaf9')};
    }

    div {
      align-items: center;
      justify-content: center;

      p {
        margin-left: 10px;
      }
    }
  }
`;

export const BannerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 900px;
    height: 300px;
    border-radius: 4px;
  }
`;

export const DescContainer = styled.div`
  margin-top: 50px;
  color: #fff;
  font-size: 16px;

  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  margin-top: 30px;

  p {
    margin-left: 10px;
    color: #9f9f9f;
  }

  > p {
    margin-right: 50px;
  }
`;
