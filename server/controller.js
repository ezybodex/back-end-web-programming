const houses = require('./db.json');

let globalID = 4;


module.exports = { 

    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        const address = req.body.address;
        const price = req.body.price;
        const imageURL = req.body.imageURL;
        console.log(req.body);
        const house = {
            address, 
            price, 
            imageURL, 
            id: globalID,
        };
        houses.push(house);
        globalID +=1;

        res.send(houses);
    },

    deleteHouse: (req, res) => {

    }
}