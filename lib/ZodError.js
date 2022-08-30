"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMap = exports.setErrorMap = exports.defaultErrorMap = exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
var parseUtil_1 = require("./helpers/parseUtil");
var util_1 = require("./helpers/util");
exports.ZodIssueCode = util_1.util.arrayToEnum([
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
exports.quotelessJson = quotelessJson;
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
            return JSON.stringify(this.issues, parseUtil_1.jsonStringifyReplacer, 2);
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
exports.ZodError = ZodError;
var defaultErrorMap = function (issue, _ctx) {
    var message;
    switch (issue.code) {
        case exports.ZodIssueCode.invalid_type:
            if (issue.received === util_1.ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = "Expected " + issue.expected + ", received " + issue.received;
            }
            break;
        case exports.ZodIssueCode.invalid_literal:
            message = "Invalid literal value, expected " + JSON.stringify(issue.expected, parseUtil_1.jsonStringifyReplacer);
            break;
        case exports.ZodIssueCode.unrecognized_keys:
            message = "Unrecognized key(s) in object: " + util_1.util.joinValues(issue.keys, ", ");
            break;
        case exports.ZodIssueCode.invalid_union:
            message = "Invalid input";
            break;
        case exports.ZodIssueCode.invalid_union_discriminator:
            message = "Invalid discriminator value. Expected " + util_1.util.joinValues(issue.options);
            break;
        case exports.ZodIssueCode.invalid_enum_value:
            message = "Invalid enum value. Expected " + util_1.util.joinValues(issue.options) + ", received '" + issue.received + "'";
            break;
        case exports.ZodIssueCode.invalid_arguments:
            message = "Invalid function arguments";
            break;
        case exports.ZodIssueCode.invalid_return_type:
            message = "Invalid function return type";
            break;
        case exports.ZodIssueCode.invalid_date:
            message = "Invalid date";
            break;
        case exports.ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("startsWith" in issue.validation) {
                    message = "Invalid input: must start with \"" + issue.validation.startsWith + "\"";
                }
                else if ("endsWith" in issue.validation) {
                    message = "Invalid input: must end with \"" + issue.validation.endsWith + "\"";
                }
                else {
                    util_1.util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = "Invalid " + issue.validation;
            }
            else {
                message = "Invalid";
            }
            break;
        case exports.ZodIssueCode.too_small:
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
        case exports.ZodIssueCode.too_big:
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
        case exports.ZodIssueCode.custom:
            message = "Invalid input";
            break;
        case exports.ZodIssueCode.invalid_intersection_types:
            message = "Intersection results could not be merged";
            break;
        case exports.ZodIssueCode.not_multiple_of:
            message = "Number must be a multiple of " + issue.multipleOf;
            break;
        default:
            message = _ctx.defaultError;
            util_1.util.assertNever(issue);
    }
    return { message: message };
};
exports.defaultErrorMap = defaultErrorMap;
var overrideErrorMap = exports.defaultErrorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
exports.setErrorMap = setErrorMap;
function getErrorMap() {
    return overrideErrorMap;
}
exports.getErrorMap = getErrorMap;
