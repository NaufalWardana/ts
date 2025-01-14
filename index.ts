// Soal 1

type Person = {
    firstName: string;
    lastName: string;
  };
  
  function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }
  
  const person: Person = { firstName: "John", lastName: "Doe" };
  console.log(getFullName(person));


// Soal 2

function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray(123)); 
console.log(wrapInArray("Hello")); 
console.log(wrapInArray({ name: "Alice" })); 

  export {};