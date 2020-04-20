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
[Rowie Backup](${link})
[Rowie Backup](https://discordapp.com/oauth2/authorize?client_id=701788656695902258&scope=bot&permissions=268443704) Pro Use \`!pro\` to get more information.
[Rowie Backup Turbo](Yakında)`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
