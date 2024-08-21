const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use('/',routes)

const {connectiondata,modelData} = require("./mongodb")

function gettingData(){
    return modelData.db.readyState === 1
}

app.get('/',(req,res) => {
    const calling = gettingData()
    let connectionStatus = calling ? "database connected" : "connection failed"
    res.send(connectionStatus)
})

app.listen(3000,() =>{
    connectiondata()
    console.log('Node API app is running on port 3000')
})