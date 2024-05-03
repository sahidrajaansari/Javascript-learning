const cricketPlayer = new Object();
cricketPlayer.name = "MSD";
cricketPlayer.JersyNumber = 7;
cricketPlayer.isAvialable = true;
cricketPlayer.runs = [
  {
    matchType: "ODI",
    run: 1000,
  },
  {
    matchType: "T20",
    run: 2000,
  },
];

// console.log(cricketPlayer.runs[0].matchType);

const date1=new Date('05-11-2000')
const date2=new Date('05-15-2000')
const challanDates=Array.of(date1.toLocaleDateString(),date2.toLocaleDateString())

const car=new Object()
car.Brand="Audi"
car.Model="A4"
car.challanDate=challanDates

// const playerWithTheirCar=Object.assign({},car,cricketPlayer)
const playerWithTheirCar={...car,...cricketPlayer}

console.log(Object.keys(playerWithTheirCar));