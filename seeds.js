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
			secondary: "red"
		},
		nationality: "fra",
		teamPrincipal: "Brivio"
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
		firstName: "Valtteri",
		lastName: "Bottas",
		shortName: "BOT",
		number: 77,
		nationality: "fin",
		isFirstDriver: false,
		age: 32,
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
		nationality: "gia",
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
		firstName: "Kimi",
		lastName: "Raikkonen",
		shortName: "RAI",
		number: 7,
		nationality: "fin",
		isFirstDriver: true,
		age: 42,
		worldTitles: 1
	},
	{
		firstName: "Antonio",
		lastName: "Giovinazzi",
		shortName: "GIO",
		number: 28,
		nationality: "ita",
		isFirstDriver: false,
		age: 28,
		worldTitles: 0
	},
	{
		firstName: "George",
		lastName: "Russell",
		shortName: "RUS",
		number: 63,
		nationality: "eng",
		isFirstDriver: true,
		age: 23,
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
		firstName: "Nikita",
		lastName: "Mazepin",
		shortName: "MAZ",
		number: 9,
		nationality: "rus",
		isFirstDriver: false,
		age: 22,
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
		driver: "Bottas",
		team: "Mercedes",
		since: "2017"
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
		driver: "Raikkonen",
		team: "AlfaRomeo",
		since: "2019"
	},
	{
		driver: "Giovinazzi",
		team: "AlfaRomeo",
		since: "2017"
	},
	{
		driver: "Russell",
		team: "Williams",
		since: "2019"
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
		driver: "Mazepin",
		team: "Haas",
		since: "2021"
	}
];

const allGrandPrix = [
	{
		name: "Gulf Air Bahrain Grand Prix",
		circuit: "Bahrain International Circuit",
		nation: "bah",
		city: "Manama",
		date: "03-28-2021"
	},
	{
		name: "Pirelli Gran Premio del Made in Italy e della Emilia Romagnaa",
		circuit: "Autodromo Enzo e Dino Ferrari",
		nation: "ita",
		city: "Imola",
		date: "04-18-2021"
	},
	{
		name: "Heineken Grande Prémio de Portugal",
		circuit: "Autódromo Internacional do Algarve",
		nation: "por",
		city: "Portimão",
		date: "05-02-2021"
	},
	{
		name: "Aramco Gran Premio de España",
		circuit: "Circuit de Barcelona-Catalunya",
		nation: "esp",
		city: "Montmeló",
		date: "05-09-2021"
	},
	{
		name: "Grand Prix de Monaco",
		circuit: "Circuit de Monaco",
		nation: "mco",
		city: "Monaco",
		date: "05-23-2021"
	},
	{
		name: "Azerbaijan Grand Prix",
		circuit: "Baku City Circuit",
		nation: "aze",
		city: "Baku",
		date: "06-06-2021"
	},
	{
		name: "Emirates Grand Prix de France",
		circuit: "Circuit Paul Ricard",
		nation: "fra",
		city: "Le Castellet",
		date: "06-20-2021"
	},
	{
		name: "BWT Großer Preis der Steiermark",
		circuit: "Red Bull Ring",
		nation: "aut",
		city: "Spielberg",
		date: "06-27-2021"
	},
	{
		name: "BWT Großer Preis von Österreich",
		circuit: "Red Bull Ring",
		nation: "aut",
		city: "Spielberg",
		date: "07-04-2021"
	},
	{
		name: "Pirelli British Grand Prix",
		circuit: "Silverstone Circuit",
		nation: "eng",
		city: "Silverstone",
		date: "07-18-2021"
	},
	{
		name: "Rolex Magyar Nagydíj",
		circuit: "Hungaroring",
		nation: "ung",
		city: "Mogyoród",
		date: "08-01-2021"
	},
	{
		name: "Rolex Belgian Grand Prix",
		circuit: "Circuit de Spa-Francorchamps",
		nation: "bel",
		city: "Stavelot",
		date: "08-29-2021"
	},
	{
		name: "Heineken Dutch Grand Prix",
		circuit: "Circuit Zandvoort",
		nation: "ola",
		city: "Zandvoort",
		date: "09-05-2021"
	},
	{
		name: "Heineken Gran Premio di Italia",
		circuit: "Autodromo nazionale di Monza",
		nation: "ita",
		city: "Monza",
		date: "09-12-2021"
	},
	{
		name: "VTB Russian Grand Prix",
		circuit: "Sochi Autodrom",
		nation: "rus",
		city: "Soči",
		date: "09-26-2021"
	},
	{
		name: "Rolex Turkish Grand Prix",
		circuit: "Istanbul International Circuit",
		nation: "tur",
		city: "Tuzla",
		date: "10-10-2021"
	},
	{
		name: "Aramco United States Grand Prix",
		circuit: " 	Circuit of the Americas",
		nation: "usa",
		city: "Austin",
		date: "10-24-2021"
	},
	{
		name: "Gran Premio de la Ciudad de México",
		circuit: "Autodromo Hermanos Rodríguez",
		nation: "mex",
		city: "Ciudad de México",
		date: "11-07-2021"
	},
	{
		name: "Heineken Grande Prêmio de São Paulo",
		circuit: "Autódromo José Carlos Pace",
		nation: "bra",
		city: "San Paolo",
		date: "11-14-2021"
	},
	{
		name: "Ooredoo Qatar Grand Prix",
		circuit: "Losail International Circuit",
		nation: "qat",
		city: "Doha",
		date: "11-21-2021"
	},
	{
		name: "STC Saudi Arabian Grand Prix",
		circuit: "Jeddah Corniche Circuit",
		nation: "ara",
		city: "Gedda",
		date: "12-05-2021"
	},
	{
		name: "Etihad Airways Abu Dhabi Grand Prix",
		circuit: "Yas Marina Circuit",
		nation: "eau",
		city: "Abu Dhabi",
		date: "12-12-2021"
	}
];

