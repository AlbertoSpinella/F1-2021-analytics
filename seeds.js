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
		name: "Charles",
		surname: "Leclerc",
		number: 16,
		nationality: "mon",
		isFirstDriver: true,
		age: 24,
		worldTitles: 0
	},
	{
		name: "Carlos",
		surname: "Sainz",
		number: 55,
		nationality: "esp",
		isFirstDriver: false,
		age: 27,
		worldTitles: 0
	},
	{
		name: "Lewis",
		surname: "Hamilton",
		number: 44,
		nationality: "eng",
		isFirstDriver: true,
		age: 36,
		worldTitles: 7
	},
	{
		name: "Valtteri",
		surname: "Bottas",
		number: 77,
		nationality: "fin",
		isFirstDriver: false,
		age: 32,
		worldTitles: 0
	},
	{
		name: "Max",
		surname: "Verstappen",
		number: 33,
		nationality: "ola",
		isFirstDriver: true,
		age: 24,
		worldTitles: 1
	},
	{
		name: "Sergio",
		surname: "Perez",
		number: 11,
		nationality: "mex",
		isFirstDriver: false,
		age: 31,
		worldTitles: 0
	},
	{
		name: "Lando",
		surname: "Norris",
		number: 4,
		nationality: "mon",
		isFirstDriver: true,
		age: 22,
		worldTitles: 0
	},
	{
		name: "Daniel",
		surname: "Ricciardo",
		number: 3,
		nationality: "aus",
		isFirstDriver: false,
		age: 32,
		worldTitles: 0
	},
	{
		name: "Fernando",
		surname: "Alonso",
		number: 14,
		nationality: "esp",
		isFirstDriver: true,
		age: 40,
		worldTitles: 2
	},
	{
		name: "Esteban",
		surname: "Ocon",
		number: 31,
		nationality: "fra",
		isFirstDriver: false,
		age: 25,
		worldTitles: 0
	},
	{
		name: "Pierre",
		surname: "Gasly",
		number: 19,
		nationality: "fra",
		isFirstDriver: true,
		age: 25,
		worldTitles: 0
	},
	{
		name: "Yuki",
		surname: "Tsunoda",
		number: 38,
		nationality: "gia",
		isFirstDriver: false,
		age: 21,
		worldTitles: 0
	},
	{
		name: "Sebastian",
		surname: "Vettel",
		number: 5,
		nationality: "ger",
		isFirstDriver: true,
		age: 34,
		worldTitles: 4
	},
	{
		name: "Lance",
		surname: "Stroll",
		number: 18,
		nationality: "can",
		isFirstDriver: false,
		age: 23,
		worldTitles: 0
	},
	{
		name: "Kimi",
		surname: "Raikkonen",
		number: 7,
		nationality: "fin",
		isFirstDriver: true,
		age: 42,
		worldTitles: 1
	},
	{
		name: "Antonio",
		surname: "Giovinazzi",
		number: 28,
		nationality: "ita",
		isFirstDriver: false,
		age: 28,
		worldTitles: 0
	},
	{
		name: "George",
		surname: "Russell",
		number: 63,
		nationality: "eng",
		isFirstDriver: true,
		age: 23,
		worldTitles: 0
	},
	{
		name: "Nicholas",
		surname: "Latifi",
		number: 5,
		nationality: "can",
		isFirstDriver: false,
		age: 26,
		worldTitles: 0
	},
	{
		name: "Mick",
		surname: "Schumacher",
		number: 47,
		nationality: "ger",
		isFirstDriver: true,
		age: 22,
		worldTitles: 0
	},
	{
		name: "Nikita",
		surname: "Mazepin",
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

createTeams();
createDrivers();
createDrivesFor();