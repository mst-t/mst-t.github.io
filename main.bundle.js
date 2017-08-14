webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Account Service class
 * @class
 * @description
 * Store and provides data of the user's account.
 */
var AccountService = (function () {
    function AccountService(router) {
        this.router = router;
        this.isLogin = false;
    }
    /**
     * Sign up the user and back to the home.
     * If the user already exist in the firebase, an error message will be displayed.
     */
    AccountService.prototype.signUp = function (user) {
        var self = this;
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(function () {
            self.isLogin = true;
            self.router.navigate(['']);
        })
            .catch(function (error) {
            alert(error.message);
        });
    };
    /**
     * Login the user and back to the home.
     * If the user does not exist in the firebase, an error message will be displayed.
     */
    AccountService.prototype.login = function (user) {
        var self = this;
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(function () {
            self.isLogin = true;
            self.router.navigate(['']);
        })
            .catch(function (error) {
            alert(error.message);
        });
    };
    /**
     * Logout the user and back to the home.
     */
    AccountService.prototype.logout = function () {
        this.isLogin = false;
        firebase.auth().signOut();
        this.router.navigate(['']);
    };
    /**
     * Check the login status of the user.
     * @returns {boolean} isLogin Login status
     */
    AccountService.prototype.getLoginStatus = function () {
        return this.isLogin;
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/account.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Work; });
var Work = (function () {
    function Work(name, description, imagePath, gitUrl, activeUrl, skills) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.gitUrl = gitUrl;
        this.activeUrl = activeUrl;
        this.skills = skills;
    }
    return Work;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/work.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.isOpen = false;
        this.message = 'Read More';
        this.skills = [
            { "title": 'Language:',
                "items": ['HTML5', 'CSS3', 'JavaScript', 'ECMAScript 6', 'TypeScript', 'Python', 'Java'] },
            { "title": 'Library and Framework:',
                "items": ['jQuery', 'Bootstrap', 'Jasmine', 'AngularJs', 'Angular', 'Knockout', 'Node', 'Express'] },
            { "title": 'Knowledge:',
                "items": [
                    'MVVM Pattern', 'Object Oriented Programming', 'Test-driven Development',
                    'SPA Developement', 'Ajax', 'Promise', 'Google Map API', 'SQL', 'MongoDB'] },
            { "title": 'Tool:',
                "items": ['Git', 'Bower', 'Firebase', "mLab", "Heroku"] }
        ];
    }
    /**
     * Display or hide text.
     */
    AboutComponent.prototype.onReadMore = function () {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.message = 'Hide Text';
        }
        else {
            this.message = 'Read More';
        }
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-about',
            template: __webpack_require__(677),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/about.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.isUser = true;
        this.buttonValue = "Login";
        this.linkValue = "Sign Up";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['example@example.com', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['password', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
    };
    /**
     * Login or Sign up according to the user's selection.
     */
    LoginComponent.prototype.onAuth = function () {
        if (this.isUser) {
            this.accountService.login(this.myForm.value);
        }
        else {
            this.accountService.signUp(this.myForm.value);
        }
    };
    /**
     * Select "Login" or "SIgn Up".
     */
    LoginComponent.prototype.onSwitchAction = function () {
        this.isUser = !this.isUser;
        if (this.isUser) {
            this.buttonValue = "Login";
            this.linkValue = "Sign Up";
        }
        else {
            this.buttonValue = "Sign Up";
            this.linkValue = "Login";
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-login',
            template: __webpack_require__(678),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/login.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_work_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(workService) {
        this.workService = workService;
        this.works = [];
        this.works = this.workService.getWorks();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-home',
            template: __webpack_require__(681),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__work_work_service__["a" /* WorkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__work_work_service__["a" /* WorkService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/home.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkAddComponent = (function () {
    function WorkAddComponent(fb, workService) {
        this.fb = fb;
        this.workService = workService;
        this.imagePath = './assets/images/gallery.jpeg';
    }
    WorkAddComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: ['Art Gallery', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: "You can add your work. Currently, you cannot save data in the database. You can only see how your work will be added to the home.",
            imagePath: [this.imagePath, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            gitUrl: "https://example.com",
            activeUrl: "",
            skills: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormArray */]([new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('HTML'), new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('CSS')])
        });
    };
    /**
     * Create a "skill".
     */
    WorkAddComponent.prototype.onAddItem = function () {
        var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]([null]);
        this.myForm.get('skills').push(control);
    };
    /**
     * Delete a "skill"
     * @param {number} index the index of the skills array.
     */
    WorkAddComponent.prototype.onDeleteItem = function (index) {
        this.myForm.controls['skills'].removeAt(index);
    };
    /**
     * Create a work information by pressing the "Save" button.
     */
    WorkAddComponent.prototype.onSaveWork = function () {
        this.workService.addWork(new __WEBPACK_IMPORTED_MODULE_2__work__["a" /* Work */](this.myForm.value.name, this.myForm.value.description, this.myForm.value.imagePath, this.myForm.value.gitUrl, this.myForm.value.activeUrl, this.myForm.value.skills));
    };
    WorkAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-work-add',
            template: __webpack_require__(682),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */]) === 'function' && _b) || Object])
    ], WorkAddComponent);
    return WorkAddComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/work-add.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkDetailComponent = (function () {
    function WorkDetailComponent(workService, router, activatedRoute, accountService) {
        var _this = this;
        this.workService = workService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.subscription = activatedRoute.params.subscribe(function (param) {
            _this.id = param['id'];
            _this.work = _this.workService.getWork(+_this.id);
        });
    }
    WorkDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Check the login status of the user.
     * @returns {boolean} isLogin Login status
     */
    WorkDetailComponent.prototype.onLoginStatus = function () {
        return this.accountService.getLoginStatus();
    };
    WorkDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-work-detail',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__work_service__["a" /* WorkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__work_service__["a" /* WorkService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */]) === 'function' && _d) || Object])
    ], WorkDetailComponent);
    return WorkDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/work-detail.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkEditComponent = (function () {
    function WorkEditComponent(workService, router, activatedRoute, accountService, fb) {
        var _this = this;
        this.workService = workService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.fb = fb;
        this.subscription = activatedRoute.params.subscribe(function (param) {
            _this.id = param['id'];
            _this.work = _this.workService.getWork(+_this.id);
        });
    }
    WorkEditComponent.prototype.ngOnInit = function () {
        this.imagePath = this.work.imagePath;
        this.myForm = this.fb.group({
            name: this.work.name,
            description: this.work.description,
            imagePath: this.work.imagePath,
            gitUrl: this.work.gitUrl,
            activeUrl: this.work.activeUrl,
            skills: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormArray */]([new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('HTML')])
        });
        var len = this.work.skills.length;
        for (var i = 0; i < len; i++) {
            this.myForm.get('skills').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](this.work.skills[i]));
        }
    };
    WorkEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Create a "skill".
     */
    WorkEditComponent.prototype.onAddItem = function () {
        var control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]([null]);
        this.myForm.get('skills').push(control);
    };
    /**
     * Delete a "skill".
     * @param {number} index the index of the skills array
     */
    WorkEditComponent.prototype.onDeleteItem = function (index) {
        this.myForm.controls['skills'].removeAt(index);
    };
    /**
     * Update a work information by cliciking on the "Save" button.
     */
    WorkEditComponent.prototype.onUpdateWork = function () {
        var work = new __WEBPACK_IMPORTED_MODULE_3__work__["a" /* Work */](this.myForm.value.name, this.myForm.value.description, this.myForm.value.imagePath, this.myForm.value.gitUrl, this.myForm.value.activeUrl, this.myForm.value.skills);
        this.workService.updateWork(+this.id, work);
    };
    WorkEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-work-edit',
            template: __webpack_require__(684),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__work_service__["a" /* WorkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__work_service__["a" /* WorkService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__account_account_service__["a" /* AccountService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === 'function' && _e) || Object])
    ], WorkEditComponent);
    return WorkEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/work-edit.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(679),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_login_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__work_work_add_work_add_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__work_work_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__work_work_detail_work_detail_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__work_work_edit_work_edit_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__account_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__work_work_add_work_add_component__["a" /* WorkAddComponent */],
                __WEBPACK_IMPORTED_MODULE_14__work_work_detail_work_detail_component__["a" /* WorkDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__work_work_detail_work_detail_component__["a" /* WorkDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__work_work_edit_work_edit_component__["a" /* WorkEditComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_13__work_work_service__["a" /* WorkService */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_work_add_work_add_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work_detail_work_detail_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_work_edit_work_edit_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'aboutme', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__account_login_component__["a" /* LoginComponent */] },
    { path: 'work-add', component: __WEBPACK_IMPORTED_MODULE_4__work_work_add_work_add_component__["a" /* WorkAddComponent */] },
    { path: 'work-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__work_work_detail_work_detail_component__["a" /* WorkDetailComponent */] },
    { path: 'work-edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__work_work_edit_work_edit_component__["a" /* WorkEditComponent */] },
    { path: '**', redirectTo: '/home' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/app.routing.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_work_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(accountService, workService) {
        this.accountService = accountService;
        this.workService = workService;
        this.isLogin = false;
    }
    /**
     * Logout the user
     */
    HeaderComponent.prototype.onLogout = function () {
        this.accountService.logout();
    };
    /**
     * Check the login status of the user.
     * @returns {boolean} isLogin Login status
     */
    HeaderComponent.prototype.onLoginStatus = function () {
        return this.accountService.getLoginStatus();
    };
    /**
     * Reset the works to the default values by pressing "Reset" in the header.
     */
    HeaderComponent.prototype.onReset = function () {
        this.workService.resetWorks();
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallery-header',
            template: __webpack_require__(680),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__work_work_service__["a" /* WorkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__work_work_service__["a" /* WorkService */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/header.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/environment.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "div {\r\n  background-color: white;\r\n  margin: 1.5em auto 4em auto;\r\n  padding: 1em;\r\n  width: 70%;\r\n}\r\n\r\np {\r\n  font-size: 1.5em;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding-left: 0;\r\n}\r\n\r\nli {\r\n  background-color: #F0E68C;\r\n  margin: 0.5em;\r\n  padding: 0.5em;\r\n}\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin: 1em 0;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "nav {\r\n  margin-bottom: 0;\r\n}\r\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 60%;\r\n  height: auto;\r\n  margin: 2em auto 5em auto;\r\n}\r\n\r\nimg:hover {\r\n  background-color: lightgrey;\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".row {\r\n  margin-top: 2em;\r\n}\r\n\r\n#description {\r\n  height: 10em;\r\n}\r\n\r\n.add {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.skills {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.skills input {\r\n  width: 75%;\r\n}\r\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "img {\r\n  margin-top: 2em;\r\n}\r\n\r\np {\r\n  font-size: 18px;\r\n  padding: 0 1em 1em 1em;\r\n  border-bottom: solid 2px grey;\r\n}\r\n\r\nh4 {\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n    background-color: #F0E68C;\r\n    margin: 0.5em;\r\n    padding: 0.5em;\r\n}\r\n\r\nbutton {\r\n  margin-top: 1em;\r\n}\r\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".row {\r\n  margin-top: 2em;\r\n}\r\n\r\n#description {\r\n  height: 10em;\r\n}\r\n\r\n.add {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.skills {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.skills input {\r\n  width: 75%;\r\n}\r\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div>\n    <h3>About Me</h3>\n    <p>\n      Welcome to my website. Currently I am working as an instructor to teach <a href=\"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001\">Front End Web Development</a> at <a href=\"https://www.udacity.com/\">Udacity</a> which provides massive open online courses.\n      I like my current job, but now I am thinking of finding a more challenging job. I am looking for a job that I can use modern frameworks, especially in Angular. I hope that I can work with you!\n    </p>\n  </div>\n  <div>\n    <h3>My Skills and Knowledge</h3>\n    <section *ngFor=\"let items of skills\">\n      <h4>{{items.title}}</h4>\n      <ul>\n        <li *ngFor=\"let item of items.items\">{{item}}</li>\n      </ul>\n    </section>\n  </div>\n  <div>\n    <h3>My Career</h3>\n    <p>\n      It may sound strange, but I started my career as a translator for English and Japanese.\n      And for several reasons, I have become a front end developer. (If you are interested in my career, please press the button below.)\n    </p>\n    <button class=\"btn btn-success\" (click)=\"onReadMore()\">{{message}}</button>\n  </div>\n  <div *ngIf=\"isOpen\">\n    <h3>Translator to Junior Android Developper</h3>\n    <p>\n      I worked with IT team after joining the <a href=\"http://nationalsoftware.co.jp/\">first company</a> in my career. Shortly after I started working there, I became more familiar with Android documentation and our product specification than anyone in the company.\n      In retrospect, fortunately, my boss asked me if I wanted to code as well. (In fact, they were so busy that they needed a person who knows the specifications anyway). My programmer's career started at this time. I studied hard and made several Android applications to test our products. Also, I implemented APIs handling SQLite based on the concept of REST.\n    </p>\n  </div>\n  <div *ngIf=\"isOpen\">\n    <h3>Udacity Student</h3>\n    <p>\n      I had to study programming more intensively. I looked for useful resources in both English and Japanese. Finally, I found something wonderful. That was Udacity.\n      What I really needed was basic knowledge of programming, so I began a basic Python course. At the same time, I learned basic HTML, CSS, and JavaScript. jQuery looked magical. After finishing those basic courses, I started another course. It was the \"Web Development\" course and it changed my life.\n      Through the course, I learned many new concepts. Advanced HTML and CSS, the template engine, basic SQL queries, routing, Ajax, and so on. At the end of the course, I submitted a simple blog-like website to Udacity. Thanks to my work experience, my code was well organized and modularized. Then, after an interview, I was invited to work with Udacity's coaches. I had no reason to refuse it.\n    </p>\n  </div>\n  <div *ngIf=\"isOpen\">\n    <h3>Join Udacity Team</h3>\n    <p>\n      The team was new and interesting. Back then, I did not have much experience in front-end development, but since I was really interested in that field, I asked them if I could join the front-end team. They were tolerant! I learned in a hurry some Udacity courses related to the field. Through this process, my skills of front-end development had dramatically improved. In addition, by teaching students, my knowledge has been more organized.\n      <br>\n      <br>\n      This is my story from a translator to a front end developper. Thanks!\n    </p>\n  </div>\n</main>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Please Login to use all features</h3>\n  <br>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onAuth()\">\n      <div class=\"form-group\">\n          <label for=\"email\">E-Mail</label>\n          <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">{{buttonValue}}</button>\n  </form>\n  <a (click)=\"onSwitchAction()\">{{linkValue}}?</a>\n</div>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<gallery-header></gallery-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['']\">Gallery</a>\n    </div>\n\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/aboutme']\">About Me</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/work-add']\" *ngIf=\"onLoginStatus()\">Add Work</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['']\" (click)=\"onReset()\">Reset</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/login']\" *ngIf=\"!onLoginStatus()\">Login/Sign up</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['']\" (click)=\"onLogout()\" *ngIf=\"onLoginStatus()\">Logout</a></li>\n    </ul>\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let work of works; let i = index\">\n      <h3>{{work.name}}</h3>\n      <a [routerLink]=\"['/work-detail', i]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: false}\">\n        <img src=\"{{work.imagePath}}\" class=\"img-responsive\">\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"{{imagePath}}\" class=\"img-responsive\">\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"workTitle\">Title</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workImage\">Image</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"imagePath\"\n                 formControlName=\"imagePath\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workDescription\">Description</label>\n          <textarea\n            class=\"form-control\"\n            id=\"description\"\n            formControlName=\"description\">\n          </textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workGitUrl\">Git URL</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"gitUrl\"\n                 formControlName=\"gitUrl\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"activeUrl\">Active Web Application</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"activeUrl\"\n                 formControlName=\"activeUrl\">\n        </div>\n        <div formArrayName=\"skills\">\n          <p><b>Skills</b></p>\n          <button class=\"btn btn-success add\" type=\"button\" (click)=\"onAddItem()\">+</button>\n          <div class=\"form-group skills\" *ngFor=\"let skill of myForm.controls['skills'].controls; let i = index\">\n            <input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDeleteItem(i)\">X</button>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [routerLink]=\"['']\" (click)=\"onSaveWork()\">Save</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"{{work.imagePath}}\" class=\"img-responsive\">\n    </div>\n    <div class=\"col-md-6\">\n      <h3 class=\"text-center\">{{work.name}}</h3>\n      <p>{{work.description}}</p>\n      <h4 *ngIf=\"work.skills.length\">Required Skills</h4>\n      <ul>\n        <li *ngFor=\"let item of work.skills\">{{item}}</li>\n      </ul>\n      <h4 *ngIf=\"work.gitUrl\">Git URL</h4>\n      <a href=\"{{work.gitUrl}}\" target=\"_blank\">{{work.gitUrl}}</a>\n      <h4 *ngIf=\"work.activeUrl\">Active Web Application</h4>\n      <a href=\"{{work.activeUrl}}\" target=\"_blank\">{{work.activeUrl}}</a>\n      <br>\n      <button *ngIf=\"onLoginStatus()\" class=\"btn btn-success\" [routerLink]=\"['/work-edit', id]\">Edit</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"{{imagePath}}\" class=\"img-responsive\">\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"workTitle\">Title</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workImage\">Image</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"imagePath\"\n                 formControlName=\"imagePath\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workDescription\">Description</label>\n          <textarea\n            class=\"form-control\"\n            id=\"description\"\n            formControlName=\"description\">\n          </textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"workGitUrl\">Git URL</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"gitUrl\"\n                 formControlName=\"gitUrl\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"activeUrl\">Active Web Application</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"activeUrl\"\n                 formControlName=\"activeUrl\">\n        </div>\n        <div formArrayName=\"skills\">\n          <p><b>Skills</b></p>\n          <button class=\"btn btn-success add\" type=\"button\" (click)=\"onAddItem()\">+</button>\n          <div class=\"form-group skills\" *ngFor=\"let skill of myForm.controls['skills'].controls; let i = index\">\n            <input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDeleteItem(i)\">X</button>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [routerLink]=\"['']\" (click)=\"onUpdateWork()\">Save</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Work Service class
 * @class
 * @description
 * Store and provides data of works.
 */
var WorkService = (function () {
    function WorkService() {
        this.works = [
            new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]("Favorite Article Clipper", "This application, named \"Favorii\", allows users to keep a favorite article with a short summary in their local storage.\n       Once users enter url and press \"save\" or the enter key, the title, url, and a short sumarry are saved.\n       The front-end is AngularJs and the back-end is Node. In addition, AYLIEN API is used to get a summary of articles.", "./assets/images/favorii.png", "https://github.com/mst-t/Favorite-Article-Clipper", "https://sheltered-savannah-96980.herokuapp.com/", ["AngularJs(v-1.6)", "Express", "Node.js", "ECMAScript 6", "Bootstrap", "AYLIEN API"]),
            new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]("Blackboard", "This is a simple TODO application powerd by MEAN stack. You can get, create, update, and delete messages using REST APIs.\n       The web application is hosted on Heroku and the database is running on mLab. Click on the choke to enable or disable edit mode.\n      ", "/assets/images/blackboard.png", "https://github.com/mst-t/blackboard", "https://sheltered-retreat-34258.herokuapp.com/", ["Angular4", "MongoDB", "Express", "Node", "Promise", "Angular CLI", "HTML5", "CSS3", "Bootstrap"]),
            new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]("Gallery Website", "This is a single page application created using Angular(Angular4). Authentication function is implemented using Firebase.\n       I am currently using this application as my portfolio, so the function is restricted.\n       After signing up or logging in, the user can add, change, or delete information temporarily.\n       Changed data will not be saved. When you press Reset or reload the webpage, the changed data will return to the initial state.\n      ", "/assets/images/gallery.png", "https://github.com/mst-t/gallery-website", "https://mst-t.github.io", ["Angular4", "Firebase", "Auth", "Promise", "Angular CLI", "HTML5", "CSS3", "Bootstrap"]),
            new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]("Portfolio Design", "This is a web page created using Bootstrap, based on grid layout.\n       I realized the responsive portfolio website with a concise and easy-to-see design.\n       Also, I have implemented some animations using jQuery. The pictures show my favorite things.\n      ", "./assets/images/portfolio.png", "https://github.com/mst-t/portfolio-design", "https://psychiatrist-goat-68182.netlify.com/", ["HTML5", "CSS3", "Bootstrap", "jQuery", "Animation", "Grid Layout", "Bower"]),
            new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]("Montreal Island Map", "This is a Udacity project created to learn the MVVM pattern and Knockout.js\n       which is one of the JavaScript frameworks useful for creating single-page applications.\n       Icons and list items are displayed using the Google Map API and Knockout functions.\n       By clicking on them, the information on the location is displayed on the map using the Wikipedia API.\n       Also, I adopted the flat design, changed the design of the map, and selected icons suitable for it.\n      ", "./assets/images/neighborhoodMap.png", "https://github.com/mst-t/neighborhood-map", "http://driver-polecat-44588.netlify.com", ["KnockoutJs", "Google Map API", "Wikipedia API", "MVVM Pattern", "Ajax", "Google Map Customization", "Flat Design"]),
        ];
        this.defaultWorks = this.works.concat();
    }
    /**
     * Return works.
     * @returns {Array<Work>} works
     */
    WorkService.prototype.getWorks = function () {
        return this.works;
    };
    /**
     * Return a work object.
     * @param {number} id Id of work
     * @returns {Work} Work object specified by id
     */
    WorkService.prototype.getWork = function (id) {
        return this.works[id];
    };
    /**
     * Append a work to the works.
     * @param {Work}
     */
    WorkService.prototype.addWork = function (work) {
        this.works.push(work);
    };
    /**
     * Update a work in the works.
     * @param {number} id Id of work
     * @param {Work} work
     */
    WorkService.prototype.updateWork = function (id, work) {
        this.works[id] = work;
    };
    /**
     * Reset the works to the default values.
     */
    WorkService.prototype.resetWorks = function () {
        this.works = this.defaultWorks.concat();
        window.location.reload();
    };
    WorkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], WorkService);
    return WorkService;
}());
//# sourceMappingURL=C:/Users/u4569/Desktop/workplace/PortfolioWork/Gallery Site/gallery-site/src/work.service.js.map

/***/ })

},[703]);
//# sourceMappingURL=main.bundle.map