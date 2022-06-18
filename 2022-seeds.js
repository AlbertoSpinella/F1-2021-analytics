import fetch from "node-fetch";

const teams = [
	{
		name: "Ferrari",
		colors: {
			primary: "red",
			secondary: "black"
		},
		nationality: "ita",
		teamPrincipal: "Binotto"
	},
	{
		name: "Mercedes",
		colors: {
			primary: "black",
			secondary: "silver"
		},
		nationality: "ger",
		teamPrincipal: "Wolff"
	},
	{
		name: "Redbull",
		colors: {
			primary: "blue",
			secondary: "black"
		},
		nationality: "aut",
		teamPrincipal: "Horner"
	},
	{
		name: "McLaren",
		colors: {
			primary: "orange",
			secondary: "blue"
		},
		nationality: "eng",
		teamPrincipal: "Seidl"
	},
	{
		name: "Alpine",
		colors: {
			primary: "blue",
			secondary: "pink"
		},
		nationality: "fra",
		teamPrincipal: "Szafnauer"
	},
	{
		name: "AlphaTauri",
		colors: {
			primary: "blue",
			secondary: "white"
		},
		nationality: "ita",
		teamPrincipal: "Tost"
	},
	{
		name: "AstonMartin",
		colors: {
			primary: "green",
			secondary: "pink"
		},
		nationality: "eng",
		teamPrincipal: "Krack"
	},
	{
		name: "AlfaRomeo",
		colors: {
			primary: "red",
			secondary: "white"
		},
		nationality: "swi",
		teamPrincipal: "Vasseur"
	},
	{
		name: "Williams",
		colors: {
			primary: "lightblue",
			secondary: "white"
		},
		nationality: "eng",
		teamPrincipal: "Capito"
	},
	{
		name: "Haas",
		colors: {
			primary: "red",
			secondary: "blue"
		},
		nationality: "usa",
		teamPrincipal: "Steiner"
	}
];

