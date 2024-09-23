const PI = 3.1415
let radius = 5 
const area = PI * radius * radius
const space = 0.8 
// square meters
let plants =20
const maxNumberPlants = 25*PI/0.8

plantNumberWeek1 = plants * 2**1
plantNumberWeek2 = plants * 2**2
plantNumberWeek3 = plants * 2**3

if (plantNumberWeek1>maxNumberPlants*0.8){
    console.log("Pruned")
} else if (0.5*maxNumberPlants < plantNumberWeek1 && plantNumberWeek1<0.8*maxNumberPlants) {
    console.log("Monitored")
} else {
    console.log("Planted")
}

if (plantNumberWeek2>maxNumberPlants*0.8){
    console.log("Pruned")
} else if (0.5*maxNumberPlants < plantNumberWeek2 && plantNumberWeek2<0.8*maxNumberPlants) {
    console.log("Monitored")
} else {
    console.log("Planted")
}

if (plantNumberWeek3>maxNumberPlants*0.8){
    console.log("Pruned")
} else if (0.5*maxNumberPlants < plantNumberWeek3 && plantNumberWeek3<0.8*maxNumberPlants) {
    console.log("Monitored")
} else {
    console.log("Planted")
}

// part2

let plantNumberWeek10 = plants * 2**10
let plantAreaWeek10 = plantNumberWeek10 * space
let additionlSpace = plantAreaWeek10 - area
console.log(`additional space required is ${additionlSpace} squared meters`)






let startingArea = space * plants
console.log(startingArea)






