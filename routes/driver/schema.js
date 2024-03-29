import { createDriverService } from "./APIs/createDriver.js";
import { getAllDriversService } from "./APIs/getAllDrivers.js";
import { getDriverService } from "./APIs/getDriver.js";
import { deleteDriverService } from "./APIs/deleteDriver.js";
import { Driver, paramsDriverID, responseMessage, Team } from "../sharedSchemas.js";

export const DriverWithTeam = {
    type: "object",
    required: ["firstName", "lastName", "shortName", "nationality", "number", "isFirstDriver", "age", "worldTitles", "team"],
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        shortName: { type: "string" },
        nationality: { type: "string" },
        number: { type: "number" },
        isFirstDriver: { type: "boolean" },
        age: { type: "number" },
        worldTitles: { type: "number" },
        team: Team
    }
};

export const createDriverSchema = {
    schema: {
        tags: ["DRIVER"],
        body: {
            type: "object",
            required: ["firstName", "lastName", "shortName", "nationality", "number", "isFirstDriver", "age", "worldTitles"],
            properties: {
                firstName: { type: "string" },
                lastName: { type: "string" },
                shortName: { type: "string" },
                nationality: { type: "string" },
                number: { type: "number" },
                isFirstDriver: { type: "boolean" },
                age: { type: "number" },
                worldTitles: { type: "number" }
            },
            additionalProperties: false
        },
        response: {
            200: Driver
        }
    },
    handler: createDriverService
};

export const getAllDriversSchema = {
    schema: {
        tags: ["DRIVER"],
        response: {
            200: {
                type: "array",
                items: DriverWithTeam
            }
        }
    },
    handler: getAllDriversService
};

export const getDriverSchema = {
    schema: {
        tags: ["DRIVER"],
        params: paramsDriverID,
        response: {
            200: DriverWithTeam
        }
    },
    handler: getDriverService
};

export const deleteDriverSchema = {
    schema: {
        tags: ["DRIVER"],
        params: paramsDriverID,
        response: {
            200: responseMessage
        }
    },
    handler: deleteDriverService
};