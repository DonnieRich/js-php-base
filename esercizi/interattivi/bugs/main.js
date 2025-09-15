const users = [
  { id: 1, name: "Alice", age: 25, isActive: "true" },
  { id: 2, name: "Bob", age: 0, isActive: false },
  { id: 3, name: "Charlie", age: null, isActive: 1 },
  { id: 4, name: "Diana", age: 21, isActive: "false" },
  { id: 5, name: "Eve", age: "30", isActive: true },
  { id: 6, name: "Frank", isActive: true },
  { id: 7, name: "Grace", age: "ten", isActive: true },
  { id: 8, name: "Hank", age: 18, isActive: "false" },
  { id: 9, name: "Ivy", age: "100", isActive: "yes" }
];

// 1 Filtra gli utenti attivi
function getActiveUsers(users) {
  return users.filter(u => u.isActive == true); 
}

// 2 Controlla se l'utente è maggiorenne
function isAdult(user) {
  return user.age >= 18; 
}

// 3 Calcola l'età media degli utenti attivi
function averageAgeOfActiveUsers(users) {
    const activeUsers = getActiveUsers(users);
    let totalAge = 0;
    for(let user of activeUsers) {
        totalAge += user.age;
    }
    return totalAge / activeUsers.length;
}