// avaliacoes.styled.tsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #343a40;
`;

export const EvaluationCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Rating = styled.p`
  font-size: 1.25rem;
  color: #ffc107; // Cor do rating
`;

export const Comment = styled.p`
  font-size: 1rem;
  color: #495057;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  min-height: 100px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const OtherEvaluationsTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 20px;
  color: #343a40;
`;
