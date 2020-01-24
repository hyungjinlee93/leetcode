var knapsack = function(goods, totalWeight) {
    // TODO: Implement
  goods.sort((a, b) => {
    if(b[0]/b[1] !== a[0]/a[1]){
    return b[0]/b[1] - a[0]/a[1];
    } else {
    return b[0] - a[0]
    }
  });
  let helper = (num) => {
    let runningWeight = 0;
    let worth = 0;
    for(let i = num; i < goods.length; i++) {
      if(runningWeight + goods[i][0] < totalWeight) {
        runningWeight += goods[i][0];
        worth += goods[i][1];
      }
    }
    return worth;
  }
  let i = 0;
  let max = 0;
  while(goods[i][1] >= totalWeight / 2) {
    let testworth = helper(i);
    if(helper(i) > worth) {
      max = worth;
    }
  }
  return worth;
}


// TODO: Write test cases!
([[value1, weight1], [value2, weight2]], totalWeight)
