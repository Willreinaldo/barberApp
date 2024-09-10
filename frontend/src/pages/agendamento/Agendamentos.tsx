import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { AgendamentosContainer, PageContainer, Table } from './Agendamentos.styles';

// Definindo o tipo para os agendamentos
type AgendamentoType = {
  id: number;
  data: string;
  horario: string;
  profissional: string;
  servico: string;
  status: string;
  valor: number;
};

const agendamentosIniciais: AgendamentoType[] = [
  {
    id: 1,
    data: '2024-09-01',
    horario: '14:00',
    profissional: 'João',
    servico: 'Corte de Cabelo',
    status: 'Agendado',
    valor: 50.0,
  },
  {
    id: 2,
    data: '2024-09-02',
    horario: '15:00',
    profissional: 'Carlos',
    servico: 'Barba',
    status: 'Agendado',
    valor: 30.0,
  },
  {
    id: 3,
    data: '2024-09-03',
    horario: '16:00',
    profissional: 'Pedro',
    servico: 'Corte e Barba',
    status: 'Agendado',
    valor: 70.0,
  },
];

const Agendamentos: React.FC = () => {
  const [agendamentos, setAgendamentos] = useState<AgendamentoType[]>(agendamentosIniciais);

  const cancelarAgendamento = (id: number) => {
    const novosAgendamentos = agendamentos.map((agendamento) =>
      agendamento.id === id ? { ...agendamento, status: 'Cancelado' } : agendamento
    );
    setAgendamentos(novosAgendamentos);
  };

  return (
    <>
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
                <th>Status</th>
                <th>Valor (R$)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((agendamento) => (
                <tr key={agendamento.id}>
                  <td>{agendamento.data}</td>
                  <td>{agendamento.horario}</td>
                  <td>{agendamento.profissional}</td>
                  <td>{agendamento.servico}</td>
                  <td>{agendamento.status}</td>
                  <td>{agendamento.valor.toFixed(2)}</td>
                  <td>
                    {agendamento.status !== 'Cancelado' && (
                      <button onClick={() => cancelarAgendamento(agendamento.id)}>
                        Cancelar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </AgendamentosContainer>
      </PageContainer>
    </>
  );
};

export default Agendamentos;
