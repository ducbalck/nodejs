const mongodb =  require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = callback =>{
    MongoClient.connect(
        'mongodb+srv://minhduc237:mjnhduc237@cluster0.ei7bq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client =>{
            console.log('Connected');
            callback(client);
        })
        .catch(err =>{
            console.log(err);
        })
    }
        

module.exports = mongoConnect ;