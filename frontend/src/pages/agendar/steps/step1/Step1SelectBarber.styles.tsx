import styled from 'styled-components';

export const BarberOption = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 3em;
  margin: 10px 0;
  border: 1px solid ${({ selected }) => (selected ? '#FFD700' : '#ddd')};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-color: #FFD700;
  }

  img {
    width: 5.5em;
    height: 5.5em;
    border-radius: 40%;
    margin-right: 15px;
  }
`