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
	},
	{
		firstName: "Robert",
		lastName: "Kubica",
		shortName: "KUB",
		number: 88,
		nationality: "pol",
		isFirstDriver: false,
		age: 37,
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
	},
	{
		driver: "Kubica",
		team: "AlfaRomeo",
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
		city: "Spielberg_1",
		date: "06-27-2021"
	},
	{
		name: "BWT Großer Preis von Österreich",
		circuit: "Red Bull Ring",
		nation: "aut",
		city: "Spielberg_2",
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
		circuit: "Circuit of the Americas",
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

const racedAtSpielberg_1 = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
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
		driver: "Sainz",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 7,
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
		driver: "Alonso",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 15,
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
		driver: "Latifi",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	}
];

const racedAtSpielberg_2 = [
	{
		driver: "Verstappen",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
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
		driver: "Perez",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
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
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 16,
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
		driver: "Vettel",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
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
		driver: "Ocon",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	}
];

const racedAtSilverstone = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 2
	},
	{
		driver: "Leclerc",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 1
	},
	{
		driver: "Norris",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 11,
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
		driver: "Stroll",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 16,
		points: 0,
		fastestLap: true,
		qualified: 20,
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
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 3
	}
];

const racedAtMogyoród = [
	{
		driver: "Ocon",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
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
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 5,
		points: 11,
		fastestLap: true,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	}
];

const racedAtStavelot = [
	{
		driver: "Verstappen",
		position: 1,
		points: 12.5,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 2,
		points: 9,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 3,
		points: 7.5,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 4,
		points: 6,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 5,
		points: 5,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 6,
		points: 4,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 7,
		points: 3,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 8,
		points: 2,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 9,
		points: 1,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 10,
		points: 0.5,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 17,
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
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	}
];

const racedAtZandvoort = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
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
		driver: "Gasly",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 5,
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
		driver: "Sainz",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
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
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Kubica",
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
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
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
		qualified: 15,
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

const racedAtMonza = [
	{
		driver: "Ricciardo",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 1
	},
	{
		driver: "Norris",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 3
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
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
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
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 8,
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
		driver: "Latifi",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Kubica",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 2
	},
	{
		driver: "Gasly",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	}
];

const racedAtSoči = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 20,
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
		driver: "Ricciardo",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 7,
		points: 7,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	}
];

const racedAtTuzla = [
	{
		driver: "Bottas",
		position: 1,
		points: 26,
		fastestLap: true,
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
		driver: "Perez",
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
		driver: "Hamilton",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
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
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 14,
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

const racedAtAustin = [
	{
		driver: "Verstappen",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Hamilton",
		position: 2,
		points: 19,
		fastestLap: true,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
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
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
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
		qualified: 4,
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
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 18,
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
		qualified: 17,
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
		driver: "Mazepin",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	}
];

const racedAtCiudaddeMéxico = [
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
		driver: "Gasly",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
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
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 15,
		points: 0,
		fastestLap: true,
		qualified: 1,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	}
];

const racedAtSanPaolo = [
	{
		driver: "Hamilton",
		position: 1,
		points: 25,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Verstappen",
		position: 2,
		points: 18,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 2
	},
	{
		driver: "Bottas",
		position: 3,
		points: 15,
		fastestLap: false,
		qualified: 1,
		pointsFromSprint: 3
	},
	{
		driver: "Perez",
		position: 4,
		points: 13,
		fastestLap: true,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 1
	},
	{
		driver: "Gasly",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 15,
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
		driver: "Mazepin",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	}
];

const racedAtDoha = [
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
		driver: "Alonso",
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
		qualified: 11,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 6,
		points: 8,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 6,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
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
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
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
		driver: "Russell",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Bottas",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 3,
		pointsFromSprint: 0
	}
];

const racedAtGedda = [
	{
		driver: "Hamilton",
		position: 1,
		points: 26,
		fastestLap: true,
		qualified: 1,
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
		points: 15,
		fastestLap: false,
		qualified: 2,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 11,
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
		driver: "Leclerc",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Sainz",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Norris",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Tsunoda",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 19,
		pointsFromSprint: 0
	}
];

