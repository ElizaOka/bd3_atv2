const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

//mostra  o produto de valor  mais alto
db[collection].find().sort({ valor: -1 }).limit(1);


// mostra o produto de valor  mais baixo
// db[collection].find().sort({ valor: 1 }).limit(1);

