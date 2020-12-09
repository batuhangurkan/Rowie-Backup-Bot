const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "!invite"
    }
// Asreaper'in Taşşağını Yiyim
    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Invite Rowie Backup**
[Rowie Backup](https://discord.com/api/oauth2/authorize?client_id=786315491199156255&permissions=8&scope=bot)
[Rowie Backup Turbo](Yakında)`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