const drivers = [
	{
		firstName: "Charles",
		lastName: "Leclerc",
		shortName: "LEC",
		number: 16,
		nationality: "mon",
		isFirstDriver: true,
		age: 24,
		worldTitles: 0
	},
	{
		firstName: "Carlos",
		lastName: "Sainz",
		shortName: "SAI",
		number: 55,
		nationality: "esp",
		isFirstDriver: false,
		age: 27,
		worldTitles: 0
	},
	{
		firstName: "Lewis",
		lastName: "Hamilton",
		shortName: "HAM",
		number: 44,
		nationality: "eng",
		isFirstDriver: true,
		age: 36,
		worldTitles: 7
	},
	{
		firstName: "George",
		lastName: "Russell",
		shortName: "RUS",
		number: 63,
		nationality: "fin",
		isFirstDriver: false,
		age: 23,
		worldTitles: 0
	},
	{
		firstName: "Max",
		lastName: "Verstappen",
		shortName: "VER",
		number: 33,
		nationality: "ola",
		isFirstDriver: true,
		age: 24,
		worldTitles: 1
	},
	{
		firstName: "Sergio",
		lastName: "Perez",
		shortName: "PER",
		number: 11,
		nationality: "mex",
		isFirstDriver: false,
		age: 31,
		worldTitles: 0
	},
	{
		firstName: "Lando",
		lastName: "Norris",
		shortName: "NOR",
		number: 4,
		nationality: "mon",
		isFirstDriver: true,
		age: 22,
		worldTitles: 0
	},
	{
		firstName: "Daniel",
		lastName: "Ricciardo",
		shortName: "RIC",
		number: 3,
		nationality: "aus",
		isFirstDriver: false,
		age: 32,
		worldTitles: 0
	},
	{
		firstName: "Fernando",
		lastName: "Alonso",
		shortName: "ALO",
		number: 14,
		nationality: "esp",
		isFirstDriver: true,
		age: 40,
		worldTitles: 2
	},
	{
		firstName: "Esteban",
		lastName: "Ocon",
		shortName: "OCO",
		number: 31,
		nationality: "fra",
		isFirstDriver: false,
		age: 25,
		worldTitles: 0
	},
	{
		firstName: "Pierre",
		lastName: "Gasly",
		shortName: "GAS",
		number: 19,
		nationality: "fra",
		isFirstDriver: true,
		age: 25,
		worldTitles: 0
	},
	{
		firstName: "Yuki",
		lastName: "Tsunoda",
		shortName: "TSU",
		number: 38,
		nationality: "jap",
		isFirstDriver: false,
		age: 21,
		worldTitles: 0
	},
	{
		firstName: "Sebastian",
		lastName: "Vettel",
		shortName: "VET",
		number: 5,
		nationality: "ger",
		isFirstDriver: true,
		age: 34,
		worldTitles: 4
	},
	{
		firstName: "Lance",
		lastName: "Stroll",
		shortName: "STR",
		number: 18,
		nationality: "can",
		isFirstDriver: false,
		age: 23,
		worldTitles: 0
	},
	{
		firstName: "Valtteri",
		lastName: "Bottas",
		shortName: "BOT",
		number: 77,
		nationality: "fin",
		isFirstDriver: true,
		age: 32,
		worldTitles: 0
	},
	{
		firstName: "Guanyu",
		lastName: "Zhou",
		shortName: "ZHO",
		number: 24,
		nationality: "chi",
		isFirstDriver: false,
		age: 22,
		worldTitles: 0
	},
	{
		firstName: "Alex",
		lastName: "Albon",
		shortName: "ALB",
		number: 23,
		nationality: "tha",
		isFirstDriver: true,
		age: 25,
		worldTitles: 0
	},
	{
		firstName: "Nicholas",
		lastName: "Latifi",
		shortName: "LAT",
		number: 5,
		nationality: "can",
		isFirstDriver: false,
		age: 26,
		worldTitles: 0
	},
	{
		firstName: "Mick",
		lastName: "Schumacher",
		shortName: "MSC",
		number: 47,
		nationality: "ger",
		isFirstDriver: true,
		age: 22,
		worldTitles: 0
	},
	{
		firstName: "Kevin",
		lastName: "Magnussen",
		shortName: "MAG",
		number: 20,
		nationality: "dan",
		isFirstDriver: false,
		age: 30,
		worldTitles: 0
	},
	{
		firstName: "Niko",
		lastName: "Hulkenberg",
		shortName: "HUL",
		number: 27,
		nationality: "ger",
		isFirstDriver: false,
		age: 34,
		worldTitles: 0
	}
];

const drivesFor = [
	{
		driver: "Leclerc",
		team: "Ferrari",
		since: "2019"
	},
	{
		driver: "Sainz",
		team: "Ferrari",
		since: "2021"
	},
	{
		driver: "Hamilton",
		team: "Mercedes",
		since: "2013"
	},
	{
		driver: "Russell",
		team: "Mercedes",
		since: "2022"
	},
	{
		driver: "Verstappen",
		team: "Redbull",
		since: "2016"
	},
	{
		driver: "Perez",
		team: "Redbull",
		since: "2021"
	},
	{
		driver: "Norris",
		team: "McLaren",
		since: "2019"
	},
	{
		driver: "Ricciardo",
		team: "McLaren",
		since: "2021"
	},
	{
		driver: "Alonso",
		team: "Alpine",
		since: "2021"
	},
	{
		driver: "Ocon",
		team: "Alpine",
		since: "2021"
	},
	{
		driver: "Gasly",
		team: "AlphaTauri",
		since: "2019"
	},
	{
		driver: "Tsunoda",
		team: "AlphaTauri",
		since: "2021"
	},
	{
		driver: "Vettel",
		team: "AstonMartin",
		since: "2021"
	},
	{
		driver: "Stroll",
		team: "AstonMartin",
		since: "2019"
	},
	{
		driver: "Bottas",
		team: "AlfaRomeo",
		since: "2022"
	},
	{
		driver: "Zhou",
		team: "AlfaRomeo",
		since: "2022"
	},
	{
		driver: "Albon",
		team: "Williams",
		since: "2022"
	},
	{
		driver: "Latifi",
		team: "Williams",
		since: "2020"
	},
	{
		driver: "Schumacher",
		team: "Haas",
		since: "2021"
	},
	{
		driver: "Magnussen",
		team: "Haas",
		since: "2022"
	},
	{
		driver: "Hulkenberg",
		team: "AstonMartin",
		since: "2022"
	}
];

