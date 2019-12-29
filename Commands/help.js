const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**x!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Oluştur**__")
            .setDescription(`
            
            __**Güvenlik**__
            
            **x!backup**          Oluşturur & sunucunuzun yedeklerini yükle
            
            __**Diğerleri.**__
          
            **x!help**            Bu mesajı gösterir
            **x!info**            Bilgilendirme mesajını iletir. Xenon
            **x!invite**          Davet eder Xenon
            **x!leave**           Bot bırakır.
            **x!ping**            Ping ölçer.
            **x!tiers**           Bilgi verir. Xenon Pro & Turbo
            
            `)
             .setFooter(`Kullanım \`**x!help [command]\` komutu böyle kullan..
            Kullanım \`**x!help [category]\` katagoriyi böyle kullan.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**x!backup**

Oluşturur ve yenifen yükler.

__**Komutlar**__
`)
                    .setDescription(`
                x!backup create        Oluştur , geti yükle
                x!backup delete        Geri yükle siler
                x!backup info          Geri yükleme hakkında bilgi verir.
                x!backup list          Grri yükleme listesi
                x!backup load          Yüklere bakar.
                x!backup purge         Geri yüklemelerin hepsini silrr.`)
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**x!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**x!info**")
                    .setDescription("Get Information about Xenon")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!invite**")
                    .setDescription("Invite Xenon")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**x!tiers**")
                    .setDescription("Shows information about Xenon Pro & Turbo")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
