import { createDriverService } from "./APIs/createDriver.js";
import { getAllDriversService } from "./APIs/getAllDrivers.js";
import { getDriverService } from "./APIs/getDriver.js";
import { deleteDriverService } from "./APIs/deleteDriver.js";

const Driver = {
    type: "object",
    required: ["name", "surname", "nationality", "number", "isFirstDriver", "age", "worldTitles"],
    properties: {
        name: { type: "string" },
        surname: { type: "string" },
        nationality: { type: "string" },
        number: { type: "number" },
        isFirstDriver: { type: "boolean" },
        age: { type: "number" },
        worldTitles: { type: "number" }
    }
};

export const createDriverSchema = {
    schema: {
        tags: ["DRIVER"],
        body: {
            type: "object",
            required: ["name", "surname", "nationality", "number", "isFirstDriver", "age", "worldTitles"],
            properties: {
                name: { type: "string" },
                surname: { type: "string" },
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
                items: Driver
            }
        }
    },
    handler: getAllDriversService
};

export const getDriverSchema = {
    schema: {
        tags: ["DRIVER"],
        response: {
            200: Driver
        }
    },
    handler: getDriverService
};

export const deleteDriverSchema = {
    schema: {
        tags: ["DRIVER"]
    },
    handler: deleteDriverService
};