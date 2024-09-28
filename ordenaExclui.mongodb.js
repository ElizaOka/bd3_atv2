const database= 'BD3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);


db[collection].find({ categoria: { $ne: 'Eletrônicos' } }
).sort({ valor: -1 });


