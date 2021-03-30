let arcaneTag = "437808476106784770";
module.exports = {
	name: 'arcane',
	description: 'insults arcane',
	execute(msg, args) {
        msg.channel.send("Hey " + "<@" + arcaneTag.toString() + ">");
        
        // if(!msg.author.bot){
        //     msg.reply((`${msg.author.tag} in #${msg.channel.name} sent: ${msg.content}`));
        // }
	},
};