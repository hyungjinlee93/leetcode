/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let map = {};
  for (let i = 0; i < tickets.length; i++) {
    if (map[tickets[i][0]] === undefined) {
      map[tickets[i][0]] = [tickets[i][1]];
    } else {
      map[tickets[i][0]].push(tickets[i][1]);
    }
  }
  let itins = [];
  let itin = ['JFK'];
  let flights = new Set();
  let helper = (from, itin) => {
    for (let i = 0; i < map[from].length; i++) {
      if (!flights.has(from + map[from][i])) {
        itin.push(map[from][i]);
        if (itin.length === tickets.length + 1) {
          itins.push(itin.slice());
        } else {
          flights.add(from + map[from][i]);
          helper(map[from][i], itin);
          flights.delete(from + map[from][i]);
        }
        itin.pop();
      }
    }
  }
  helper('JFK', itin);
  return itins;
};
return findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]);