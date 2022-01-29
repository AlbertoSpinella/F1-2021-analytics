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
		// console.log(result);
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
		// console.log(result);
	};
};

const createDrivesFor = async () => {
	for (let i = 0; i < drivesFor.length; i++) {
		const since = {};
		since.since = drivesFor[i].since;
		const body = JSON.stringify(since);
		const response = await fetch(`http://localhost:3000/drivesFor/${drivesFor[i].driver}/${drivesFor[i].team}`, {
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

createTeams();
createDrivers();
createDrivesFor();
createAllGrandPrix();