const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**!help"
    }
// Asreaper'in Taşşağını Yiyim
    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Oluştur**__")
            .setDescription(`
            
            __**Güvenlik**__
            
            **!backup**          Oluşturur & sunucunuzun yedeklerini yükle
            
            __**Diğerleri.**__
          
            **!help**            Bu mesajı gösterir
            **!info**            Bilgilendirme mesajını iletir. Rowie
            **!invite**          Davet eder Xenon
            **!leave**           Bot bırakır.
            **!ping**            Ping ölçer.
            **!tiers**           Bilgi verir. Rowie Pro & Turbo
            
            `)
             .setFooter(`Kullanım \`**!help [command]\` komutu böyle kullan..
            Kullanım \`**x!help [category]\` katagoriyi böyle kullan.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**!backup**

Oluşturur ve yenifen yükler.

__**Komutlar**__
`)
                    .setDescription(`
                !backup create        Oluştur , geti yükle
                !backup delete        Geri yükle siler
                !backup info          Geri yükleme hakkında bilgi verir.
                !backup list          Grri yükleme listesi
                !backup load          Yüklere bakar.
                !backup purge         Geri yüklemelerin hepsini silrr.`)
                    .addBlankField()
                    .setFooter(`Use \`!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**!info**")
                    .setDescription("Get Information about Xenon")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!invite**")
                    .setDescription("Invite TeaTone")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`x!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`t!help [command]\` for more info on a command.
You can also use \`x!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**!tiers**")
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
