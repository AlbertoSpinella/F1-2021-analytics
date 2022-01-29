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
        nationality: "aus",
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

createTeams();