db.employees.find(
    {},
    {name: 1, dept: "$department"}
)

db.users.insertOne(
    {
        name: "Yash",
        age: 20,
        
    }
)