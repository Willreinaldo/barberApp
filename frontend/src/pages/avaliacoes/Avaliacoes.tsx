import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './../../contexts/AuthContext';
import {
  Container,
  Title,
  EvaluationCard,
  Rating,
  Comment,
  Button,
  Input,
  TextArea,
  OtherEvaluationsTitle,
} from './Avaliacoes.styles';

interface Evaluation {
  id: number;
  rating: number;
  comment: string;
  userId: number;
  createdAt: string;
}

const Avaliacoes: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { authData } = useAuthContext();

    const userId = authData.user.id; 
  const [myEvaluations, setMyEvaluations] = useState<Evaluation[]>([]);
  const [otherEvaluations, setOtherEvaluations] = useState<Evaluation[]>([]);
  const [newEvaluation, setNewEvaluation] = useState({ rating: 1, comment: '' }); // Valor inicial 1

  const fetchMyEvaluations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/avaliar/evaluations/user/${userId}`);
      setMyEvaluations(response.data);
    } catch (error) {
      console.error('Erro ao buscar minhas avaliações:', error);
    }
  };

  const fetchOtherEvaluations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/avaliar/evaluations/others`); // Atualize com o endpoint correto
      setOtherEvaluations(response.data);
    } catch (error) {
      console.error('Erro ao buscar outras avaliações:', error);
    }
  };

  const handleCreateEvaluation = async () => {
    try {
      await axios.post(`${apiUrl}/avaliar/evaluations`, { ...newEvaluation, userId }); // Adicionando userId
      setNewEvaluation({ rating: 1, comment: '' }); // Resetando para o valor padrão
      fetchMyEvaluations();
      fetchOtherEvaluations(); // Atualiza as outras avaliações após criar nova
    } catch (error) {
      console.error('Erro ao criar avaliação:', error);
    }
  };

  const handleEditEvaluation = async (id: number) => {
    const updatedEvaluation = myEvaluations.find(evaluation => evaluation.id === id);
    if (!updatedEvaluation) return;

    try {
      await axios.put(`${apiUrl}/avaliar/evaluations/${id}`, updatedEvaluation);
      fetchMyEvaluations();
    } catch (error) {
      console.error('Erro ao editar avaliação:', error);
    }
  };

  const handleDeleteEvaluation = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/avaliar/evaluations/${id}`);
      fetchMyEvaluations();
      fetchOtherEvaluations(); // Atualiza as outras avaliações após deletar
    } catch (error) {
      console.error('Erro ao deletar avaliação:', error);
    }
  };

  useEffect(() => {
    fetchMyEvaluations();
    fetchOtherEvaluations();
  }, []);

  return (
    <Container>
      <Title>Minhas Avaliações</Title>
      {myEvaluations.length > 0 ? (
        myEvaluations.map(evaluation => (
          <EvaluationCard key={evaluation.id}>
            <Rating>Nota: {evaluation.rating}</Rating>
            <Comment>Comentário: {evaluation.comment}</Comment>
            <Button onClick={() => handleEditEvaluation(evaluation.id)}>Editar</Button>
            <Button onClick={() => handleDeleteEvaluation(evaluation.id)}>Excluir</Button>
          </EvaluationCard>
        ))
      ) : (
        <p>Você ainda não fez nenhuma avaliação.</p>
      )}

      <div>
        <h2>Criar Nova Avaliação</h2>
        <Input
          type="number"
          value={newEvaluation.rating}
          onChange={(e) => {
            const value = +e.target.value;
            if (value >= 1 && value <= 5) {
              setNewEvaluation({ ...newEvaluation, rating: value });
            }
          }}
          placeholder="Nota (1-5)"
          min="1"
          max="5"
        />
        <TextArea
          value={newEvaluation.comment}
          onChange={(e) => setNewEvaluation({ ...newEvaluation, comment: e.target.value })}
          placeholder="Comentário"
        />
        <Button onClick={handleCreateEvaluation}>Criar Avaliação</Button>
      </div>

      <OtherEvaluationsTitle>Outras Avaliações</OtherEvaluationsTitle>
      {otherEvaluations.length > 0 ? (
        otherEvaluations.map(evaluation => (
          <EvaluationCard key={evaluation.id}>
            <Rating>Nota: {evaluation.rating}</Rating>
            <Comment>Comentário: {evaluation.comment}</Comment>
            <p>Criado em: {new Date(evaluation.createdAt).toLocaleDateString()}</p>
          </EvaluationCard>
        ))
      ) : (
        <p>Nenhuma avaliação disponível.</p>
      )}
    </Container>
  );
};

export default Avaliacoes;
