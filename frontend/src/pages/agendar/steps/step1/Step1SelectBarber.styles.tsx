import styled from 'styled-components';

export const BarberOption = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ selected }) => (selected ? '#FFD700' : '#ddd')};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-color: #FFD700;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
`