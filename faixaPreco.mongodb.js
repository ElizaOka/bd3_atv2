const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

// db[collection].find(
//     {valor: {$gte:200, $lte:800}}
// )


db[collection].find(
    {valor: {$gte:200, $lte:800}}
).limit(2) //aqui limita a quantidade de produto