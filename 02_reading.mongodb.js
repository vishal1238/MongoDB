use ("ecommerce");

// db.products.find({"name": "Wireless Mouse"})
// db.products.find({"category": "Electronics"})

// db.products.find({price: {$gt: 3000}}) //greater then
// db.products.find({price: {$gte: 1000, $lte: 50000}}) // greater than and equal to


//logical operators

// db.products.find({ $or: [{category: "Electronics"}, { stock:{
//     $lt: 50
// }}]})



// Projection(Select Specific Fields)

// db.products.find({}, {name: 1, price: 1, _id: 0})  ///1 = view and 0 = hide



// sorting and limiting
db.products.find().sort({price: -1}).skip(1).limit(2)

//pagination
db.products.find().skip(0).limit(10)
db.products.find().skip(10).limit(10)
db.products.find().skip(20).limit(10)