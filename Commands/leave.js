module.exports = class leave {
    constructor() {
        this.name = "leave",
        this.alias = [],
        this.usage = "!leave"
    }
// Asreaper'in Taşşağını Yiyim
    async run(client, message, args) {
        try{
            message.channel.send("bay bay ;(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}