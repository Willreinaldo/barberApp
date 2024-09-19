export const formatDate = (dateString: string) => {
  try {
    // Objeto que mapeia os meses abreviados em português para seus números correspondentes
    const months: { [key: string]: string } = {
      jan: '01',
      fev: '02',
      mar: '03',
      abr: '04',
      mai: '05',
      jun: '06',
      jul: '07',
      ago: '08',
      set: '09',
      out: '10',
      nov: '11',
      dez: '12',
    };

    console.log('Original dateString:', dateString);

    // Remove o dia da semana e vírgulas, limpa a string
    const cleanedDate = dateString.replace(/^[a-zA-Zá-ú]+,\s*/, '').trim();
    console.log('Cleaned date:', cleanedDate);

    // Remove o texto "de" e pontos
    const parts = cleanedDate.split(' ').filter(part => part !== 'de').map(part => part.replace('.', ''));
    console.log('Parts after removing "de" and dot:', parts);

    if (parts.length !== 3) {
      throw new Error('Data inválida');
    }

    // Extrai o dia e o mês (abreviado)
    const [dayofWeek, day, monthAbbr] = parts;
    console.log('Extracted values - Day:', day, 'Month Abbreviation:', monthAbbr);

    // Substitui o mês abreviado pelo número correspondente
    const month = months[monthAbbr.toLowerCase()];
    console.log('Month number:', month);

    if (!month) {
      throw new Error(`Mês inválido: ${monthAbbr}`);
    }

    // Define o ano atual como padrão (ajuste conforme necessário)
    const year = new Date().getFullYear();
    const formattedDate = `${year}-${month}-${day.padStart(2, '0')}`;
    console.log('Formatted Date:', formattedDate);
    
    return formattedDate;

  } catch (error) {
    console.error('Error in formatDate:', error);
    throw error;
  }
};