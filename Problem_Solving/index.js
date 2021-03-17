const question1 = (a, a2) => {
  let result = [];
  for (let item of a2) {
    a.push(item);
  }

  for (let i = 0; i < a.length; i++) {
    let count = 0;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        console.log(a[i], '1');
        console.log(a[j]);
        let index = a.indexOf(a[j]);
        a.splice(index, 1);
        count++;
        j--;
      }
    }
    let index = a.indexOf(a[i]);
    if (count > 0) {
      a.splice(index, 1);
      i--;
    }
  }
  return a;
};

// console.log(question1([2,3,3,3,3,4],[4,5,6]))

const question2 = (arr) => {
  arr.sort(function (a, b) {
    if (b.point - a.point == 0) {
      if (a.GD - b.GD == 0) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        return a.GD - b.GD;
      }
    } else {
      return b.point - a.point;
    }
  });
  let i = 0
  for(let item of arr ){
      i++
      item.position = i
  }
  return arr;
};

console.log(
  question2([
    {
      name: 'Arsenal',
      points: 99,
      GD: 45,
    },
    {
      name: 'Chelsea',
      points: 75,
      GD: 39,
    },
    {
      name: 'MU',
      points: 60,
      GD: 29,
    },
    {
      name: 'Liverpool',
      points: 88,
      GD: 39,
    },
  ])
);
