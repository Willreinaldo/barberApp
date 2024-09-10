import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column; / 
  justify-content: center;
  align-items: center;
  min-height: 100vh;  
  background-color: #f0f0f0;
  box-sizing: border-box; 
`;

export const AgendamentosContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;  
  overflow-x: auto;  

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    white-space: nowrap; 
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

  /* Media query para telas menores */
  @media (max-width: 630px) {
    th, td {
      padding: 8px;
      font-size: 14px; /* Reduz o tamanho da fonte */
    }

    thead th {
      font-size: 14px; /* Ajuste do tamanho da fonte no cabeçalho */
    }
  }
`;