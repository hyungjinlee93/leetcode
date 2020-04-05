/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let memo = {};
  let output = [];
  let taken = new Set();
  let helper = (course, loopChk) => {
    if (memo[course] === undefined && !taken.has(course)) {
      output.push(course);
      taken.add(course);
    } else if (loopChk.has(course)) {
      return 1;
    } else {
      loopChk.add(course);
      for (let i = 0; i < memo[course].length; i++) {
        if (helper(memo[course][i]) === 1) {
          return 1;
        }
      }
    }
  }
  debugger;
  for (let i = 0; i < prerequisites.length; i++) {
    if (memo[prerequisites[i][0]] === undefined) {
      memo[prerequisites[i][0]] = [prerequisites[i][1]];
    } else {
      memo[prerequisites[i][0]].push(prerequisites[i][1]);
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (helper(i, new Set()) === 1) {
      return [];
    }
  }
};
console.log(findOrder(2, [[1, 0]]));