
const fetch =  require('node-fetch');

const functions = {

    url: 'https://uinames.com/api/?amount=10',

    getFirstName(data) {
        return data[0].name;
    },

    getAllFirstNames(data) {
        return data.map(person => person.name);
    },

};

const me = {"name":"Dean","surname":"Bate","gender":"male","region":"Canada"};
console.log(me);

const sMe = JSON.stringify(me);
console.log(sMe);


export default functions;