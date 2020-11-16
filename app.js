const mongoose = require('mongoose')

// Connect URL and insert db if not available
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true })

// Validation data
const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
  // name: 'Apple',
  rating: 10,
  review: 'Yummy delicious fruit'
})

// fruit.save()

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
}) 

const Person = mongoose.model("Person", personSchema)

// ############## Relationship between data ##############

const durian = new Fruit ({
  name: "Durian",
  rating: 10,
  review: "Delicious fruit"
})

// durian.save()

const person = new Person({
  name: "Haris",
  age: 19,
  favoriteFruit: durian 
})

// person.save()

// ####### Add more than 1 item in collection ###########
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 9,
//   review: "Good taste"
// })

// const orange =  new Fruit({
//   name: "Orange",
//   rating: 5,
//   review: "Very acid fruit"
// })

// Fruit.insertMany([kiwi, orange], function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Succes add some fruit in fruitsDB")
//   }
// })

// ############# Read database in console #############
Fruit.find(function(err, fruits){
  if (err){
    console.log(err)
  } else {

    mongoose.connection.close()

    fruits.forEach(fruit => {
      console.log(fruit.name)
    })
  }
})

// ############# Implement update #####################

// Fruit.updateOne({_id: "5fb1be1699c8d01f52259c50"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Succesfully updated data")
//   }
// })
// ############## Delete document ##################
// Fruit.deleteOne({_id: "5fb1be1699c8d01f52259c50"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Succes delete document")
//   }
// })

// Person.deleteMany({name: "Budi Rahmawan"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Succes delete all name Budi Rahmawan")
//   }
// })

