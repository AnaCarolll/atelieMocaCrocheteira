const formatacaoDeDados = colunasPlanilha.map(ticket => ({
    numero_ticket: ticket.numero_ticket,
    data_busca_cliente: moment(ticket.data_busca_cliente, 'DD/MM/YYYY').format('YYYY-MM-DD'), // Formatação correta
    observacao: ticket.observacao,
    data_minha_busca: moment(ticket.data_minha_busca, 'DD/MM/YYYY').format('YYYY-MM-DD') // Formatação correta
}));