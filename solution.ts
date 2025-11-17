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
  return arr.filter(item => item.rating >= 4 && item.rating <= 5);
}


// ! Problem-5
type ProblemFiveType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (arr: ProblemFiveType[]): ProblemFiveType[] => {
  return arr.filter(user => {
    if (typeof user.isActive !== "boolean") {
      throw new Error(`Type Error on user: ${user.name}, id:${user.id}`);
    }
    else {
     return user.isActive === true
    }
  })
}


// ! Problem-6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  if (typeof book.isAvailable !== "boolean") {
    throw new Error(`Book available: (${book.isAvailable}) | Type is invalid`);
  }
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}


// ! Problem-7
const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): number[] => {
  const newArr: number[] = [];

  for (const element of arr1) {
    if (typeof element === "string") {
      const convertToNumb = parseInt(element);
      if (!newArr.includes(convertToNumb)) {
      newArr.push(convertToNumb);
      } 
    }else {
        if (!newArr.includes(element)) {
      newArr.push(element);
      }
      }
  }

  for (const element of arr2) {
    if (typeof element === "string") {
      const convertToNumb = parseInt(element);
      if (!newArr.includes(convertToNumb)) {
      newArr.push(convertToNumb);
      } 
    }else {
        if (!newArr.includes(element)) {
      newArr.push(element);
      }
      }
  }

  return newArr;
};


// ! Problem-8
interface ProblemEightType {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: ProblemEightType[]):number => {
  if (products.length === 0) {
    return 0;
  }
  const totalProductPrice = products.reduce((accumulator, product,) => {
     const totalPrice = product.price * product.quantity;

    let discount = product.discount ?? 0;

    if (discount < 0 || discount > 100) {
      throw new Error(`Invalid discount: ${discount}`);
    }

    const afterDiscount = totalPrice - (totalPrice * discount) / 100;

    return accumulator + afterDiscount;
 }, 0);
  
  return totalProductPrice;
}