const allGrandPrix = [
	{
		name: "Gulf Air Bahrain Grand Prix",
		circuit: "Bahrain International Circuit",
		nation: "bah",
		city: "Manama",
		date: "03-20-2022"
	},
	{
		name: "STC Saudi Arabian Grand Prix",
		circuit: "Jeddah Corniche Circuit",
		nation: "ara",
		city: "Jeddah",
		date: "03-27-2022"
	},
	{
		name: "Australian Gran Prix",
		circuit: "Albert Park Circuit",
		nation: "aus",
		city: "Melbourne",
		date: "04-10-2022"
	},
	{
		name: "Pirelli Gran Premio del Made in Italy e della Emilia Romagna",
		circuit: "Autodromo Enzo e Dino Ferrari",
		nation: "ita",
		city: "Imola",
		date: "04-24-2022"
	},
	{
		name: "Crypto.com Miami Grand Prix ",
		circuit: "Miami International Autodrome",
		nation: "usa",
		city: "Miami",
		date: "05-08-2022"
	},
	{
		name: "Aramco Gran Premio de España",
		circuit: "Circuit de Barcelona-Catalunya",
		nation: "esp",
		city: "Montmeló",
		date: "05-22-2022"
	},
	{
		name: "Grand Prix de Monaco",
		circuit: "Circuit de Monaco",
		nation: "mco",
		city: "Monaco",
		date: "05-29-2022"
	},
	{
		name: "Azerbaijan Grand Prix",
		circuit: "Baku City Circuit",
		nation: "aze",
		city: "Baku",
		date: "06-12-2022"
	}
];

const racedAtManama = [
	{
		driver: "Leclerc",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Hulkenberg",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	}
];

const racedAtJeddah = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Hulkenberg",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	}
];

const racedAtMelbourne = [
	{
		driver: "Leclerc",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	}
];

const racedAtImola = [
	{
		driver: "Verstappen",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 8
	},
	{
		driver: "Perez",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 6
	},
	{
		driver: "Norris",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 4
	},
	{
		driver: "Russell",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 2
	},
	{
		driver: "Leclerc",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 7
	},
	{
		driver: "Tsunoda",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 1
	},
	{
		driver: "Stroll",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 3
	},
	{
		driver: "Alonso",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 5
	}
];

const racedAtMiami = [
	{
		driver: "Verstappen",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	}
];

const racedAtMontmeló = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	}
];

const racedAtMonaco = [
	{
		driver: "Perez",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 6,
		points: 9,
		fastestLap: true,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	}
];

const racedAtBaku = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Albon",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Magnussen",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Zhou",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	}
];


