/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  if(people.length === 0) {
      return [];
  }
  let max = 0;
  let maxes = [];
  people.sort((a, b) => {
      if(a[0]!==b[0]) {
          return b[0] - a[0];
      } else {
          return a[1] - b[1];
      }
  })
  max = people[0][0];
  for(let i = 1; i < people.length; i++) {
      if(people[i][0] === max) {
          continue;
      } else {
          let temp = people.splice(i, 1);
          temp = [temp[0][0], temp[0][1]];
          people.splice(temp[1], 0, temp);
      }
  }
  return people;
};