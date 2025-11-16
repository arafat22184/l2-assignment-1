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