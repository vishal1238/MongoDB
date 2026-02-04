db.employees.aggregate(
    [
        {$project: {
          _id: 0,
          name: 1,
          salary: 1,
          grade: {
            $cond: [{$gt: ["$salary",4000]},"Grade A","Grade B"] //true or false condition
          }
        }}
    ]
)


db.employees.aggregate([
    {$project:{
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
            $cond: {if: {$gt: ["$salary", 4000]},then: "Grade A", else: "Grade B"}
        }
    }}
])


db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $switch: {
          branches: [
            {
              case: { $gte: ["$salary", 4000] },
              then: "Grade A"
            },
            {
              case: { $gte: ["$salary", 3000] },
              then: "Grade B"
            }
          ],
          default: "Grade C"
        }
      }
    }
  }
])

db.orders.insertOne({
    empid: ObjectId("69803ed6830a5baa37628ca0"),
    product: "desktop",
    orderValue: 21000
})

db.orders.insertMany([
    {
      empid: ObjectId("69803ed6830a5baa37628ca0"), // Saurab
      product: "laptop",
      orderValue: 55000
    },
    {
      empid: ObjectId("6982f126020200b57c63b113"), // Vishal
      product: "mobile",
      orderValue: 30000
    },
    {
      empid: ObjectId("6982f126020200b57c63b114"), // Aman
      product: "headphones",
      orderValue: 4000
    },
    {
      empid: ObjectId("6982f785020200b57c63b115"), // Ria
      product: "monitor",
      orderValue: 15000
    }
  ])
  