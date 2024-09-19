import styled from 'styled-components';

export const ServiceOption = styled.div<{ selected: boolean }>`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
margin: 10px 0;
border: 1px solid ${({ selected }) => (selected ? '#FFD700' : '#ddd')};
border-radius: 8px;
cursor: pointer;

&:hover {
  border-color: #FFD700;
}
`;