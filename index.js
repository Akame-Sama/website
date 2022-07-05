const express = require('express');
const ayarlar = require("./config.json")
const db = require('quick.db')
const discord = require('discord.js');
const fs = require('fs')
const client = new discord.Client()
client.login(process.env.token)
const ejs = require('ejs')
const app = express()
app.listen(3000)
app.set('view engine','ejs')
 app.set('views',__dirname+'/views');
client.on('ready', () => {
  console.log('Hazırım')
})


app.get('/',function(req,res){
  const discord = require('discord')
  let sahip = client.users.cache.get('920315243106795570')
  const durum = sahip.presence.status
  const tag = sahip.username
  const rozet = sahip.flags.toArray().join(' | ')
   res.render("anasayfa",{tag,rozet,durum})
})
app.get('/home',async(req,res) => {
   const discord = require('discord')
  let sahip = client.users.cache.get('920315243106795570')
  const durum = sahip.presence.status
  const tag = sahip.username
  const rozet = sahip.flags.toArray().join(' | ')
   res.render("anasayfa",{tag,rozet,durum,avatar}) 
})
app.get('/discord',async(req,res) => {
   res.sendFile('./home/discord.ejs',{root: __dirname})  
})



