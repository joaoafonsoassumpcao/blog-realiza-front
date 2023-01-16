"use strict";
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 1243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2940);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const AuthContextProvider = ({ children  })=>{
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const login = async (inputs)=>{
        try {
            const res = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/login", inputs);
            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(null, "token", res.data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/"
            });
            setCurrentUser(res.data.user);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    const logout = async (inputs)=>{
        const res = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/api/logout");
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "token");
        setCurrentUser(null);
        router.push("/login");
    };
    const fetchUser = async ()=>{
        const { token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
        if (!token) return;
        try {
            const res = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("/api/me");
            setCurrentUser(res.data.user);
        } catch (error) {
            console.log(error);
            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "token");
            setCurrentUser(null);
            router.push("/login");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchUser();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            currentUser,
            login,
            logout
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// config
// ----------------------------------------------------------------------
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:3030"
});
axiosInstance.interceptors.response.use((response)=>response, (error)=>Promise.reject(error.response && error.response.data || "Something went wrong"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;