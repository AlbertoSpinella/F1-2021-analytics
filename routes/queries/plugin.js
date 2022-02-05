import {
    getAllGrandPrixWinnersSchema,
    getAllGrandChelemsSchema,
    getGrandChelemDriversSchema,
    getAllFastestLapsSchema,
    positionsGainedOrLosedPerGPSchema,
    positionsGainedOrLosedPerGPByDriverIDSchema,
    neverReachedQSchema,
    qualifiedFirstSchema,
    bestRacesOfDriversSchema,
    bestRacesByDriverIDSchema,
    worstRacesOfDriversSchema,
    worstRacesByDriverIDSchema,
    allDriversAtPointsSchema
} from "./schema.js";

export const queriesPlugin = (fastify, options, done) => {
    fastify.get("/grandPrixWinner", getAllGrandPrixWinnersSchema); //get every driver who has won at least a GP
    fastify.get("/grandChelem", getAllGrandChelemsSchema);  //get every Grand Chelem
    fastify.get("/grandChelemDrivers", getGrandChelemDriversSchema); //get every driver who scored at least a Grand Chalem
    fastify.get("/fastestLap", getAllFastestLapsSchema); //get every fastest lap of GPs
    fastify.get("/positionsGainedOrLosedPerGP", positionsGainedOrLosedPerGPSchema); //for every driver, get ever net amount of position gained (or losed) per GPs
    fastify.get("/positionsGainedOrLosedPerGP/:driverID", positionsGainedOrLosedPerGPByDriverIDSchema); //for a driver, get ever net amount of position gained (or losed) per GPs
    fastify.get("/neverReached/:Q", neverReachedQSchema); //get all the drivers that never reached Q2 or Q3
    fastify.get("/qualifiedFirst", qualifiedFirstSchema); //get all drivers who qualified first at least once
    fastify.get("/bestRacesOfDrivers", bestRacesOfDriversSchema); // for every driver, get his best position and every races in which he arrived that position
    fastify.get("/bestRaces/:driverID", bestRacesByDriverIDSchema); //for a d river, get his best position and every races in which he arrived that position
    fastify.get("/worstRacesOfDrivers", worstRacesOfDriversSchema); // for every driver, get his worst position and every races in which he arrived that position
    fastify.get("/worstRaces/:driverID", worstRacesByDriverIDSchema); //for a d river, get his worst position and every races in which he arrived that position
    fastify.get("/allDriversAtPoints", allDriversAtPointsSchema); //get all drivers who scored points at every GP

    done();
};