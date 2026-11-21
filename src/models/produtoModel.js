const pool = require('../config/db');

async function buscarTodos() {
  const [linhas] = await pool.execute('SELECT * FROM produtos');
  return linhas;
}

async function inserir(nome, preco, estoque) {
  const [resultado] = await pool.execute(
    'INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)',
    [nome, preco, estoque]
  );
  return resultado.insertId;
}

async function alterar(id, nome, preco, estoque) {
  const [resultado] = await pool.execute(
    'UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?',
    [nome, preco, estoque, id]
  );
  return resultado.affectedRows;
}

async function excluir(id) {
  const [resultado] = await pool.execute(
    'DELETE FROM produtos WHERE id = ?',
    [id]
  );
  return resultado.affectedRows;
}

module.exports = { buscarTodos, inserir, alterar, excluir };
