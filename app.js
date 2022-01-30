// solution 1
// function strCount(obj){
//   let sum = 0;
//    for (let i in obj) {
//      if (typeof obj[i] == 'object') sum += strCount(obj[i]);
//      if (typeof obj[i] == 'string') sum += 1
//    }
//    return sum;
//  }
  
// solution 2

// const strCount = obj =>
//   typeof obj !== `string` ? Object.values(obj || {})
//   .reduce((pre, val) => pre + strCount(val), 0) : 1;

// solution 3
// const strCount = (x) => JSON.stringify(Object.assign({}, x))
// .match(/\"(,|}|])/g).length;

// solution 4

const strCount=obj=> Object.values(obj)
      .reduce( (acc,v) =>  acc + ( v&&typeof v==="object" ? strCount(v) : typeof v==="string"), 0)


console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }));
