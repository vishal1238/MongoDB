use ("restaurant");

db.Menu.insertOne({
    item: "Burger",
    category: "Fast Food",
    price: 120,
    available: true
  })
  
  db.Menu.insertMany([
    { item: "Pizza", category: "Fast Food", price: 250, available: true },
    { item: "Pasta", category: "Italian", price: 200, available: true },
    { item: "French Fries", category: "Snacks", price: 80, available: false },
    { item: "Cold Coffee", category: "Beverage", price: 150, available: true },
    { item: "Momos", category: "Snacks", price: 90, available: true }
  ])
  