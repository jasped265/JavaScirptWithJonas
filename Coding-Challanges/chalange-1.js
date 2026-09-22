const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markHigherBmi;

const markbmi = markMass / markHeight ** 2;
const johnbmi = johnMass / johnHeight ** 2;

markHigherBmi = markbmi > johnbmi;

console.log(markbmi, johnbmi, markHigherBmi);
