use ("ecommerce");

// updating Documents


//update one (updating single document)

// db.products.updateOne(
//     { name: "Wireless Mouse"},
//     { $set: {price: 899}}
// )



// update many (updating multipale documents)

// db.products.updateMany(
//     { category: "Electronics"},
//     { $inc: { stock: 11 }}
// )


//Using $push to Add to Arrays

// db.products.updateOne(
//     { name: "Wireless Mouse"},
//     { $push: {tags: "Mouse"}}
// )