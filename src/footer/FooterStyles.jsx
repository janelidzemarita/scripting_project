import styled from 'styled-components';

export const Box = styled.div`npm install --save styled-components
  padding: 80px 60px;
  background: #1a2b49;
  z-index:2;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55%;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px; 
  margin: 0 auto;
  background:  #1a2b49; 
`;
   
export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`
;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
  minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, 
  minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 2px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
  color: red;
  transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: yellow;
  margin-bottom: 0px;
  font-weight: bold;
`;