const createTeams = async () => {
	for (let i = 0; i < teams.length; i++) {
		const body = JSON.stringify(teams[i]);
		const response = await fetch("http://localhost:3000/team", {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createDrivers = async () => {
	for (let i = 0; i < drivers.length; i++) {
		const body = JSON.stringify(drivers[i]);
		const response = await fetch("http://localhost:3000/driver", {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createDrivesFor = async () => {
	for (let i = 0; i < drivesFor.length; i++) {
		const data = {};
		data.since = drivesFor[i].since;
		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${drivesFor[i].driver}/drivesFor/${drivesFor[i].team}`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createAllGrandPrix = async () => {
	for (let i = 0; i < allGrandPrix.length; i++) {
		const body = JSON.stringify(allGrandPrix[i]);
		const response = await fetch("http://localhost:3000/grandPrix", {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtManama = async () => {
	for (let i = 0; i < racedAtManama.length; i++) {
		const data = {
			position: racedAtManama[i].position,
			points: racedAtManama[i].points,
			fastestLap: racedAtManama[i].fastestLap,
			qualified: racedAtManama[i].qualified,
			pointsFromSprint: racedAtManama[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtManama[i].driver}/racedAt/Manama`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtJeddah = async () => {
	for (let i = 0; i < racedAtJeddah.length; i++) {
		const data = {
			position: racedAtJeddah[i].position,
			points: racedAtJeddah[i].points,
			fastestLap: racedAtJeddah[i].fastestLap,
			qualified: racedAtJeddah[i].qualified,
			pointsFromSprint: racedAtJeddah[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtJeddah[i].driver}/racedAt/Jeddah`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtMelbourne = async () => {
	for (let i = 0; i < racedAtMelbourne.length; i++) {
		const data = {
			position: racedAtMelbourne[i].position,
			points: racedAtMelbourne[i].points,
			fastestLap: racedAtMelbourne[i].fastestLap,
			qualified: racedAtMelbourne[i].qualified,
			pointsFromSprint: racedAtMelbourne[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMelbourne[i].driver}/racedAt/Melbourne`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtImola = async () => {
	for (let i = 0; i < racedAtImola.length; i++) {
		const data = {
			position: racedAtImola[i].position,
			points: racedAtImola[i].points,
			fastestLap: racedAtImola[i].fastestLap,
			qualified: racedAtImola[i].qualified,
			pointsFromSprint: racedAtImola[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtImola[i].driver}/racedAt/Imola`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtMiami = async () => {
	for (let i = 0; i < racedAtMiami.length; i++) {
		const data = {
			position: racedAtMiami[i].position,
			points: racedAtMiami[i].points,
			fastestLap: racedAtMiami[i].fastestLap,
			qualified: racedAtMiami[i].qualified,
			pointsFromSprint: racedAtMiami[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMiami[i].driver}/racedAt/Miami`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtMontmeló = async () => {
	for (let i = 0; i < racedAtMontmeló.length; i++) {
		const data = {
			position: racedAtMontmeló[i].position,
			points: racedAtMontmeló[i].points,
			fastestLap: racedAtMontmeló[i].fastestLap,
			qualified: racedAtMontmeló[i].qualified,
			pointsFromSprint: racedAtMontmeló[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMontmeló[i].driver}/racedAt/Montmeló`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtMonaco = async () => {
	for (let i = 0; i < racedAtMonaco.length; i++) {
		const data = {
			position: racedAtMonaco[i].position,
			points: racedAtMonaco[i].points,
			fastestLap: racedAtMonaco[i].fastestLap,
			qualified: racedAtMonaco[i].qualified,
			pointsFromSprint: racedAtMonaco[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMonaco[i].driver}/racedAt/Monaco`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAtBaku = async () => {
	for (let i = 0; i < racedAtBaku.length; i++) {
		const data = {
			position: racedAtBaku[i].position,
			points: racedAtBaku[i].points,
			fastestLap: racedAtBaku[i].fastestLap,
			qualified: racedAtBaku[i].qualified,
			pointsFromSprint: racedAtBaku[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtBaku[i].driver}/racedAt/Baku`, {
			method: "POST",
			headers: {
					"Content-Type": "application/json"
			},
			body
		});
		const result = await response.json();
		console.log(result);
	};
};

const createRacedAt = async () => {
	await createRacedAtManama();
	await createRacedAtJeddah();
	await createRacedAtMelbourne();
	await createRacedAtImola();
	await createRacedAtMiami();
	await createRacedAtMontmeló();
	await createRacedAtMonaco();
	await createRacedAtBaku();
};

await createTeams();
await createDrivers();
await createDrivesFor();
await createAllGrandPrix();
await createRacedAt();