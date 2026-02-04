db.employees.find(
    {},
    {name: 1, dept: "$department"}
)

db.users.insertOne(
    {
        name: "Yash",
        age: 20,
        address: {addr1: "50 Verdin Ct", city: " Columbus"}

    }
)

db.users.insertMany([
    {
        name: "Vishal",
        age: 21,
        address: { addr1: "23 sector", city: "noida" }
    },
    {
        name: "Aman",
        age: 19,
        address: { addr1: "12 sector", city: "delhi" }
    }
])

db.users.updateMany(
    {},
    {
      $set: {
        "address.state": "India"
      }
    }
  )
  

db.users.find({},
    {name: 1,
        age: 1,
        city: "$address.city",
        state: "$address.state"

    }
)

//Add skils array for all users
// and populate Java, Python

db.users.updateMany(
    {},
    { 
        $set: { skills: ["Java", "Python"] }
    }
)

db.users.insertOne({
    name: "Ria",
    age: 22,
    skills: []
  })
  

db.users.updateOne(
    {name: "Ria"},
    { 
        $addToSet: { skills: ".NET" }
    }
)

db.users.find({},{
    _id: 0,
    name: 1,
    skills: 1
})

db.users.aggregate([
    {$project: {
      _id: 0,
      name: 1,
      skills: 1
    }},
    {$unwind: "$skills"} // to convert array into object
])