// const express = require('express');

// const app = express();

// app.get('/hello', (req, res) => {
//   res.json({
//     message: 'Hello World!'
//   });
// });

// app.get('/goodbye', (req, res) => {
//     res.json({
//         message: 'Goodbye friend!'
//     });
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
//   });

  const express = require('express');
const app = express();

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/plants/:indexOfPlant/:name', (req, res) => {
    res.json({
        plant: `Hello ${req.params.name}! Your plant is: ${plants[req.params.indexOfPlant]}`
    });     
});

app.get('/howdy/:firstName', (req, res) => {
    console.log(req.query);
    res.json({
        message: `Howdy, ${req.params.firstName} ${req.query.lastName}`
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});
