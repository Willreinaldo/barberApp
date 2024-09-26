import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 20px;
`;

export const MyEvaluationSection = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export const OtherEvaluationsSection = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2em;
`;

export const EvaluationCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 2em;
`;

export const EvaluationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const EvaluationInfo = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

export const Rating = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #343a40;
`;

export const Comment = styled.p`
  font-size: 0.9rem;
  color: #495057;
`;

export const Button = styled.button`
  background-color: #00308F;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0066b2;
  }
`;
export const ButtonEdit = styled.button`
  background-color: #7CB9E8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 20%;

  &:hover {
    background-color: #0066b2;
  }
`;
export const ButtonDelete = styled.button`
  background-color: #FF033E;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 20%;

  &:hover {
    background-color: red;
  }
`;
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
`;

export const OtherEvaluationsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1em;
  color: #333;
`;

export const DashedLine = styled.hr`
  border: 1px dashed #dee2e6;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;