const racedAtManama = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 3,
		points: 16,
		fastestLap: true,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 13,
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
		driver: "Raikkonen",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
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
		driver: "Mazepin",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	}
];

const racedAtImola = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	}
];

const racedAtPortimão = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 3,
		points: 16,
		fastestLap: true,
		qualified: 1,
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
		driver: "Norris",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	}
];

const racedAtMontmeló = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 8,
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
		driver: "Sainz",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 14,
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
		driver: "Alonso",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	}
];

const racedAtMonaco = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 7,
		points: 7,
		fastestLap: true,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 15,
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
		driver: "Tsunoda",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 3,
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

const racedAtBaku = [
	{
		driver: "Perez",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
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
		driver: "Norris",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 18,
		points: 0,
		fastestLap: true,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	}
];

const racedAtLeCastellet = [
	{
		driver: "Verstappen",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
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
		driver: "Mazepin",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 18,
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

const createRacedAtPortimão = async () => {
	for (let i = 0; i < racedAtPortimão.length; i++) {
		const data = {
			position: racedAtPortimão[i].position,
			points: racedAtPortimão[i].points,
			fastestLap: racedAtPortimão[i].fastestLap,
			qualified: racedAtPortimão[i].qualified,
			pointsFromSprint: racedAtPortimão[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtPortimão[i].driver}/racedAt/Portimão`, {
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

const createRacedAtLeCastellet = async () => {
	for (let i = 0; i < racedAtLeCastellet.length; i++) {
		const data = {
			position: racedAtLeCastellet[i].position,
			points: racedAtLeCastellet[i].points,
			fastestLap: racedAtLeCastellet[i].fastestLap,
			qualified: racedAtLeCastellet[i].qualified,
			pointsFromSprint: racedAtLeCastellet[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtLeCastellet[i].driver}/racedAt/Le%20Castellet`, {
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

await createTeams();
await createDrivers();
await createDrivesFor();
await createAllGrandPrix();

await createRacedAtManama();
await createRacedAtImola();
await createRacedAtPortimão();
await createRacedAtMontmeló();
await createRacedAtMonaco();
await createRacedAtBaku();
await createRacedAtLeCastellet();