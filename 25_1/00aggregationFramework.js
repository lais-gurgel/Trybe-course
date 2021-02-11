// Operador $match and $limit
// Utilizando o banco de dados agg_example , faça os seguintes exercícios:
// Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate(
  [{ $match: { from: "Dave America" } }]
);
// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          { value: { $gt: 700, $lt: 6000 } },
          { to: "Lisa Simpson" },
        ]
      }
    }
  ]
);
// Selecione três transações com o valor acima de 1000.
db.transactions.aggregate(
  [
    { $match: { value: { $gte: 1000 } } },
    { $limit: 3 }
  ]
);
