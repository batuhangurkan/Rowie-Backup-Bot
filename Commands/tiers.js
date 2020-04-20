const { RichEmbed } = require("discord.js");
module.exports = class tiers {
    constructor() {
        this.name = "tiers",
        this.alias = [],
        this.usage = "!tiers"
    }
// Asreaper'in Taşşağını Yiyim
    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            let tierEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Rowie Pro** and **Rowie Turbo** are the **paid versions** of Rowie. They extend the existing features of Rowie and add new ones.`)
            .setColor("#5DBCD2")
            message.channel.send(tierEmbed)
        }catch(e) {
            throw e;
        }
    }
}
