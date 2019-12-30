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
            
            **t!backup**          Oluşturur & sunucunuzun yedeklerini yükle
            
            __**Diğerleri.**__
          
            **t!help**            Bu mesajı gösterir
            **t!info**            Bilgilendirme mesajını iletir. Xenon
            **t!invite**          Davet eder Xenon
            **t!leave**           Bot bırakır.
            **t!ping**            Ping ölçer.
            **t!tiers**           Bilgi verir. Xenon Pro & Turbo
            
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
                t!backup create        Oluştur , geti yükle
                t!backup delete        Geri yükle siler
                t!backup info          Geri yükleme hakkında bilgi verir.
                t!backup list          Grri yükleme listesi
                t!backup load          Yüklere bakar.
                t!backup purge         Geri yüklemelerin hepsini silrr.`)
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
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**t!info**")
                    .setDescription("Get Information about Xenon")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**t!invite**")
                    .setDescription("Invite TeaTone")
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
                    .setTitle("**t!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**t!tiers**")
                    .setDescription("Shows information about Xenon Pro & Turbo")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
