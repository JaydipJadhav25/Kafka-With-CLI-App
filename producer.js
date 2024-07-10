import {kafka} from "./client.js" 

async function producer(){
    const producer = kafka.producer();

    await producer.connect()

console.log("producer connected succssfully........")

await producer.send({
    topic : 'info-update',
    messages : [{

        partition :0,
        key : "infromation" , value : JSON.stringify({name : "infromation updates" , value : "argent meeting"
        })
    },
 ]
});

await producer.disconnect();
console.log("producer disconnecte ........");


}

producer();