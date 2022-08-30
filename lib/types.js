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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
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
exports.function = exports.enum = exports.effect = exports.discriminatedUnion = exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.custom = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.objectUtil = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = void 0;
var errorUtil_1 = require("./helpers/errorUtil");
var parseUtil_1 = require("./helpers/parseUtil");
var util_1 = require("./helpers/util");
var ZodError_1 = require("./ZodError");
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
    if (parseUtil_1.isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        var error = new ZodError_1.ZodError(ctx.common.issues);
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
        return util_1.getParsedType(input.data);
    };
    ZodType.prototype._getOrReturnCtx = function (input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: util_1.getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    };
    ZodType.prototype._processInputParams = function (input) {
        return {
            status: new parseUtil_1.ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: util_1.getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    };
    ZodType.prototype._parseSync = function (input) {
        var result = this._parse(input);
        if (parseUtil_1.isAsync(result)) {
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
            parsedType: util_1.getParsedType(data),
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
                            parsedType: util_1.getParsedType(data),
                        };
                        maybeAsyncResult = this._parse({ data: data, path: [], parent: ctx });
                        return [4 /*yield*/, (parseUtil_1.isAsync(maybeAsyncResult)
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
                return ctx.addIssue(__assign({ code: ZodError_1.ZodIssueCode.custom }, getIssueProperties(val)));
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
            typeName: ZodFirstPartyTypeKind.ZodEffects,
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
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform: transform },
        });
    };
    ZodType.prototype.default = function (def) {
        var defaultValueFunc = typeof def === "function" ? def : function () { return def; };
        return new ZodDefault({
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    };
    ZodType.prototype.brand = function () {
        return new ZodBranded(__assign({ typeName: ZodFirstPartyTypeKind.ZodBranded, type: this }, processCreateParams(undefined)));
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
exports.ZodType = ZodType;
exports.Schema = ZodType;
exports.ZodSchema = ZodType;
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
            return _this.refinement(function (data) { return regex.test(data); }, __assign({ validation: validation, code: ZodError_1.ZodIssueCode.invalid_string }, errorUtil_1.errorUtil.errToObj(message)));
        };
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */
        _this.nonempty = function (message) {
            return _this.min(1, errorUtil_1.errorUtil.errToObj(message));
        };
        _this.trim = function () {
            return new ZodString(__assign(__assign({}, _this._def), { checks: __spread(_this._def.checks, [{ kind: "trim" }]) }));
        };
        return _this;
    }
    ZodString.prototype._parse = function (input) {
        var e_1, _a;
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.string) {
            var ctx_1 = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx_1, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.string,
                received: ctx_1.parsedType,
            }
            //
            );
            return parseUtil_1.INVALID;
        }
        var status = new parseUtil_1.ParseStatus();
        var ctx = undefined;
        try {
            for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var check = _c.value;
                if (check.kind === "min") {
                    if (input.data.length < check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_small,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_big,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            validation: "email",
                            code: ZodError_1.ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "uuid") {
                    if (!uuidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            validation: "uuid",
                            code: ZodError_1.ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "cuid") {
                    if (!cuidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            validation: "cuid",
                            code: ZodError_1.ZodIssueCode.invalid_string,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            validation: "url",
                            code: ZodError_1.ZodIssueCode.invalid_string,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            validation: "regex",
                            code: ZodError_1.ZodIssueCode.invalid_string,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.invalid_string,
                            validation: { startsWith: check.value },
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "endsWith") {
                    if (!input.data.endsWith(check.value)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.invalid_string,
                            validation: { endsWith: check.value },
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util_1.util.assertNever(check);
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
        return this._addCheck(__assign({ kind: "email" }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.url = function (message) {
        return this._addCheck(__assign({ kind: "url" }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.uuid = function (message) {
        return this._addCheck(__assign({ kind: "uuid" }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.cuid = function (message) {
        return this._addCheck(__assign({ kind: "cuid" }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.regex = function (regex, message) {
        return this._addCheck(__assign({ kind: "regex", regex: regex }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.startsWith = function (value, message) {
        return this._addCheck(__assign({ kind: "startsWith", value: value }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.endsWith = function (value, message) {
        return this._addCheck(__assign({ kind: "endsWith", value: value }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.min = function (minLength, message) {
        return this._addCheck(__assign({ kind: "min", value: minLength }, errorUtil_1.errorUtil.errToObj(message)));
    };
    ZodString.prototype.max = function (maxLength, message) {
        return this._addCheck(__assign({ kind: "max", value: maxLength }, errorUtil_1.errorUtil.errToObj(message)));
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
        return new ZodString(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString }, processCreateParams(params)));
    };
    return ZodString;
}(ZodType));
exports.ZodString = ZodString;
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
        if (parsedType !== util_1.ZodParsedType.number) {
            var ctx_2 = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx_2, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.number,
                received: ctx_2.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        var ctx = undefined;
        var status = new parseUtil_1.ParseStatus();
        try {
            for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var check = _c.value;
                if (check.kind === "int") {
                    if (!util_1.util.isInteger(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.invalid_type,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_small,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_big,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.not_multiple_of,
                            multipleOf: check.value,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util_1.util.assertNever(check);
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
        return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
    };
    ZodNumber.prototype.gt = function (value, message) {
        return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
    };
    ZodNumber.prototype.lte = function (value, message) {
        return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
    };
    ZodNumber.prototype.lt = function (value, message) {
        return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
    };
    ZodNumber.prototype.setLimit = function (kind, value, inclusive, message) {
        return new ZodNumber(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [
                {
                    kind: kind,
                    value: value,
                    inclusive: inclusive,
                    message: errorUtil_1.errorUtil.toString(message),
                },
            ]) }));
    };
    ZodNumber.prototype._addCheck = function (check) {
        return new ZodNumber(__assign(__assign({}, this._def), { checks: __spread(this._def.checks, [check]) }));
    };
    ZodNumber.prototype.int = function (message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.positive = function (message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.negative = function (message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.nonpositive = function (message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.nonnegative = function (message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.multipleOf = function (value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil_1.errorUtil.toString(message),
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
        return new ZodNumber(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(params)));
    };
    return ZodNumber;
}(ZodType));
exports.ZodNumber = ZodNumber;
var ZodBigInt = /** @class */ (function (_super) {
    __extends(ZodBigInt, _super);
    function ZodBigInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodBigInt.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.bigint) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    ZodBigInt.create = function (params) {
        return new ZodBigInt(__assign({ typeName: ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(params)));
    };
    return ZodBigInt;
}(ZodType));
exports.ZodBigInt = ZodBigInt;
var ZodBoolean = /** @class */ (function (_super) {
    __extends(ZodBoolean, _super);
    function ZodBoolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodBoolean.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.boolean) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    ZodBoolean.create = function (params) {
        return new ZodBoolean(__assign({ typeName: ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(params)));
    };
    return ZodBoolean;
}(ZodType));
exports.ZodBoolean = ZodBoolean;
var ZodDate = /** @class */ (function (_super) {
    __extends(ZodDate, _super);
    function ZodDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDate.prototype._parse = function (input) {
        var e_7, _a;
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.date) {
            var ctx_3 = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx_3, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.date,
                received: ctx_3.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        if (isNaN(input.data.getTime())) {
            var ctx_4 = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx_4, {
                code: ZodError_1.ZodIssueCode.invalid_date,
            });
            return parseUtil_1.INVALID;
        }
        var status = new parseUtil_1.ParseStatus();
        var ctx = undefined;
        try {
            for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var check = _c.value;
                if (check.kind === "min") {
                    if (input.data.getTime() < check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_small,
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
                        parseUtil_1.addIssueToContext(ctx, {
                            code: ZodError_1.ZodIssueCode.too_big,
                            message: check.message,
                            inclusive: true,
                            maximum: check.value,
                            type: "date",
                        });
                        status.dirty();
                    }
                }
                else {
                    util_1.util.assertNever(check);
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
            message: errorUtil_1.errorUtil.toString(message),
        });
    };
    ZodDate.prototype.max = function (maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil_1.errorUtil.toString(message),
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
        return new ZodDate(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodDate }, processCreateParams(params)));
    };
    return ZodDate;
}(ZodType));
exports.ZodDate = ZodDate;
var ZodUndefined = /** @class */ (function (_super) {
    __extends(ZodUndefined, _super);
    function ZodUndefined() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodUndefined.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.undefined) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    ZodUndefined.create = function (params) {
        return new ZodUndefined(__assign({ typeName: ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(params)));
    };
    return ZodUndefined;
}(ZodType));
exports.ZodUndefined = ZodUndefined;
var ZodNull = /** @class */ (function (_super) {
    __extends(ZodNull, _super);
    function ZodNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNull.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.null) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.null,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    ZodNull.create = function (params) {
        return new ZodNull(__assign({ typeName: ZodFirstPartyTypeKind.ZodNull }, processCreateParams(params)));
    };
    return ZodNull;
}(ZodType));
exports.ZodNull = ZodNull;
var ZodAny = /** @class */ (function (_super) {
    __extends(ZodAny, _super);
    function ZodAny() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        _this._any = true;
        return _this;
    }
    ZodAny.prototype._parse = function (input) {
        return parseUtil_1.OK(input.data);
    };
    ZodAny.create = function (params) {
        return new ZodAny(__assign({ typeName: ZodFirstPartyTypeKind.ZodAny }, processCreateParams(params)));
    };
    return ZodAny;
}(ZodType));
exports.ZodAny = ZodAny;
var ZodUnknown = /** @class */ (function (_super) {
    __extends(ZodUnknown, _super);
    function ZodUnknown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // required
        _this._unknown = true;
        return _this;
    }
    ZodUnknown.prototype._parse = function (input) {
        return parseUtil_1.OK(input.data);
    };
    ZodUnknown.create = function (params) {
        return new ZodUnknown(__assign({ typeName: ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(params)));
    };
    return ZodUnknown;
}(ZodType));
exports.ZodUnknown = ZodUnknown;
var ZodNever = /** @class */ (function (_super) {
    __extends(ZodNever, _super);
    function ZodNever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNever.prototype._parse = function (input) {
        var ctx = this._getOrReturnCtx(input);
        parseUtil_1.addIssueToContext(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.never,
            received: ctx.parsedType,
        });
        return parseUtil_1.INVALID;
    };
    ZodNever.create = function (params) {
        return new ZodNever(__assign({ typeName: ZodFirstPartyTypeKind.ZodNever }, processCreateParams(params)));
    };
    return ZodNever;
}(ZodType));
exports.ZodNever = ZodNever;
var ZodVoid = /** @class */ (function (_super) {
    __extends(ZodVoid, _super);
    function ZodVoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodVoid.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.undefined) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.void,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    ZodVoid.create = function (params) {
        return new ZodVoid(__assign({ typeName: ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(params)));
    };
    return ZodVoid;
}(ZodType));
exports.ZodVoid = ZodVoid;
var ZodArray = /** @class */ (function (_super) {
    __extends(ZodArray, _super);
    function ZodArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodArray.prototype._parse = function (input) {
        var _a = this._processInputParams(input), ctx = _a.ctx, status = _a.status;
        var def = this._def;
        if (ctx.parsedType !== util_1.ZodParsedType.array) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.array,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                parseUtil_1.addIssueToContext(ctx, {
                    code: ZodError_1.ZodIssueCode.too_small,
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
                parseUtil_1.addIssueToContext(ctx, {
                    code: ZodError_1.ZodIssueCode.too_big,
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
                return parseUtil_1.ParseStatus.mergeArray(status, result);
            });
        }
        var result = ctx.data.map(function (item, i) {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return parseUtil_1.ParseStatus.mergeArray(status, result);
    };
    Object.defineProperty(ZodArray.prototype, "element", {
        get: function () {
            return this._def.type;
        },
        enumerable: false,
        configurable: true
    });
    ZodArray.prototype.min = function (minLength, message) {
        return new ZodArray(__assign(__assign({}, this._def), { minLength: { value: minLength, message: errorUtil_1.errorUtil.toString(message) } }));
    };
    ZodArray.prototype.max = function (maxLength, message) {
        return new ZodArray(__assign(__assign({}, this._def), { maxLength: { value: maxLength, message: errorUtil_1.errorUtil.toString(message) } }));
    };
    ZodArray.prototype.length = function (len, message) {
        return this.min(len, message).max(len, message);
    };
    ZodArray.prototype.nonempty = function (message) {
        return this.min(1, message);
    };
    ZodArray.create = function (schema, params) {
        return new ZodArray(__assign({ type: schema, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind.ZodArray }, processCreateParams(params)));
    };
    return ZodArray;
}(ZodType));
exports.ZodArray = ZodArray;
/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodObject      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = function (first, second) {
        return __assign(__assign({}, first), second);
    };
})(objectUtil = exports.objectUtil || (exports.objectUtil = {}));
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
        var keys = util_1.util.objectKeys(shape);
        return (this._cached = { shape: shape, keys: keys });
    };
    ZodObject.prototype._parse = function (input) {
        var e_10, _a, e_11, _b, e_12, _c;
        var _this = this;
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.object) {
            var ctx_5 = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx_5, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.object,
                received: ctx_5.parsedType,
            });
            return parseUtil_1.INVALID;
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
                    parseUtil_1.addIssueToContext(ctx, {
                        code: ZodError_1.ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") {
            }
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
                return parseUtil_1.ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
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
        errorUtil_1.errorUtil.errToObj;
        return new ZodObject(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), (message !== undefined
            ? {
                errorMap: function (issue, ctx) {
                    var _a, _b, _c, _d;
                    var defaultError = (_c = (_b = (_a = _this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys")
                        return {
                            message: (_d = errorUtil_1.errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
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
                return objectUtil.mergeShapes(_this._def.shape(), merging._def.shape());
            },
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    };
    ZodObject.prototype.catchall = function (index) {
        return new ZodObject(__assign(__assign({}, this._def), { catchall: index }));
    };
    ZodObject.prototype.pick = function (mask) {
        var _this = this;
        var shape = {};
        util_1.util.objectKeys(mask).map(function (key) {
            // only add to shape if key corresponds to an element of the current shape
            if (_this.shape[key])
                shape[key] = _this.shape[key];
        });
        return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return shape; } }));
    };
    ZodObject.prototype.omit = function (mask) {
        var _this = this;
        var shape = {};
        util_1.util.objectKeys(this.shape).map(function (key) {
            if (util_1.util.objectKeys(mask).indexOf(key) === -1) {
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
            util_1.util.objectKeys(this.shape).map(function (key) {
                if (util_1.util.objectKeys(mask).indexOf(key) === -1) {
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
        return createZodEnum(util_1.util.objectKeys(this.shape));
    };
    ZodObject.create = function (shape, params) {
        return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    ZodObject.strictCreate = function (shape, params) {
        return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    ZodObject.lazycreate = function (shape, params) {
        return new ZodObject(__assign({ shape: shape, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    return ZodObject;
}(ZodType));
exports.ZodObject = ZodObject;
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
            var unionErrors = results.map(function (result) { return new ZodError_1.ZodError(result.ctx.common.issues); });
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_union,
                unionErrors: unionErrors,
            });
            return parseUtil_1.INVALID;
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
            var unionErrors = issues.map(function (issues) { return new ZodError_1.ZodError(issues); });
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_union,
                unionErrors: unionErrors,
            });
            return parseUtil_1.INVALID;
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
        return new ZodUnion(__assign({ options: types, typeName: ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(params)));
    };
    return ZodUnion;
}(ZodType));
exports.ZodUnion = ZodUnion;
var ZodDiscriminatedUnion = /** @class */ (function (_super) {
    __extends(ZodDiscriminatedUnion, _super);
    function ZodDiscriminatedUnion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDiscriminatedUnion.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== util_1.ZodParsedType.object) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.object,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        var discriminator = this.discriminator;
        var discriminatorValue = ctx.data[discriminator];
        var option = this.options.get(discriminatorValue);
        if (!option) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_union_discriminator,
                options: this.validDiscriminatorValues,
                path: [discriminator],
            });
            return parseUtil_1.INVALID;
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
        return new ZodDiscriminatedUnion(__assign({ typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion, discriminator: discriminator,
            options: options }, processCreateParams(params)));
    };
    return ZodDiscriminatedUnion;
}(ZodType));
exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
function mergeValues(a, b) {
    var e_17, _a;
    var aType = util_1.getParsedType(a);
    var bType = util_1.getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === util_1.ZodParsedType.object && bType === util_1.ZodParsedType.object) {
        var bKeys_1 = util_1.util.objectKeys(b);
        var sharedKeys = util_1.util
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
    else if (aType === util_1.ZodParsedType.array && bType === util_1.ZodParsedType.array) {
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
    else if (aType === util_1.ZodParsedType.date &&
        bType === util_1.ZodParsedType.date &&
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
            if (parseUtil_1.isAborted(parsedLeft) || parseUtil_1.isAborted(parsedRight)) {
                return parseUtil_1.INVALID;
            }
            var merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                parseUtil_1.addIssueToContext(ctx, {
                    code: ZodError_1.ZodIssueCode.invalid_intersection_types,
                });
                return parseUtil_1.INVALID;
            }
            if (parseUtil_1.isDirty(parsedLeft) || parseUtil_1.isDirty(parsedRight)) {
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
        return new ZodIntersection(__assign({ left: left, right: right, typeName: ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(params)));
    };
    return ZodIntersection;
}(ZodType));
exports.ZodIntersection = ZodIntersection;
var ZodTuple = /** @class */ (function (_super) {
    __extends(ZodTuple, _super);
    function ZodTuple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodTuple.prototype._parse = function (input) {
        var _this = this;
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== util_1.ZodParsedType.array) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.array,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                type: "array",
            });
            return parseUtil_1.INVALID;
        }
        var rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
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
                return parseUtil_1.ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return parseUtil_1.ParseStatus.mergeArray(status, items);
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
        return new ZodTuple(__assign({ items: schemas, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(params)));
    };
    return ZodTuple;
}(ZodType));
exports.ZodTuple = ZodTuple;
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
        if (ctx.parsedType !== util_1.ZodParsedType.object) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.object,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
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
            return parseUtil_1.ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
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
            return new ZodRecord(__assign({ keyType: first, valueType: second, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(third)));
        }
        return new ZodRecord(__assign({ keyType: ZodString.create(), valueType: first, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(second)));
    };
    return ZodRecord;
}(ZodType));
exports.ZodRecord = ZodRecord;
var ZodMap = /** @class */ (function (_super) {
    __extends(ZodMap, _super);
    function ZodMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodMap.prototype._parse = function (input) {
        var e_18, _a;
        var _this = this;
        var _b = this._processInputParams(input), status = _b.status, ctx = _b.ctx;
        if (ctx.parsedType !== util_1.ZodParsedType.map) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.map,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
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
                                return [2 /*return*/, parseUtil_1.INVALID];
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
                        return parseUtil_1.INVALID;
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
            keyType: keyType, typeName: ZodFirstPartyTypeKind.ZodMap }, processCreateParams(params)));
    };
    return ZodMap;
}(ZodType));
exports.ZodMap = ZodMap;
var ZodSet = /** @class */ (function (_super) {
    __extends(ZodSet, _super);
    function ZodSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodSet.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== util_1.ZodParsedType.set) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.set,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        var def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                parseUtil_1.addIssueToContext(ctx, {
                    code: ZodError_1.ZodIssueCode.too_small,
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
                parseUtil_1.addIssueToContext(ctx, {
                    code: ZodError_1.ZodIssueCode.too_big,
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
                        return parseUtil_1.INVALID;
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
        return new ZodSet(__assign(__assign({}, this._def), { minSize: { value: minSize, message: errorUtil_1.errorUtil.toString(message) } }));
    };
    ZodSet.prototype.max = function (maxSize, message) {
        return new ZodSet(__assign(__assign({}, this._def), { maxSize: { value: maxSize, message: errorUtil_1.errorUtil.toString(message) } }));
    };
    ZodSet.prototype.size = function (size, message) {
        return this.min(size, message).max(size, message);
    };
    ZodSet.prototype.nonempty = function (message) {
        return this.min(1, message);
    };
    ZodSet.create = function (valueType, params) {
        return new ZodSet(__assign({ valueType: valueType, minSize: null, maxSize: null, typeName: ZodFirstPartyTypeKind.ZodSet }, processCreateParams(params)));
    };
    return ZodSet;
}(ZodType));
exports.ZodSet = ZodSet;
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
        if (ctx.parsedType !== util_1.ZodParsedType.function) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.function,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        function makeArgsIssue(args, error) {
            return parseUtil_1.makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    ZodError_1.getErrorMap(),
                    ZodError_1.defaultErrorMap,
                ].filter(function (x) { return !!x; }),
                issueData: {
                    code: ZodError_1.ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return parseUtil_1.makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    ZodError_1.getErrorMap(),
                    ZodError_1.defaultErrorMap,
                ].filter(function (x) { return !!x; }),
                issueData: {
                    code: ZodError_1.ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        var params = { errorMap: ctx.common.contextualErrorMap };
        var fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            return parseUtil_1.OK(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var error, parsedArgs, result, parsedReturns;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                error = new ZodError_1.ZodError([]);
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
            return parseUtil_1.OK(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var parsedArgs = _this._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                var result = fn.apply(void 0, __spread(parsedArgs.data));
                var parsedReturns = _this._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
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
                : ZodTuple.create([]).rest(ZodUnknown.create())), returns: returns || ZodUnknown.create(), typeName: ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(params)));
    };
    return ZodFunction;
}(ZodType));
exports.ZodFunction = ZodFunction;
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
        return new ZodLazy(__assign({ getter: getter, typeName: ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(params)));
    };
    return ZodLazy;
}(ZodType));
exports.ZodLazy = ZodLazy;
var ZodLiteral = /** @class */ (function (_super) {
    __extends(ZodLiteral, _super);
    function ZodLiteral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodLiteral.prototype._parse = function (input) {
        if (input.data !== this._def.value) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return parseUtil_1.INVALID;
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
        return new ZodLiteral(__assign({ value: value, typeName: ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(params)));
    };
    return ZodLiteral;
}(ZodType));
exports.ZodLiteral = ZodLiteral;
function createZodEnum(values, params) {
    return new ZodEnum(__assign({ values: values, typeName: ZodFirstPartyTypeKind.ZodEnum }, processCreateParams(params)));
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
            parseUtil_1.addIssueToContext(ctx, {
                expected: util_1.util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodError_1.ZodIssueCode.invalid_type,
            });
            return parseUtil_1.INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            var ctx = this._getOrReturnCtx(input);
            var expectedValues = this._def.values;
            parseUtil_1.addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodError_1.ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
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
exports.ZodEnum = ZodEnum;
var ZodNativeEnum = /** @class */ (function (_super) {
    __extends(ZodNativeEnum, _super);
    function ZodNativeEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNativeEnum.prototype._parse = function (input) {
        var nativeEnumValues = util_1.util.getValidEnumValues(this._def.values);
        var ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== util_1.ZodParsedType.string &&
            ctx.parsedType !== util_1.ZodParsedType.number) {
            var expectedValues = util_1.util.objectValues(nativeEnumValues);
            parseUtil_1.addIssueToContext(ctx, {
                expected: util_1.util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodError_1.ZodIssueCode.invalid_type,
            });
            return parseUtil_1.INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            var expectedValues = util_1.util.objectValues(nativeEnumValues);
            parseUtil_1.addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodError_1.ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return parseUtil_1.INVALID;
        }
        return parseUtil_1.OK(input.data);
    };
    Object.defineProperty(ZodNativeEnum.prototype, "enum", {
        get: function () {
            return this._def.values;
        },
        enumerable: false,
        configurable: true
    });
    ZodNativeEnum.create = function (values, params) {
        return new ZodNativeEnum(__assign({ values: values, typeName: ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(params)));
    };
    return ZodNativeEnum;
}(ZodType));
exports.ZodNativeEnum = ZodNativeEnum;
var ZodPromise = /** @class */ (function (_super) {
    __extends(ZodPromise, _super);
    function ZodPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodPromise.prototype._parse = function (input) {
        var _this = this;
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== util_1.ZodParsedType.promise &&
            ctx.common.async === false) {
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        var promisified = ctx.parsedType === util_1.ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return parseUtil_1.OK(promisified.then(function (data) {
            return _this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    };
    ZodPromise.create = function (schema, params) {
        return new ZodPromise(__assign({ type: schema, typeName: ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(params)));
    };
    return ZodPromise;
}(ZodType));
exports.ZodPromise = ZodPromise;
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
                parseUtil_1.addIssueToContext(ctx, arg);
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
                    return parseUtil_1.INVALID;
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
                        return parseUtil_1.INVALID;
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
                if (!parseUtil_1.isValid(base))
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
                    if (!parseUtil_1.isValid(base))
                        return base;
                    // if (base.status === "aborted") return INVALID;
                    // if (base.status === "dirty") {
                    //   return { status: "dirty", value: base.value };
                    // }
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then(function (result) { return ({ status: status.value, value: result }); });
                });
            }
        }
        util_1.util.assertNever(effect);
    };
    ZodEffects.create = function (schema, effect, params) {
        return new ZodEffects(__assign({ schema: schema, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: effect }, processCreateParams(params)));
    };
    ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
        return new ZodEffects(__assign({ schema: schema, effect: { type: "preprocess", transform: preprocess }, typeName: ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(params)));
    };
    return ZodEffects;
}(ZodType));
exports.ZodEffects = ZodEffects;
exports.ZodTransformer = ZodEffects;
var ZodOptional = /** @class */ (function (_super) {
    __extends(ZodOptional, _super);
    function ZodOptional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodOptional.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType === util_1.ZodParsedType.undefined) {
            return parseUtil_1.OK(undefined);
        }
        return this._def.innerType._parse(input);
    };
    ZodOptional.prototype.unwrap = function () {
        return this._def.innerType;
    };
    ZodOptional.create = function (type, params) {
        return new ZodOptional(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
    };
    return ZodOptional;
}(ZodType));
exports.ZodOptional = ZodOptional;
var ZodNullable = /** @class */ (function (_super) {
    __extends(ZodNullable, _super);
    function ZodNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNullable.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType === util_1.ZodParsedType.null) {
            return parseUtil_1.OK(null);
        }
        return this._def.innerType._parse(input);
    };
    ZodNullable.prototype.unwrap = function () {
        return this._def.innerType;
    };
    ZodNullable.create = function (type, params) {
        return new ZodNullable(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(params)));
    };
    return ZodNullable;
}(ZodType));
exports.ZodNullable = ZodNullable;
var ZodDefault = /** @class */ (function (_super) {
    __extends(ZodDefault, _super);
    function ZodDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDefault.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        var data = ctx.data;
        if (ctx.parsedType === util_1.ZodParsedType.undefined) {
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
        return new ZodOptional(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
    };
    return ZodDefault;
}(ZodType));
exports.ZodDefault = ZodDefault;
var ZodNaN = /** @class */ (function (_super) {
    __extends(ZodNaN, _super);
    function ZodNaN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNaN.prototype._parse = function (input) {
        var parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.nan) {
            var ctx = this._getOrReturnCtx(input);
            parseUtil_1.addIssueToContext(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return parseUtil_1.INVALID;
        }
        return { status: "valid", value: input.data };
    };
    ZodNaN.create = function (params) {
        return new ZodNaN(__assign({ typeName: ZodFirstPartyTypeKind.ZodNaN }, processCreateParams(params)));
    };
    return ZodNaN;
}(ZodType));
exports.ZodNaN = ZodNaN;
exports.BRAND = Symbol("zod_brand");
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
exports.ZodBranded = ZodBranded;
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
exports.custom = custom;
exports.late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
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
})(ZodFirstPartyTypeKind = exports.ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = {}));
var instanceOfType = function (cls, params) {
    if (params === void 0) { params = {
        message: "Input not instance of " + cls.name,
    }; }
    return exports.custom(function (data) { return data instanceof cls; }, params, true);
};
exports.instanceof = instanceOfType;
var stringType = ZodString.create;
exports.string = stringType;
var numberType = ZodNumber.create;
exports.number = numberType;
var nanType = ZodNaN.create;
exports.nan = nanType;
var bigIntType = ZodBigInt.create;
exports.bigint = bigIntType;
var booleanType = ZodBoolean.create;
exports.boolean = booleanType;
var dateType = ZodDate.create;
exports.date = dateType;
var undefinedType = ZodUndefined.create;
exports.undefined = undefinedType;
var nullType = ZodNull.create;
exports.null = nullType;
var anyType = ZodAny.create;
exports.any = anyType;
var unknownType = ZodUnknown.create;
exports.unknown = unknownType;
var neverType = ZodNever.create;
exports.never = neverType;
var voidType = ZodVoid.create;
exports.void = voidType;
var arrayType = ZodArray.create;
exports.array = arrayType;
var objectType = ZodObject.create;
exports.object = objectType;
var strictObjectType = ZodObject.strictCreate;
exports.strictObject = strictObjectType;
var unionType = ZodUnion.create;
exports.union = unionType;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
exports.discriminatedUnion = discriminatedUnionType;
var intersectionType = ZodIntersection.create;
exports.intersection = intersectionType;
var tupleType = ZodTuple.create;
exports.tuple = tupleType;
var recordType = ZodRecord.create;
exports.record = recordType;
var mapType = ZodMap.create;
exports.map = mapType;
var setType = ZodSet.create;
exports.set = setType;
var functionType = ZodFunction.create;
exports.function = functionType;
var lazyType = ZodLazy.create;
exports.lazy = lazyType;
var literalType = ZodLiteral.create;
exports.literal = literalType;
var enumType = ZodEnum.create;
exports.enum = enumType;
var nativeEnumType = ZodNativeEnum.create;
exports.nativeEnum = nativeEnumType;
var promiseType = ZodPromise.create;
exports.promise = promiseType;
var effectsType = ZodEffects.create;
exports.effect = effectsType;
exports.transformer = effectsType;
var optionalType = ZodOptional.create;
exports.optional = optionalType;
var nullableType = ZodNullable.create;
exports.nullable = nullableType;
var preprocessType = ZodEffects.createWithPreprocess;
exports.preprocess = preprocessType;
var ostring = function () { return stringType().optional(); };
exports.ostring = ostring;
var onumber = function () { return numberType().optional(); };
exports.onumber = onumber;
var oboolean = function () { return booleanType().optional(); };
exports.oboolean = oboolean;
