
import {kafka} from "./client.js" 
import  readline from "readline"

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


async function init(){
    const producer = kafka.producer();
console.log("connecting producer.....")
 
await producer.connect();

console.log("connected producer successfully.....")


rl.setPrompt(">>");
rl.prompt();

rl.on("line" , async function(line){

    const[userName , userMessage] = line.split(" ")
    await producer.send({
        topic :'topic-1',
        messages : [
            {
                partition : userName.toLowerCase() === "user" ? 0 : 1,
                key : 'information-update' , value : JSON.stringify({name : userName, message : userMessage}),
            }
        ]
    })

}).on('close' , async()=> {
    await producer.disconnect();

})






}

init();