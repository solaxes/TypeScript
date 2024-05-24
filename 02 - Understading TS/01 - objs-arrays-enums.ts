// Enum assigns numbers to labels
enum Role {
  ADMIN = "Admin",
  READ_ONLY = 0,
  AUTHOR,
}

const person = {
  name: "Jaidev",
  age: 44,
  hobbies: ["cricket", "gardening"],
  role: Role.ADMIN,
};

let hobbies: string[];

console.log(person.name);
