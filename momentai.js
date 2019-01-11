
const Discord = require("discord.js");




const prefix = "tm!";

const bot = new Discord.Client({disableEveryone: true})




	

bot.on("ready", async () => {

	console.log(`It's time! ${bot.user.username}`);
	var channel = bot.channels.get('530244788734132224');
 	channel.sendMessage("I have been updated! You probably should check me out with tm!patchNotes \n The dev added somethin' neat");

	bot.user.setPresence({ status: 'online', game: { name: 'tm!help' } });



	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});



bot.on('guildMemberAdd', member => {

  // Send the message to a designated channel on a server:

   member.guild.channels.get("530246387342901269").send(`${member} Reply with tm!roles to get a role for your class!`);
  // Send the message, mentioning the member
 

	

});


bot.on("message", async message => {

	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	if(message.author.bot) return;
	
const room = bot.channels.get('530244788734132224');	
if(command === `${prefix}suggest`){
		message.author.send("What suggestions do you have for the dev to make this bot better? (!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `${prefix}cancel`) {
               		 message.author.send("Message cancelled.");
                		return;
            		} else {
				var msg = message.content;
				var setting = [`:speaking_head: Someone Suggested "`+ msg +`"`, `:speaking_head: Someone thinks, "`+ msg +`" :eyes:`, `:speaking_head: The bot would be nicer if "`+ msg +`"`];
				var chance = Math.floor(Math.random()*3);
				room.send(setting[chance]);
				message.author.send("Message Sent.");
				//BOI
console.log(message.author.username);
			}
			});
	}	
	

	if(message.channel.type === "dm") return;

const member = message.member;
	//List of classes
