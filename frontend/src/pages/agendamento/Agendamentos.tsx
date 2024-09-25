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
  const [editedData, setEditedData] = useState<{ data: string; horario: string; services: number[] }>({
    data: '',
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
  }, [agendamentos]);

  // Função para deletar um agendamento
  const excluirAgendamento = async (appointmentId: number) => {
    try {
      await axios.delete(`${apiUrl}/agendar/appointments/${appointmentId}`);
      console.log(`Agendamento ${appointmentId} excluído com sucesso!`);

      // Atualizar a lista de agendamentos, removendo o excluído
      setAgendamentos(agendamentos.filter((agendamento) => agendamento.id !== appointmentId));
    } catch (error) {
      console.error('Erro ao excluir o agendamento:', error);
    }
  };

  const iniciarEdicao = (agendamento: AgendamentoType) => {
    setEditingId(agendamento.id);
    setEditedData({
      data: new Date(agendamento.date).toISOString().split('T')[0], // ISO format YYYY-MM-DD para o input date
      horario: new Date(agendamento.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      services: agendamento.services.map((service) => service.service.id),
    });
    setError(null); // Limpar o erro ao iniciar uma nova edição
  };

  const confirmarEdicao = async (id: number) => {
    console.log("teste")
    try {
      // Formata a data e o horário para o formato ISO
      const appointmentDate = new Date(`${editedData.data}T${editedData.horario}:00`).toISOString();
      console.log(appointmentDate);

      // Buscar o agendamento original
      const agendamentoOriginal = agendamentos.find(agendamento => agendamento.id === id);

      // Verifica se a data/hora foram alteradas
      const dataHoraAlterada = appointmentDate !== agendamentoOriginal?.date;

      if (dataHoraAlterada) {
        // Verifica a disponibilidade apenas se a data ou o horário forem alterados
        const isAvailable = await verificarDisponibilidade(appointmentDate);

        if (!isAvailable) {
          setError('Este horário já está reservado, escolha outro.');
          return;
        }
      }

      // Chamada à API para confirmar a edição
      await axios.put(`${apiUrl}/agendar/appointments/${id}`, {
        date: appointmentDate,  // Envia a nova data e horário
        serviceIds: editedData.services, // Envia os novos serviços selecionados
      });

      // Atualiza o estado dos agendamentos no frontend
      const novosAgendamentos = agendamentos.map((agendamento) =>
        agendamento.id === id
          ? {
              ...agendamento,
              date: appointmentDate, // Atualiza a data e horário no estado local
              services: agendamento.services.filter((service) =>
                editedData.services.includes(service.service.id) // Atualiza os serviços
              ),
            }
          : agendamento
      );
      
      // Atualiza o estado
      setAgendamentos(novosAgendamentos);
      setEditingId(null); // Sai do modo de edição
      setError(''); // Limpa possíveis erros
    } catch (error) {
      console.error('Erro ao editar agendamento:', error);
      setError('Ocorreu um erro ao tentar editar o agendamento.');
    }
  };

  const cancelarEdicao = () => {
    setEditingId(null);
    setError(null); // Limpar erro ao cancelar edição
  };

  const verificarDisponibilidade = async (dateTime: string): Promise<boolean> => {
    console.log(dateTime);
    try {
      const response = await axios.post(`${apiUrl}/agendar/check`, {
        params: { dateTime: dateTime },
      });
      console.log(response.data.available);
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
                  <td>
                    {editingId === agendamento.id ? (
                      <input
                        type="date"
                        value={editedData.data}
                        onChange={(e) => setEditedData({ ...editedData, data: e.target.value })}
                      />
                    ) : (
                      new Date(agendamento.date).toLocaleDateString()
                    )}
                  </td>
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
                            onChange={() => {
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
                            onChange={() => {
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
