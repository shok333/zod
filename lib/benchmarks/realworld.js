"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var benchmark_1 = __importDefault(require("benchmark"));
var index_1 = require("../index");
var shortSuite = new benchmark_1.default.Suite("realworld");
var People = index_1.z.array(index_1.z.object({
    type: index_1.z.literal("person"),
    hair: index_1.z.enum(["blue", "brown"]),
    active: index_1.z.boolean(),
    name: index_1.z.string(),
    age: index_1.z.number().int(),
    hobbies: index_1.z.array(index_1.z.string()),
    address: index_1.z.object({
        street: index_1.z.string(),
        zip: index_1.z.string(),
        country: index_1.z.string(),
    }),
}));
var i = 0;
function num() {
    return ++i;
}
function str() {
    return (++i % 100).toString(16);
}
function array(fn) {
    return Array.from({ length: ++i % 10 }, function () { return fn(); });
}
var people = Array.from({ length: 100 }, function () {
    return {
        type: "person",
        hair: i % 2 ? "blue" : "brown",
        active: !!(i % 2),
        name: str(),
        age: num(),
        hobbies: array(str),
        address: {
            street: str(),
            zip: str(),
            country: str(),
        },
    };
});
shortSuite
    .add("valid", function () {
    People.parse(people);
})
    .on("cycle", function (e) {
    console.log(shortSuite.name + ": " + e.target);
});
exports.default = {
    suites: [shortSuite],
};
