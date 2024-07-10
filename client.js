import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId : "kafka-cli-app",
    brokers  :["172.20.10.2:9092"]

});


export { kafka }
