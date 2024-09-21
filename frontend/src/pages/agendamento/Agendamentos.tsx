import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgendamentosContainer, PageContainer, Table } from './Agendamentos.styles';

// Definindo o tipo para os agendamentos
type AgendamentoType = {
  id: number;
  date: string; // Contém data e horário
  barber: { id: number; name: string };
  services: { service: { id: number; name: string; price: string } }[]; // price como string
};

const Agendamentos: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [agendamentos, setAgendamentos] = useState<AgendamentoType[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<{ horario: string; services: number[] }>({
    horario: '',
    services: [],
  });
  const [error, setError] = useState<string | null>(null); // Para mostrar erros na verificação

  // Buscar os dados da API
  useEffect(() => {
    const fetchAgendamentos = async () => {
      const response = await axios.get(`${apiUrl}/agendar/appointments`);
      const data = await response.data;
      setAgendamentos(data);
    };

    fetchAgendamentos();
  }, []);

  const excluirAgendamento = (id: number) => {
    const novosAgendamentos = agendamentos.map((agendamento) =>
      agendamento.id === id ? { ...agendamento, status: 'Cancelado' } : agendamento
    );
    setAgendamentos(novosAgendamentos);
  };

  const iniciarEdicao = (agendamento: AgendamentoType) => {
    setEditingId(agendamento.id);
    setEditedData({
      horario: new Date(agendamento.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      services: agendamento.services.map((service) => service.service.id),
    });
    setError(null); // Limpar o erro ao iniciar uma nova edição
  };

  const confirmarEdicao = async (id: number) => {
    const formattedDate = new Date(agendamentos.find((agendamento) => agendamento.id === id)?.date || '').toISOString();
    const appointmentDate = new Date(`${formattedDate}T${editedData.horario}:00Z`).toISOString();
    
    const isAvailable = await verificarDisponibilidade(appointmentDate);

    if (!isAvailable) {
      setError('Este horário já está reservado, escolha outro.');
      return;
    }

    const novosAgendamentos = agendamentos.map((agendamento) =>
      agendamento.id === id
        ? {
            ...agendamento,
            date: appointmentDate,
            services: agendamento.services.filter((service) =>
              editedData.services.includes(service.service.id)
            ),
          }
        : agendamento
    );
    setAgendamentos(novosAgendamentos);
    setEditingId(null);
  };

  const cancelarEdicao = () => {
    setEditingId(null);
    setError(null); // Limpar erro ao cancelar edição
  };

  const verificarDisponibilidade = async (dateTime: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${apiUrl}/agendar/check`, {
        params: { dateTime: dateTime },
      });
      return response.data.available;
    } catch (error) {
      console.error('Erro ao verificar disponibilidade:', error);
      return false;
    }
  };

  const horariosDisponiveis = ['13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <PageContainer>
      <AgendamentosContainer>
        <h1>Agendamentos</h1>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Horário</th>
              <th>Profissional</th>
              <th>Serviço</th>
              <th>Valor (R$)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((agendamento) => {
              const valorTotal = editingId === agendamento.id
                ? agendamento.services
                    .filter((service) => editedData.services.includes(service.service.id))
                    .reduce((total, service) => total + Number(service.service.price), 0)
                : agendamento.services.reduce((total, service) => total + Number(service.service.price), 0);

              return (
                <tr key={agendamento.id}>
                  <td>{new Date(agendamento.date).toLocaleDateString()}</td>
                  <td>
                    {editingId === agendamento.id ? (
                      <select
                        value={editedData.horario}
                        onChange={(e) => setEditedData({ ...editedData, horario: e.target.value })}
                      >
                        {horariosDisponiveis.map((horario) => (
                          <option key={horario} value={horario}>
                            {horario}
                          </option>
                        ))}
                      </select>
                    ) : (
                      new Date(agendamento.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    )}
                  </td>
                  <td>{agendamento.barber.name}</td>
                  <td>
                    {editingId === agendamento.id ? (
                      <>
                        <label>Serviços disponíveis:</label>
                        <div>
                          <input
                            type="checkbox"
                            checked={editedData.services.includes(1)} // Barba ID = 1
                            onChange={(e) => {
                              const selectedServices = editedData.services.includes(1)
                                ? editedData.services.filter((id) => id !== 1)
                                : [...editedData.services, 1];
                              setEditedData({ ...editedData, services: selectedServices });
                            }}
                          />
                          Barba
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            checked={editedData.services.includes(2)} // Cabelo ID = 2
                            onChange={(e) => {
                              const selectedServices = editedData.services.includes(2)
                                ? editedData.services.filter((id) => id !== 2)
                                : [...editedData.services, 2];
                              setEditedData({ ...editedData, services: selectedServices });
                            }}
                          />
                          Cabelo
                        </div>
                      </>
                    ) : (
                      agendamento.services.map((service) => service.service.name).join(', ')
                    )}
                  </td>
                  <td>{valorTotal.toFixed(2)}</td>
                  <td>
                    {editingId === agendamento.id ? (
                      <>
                        <button onClick={() => confirmarEdicao(agendamento.id)}>Confirmar</button>
                        <button onClick={cancelarEdicao}>Cancelar</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => iniciarEdicao(agendamento)}>Editar</button>
                        <button onClick={() => excluirAgendamento(agendamento.id)}>Excluir agendamento</button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </AgendamentosContainer>
    </PageContainer>
  );
};

export default Agendamentos;
