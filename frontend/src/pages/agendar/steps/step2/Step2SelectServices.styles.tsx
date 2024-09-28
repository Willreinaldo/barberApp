import styled from 'styled-components';

export const ServiceOption = styled.div<{ selected: boolean }>`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
width: 200px;
height: 100px;
margin: 20px 0;
border: 2px solid ${({ selected }) => (selected ? '#0073ff' : '#ddd')};
border-radius: 8px;
box-shadow: 1px solid gray;
cursor: pointer;

&:hover {
  border-color: #0886ee;
}
`;