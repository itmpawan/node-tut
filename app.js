const fs = require('fs').writeFileSync;

fs('hello.txt', "This is file write sync function for external module.");
module.exports = {
    x : 10,
    y : 30,
    z: [2,3,4,6,3,6,8,3]
}