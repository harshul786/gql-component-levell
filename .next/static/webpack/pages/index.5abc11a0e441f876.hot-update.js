"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CountryList/index.jsx":
/*!******************************************!*\
  !*** ./components/CountryList/index.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CountryList; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"../../../node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo-client */ \"./apollo-client.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n      query Counteries {\\n        countries {\\n          name\\n          code\\n          emoji\\n        }\\n      }\\n    \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nasync function getStaticProps() {\n    const { data  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query({\n        query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject())\n    });\n    return {\n        props: {\n            countries: data.countries.slice(0, 4)\n        }\n    };\n}\nfunction CountryList(param) {\n    let { countries  } = param;\n    console.log(countries);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"text-xl flex gap-4\",\n            children: \"yoo\"\n        }, void 0, false, {\n            fileName: \"/Users/harshul/Documents/hygraph-demo-project/my-project/components/CountryList/index.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = CountryList;\nvar _c;\n$RefreshReg$(_c, \"CountryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50cnlMaXN0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0k7QUFFbEMsZUFBZUUsaUJBQWlCO0lBQ3JDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTUYsNERBQVksQ0FBQztRQUNsQ0csS0FBSyxFQUFFSixtREFBR0E7SUFTWjtJQUVBLE9BQU87UUFDTEssT0FBTztZQUNMQyxXQUFXSCxLQUFLRyxTQUFTLENBQUNDLEtBQUssQ0FBQyxHQUFHO1FBQ3JDO0lBQ0Y7QUFDRixDQUFDO0FBRWMsU0FBU0MsWUFBWSxLQUFhLEVBQUU7UUFBZixFQUFFRixVQUFTLEVBQUUsR0FBYjtJQUNsQ0csUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFJQyxXQUFVO3NCQUNxQzs7Ozs7OztBQUsxRCxDQUFDO0tBVnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvdW50cnlMaXN0L2luZGV4LmpzeD82N2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vYXBvbGxvLWNsaWVudFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgQ291bnRlcmllcyB7XG4gICAgICAgIGNvdW50cmllcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGNvZGVcbiAgICAgICAgICBlbW9qaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY291bnRyaWVzOiBkYXRhLmNvdW50cmllcy5zbGljZSgwLCA0KSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5TGlzdCh7IGNvdW50cmllcyB9KSB7XG4gIGNvbnNvbGUubG9nKGNvdW50cmllcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmbGV4IGdhcC00XCI+XG4gICAgICAgIHsvKiB7Y291bnRyaWVzWzBdPy5uYW1lfSB7Y291bnRyaWVzWzBdPy5lbW9qaX0gKi99XG4gICAgICAgIHlvb1xuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwiY2xpZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwicXVlcnkiLCJwcm9wcyIsImNvdW50cmllcyIsInNsaWNlIiwiQ291bnRyeUxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CountryList/index.jsx\n"));

/***/ })

});