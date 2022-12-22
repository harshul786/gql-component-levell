"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://countries.trevorblades.com\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxNQUFNRSxTQUFTLElBQUlGLHdEQUFZQSxDQUFDO0lBQzlCRyxLQUFLO0lBQ0xDLE9BQU8sSUFBSUgseURBQWFBO0FBQzFCO0FBRUEsaUVBQWVDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vYXBvbGxvLWNsaWVudC5qcz8zY2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiBcImh0dHBzOi8vY291bnRyaWVzLnRyZXZvcmJsYWRlcy5jb21cIixcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./components/CountryList/index.jsx":
/*!******************************************!*\
  !*** ./components/CountryList/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CountryList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo-client */ \"./apollo-client.js\");\n\n\n\nconst QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query Countries {\n    countries {\n      code\n      name\n      emoji\n    }\n  }\n`;\nfunction CountryList() {\n    const { data , loading , error  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(QUERY);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/components/CountryList/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        console.error(error);\n        return null;\n    }\n    const countries = data.countries.slice(0, 4);\n    console.log(countries);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-xl flex gap-4\",\n            children: [\n                countries[0]?.name,\n                \" \",\n                countries[0]?.emoji\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/components/CountryList/index.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50cnlMaXN0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQztBQUNOO0FBRXpDLE1BQU1HLFFBQVFGLCtDQUFHLENBQUM7Ozs7Ozs7O0FBUWxCLENBQUM7QUFFYyxTQUFTRyxjQUFjO0lBQ3BDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFHUCx3REFBUUEsQ0FBQ0c7SUFDMUMsSUFBSUcsU0FBUztRQUNYLHFCQUFPLDhEQUFDRTtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlELE9BQU87UUFDVEUsUUFBUUYsS0FBSyxDQUFDQTtRQUNkLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNRyxZQUFZTCxLQUFLSyxTQUFTLENBQUNDLEtBQUssQ0FBQyxHQUFHO0lBRTFDRixRQUFRRyxHQUFHLENBQUNGO0lBQ1oscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVU7O2dCQUNaSixTQUFTLENBQUMsRUFBRSxFQUFFSztnQkFBSztnQkFBRUwsU0FBUyxDQUFDLEVBQUUsRUFBRU07Ozs7Ozs7O0FBSzVDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vY29tcG9uZW50cy9Db3VudHJ5TGlzdC9pbmRleC5qc3g/NjdjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9hcG9sbG8tY2xpZW50XCI7XG5cbmNvbnN0IFFVRVJZID0gZ3FsYFxuICBxdWVyeSBDb3VudHJpZXMge1xuICAgIGNvdW50cmllcyB7XG4gICAgICBjb2RlXG4gICAgICBuYW1lXG4gICAgICBlbW9qaVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRyeUxpc3QoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFFVRVJZKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGgyPkxvYWRpbmcuLi48L2gyPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY291bnRyaWVzID0gZGF0YS5jb3VudHJpZXMuc2xpY2UoMCwgNCk7XG5cbiAgY29uc29sZS5sb2coY291bnRyaWVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZsZXggZ2FwLTRcIj5cbiAgICAgICAge2NvdW50cmllc1swXT8ubmFtZX0ge2NvdW50cmllc1swXT8uZW1vaml9XG4gICAgICAgIHsvKiB5b28gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsImNsaWVudCIsIlFVRVJZIiwiQ291bnRyeUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaDIiLCJjb25zb2xlIiwiY291bnRyaWVzIiwic2xpY2UiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiZW1vamkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CountryList/index.jsx\n");

/***/ }),

/***/ "./components/clientOnly/index.jsx":
/*!*****************************************!*\
  !*** ./components/clientOnly/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientOnly)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ClientOnly({ children , ...delegated }) {\n    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setHasMounted(true);\n    }, []);\n    if (!hasMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...delegated,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/components/clientOnly/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsaWVudE9ubHkvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFFN0IsU0FBU0UsV0FBVyxFQUFFQyxTQUFRLEVBQUUsR0FBR0MsV0FBVyxFQUFFO0lBQzdELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLGNBQWMsSUFBSTtJQUNwQixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFlBQVk7UUFDZixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQscUJBQU8sOERBQUNFO1FBQUssR0FBR0gsU0FBUztrQkFBR0Q7Ozs7OztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvamVjdC8uL2NvbXBvbmVudHMvY2xpZW50T25seS9pbmRleC5qc3g/M2MyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudE9ubHkoeyBjaGlsZHJlbiwgLi4uZGVsZWdhdGVkIH0pIHtcbiAgY29uc3QgW2hhc01vdW50ZWQsIHNldEhhc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SGFzTW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghaGFzTW91bnRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxkaXYgey4uLmRlbGVnYXRlZH0+e2NoaWxkcmVufTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsaWVudE9ubHkiLCJjaGlsZHJlbiIsImRlbGVnYXRlZCIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/clientOnly/index.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var _components_CountryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountryList */ \"./components/CountryList/index.jsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_clientOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clientOnly */ \"./components/clientOnly/index.jsx\");\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n            client: _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_clientOnly__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CountryList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ2M7QUFDSjtBQUNFO0FBRW5DLFNBQVNJLE9BQU87SUFDN0IscUJBQ0U7a0JBSUUsNEVBQUNGLDBEQUFjQTtZQUFDRixRQUFRQSxzREFBTUE7c0JBQzVCLDRFQUFDRyw4REFBVUE7MEJBQ1QsNEVBQUNGLCtEQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvamVjdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IENvdW50cnlMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50cnlMaXN0XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IENsaWVudE9ubHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50T25seVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZsZXggZ2FwLTRcIj5cbiAgICAgICAge2NvdW50cmllc1swXT8ubmFtZX0ge2NvdW50cmllc1swXT8uZW1vaml9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8Q2xpZW50T25seT5cbiAgICAgICAgICA8Q291bnRyeUxpc3QgLz5cbiAgICAgICAgPC9DbGllbnRPbmx5PlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJDb3VudHJ5TGlzdCIsIkFwb2xsb1Byb3ZpZGVyIiwiQ2xpZW50T25seSIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();