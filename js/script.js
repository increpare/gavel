"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"SampleWriting":{
		"Title": "Some Credits",
		"Subtitle": "Thanks to everyone.",
		"Message":"Music From: <div xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'><a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'> _ghost</a> / <a rel='license' href='http://creativecommons.org/licenses/by/3.0/'>CC BY 3.0</a></div><p>Evelyn Character from: <a href='http://miririri.deviantart.com/art/Evelyn-Sprite-Set-Starter-Pack-free-minipack-347585657'>miririri</a></p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"End": {
		title: "Things just got real!",
		body: "You finished Monogatari 101.",
		icon: "img/icon_192x192.png"
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	"Theme": "musictrack.mp3"
};

// Define the voice files used in the game.
const voice = {
};

// Define the sounds used in the game.
const sound = {
	"Bird": "bird.mp3",
	"Gavel": "gavel.mp3",
	"Grunt": "grunt.mp3",
};

// Define the videos used in the game.
const videos = {
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Main": "monogatari-promo.svg",
	"Shop": "shop.jpg",
	"Sky": "sky.jpg",
	"Black": "black.jpg",
	"Street": "street.jpg",
	"Sidewalk": "sidewalk.jpg",
	"Train": "train.jpg",
	"TrainStation": "trainstation.jpg",
	"TrainStationarrived": "trainstationarrived.jpg",
};

