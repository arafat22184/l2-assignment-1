//* Assignment-1

//! Problem-1
const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  else if (typeof value === "boolean") {
    return !value
  }
}

// ! Problem-2
const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length
  }
  else if(Array.isArray(value)) {
    return value.length
  }
}


// ! Problem-3
class Person {
  name: string;
  age: number;
  constructor(name:string, age:number) {
    this.name = name,
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}



// ! Problem-4
type ProblemFourType = {
  title: string;
  rating: number;
}

const filterByRating = (arr:ProblemFourType[]): ProblemFourType[] => {
 return arr.filter(item=> item.rating >= 4)
}

// ! Problem-5
type ProblemFiveType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (arr: ProblemFiveType[]):ProblemFiveType[] => {
  return arr.filter(user=> user.isActive === true)
}

// ! Problem-6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}

// ! Problem-7
const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const newArr: T[] = [];

  for (const element of arr1) {
    if (!newArr.includes(element)) {
      newArr.push(element)
    }
  }

  for (const element of arr2) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }

  return newArr;
};