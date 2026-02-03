db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)
db.employees.aggregate(
    [
        {
            $match: {department: "HR"}
        }
    ]
)

db.employees.aggregate(
    [
        {
            $match: {name: "HR"}
        }
    ]
)