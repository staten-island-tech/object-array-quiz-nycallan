const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

//3) return only the last three presidents

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

//1)
const dems = presidents.filter(function (president) {
  if (president.party == "D") {
    return true;
  }
});
console.log(dems);

//2)

const reps = presidents.filter((president) => {
  if (president.party == "R" && president.terms == 1) {
    return true;
  }
});

console.log(reps);

//3)

const last3 = presidents.slice(0, 3);
console.log(last3);

//4)

const dem2 = democrat.filter(function (democrat) {
  if (democrat.terms == 2) {
    return true;
  }
  presidents.slice(0, 11);
});
console.log(dem2);
