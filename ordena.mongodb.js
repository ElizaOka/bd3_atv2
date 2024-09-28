const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

// ordena do mais  barato para o mais caro
// db[collection].find().sort({ valor: 1 })


// ordena do mais caro para o mais barato
db[collection].find().sort({ valor: -1 })


