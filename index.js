const express = require('express');

const app = express();

//create dog Data:
const dogInfoData = [

  {
     id : 1,
     Breed : 'German Spitz',
     Origin : 'Germany',
     Height : '12-15 inches tall at the shoulder',
     Weight : '21-29 pounds',
     LifeExpectancy : '13-15 years',
     Hypoallergenic : 'No',
     Price : '6000-10000 INR'
  },
  {
    id : 2,
    Breed : 'Chihuahua',
    Origin : 'Mexico',
    Height : '6-9 inches tall at the shoulder',
    Weight : '3-6 pounds',
    LifeExpectancy : '12-20 years',
    Hypoallergenic : 'No',
    Price : '4000-25000 INR'
  },
  {
   id : 3,
   Breed : 'Siberian Husky',
   Origin : 'Siberia',
   Height : '20-23 inches tall at the shoulder',
   Weight : '35-60 pounds',
   LifeExpectancy : '12-15 years',
   Hypoallergenic : 'No',
   Price : '40000-80000 INR'
  },
  {
    id : 4,
    Breed : 'German Shephard',
    Origin : 'Germany',
    Height : '1 foot 10 inches-2 foot 2 inches tall at the shoulder',
    Weight : '75-95 pounds',
    LifeExpectancy : '9-13 years',
    Hypoallergenic : 'No',
    Price : '18000-50000 INR'
  },
  {
     id : 5,
     Breed : 'Bulldog',
     Origin : 'England',
     Height : '22-24 inches tall at the shoulder',
     Weight : '80-130 Ibs',
     LifeExpectancy : '8-10 years',
     Hypoallergenic : 'No',
     Price : '55000-90000 INR'
  },
  {
     id : 6,
     Breed : 'Golden Retriever',
     Origin : 'Scotland',
     Height : '21-24 inches tall at the shoulder',
     Weight : '55-75 pounds',
     LifeExpectancy : '10-12 years',
     Hypoallergenic : 'No',
     Price : '25000-40000 INR'
  },
  {
     id : 7,
     Breed : 'Poodle',
     Origin : 'France',
     Height : '10-22 inches tall at the shoulder',
     Weight : '6-70 pounds',
     LifeExpectancy : '12-15 years',
     Hypoallergenic : 'Yes',
     Price : '35000-70000 INR'
  },
  {
     id : 8,
     Breed : 'Rottweiler',
     Origin : 'Germany',
     Height : '22-27 inches tall at the shoulder',
     Weight : '85-130 pounds',
     LifeExpectancy : '8-10 years',
     Hypoallergenic : 'No',
     Price : '7000-35000 INR'
  },
  {
     id : 9,
     Breed : 'Pomeranian',
     Origin : 'Poland',
     Height : '7-12 inches tall at the shoulder',
     Weight : '3-7 pounds',
     LifeExpectancy : '12-16 years',
     Hypoallergenic : 'No',
     Price : '3000-20000 INR'
  },
  {
    id : 10,
    Breed : 'Doberman',
    Origin : 'United States',
    Height : '24-28 inches tall at the shoulder',
    Weight : '60-80 pounds',
    LifeExpectancy : '10-13 years',
    Hypoallergenic : 'No',
    Price : '15000-50000 INR' 
  },
  {
     id : 11,
     Breed : 'Shiba Inu',
     Origin : 'Japan',
     Height : '13-17 inches tall at the shoulder',
     Weight : '17-23 pounds',
     LifeExpectancy : '12-15 years',
     Hypoallergenic : 'No',
     Price : '75000-100000 INR'
  },
  {
     id : 12,
     Breed : 'Shih Tzu',
     Origin : 'China',
     Height : '9-10 inches tall at the shoulder',
     Weight : '9-16 pounds',
     LifeExpectancy : '10-16 years',
     Hypoallergenic : 'Yes',
     Price : '35000-100000 INR'
  },
  {
     id : 13,
     Breed : 'Samoyed',
     Origin : 'Russia',
     Height : '1 foot 7 inches-2 feet tall at the shoulder',
     Weight : '50-60 pounds',
     LifeExpectancy : '12-14 years',
     Hypoallergenic : 'Yes',
     Price : '65000-90000 INR'
  },
  {
     id : 14,
     Breed : 'Dachshund',
     Origin : 'Germany',
     Height : '8-9 inches tall at the shoulder',
     Weight : '16-32 pounds',
     LifeExpectancy : '12-16 years',
     Hypoallergenic : 'No',
     Price : '7000-10000 INR'
  },
  {
     id : 15,
     Breed : 'Maltipoo',
     Origin : 'United States',
     Height : '8-14 inches tall at the shoulder',
     Weight : '5-20 pounds',
     LifeExpectancy : '10-15 years',
     Hypoallergenic : 'Yes',
     Price : '60000-150000 INR'
  },
];

//create end points:

app.get('/api/info', function(req, res){
  res.send('Planning to buy a dog!You should know about top 15 dogs and their characteristics in India before buying.');
})

app.get('/api/dogs', function(req, res){
     res.json(dogInfoData);
})

app.get('/api/dogs/:id', function(req, res){
  const id = req.params.id;
  const dog = dogInfoData.find(dog => dog.id == id);

  if(dog){
    res.json(dog)
  }
  else{
    res.send('This dog is not found')
  }
})

//start the node server:
const PORT = 3000;
app.listen(PORT, function(){
    console.log('Server is started, please call your apis');
})