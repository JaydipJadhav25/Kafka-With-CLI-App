import {kafka} from "./client.js"

async function admin(){
//create
const admin  = kafka.admin();

console.log("admin connecting..................")
await admin.connect()
console.log("admin connected successfully..................")

await admin.createTopics({
    topics : [
        {
            topic : "rider-update",
            numPartitions : 2,
        }
    ]
})



console.log("admin disconnecting..................")

await admin.disconnect()

console.log("admin disconnected..................")





}

admin();