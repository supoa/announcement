const users = [
  { name: "Alice", email: "alice@example.com", phone: "555-555-1234" },
  { name: "Bob", email: "bob@example.com", phone: "555-555-5678" },
  { name: "Charlie", email: "charlie@example.com", phone: "555-555-9101" },
  { name: "Dave", email: "dave@example.com", phone: "555-555-1122" },
];

let count = 0;
setInterval(() => {
  count++;
  console.log(`Interval execution: ${count}`);
  
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 5000);
