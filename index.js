const app = require('./app')

console.log("Pawan")
var a=40
var b=50
var c = a+b
const zee = app.z

const result = zee.filter( (item) => {
    return item === 3
})
console.log(result)
