
const car1 = {
    brand: "Mitsubishi",
    model: "Lancer Evolution",
    year: 2008
};

const car2 = {
    brand: "Toyota",
    model: "Celica GT-four",
    owner: "Mark Miller"
};

const car3 = { ...car1, ...car2 };

console.log(car3);