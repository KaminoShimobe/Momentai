
const Discord = require("discord.js");




const prefix = "tm!";

const bot = new Discord.Client({disableEveryone: true})




	

bot.on("ready", async () => {

	console.log(`It's time! ${bot.user.username}`);

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

   member.guild.channels.get("530246387342901269").send(`${member} Reply with tm!change to get a role for your class!`);
  // Send the message, mentioning the member
 

	

});


bot.on("message", async message => {

	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	if(message.author.bot) return;
	
	
	

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


	if(command === `${prefix}help`){
		
		let help = new Discord.RichEmbed()

			
			.setTitle("Momentai 0.1.0: commands")
			.setDescription("**tm!help**: \n Pulls up this list. \n **tm!change**: Changes your role because you're indecisive af. \n **tm!credits**: Shameless plug made by dev :sunglasses:")
			.setColor("#1f3c5b"); 

		message.channel.sendEmbed(help);

		 

		 



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
		
	if(command === `${prefix}change`){
	if(message.member.roles.find("name", "warrior")){
			member.removeRole(warrior).catch(console.error);
		}
	if(message.member.roles.find("name", "valkyrie")){
			member.removeRole(valkyrie).catch(console.error);
		}
	if(message.member.roles.find("name", "ranger")){
			member.removeRole(ranger).catch(console.error);
		}
	if(message.member.roles.find("name", "sorceress")){
			member.removeRole(sorceress).catch(console.error);
		}
	if(message.member.roles.find("name", "berserker")){
			member.removeRole(berserker).catch(console.error);
		}
	if(message.member.roles.find("name", "darkKnight")){
			member.removeRole(darkKnight).catch(console.error);
		}
	if(message.member.roles.find("name", "wizard")){
			member.removeRole(wizard).catch(console.error);
		}
	if(message.member.roles.find("name", "witch")){
			member.removeRole(witch).catch(console.error);
		}
	if(message.member.roles.find("name", "tamer")){
			member.removeRole(tamer).catch(console.error);
		}
	if(message.member.roles.find("name", "maewha")){
			member.removeRole(maewha).catch(console.error);
		}				
	if(message.member.roles.find("name", "musa")){
			member.removeRole(musa).catch(console.error);
		}
	if(message.member.roles.find("name", "ninja")){
			member.removeRole(ninja).catch(console.error);
		}
	if(message.member.roles.find("name", "kunoichi")){
			member.removeRole(kunoichi).catch(console.error);
		}
	if(message.member.roles.find("name", "striker")){
			member.removeRole(striker).catch(console.error);
		}						
	if(message.member.roles.find("name", "mystic")){
			member.removeRole(mystic).catch(console.error);
		}
	if(message.member.roles.find("name", "lahn")){
			member.removeRole(lahn).catch(console.error);
		}					



  let list = new Discord.RichEmbed()

			
			.setTitle("Respond with one of these commands")
			.setDescription("tm!warrior \n tm!valkyrie \n tm!ranger \n tm!sorceress \n tm!berserker \n tm!darkKnight \n tm!wizard \n tm!witch \n tm!tamer \n tm!maewha \n tm!musa \n tm!ninja \n tm!kunoichi \n tm!striker \n tm!mystic \n tm!lahn")
			.setColor("#1f3c5b"); 
	message.channel.sendEmbed(list);	
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `${prefix}warrior`) {
            			member.addRole(warrior).catch(console.error);
               		 message.channel.send("Welcome to the warrior class!")
                		return;
            		}
            		if (message.content == `${prefix}valkyrie`) {
            			member.addRole(valkyrie).catch(console.error);
               		 message.channel.send("Welcome to the valkyrie class!")
                		return;
            		}
            		if (message.content == `${prefix}ranger`) {
            			member.addRole(ranger).catch(console.error);
               		 message.channel.send("Welcome to the ranger class!")
                		return;
            		}
            		if (message.content == `${prefix}sorceress`) {
            			member.addRole(sorceress).catch(console.error);
               		 message.channel.send("Welcome to the sorceress class!")
                		return;
            		}
            		if (message.content == `${prefix}berserker`) {
            			member.addRole(berserker).catch(console.error);
               		 message.channel.send("Welcome to the berserker class!")
                		return;
            		}
            		if (message.content == `${prefix}darkKnight`) {
            			member.addRole(darkKnight).catch(console.error);
               		 message.channel.send("Welcome to the dark knight class!")
                		return;
            		}
            		if (message.content == `${prefix}wizard`) {
            			member.addRole(wizard).catch(console.error);
               		 message.channel.send("Welcome to the wizard class!")
                		return;
            		}
            		if (message.content == `${prefix}witch`) {
            			member.addRole(witch).catch(console.error);
               		 message.channel.send("Welcome to the witch class!")
                		return;
            		}
            		if (message.content == `${prefix}tamer`) {
            			member.addRole(tamer).catch(console.error);
               		 message.channel.send("Welcome to the tamer class!")
                		return;
            		}
            		if (message.content == `${prefix}maewha`) {
            			member.addRole(maewha).catch(console.error);
               		 message.channel.send("Welcome to the maewha class!")
                		return;
            		}
            		if (message.content == `${prefix}musa`) {
            			member.addRole(musa).catch(console.error);
               		 message.channel.send("Welcome to the musa class!")
                		return;
            		}
            		if (message.content == `${prefix}ninja`) {
            			member.addRole(ninja).catch(console.error);
               		 message.channel.send("Welcome to the ninja class!")
                		return;
            		}
            		if (message.content == `${prefix}kunoichi`) {
            			member.addRole(kunoichi).catch(console.error);
               		 message.channel.send("Welcome to the kunoichi class!")
                		return;
            		}
            		if (message.content == `${prefix}striker`) {
            			member.addRole(striker).catch(console.error);
               		 message.channel.send("Welcome to the striker class!")
                		return;
            		}
            		if (message.content == `${prefix}mystic`) {
            			member.addRole(mystic).catch(console.error);
               		 message.channel.send("Welcome to the mystic class!")
                		return;
            		}
            		if (message.content == `${prefix}lahn`) {
            			member.addRole(lahn).catch(console.error);
               		 message.channel.send("Welcome to the lahn class!")
                		return;
            		} else {
				
					message.reply(` That's not a valid input!`);
					console.log("This person mega dumb.");
					}

				});

		 

		 



		 		}	

		return;

	
	
	
	});

	

		

		

	
	
	




bot.login(process.env.BOT_TOKEN);
