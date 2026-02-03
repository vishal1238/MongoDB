db.products.insertMany([
    {
        name: "Laptop",
        price: 10000
    },
    {
        name: "Desktop",
        price: 7000
    },
    {
        name: "Keybaord",
        price: 4000
    }
])

db.products.updateMany(
    {},
    { $set: {rating: 3}}
)

db.products.updateMany(
    {},
    { $set: {description: "This is the description"}}
)

db.products.find(
    {price: {$gt: 3000}}
)

db.products.find(
    {$and: [{name: "Desktop"},{price: {$gt: 3000}}]}
)

db.products.find()
  .sort({ price: -1 })
  .limit(3)


db.products.find({},{_id: 0, name: 1, price: 1})


db.products.updateMany(
    {},
    { $inc: { price: 100 } }
)
  
db.products.deleteOne({name: "laptop"})