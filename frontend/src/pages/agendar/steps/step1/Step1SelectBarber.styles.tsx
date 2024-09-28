import styled from 'styled-components';

export const BarberOption = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 3em;
  margin: 10px 0;
  width: 300px;
  border: 2px solid ${({ selected }) => (selected ? '#0073ff' : '#ddd')};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px solid gray;

  &:hover {
    border-color: #0886ee;
  }

  img {
    width: 6.0em;
    height: 5.5em;
    border-radius: 40%;
    margin-right: 15px;
  }
`