let warrior = message.guild.roles.find("name", "warrior");	
let valkyrie = message.guild.roles.find("name", "valkyrie");	
let ranger = message.guild.roles.find("name", "ranger");	
let sorceress = message.guild.roles.find("name", "sorceress");	
let berserker = message.guild.roles.find("name", "berserker");	
let darkKnight = message.guild.roles.find("name", "darkKnight");	
let wizard = message.guild.roles.find("name", "wizard");	
let witch = message.guild.roles.find("name", "witch");	
let tamer = message.guild.roles.find("name", "tamer");	
let maewha = message.guild.roles.find("name", "maewha");	
let musa = message.guild.roles.find("name", "musa");	
let ninja = message.guild.roles.find("name", "ninja");	
let kunoichi = message.guild.roles.find("name", "kunoichi");	
let striker = message.guild.roles.find("name", "striker");	
let mystic = message.guild.roles.find("name", "mystic");	
let lahn = message.guild.roles.find("name", "lahn");	
let archer = message.guild.roles.find("name", "archer");	


	if(command === `${prefix}help`){
		
		let help = new Discord.RichEmbed()

			
			.setTitle("Momentai 0.2.0: commands")
			.setDescription("**tm!help**: \n Pulls up this list. \n **tm!roles**: Lists the classes as if you didn't already know what they were. \n **tm![role name or shortcut]** : Toggles your role because you're indecisive af. \n **tm!patchNotes** : Detailed notes of changes to the bot. \n **tm!credits**: Shameless plug made by dev :sunglasses: \n `DM CHANNEL ONLY` \n **tm!suggest**: Tell the Dev how to do his job better. ")
			.setColor("#1f3c5b"); 

		message.author.sendEmbed(help);
		message.reply(" This is probably the only DM you'll get, but I sent you a DM of the help list!");
		 

		 



		 		}


	if(command === `${prefix}credits`){
		
		let credits = new Discord.RichEmbed()

			
			.setTitle("Made by KaminoShimobe")
			.setDescription("If you think this bot is cool, type **tm!yeet** to visit the Dev's house :sunglasses:")
			.setColor("#1f3c5b"); 
			

		message.channel.sendEmbed(credits);

		 

		 		}	

	if(command === `${prefix}yeet`){
		
		let yeet = new Discord.RichEmbed()

			
			.setTitle("!!WARNING DO NOT CLICK!!")
			.setDescription("You are about to step into different dimension!!!")
			.setColor("#1f3c5b")
			.setURL("https://discord.gg/6Zf5HGH");
			

		message.author.sendEmbed(yeet);

		 

		 		}	
	
	if(command === `${prefix}patchNotes`){
		
		let notes = new Discord.RichEmbed()

			
			.setTitle("Patch Notes: 1-11-19 ")
			.setDescription("-tm!help now dms you the list! Try it out!  \n - Probably added something cool who knows???")
			.setColor("#1f3c5b");
			
			

		message.channel.sendEmbed(notes);

		 

		 		}	
		
	if(command === `${prefix}roles`){
// 	if(message.member.roles.find("name", "warrior")){
// 			member.removeRole(warrior).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "valkyrie")){
// 			member.removeRole(valkyrie).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "ranger")){
// 			member.removeRole(ranger).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "sorceress")){
// 			member.removeRole(sorceress).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "berserker")){
// 			member.removeRole(berserker).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "darkKnight")){
// 			member.removeRole(darkKnight).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "wizard")){
// 			member.removeRole(wizard).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "witch")){
// 			member.removeRole(witch).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "tamer")){
// 			member.removeRole(tamer).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "maewha")){
// 			member.removeRole(maewha).catch(console.error);
// 		}				
// 	if(message.member.roles.find("name", "musa")){
// 			member.removeRole(musa).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "ninja")){
// 			member.removeRole(ninja).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "kunoichi")){
// 			member.removeRole(kunoichi).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "striker")){
// 			member.removeRole(striker).catch(console.error);
// 		}						
// 	if(message.member.roles.find("name", "mystic")){
// 			member.removeRole(mystic).catch(console.error);
// 		}
// 	if(message.member.roles.find("name", "lahn")){
// 			member.removeRole(lahn).catch(console.error);
// 		}					



  let list = new Discord.RichEmbed()

			
			.setTitle("Respond with one of these commands")
			.setDescription("tm!warrior \n tm!valkyrie \n tm!ranger \n tm!sorceress \n tm!berserker \n tm!darkKnight \n tm!wizard \n tm!witch \n tm!tamer \n tm!maewha \n tm!musa \n tm!ninja \n tm!kunoichi \n tm!striker \n tm!mystic \n tm!lahn \n tm!archer")
			.setColor("#1f3c5b"); 
	message.channel.sendEmbed(list);	
// 		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
//         		collector.once('collect', message => {
//             		if (message.content == `${prefix}warrior`) {
//             			member.addRole(warrior).catch(console.error);
//                		 message.channel.send("Welcome to the warrior class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}valkyrie`) {
//             			member.addRole(valkyrie).catch(console.error);
//                		 message.channel.send("Welcome to the valkyrie class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}ranger`) {
//             			member.addRole(ranger).catch(console.error);
//                		 message.channel.send("Welcome to the ranger class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}sorceress`) {
//             			member.addRole(sorceress).catch(console.error);
//                		 message.channel.send("Welcome to the sorceress class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}berserker`) {
//             			member.addRole(berserker).catch(console.error);
//                		 message.channel.send("Welcome to the berserker class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}darkKnight`) {
//             			member.addRole(darkKnight).catch(console.error);
//                		 message.channel.send("Welcome to the dark knight class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}wizard`) {
//             			member.addRole(wizard).catch(console.error);
//                		 message.channel.send("Welcome to the wizard class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}witch`) {
//             			member.addRole(witch).catch(console.error);
//                		 message.channel.send("Welcome to the witch class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}tamer`) {
//             			member.addRole(tamer).catch(console.error);
//                		 message.channel.send("Welcome to the tamer class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}maewha`) {
//             			member.addRole(maewha).catch(console.error);
//                		 message.channel.send("Welcome to the maewha class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}musa`) {
//             			member.addRole(musa).catch(console.error);
//                		 message.channel.send("Welcome to the musa class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}ninja`) {
//             			member.addRole(ninja).catch(console.error);
//                		 message.channel.send("Welcome to the ninja class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}kunoichi`) {
//             			member.addRole(kunoichi).catch(console.error);
//                		 message.channel.send("Welcome to the kunoichi class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}striker`) {
//             			member.addRole(striker).catch(console.error);
//                		 message.channel.send("Welcome to the striker class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}mystic`) {
//             			member.addRole(mystic).catch(console.error);
//                		 message.channel.send("Welcome to the mystic class!")
//                 		return;
//             		}
//             		if (message.content == `${prefix}lahn`) {
//             			member.addRole(lahn).catch(console.error);
//                		 message.channel.send("Welcome to the lahn class!")
//                 		return;
//             		}
// 			if (message.content == `${prefix}archer`) {
//             			member.addRole(archer).catch(console.error);
//                		 message.channel.send("Welcome to the Archer class!")
//                 		return;
//             		}	else {
				
// 					message.reply(` That's not a valid input!`);
// 					console.log("This person mega dumb.");
// 					}

// 				});

		 

		 



		 		}	
	
	if (command === `${prefix}warrior`) {
		if(message.member.roles.find("name", "warrior")){
			member.removeRole(warrior).catch(console.error);
			message.channel.send("Role removed.")
		} else {
            			member.addRole(warrior).catch(console.error);
               		 message.channel.send("Welcome to the warrior class!")
                		return;
            		}
		}
            		if (command === `${prefix}valkyrie`) {
            			if(message.member.roles.find("name", "valkyrie")){
			member.removeRole(valkyrie).catch(console.error);
			message.channel.send("Role removed.")
		} else {
            			member.addRole(valkyrie).catch(console.error);
               		 message.channel.send("Welcome to the valkyrie class!")
                		return;
            		}
            		}
            		if (command === `${prefix}ranger`) {
            			if(message.member.roles.find("name", "ranger")){
			member.removeRole(ranger).catch(console.error);
			message.channel.send("Role removed.")
		} else {
            			member.addRole(ranger).catch(console.error);
               		 message.channel.send("Welcome to the ranger class!")
                		return;
            		}
            		}
            		if (command === `${prefix}sorceress`) {
            			if(message.member.roles.find("name", "sorceress")){
			member.removeRole(sorceress).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(sorceress).catch(console.error);
               		 message.channel.send("Welcome to the sorceress class!")
                		return;
            		}
            		}
            		if (command === `${prefix}berserker`) {
            				if(message.member.roles.find("name", "berserker")){
			member.removeRole(berserker).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(berserker).catch(console.error);
               		 message.channel.send("Welcome to the berserker class!")
                		return;
            		}
            		}
            		if (command === `${prefix}darkKnight`) {
            					if(message.member.roles.find("name", "darkKnight")){
			member.removeRole(darkKnight).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(darkKnight).catch(console.error);
               		 message.channel.send("Welcome to the dark knight class!")
                		return;
            		}
            		}
            		if (command === `${prefix}wizard`) {
            			if(message.member.roles.find("name", "wizard")){
			member.removeRole(wizard).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(wizard).catch(console.error);
               		 message.channel.send("Welcome to the wizard class!")
                		return;
            		}
            		}
            		if (command === `${prefix}witch`) {
            			if(message.member.roles.find("name", "witch")){
			member.removeRole(witch).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(witch).catch(console.error);
               		 message.channel.send("Welcome to the witch class!")
                		return;
            		}
            		}
            		if (message.content == `${prefix}tamer`) {
            				if(message.member.roles.find("name", "tamer")){
			member.removeRole(tamer).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(tamer).catch(console.error);
               		 message.channel.send("Welcome to the tamer class!")
                		return;
            		}
            		}
            		if (command === `${prefix}maewha`) {
            			if(message.member.roles.find("name", "maewha")){
			member.removeRole(maewha).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(maewha).catch(console.error);
               		 message.channel.send("Welcome to the maewha class!")
                		return;
            		}
            		}
            		if (command === `${prefix}musa`) {
            				if(message.member.roles.find("name", "musa")){
			member.removeRole(musa).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(musa).catch(console.error);
               		 message.channel.send("Welcome to the musa class!")
                		return;
            		}
            		}
            		if (command === `${prefix}ninja`) {
            			if(message.member.roles.find("name", "ninja")){
			member.removeRole(ninja).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(ninja).catch(console.error);
               		 message.channel.send("Welcome to the ninja class!")
                		return;
            		}
            		}
            		if (command === `${prefix}kunoichi`) {
            			if(message.member.roles.find("name", "kunoichi")){
			member.removeRole(kunoichi).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(kunoichi).catch(console.error);
               		 message.channel.send("Welcome to the kunoichi class!")
                		return;
            		}
            		}
            		if (command === `${prefix}striker`) {
            				if(message.member.roles.find("name", "striker")){
			member.removeRole(striker).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(striker).catch(console.error);
               		 message.channel.send("Welcome to the striker class!")
                		return;
            		}
            		}
            		if (command === `${prefix}mystic`) {
            				if(message.member.roles.find("name", "mystic")){
			member.removeRole(mystic).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(mystic).catch(console.error);
               		 message.channel.send("Welcome to the mystic class!")
                		return;
            		}
            		}
            		if (command === `${prefix}lahn`) {
            			if(message.member.roles.find("name", "lahn")){
			member.removeRole(lahn).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(lahn).catch(console.error);
               		 message.channel.send("Welcome to the lahn class!")
                		return;
            		}
            		}
			if (command === `${prefix}archer`) {
            				if(message.member.roles.find("name", "archer")){
			member.removeRole(archer).catch(console.error);
			message.channel.send("Role removed.")
			} else {
            			member.addRole(archer).catch(console.error);
               		 message.channel.send("Welcome to the archer class!")
                		return;
            		}
            		}

		return;

	
	
	
	});

	

		

		

	
	
	




bot.login(process.env.BOT_TOKEN);
