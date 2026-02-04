db.employees.find(
    {},
    {name: 1, dept: "$department"}
)