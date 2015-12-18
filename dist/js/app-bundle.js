webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(223);
	var home_component_1 = __webpack_require__(247);
	browser_1.bootstrap(home_component_1.AppComponent, [
	    router_1.ROUTER_PROVIDERS
	]);


/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(223);
	var http_1 = __webpack_require__(248);
	var dashboard_component_1 = __webpack_require__(263);
	var data_service_1 = __webpack_require__(265);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.title = "Tour of Heroes";
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: "my-app",
	            template: __webpack_require__(266),
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [data_service_1.default, http_1.Http, http_1.HTTP_PROVIDERS]
	        }),
	        router_1.RouteConfig([
	            { path: "/", name: "Dashboard", component: dashboard_component_1.DashboardComponent, useAsDefault: true },
	            { path: "/heroes", name: "Heroes", component: dashboard_component_1.DashboardComponent },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(223);
	var dashboard_service_1 = __webpack_require__(264);
	var DashboardComponent = (function () {
	    function DashboardComponent(_dashboardService, _router) {
	        this._dashboardService = _dashboardService;
	        this._router = _router;
	        this.heroes = [];
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	        this._dashboardService.getHeroes();
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: "my-dashboard",
	            templateUrl: "app/components/dashboard/dashboard.component.html",
	            providers: [dashboard_service_1.DashboardService]
	        }), 
	        __metadata('design:paramtypes', [dashboard_service_1.DashboardService, router_1.Router])
	    ], DashboardComponent);
	    return DashboardComponent;
	})();
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var data_service_1 = __webpack_require__(265);
	var DashboardService = (function () {
	    function DashboardService(_dataService) {
	        this._dataService = _dataService;
	    }
	    DashboardService.prototype.getHeroes = function () {
	        this._dataService.getData("services/dashboard.json");
	    };
	    DashboardService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [data_service_1.default])
	    ], DashboardService);
	    return DashboardService;
	})();
	exports.DashboardService = DashboardService;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var http_1 = __webpack_require__(248);
	var DataService = (function () {
	    function DataService(_http) {
	        this._http = _http;
	    }
	    DataService.prototype.getData = function (restUrl) {
	        var _this = this;
	        console.log(restUrl);
	        this._http.get(restUrl).subscribe(function (res) {
	            _this.people = res.json();
	            console.log(res);
	        });
	    };
	    DataService = __decorate([
	        core_1.Component({}),
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], DataService);
	    return DataService;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DataService;


/***/ },

/***/ 266:
/***/ function(module, exports) {

	module.exports = " <div class=\"ng2-home\">\n  \t<h1>{{title}}</h1>\n  \t    <a [routerLink]=\"['Dashboard']\">Dashboard</a> \n    <a [routerLink]=\"['Heroes']\">Heroes</a>\n    <router-outlet></router-outlet>\n </div>\t\n";

/***/ }

});