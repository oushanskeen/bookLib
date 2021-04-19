"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppGateway = void 0;
var websockets_1 = require("@nestjs/websockets");
var common_1 = require("@nestjs/common");
var AppGateway = /** @class */ (function () {
    function AppGateway() {
        this.logger = new common_1.Logger('AppGateway');
    }
    AppGateway.prototype.afterInit = function (server) {
        this.logger.log('Initialized!');
    };
    AppGateway.prototype.handleDisconnect = function (client) {
        this.logger.log("Client disconnected: " + client.id);
    };
    AppGateway.prototype.handleConnection = function (client) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.logger.log("Client connected: " + client.id);
    };
    AppGateway.prototype.handleMessage = function (client, text) {
        //if for all then
        //this.wss.emit('msgToClient',text);
        //if to one
        // aka client.emit('msgToClient', text:'Hello world!');
        return { event: 'msgToClient', data: text };
    };
    __decorate([
        websockets_1.WebSocketServer()
    ], AppGateway.prototype, "wss");
    __decorate([
        websockets_1.SubscribeMessage('msgToServer')
    ], AppGateway.prototype, "handleMessage");
    AppGateway = __decorate([
        websockets_1.WebSocketGateway()
    ], AppGateway);
    return AppGateway;
}());
exports.AppGateway = AppGateway;
