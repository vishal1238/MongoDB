db.employees.find(
    {department: "HR"}
)


db.employees.find(
    { department: { $eq: "HR" } }
)
  
//equals to
db.employees.find(
    {salary: {$eq: 3000}}
)

//greater then
db.employees.find(
    {salary: {$gt: 3000}}
)

//greater then and equals to
db.employees.find(
    {salary: {$gte: 3000}}
)

//not equals to
db.employees.find(
    {salary: {$ne: 3000}}
)

//less then
db.employees.find(
    {salary: {$lt: 3000}}
)

//less then and equals to
db.employees.find(
    {salary: {$lte: 3000}}
)