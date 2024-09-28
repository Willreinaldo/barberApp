import styled from 'styled-components';

export const ScheduleConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 20px;
`;

export const InfoContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
`;

export const InfoTitle = styled.p`
  color: #888; /* Gray color for the topic titles */
  font-weight: bold;
  margin: 0;
  padding-bottom: 1em;
`;

export const InfoContent = styled.p`
  color: #000; 
  font-weight: bold;
  margin: 0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #0051b1;
  color: #fff;
  width: 14rem;
  height: 4rem;
  cursor: pointer;
  font-size:1.2em;
  &:hover {
    background-color: #0041a1;
  }
`;