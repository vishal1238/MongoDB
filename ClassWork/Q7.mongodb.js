db.employees.updateMany(
    {},
    {$inc:{salary:1000}}
)

db.employees.updateMany(
    {},
    {$set: {points:1}}
)

db.employees.updateOne(
    {email: "abc@gmail.com"},
    {$set: {points: 10}},
    {$upset: true}
);

db.employees.find({},{name: 1})

db.employees.deleteOne({email:"abc@gmail.com"})


db.employees.deleteMany({email:"abc@gmail.com"})