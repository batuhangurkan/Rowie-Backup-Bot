const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "-info"
    }
// Asreaper'in Taşşağını Yiyim
    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Rowie Backup**")
         .setThumbnail("https://images-ext-2.discordapp.net/external/PZxaF4vBa7oJ0qBG5rz-gp51VuPDnsdUTGAD2ALNyJI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/591250472652898315/417582cb7eebdc7cc29f66ae8ea42939.png?width=475&height=475")
         .setDescription("Server Backups, Templates and more")
         .addField("Davet", "[Click Here](https://discord.com/api/oauth2/authorize?client_id=786315491199156255&permissions=8&scope=bot)", true)
         .addField("Prefix", "-", true)
         .addField("Sunucular", client.guilds.size, true)
         .addField("Kullanıcılar:", client.users.size, true)
         .setFooter("Owned by : Scréw")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}