const customers = [
    {
      name: "Miora Nancy",
      email: "miora@gmail.com",
      purchases: ["Notebook", "Pen"]
    },
    {
      name: "Jey ",
      email: "jey@icloud.com",
      purchases: ["Backpack"]
    },
    {
      name: "Alice Ran",
      email: "alice@gmail.com",
      purchases: ["Laptop", "Charger"]
    }
  ];
  
  customers.push({
    name: "David Kim",
    email: "david@gmail.com",
    purchases: ["Mouse"]
  });
  const removed = customers.shift();
  console.log("Removed customer:", removed);
  
  customers[0].email = "jey@newmail.com";
  customers[1].purchases.push("Tablet");
  
  customers.forEach((customer, index) => {
    console.log(`Customer #${index + 1}`);
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
    console.log("---------------------------");
  });
  