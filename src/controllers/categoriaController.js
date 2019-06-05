const Categoria = require('../model/categoria')

let categorias = [
    new Categoria(1, 'Ferramentas'),
    new Categoria(2, 'Móveis'),
    new Categoria(3, 'Tapetes'),
    new Categoria(4, 'Fotos e filmagens'),
    new Categoria(5, 'Cosméticos'),
    new Categoria(6, 'Cafeteria'),
    new Categoria(7, 'Eletrônicos')
]

exports.get = (req, res, next) => {
    res.status(200).send(categorias);
};

exports.getById = (req, res, next) => {
    var achou = false;
    categorias.forEach(function(categoria){
        if (categoria.id == req.params.id) {
            achou = true;
            res.status(200).send(categoria)            
        }            
    })
    if (!achou) 
        res.status(200).send('Categoria não encontrada!');    
};

exports.post = (req, res, next) => {
    categoria = new Categoria(req.body.id, req.body.descricao)
    categorias.push(categoria)
    res.status(200).send('Categoria adicionada com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    var achou = false;
    for (i = 0; i < categorias.length; i++) { 
        if (categorias[i].id == id) {
            categorias[i].descricao = req.body.descricao;
            achou = true;
            res.status(200).send(`Classificacao id ${id} atualizada com sucesso!`);
        }                    
    }
    if (!achou) 
        res.status(200).send('Categoria não encontrada!');       
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    var achou = false;
    for (i = 0; i < categorias.length; i++) { 
        if (categorias[i].id == id) {
            categorias.splice(i, 1)
            i--
            achou = true;
            res.status(200).send(`Classificacao id ${id} excluída com sucesso!`);
        }                    
    }
    if (!achou) 
        res.status(200).send('Categoria não encontrada!'); 
};