const racedAtAbuDhabi = [
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
		qualified: 3,
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
		driver: "Tsunoda",
		position: 4,
		points: 12,
		fastestLap: false,
		qualified: 9,
		pointsFromSprint: 0
	},
	{
		driver: "Gasly",
		position: 5,
		points: 10,
		fastestLap: false,
		qualified: 11,
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
		driver: "Norris",
		position: 7,
		points: 6,
		fastestLap: false,
		qualified: 4,
		pointsFromSprint: 0
	},
	{
		driver: "Alonso",
		position: 8,
		points: 4,
		fastestLap: false,
		qualified: 15,
		pointsFromSprint: 0
	},
	{
		driver: "Ocon",
		position: 9,
		points: 2,
		fastestLap: false,
		qualified: 10,
		pointsFromSprint: 0
	},
	{
		driver: "Leclerc",
		position: 10,
		points: 1,
		fastestLap: false,
		qualified: 7,
		pointsFromSprint: 0
	},
	{
		driver: "Vettel",
		position: 11,
		points: 0,
		fastestLap: false,
		qualified: 18,
		pointsFromSprint: 0
	},
	{
		driver: "Ricciardo",
		position: 12,
		points: 0,
		fastestLap: false,
		qualified: 16,
		pointsFromSprint: 0
	},
	{
		driver: "Stroll",
		position: 13,
		points: 0,
		fastestLap: false,
		qualified: 13,
		pointsFromSprint: 0
	},
	{
		driver: "Schumacher",
		position: 14,
		points: 0,
		fastestLap: false,
		qualified: 8,
		pointsFromSprint: 0
	},
	{
		driver: "Perez",
		position: 15,
		points: 0,
		fastestLap: false,
		qualified: 12,
		pointsFromSprint: 0
	},
	{
		driver: "Latifi",
		position: 16,
		points: 0,
		fastestLap: false,
		qualified: 17,
		pointsFromSprint: 0
	},
	{
		driver: "Giovinazzi",
		position: 17,
		points: 0,
		fastestLap: false,
		qualified: 5,
		pointsFromSprint: 0
	},
	{
		driver: "Russell",
		position: 18,
		points: 0,
		fastestLap: false,
		qualified: 20,
		pointsFromSprint: 0
	},
	{
		driver: "Raikkonen",
		position: 19,
		points: 0,
		fastestLap: false,
		qualified: 14,
		pointsFromSprint: 0
	},
	{
		driver: "Mazepin",
		position: 20,
		points: 0,
		fastestLap: false,
		qualified: 19,
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

const createRacedAtSpielberg_1 = async () => {
	for (let i = 0; i < racedAtSpielberg_1.length; i++) {
		const data = {
			position: racedAtSpielberg_1[i].position,
			points: racedAtSpielberg_1[i].points,
			fastestLap: racedAtSpielberg_1[i].fastestLap,
			qualified: racedAtSpielberg_1[i].qualified,
			pointsFromSprint: racedAtSpielberg_1[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtSpielberg_1[i].driver}/racedAt/Spielberg_1`, {
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

const createRacedAtSpielberg_2 = async () => {
	for (let i = 0; i < racedAtSpielberg_2.length; i++) {
		const data = {
			position: racedAtSpielberg_2[i].position,
			points: racedAtSpielberg_2[i].points,
			fastestLap: racedAtSpielberg_2[i].fastestLap,
			qualified: racedAtSpielberg_2[i].qualified,
			pointsFromSprint: racedAtSpielberg_2[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtSpielberg_2[i].driver}/racedAt/Spielberg_2`, {
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

const createRacedAtSilverstone = async () => {
	for (let i = 0; i < racedAtSilverstone.length; i++) {
		const data = {
			position: racedAtSilverstone[i].position,
			points: racedAtSilverstone[i].points,
			fastestLap: racedAtSilverstone[i].fastestLap,
			qualified: racedAtSilverstone[i].qualified,
			pointsFromSprint: racedAtSilverstone[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtSilverstone[i].driver}/racedAt/Silverstone`, {
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

const createRacedAtMogyoród = async () => {
	for (let i = 0; i < racedAtMogyoród.length; i++) {
		const data = {
			position: racedAtMogyoród[i].position,
			points: racedAtMogyoród[i].points,
			fastestLap: racedAtMogyoród[i].fastestLap,
			qualified: racedAtMogyoród[i].qualified,
			pointsFromSprint: racedAtMogyoród[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMogyoród[i].driver}/racedAt/Mogyoród`, {
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

const createRacedAtStavelot = async () => {
	for (let i = 0; i < racedAtStavelot.length; i++) {
		const data = {
			position: racedAtStavelot[i].position,
			points: racedAtStavelot[i].points,
			fastestLap: racedAtStavelot[i].fastestLap,
			qualified: racedAtStavelot[i].qualified,
			pointsFromSprint: racedAtStavelot[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtStavelot[i].driver}/racedAt/Stavelot`, {
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

const createRacedAtZandvoort = async () => {
	for (let i = 0; i < racedAtZandvoort.length; i++) {
		const data = {
			position: racedAtZandvoort[i].position,
			points: racedAtZandvoort[i].points,
			fastestLap: racedAtZandvoort[i].fastestLap,
			qualified: racedAtZandvoort[i].qualified,
			pointsFromSprint: racedAtZandvoort[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtZandvoort[i].driver}/racedAt/Zandvoort`, {
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

const createRacedAtMonza = async () => {
	for (let i = 0; i < racedAtMonza.length; i++) {
		const data = {
			position: racedAtMonza[i].position,
			points: racedAtMonza[i].points,
			fastestLap: racedAtMonza[i].fastestLap,
			qualified: racedAtMonza[i].qualified,
			pointsFromSprint: racedAtMonza[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtMonza[i].driver}/racedAt/Monza`, {
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

const createRacedAtSoči = async () => {
	for (let i = 0; i < racedAtSoči.length; i++) {
		const data = {
			position: racedAtSoči[i].position,
			points: racedAtSoči[i].points,
			fastestLap: racedAtSoči[i].fastestLap,
			qualified: racedAtSoči[i].qualified,
			pointsFromSprint: racedAtSoči[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtSoči[i].driver}/racedAt/Soči`, {
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

const createRacedAtTuzla = async () => {
	for (let i = 0; i < racedAtTuzla.length; i++) {
		const data = {
			position: racedAtTuzla[i].position,
			points: racedAtTuzla[i].points,
			fastestLap: racedAtTuzla[i].fastestLap,
			qualified: racedAtTuzla[i].qualified,
			pointsFromSprint: racedAtTuzla[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtTuzla[i].driver}/racedAt/Tuzla`, {
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

const createRacedAtAustin = async () => {
	for (let i = 0; i < racedAtAustin.length; i++) {
		const data = {
			position: racedAtAustin[i].position,
			points: racedAtAustin[i].points,
			fastestLap: racedAtAustin[i].fastestLap,
			qualified: racedAtAustin[i].qualified,
			pointsFromSprint: racedAtAustin[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtAustin[i].driver}/racedAt/Austin`, {
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

const createRacedAtCiudaddeMéxico = async () => {
	for (let i = 0; i < racedAtCiudaddeMéxico.length; i++) {
		const data = {
			position: racedAtCiudaddeMéxico[i].position,
			points: racedAtCiudaddeMéxico[i].points,
			fastestLap: racedAtCiudaddeMéxico[i].fastestLap,
			qualified: racedAtCiudaddeMéxico[i].qualified,
			pointsFromSprint: racedAtCiudaddeMéxico[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtCiudaddeMéxico[i].driver}/racedAt/Ciudad%20de%20México`, {
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

const createRacedAtSanPaolo = async () => {
	for (let i = 0; i < racedAtSanPaolo.length; i++) {
		const data = {
			position: racedAtSanPaolo[i].position,
			points: racedAtSanPaolo[i].points,
			fastestLap: racedAtSanPaolo[i].fastestLap,
			qualified: racedAtSanPaolo[i].qualified,
			pointsFromSprint: racedAtSanPaolo[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtSanPaolo[i].driver}/racedAt/San%20Paolo`, {
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

const createRacedAtDoha = async () => {
	for (let i = 0; i < racedAtDoha.length; i++) {
		const data = {
			position: racedAtDoha[i].position,
			points: racedAtDoha[i].points,
			fastestLap: racedAtDoha[i].fastestLap,
			qualified: racedAtDoha[i].qualified,
			pointsFromSprint: racedAtDoha[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtDoha[i].driver}/racedAt/Doha`, {
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

const createRacedAtGedda = async () => {
	for (let i = 0; i < racedAtGedda.length; i++) {
		const data = {
			position: racedAtGedda[i].position,
			points: racedAtGedda[i].points,
			fastestLap: racedAtGedda[i].fastestLap,
			qualified: racedAtGedda[i].qualified,
			pointsFromSprint: racedAtGedda[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtGedda[i].driver}/racedAt/Gedda`, {
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

const createRacedAtAbuDhabi = async () => {
	for (let i = 0; i < racedAtAbuDhabi.length; i++) {
		const data = {
			position: racedAtAbuDhabi[i].position,
			points: racedAtAbuDhabi[i].points,
			fastestLap: racedAtAbuDhabi[i].fastestLap,
			qualified: racedAtAbuDhabi[i].qualified,
			pointsFromSprint: racedAtAbuDhabi[i].pointsFromSprint
		};

		const body = JSON.stringify(data);
		const response = await fetch(`http://localhost:3000/relations/${racedAtAbuDhabi[i].driver}/racedAt/Abu%20Dhabi`, {
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
await createRacedAtSpielberg_1();
await createRacedAtSpielberg_2();
await createRacedAtSilverstone();
await createRacedAtMogyoród();
await createRacedAtStavelot();
await createRacedAtZandvoort();
await createRacedAtMonza();
await createRacedAtSoči();
await createRacedAtTuzla();
await createRacedAtAustin();
await createRacedAtCiudaddeMéxico();
await createRacedAtSanPaolo();
await createRacedAtDoha();
await createRacedAtGedda();
await createRacedAtAbuDhabi();