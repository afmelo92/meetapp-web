import styled from 'styled-components';

export const ContainerBanner = styled.div`
  align-self: center;
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.2);

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      border: 3px solid #fff;
      border-radius: 5px;
      height: 340px;
      width: 900px;
    }

    input {
      display: none;
    }
  }
`;

export const ContainerExample = styled.div`
  z-index: -1;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  position: absolute;
  align-self: center;
  margin-top: 165px;
`;
