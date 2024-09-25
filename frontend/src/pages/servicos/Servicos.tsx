import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Footer, Paragraph } from './Servicos.Styles';
import { useNavigate } from 'react-router-dom';

const Servicos: React.FC = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Navbar />
        
          <Footer>
            <Paragraph>Venha nos visitar e faça parte da nossa história!</Paragraph>
            <Paragraph>Contato: xxx@xxx.com</Paragraph>
            <Paragraph>Endereço: Rua xxx, xx - Cidade, Estado</Paragraph>
  
          </Footer>
       
      </div>
    );
  };
      
  
export default Servicos;