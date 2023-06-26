let day = new Date().getDay(); // return current date
let hours = new Date ().getHours(); // return current hours

console.log(hours);

function verifv1(req, res, next) {
    if (day > 0 && day < 6 && hours > 8 && hours < 18) next();
    else
        res.send(
            `<h1>Welcome service closed now... , service open 8h-->17h / Monday-->Friday<h1/>`
        );
}

module.exports = verifv1