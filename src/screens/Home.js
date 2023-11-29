import React from 'react';

function Home() {
  // Simulação de dados
  const totalAPagar = 1000; // Substitua isso pelos seus próprios dados
  const totalAReceber = 1500; // Substitua isso pelos seus próprios dados

  const diferenca = totalAReceber - totalAPagar;

  return (
    <div>
      <h2>Resumo Financeiro</h2>
      <p>Total a Pagar: R${totalAPagar}</p>
      <p>Total a Receber: R${totalAReceber}</p>
      <p>Diferença: R${diferenca}</p>

      {/* Adicione gráficos ou outros elementos visuais aqui, se desejar */}
    </div>
  );
}

export default Home;
