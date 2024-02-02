//#1
function findLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord(["Java", "Python", "JavaScript"]));

  //#2
  function sumUniqueNumbers(arr) {
    let sum = 0;
    const count = {};
    for (let num of arr) {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }
    for (let num in count) {
      if (count[num] === 1) {
        sum += Number(num);
      }
    }
    return sum;
  }
  console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -5
  console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 10
  console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 30

  //#3
  function mergeArrays() {
    let mergedArray = [];
    let arrays = Array.from(arguments);
    mergedArray = mergedArray.concat(...arrays);
    mergedArray = [...new Set(mergedArray)];
    return mergedArray;
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

  //#4
  function hasProperty(obj, propertyName) {
    return propertyName in obj;
  }
  console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
  console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
  console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

//#5
  function getPropertyValue(obj, prop) {
    return obj[prop];
  }
  console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
  console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
  console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".


//#6
  function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(key => {
      inverted[obj[key]] = key;
    });
    return inverted;
  }
  const originalObject1 = { a: 1, b: 2, c: 1 };
  const invertedObject1 = invertObject(originalObject1);
  console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }