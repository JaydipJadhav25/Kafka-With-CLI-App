import {kafka} from "./client.js" 


async function consumer(){
    const consumer = kafka.consumer({
        groupId : "normal"
    });

    await consumer.connect();

    await consumer.subscribe({
        topics :["info-update"] ,
        fromBeginning : true
    })


    await consumer.run({
     eachMessage : async ({ topic, partition, message, heartbeat, pause }) =>{
        console.log(`${topic} :: PART : ${partition} ::`, message.value.toString());
     }
    })
}

consumer();
