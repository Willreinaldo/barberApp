import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './../../contexts/AuthContext';
import {
  Container,
  Title,
  EvaluationCard,
  MyEvaluationSection,
  OtherEvaluationsSection,
  Rating,
  Comment,
  Button,
  Input,
  TextArea,
  OtherEvaluationsTitle,
  DashedLine,
  EvaluationInfo,
  EvaluationRow,
  ButtonEdit,
  ButtonDelete
} from './Avaliacoes.styles';
import { FaStar } from 'react-icons/fa';
interface Evaluation {
  id: number;
  rating: number;
  comments: string;
  userId: number;
  createdAt: string;
  user: {
    name: string;
  };
}

const Avaliacoes: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { authData } = useAuthContext();
  const userId = authData!.user.id;

  const [myEvaluations, setMyEvaluations] = useState<Evaluation[]>([]);
  const [otherEvaluations, setOtherEvaluations] = useState<Evaluation[]>([]);
  const [editingEvaluationId, setEditingEvaluationId] = useState<number | null>(null);
  const [editComment, setEditComment] = useState<string>(''); 
  const [rating, setRating] = useState<number>(1); 
  const [comments, setComments] = useState<string>(''); 

  const fetchMyEvaluations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/avaliar/evaluations/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${authData!.token}`,
        },
      });
      setMyEvaluations(response.data);
    } catch (error) {
      console.error('Erro ao buscar minhas avaliações:', error);
    }
  };

  const fetchOtherEvaluations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/avaliar/evaluations/others/${userId}`, {
        headers: {
          Authorization: `Bearer ${authData!.token}`,
        },
      });
      setOtherEvaluations(response.data);
    } catch (error) {
      console.error('Erro ao buscar outras avaliações:', error);
    }
  };

  const handleCreateEvaluation = async () => {
    if (comments.trim() === '') {
      console.error('Comentário não pode ser vazio.');
      return;
    }

    const newEvaluation = {
      rating,
      comments,
      userId,
    };

    try {
      await axios.post(`${apiUrl}/avaliar/evaluations`, newEvaluation, {
        headers: {
          Authorization: `Bearer ${authData!.token}`,
        },
      });
      setRating(1);
      setComments('');
      fetchMyEvaluations();
      fetchOtherEvaluations();
    } catch (error) {
      console.error('Erro ao criar avaliação:', error);
    }
  };

  const handleStartEdit = (evaluation: Evaluation) => {
    setEditingEvaluationId(evaluation.id);
    setEditComment(evaluation.comments);
  };

  const handleSaveEdit = async (id: number) => {
    try {
      await axios.put(`${apiUrl}/avaliar/evaluations/${id}`, { comments: editComment }, {
        headers: {
          Authorization: `Bearer ${authData!.token}`,
        },
      });
      setEditingEvaluationId(null);
      fetchMyEvaluations();
    } catch (error) {
      console.error('Erro ao salvar avaliação:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingEvaluationId(null);
    setEditComment('');
  };

  const handleDeleteEvaluation = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/avaliar/evaluations/${id}`, {
        headers: {
          Authorization: `Bearer ${authData!.token}`,
        },
      });
      fetchMyEvaluations();
      fetchOtherEvaluations();
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
      <MyEvaluationSection>
        <Title>Minhas Avaliações</Title>
        {myEvaluations.length > 0 ? (
          myEvaluations.map(evaluation => (
            <EvaluationCard key={evaluation.id}>
              <EvaluationRow>
                {editingEvaluationId === evaluation.id ? (
                  <>
                    <TextArea
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      placeholder="Edite seu comentário"
                    />
                    <Button onClick={() => handleSaveEdit(evaluation.id)}>Salvar</Button>
                    <Button onClick={handleCancelEdit}>Cancelar</Button>
                  </>
                ) : (
                  <>
                    <Comment>{evaluation.comments}</Comment>
                    <Rating><FaStar/>{evaluation.rating}/5</Rating>
                  </>
                )}
              </EvaluationRow>
              <ButtonEdit onClick={() => handleStartEdit(evaluation)}>Editar</ButtonEdit>
                    <ButtonDelete onClick={() => handleDeleteEvaluation(evaluation.id)}>Excluir</ButtonDelete>
            </EvaluationCard>
          ))
        ) : (
          <p>Você ainda não fez nenhuma avaliação.</p>
        )}

        <h3>Criar Nova Avaliação</h3>
        <Input
          type="number"
          value={rating}
          onChange={(e) => setRating(+e.target.value)}
          placeholder="Nota (1-5)"
          min="1"
          max="5"
        />
        <TextArea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Comentário"
        />
        <Button onClick={handleCreateEvaluation}>Criar Avaliação</Button>
      </MyEvaluationSection>

      <DashedLine />

      <OtherEvaluationsSection>
        <OtherEvaluationsTitle>Outras Avaliações</OtherEvaluationsTitle>
        {otherEvaluations.length > 0 ? (
          otherEvaluations.map(evaluation => (
            <EvaluationCard key={evaluation.id}>
              <EvaluationRow>
                <EvaluationInfo>{evaluation.user.name} disse:</EvaluationInfo>
                <Rating><FaStar/>{evaluation.rating}/5</Rating>
              </EvaluationRow>
              <Comment>{evaluation.comments}</Comment>
            </EvaluationCard>
          ))
        ) : (
          <p>Nenhuma avaliação disponível.</p>
        )}
      </OtherEvaluationsSection>
    </Container>
  );
};

export default Avaliacoes;