// Define the Characters
const characters = {
	"b":{
		"Name": "Beauty",
		"Color": "#ff0000",
		"Directory": "Beauty",
		"Images":{
			"Normal": "normal.png",
			"Hurt": "hurt.png",
			"Hurtgun": "hurtgun.png",
		}
	},

	"bd":{
		"Name": "Schöne",
		"Color": "#ff0000",
		"Directory": "Beauty",
		"Images":{
			"Normal": "normal.png",
			"Hurt": "hurt.png",
			"Hurtgun": "hurtgun.png",
		}
	},

	"s":{
		"Name": "Seagull",
		"Color": "#ffff00",
		"Directory": "Bird",
		"Images":{
			"Normal": "normal.png",
			"Caw": "caw.png",
			"Finger": "finger.png",
			"Finger2": "finger2.png",
		}
	},


	"sd":{
		"Name": "Möwe",
		"Color": "#ffff00",
		"Directory": "Bird",
		"Images":{
			"Normal": "normal.png",
			"Caw": "caw.png",
			"Finger": "finger.png",
			"Finger2": "finger2.png",
		}
	},

	"w":{
		"Name": "Wine bottle",
		"Color": "#00bfff",
		"Directory": "Winebottle",
		"Images":{
			"Normal": "normal.png"
		}
	},


	"wd":{
		"Name": "Weinflasche",
		"Color": "#00bfff",
		"Directory": "Winebottle",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"r":{
		"Name": "Receipt",
		"Color": "#00bfff",
		"Directory": "Receipt",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"rd":{
		"Name": "Quittung",
		"Color": "#00bfff",
		"Directory": "Receipt",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"d":{
		"Name": "Drunk",
		"Color": "#a58c27",
		"Directory": "Drunk",
		"Images":{
			"Normal": "normal.png",
			"Normalout": "normalout.png",
			"Normaloutcame": "normaloutcame.png",
		}
	},

	"dd":{
		"Name": "Betrunkene",
		"Color": "#a58c27",
		"Directory": "Drunk",
		"Images":{
			"Normal": "normal.png",
			"Normalout": "normalout.png",
			"Normaloutcame": "normaloutcame.png",
		}
	},

	"g":{
		"Name": "Gavel",
		"Color": "#db7208",
		"Directory": "Gavel",
		"Images":{
			"Normal": "normal.png"
		}
	},
	
	"gd":{
		"Name": "Hammer",
		"Color": "#db7208",
		"Directory": "Gavel",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"p":{
		"Name": "You",
		"Color": "#00ff00",
		"Directory": "Player",
		//"Face": "normal_head.png",
		"Images":{
			"Normal": "normal.png",
			"Raised": "raisedgavel.png",
			"RaisedGavelBloody": "raisedbloody.png",
			"RaisedGavelBloodyFingers": "raisedgavelbloodyfingers.png",
			"RaisedGavelBloodyFingersShot": "raisedgavelbloodyfingersshot.png",
			"Lowered": "loweredgavel.png",
			"Loweredbloody": "loweredbloody.png",
			"LoweredGavelBloody": "loweredgavelbloody.png",
			"LoweredGavelBloodyFingers": "loweredgavelbloodyfingers.png",
			"LoweredGavelBloodyFingersShot": "loweredgavelbloodyfingersshot.png",
			"Shot1": "shot1.png",
			"Shot1bloody": "shot1bloody.png",
			"Shot2": "shot2.png",
			"Shot2bloody": "shot2bloody.png",
			"Hand": "hand.png",
			"Finger1": "finger1.png",
			"Finger2": "finger2.png",
			"Finger3": "finger3.png",
			"Normalbloody": "normalbloody.png",
			"Squit": "squit.png",
			"SquitBloody": "squitbloody.png",
			"SquitShot": "squitshot.png",
			"SquitShotBloody" :"squitshotbloody.png",
		}
	},


	"pd":{
		"Name": "Du",
		"Color": "#00ff00",
		"Directory": "Player",
		//"Face": "normal_head.png",
		"Images":{
			"Normal": "normal.png",
			"Raised": "raisedgavel.png",
			"RaisedGavelBloody": "raisedbloody.png",
			"RaisedGavelBloodyFingers": "raisedgavelbloodyfingers.png",
			"RaisedGavelBloodyFingersShot": "raisedgavelbloodyfingersshot.png",
			"Lowered": "loweredgavel.png",
			"Loweredbloody": "loweredbloody.png",
			"LoweredGavelBloody": "loweredgavelbloody.png",
			"LoweredGavelBloodyFingers": "loweredgavelbloodyfingers.png",
			"LoweredGavelBloodyFingersShot": "loweredgavelbloodyfingersshot.png",
			"Shot1": "shot1.png",
			"Shot1bloody": "shot1bloody.png",
			"Shot2": "shot2.png",
			"Shot2bloody": "shot2bloody.png",
			"Hand": "hand.png",
			"Finger1": "finger1.png",
			"Finger2": "finger2.png",
			"Finger3": "finger3.png",
			"Normalbloody": "normalbloody.png",
			"Squit": "squit.png",
			"SquitBloody": "squitbloody.png",
			"SquitShot": "squitshot.png",
			"SquitShotBloody" :"squitshotbloody.png",
		}
	},
	

	"o":{
		"Name": "Police",
		"Color": "#00ffff",
		"Directory": "Police",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"k":{
		"Name": "Shopkeeper",
		"Color": "#66aaa8",
		"Directory": "Shopkeeper",
		"Images":{
			"Normal": "normal.png"
		}
	},


	"od":{
		"Name": "Polizist",
		"Color": "#00ffff",
		"Directory": "Police",
		"Images":{
			"Normal": "normal.png"
		}
	},

	"kd":{
		"Name": "Ladenbesitzer",
		"Color": "#66aaa8",
		"Directory": "Shopkeeper",
		"Images":{
			"Normal": "normal.png"
		}
	}
};

let script = {
	// The game starts here.
	"English":{
		"Start":[
			"play music Theme loop",
			"scene Street",
			"show p Normal center with fadeIn",
			"p What a shitty city",
			"p Everyone here's a total loser",
			"p Wait, what's this down here?",
			
			"scene Sidewalk",
			"show g Normal center with fadeIn",

			"p It's some kind of hammer?",

			"show g Normal center with shake",
			"play sound Gavel",
			
			"g I AM THE GAVEL",


			"g IF YOU EVERY ARE JUSTLY ACCUSED OF A CRIME, USE ME AND I WILL GET YOU OUT OF IT...",

			"g ...OR YOU CAN CHOOSE DIVINE JUSTICE",

			"show p Normal left",

			"p Well, I've never met a gavel who lied to me",

			"hide g fadeOut",

			"p *yoink*",

			"scene Street",

			"show p Normal center",

			"p Now let's see, where should I tempt fate...",
			

			"scene Shop",
			"show p Normal left with fadeIn",


			"p Ah, this shop here",

			"show w Normal center with fadeIn",

			
			"p Ooh, I'll help myself to that",

			"hide w with fadeOutLeft",

			"p *yoink*",

			"show k Normal right with fadeIn",

			"k Excuse me, miss",

			"k Could you please show me what you're hiding in your jacket?",

			"show w Normal center with fadeIn",

			"p Oh, this bottle of wine?",

			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump Gavel"
				},
				"Justice":{
					"Text": "Await divine justice.",
					"Do": "jump Justice"
				}
			}}
		],

		"Gavel":[
			"show p Raised left",

			"p Help me, Gavel!",
	
			"show p Lowered left",

			"play sound Gavel",		
			"p Ah!",

			"show r Normal center",

			"p Here's the receipt",

			"k It's valid, but ... I don't know ... I don't remember anything.",

			"k There's nothing I can do, but don't come back here again.",

			"hide w with fadeOut",
			"hide r with fadeOut",

			"p Suck a dick! Learn to be more polite to paying customers.",

			"scene Street",

			"show p Normal left",

			"p Hah, that was easy! Thanks, Gavel!",

			"p Now to fuck someone up.",

			"show b Normal right with fadeIn",
			
			"p Look at that piece of trash.  Thinks she's so pretty!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelJustice"
				}
			}}
		],

		"GavelGavel":[


			"show p Raised left",

			"p You think you're better than me?! Take this!",

			"show p Lowered left",

			"play sound Gavel",
			
			"show b Hurt right with shake",

			"b Aaargh! Why did you do that?! Help! help! Police!",

			"show o Normal center with fadeIn",

			"o What's the matter here?",

			"b She just came up to me and hit me out of nowhere!",

			"o Do you have anything to say?",

			"show p Raised left",

			"p Help me, Gavel!",

			"show p Lowered left",

			"play sound Gavel",
			"show b Hurt right",


			"show p Shot1 left",
			"show b Hurtgun right",


			"p Aaah!",

			"show p Shot2 left",
			"p I'm...I'm bleeding!",


			"p She must have shot me! It was just self defense all along!",


			"b Oh my God, what happened? What ... what happened? What did I do?!",

			"o I'll call for an ambulance right now.",

			"p No, it's okay, I'll be ok, I ... I have to go!",

			"hide p with fadeOutLeft",

			"o Ma'am? Ma'am! Don't run away like that!",

			"scene TrainStation",

			"show p Shot2 left with fadeInLeft",

			"p What am I going to do?",

			"scene TrainStationarrived",

			"show p Shot2 left",

			"p If I can get home, I can figure something out.",

			"scene Train",

			"show p Shot2 center",

			"show d Normal right",

			"p ...",

			"show d Normalout right",

			"show p Shot2 left",

			"d *grunts*",

			"p What's the fuck wrong with you you creep?!",




			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelGavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelGavelJustice"
				}
			}}			
		],



		"JusticeGavelGavel":[

			"show p RaisedGavelBloodyFingersShot left",

			"s My gavil will show you what a shit you are!",

			"show p LoweredGavelBloodyFingersShot left",

			"play sound Gavel",
			"s Take that!",

			"show p SquitShotBloody left",

			"s Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"d *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"g I AM THE GREATEST LAW",


			"show g Normal center with shake",
			"play sound Gavel",

			"g I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"JusticeGavelJustice":[
			"play sound Bird",
			"s CAAAW",
			
			"p What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger1 left",

			"play sound Bird",
			"s CAAAW",

			"show p Finger2 left",			
			"show s Finger center",		

			"play sound Gavel",
			"s *CHOMP*",

			"hide s with fadeOut",
			"show p Shot2bloody left",
			"s Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"d *grunts*",


			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"s I AM THE GREATEST LAW",
			
			"play sound Bird",
			"s I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],



		"GavelGavelGavel":[

			"show p RaisedGavelBloody left",

			"s Gavil will show you the error of your way",

			"show p LoweredGavelBloody left",

			"play sound Gavel",
			"s Take that!",

			"show p SquitShot left",

			"s Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"d *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center",

			"show g Normal center with shake",
			"play sound Gavel",
			
			"g I AM THE GREATEST LAW",

			"show g Normal center with shake",
			"play sound Gavel",

			"g I RIGHT ALL WRONGS",

			"hide g",
			"The End",
			"end"
		],


		"GavelGavelJustice":[
			"play sound Bird",
			"s CAAAW",
			
			"p What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Hand left",
			
			"play sound Bird",		
			"s CAAAW",

			"show p Finger1 left",			
			"show s Finger center",		

			"play sound Gavel",
			"s *CHOMP*",

			"hide s with fadeOut",

			"show p Shot2bloody left",

			"s Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"d *grunts*",

			"scene Black with fadeIn",
			
			"show s Caw center",			
			"play sound Bird",
			"s I AM THE GREATEST LAW",

			"play sound Bird",
			"s I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],


		"GavelJustice":[
			"play sound Bird",
			"s CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"s CAAAW",

			"scene Street",

			"show b Normal right",
			"show s Caw center",
			"show p Hand left",

			"s CAAW",

			"show s Finger center",
			"show p Finger1 left",

			"play sound Gavel",
			"s *CHOMP*",

			"hide s with fadeOut",
			"show p Normalbloody left",
			"p Aaah!",

			"b Oh my God are you ok?",

			"show p Normalbloody left",

			"p Aah! My hand! AH!",

			"hide p with fadeOutLeft",

			"b Miss! Are you ok? Why are you running away?!",


			"scene TrainStation",

			"show p Normalbloody left with fadeInLeft",

			"p What am I going to do?",

			"scene TrainStationarrived",

			"show p Normalbloody left",

			"p If I can get home, I can figure something out.",

			"scene Train",

			"show p Normalbloody left",

			"show d Normal right",

			"p ...",

			"show d Normalout right",

			"d *grunts*",

			"p What's the fuck wrong with you you creep?!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelJusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelJusticeJustice"
				}
			}}	

		],


	"JusticeJustice":[
			"play sound Bird",
			"s CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"s CAAAW",

			"scene Street",

			"show b Normal right",
			"show s Caw center",
			"show p Finger1 left",

			"s CAAW",

			"show s Finger center",
			"show p Finger2 left",

			"play sound Gavel",
			"s *CHOMP*",

			"show p Normalbloody left",
			"hide s with fadeOutUp",
			"p Aaah!",

			"b What happened?!",
			"hide s with fadeOut",

			"p Aah! Not again! Aah!",

			"hide p with fadeOutLeft",

			"b Miss! Are you ok? Why are you running away?!",

			"scene TrainStation",

			"show p Normalbloody left with fadeInLeft",

			"p What am I going to do?",

			"scene TrainStationarrived",

			"show p Normalbloody left",

			"p If I can get home, I can figure something out.",

			"scene Train",

			"show p Normalbloody left",

			"show d Normal right",

			"p ...",

			"show d Normalout right",

			"d *grunts*",

			"p What's the fuck wrong with you you creep?!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeJusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeJusticeJustice"
				}
			}}	

		],



		"JusticeJusticeGavel":[

			"show p RaisedGavelBloodyFingers left",

			"s I'll show you the error of your way",

			"show p LoweredGavelBloodyFingers left",

			"play sound Gavel",
			"s Take that!",

			"show p SquitBloody left",

			"s Unngggh!",


			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"d *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"g I AM THE GREATEST LAW",

			"show g Normal center with shake",
			"play sound Gavel",

			"g I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"JusticeJusticeJustice":[
			"play sound Bird",
			"s CAAAW",
			
			"p What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger2 left",

			"play sound Bird",
			"s CAAAW",

			"show p Finger3 left",
			"show s Finger2 center",			

			"play sound Gavel",
			"s *CHOMP*",

			"hide s fadeOut",

			"show p Normalbloody left",

			"s Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"d *grunts*",


			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"s I AM THE GREATEST LAW",
			"play sound Bird",

			"s I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],


		"GavelJusticeGavel":[

			"show p RaisedGavelBloodyFingers left",

			"s I'll show you the error of your way",

			"show p LoweredGavelBloodyFingers left",

			"play sound Gavel",
			"s Take that!",

			"show p SquitBloody left",

			"s Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"d *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"g I AM THE GREATEST LAW",


			"show g Normal center with shake",
			"play sound Gavel",

			"g I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"GavelJusticeJustice":[
			"play sound Bird",
			"s CAAAW",
			
			"p What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger1 left",

			"play sound Bird",
			"s CAAAW",

			"show p Finger2 left",
			"show s Finger center",			

			"play sound Gavel",
			"s *CHOMP*",

			"hide s with fadeOutUp",
			"show p Normalbloody left",
			"s Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"d *grunts*",

			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"s I AM THE GREATEST LAW",

			"play sound Bird",
			"s I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],



		"Justice":[
			"play sound Bird",
			"s CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"s CAAAW",

			"scene Shop",

			"show k Normal right",
			"show s Caw center",
			"show p Hand left",

			"s CAAW",

			"show s Finger center",
			"show p Finger1 left",

			"play sound Gavel",
			"s *CHOMP*",

			"show p Normalbloody left",
			"hide s with fadeOut",
			"p Aaah!",


			"k What the fuck just happened?",

			"p I'm sorry - I have to go!",

			"hide p with fadeOutLeft",

			"k Miss, are you ok?!",


			"scene Street",

			"show p Normalbloody left",

			"p A seagull? What the hell?  I'm gonna make someone pay for this!",

			"show b Normal right with fadeIn",
			
			"p Look at that piece of trash.  Thinks she's so pretty!",


			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeJustice"
				}
			}}
		],

		"JusticeGavel":[

			"b Oh my God your hand! What happened?!",
			
			"show p RaisedGavelBloodyFingers left",

			"p You think you're better than me?! Take this!",

			"show p LoweredGavelBloodyFingers left",

			"show b Hurt right with shake",
			"play sound Gavel",

			"b Aaargh! What, aaah... what?! Help! help! Police!",

			"show o Normal center with fadeIn",

			"o What's the matter here?",

			"b She just came up to me and hit me out of nowhere!",

			"o Do you have anything to say?",

			"show p Raised left",

			"p Help me, Gavel!",

			"show p Lowered left",

			"play sound Gavel",
			"show b Hurt right",


			"show p Shot1bloody left",
			"show b Hurtgun right",

			"p Aaah!",

			"show p Shot2bloody left",

			"p I'm...I'm bleeding!",

			"p She must have shot me! It was just self defense all along!",


			"b Oh my God, what happened? What ... what happened?",

			"o I'll call for an ambulance right now.",

			"p No, it's okay, I'll be ok, I ... I have to go!",

			"hide p with fadeOutLeft",

			"o Ma'am? Ma'am! Don't run away like that!",

			"scene TrainStation",

			"show p Shot2bloody left with fadeInLeft",

			"p What am I going to do?",

			"scene TrainStationarrived",

			"show p Shot2bloody left",

			"p If I can get home, I can figure something out.",

			"scene Train",

			"show p Shot2bloody left",

			"show d Normal right",

			"p ...",

			"show d Normalout right",

			"d *grunts*",

			"p What's the fuck wrong with you you creep?!",




			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeGavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeGavelJustice"
				}
			}}			
		],

	},





	// The game starts here.
	"Deutsch":{
		"Start":[
			"play music Theme loop",
			"scene Street",
			"show p Normal center with fadeIn",
			"pd Diese Stadt ist recht fürchtbar!",
			"pd Jeder hier ist ein Niete",
			"pd Warte mal! Was ist das?",
			
			"scene Sidewalk",
			"show g Normal center with fadeIn",

			"pd Eine Art von Schlegel?",

			"show g Normal center with shake",
			"play sound Gavel",
			
			"gd ICH BIN HAMMER",


			"gd WENN MAN EIN VERBRECHEN MACHT, KANN ICH EINEN ENTLASSEN.",

			"gd ...ODER MAN KANN SICH FÜR NATURRECHTS ENTSCIEDEN",

			"show p Normal left",

			"pd Ich habe noch nicht einen Lügenhammer getroffen",

			"hide g fadeOut",

			"pd Grabsch!",

			"scene Street",

			"show p Normal center",

			"pd Jetzt! An wem soll ich mich versündigen? Hmm...",
			

			"scene Shop",
			"show p Normal left with fadeIn",


			"pd Ah, this shop here",

			"show w Normal center with fadeIn",

			
			"pd Ooh, I'll help myself to that",

			"hide w with fadeOutLeft",

			"pd *yoink*",

			"show k Normal right with fadeIn",

			"kd Excuse me, miss",

			"kd Could you please show me what you're hiding in your jacket?",

			"show w Normal center with fadeIn",

			"pd Oh, this bottle of wine?",

			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump Gavel"
				},
				"Justice":{
					"Text": "Await divine justice.",
					"Do": "jump Justice"
				}
			}}
		],

		"Gavel":[
			"show p Raised left",

			"pd Help me, Gavel!",
	
			"show p Lowered left",

			"play sound Gavel",		
			"pd Ah!",

			"show r Normal center",

			"pd Here's the receipt",

			"kd It's valid, but ... I don't know ... I don't remember anything.",

			"kd There's nothing I can do, but don't come back here again.",

			"hide w with fadeOut",
			"hide r with fadeOut",

			"pd Suck a dick! Learn to be more polite to paying customers.",

			"scene Street",

			"show p Normal left",

			"pd Hah, that was easy! Thanks, Gavel!",

			"pd Now to fuck someone up.",

			"show b Normal right with fadeIn",
			
			"pd Look at that piece of trash.  Thinks she's so pretty!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelJustice"
				}
			}}
		],

		"GavelGavel":[


			"show p Raised left",

			"pd You think you're better than me?! Take this!",

			"show p Lowered left",

			"play sound Gavel",
			
			"show b Hurt right with shake",

			"bd Aaargh! Why did you do that?! Help! help! Police!",

			"show o Normal center with fadeIn",

			"od What's the matter here?",

			"bd She just came up to me and hit me out of nowhere!",

			"od Do you have anything to say?",

			"show p Raised left",

			"pd Help me, Gavel!",

			"show p Lowered left",

			"play sound Gavel",
			"show b Hurt right",


			"show p Shot1 left",
			"show b Hurtgun right",


			"pd Aaah!",

			"show p Shot2 left",
			"pd I'm...I'm bleeding!",


			"pd She must have shot me! It was just self defense all along!",


			"bd Oh my God, what happened? What ... what happened? What did I do?!",

			"od I'll call for an ambulance right now.",

			"pd No, it's okay, I'll be ok, I ... I have to go!",

			"hide p with fadeOutLeft",

			"od Ma'am? Ma'am! Don't run away like that!",

			"scene TrainStation",

			"show p Shot2 left with fadeInLeft",

			"pd What am I going to do?",

			"scene TrainStationarrived",

			"show p Shot2 left",

			"pd If I can get home, I can figure something out.",

			"scene Train",

			"show p Shot2 center",

			"show d Normal right",

			"pd ...",

			"show d Normalout right",

			"show p Shot2 left",

			"dd *grunts*",

			"pd What's the fuck wrong with you you creep?!",




			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelGavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelGavelJustice"
				}
			}}			
		],



		"JusticeGavelGavel":[

			"show p RaisedGavelBloodyFingersShot left",

			"sd My gavil will show you what a shit you are!",

			"show p LoweredGavelBloodyFingersShot left",

			"play sound Gavel",
			"sd Take that!",

			"show p SquitShotBloody left",

			"sd Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"gd I AM THE GREATEST LAW",


			"show g Normal center with shake",
			"play sound Gavel",

			"gd I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"JusticeGavelJustice":[
			"play sound Bird",
			"sd CAAAW",
			
			"pd What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger1 left",

			"play sound Bird",
			"sd CAAAW",

			"show p Finger2 left",			
			"show s Finger center",		

			"play sound Gavel",
			"sd *CHOMP*",

			"hide s with fadeOut",
			"show p Shot2bloody left",
			"sd Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"dd *grunts*",


			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"sd I AM THE GREATEST LAW",
			
			"play sound Bird",
			"sd I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],



		"GavelGavelGavel":[

			"show p RaisedGavelBloody left",

			"sd Gavil will show you the error of your way",

			"show p LoweredGavelBloody left",

			"play sound Gavel",
			"sd Take that!",

			"show p SquitShot left",

			"sd Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center",

			"show g Normal center with shake",
			"play sound Gavel",
			
			"gd I AM THE GREATEST LAW",

			"show g Normal center with shake",
			"play sound Gavel",

			"gd I RIGHT ALL WRONGS",

			"hide g",
			"The End",
			"end"
		],


		"GavelGavelJustice":[
			"play sound Bird",
			"sd CAAAW",
			
			"pd What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Hand left",
			
			"play sound Bird",		
			"sd CAAAW",

			"show p Finger1 left",			
			"show s Finger center",		

			"play sound Gavel",
			"sd *CHOMP*",

			"hide s with fadeOut",

			"show p Shot2bloody left",

			"sd Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show s Caw center",			
			"play sound Bird",
			"sd I AM THE GREATEST LAW",

			"play sound Bird",
			"sd I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],


		"GavelJustice":[
			"play sound Bird",
			"sd CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"sd CAAAW",

			"scene Street",

			"show b Normal right",
			"show s Caw center",
			"show p Hand left",

			"sd CAAW",

			"show s Finger center",
			"show p Finger1 left",

			"play sound Gavel",
			"sd *CHOMP*",

			"hide s with fadeOut",
			"show p Normalbloody left",
			"pd Aaah!",

			"bd Oh my God are you ok?",

			"show p Normalbloody left",

			"pd Aah! My hand! AH!",

			"hide p with fadeOutLeft",

			"bd Miss! Are you ok? Why are you running away?!",


			"scene TrainStation",

			"show p Normalbloody left with fadeInLeft",

			"pd What am I going to do?",

			"scene TrainStationarrived",

			"show p Normalbloody left",

			"pd If I can get home, I can figure something out.",

			"scene Train",

			"show p Normalbloody left",

			"show d Normal right",

			"pd ...",

			"show d Normalout right",

			"dd *grunts*",

			"pd What's the fuck wrong with you you creep?!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump GavelJusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump GavelJusticeJustice"
				}
			}}	

		],


	"JusticeJustice":[
			"play sound Bird",
			"sd CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"sd CAAAW",

			"scene Street",

			"show b Normal right",
			"show s Caw center",
			"show p Finger1 left",

			"sd CAAW",

			"show s Finger center",
			"show p Finger2 left",

			"play sound Gavel",
			"sd *CHOMP*",

			"show p Normalbloody left",
			"hide s with fadeOutUp",
			"pd Aaah!",

			"bd What happened?!",
			"hide s with fadeOut",

			"pd Aah! Not again! Aah!",

			"hide p with fadeOutLeft",

			"bd Miss! Are you ok? Why are you running away?!",

			"scene TrainStation",

			"show p Normalbloody left with fadeInLeft",

			"pd What am I going to do?",

			"scene TrainStationarrived",

			"show p Normalbloody left",

			"pd If I can get home, I can figure something out.",

			"scene Train",

			"show p Normalbloody left",

			"show d Normal right",

			"pd ...",

			"show d Normalout right",

			"dd *grunts*",

			"pd What's the fuck wrong with you you creep?!",



			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeJusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeJusticeJustice"
				}
			}}	

		],



		"JusticeJusticeGavel":[

			"show p RaisedGavelBloodyFingers left",

			"sd I'll show you the error of your way",

			"show p LoweredGavelBloodyFingers left",

			"play sound Gavel",
			"sd Take that!",

			"show p SquitBloody left",

			"sd Unngggh!",


			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"gd I AM THE GREATEST LAW",

			"show g Normal center with shake",
			"play sound Gavel",

			"gd I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"JusticeJusticeJustice":[
			"play sound Bird",
			"sd CAAAW",
			
			"pd What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger2 left",

			"play sound Bird",
			"sd CAAAW",

			"show p Finger3 left",
			"show s Finger2 center",			

			"play sound Gavel",
			"sd *CHOMP*",

			"hide s fadeOut",

			"show p Normalbloody left",

			"sd Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"dd *grunts*",


			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"sd I AM THE GREATEST LAW",
			"play sound Bird",

			"sd I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],


		"GavelJusticeGavel":[

			"show p RaisedGavelBloodyFingers left",

			"sd I'll show you the error of your way",

			"show p LoweredGavelBloodyFingers left",

			"play sound Gavel",
			"sd Take that!",

			"show p SquitBloody left",

			"sd Unngggh!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",

			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show g Normal center with shake",
			"play sound Gavel",
			
			"gd I AM THE GREATEST LAW",


			"show g Normal center with shake",
			"play sound Gavel",

			"gd I RIGHT ALL WRONGS",


			"hide g",
			"The End",
			"end"
		],


		"GavelJusticeJustice":[
			"play sound Bird",
			"sd CAAAW",
			
			"pd What, what's that sound?",

			"show s Caw center with fadeIn",
			"show p Finger1 left",

			"play sound Bird",
			"sd CAAAW",

			"show p Finger2 left",
			"show s Finger center",			

			"play sound Gavel",
			"sd *CHOMP*",

			"hide s with fadeOutUp",
			"show p Normalbloody left",
			"sd Aaaah!",

			"show d Normaloutcame right with shake",

			"play sound Grunt",	
			"dd *grunts*",

			"scene Black with fadeIn",
			
			"show s Caw center",
			"play sound Bird",

			"sd I AM THE GREATEST LAW",

			"play sound Bird",
			"sd I RIGHT ALL WRONGS",


			"hide s",
			"The End",
			"end"
		],



		"Justice":[
			"play sound Bird",
			"sd CAAAW",

			"scene Sky",
			"show s Caw center",
			
			"play sound Bird",
			"sd CAAAW",

			"scene Shop",

			"show k Normal right",
			"show s Caw center",
			"show p Hand left",

			"sd CAAW",

			"show s Finger center",
			"show p Finger1 left",

			"play sound Gavel",
			"sd *CHOMP*",

			"show p Normalbloody left",
			"hide s with fadeOut",
			"pd Aaah!",


			"kd What the fuck just happened?",

			"pd I'm sorry - I have to go!",

			"hide p with fadeOutLeft",

			"kd Miss, are you ok?!",


			"scene Street",

			"show p Normalbloody left",

			"pd A seagull? What the hell?  I'm gonna make someone pay for this!",

			"show b Normal right with fadeIn",
			
			"pd Look at that piece of trash.  Thinks she's so pretty!",


			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeJustice"
				}
			}}
		],

		"JusticeGavel":[

			"bd Oh my God your hand! What happened?!",
			
			"show p RaisedGavelBloodyFingers left",

			"pd You think you're better than me?! Take this!",

			"show p LoweredGavelBloodyFingers left",

			"show b Hurt right with shake",
			"play sound Gavel",

			"bd Aaargh! What, aaah... what?! Help! help! Police!",

			"show o Normal center with fadeIn",

			"od What's the matter here?",

			"bd She just came up to me and hit me out of nowhere!",

			"od Do you have anything to say?",

			"show p Raised left",

			"pd Help me, Gavel!",

			"show p Lowered left",

			"play sound Gavel",
			"show b Hurt right",


			"show p Shot1bloody left",
			"show b Hurtgun right",

			"pd Aaah!",

			"show p Shot2bloody left",

			"pd I'm...I'm bleeding!",

			"pd She must have shot me! It was just self defense all along!",


			"bd Oh my God, what happened? What ... what happened?",

			"od I'll call for an ambulance right now.",

			"pd No, it's okay, I'll be ok, I ... I have to go!",

			"hide p with fadeOutLeft",

			"od Ma'am? Ma'am! Don't run away like that!",

			"scene TrainStation",

			"show p Shot2bloody left with fadeInLeft",

			"pd What am I going to do?",

			"scene TrainStationarrived",

			"show p Shot2bloody left",

			"pd If I can get home, I can figure something out.",

			"scene Train",

			"show p Shot2bloody left",

			"show d Normal right",

			"pd ...",

			"show d Normalout right",

			"dd *grunts*",

			"pd What's the fuck wrong with you you creep?!",




			{"Choice":{
				"Gavel":{
					"Text": "Use the Gavel.",
					"Do": "jump JusticeGavelGavel"
				},
				"Writer":{
					"Text": "Await divine justice.",
					"Do": "jump JusticeGavelJustice"
				}
			}}			
		]
	}

	
};