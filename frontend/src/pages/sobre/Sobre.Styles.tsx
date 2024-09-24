import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const Box = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h1`
  color: #333;
  font-family: 'Georgia', serif;
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  color: #444;
  font-family: 'Arial', sans-serif;
  font-size: 1.8em;
  margin: 20px 0 10px;
`;

export const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1em;
  margin: 10px 0;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;

  li {
    padding: 5px 0;
    position: relative;
    margin-left: 20px;
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #4caf50;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.9em;
  color: #666;

  Paragraph {
    margin: 5px 0;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: 20px 0;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;
