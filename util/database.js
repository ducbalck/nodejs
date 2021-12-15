const mongodb =  require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = callback =>{
    MongoClient.connect(
        'mongodb+srv://minhduc237:mjnhduc237@cluster0.ei7bq.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client =>{
            console.log('Connected');
            _db = client.db()
            callback();
        })
        .catch(err =>{
            console.log(err);
            throw err;
        })
}
const getDb =()=>{
    if(db){
        return _db;
    }
    throw 'No database found';
}
        

exports.mongoConnect = mongoConnect;
exports.getDb=getDb;