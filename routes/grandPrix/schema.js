import { createGrandPrixService } from "./APIs/createGrandPrix.js";
import { getAllGrandPrixService } from "./APIs/getAllGrandPrix.js";
import { getGrandPrixService } from "./APIs/getGrandPrix.js";
import { deleteGrandPrixService } from "./APIs/deleteGrandPrix.js";
import { GrandPrix, paramsGrandPrixID, responseMessage } from "../sharedSchemas.js";

export const createGrandPrixSchema = {
    schema: {
        tags: ["GRANDPRIX"],
        body: {
            type: "object",
            required: ["name", "circuit", "nation", "city", "date"],
            properties: {
                name: { type: "string" },
                circuit: { type: "string" },
                nation: { type: "string" },
                city: { type: "string" },
                date: { type: "string" }
            },
            additionalProperties: false
        },
        response: {
            200: GrandPrix
        }
    },
    handler: createGrandPrixService
};

export const getAllGrandPrixSchema = {
    schema: {
        tags: ["GRANDPRIX"],
        response: {
            200: {
                type: "array",
                items: GrandPrix
            }
        }
    },
    handler: getAllGrandPrixService
};

export const getGrandPrixSchema = {
    schema: {
        tags: ["GRANDPRIX"],
        params: paramsGrandPrixID,
        response: {
            200: GrandPrix
        }
    },
    handler: getGrandPrixService
};

export const deleteGrandPrixSchema = {
    schema: {
        tags: ["GRANDPRIX"],
        params: paramsGrandPrixID,
        response: {
            200: responseMessage
        }
    },
    handler: deleteGrandPrixService
};