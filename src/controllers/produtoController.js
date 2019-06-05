const Produto = require('../model/produto')
const Categoria = require('../model/categoria')

let produtos = [
    new Produto(1, 1, 'Martelo', new Categoria(1, 'Ferramentas')),
    new Produto(2, 2, 'Furadeira', new Categoria(1, 'Ferramentas')),
    new Produto(3, 3, 'Batom', new Categoria(5, 'Cosméticos')),
    new Produto(4, 4, 'Celular', new Categoria(7, 'Eletrônicos'))
]

exports.get = (req, res, next) => {
    res.status(200).send(produtos);
};

exports.getById = (req, res, next) => {
    var achou = false;
    produtos.forEach(function(produto){
        if (produto.id == req.params.id) {
            achou = true;
            res.status(200).send(produto)            
        }            
    })
    if (!achou) 
        res.status(200).send('Produto não encontrado!');    
};

exports.post = (req, res, next) => {
    produto = new Produto(req.body.id, 
                            req.body.codigo,
                            req.body.nome,
                            new Categoria(req.body.categoria.id, req.body.categoria.descricao))
    produtos.push(produto)
    res.status(200).send('Produto adicionado com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    var achou = false;
    for (i = 0; i < produtos.length; i++) { 
        if (produtos[i].id == id) {
            produtos[i].codigo = req.body.codigo;
            produtos[i].nome = req.body.nome;
            achou = true;
            res.status(200).send(`Produto id ${id} atualizado com sucesso!`);
        }                    
    }
    if (!achou) 
        res.status(200).send('Produto não encontrada!');       
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    var achou = false;
    for (i = 0; i < produtos.length; i++) { 
        if (produtos[i].id == id) {
            produtos.splice(i, 1)
            i--
            achou = true;
            res.status(200).send(`Produto id ${id} excluído com sucesso!`);
        }                    
    }
    if (!achou) 
        res.status(200).send('Produto não encontrada!'); 
};