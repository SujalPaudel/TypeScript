"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
function echo(arg) {
    return arg;
}
var myString = echo('Raju');
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(classes_1.Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(classes_1.Person));
var admin = new Admin('Raj', 'Rajmulla');
var manager = new Manager('Hari', 'Prasad');
// any parameter that's passed to personEcho has to be an extension of Person class
// place holder + restriction
function personEcho(person) {
    return person;
}
var foo = personEcho(admin);
var bar = personEcho(manager);
