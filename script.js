
const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
  const p = document.createElement('p');
  p.textContent = i;
  
  numbersDiv.appendChild(p);
} 


const strings = ['red', 'green', 'blue', 'white'];
const stringsContainerDiv = document.querySelector('.strings_container');

for (let i = 0; i < strings.length; i++) {
  const p = document.createElement('p');
  p.textContent = strings[i];

  stringsContainerDiv.appendChild(p);
} 

const users = [
    { first_name: 'Vika', last_name: 'Tser', age: 33 },
    { first_name: 'Olivia', last_name: 'Zel', age: 16 },
    { first_name: 'Olga', last_name: 'Kisel', age: 22 },
  ];
  const usersContainerDiv = document.querySelector('.users_container');
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age >= 18) { 
      const card = document.createElement('div');
      card.classList.add('user-card');
      const name = document.createElement('h2');
      name.textContent = `${user.first_name} ${user.last_name}`;
      const age = document.createElement('p');
      age.textContent = `Age: ${user.age}`;
      card.appendChild(name);
      card.appendChild(age);
      usersContainerDiv.appendChild(card);
    }
    
  }