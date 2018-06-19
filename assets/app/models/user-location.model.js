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
var UserLocation = /** @class */ (function () {
    function UserLocation(lat, lng, userId, userName) {
        if (lat === void 0) { lat = 0; }
        if (lng === void 0) { lng = 0; }
        if (userId === void 0) { userId = null; }
        if (userName === void 0) { userName = ""; }
        this.lat = lat;
        this.lng = lng;
        this.userId = userId;
        this.userName = userName;
    }
    return UserLocation;
}());
export { UserLocation };
var UserLocationView = /** @class */ (function (_super) {
    __extends(UserLocationView, _super);
    function UserLocationView(userLocation) {
        var _this = _super.call(this, userLocation.lat, userLocation.lng, userLocation.userId, userLocation.userName) || this;
        //get user data from server
        return _this;
    }
    return UserLocationView;
}(UserLocation));
export { UserLocationView };
