let myArr = [
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "kyle", id: 1 },
  { name: "nick", id: 2 },
  { name: "nick", id: 2 },
  { name: "nick", id: 2 },
  { name: "nick", id: 2 },
  { name: "nick", id: 2 },
  { name: "nick", id: 2 }
];

function red(arr) {
  let nick = 0;
  let kyle = 0;
  arr.forEach(x => {
    if (x.name === "kyle") {
      kyle++;
    } else if (x.name === "nick") {
      nick++;
    }
  });
  return [nick, kyle];
}

console.log(red(myArr));
