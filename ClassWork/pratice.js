// practice 
//short by name
//display only name and email
db.users.aggregate([
    {$project: {
        _id: 0,
        name: 1,
        email: 1

    }},
    {$sort: {
      name: 1
    }}
])

// show index 
db.users.getIndexes()

// create a new index on email 
db.users.createIndex({email: 1})

//delete index
db.users.dropIndex()

//display the document of abc@gmail.com
db.users.find(
    {
        email: "abc@gmail.com"
    }
)

// same thing using aggregate 
db.users.aggregate([
    { $match: { email: "abc@gmail.com" }},
    {$project: {_id: 0, email: 1}}
])