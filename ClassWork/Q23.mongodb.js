//Create folder mongo-replica
//Create folders - usa, uk, india
//inside mongo-replica folder

//mongod -replSet rs1 --dbpath "C:\mongo-replica\usa" --port 27018
//mongod -replSet rs1 --dbpath "C:\mongo-replica\uk" --port 27019
//mongod -replSet rs1 --dbpath "C:\mongo-replica\india" --port 27020

//mongosh --port 27018

rs.initiate({
    _id: "rs1",
    members:[
        {_id: 0, host: "127.0.0.1:27018"},
        {_id: 1, host: "127.0.0.1:27019"},
        {_id: 2, host: "127.0.0.1:27020"}
    ]
})


//rs.config()


//rs.status()

//new tab
//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

//use mydatabase

//db.users.insertOne({naem: "Vishal", age: 21})

//mongosh --port 27018
//mongosh --port 27019
//mongosh --port 27020  

//db.shutdownServer


// use hdfcbank 
// db.customers.insertOne({_id: "c1", name: "John", balance: 1000})
// db.customers.insertOne({_id: "c2", name: "Mike", balance: 1000})
//db.customers.find()