function getRandom(){
    for(let i = 0; i < 5; i++){
        console.log(Math.random() * (10 - 5) + 5);
    }
}

module.exports = {getRandom};