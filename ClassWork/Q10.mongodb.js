db.employees.find(
    {email: "brain@gmail.com"}
).explain("executtionStats");

db.employees.createIndex({email: 1});

db.employees.getIndexes();

db.employees.dropIndex();
db.employees.insertOne({name: abc})

db.employees.find({},{_id: 0, name: 1}).sort({name: 1})


db.employees.find({},{_id: 0, name: 1}).collection({locale: 'en', strength: 2}).sort({name: 1})