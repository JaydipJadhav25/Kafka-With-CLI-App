import {kafka} from "./client.js" 


//
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({
        // groupId : "user-1"
        groupId : group
    }); //create

    console.log("connecting consumer........");
    await consumer.connect();
    console.log("connected consumer successfully........");


     // You can subscrib
  await consumer.subscribe({ topics: ['topic-1'] , fromBeginning : true })
    
  await consumer.run({
    eachMessage : async ({ topic, partition, message, heartbeat, pause }) =>{
        //att ft console.log kru

        // console.log(`${topic} : PART :${partition} : ${message.toString()}`)
        console.log(`${group} ::  ${topic} : PART :${partition} :`, message.value.toString());
    },

  })

//   await consumer.disconnect();


}

init();