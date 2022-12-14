(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('babel-polyfill')) :
    typeof define === 'function' && define.amd ? define(['exports', 'babel-polyfill'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Zod = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var util;
    (function (util) {
        util.assertEqual = function (val) { return val; };
        function assertIs(_arg) { }
        util.assertIs = assertIs;
        function assertNever(_x) {
            throw new Error();
        }
        util.assertNever = assertNever;
        util.arrayToEnum = function (items) {
            var e_1, _a;
            var obj = {};
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    obj[item] = item;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return obj;
        };
        util.getValidEnumValues = function (obj) {
            var e_2, _a;
            var validKeys = util.objectKeys(obj).filter(function (k) { return typeof obj[obj[k]] !== "number"; });
            var filtered = {};
            try {
                for (var validKeys_1 = __values(validKeys), validKeys_1_1 = validKeys_1.next(); !validKeys_1_1.done; validKeys_1_1 = validKeys_1.next()) {
                    var k = validKeys_1_1.value;
                    filtered[k] = obj[k];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (validKeys_1_1 && !validKeys_1_1.done && (_a = validKeys_1.return)) _a.call(validKeys_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return util.objectValues(filtered);
        };
        util.objectValues = function (obj) {
            return util.objectKeys(obj).map(function (e) {
                return obj[e];
            });
        };
        util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
            ? function (obj) { return Object.keys(obj); } // eslint-disable-line ban/ban
            : function (object) {
                var keys = [];
                for (var key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        keys.push(key);
                    }
                }
                return keys;
            };
        util.find = function (arr, checker) {
            var e_3, _a;
            try {
                for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                    var item = arr_1_1.value;
                    if (checker(item))
                        return item;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return undefined;
        };
        util.isInteger = typeof Number.isInteger === "function"
            ? function (val) { return Number.isInteger(val); } // eslint-disable-line ban/ban
            : function (val) {
                return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
            };
        function joinValues(array, separator) {
            if (separator === void 0) { separator = " | "; }
            return array
                .map(function (val) { return (typeof val === "string" ? "'" + val + "'" : val); })
                .join(separator);
        }
        util.joinValues = joinValues;
    })(util || (util = {}));
    var ZodParsedType = util.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set",
    ]);
    var getParsedType = function (data) {
        var t = typeof data;
        switch (t) {
            case "undefined":
                return ZodParsedType.undefined;
            case "string":
                return ZodParsedType.string;
            case "number":
                return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
            case "boolean":
                return ZodParsedType.boolean;
            case "function":
                return ZodParsedType.function;
            case "bigint":
                return ZodParsedType.bigint;
            case "object":
                if (Array.isArray(data)) {
                    return ZodParsedType.array;
                }
                if (data === null) {
                    return ZodParsedType.null;
                }
                if (data.then &&
                    typeof data.then === "function" &&
                    data.catch &&
                    typeof data.catch === "function") {
                    return ZodParsedType.promise;
                }
                if (typeof Map !== "undefined" && data instanceof Map) {
                    return ZodParsedType.map;
                }
                if (typeof Set !== "undefined" && data instanceof Set) {
                    return ZodParsedType.set;
                }
                if (typeof Date !== "undefined" && data instanceof Date) {
                    return ZodParsedType.date;
                }
                return ZodParsedType.object;
            default:
                return ZodParsedType.unknown;
        }
    };

    var ZodIssueCode = util.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
    ]);
    var quotelessJson = function (obj) {
        var json = JSON.stringify(obj, null, 2);
        return json.replace(/"([^"]+)":/g, "$1:");
    };
    var ZodError = /** @class */ (function (_super) {
        __extends(ZodError, _super);
        function ZodError(issues) {
            var _newTarget = this.constructor;
            var _this = _super.call(this) || this;
            _this.issues = [];
            _this.addIssue = function (sub) {
                _this.issues = __spread(_this.issues, [sub]);
            };
            _this.addIssues = function (subs) {
                if (subs === void 0) { subs = []; }
                _this.issues = __spread(_this.issues, subs);
            };
            var actualProto = _newTarget.prototype;
            if (Object.setPrototypeOf) {
                // eslint-disable-next-line ban/ban
                Object.setPrototypeOf(_this, actualProto);
            }
            else {
                _this.__proto__ = actualProto;
            }
            _this.name = "ZodError";
            _this.issues = issues;
            return _this;
        }
        Object.defineProperty(ZodError.prototype, "errors", {
            get: function () {
                return this.issues;
            },
            enumerable: false,
            configurable: true
        });
        ZodError.prototype.format = function (_mapper) {
            var mapper = _mapper ||
                function (issue) {
                    return issue.message;
                };
            var fieldErrors = { _errors: [] };
            var processError = function (error) {
                var e_1, _a;
                try {
                    for (var _b = __values(error.issues), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var issue = _c.value;
                        if (issue.code === "invalid_union") {
                            issue.unionErrors.map(processError);
                        }
                        else if (issue.code === "invalid_return_type") {
                            processError(issue.returnTypeError);
                        }
                        else if (issue.code === "invalid_arguments") {
                            processError(issue.argumentsError);
                        }
                        else if (issue.path.length === 0) {
                            fieldErrors._errors.push(mapper(issue));
                        }
                        else {
                            var curr = fieldErrors;
                            var i = 0;
                            while (i < issue.path.length) {
                                var el = issue.path[i];
                                var terminal = i === issue.path.length - 1;
                                if (!terminal) {
                                    curr[el] = curr[el] || { _errors: [] };
                                    // if (typeof el === "string") {
                                    //   curr[el] = curr[el] || { _errors: [] };
                                    // } else if (typeof el === "number") {
                                    //   const errorArray: any = [];
                                    //   errorArray._errors = [];
                                    //   curr[el] = curr[el] || errorArray;
                                    // }
                                }
                                else {
                                    curr[el] = curr[el] || { _errors: [] };
                                    curr[el]._errors.push(mapper(issue));
                                }
                                curr = curr[el];
                                i++;
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            };
            processError(this);
            return fieldErrors;
        };
        ZodError.prototype.toString = function () {
            return this.message;
        };
        Object.defineProperty(ZodError.prototype, "message", {
            get: function () {
                return JSON.stringify(this.issues, jsonStringifyReplacer, 2);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodError.prototype, "isEmpty", {
            get: function () {
                return this.issues.length === 0;
            },
            enumerable: false,
            configurable: true
        });
        ZodError.prototype.flatten = function (mapper) {
            var e_2, _a;
            if (mapper === void 0) { mapper = function (issue) { return issue.message; }; }
            var fieldErrors = {};
            var formErrors = [];
            try {
                for (var _b = __values(this.issues), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    if (sub.path.length > 0) {
                        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                        fieldErrors[sub.path[0]].push(mapper(sub));
                    }
                    else {
                        formErrors.push(mapper(sub));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return { formErrors: formErrors, fieldErrors: fieldErrors };
        };
        Object.defineProperty(ZodError.prototype, "formErrors", {
            get: function () {
                return this.flatten();
            },
            enumerable: false,
            configurable: true
        });
        ZodError.create = function (issues) {
            var error = new ZodError(issues);
            return error;
        };
        return ZodError;
    }(Error));
    var defaultErrorMap = function (issue, _ctx) {
        var message;
        switch (issue.code) {
            case ZodIssueCode.invalid_type:
                if (issue.received === ZodParsedType.undefined) {
                    message = "Required";
                }
                else {
                    message = "Expected " + issue.expected + ", received " + issue.received;
                }
                break;
            case ZodIssueCode.invalid_literal:
                message = "Invalid literal value, expected " + JSON.stringify(issue.expected, jsonStringifyReplacer);
                break;
            case ZodIssueCode.unrecognized_keys:
                message = "Unrecognized key(s) in object: " + util.joinValues(issue.keys, ", ");
                break;
            case ZodIssueCode.invalid_union:
                message = "Invalid input";
                break;
            case ZodIssueCode.invalid_union_discriminator:
                message = "Invalid discriminator value. Expected " + util.joinValues(issue.options);
                break;
            case ZodIssueCode.invalid_enum_value:
                message = "Invalid enum value. Expected " + util.joinValues(issue.options) + ", received '" + issue.received + "'";
                break;
            case ZodIssueCode.invalid_arguments:
                message = "Invalid function arguments";
                break;
            case ZodIssueCode.invalid_return_type:
                message = "Invalid function return type";
                break;
            case ZodIssueCode.invalid_date:
                message = "Invalid date";
                break;
            case ZodIssueCode.invalid_string:
                if (typeof issue.validation === "object") {
                    if ("startsWith" in issue.validation) {
                        message = "Invalid input: must start with \"" + issue.validation.startsWith + "\"";
                    }
                    else if ("endsWith" in issue.validation) {
                        message = "Invalid input: must end with \"" + issue.validation.endsWith + "\"";
                    }
                    else {
                        util.assertNever(issue.validation);
                    }
                }
                else if (issue.validation !== "regex") {
                    message = "Invalid " + issue.validation;
                }
                else {
                    message = "Invalid";
                }
                break;
            case ZodIssueCode.too_small:
                if (issue.type === "array")
                    message = "Array must contain " + (issue.inclusive ? "at least" : "more than") + " " + issue.minimum + " element(s)";
                else if (issue.type === "string")
                    message = "String must contain " + (issue.inclusive ? "at least" : "over") + " " + issue.minimum + " character(s)";
                else if (issue.type === "number")
                    message = "Number must be greater than " + (issue.inclusive ? "or equal to " : "") + issue.minimum;
                else if (issue.type === "date")
                    message = "Date must be greater than " + (issue.inclusive ? "or equal to " : "") + new Date(issue.minimum);
                else
                    message = "Invalid input";
                break;
            case ZodIssueCode.too_big:
                if (issue.type === "array")
                    message = "Array must contain " + (issue.inclusive ? "at most" : "less than") + " " + issue.maximum + " element(s)";
                else if (issue.type === "string")
                    message = "String must contain " + (issue.inclusive ? "at most" : "under") + " " + issue.maximum + " character(s)";
                else if (issue.type === "number")
                    message = "Number must be less than " + (issue.inclusive ? "or equal to " : "") + issue.maximum;
                else if (issue.type === "date")
                    message = "Date must be smaller than " + (issue.inclusive ? "or equal to " : "") + new Date(issue.maximum);
                else
                    message = "Invalid input";
                break;
            case ZodIssueCode.custom:
                message = "Invalid input";
                break;
            case ZodIssueCode.invalid_intersection_types:
                message = "Intersection results could not be merged";
                break;
            case ZodIssueCode.not_multiple_of:
                message = "Number must be a multiple of " + issue.multipleOf;
                break;
            default:
                message = _ctx.defaultError;
                util.assertNever(issue);
        }
        return { message: message };
    };
    var overrideErrorMap = defaultErrorMap;
    function setErrorMap(map) {
        overrideErrorMap = map;
    }
    function getErrorMap() {
        return overrideErrorMap;
    }

    var makeIssue = function (params) {
        var e_1, _a;
        var data = params.data, path = params.path, errorMaps = params.errorMaps, issueData = params.issueData;
        var fullPath = __spread(path, (issueData.path || []));
        var fullIssue = __assign(__assign({}, issueData), { path: fullPath });
        var errorMessage = "";
        var maps = errorMaps
            .filter(function (m) { return !!m; })
            .slice()
            .reverse();
        try {
            for (var maps_1 = __values(maps), maps_1_1 = maps_1.next(); !maps_1_1.done; maps_1_1 = maps_1.next()) {
                var map = maps_1_1.value;
                errorMessage = map(fullIssue, { data: data, defaultError: errorMessage }).message;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (maps_1_1 && !maps_1_1.done && (_a = maps_1.return)) _a.call(maps_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return __assign(__assign({}, issueData), { path: fullPath, message: issueData.message || errorMessage });
    };
    var EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
        var issue = makeIssue({
            issueData: issueData,
            data: ctx.data,
            path: ctx.path,
            errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                getErrorMap(),
                defaultErrorMap,
            ].filter(function (x) { return !!x; }),
        });
        ctx.common.issues.push(issue);
    }
    var ParseStatus = /** @class */ (function () {
        function ParseStatus() {
            this.value = "valid";
        }
        ParseStatus.prototype.dirty = function () {
            if (this.value === "valid")
                this.value = "dirty";
        };
        ParseStatus.prototype.abort = function () {
            if (this.value !== "aborted")
                this.value = "aborted";
        };
        ParseStatus.mergeArray = function (status, results) {
            var e_2, _a;
            var arrayValue = [];
            try {
                for (var results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var s = results_1_1.value;
                    if (s.status === "aborted")
                        return INVALID;
                    if (s.status === "dirty")
                        status.dirty();
                    arrayValue.push(s.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return { status: status.value, value: arrayValue };
        };
        ParseStatus.mergeObjectAsync = function (status, pairs) {
            return __awaiter(this, void 0, void 0, function () {
                var syncPairs, pairs_1, pairs_1_1, pair, _a, _b, e_3_1;
                var e_3, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            syncPairs = [];
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 7, 8, 9]);
                            pairs_1 = __values(pairs), pairs_1_1 = pairs_1.next();
                            _e.label = 2;
                        case 2:
                            if (!!pairs_1_1.done) return [3 /*break*/, 6];
                            pair = pairs_1_1.value;
                            _b = (_a = syncPairs).push;
                            _d = {};
                            return [4 /*yield*/, pair.key];
                        case 3:
                            _d.key = _e.sent();
                            return [4 /*yield*/, pair.value];
                        case 4:
                            _b.apply(_a, [(_d.value = _e.sent(),
                                    _d)]);
                            _e.label = 5;
                        case 5:
                            pairs_1_1 = pairs_1.next();
                            return [3 /*break*/, 2];
                        case 6: return [3 /*break*/, 9];
                        case 7:
                            e_3_1 = _e.sent();
                            e_3 = { error: e_3_1 };
                            return [3 /*break*/, 9];
                        case 8:
                            try {
                                if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                            return [7 /*endfinally*/];
                        case 9: return [2 /*return*/, ParseStatus.mergeObjectSync(status, syncPairs)];
                    }
                });
            });
        };
        ParseStatus.mergeObjectSync = function (status, pairs) {
            var e_4, _a;
            var finalObject = {};
            try {
                for (var pairs_2 = __values(pairs), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
                    var pair = pairs_2_1.value;
                    var key = pair.key, value = pair.value;
                    if (key.status === "aborted")
                        return INVALID;
                    if (value.status === "aborted")
                        return INVALID;
                    if (key.status === "dirty")
                        status.dirty();
                    if (value.status === "dirty")
                        status.dirty();
                    if (typeof value.value !== "undefined" || pair.alwaysSet) {
                        finalObject[key.value] = value.value;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (pairs_2_1 && !pairs_2_1.done && (_a = pairs_2.return)) _a.call(pairs_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return { status: status.value, value: finalObject };
        };
        return ParseStatus;
    }());
    var INVALID = Object.freeze({
        status: "aborted",
    });
    var DIRTY = function (value) { return ({ status: "dirty", value: value }); };
    var OK = function (value) { return ({ status: "valid", value: value }); };
    var isAborted = function (x) {
        return x.status === "aborted";
    };
    var isDirty = function (x) {
        return x.status === "dirty";
    };
    var isValid = function (x) {
        return x.status === "valid";
    };
    var isAsync = function (x) {
        return typeof Promise !== undefined && x instanceof Promise;
    };
    var jsonStringifyReplacer = function (_, value) {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };

    var errorUtil;
    (function (errorUtil) {
        errorUtil.errToObj = function (message) {
            return typeof message === "string" ? { message: message } : message || {};
        };
        errorUtil.toString = function (message) {
            return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
        };
    })(errorUtil || (errorUtil = {}));

    var ParseInputLazyPath = /** @class */ (function () {
        function ParseInputLazyPath(parent, value, path, key) {
            this.parent = parent;
            this.data = value;
            this._path = path;
            this._key = key;
        }
        Object.defineProperty(ParseInputLazyPath.prototype, "path", {
            get: function () {
                return this._path.concat(this._key);
            },
            enumerable: false,
            configurable: true
        });
        return ParseInputLazyPath;
    }());
    var handleResult = function (ctx, result) {
        if (isValid(result)) {
            return { success: true, data: result.value };
        }
        else {
            if (!ctx.common.issues.length) {
                throw new Error("Validation failed but no issues detected.");
            }
            var error = new ZodError(ctx.common.issues);
            return { success: false, error: error };
        }
    };
    function processCreateParams(params) {
        if (!params)
            return {};
        var errorMap = params.errorMap, invalid_type_error = params.invalid_type_error, required_error = params.required_error, description = params.description;
        if (errorMap && (invalid_type_error || required_error)) {
            throw new Error("Can't use \"invalid\" or \"required\" in conjunction with custom error map.");
        }
        if (errorMap)
            return { errorMap: errorMap, description: description };
        var customMap = function (iss, ctx) {
            if (iss.code !== "invalid_type")
                return { message: ctx.defaultError };
            if (typeof ctx.data === "undefined") {
                return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
            }
            return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
        };
        return { errorMap: customMap, description: description };
    }
    var ZodType = /** @class */ (function () {
        function ZodType(def) {
            /** Alias of safeParseAsync */
            this.spa = this.safeParseAsync;
            this.superRefine = this._refinement;
            this._def = def;
            this.parse = this.parse.bind(this);
            this.safeParse = this.safeParse.bind(this);
            this.parseAsync = this.parseAsync.bind(this);
            this.safeParseAsync = this.safeParseAsync.bind(this);
            this.spa = this.spa.bind(this);
            this.refine = this.refine.bind(this);
            this.refinement = this.refinement.bind(this);
            this.superRefine = this.superRefine.bind(this);
            this.optional = this.optional.bind(this);
            this.nullable = this.nullable.bind(this);
            this.nullish = this.nullish.bind(this);
            this.array = this.array.bind(this);
            this.promise = this.promise.bind(this);
            this.or = this.or.bind(this);
            this.and = this.and.bind(this);
            this.transform = this.transform.bind(this);
            this.default = this.default.bind(this);
            this.describe = this.describe.bind(this);
            this.isNullable = this.isNullable.bind(this);
            this.isOptional = this.isOptional.bind(this);
        }
        Object.defineProperty(ZodType.prototype, "description", {
            get: function () {
                return this._def.description;
            },
            enumerable: false,
            configurable: true
        });
        ZodType.prototype._getType = function (input) {
            return getParsedType(input.data);
        };
        ZodType.prototype._getOrReturnCtx = function (input, ctx) {
            return (ctx || {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            });
        };
        ZodType.prototype._processInputParams = function (input) {
            return {
                status: new ParseStatus(),
                ctx: {
                    common: input.parent.common,
                    data: input.data,
                    parsedType: getParsedType(input.data),
                    schemaErrorMap: this._def.errorMap,
                    path: input.path,
                    parent: input.parent,
                },
            };
        };
        ZodType.prototype._parseSync = function (input) {
            var result = this._parse(input);
            if (isAsync(result)) {
                throw new Error("Synchronous parse encountered promise.");
            }
            return result;
        };
        ZodType.prototype._parseAsync = function (input) {
            var result = this._parse(input);
            return Promise.resolve(result);
        };
        ZodType.prototype.parse = function (data, params) {
            var result = this.safeParse(data, params);
            if (result.success)
                return result.data;
            throw result.error;
        };
        ZodType.prototype.safeParse = function (data, params) {
            var _a;
            var ctx = {
                common: {
                    issues: [],
                    async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                    contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                },
                path: (params === null || params === void 0 ? void 0 : params.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: data,
                parsedType: getParsedType(data),
            };
            var result = this._parseSync({ data: data, path: ctx.path, parent: ctx });
            return handleResult(ctx, result);
        };
        ZodType.prototype.parseAsync = function (data, params) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.safeParseAsync(data, params)];
                        case 1:
                            result = _a.sent();
                            if (result.success)
                                return [2 /*return*/, result.data];
                            throw result.error;
                    }
                });
            });
        };
        ZodType.prototype.safeParseAsync = function (data, params) {
            return __awaiter(this, void 0, void 0, function () {
                var ctx, maybeAsyncResult, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ctx = {
                                common: {
                                    issues: [],
                                    contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                                    async: true,
                                },
                                path: (params === null || params === void 0 ? void 0 : params.path) || [],
                                schemaErrorMap: this._def.errorMap,
                                parent: null,
                                data: data,
                                parsedType: getParsedType(data),
                            };
                            maybeAsyncResult = this._parse({ data: data, path: [], parent: ctx });
                            return [4 /*yield*/, (isAsync(maybeAsyncResult)
                                    ? maybeAsyncResult
                                    : Promise.resolve(maybeAsyncResult))];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, handleResult(ctx, result)];
                    }
                });
            });
        };
        ZodType.prototype.refine = function (check, message) {
            var getIssueProperties = function (val) {
                if (typeof message === "string" || typeof message === "undefined") {
                    return { message: message };
                }
                else if (typeof message === "function") {
                    return message(val);
                }
                else {
                    return message;
                }
            };
            return this._refinement(function (val, ctx) {
                var result = check(val);
                var setError = function () {
                    return ctx.addIssue(__assign({ code: ZodIssueCode.custom }, getIssueProperties(val)));
                };
                if (typeof Promise !== "undefined" && result instanceof Promise) {
                    return result.then(function (data) {
                        if (!data) {
                            setError();
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                if (!result) {
                    setError();
                    return false;
                }
                else {
                    return true;
                }
            });
        };
        ZodType.prototype.refinement = function (check, refinementData) {
            return this._refinement(function (val, ctx) {
                if (!check(val)) {
                    ctx.addIssue(typeof refinementData === "function"
                        ? refinementData(val, ctx)
                        : refinementData);
                    return false;
                }
                else {
                    return true;
                }
            });
        };
        ZodType.prototype._refinement = function (refinement) {
            return new ZodEffects({
                schema: this,
                typeName: exports.ZodFirstPartyTypeKind.ZodEffects,
                effect: { type: "refinement", refinement: refinement },
            });
        };
        ZodType.prototype.optional = function () {
            return ZodOptional.create(this);
        };
        ZodType.prototype.nullable = function () {
            return ZodNullable.create(this);
        };
        ZodType.prototype.nullish = function () {
            return this.optional().nullable();
        };
        ZodType.prototype.array = function () {
            return ZodArray.create(this);
        };
        ZodType.prototype.promise = function () {
            return ZodPromise.create(this);
        };
        ZodType.prototype.or = function (option) {
            return ZodUnion.create([this, option]);
        };
        ZodType.prototype.and = function (incoming) {
            return ZodIntersection.create(this, incoming);
        };
        ZodType.prototype.transform = function (transform) {
            return new ZodEffects({
                schema: this,
                typeName: exports.ZodFirstPartyTypeKind.ZodEffects,
                effect: { type: "transform", transform: transform },
            });
        };
        ZodType.prototype.default = function (def) {
            var defaultValueFunc = typeof def === "function" ? def : function () { return def; };
            return new ZodDefault({
                innerType: this,
                defaultValue: defaultValueFunc,
                typeName: exports.ZodFirstPartyTypeKind.ZodDefault,
            });
        };
        ZodType.prototype.brand = function () {
            return new ZodBranded(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodBranded, type: this }, processCreateParams(undefined)));
        };
        ZodType.prototype.describe = function (description) {
            var This = this.constructor;
            return new This(__assign(__assign({}, this._def), { description: description }));
        };
        ZodType.prototype.isOptional = function () {
            return this.safeParse(undefined).success;
        };
        ZodType.prototype.isNullable = function () {
            return this.safeParse(null).success;
        };
        return ZodType;
    }());
    var cuidRegex = /^c[^\s-]{8,}$/i;
    var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
    // from https://stackoverflow.com/a/46181/1550155
    // old version: too slow, didn't support unicode
    // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    // eslint-disable-next-line
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var ZodString = /** @class */ (function (_super) {
        __extends(ZodString, _super);
        function ZodString() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._regex = function (regex, validation, message) {
                return _this.refinement(function (data) { return regex.test(data); }, __assign({ validation: validation, code: ZodIssueCode.invalid_string }, errorUtil.errToObj(message)));
            };
            /**
             * @deprecated Use z.string().min(1) instead.
             * @see {@link ZodString.min}
             */
            _this.nonempty = function (message) {
                return _this.min(1, errorUtil.errToObj(message));
            };
            _this.trim = function () {
                return new ZodString(__assign(__assign({}, _this._def), { checks: __spread(_this._def.checks, [{ kind: "trim" }]) }));
            };
            return _this;
        }
        ZodString.prototype._parse = function (input) {
            var e_1, _a;
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.string) {
                var ctx_1 = this._getOrReturnCtx(input);
                addIssueToContext(ctx_1, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.string,
                    received: ctx_1.parsedType,
                }
                //
                );
                return INVALID;
            }
            var status = new ParseStatus();
            var ctx = undefined;
            try {
                for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var check = _c.value;
                    if (check.kind === "min") {
                        if (input.data.length < check.value) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                minimum: check.value,
                                type: "string",
                                inclusive: true,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "max") {
                        if (input.data.length > check.value) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                maximum: check.value,
                                type: "string",
                                inclusive: true,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "email") {
                        if (!emailRegex.test(input.data)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                validation: "email",
                                code: ZodIssueCode.invalid_string,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "uuid") {
                        if (!uuidRegex.test(input.data)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                validation: "uuid",
                                code: ZodIssueCode.invalid_string,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "cuid") {
                        if (!cuidRegex.test(input.data)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                validation: "cuid",
                                code: ZodIssueCode.invalid_string,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "url") {
                        try {
                            new URL(input.data);
                        }
                        catch (_d) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                validation: "url",
                                code: ZodIssueCode.invalid_string,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "regex") {
                        check.regex.lastIndex = 0;
                        var testResult = check.regex.test(input.data);
                        if (!testResult) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                validation: "regex",
                                code: ZodIssueCode.invalid_string,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "trim") {
                        input.data = input.data.trim();
                    }
                    else if (check.kind === "startsWith") {
                        if (!input.data.startsWith(check.value)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.invalid_string,
                                validation: { startsWith: check.value },
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "endsWith") {
                        if (!input.data.endsWith(check.value)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.invalid_string,
                                validation: { endsWith: check.value },
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else {
                        util.assertNever(check);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return { status: status.value, value: input.data };
        };
        ZodString.prototype._addCheck = function (check) {
            return new ZodString(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [check]) }));
        };
        ZodString.prototype.email = function (message) {
            return this._addCheck(__assign({ kind: "email" }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.url = function (message) {
            return this._addCheck(__assign({ kind: "url" }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.uuid = function (message) {
            return this._addCheck(__assign({ kind: "uuid" }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.cuid = function (message) {
            return this._addCheck(__assign({ kind: "cuid" }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.regex = function (regex, message) {
            return this._addCheck(__assign({ kind: "regex", regex: regex }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.startsWith = function (value, message) {
            return this._addCheck(__assign({ kind: "startsWith", value: value }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.endsWith = function (value, message) {
            return this._addCheck(__assign({ kind: "endsWith", value: value }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.min = function (minLength, message) {
            return this._addCheck(__assign({ kind: "min", value: minLength }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.max = function (maxLength, message) {
            return this._addCheck(__assign({ kind: "max", value: maxLength }, errorUtil.errToObj(message)));
        };
        ZodString.prototype.length = function (len, message) {
            return this.min(len, message).max(len, message);
        };
        Object.defineProperty(ZodString.prototype, "isEmail", {
            get: function () {
                return !!this._def.checks.find(function (ch) { return ch.kind === "email"; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodString.prototype, "isURL", {
            get: function () {
                return !!this._def.checks.find(function (ch) { return ch.kind === "url"; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodString.prototype, "isUUID", {
            get: function () {
                return !!this._def.checks.find(function (ch) { return ch.kind === "uuid"; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodString.prototype, "isCUID", {
            get: function () {
                return !!this._def.checks.find(function (ch) { return ch.kind === "cuid"; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodString.prototype, "minLength", {
            get: function () {
                var e_2, _a;
                var min = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "min") {
                            if (min === null || ch.value > min)
                                min = ch.value;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return min;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodString.prototype, "maxLength", {
            get: function () {
                var e_3, _a;
                var max = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "max") {
                            if (max === null || ch.value < max)
                                max = ch.value;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return max;
            },
            enumerable: false,
            configurable: true
        });
        ZodString.create = function (params) {
            return new ZodString(__assign({ checks: [], typeName: exports.ZodFirstPartyTypeKind.ZodString }, processCreateParams(params)));
        };
        return ZodString;
    }(ZodType));
    // https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
    function floatSafeRemainder(val, step) {
        var valDecCount = (val.toString().split(".")[1] || "").length;
        var stepDecCount = (step.toString().split(".")[1] || "").length;
        var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
        var valInt = parseInt(val.toFixed(decCount).replace(".", ""));
        var stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
        return (valInt % stepInt) / Math.pow(10, decCount);
    }
    var ZodNumber = /** @class */ (function (_super) {
        __extends(ZodNumber, _super);
        function ZodNumber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.min = _this.gte;
            _this.max = _this.lte;
            _this.step = _this.multipleOf;
            return _this;
        }
        ZodNumber.prototype._parse = function (input) {
            var e_4, _a;
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.number) {
                var ctx_2 = this._getOrReturnCtx(input);
                addIssueToContext(ctx_2, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.number,
                    received: ctx_2.parsedType,
                });
                return INVALID;
            }
            var ctx = undefined;
            var status = new ParseStatus();
            try {
                for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var check = _c.value;
                    if (check.kind === "int") {
                        if (!util.isInteger(input.data)) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.invalid_type,
                                expected: "integer",
                                received: "float",
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "min") {
                        var tooSmall = check.inclusive
                            ? input.data < check.value
                            : input.data <= check.value;
                        if (tooSmall) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                minimum: check.value,
                                type: "number",
                                inclusive: check.inclusive,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "max") {
                        var tooBig = check.inclusive
                            ? input.data > check.value
                            : input.data >= check.value;
                        if (tooBig) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                maximum: check.value,
                                type: "number",
                                inclusive: check.inclusive,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "multipleOf") {
                        if (floatSafeRemainder(input.data, check.value) !== 0) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.not_multiple_of,
                                multipleOf: check.value,
                                message: check.message,
                            });
                            status.dirty();
                        }
                    }
                    else {
                        util.assertNever(check);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return { status: status.value, value: input.data };
        };
        ZodNumber.prototype.gte = function (value, message) {
            return this.setLimit("min", value, true, errorUtil.toString(message));
        };
        ZodNumber.prototype.gt = function (value, message) {
            return this.setLimit("min", value, false, errorUtil.toString(message));
        };
        ZodNumber.prototype.lte = function (value, message) {
            return this.setLimit("max", value, true, errorUtil.toString(message));
        };
        ZodNumber.prototype.lt = function (value, message) {
            return this.setLimit("max", value, false, errorUtil.toString(message));
        };
        ZodNumber.prototype.setLimit = function (kind, value, inclusive, message) {
            return new ZodNumber(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [
                    {
                        kind: kind,
                        value: value,
                        inclusive: inclusive,
                        message: errorUtil.toString(message),
                    },
                ]) }));
        };
        ZodNumber.prototype._addCheck = function (check) {
            return new ZodNumber(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [check]) }));
        };
        ZodNumber.prototype.int = function (message) {
            return this._addCheck({
                kind: "int",
                message: errorUtil.toString(message),
            });
        };
        ZodNumber.prototype.positive = function (message) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message),
            });
        };
        ZodNumber.prototype.negative = function (message) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message),
            });
        };
        ZodNumber.prototype.nonpositive = function (message) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message),
            });
        };
        ZodNumber.prototype.nonnegative = function (message) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message),
            });
        };
        ZodNumber.prototype.multipleOf = function (value, message) {
            return this._addCheck({
                kind: "multipleOf",
                value: value,
                message: errorUtil.toString(message),
            });
        };
        Object.defineProperty(ZodNumber.prototype, "minValue", {
            get: function () {
                var e_5, _a;
                var min = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "min") {
                            if (min === null || ch.value > min)
                                min = ch.value;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return min;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodNumber.prototype, "maxValue", {
            get: function () {
                var e_6, _a;
                var max = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "max") {
                            if (max === null || ch.value < max)
                                max = ch.value;
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return max;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodNumber.prototype, "isInt", {
            get: function () {
                return !!this._def.checks.find(function (ch) { return ch.kind === "int"; });
            },
            enumerable: false,
            configurable: true
        });
        ZodNumber.create = function (params) {
            return new ZodNumber(__assign({ checks: [], typeName: exports.ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(params)));
        };
        return ZodNumber;
    }(ZodType));
    var ZodBigInt = /** @class */ (function (_super) {
        __extends(ZodBigInt, _super);
        function ZodBigInt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodBigInt.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.bigint) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.bigint,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        ZodBigInt.create = function (params) {
            return new ZodBigInt(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(params)));
        };
        return ZodBigInt;
    }(ZodType));
    var ZodBoolean = /** @class */ (function (_super) {
        __extends(ZodBoolean, _super);
        function ZodBoolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodBoolean.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.boolean) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.boolean,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        ZodBoolean.create = function (params) {
            return new ZodBoolean(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(params)));
        };
        return ZodBoolean;
    }(ZodType));
    var ZodDate = /** @class */ (function (_super) {
        __extends(ZodDate, _super);
        function ZodDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodDate.prototype._parse = function (input) {
            var e_7, _a;
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.date) {
                var ctx_3 = this._getOrReturnCtx(input);
                addIssueToContext(ctx_3, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.date,
                    received: ctx_3.parsedType,
                });
                return INVALID;
            }
            if (isNaN(input.data.getTime())) {
                var ctx_4 = this._getOrReturnCtx(input);
                addIssueToContext(ctx_4, {
                    code: ZodIssueCode.invalid_date,
                });
                return INVALID;
            }
            var status = new ParseStatus();
            var ctx = undefined;
            try {
                for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var check = _c.value;
                    if (check.kind === "min") {
                        if (input.data.getTime() < check.value) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                message: check.message,
                                inclusive: true,
                                minimum: check.value,
                                type: "date",
                            });
                            status.dirty();
                        }
                    }
                    else if (check.kind === "max") {
                        if (input.data.getTime() > check.value) {
                            ctx = this._getOrReturnCtx(input, ctx);
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                message: check.message,
                                inclusive: true,
                                maximum: check.value,
                                type: "date",
                            });
                            status.dirty();
                        }
                    }
                    else {
                        util.assertNever(check);
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return {
                status: status.value,
                value: new Date(input.data.getTime()),
            };
        };
        ZodDate.prototype._addCheck = function (check) {
            return new ZodDate(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [check]) }));
        };
        ZodDate.prototype.min = function (minDate, message) {
            return this._addCheck({
                kind: "min",
                value: minDate.getTime(),
                message: errorUtil.toString(message),
            });
        };
        ZodDate.prototype.max = function (maxDate, message) {
            return this._addCheck({
                kind: "max",
                value: maxDate.getTime(),
                message: errorUtil.toString(message),
            });
        };
        Object.defineProperty(ZodDate.prototype, "minDate", {
            get: function () {
                var e_8, _a;
                var min = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "min") {
                            if (min === null || ch.value > min)
                                min = ch.value;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return min != null ? new Date(min) : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodDate.prototype, "maxDate", {
            get: function () {
                var e_9, _a;
                var max = null;
                try {
                    for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ch = _c.value;
                        if (ch.kind === "max") {
                            if (max === null || ch.value < max)
                                max = ch.value;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                return max != null ? new Date(max) : null;
            },
            enumerable: false,
            configurable: true
        });
        ZodDate.create = function (params) {
            return new ZodDate(__assign({ checks: [], typeName: exports.ZodFirstPartyTypeKind.ZodDate }, processCreateParams(params)));
        };
        return ZodDate;
    }(ZodType));
    var ZodUndefined = /** @class */ (function (_super) {
        __extends(ZodUndefined, _super);
        function ZodUndefined() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodUndefined.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.undefined) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.undefined,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        ZodUndefined.create = function (params) {
            return new ZodUndefined(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(params)));
        };
        return ZodUndefined;
    }(ZodType));
    var ZodNull = /** @class */ (function (_super) {
        __extends(ZodNull, _super);
        function ZodNull() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodNull.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.null) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.null,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        ZodNull.create = function (params) {
            return new ZodNull(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodNull }, processCreateParams(params)));
        };
        return ZodNull;
    }(ZodType));
    var ZodAny = /** @class */ (function (_super) {
        __extends(ZodAny, _super);
        function ZodAny() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
            _this._any = true;
            return _this;
        }
        ZodAny.prototype._parse = function (input) {
            return OK(input.data);
        };
        ZodAny.create = function (params) {
            return new ZodAny(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodAny }, processCreateParams(params)));
        };
        return ZodAny;
    }(ZodType));
    var ZodUnknown = /** @class */ (function (_super) {
        __extends(ZodUnknown, _super);
        function ZodUnknown() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // required
            _this._unknown = true;
            return _this;
        }
        ZodUnknown.prototype._parse = function (input) {
            return OK(input.data);
        };
        ZodUnknown.create = function (params) {
            return new ZodUnknown(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(params)));
        };
        return ZodUnknown;
    }(ZodType));
    var ZodNever = /** @class */ (function (_super) {
        __extends(ZodNever, _super);
        function ZodNever() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodNever.prototype._parse = function (input) {
            var ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.never,
                received: ctx.parsedType,
            });
            return INVALID;
        };
        ZodNever.create = function (params) {
            return new ZodNever(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodNever }, processCreateParams(params)));
        };
        return ZodNever;
    }(ZodType));
    var ZodVoid = /** @class */ (function (_super) {
        __extends(ZodVoid, _super);
        function ZodVoid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodVoid.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.undefined) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.void,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        ZodVoid.create = function (params) {
            return new ZodVoid(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(params)));
        };
        return ZodVoid;
    }(ZodType));
    var ZodArray = /** @class */ (function (_super) {
        __extends(ZodArray, _super);
        function ZodArray() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodArray.prototype._parse = function (input) {
            var _a = this._processInputParams(input), ctx = _a.ctx, status = _a.status;
            var def = this._def;
            if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            if (def.minLength !== null) {
                if (ctx.data.length < def.minLength.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: def.minLength.value,
                        type: "array",
                        inclusive: true,
                        message: def.minLength.message,
                    });
                    status.dirty();
                }
            }
            if (def.maxLength !== null) {
                if (ctx.data.length > def.maxLength.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: def.maxLength.value,
                        type: "array",
                        inclusive: true,
                        message: def.maxLength.message,
                    });
                    status.dirty();
                }
            }
            if (ctx.common.async) {
                return Promise.all(ctx.data.map(function (item, i) {
                    return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
                })).then(function (result) {
                    return ParseStatus.mergeArray(status, result);
                });
            }
            var result = ctx.data.map(function (item, i) {
                return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            });
            return ParseStatus.mergeArray(status, result);
        };
        Object.defineProperty(ZodArray.prototype, "element", {
            get: function () {
                return this._def.type;
            },
            enumerable: false,
            configurable: true
        });
        ZodArray.prototype.min = function (minLength, message) {
            return new ZodArray(__assign(__assign({}, this._def), { minLength: { value: minLength, message: errorUtil.toString(message) } }));
        };
        ZodArray.prototype.max = function (maxLength, message) {
            return new ZodArray(__assign(__assign({}, this._def), { maxLength: { value: maxLength, message: errorUtil.toString(message) } }));
        };
        ZodArray.prototype.length = function (len, message) {
            return this.min(len, message).max(len, message);
        };
        ZodArray.prototype.nonempty = function (message) {
            return this.min(1, message);
        };
        ZodArray.create = function (schema, params) {
            return new ZodArray(__assign({ type: schema, minLength: null, maxLength: null, typeName: exports.ZodFirstPartyTypeKind.ZodArray }, processCreateParams(params)));
        };
        return ZodArray;
    }(ZodType));
    /////////////////////////////////////////
    /////////////////////////////////////////
    //////////                     //////////
    //////////      ZodObject      //////////
    //////////                     //////////
    /////////////////////////////////////////
    /////////////////////////////////////////
    exports.objectUtil = void 0;
    (function (objectUtil) {
        objectUtil.mergeShapes = function (first, second) {
            return __assign(__assign({}, first), second);
        };
    })(exports.objectUtil || (exports.objectUtil = {}));
    var AugmentFactory = function (def) {
        return function (augmentation) {
            return new ZodObject(__assign(__assign({}, def), { shape: function () { return (__assign(__assign({}, def.shape()), augmentation)); } }));
        };
    };
    function deepPartialify(schema) {
        if (schema instanceof ZodObject) {
            var newShape_1 = {};
            for (var key in schema.shape) {
                var fieldSchema = schema.shape[key];
                newShape_1[key] = ZodOptional.create(deepPartialify(fieldSchema));
            }
            return new ZodObject(__assign(__assign({}, schema._def), { shape: function () { return newShape_1; } }));
        }
        else if (schema instanceof ZodArray) {
            return ZodArray.create(deepPartialify(schema.element));
        }
        else if (schema instanceof ZodOptional) {
            return ZodOptional.create(deepPartialify(schema.unwrap()));
        }
        else if (schema instanceof ZodNullable) {
            return ZodNullable.create(deepPartialify(schema.unwrap()));
        }
        else if (schema instanceof ZodTuple) {
            return ZodTuple.create(schema.items.map(function (item) { return deepPartialify(item); }));
        }
        else {
            return schema;
        }
    }
    var ZodObject = /** @class */ (function (_super) {
        __extends(ZodObject, _super);
        function ZodObject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._cached = null;
            /**
             * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
             * If you want to pass through unknown properties, use `.passthrough()` instead.
             */
            _this.nonstrict = _this.passthrough;
            _this.augment = AugmentFactory(_this._def);
            _this.extend = AugmentFactory(_this._def);
            return _this;
        }
        ZodObject.prototype._getCached = function () {
            if (this._cached !== null)
                return this._cached;
            var shape = this._def.shape();
            var keys = util.objectKeys(shape);
            return (this._cached = { shape: shape, keys: keys });
        };
        ZodObject.prototype._parse = function (input) {
            var e_10, _a, e_11, _b, e_12, _c;
            var _this = this;
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.object) {
                var ctx_5 = this._getOrReturnCtx(input);
                addIssueToContext(ctx_5, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx_5.parsedType,
                });
                return INVALID;
            }
            var _d = this._processInputParams(input), status = _d.status, ctx = _d.ctx;
            var _e = this._getCached(), shape = _e.shape, shapeKeys = _e.keys;
            var extraKeys = [];
            for (var key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
            var pairs = [];
            try {
                for (var shapeKeys_1 = __values(shapeKeys), shapeKeys_1_1 = shapeKeys_1.next(); !shapeKeys_1_1.done; shapeKeys_1_1 = shapeKeys_1.next()) {
                    var key = shapeKeys_1_1.value;
                    var keyValidator = shape[key];
                    var value = ctx.data[key];
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                        alwaysSet: key in ctx.data,
                    });
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (shapeKeys_1_1 && !shapeKeys_1_1.done && (_a = shapeKeys_1.return)) _a.call(shapeKeys_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
            if (this._def.catchall instanceof ZodNever) {
                var unknownKeys = this._def.unknownKeys;
                if (unknownKeys === "passthrough") {
                    try {
                        for (var extraKeys_1 = __values(extraKeys), extraKeys_1_1 = extraKeys_1.next(); !extraKeys_1_1.done; extraKeys_1_1 = extraKeys_1.next()) {
                            var key = extraKeys_1_1.value;
                            pairs.push({
                                key: { status: "valid", value: key },
                                value: { status: "valid", value: ctx.data[key] },
                            });
                        }
                    }
                    catch (e_11_1) { e_11 = { error: e_11_1 }; }
                    finally {
                        try {
                            if (extraKeys_1_1 && !extraKeys_1_1.done && (_b = extraKeys_1.return)) _b.call(extraKeys_1);
                        }
                        finally { if (e_11) throw e_11.error; }
                    }
                }
                else if (unknownKeys === "strict") {
                    if (extraKeys.length > 0) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.unrecognized_keys,
                            keys: extraKeys,
                        });
                        status.dirty();
                    }
                }
                else if (unknownKeys === "strip") ;
                else {
                    throw new Error("Internal ZodObject error: invalid unknownKeys value.");
                }
            }
            else {
                // run catchall validation
                var catchall = this._def.catchall;
                try {
                    for (var extraKeys_2 = __values(extraKeys), extraKeys_2_1 = extraKeys_2.next(); !extraKeys_2_1.done; extraKeys_2_1 = extraKeys_2.next()) {
                        var key = extraKeys_2_1.value;
                        var value = ctx.data[key];
                        pairs.push({
                            key: { status: "valid", value: key },
                            value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                            ),
                            alwaysSet: key in ctx.data,
                        });
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (extraKeys_2_1 && !extraKeys_2_1.done && (_c = extraKeys_2.return)) _c.call(extraKeys_2);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
            }
            if (ctx.common.async) {
                return Promise.resolve()
                    .then(function () { return __awaiter(_this, void 0, void 0, function () {
                    var syncPairs, pairs_1, pairs_1_1, pair, key, _a, _b, e_13_1;
                    var e_13, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                syncPairs = [];
                                _e.label = 1;
                            case 1:
                                _e.trys.push([1, 7, 8, 9]);
                                pairs_1 = __values(pairs), pairs_1_1 = pairs_1.next();
                                _e.label = 2;
                            case 2:
                                if (!!pairs_1_1.done) return [3 /*break*/, 6];
                                pair = pairs_1_1.value;
                                return [4 /*yield*/, pair.key];
                            case 3:
                                key = _e.sent();
                                _b = (_a = syncPairs).push;
                                _d = {
                                    key: key
                                };
                                return [4 /*yield*/, pair.value];
                            case 4:
                                _b.apply(_a, [(_d.value = _e.sent(),
                                        _d.alwaysSet = pair.alwaysSet,
                                        _d)]);
                                _e.label = 5;
                            case 5:
                                pairs_1_1 = pairs_1.next();
                                return [3 /*break*/, 2];
                            case 6: return [3 /*break*/, 9];
                            case 7:
                                e_13_1 = _e.sent();
                                e_13 = { error: e_13_1 };
                                return [3 /*break*/, 9];
                            case 8:
                                try {
                                    if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                                }
                                finally { if (e_13) throw e_13.error; }
                                return [7 /*endfinally*/];
                            case 9: return [2 /*return*/, syncPairs];
                        }
                    });
                }); })
                    .then(function (syncPairs) {
                    return ParseStatus.mergeObjectSync(status, syncPairs);
                });
            }
            else {
                return ParseStatus.mergeObjectSync(status, pairs);
            }
        };
        Object.defineProperty(ZodObject.prototype, "shape", {
            get: function () {
                return this._def.shape();
            },
            enumerable: false,
            configurable: true
        });
        ZodObject.prototype.strict = function (message) {
            var _this = this;
            errorUtil.errToObj;
            return new ZodObject(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), (message !== undefined
                ? {
                    errorMap: function (issue, ctx) {
                        var _a, _b, _c, _d;
                        var defaultError = (_c = (_b = (_a = _this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {})));
        };
        ZodObject.prototype.strip = function () {
            return new ZodObject(__assign(__assign({}, this._def), { unknownKeys: "strip" }));
        };
        ZodObject.prototype.passthrough = function () {
            return new ZodObject(__assign(__assign({}, this._def), { unknownKeys: "passthrough" }));
        };
        ZodObject.prototype.setKey = function (key, schema) {
            var _a;
            return this.augment((_a = {}, _a[key] = schema, _a));
        };
        /**
         * Prior to zod@1.0.12 there was a bug in the
         * inferred type of merged objects. Please
         * upgrade if you are experiencing issues.
         */
        ZodObject.prototype.merge = function (merging) {
            var _this = this;
            // const mergedShape = objectUtil.mergeShapes(
            //   this._def.shape(),
            //   merging._def.shape()
            // );
            var merged = new ZodObject({
                unknownKeys: merging._def.unknownKeys,
                catchall: merging._def.catchall,
                shape: function () {
                    return exports.objectUtil.mergeShapes(_this._def.shape(), merging._def.shape());
                },
                typeName: exports.ZodFirstPartyTypeKind.ZodObject,
            });
            return merged;
        };
        ZodObject.prototype.catchall = function (index) {
            return new ZodObject(__assign(__assign({}, this._def), { catchall: index }));
        };
        ZodObject.prototype.pick = function (mask) {
            var _this = this;
            var shape = {};
            util.objectKeys(mask).map(function (key) {
                // only add to shape if key corresponds to an element of the current shape
                if (_this.shape[key])
                    shape[key] = _this.shape[key];
            });
            return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return shape; } }));
        };
        ZodObject.prototype.omit = function (mask) {
            var _this = this;
            var shape = {};
            util.objectKeys(this.shape).map(function (key) {
                if (util.objectKeys(mask).indexOf(key) === -1) {
                    shape[key] = _this.shape[key];
                }
            });
            return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return shape; } }));
        };
        ZodObject.prototype.deepPartial = function () {
            return deepPartialify(this);
        };
        ZodObject.prototype.partial = function (mask) {
            var _this = this;
            var newShape = {};
            if (mask) {
                util.objectKeys(this.shape).map(function (key) {
                    if (util.objectKeys(mask).indexOf(key) === -1) {
                        newShape[key] = _this.shape[key];
                    }
                    else {
                        newShape[key] = _this.shape[key].optional();
                    }
                });
                return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
            }
            else {
                for (var key in this.shape) {
                    var fieldSchema = this.shape[key];
                    newShape[key] = fieldSchema.optional();
                }
            }
            return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
        };
        ZodObject.prototype.required = function () {
            var newShape = {};
            for (var key in this.shape) {
                var fieldSchema = this.shape[key];
                var newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
            return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
        };
        ZodObject.prototype.keyof = function () {
            return createZodEnum(util.objectKeys(this.shape));
        };
        ZodObject.create = function (shape, params) {
            return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: exports.ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
        };
        ZodObject.strictCreate = function (shape, params) {
            return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: exports.ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
        };
        ZodObject.lazycreate = function (shape, params) {
            return new ZodObject(__assign({ shape: shape, unknownKeys: "strip", catchall: ZodNever.create(), typeName: exports.ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
        };
        return ZodObject;
    }(ZodType));
    var ZodUnion = /** @class */ (function (_super) {
        __extends(ZodUnion, _super);
        function ZodUnion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodUnion.prototype._parse = function (input) {
            var e_14, _a, _b;
            var _this = this;
            var ctx = this._processInputParams(input).ctx;
            var options = this._def.options;
            function handleResults(results) {
                var e_15, _a, e_16, _b, _c;
                try {
                    // return first issue-free validation if it exists
                    for (var results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                        var result = results_1_1.value;
                        if (result.result.status === "valid") {
                            return result.result;
                        }
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
                try {
                    for (var results_2 = __values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                        var result = results_2_1.value;
                        if (result.result.status === "dirty") {
                            // add issues from dirty option
                            (_c = ctx.common.issues).push.apply(_c, __spread(result.ctx.common.issues));
                            return result.result;
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (results_2_1 && !results_2_1.done && (_b = results_2.return)) _b.call(results_2);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                // return invalid
                var unionErrors = results.map(function (result) { return new ZodError(result.ctx.common.issues); });
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union,
                    unionErrors: unionErrors,
                });
                return INVALID;
            }
            if (ctx.common.async) {
                return Promise.all(options.map(function (option) { return __awaiter(_this, void 0, void 0, function () {
                    var childCtx;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                childCtx = __assign(__assign({}, ctx), { common: __assign(__assign({}, ctx.common), { issues: [] }), parent: null });
                                _a = {};
                                return [4 /*yield*/, option._parseAsync({
                                        data: ctx.data,
                                        path: ctx.path,
                                        parent: childCtx,
                                    })];
                            case 1: return [2 /*return*/, (_a.result = _b.sent(),
                                    _a.ctx = childCtx,
                                    _a)];
                        }
                    });
                }); })).then(handleResults);
            }
            else {
                var dirty = undefined;
                var issues = [];
                try {
                    for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                        var option = options_1_1.value;
                        var childCtx = __assign(__assign({}, ctx), { common: __assign(__assign({}, ctx.common), { issues: [] }), parent: null });
                        var result = option._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: childCtx,
                        });
                        if (result.status === "valid") {
                            return result;
                        }
                        else if (result.status === "dirty" && !dirty) {
                            dirty = { result: result, ctx: childCtx };
                        }
                        if (childCtx.common.issues.length) {
                            issues.push(childCtx.common.issues);
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                if (dirty) {
                    (_b = ctx.common.issues).push.apply(_b, __spread(dirty.ctx.common.issues));
                    return dirty.result;
                }
                var unionErrors = issues.map(function (issues) { return new ZodError(issues); });
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union,
                    unionErrors: unionErrors,
                });
                return INVALID;
            }
        };
        Object.defineProperty(ZodUnion.prototype, "options", {
            get: function () {
                return this._def.options;
            },
            enumerable: false,
            configurable: true
        });
        ZodUnion.create = function (types, params) {
            return new ZodUnion(__assign({ options: types, typeName: exports.ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(params)));
        };
        return ZodUnion;
    }(ZodType));
    var ZodDiscriminatedUnion = /** @class */ (function (_super) {
        __extends(ZodDiscriminatedUnion, _super);
        function ZodDiscriminatedUnion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodDiscriminatedUnion.prototype._parse = function (input) {
            var ctx = this._processInputParams(input).ctx;
            if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            var discriminator = this.discriminator;
            var discriminatorValue = ctx.data[discriminator];
            var option = this.options.get(discriminatorValue);
            if (!option) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union_discriminator,
                    options: this.validDiscriminatorValues,
                    path: [discriminator],
                });
                return INVALID;
            }
            if (ctx.common.async) {
                return option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
            }
            else {
                return option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        };
        Object.defineProperty(ZodDiscriminatedUnion.prototype, "discriminator", {
            get: function () {
                return this._def.discriminator;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodDiscriminatedUnion.prototype, "validDiscriminatorValues", {
            get: function () {
                return Array.from(this.options.keys());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodDiscriminatedUnion.prototype, "options", {
            get: function () {
                return this._def.options;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
         * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
         * have a different value for each object in the union.
         * @param discriminator the name of the discriminator property
         * @param types an array of object schemas
         * @param params
         */
        ZodDiscriminatedUnion.create = function (discriminator, types, params) {
            // Get all the valid discriminator values
            var options = new Map();
            try {
                types.forEach(function (type) {
                    var discriminatorValue = type.shape[discriminator].value;
                    options.set(discriminatorValue, type);
                });
            }
            catch (e) {
                throw new Error("The discriminator value could not be extracted from all the provided schemas");
            }
            // Assert that all the discriminator values are unique
            if (options.size !== types.length) {
                throw new Error("Some of the discriminator values are not unique");
            }
            return new ZodDiscriminatedUnion(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodDiscriminatedUnion, discriminator: discriminator,
                options: options }, processCreateParams(params)));
        };
        return ZodDiscriminatedUnion;
    }(ZodType));
    function mergeValues(a, b) {
        var e_17, _a;
        var aType = getParsedType(a);
        var bType = getParsedType(b);
        if (a === b) {
            return { valid: true, data: a };
        }
        else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
            var bKeys_1 = util.objectKeys(b);
            var sharedKeys = util
                .objectKeys(a)
                .filter(function (key) { return bKeys_1.indexOf(key) !== -1; });
            var newObj = __assign(__assign({}, a), b);
            try {
                for (var sharedKeys_1 = __values(sharedKeys), sharedKeys_1_1 = sharedKeys_1.next(); !sharedKeys_1_1.done; sharedKeys_1_1 = sharedKeys_1.next()) {
                    var key = sharedKeys_1_1.value;
                    var sharedValue = mergeValues(a[key], b[key]);
                    if (!sharedValue.valid) {
                        return { valid: false };
                    }
                    newObj[key] = sharedValue.data;
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (sharedKeys_1_1 && !sharedKeys_1_1.done && (_a = sharedKeys_1.return)) _a.call(sharedKeys_1);
                }
                finally { if (e_17) throw e_17.error; }
            }
            return { valid: true, data: newObj };
        }
        else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
            if (a.length !== b.length) {
                return { valid: false };
            }
            var newArray = [];
            for (var index = 0; index < a.length; index++) {
                var itemA = a[index];
                var itemB = b[index];
                var sharedValue = mergeValues(itemA, itemB);
                if (!sharedValue.valid) {
                    return { valid: false };
                }
                newArray.push(sharedValue.data);
            }
            return { valid: true, data: newArray };
        }
        else if (aType === ZodParsedType.date &&
            bType === ZodParsedType.date &&
            +a === +b) {
            return { valid: true, data: a };
        }
        else {
            return { valid: false };
        }
    }
    var ZodIntersection = /** @class */ (function (_super) {
        __extends(ZodIntersection, _super);
        function ZodIntersection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodIntersection.prototype._parse = function (input) {
            var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
            var handleParsed = function (parsedLeft, parsedRight) {
                if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                    return INVALID;
                }
                var merged = mergeValues(parsedLeft.value, parsedRight.value);
                if (!merged.valid) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_intersection_types,
                    });
                    return INVALID;
                }
                if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                    status.dirty();
                }
                return { status: status.value, value: merged.data };
            };
            if (ctx.common.async) {
                return Promise.all([
                    this._def.left._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    }),
                    this._def.right._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    }),
                ]).then(function (_a) {
                    var _b = __read(_a, 2), left = _b[0], right = _b[1];
                    return handleParsed(left, right);
                });
            }
            else {
                return handleParsed(this._def.left._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }), this._def.right._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }));
            }
        };
        ZodIntersection.create = function (left, right, params) {
            return new ZodIntersection(__assign({ left: left, right: right, typeName: exports.ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(params)));
        };
        return ZodIntersection;
    }(ZodType));
    var ZodTuple = /** @class */ (function (_super) {
        __extends(ZodTuple, _super);
        function ZodTuple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodTuple.prototype._parse = function (input) {
            var _this = this;
            var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
            if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            if (ctx.data.length < this._def.items.length) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: this._def.items.length,
                    inclusive: true,
                    type: "array",
                });
                return INVALID;
            }
            var rest = this._def.rest;
            if (!rest && ctx.data.length > this._def.items.length) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: this._def.items.length,
                    inclusive: true,
                    type: "array",
                });
                status.dirty();
            }
            var items = ctx.data
                .map(function (item, itemIndex) {
                var schema = _this._def.items[itemIndex] || _this._def.rest;
                if (!schema)
                    return null;
                return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
            })
                .filter(function (x) { return !!x; }); // filter nulls
            if (ctx.common.async) {
                return Promise.all(items).then(function (results) {
                    return ParseStatus.mergeArray(status, results);
                });
            }
            else {
                return ParseStatus.mergeArray(status, items);
            }
        };
        Object.defineProperty(ZodTuple.prototype, "items", {
            get: function () {
                return this._def.items;
            },
            enumerable: false,
            configurable: true
        });
        ZodTuple.prototype.rest = function (rest) {
            return new ZodTuple(__assign(__assign({}, this._def), { rest: rest }));
        };
        ZodTuple.create = function (schemas, params) {
            return new ZodTuple(__assign({ items: schemas, typeName: exports.ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(params)));
        };
        return ZodTuple;
    }(ZodType));
    var ZodRecord = /** @class */ (function (_super) {
        __extends(ZodRecord, _super);
        function ZodRecord() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ZodRecord.prototype, "keySchema", {
            get: function () {
                return this._def.keyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodRecord.prototype, "valueSchema", {
            get: function () {
                return this._def.valueType;
            },
            enumerable: false,
            configurable: true
        });
        ZodRecord.prototype._parse = function (input) {
            var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
            if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            var pairs = [];
            var keyType = this._def.keyType;
            var valueType = this._def.valueType;
            for (var key in ctx.data) {
                pairs.push({
                    key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                    value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                });
            }
            if (ctx.common.async) {
                return ParseStatus.mergeObjectAsync(status, pairs);
            }
            else {
                return ParseStatus.mergeObjectSync(status, pairs);
            }
        };
        Object.defineProperty(ZodRecord.prototype, "element", {
            get: function () {
                return this._def.valueType;
            },
            enumerable: false,
            configurable: true
        });
        ZodRecord.create = function (first, second, third) {
            if (second instanceof ZodType) {
                return new ZodRecord(__assign({ keyType: first, valueType: second, typeName: exports.ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(third)));
            }
            return new ZodRecord(__assign({ keyType: ZodString.create(), valueType: first, typeName: exports.ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(second)));
        };
        return ZodRecord;
    }(ZodType));
    var ZodMap = /** @class */ (function (_super) {
        __extends(ZodMap, _super);
        function ZodMap() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodMap.prototype._parse = function (input) {
            var e_18, _a;
            var _this = this;
            var _b = this._processInputParams(input), status = _b.status, ctx = _b.ctx;
            if (ctx.parsedType !== ZodParsedType.map) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.map,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            var keyType = this._def.keyType;
            var valueType = this._def.valueType;
            var pairs = __spread(ctx.data.entries()).map(function (_a, index) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return {
                    key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                    value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
                };
            });
            if (ctx.common.async) {
                var finalMap_1 = new Map();
                return Promise.resolve().then(function () { return __awaiter(_this, void 0, void 0, function () {
                    var pairs_3, pairs_3_1, pair, key, value, e_19_1;
                    var e_19, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 6, 7, 8]);
                                pairs_3 = __values(pairs), pairs_3_1 = pairs_3.next();
                                _b.label = 1;
                            case 1:
                                if (!!pairs_3_1.done) return [3 /*break*/, 5];
                                pair = pairs_3_1.value;
                                return [4 /*yield*/, pair.key];
                            case 2:
                                key = _b.sent();
                                return [4 /*yield*/, pair.value];
                            case 3:
                                value = _b.sent();
                                if (key.status === "aborted" || value.status === "aborted") {
                                    return [2 /*return*/, INVALID];
                                }
                                if (key.status === "dirty" || value.status === "dirty") {
                                    status.dirty();
                                }
                                finalMap_1.set(key.value, value.value);
                                _b.label = 4;
                            case 4:
                                pairs_3_1 = pairs_3.next();
                                return [3 /*break*/, 1];
                            case 5: return [3 /*break*/, 8];
                            case 6:
                                e_19_1 = _b.sent();
                                e_19 = { error: e_19_1 };
                                return [3 /*break*/, 8];
                            case 7:
                                try {
                                    if (pairs_3_1 && !pairs_3_1.done && (_a = pairs_3.return)) _a.call(pairs_3);
                                }
                                finally { if (e_19) throw e_19.error; }
                                return [7 /*endfinally*/];
                            case 8: return [2 /*return*/, { status: status.value, value: finalMap_1 }];
                        }
                    });
                }); });
            }
            else {
                var finalMap = new Map();
                try {
                    for (var pairs_2 = __values(pairs), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
                        var pair = pairs_2_1.value;
                        var key = pair.key;
                        var value = pair.value;
                        if (key.status === "aborted" || value.status === "aborted") {
                            return INVALID;
                        }
                        if (key.status === "dirty" || value.status === "dirty") {
                            status.dirty();
                        }
                        finalMap.set(key.value, value.value);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (pairs_2_1 && !pairs_2_1.done && (_a = pairs_2.return)) _a.call(pairs_2);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                return { status: status.value, value: finalMap };
            }
        };
        ZodMap.create = function (keyType, valueType, params) {
            return new ZodMap(__assign({ valueType: valueType,
                keyType: keyType, typeName: exports.ZodFirstPartyTypeKind.ZodMap }, processCreateParams(params)));
        };
        return ZodMap;
    }(ZodType));
    var ZodSet = /** @class */ (function (_super) {
        __extends(ZodSet, _super);
        function ZodSet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodSet.prototype._parse = function (input) {
            var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
            if (ctx.parsedType !== ZodParsedType.set) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.set,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            var def = this._def;
            if (def.minSize !== null) {
                if (ctx.data.size < def.minSize.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: def.minSize.value,
                        type: "set",
                        inclusive: true,
                        message: def.minSize.message,
                    });
                    status.dirty();
                }
            }
            if (def.maxSize !== null) {
                if (ctx.data.size > def.maxSize.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: def.maxSize.value,
                        type: "set",
                        inclusive: true,
                        message: def.maxSize.message,
                    });
                    status.dirty();
                }
            }
            var valueType = this._def.valueType;
            function finalizeSet(elements) {
                var e_20, _a;
                var parsedSet = new Set();
                try {
                    for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                        var element = elements_1_1.value;
                        if (element.status === "aborted")
                            return INVALID;
                        if (element.status === "dirty")
                            status.dirty();
                        parsedSet.add(element.value);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                return { status: status.value, value: parsedSet };
            }
            var elements = __spread(ctx.data.values()).map(function (item, i) {
                return valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i));
            });
            if (ctx.common.async) {
                return Promise.all(elements).then(function (elements) { return finalizeSet(elements); });
            }
            else {
                return finalizeSet(elements);
            }
        };
        ZodSet.prototype.min = function (minSize, message) {
            return new ZodSet(__assign(__assign({}, this._def), { minSize: { value: minSize, message: errorUtil.toString(message) } }));
        };
        ZodSet.prototype.max = function (maxSize, message) {
            return new ZodSet(__assign(__assign({}, this._def), { maxSize: { value: maxSize, message: errorUtil.toString(message) } }));
        };
        ZodSet.prototype.size = function (size, message) {
            return this.min(size, message).max(size, message);
        };
        ZodSet.prototype.nonempty = function (message) {
            return this.min(1, message);
        };
        ZodSet.create = function (valueType, params) {
            return new ZodSet(__assign({ valueType: valueType, minSize: null, maxSize: null, typeName: exports.ZodFirstPartyTypeKind.ZodSet }, processCreateParams(params)));
        };
        return ZodSet;
    }(ZodType));
    var ZodFunction = /** @class */ (function (_super) {
        __extends(ZodFunction, _super);
        function ZodFunction() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.validate = _this.implement;
            return _this;
        }
        ZodFunction.prototype._parse = function (input) {
            var _this = this;
            var ctx = this._processInputParams(input).ctx;
            if (ctx.parsedType !== ZodParsedType.function) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.function,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            function makeArgsIssue(args, error) {
                return makeIssue({
                    data: args,
                    path: ctx.path,
                    errorMaps: [
                        ctx.common.contextualErrorMap,
                        ctx.schemaErrorMap,
                        getErrorMap(),
                        defaultErrorMap,
                    ].filter(function (x) { return !!x; }),
                    issueData: {
                        code: ZodIssueCode.invalid_arguments,
                        argumentsError: error,
                    },
                });
            }
            function makeReturnsIssue(returns, error) {
                return makeIssue({
                    data: returns,
                    path: ctx.path,
                    errorMaps: [
                        ctx.common.contextualErrorMap,
                        ctx.schemaErrorMap,
                        getErrorMap(),
                        defaultErrorMap,
                    ].filter(function (x) { return !!x; }),
                    issueData: {
                        code: ZodIssueCode.invalid_return_type,
                        returnTypeError: error,
                    },
                });
            }
            var params = { errorMap: ctx.common.contextualErrorMap };
            var fn = ctx.data;
            if (this._def.returns instanceof ZodPromise) {
                return OK(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(_this, void 0, void 0, function () {
                        var error, parsedArgs, result, parsedReturns;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    error = new ZodError([]);
                                    return [4 /*yield*/, this._def.args
                                            .parseAsync(args, params)
                                            .catch(function (e) {
                                            error.addIssue(makeArgsIssue(args, e));
                                            throw error;
                                        })];
                                case 1:
                                    parsedArgs = _a.sent();
                                    return [4 /*yield*/, fn.apply(void 0, __spread(parsedArgs))];
                                case 2:
                                    result = _a.sent();
                                    return [4 /*yield*/, this._def.returns._def.type
                                            .parseAsync(result, params)
                                            .catch(function (e) {
                                            error.addIssue(makeReturnsIssue(result, e));
                                            throw error;
                                        })];
                                case 3:
                                    parsedReturns = _a.sent();
                                    return [2 /*return*/, parsedReturns];
                            }
                        });
                    });
                });
            }
            else {
                return OK(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var parsedArgs = _this._def.args.safeParse(args, params);
                    if (!parsedArgs.success) {
                        throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                    }
                    var result = fn.apply(void 0, __spread(parsedArgs.data));
                    var parsedReturns = _this._def.returns.safeParse(result, params);
                    if (!parsedReturns.success) {
                        throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                    }
                    return parsedReturns.data;
                });
            }
        };
        ZodFunction.prototype.parameters = function () {
            return this._def.args;
        };
        ZodFunction.prototype.returnType = function () {
            return this._def.returns;
        };
        ZodFunction.prototype.args = function () {
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            return new ZodFunction(__assign(__assign({}, this._def), { args: ZodTuple.create(items).rest(ZodUnknown.create()) }));
        };
        ZodFunction.prototype.returns = function (returnType) {
            return new ZodFunction(__assign(__assign({}, this._def), { returns: returnType }));
        };
        ZodFunction.prototype.implement = function (func) {
            var validatedFunc = this.parse(func);
            return validatedFunc;
        };
        ZodFunction.prototype.strictImplement = function (func) {
            var validatedFunc = this.parse(func);
            return validatedFunc;
        };
        ZodFunction.create = function (args, returns, params) {
            return new ZodFunction(__assign({ args: (args
                    ? args.rest(ZodUnknown.create())
                    : ZodTuple.create([]).rest(ZodUnknown.create())), returns: returns || ZodUnknown.create(), typeName: exports.ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(params)));
        };
        return ZodFunction;
    }(ZodType));
    var ZodLazy = /** @class */ (function (_super) {
        __extends(ZodLazy, _super);
        function ZodLazy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ZodLazy.prototype, "schema", {
            get: function () {
                return this._def.getter();
            },
            enumerable: false,
            configurable: true
        });
        ZodLazy.prototype._parse = function (input) {
            var ctx = this._processInputParams(input).ctx;
            var lazySchema = this._def.getter();
            return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
        };
        ZodLazy.create = function (getter, params) {
            return new ZodLazy(__assign({ getter: getter, typeName: exports.ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(params)));
        };
        return ZodLazy;
    }(ZodType));
    var ZodLiteral = /** @class */ (function (_super) {
        __extends(ZodLiteral, _super);
        function ZodLiteral() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodLiteral.prototype._parse = function (input) {
            if (input.data !== this._def.value) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_literal,
                    expected: this._def.value,
                });
                return INVALID;
            }
            return { status: "valid", value: input.data };
        };
        Object.defineProperty(ZodLiteral.prototype, "value", {
            get: function () {
                return this._def.value;
            },
            enumerable: false,
            configurable: true
        });
        ZodLiteral.create = function (value, params) {
            return new ZodLiteral(__assign({ value: value, typeName: exports.ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(params)));
        };
        return ZodLiteral;
    }(ZodType));
    function createZodEnum(values, params) {
        return new ZodEnum(__assign({ values: values, typeName: exports.ZodFirstPartyTypeKind.ZodEnum }, processCreateParams(params)));
    }
    var ZodEnum = /** @class */ (function (_super) {
        __extends(ZodEnum, _super);
        function ZodEnum() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodEnum.prototype._parse = function (input) {
            if (typeof input.data !== "string") {
                var ctx = this._getOrReturnCtx(input);
                var expectedValues = this._def.values;
                addIssueToContext(ctx, {
                    expected: util.joinValues(expectedValues),
                    received: ctx.parsedType,
                    code: ZodIssueCode.invalid_type,
                });
                return INVALID;
            }
            if (this._def.values.indexOf(input.data) === -1) {
                var ctx = this._getOrReturnCtx(input);
                var expectedValues = this._def.values;
                addIssueToContext(ctx, {
                    received: ctx.data,
                    code: ZodIssueCode.invalid_enum_value,
                    options: expectedValues,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        Object.defineProperty(ZodEnum.prototype, "options", {
            get: function () {
                return this._def.values;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodEnum.prototype, "enum", {
            get: function () {
                var e_21, _a;
                var enumValues = {};
                try {
                    for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var val = _c.value;
                        enumValues[val] = val;
                    }
                }
                catch (e_21_1) { e_21 = { error: e_21_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_21) throw e_21.error; }
                }
                return enumValues;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodEnum.prototype, "Values", {
            get: function () {
                var e_22, _a;
                var enumValues = {};
                try {
                    for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var val = _c.value;
                        enumValues[val] = val;
                    }
                }
                catch (e_22_1) { e_22 = { error: e_22_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_22) throw e_22.error; }
                }
                return enumValues;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ZodEnum.prototype, "Enum", {
            get: function () {
                var e_23, _a;
                var enumValues = {};
                try {
                    for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var val = _c.value;
                        enumValues[val] = val;
                    }
                }
                catch (e_23_1) { e_23 = { error: e_23_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_23) throw e_23.error; }
                }
                return enumValues;
            },
            enumerable: false,
            configurable: true
        });
        ZodEnum.create = createZodEnum;
        return ZodEnum;
    }(ZodType));
    var ZodNativeEnum = /** @class */ (function (_super) {
        __extends(ZodNativeEnum, _super);
        function ZodNativeEnum() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodNativeEnum.prototype._parse = function (input) {
            var nativeEnumValues = util.getValidEnumValues(this._def.values);
            var ctx = this._getOrReturnCtx(input);
            if (ctx.parsedType !== ZodParsedType.string &&
                ctx.parsedType !== ZodParsedType.number) {
                var expectedValues = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                    expected: util.joinValues(expectedValues),
                    received: ctx.parsedType,
                    code: ZodIssueCode.invalid_type,
                });
                return INVALID;
            }
            if (nativeEnumValues.indexOf(input.data) === -1) {
                var expectedValues = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                    received: ctx.data,
                    code: ZodIssueCode.invalid_enum_value,
                    options: expectedValues,
                });
                return INVALID;
            }
            return OK(input.data);
        };
        Object.defineProperty(ZodNativeEnum.prototype, "enum", {
            get: function () {
                return this._def.values;
            },
            enumerable: false,
            configurable: true
        });
        ZodNativeEnum.create = function (values, params) {
            return new ZodNativeEnum(__assign({ values: values, typeName: exports.ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(params)));
        };
        return ZodNativeEnum;
    }(ZodType));
    var ZodPromise = /** @class */ (function (_super) {
        __extends(ZodPromise, _super);
        function ZodPromise() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodPromise.prototype._parse = function (input) {
            var _this = this;
            var ctx = this._processInputParams(input).ctx;
            if (ctx.parsedType !== ZodParsedType.promise &&
                ctx.common.async === false) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.promise,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            var promisified = ctx.parsedType === ZodParsedType.promise
                ? ctx.data
                : Promise.resolve(ctx.data);
            return OK(promisified.then(function (data) {
                return _this._def.type.parseAsync(data, {
                    path: ctx.path,
                    errorMap: ctx.common.contextualErrorMap,
                });
            }));
        };
        ZodPromise.create = function (schema, params) {
            return new ZodPromise(__assign({ type: schema, typeName: exports.ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(params)));
        };
        return ZodPromise;
    }(ZodType));
    var ZodEffects = /** @class */ (function (_super) {
        __extends(ZodEffects, _super);
        function ZodEffects() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodEffects.prototype.innerType = function () {
            return this._def.schema;
        };
        ZodEffects.prototype._parse = function (input) {
            var _this = this;
            var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
            var effect = this._def.effect || null;
            if (effect.type === "preprocess") {
                var processed = effect.transform(ctx.data);
                if (ctx.common.async) {
                    return Promise.resolve(processed).then(function (processed) {
                        return _this._def.schema._parseAsync({
                            data: processed,
                            path: ctx.path,
                            parent: ctx,
                        });
                    });
                }
                else {
                    return this._def.schema._parseSync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            }
            var checkCtx = {
                addIssue: function (arg) {
                    addIssueToContext(ctx, arg);
                    if (arg.fatal) {
                        status.abort();
                    }
                    else {
                        status.dirty();
                    }
                },
                get path() {
                    return ctx.path;
                },
            };
            checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
            if (effect.type === "refinement") {
                var executeRefinement_1 = function (acc
                // effect: RefinementEffect<any>
                ) {
                    var result = effect.refinement(acc, checkCtx);
                    if (ctx.common.async) {
                        return Promise.resolve(result);
                    }
                    if (result instanceof Promise) {
                        throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                    }
                    return acc;
                };
                if (ctx.common.async === false) {
                    var inner = this._def.schema._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    // return value is ignored
                    executeRefinement_1(inner.value);
                    return { status: status.value, value: inner.value };
                }
                else {
                    return this._def.schema
                        ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                        .then(function (inner) {
                        if (inner.status === "aborted")
                            return INVALID;
                        if (inner.status === "dirty")
                            status.dirty();
                        return executeRefinement_1(inner.value).then(function () {
                            return { status: status.value, value: inner.value };
                        });
                    });
                }
            }
            if (effect.type === "transform") {
                if (ctx.common.async === false) {
                    var base = this._def.schema._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    });
                    // if (base.status === "aborted") return INVALID;
                    // if (base.status === "dirty") {
                    //   return { status: "dirty", value: base.value };
                    // }
                    if (!isValid(base))
                        return base;
                    var result = effect.transform(base.value, checkCtx);
                    if (result instanceof Promise) {
                        throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                    }
                    return { status: status.value, value: result };
                }
                else {
                    return this._def.schema
                        ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                        .then(function (base) {
                        if (!isValid(base))
                            return base;
                        // if (base.status === "aborted") return INVALID;
                        // if (base.status === "dirty") {
                        //   return { status: "dirty", value: base.value };
                        // }
                        return Promise.resolve(effect.transform(base.value, checkCtx)).then(function (result) { return ({ status: status.value, value: result }); });
                    });
                }
            }
            util.assertNever(effect);
        };
        ZodEffects.create = function (schema, effect, params) {
            return new ZodEffects(__assign({ schema: schema, typeName: exports.ZodFirstPartyTypeKind.ZodEffects, effect: effect }, processCreateParams(params)));
        };
        ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
            return new ZodEffects(__assign({ schema: schema, effect: { type: "preprocess", transform: preprocess }, typeName: exports.ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(params)));
        };
        return ZodEffects;
    }(ZodType));
    var ZodOptional = /** @class */ (function (_super) {
        __extends(ZodOptional, _super);
        function ZodOptional() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodOptional.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType === ZodParsedType.undefined) {
                return OK(undefined);
            }
            return this._def.innerType._parse(input);
        };
        ZodOptional.prototype.unwrap = function () {
            return this._def.innerType;
        };
        ZodOptional.create = function (type, params) {
            return new ZodOptional(__assign({ innerType: type, typeName: exports.ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
        };
        return ZodOptional;
    }(ZodType));
    var ZodNullable = /** @class */ (function (_super) {
        __extends(ZodNullable, _super);
        function ZodNullable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodNullable.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType === ZodParsedType.null) {
                return OK(null);
            }
            return this._def.innerType._parse(input);
        };
        ZodNullable.prototype.unwrap = function () {
            return this._def.innerType;
        };
        ZodNullable.create = function (type, params) {
            return new ZodNullable(__assign({ innerType: type, typeName: exports.ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(params)));
        };
        return ZodNullable;
    }(ZodType));
    var ZodDefault = /** @class */ (function (_super) {
        __extends(ZodDefault, _super);
        function ZodDefault() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodDefault.prototype._parse = function (input) {
            var ctx = this._processInputParams(input).ctx;
            var data = ctx.data;
            if (ctx.parsedType === ZodParsedType.undefined) {
                data = this._def.defaultValue();
            }
            return this._def.innerType._parse({
                data: data,
                path: ctx.path,
                parent: ctx,
            });
        };
        ZodDefault.prototype.removeDefault = function () {
            return this._def.innerType;
        };
        ZodDefault.create = function (type, params) {
            return new ZodOptional(__assign({ innerType: type, typeName: exports.ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
        };
        return ZodDefault;
    }(ZodType));
    var ZodNaN = /** @class */ (function (_super) {
        __extends(ZodNaN, _super);
        function ZodNaN() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodNaN.prototype._parse = function (input) {
            var parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.nan) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.nan,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return { status: "valid", value: input.data };
        };
        ZodNaN.create = function (params) {
            return new ZodNaN(__assign({ typeName: exports.ZodFirstPartyTypeKind.ZodNaN }, processCreateParams(params)));
        };
        return ZodNaN;
    }(ZodType));
    var BRAND = Symbol("zod_brand");
    var ZodBranded = /** @class */ (function (_super) {
        __extends(ZodBranded, _super);
        function ZodBranded() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZodBranded.prototype._parse = function (input) {
            var ctx = this._processInputParams(input).ctx;
            var data = ctx.data;
            return this._def.type._parse({
                data: data,
                path: ctx.path,
                parent: ctx,
            });
        };
        ZodBranded.prototype.unwrap = function () {
            return this._def.type;
        };
        return ZodBranded;
    }(ZodType));
    var custom = function (check, params, fatal) {
        if (params === void 0) { params = {}; }
        if (check)
            return ZodAny.create().superRefine(function (data, ctx) {
                if (!check(data)) {
                    var p = typeof params === "function" ? params(data) : params;
                    var p2 = typeof p === "string" ? { message: p } : p;
                    ctx.addIssue(__assign(__assign({ code: "custom" }, p2), { fatal: fatal }));
                }
            });
        return ZodAny.create();
    };
    var late = {
        object: ZodObject.lazycreate,
    };
    exports.ZodFirstPartyTypeKind = void 0;
    (function (ZodFirstPartyTypeKind) {
        ZodFirstPartyTypeKind["ZodString"] = "ZodString";
        ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
        ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
        ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
        ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
        ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
        ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
        ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
        ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
        ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
        ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
        ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
        ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
        ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
        ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
        ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
        ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
        ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
        ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
        ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
        ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
        ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
        ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
        ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
        ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
        ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
        ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
        ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
        ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
        ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
        ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
        ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    })(exports.ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = {}));
    var instanceOfType = function (cls, params) {
        if (params === void 0) { params = {
            message: "Input not instance of " + cls.name,
        }; }
        return custom(function (data) { return data instanceof cls; }, params, true);
    };
    var stringType = ZodString.create;
    var numberType = ZodNumber.create;
    var nanType = ZodNaN.create;
    var bigIntType = ZodBigInt.create;
    var booleanType = ZodBoolean.create;
    var dateType = ZodDate.create;
    var undefinedType = ZodUndefined.create;
    var nullType = ZodNull.create;
    var anyType = ZodAny.create;
    var unknownType = ZodUnknown.create;
    var neverType = ZodNever.create;
    var voidType = ZodVoid.create;
    var arrayType = ZodArray.create;
    var objectType = ZodObject.create;
    var strictObjectType = ZodObject.strictCreate;
    var unionType = ZodUnion.create;
    var discriminatedUnionType = ZodDiscriminatedUnion.create;
    var intersectionType = ZodIntersection.create;
    var tupleType = ZodTuple.create;
    var recordType = ZodRecord.create;
    var mapType = ZodMap.create;
    var setType = ZodSet.create;
    var functionType = ZodFunction.create;
    var lazyType = ZodLazy.create;
    var literalType = ZodLiteral.create;
    var enumType = ZodEnum.create;
    var nativeEnumType = ZodNativeEnum.create;
    var promiseType = ZodPromise.create;
    var effectsType = ZodEffects.create;
    var optionalType = ZodOptional.create;
    var nullableType = ZodNullable.create;
    var preprocessType = ZodEffects.createWithPreprocess;
    var ostring = function () { return stringType().optional(); };
    var onumber = function () { return numberType().optional(); };
    var oboolean = function () { return booleanType().optional(); };

    var mod = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getParsedType: getParsedType,
        ZodParsedType: ZodParsedType,
        makeIssue: makeIssue,
        EMPTY_PATH: EMPTY_PATH,
        addIssueToContext: addIssueToContext,
        ParseStatus: ParseStatus,
        INVALID: INVALID,
        DIRTY: DIRTY,
        OK: OK,
        isAborted: isAborted,
        isDirty: isDirty,
        isValid: isValid,
        isAsync: isAsync,
        jsonStringifyReplacer: jsonStringifyReplacer,
        ZodType: ZodType,
        ZodString: ZodString,
        ZodNumber: ZodNumber,
        ZodBigInt: ZodBigInt,
        ZodBoolean: ZodBoolean,
        ZodDate: ZodDate,
        ZodUndefined: ZodUndefined,
        ZodNull: ZodNull,
        ZodAny: ZodAny,
        ZodUnknown: ZodUnknown,
        ZodNever: ZodNever,
        ZodVoid: ZodVoid,
        ZodArray: ZodArray,
        get objectUtil () { return exports.objectUtil; },
        ZodObject: ZodObject,
        ZodUnion: ZodUnion,
        ZodDiscriminatedUnion: ZodDiscriminatedUnion,
        ZodIntersection: ZodIntersection,
        ZodTuple: ZodTuple,
        ZodRecord: ZodRecord,
        ZodMap: ZodMap,
        ZodSet: ZodSet,
        ZodFunction: ZodFunction,
        ZodLazy: ZodLazy,
        ZodLiteral: ZodLiteral,
        ZodEnum: ZodEnum,
        ZodNativeEnum: ZodNativeEnum,
        ZodPromise: ZodPromise,
        ZodEffects: ZodEffects,
        ZodTransformer: ZodEffects,
        ZodOptional: ZodOptional,
        ZodNullable: ZodNullable,
        ZodDefault: ZodDefault,
        ZodNaN: ZodNaN,
        BRAND: BRAND,
        ZodBranded: ZodBranded,
        custom: custom,
        Schema: ZodType,
        ZodSchema: ZodType,
        late: late,
        get ZodFirstPartyTypeKind () { return exports.ZodFirstPartyTypeKind; },
        any: anyType,
        array: arrayType,
        bigint: bigIntType,
        boolean: booleanType,
        date: dateType,
        discriminatedUnion: discriminatedUnionType,
        effect: effectsType,
        'enum': enumType,
        'function': functionType,
        'instanceof': instanceOfType,
        intersection: intersectionType,
        lazy: lazyType,
        literal: literalType,
        map: mapType,
        nan: nanType,
        nativeEnum: nativeEnumType,
        never: neverType,
        'null': nullType,
        nullable: nullableType,
        number: numberType,
        object: objectType,
        oboolean: oboolean,
        onumber: onumber,
        optional: optionalType,
        ostring: ostring,
        preprocess: preprocessType,
        promise: promiseType,
        record: recordType,
        set: setType,
        strictObject: strictObjectType,
        string: stringType,
        transformer: effectsType,
        tuple: tupleType,
        'undefined': undefinedType,
        union: unionType,
        unknown: unknownType,
        'void': voidType,
        ZodIssueCode: ZodIssueCode,
        quotelessJson: quotelessJson,
        ZodError: ZodError,
        defaultErrorMap: defaultErrorMap,
        setErrorMap: setErrorMap,
        getErrorMap: getErrorMap
    });

    exports.BRAND = BRAND;
    exports.DIRTY = DIRTY;
    exports.EMPTY_PATH = EMPTY_PATH;
    exports.INVALID = INVALID;
    exports.OK = OK;
    exports.ParseStatus = ParseStatus;
    exports.Schema = ZodType;
    exports.ZodAny = ZodAny;
    exports.ZodArray = ZodArray;
    exports.ZodBigInt = ZodBigInt;
    exports.ZodBoolean = ZodBoolean;
    exports.ZodBranded = ZodBranded;
    exports.ZodDate = ZodDate;
    exports.ZodDefault = ZodDefault;
    exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
    exports.ZodEffects = ZodEffects;
    exports.ZodEnum = ZodEnum;
    exports.ZodError = ZodError;
    exports.ZodFunction = ZodFunction;
    exports.ZodIntersection = ZodIntersection;
    exports.ZodIssueCode = ZodIssueCode;
    exports.ZodLazy = ZodLazy;
    exports.ZodLiteral = ZodLiteral;
    exports.ZodMap = ZodMap;
    exports.ZodNaN = ZodNaN;
    exports.ZodNativeEnum = ZodNativeEnum;
    exports.ZodNever = ZodNever;
    exports.ZodNull = ZodNull;
    exports.ZodNullable = ZodNullable;
    exports.ZodNumber = ZodNumber;
    exports.ZodObject = ZodObject;
    exports.ZodOptional = ZodOptional;
    exports.ZodParsedType = ZodParsedType;
    exports.ZodPromise = ZodPromise;
    exports.ZodRecord = ZodRecord;
    exports.ZodSchema = ZodType;
    exports.ZodSet = ZodSet;
    exports.ZodString = ZodString;
    exports.ZodTransformer = ZodEffects;
    exports.ZodTuple = ZodTuple;
    exports.ZodType = ZodType;
    exports.ZodUndefined = ZodUndefined;
    exports.ZodUnion = ZodUnion;
    exports.ZodUnknown = ZodUnknown;
    exports.ZodVoid = ZodVoid;
    exports.addIssueToContext = addIssueToContext;
    exports.any = anyType;
    exports.array = arrayType;
    exports.bigint = bigIntType;
    exports.boolean = booleanType;
    exports.custom = custom;
    exports.date = dateType;
    exports["default"] = mod;
    exports.defaultErrorMap = defaultErrorMap;
    exports.discriminatedUnion = discriminatedUnionType;
    exports.effect = effectsType;
    exports["enum"] = enumType;
    exports["function"] = functionType;
    exports.getErrorMap = getErrorMap;
    exports.getParsedType = getParsedType;
    exports["instanceof"] = instanceOfType;
    exports.intersection = intersectionType;
    exports.isAborted = isAborted;
    exports.isAsync = isAsync;
    exports.isDirty = isDirty;
    exports.isValid = isValid;
    exports.jsonStringifyReplacer = jsonStringifyReplacer;
    exports.late = late;
    exports.lazy = lazyType;
    exports.literal = literalType;
    exports.makeIssue = makeIssue;
    exports.map = mapType;
    exports.nan = nanType;
    exports.nativeEnum = nativeEnumType;
    exports.never = neverType;
    exports["null"] = nullType;
    exports.nullable = nullableType;
    exports.number = numberType;
    exports.object = objectType;
    exports.oboolean = oboolean;
    exports.onumber = onumber;
    exports.optional = optionalType;
    exports.ostring = ostring;
    exports.preprocess = preprocessType;
    exports.promise = promiseType;
    exports.quotelessJson = quotelessJson;
    exports.record = recordType;
    exports.set = setType;
    exports.setErrorMap = setErrorMap;
    exports.strictObject = strictObjectType;
    exports.string = stringType;
    exports.transformer = effectsType;
    exports.tuple = tupleType;
    exports["undefined"] = undefinedType;
    exports.union = unionType;
    exports.unknown = unknownType;
    exports["void"] = voidType;
    exports.z = mod;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
