
const users = [
  { name: "John", age: 30 },
  { name: "Jane", email: "mark@google.com" },
  { name: "Mike", city: "Milan" },
  { name: "Oscar", phoneNumber: 139544454353 },
  { name: "user1", isActive: true}
];

for (const { name, email, age, city, phoneNumber, isActive } of users) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    console.log(`Phone: ${phoneNumber}`);
    console.log(`Is here: ${isActive}`)
};

