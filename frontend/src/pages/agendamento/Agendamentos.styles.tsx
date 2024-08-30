import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const AgendamentosContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  thead th {
    background-color: #000000;
    color: #ffffff;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  button {
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff1a1a;
  }
`;




