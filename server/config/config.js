// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

//process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  DB
// ============================

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cagefe';
// } else {
urlDB = 'mongodb://localhost:monterrey2018@cluster0-shard-00-00-9hiag.gcp.mongodb.net:27017/cafe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
//}
process.env.URLDB = urlDB;