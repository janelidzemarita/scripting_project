import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #2a2a2a;
  position: -ms-device-fixed;
  bottom: 0;
  width: inherit;
  height: 20%;
  font-family: "Arial Rounded MT Bold";
  margin-top: 1rem;
  

  @media (max-width: 1000px) {
    padding: 400px 300px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

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
  color: #fff;
  font-family: "Microsoft Sans Serif";
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #024662;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;