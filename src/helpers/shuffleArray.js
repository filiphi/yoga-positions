export default (array) => {
  console.log('array is');
  console.log(array);
  const newArray = array;

  for (let i = newArray.length - 1; i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const itemAtIndex = newArray[randomIndex];
    console.log('itemAtIndex is');
    console.log(itemAtIndex);

    newArray[randomIndex] = newArray[i];
    newArray[i] = itemAtIndex;
  }
  console.log('new array is');
  console.log(newArray);
  return newArray;
};
