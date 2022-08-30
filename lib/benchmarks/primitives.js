"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var benchmark_1 = __importDefault(require("benchmark"));
var index_1 = require("../index");
var enumSuite = new benchmark_1.default.Suite("z.enum");
var enumSchema = index_1.z.enum(["a", "b", "c"]);
enumSuite
    .add("valid", function () {
    enumSchema.parse("a");
})
    .add("invalid", function () {
    try {
        enumSchema.parse("x");
    }
    catch (e) { }
})
    .on("cycle", function (e) {
    console.log("z.enum: " + e.target);
});
var undefinedSuite = new benchmark_1.default.Suite("z.undefined");
var undefinedSchema = index_1.z.undefined();
undefinedSuite
    .add("valid", function () {
    undefinedSchema.parse(undefined);
})
    .add("invalid", function () {
    try {
        undefinedSchema.parse(1);
    }
    catch (e) { }
})
    .on("cycle", function (e) {
    console.log("z.undefined: " + e.target);
});
var literalSuite = new benchmark_1.default.Suite("z.literal");
var short = "short";
var bad = "bad";
var literalSchema = index_1.z.literal("short");
literalSuite
    .add("valid", function () {
    literalSchema.parse(short);
})
    .add("invalid", function () {
    try {
        literalSchema.parse(bad);
    }
    catch (e) { }
})
    .on("cycle", function (e) {
    console.log("z.literal: " + e.target);
});
var numberSuite = new benchmark_1.default.Suite("z.number");
var numberSchema = index_1.z.number().int();
numberSuite
    .add("valid", function () {
    numberSchema.parse(1);
})
    .add("invalid type", function () {
    try {
        numberSchema.parse("bad");
    }
    catch (e) { }
})
    .add("invalid number", function () {
    try {
        numberSchema.parse(0.5);
    }
    catch (e) { }
})
    .on("cycle", function (e) {
    console.log("z.number: " + e.target);
});
exports.default = {
    suites: [enumSuite, undefinedSuite, literalSuite, numberSuite],
};
