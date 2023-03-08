// const express = require('express')
import express from 'express';
const app = express()

const PORT = 1234;

  const rooms = [
  {
      "customerName": "John Doe",
      "roomName": "Meeting Room 1",
      "date": "2020-09-30",
      "startTime": "10:00",
      "endTime": "12:00",
      "status" : "Booked",
      "roomID": "RM001"
  },
  {
      "customerName": "Jane Doe",
      "roomName": "Meeting Room 2",
      "date": "2020-10-01",
      "startTime": "11:00",
      "endTime": "13:00",
      "status" : "Booked",
      "roomID": "RM002"
  },
  {
      "customerName": "Tom Smith",
      "roomName": "Meeting Room 3",
      "date": "2020-09-30",
      "startTime": "15:00",
      "endTime": "17:00",
      "status" : "Booked",
      "roomID": "RM003"
  },
  {
      "customerName": "Jill Smith",
      "roomName": "Meeting Room 4",
      "date": "2020-10-02",
      "startTime": "14:00",
      "endTime": "16:00",
      "status" : "Booked",
      "roomID": "RM004"
  },
  {
      "customerName": "John mathew",
      "roomName": "Meeting Room 5",
      "date": "2020-10-03",
      "startTime": "10:00",
      "endTime": "12:00",
      "status" : "Booked",
      "roomID": "RM005"
  },
  {
      "customerName": "Jane mathew",
      "roomName": "Meeting Room 6",
      "date": "2020-10-04",
      "startTime": "11:00",
      "endTime": "13:00",
      "status" : "Booked",
      "roomID": "RM006"
  },
  {
      "customerName": "Tom martin",
      "roomName": "Meeting Room 7",
      "date": "2020-10-05",
      "startTime": "15:00",
      "endTime": "17:00",
      "status" : "Booked",
      "roomID": "RM007"
  },
  {
      "customerName": "Jill max",
      "roomName": "Meeting Room 8",
      "date": "2020-10-06",
      "startTime": "14:00",
      "endTime": "16:00",
      "status" : "Booked",
      "roomID": "RM008"
  },
  {
      "customerName": "Johnny dope",
      "roomName": "Meeting Room 9",
      "date": "2020-10-07",
      "startTime": "10:00",
      "endTime": "12:00",
      "status" : "Booked",
      "roomID": "RM009"
  },
  {
      "customerName": "Jane max",
      "roomName": "Meeting Room 10",
      "date": "2020-10-08",
      "startTime": "11:00",
      "endTime": "13:00",
      "status" : "Booked",
      "roomID": "RM0010"
  },
  {
      "customerName": "Tom",
      "roomName": "Meeting Room 11",
      "date": "2020-10-09",
      "startTime": "15:00",
      "endTime": "17:00",
      "status" : "Booked",
      "roomID": "RM0011"
  },
  {
      "customerName": "Jill andrew",
      "roomName": "Meeting Room 12",
      "date": "2020-10-10",
      "startTime": "14:00",
      "endTime": "16:00",
      "status" : "Booked",
      "roomID": "RM0012"
  },
  {
      "customerName": "Johnny Doe",
      "roomName": "Meeting Room 13",
      "date": "2020-10-11",
      "startTime": "10:00",
      "endTime": "12:00",
      "status" : "Booked",
      "roomID": "RM0013"
  },
  {
      "customerName": "Daniel",
      "roomName": "Meeting Room 14",
      "date": "2020-10-12",
      "startTime": "11:00",
      "endTime": "13:00",
      "status" : "Booked",
      "roomID": "RM0014"
  },
  {
      "customerName": "Tommy Smith",
      "roomName": "Meeting Room 15",
      "date": "2020-10-13",
      "startTime": "15:00",
      "endTime": "17:00",
      "status" : "Booked",
      "roomID": "RM0015"
  },
  {
      "customerName": "Smith ken",
      "roomName": "Meeting Room 16",
      "date": "2020-10-14",
      "startTime": "14:00",
      "endTime": "16:00",
      "status" : "Booked",
      "roomID": "RM0016"
  },
  {
      "customerName": "Abraham",
      "roomName": "Meeting Room 17",
      "date": "2020-10-15",
      "startTime": "10:00",
      "endTime": "12:00",
      "status" : "Booked",
      "roomID": "RM0017"
  },
  {
      "customerName": "Jane kef Doe",
      "roomName": "Meeting Room 18",
      "date": "2020-10-16",
      "startTime": "11:00",
      "endTime": "13:00",
      "status" : "Booked",
      "roomID": "RM0018"
  },
  {
      "customerName": "Smith alfred",
      "roomName": "Meeting Room 3",
      "date": "2020-10-17",
      "startTime": "15:00",
      "endTime": "17:00",
      "status" : "Booked",
      "roomID": "RM0019"
  },
  {
      "customerName": "Jill abs Smith",
      "roomName": "Meeting Room 20",
      "date": "2020-10-18",
      "startTime": "14:00",
      "endTime": "16:00",
      "status" : "Booked",
      "roomID": "20"
  }
]

const roomsAvailable = 
[
    {
        "roomNumber": 21,
        "seatsAvailable": 4,
        "amenities": ["WiFi", "TV", "air conditioning"],
        "pricePerHour": 1500
    },
    {
        "roomNumber": 22,
        "seatsAvailable": 4,
        "amenities": ["WiFi", "TV", "air conditioning", "mini fridge"],
        "pricePerHour": 3500
    },
    {
        "roomNumber": 23,
        "seatsAvailable": 2,
        "amenities": ["WiFi", "TV", "air conditioning", "mini fridge", "coffee machine"],
        "pricePerHour": 4000
    }
]

app.get("/", function (request,response){
   response.send( { message : "The Matrix is Everywhere" });
})

app.get("/allCustomers", function (request,response){
   response.send(rooms);
})

app.get("/roomsAvailable", function (request,response){
   response.send(roomsAvailable);
})

app.post("/roomBooking",express.json(), function (request,response){
  const data = request.body;
   console.log(data);
   response.send(rooms);
})

app.listen(PORT,()=> console.log("Connected") )

