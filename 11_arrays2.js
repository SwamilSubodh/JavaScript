const marvel_heroes = ["ironman","spiderman","thor"]
const dc_heroes = ["batman","superman","flash"]
marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes) //array k andar arrays aagya
//console.log(marvel_heroes[3])

//other method
const total_arr=marvel_heroes.concat(dc_heroes)
console.log(total_arr)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7, [4, 5]]]
const real_another_array = another_array.flat()
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//check whether the following is an araray or not
console.log(Array.from("Swamil")) //converts the string to array
console.log(Array.from(name:"swamil"))//interesting

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))