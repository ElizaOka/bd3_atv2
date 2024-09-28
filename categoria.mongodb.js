const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);


// Pesquisa  por categoria
// db[collection].find(
//     {categoria: {$eq:'Informática'}}
// )


// pesquisa por categoria limitando a quantidade a ser exibida
db[collection].find(
    {categoria: {$eq:'Informática'}}
).limit(3);



// pesquisa  por duas  categorias 
// db[collection].find(
//     {categoria: {$in:['Informática', 'Eletrônicos']}}
// )


//Pesquisa  por  2 categorias  limitando os produtos
// db[collection].find(
//     {categoria: {$in:['Informática', 'Eletrônicos']}}
// ).limit(5);
