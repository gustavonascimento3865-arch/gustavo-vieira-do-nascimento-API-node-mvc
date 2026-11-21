const produtoModel = require('../models/produtoModel');

function dadosValidos(body) {
  const { nome, preco, estoque } = body;
  return (
    typeof nome === 'string' && nome.trim() !== '' &&
    preco !== undefined && !isNaN(Number(preco)) &&
    estoque !== undefined && Number.isInteger(Number(estoque))
  );
}

async function listar(req, res) {
  try {
    const produtos = await produtoModel.buscarTodos();
    res.status(200).json(produtos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Nao foi possivel listar os produtos.' });
  }
}

async function cadastrar(req, res) {
  try {
    if (!dadosValidos(req.body)) {
      return res.status(400).json({ erro: 'Informe nome, preco e estoque validos.' });
    }
    const { nome, preco, estoque } = req.body;
    const id = await produtoModel.inserir(nome, preco, estoque);
    res.status(201).json({ id, nome, preco, estoque });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Nao foi possivel cadastrar o produto.' });
  }
}

async function atualizar(req, res) {
  try {
    if (!dadosValidos(req.body)) {
      return res.status(400).json({ erro: 'Informe nome, preco e estoque validos.' });
    }
    const { id } = req.params;
    const { nome, preco, estoque } = req.body;
    const afetadas = await produtoModel.alterar(id, nome, preco, estoque);
    if (afetadas === 0) {
      return res.status(404).json({ erro: 'Produto nao encontrado.' });
    }
    res.status(200).json({ id: Number(id), nome, preco, estoque });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Nao foi possivel atualizar o produto.' });
  }
}

async function remover(req, res) {
  try {
    const afetadas = await produtoModel.excluir(req.params.id);
    if (afetadas === 0) {
      return res.status(404).json({ erro: 'Produto nao encontrado.' });
    }
    res.status(200).json({ mensagem: 'Produto excluido.' });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Nao foi possivel excluir o produto.' });
  }
}

module.exports = { listar, cadastrar, atualizar, remover };
