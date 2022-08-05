import styled from 'styled-components';

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 247, 247);
  width: 98%;
  height: 80%;
  border-radius: 10px;
  padding: 30px 15px;
  margin: 70px 0 20px 0;

  @media(min-width: 768px){
    width: 70%;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(23, 28, 26);
`;
