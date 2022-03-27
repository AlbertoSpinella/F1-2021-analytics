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

const createRacedAt = async () => {
	await createRacedAtManama();
	await createRacedAtJeddah();
};

await createTeams();
await createDrivers();
await createDrivesFor();
await createAllGrandPrix();
await createRacedAt();