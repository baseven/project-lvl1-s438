// This function generates a random integer from minNum to maxNum, [minNum, maxNum]
const genNum = (minNum, maxNum) => Math.round(Math.random() * (maxNum - minNum) + minNum);

export default genNum;
