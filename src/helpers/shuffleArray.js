export default (array) => {
  const newArray = array;

  for (let i = newArray.length - 1; i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const itemAtIndex = newArray[randomIndex];

    newArray[randomIndex] = newArray[i];
    newArray[i] = itemAtIndex;
  }
  return newArray;
};
