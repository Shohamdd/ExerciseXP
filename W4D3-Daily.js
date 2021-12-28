//P1
let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let getCarHonda = (carInventory) => {
  let i = inventory.filter((v) => v.car_make === "Honda")[0];
  return `This is a ${i.car_make} ${i.car_model} from ${i.car_year}`;
};
console.log(getCarHonda(inventory));


//P2
let inventory2 = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
const sortCarInventoryByYear = (carInventory) =>
  carInventory.sort((a, b) => (a.car_year > b.car_year && 1) || -1);
console.log(sortCarInventoryByYear(inventory2));
