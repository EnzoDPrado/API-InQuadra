"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[5199],{

/***/ 50935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* reexport */ useAdminUsers)
});

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 19 modules
var helper_plugin_esm = __webpack_require__(88376);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/useAdminUsers.js



function useAdminUsers(params = {}, queryOptions = {}) {
  const { id = "", ...queryParams } = params;
  const queryString = (0,lib.stringify)(queryParams, { encode: false });
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const { data, isError, isLoading, refetch } = (0,es.useQuery)(
    ["users", id, queryParams],
    async () => {
      const {
        data: { data: data2 }
      } = await get(`/admin/users/${id}${queryString ? `?${queryString}` : ""}`);
      return data2;
    },
    queryOptions
  );
  let users = [];
  if (id && data) {
    users = [data];
  } else if (Array.isArray(data?.results)) {
    users = data.results;
  }
  return {
    users,
    pagination: data?.pagination ?? null,
    isLoading,
    isError,
    refetch
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js



/***/ }),

/***/ 67875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useLicenseLimitNotification = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLicenseLimitNotification);


/***/ }),

/***/ 94699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29728);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88376);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89597);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterPopoverURLQuery */ .J5,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterListURLQuery */ .W$, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
      metadatas: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) }),
      fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) })
    })
  ).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ 4214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29728);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23293);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);





const CreateAction = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, { onClick, startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null), size: "S" }, formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }));
};
CreateAction.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAction);


/***/ }),

/***/ 23696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 19 modules
var helper_plugin_esm = __webpack_require__(88376);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(86706);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(99369);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(50935);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(94699);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(92155);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(19631);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js








const TableRows = ({
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router/* useHistory */.k6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: data.id,
        ...(0,helper_plugin_esm/* onRowClick */.X7)({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        })
      },
      withMainAction && /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map(({ key, cellFormatter, name, ...rest }) => {
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, data[name] || "-"));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => push(`${pathname}/${data.id}`),
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      ), canDelete && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 1, ...helper_plugin_esm/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onClickDelete(data.id),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(67819);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.js + 1 modules
var Breadcrumbs = __webpack_require__(63321);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.js
var Crumb = __webpack_require__(36773);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(14916);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(1733);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(81288);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/constants.js


const FORM_INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
const ROLE_LAYOUT = [];
const FORM_LAYOUT = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    }
  ]
];
const FORM_SCHEMA = yup_es/* object */.Ry().shape({
  firstname: yup_es/* string */.Z_().trim().required(helper_plugin_esm/* translatedErrors */.I0.required),
  lastname: yup_es/* string */.Z_(),
  email: yup_es/* string */.Z_().email(helper_plugin_esm/* translatedErrors */.I0.email).required(helper_plugin_esm/* translatedErrors */.I0.required),
  roles: yup_es/* array */.IX().min(1, helper_plugin_esm/* translatedErrors */.I0.required).required(helper_plugin_esm/* translatedErrors */.I0.required)
});
const STEPPER = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(12201)/* ["default"] */ .Z);}return (__webpack_require__(31605)/* ["default"] */ .Z);}();var ModalForm=function ModalForm(_ref){var _onSuccess=_ref.onSuccess,onToggle=_ref.onToggle;var _useState=(0,react.useState)('create'),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),currentStep=_useState2[0],setStep=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isSubmitting=_useState4[0],setIsSubmitting=_useState4[1];var _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),registrationToken=_useState6[0],setRegistrationToken=_useState6[1];var _useIntl=(0,useIntl/* default */.Z)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,helper_plugin_esm/* useNotification */.lm)();var _useOverlayBlocker=(0,helper_plugin_esm/* useOverlayBlocker */.o1)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var _useFetchClient=(0,helper_plugin_esm/* useFetchClient */.kY)(),post=_useFetchClient.post;var roleLayout=(0,useEnterprise/* useEnterprise */.c)(ROLE_LAYOUT,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return __webpack_require__.e(/* import() */ 4425).then(__webpack_require__.bind(__webpack_require__, 84425));case 2:return _context.abrupt("return",_context.sent.ROLE_LAYOUT);case 3:case"end":return _context.stop();}},_callee);})),{combine:function combine(ceRoles,eeRoles){return[].concat((0,toConsumableArray/* default */.Z)(ceRoles),[eeRoles]);},defaultValue:[]});var initialValues=(0,useEnterprise/* useEnterprise */.c)(FORM_INITIAL_VALUES,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){return regenerator_default().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return __webpack_require__.e(/* import() */ 4425).then(__webpack_require__.bind(__webpack_require__, 84425));case 2:return _context2.abrupt("return",_context2.sent.FORM_INITIAL_VALUES);case 3:case"end":return _context2.stop();}},_callee2);})),{combine:function combine(ceValues,eeValues){return _objectSpread(_objectSpread({},ceValues),eeValues);},defaultValue:FORM_INITIAL_VALUES});var postMutation=(0,react_query_es.useMutation)(function(body){return post('/admin/users',body);},{onSuccess:function onSuccess(_ref4){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){var data;return regenerator_default().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:data=_ref4.data;setRegistrationToken(data.data.registrationToken);_context3.next=4;return _onSuccess();case 4:goNext();setIsSubmitting(false);case 6:case"end":return _context3.stop();}},_callee3);}))();},onError:function onError(err){setIsSubmitting(false);toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});throw err;},onSettled:function onSettled(){unlockApp();}});var headerTitle=formatMessage({id:'Settings.permissions.users.create',defaultMessage:'Invite new user'});var handleSubmit=/*#__PURE__*/function(){var _ref6=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee4(body,_ref5){var setErrors,_err$response;return regenerator_default().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:setErrors=_ref5.setErrors;lockApp();setIsSubmitting(true);_context4.prev=3;_context4.next=6;return postMutation.mutateAsync(body);case 6:_context4.next=12;break;case 8:_context4.prev=8;_context4.t0=_context4["catch"](3);unlockApp();if((_context4.t0===null||_context4.t0===void 0||(_err$response=_context4.t0.response)===null||_err$response===void 0||(_err$response=_err$response.data)===null||_err$response===void 0?void 0:_err$response.error.message)==='Email already taken'){setErrors({email:_context4.t0.response.data.error.message});}case 12:case"end":return _context4.stop();}},_callee4,null,[[3,8]]);}));return function handleSubmit(_x,_x2){return _ref6.apply(this,arguments);};}();var goNext=function goNext(){if(next){setStep(next);}else{onToggle();}};var _STEPPER$currentStep=STEPPER[currentStep],buttonSubmitLabel=_STEPPER$currentStep.buttonSubmitLabel,isDisabled=_STEPPER$currentStep.isDisabled,next=_STEPPER$currentStep.next;var endActions=currentStep==='create'?/*#__PURE__*/react.createElement(Button/* Button */.z,{type:"submit",loading:isSubmitting},formatMessage(buttonSubmitLabel)):/*#__PURE__*/react.createElement(Button/* Button */.z,{type:"button",loading:isSubmitting,onClick:onToggle},formatMessage(buttonSubmitLabel));return/*#__PURE__*/react.createElement(ModalLayout/* ModalLayout */.P,{onClose:onToggle,labelledBy:"title"},/*#__PURE__*/react.createElement(ModalHeader/* ModalHeader */.x,null,/*#__PURE__*/react.createElement(Breadcrumbs/* Breadcrumbs */.O,{label:headerTitle},/*#__PURE__*/react.createElement(Crumb/* Crumb */.$,{isCurrent:true},headerTitle))),/*#__PURE__*/react.createElement(formik_esm/* Formik */.J9,{enableReinitialize:true,initialValues:initialValues,onSubmit:handleSubmit,validationSchema:FORM_SCHEMA,validateOnChange:false},function(_ref7){var errors=_ref7.errors,handleChange=_ref7.handleChange,values=_ref7.values;return/*#__PURE__*/react.createElement(helper_plugin_esm/* Form */.l0,null,/*#__PURE__*/react.createElement(ModalBody/* ModalBody */.f,null,/*#__PURE__*/react.createElement(Flex/* Flex */.k,{direction:"column",alignItems:"stretch",gap:6},currentStep!=='create'&&/*#__PURE__*/react.createElement(MagicLink,{registrationToken:registrationToken}),/*#__PURE__*/react.createElement(Box/* Box */.x,null,/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"beta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'User details'})),/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingTop:4},/*#__PURE__*/react.createElement(Flex/* Flex */.k,{direction:"column",alignItems:"stretch",gap:1},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},FORM_LAYOUT.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(helper_plugin_esm/* GenericInput */.jm,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,error:errors[input.name],onChange:handleChange,value:values[input.name]})));});}))))),/*#__PURE__*/react.createElement(Box/* Box */.x,null,/*#__PURE__*/react.createElement(Typography/* Typography */.Z,{variant:"beta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(Box/* Box */.x,{paddingTop:4},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:5},/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:isDisabled,error:errors.roles,onChange:handleChange,value:values.roles})),roleLayout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(helper_plugin_esm/* GenericInput */.jm,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,onChange:handleChange,value:values[input.name]})));});})))))),/*#__PURE__*/react.createElement(ModalFooter/* ModalFooter */.m,{startActions:/*#__PURE__*/react.createElement(Button/* Button */.z,{variant:"tertiary",onClick:onToggle,type:"button"},formatMessage({id:'app.components.Button.cancel',defaultMessage:'Cancel'})),endActions:endActions}));}));};ModalForm.propTypes={onToggle:(prop_types_default()).func.isRequired,onSuccess:(prop_types_default()).func.isRequired};/* harmony default export */ const ListPage_ModalForm = (ModalForm);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* PageSizeURLQuery */.v4, null), /* @__PURE__ */ react.createElement(helper_plugin_esm/* PaginationURLQuery */.tU, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListPage_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js
const displayedFilters = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
/* harmony default export */ const utils_displayedFilters = (displayedFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js



const tableHeaders = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n"));
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Status */.qb, { isActive, variant: isActive ? "success" : "danger" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, formatMessage({
        id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
        defaultMessage: isActive ? "Active" : "Inactive"
      })));
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js
function ListPage_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function ListPage_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ListPage_ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ListPage_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var useLicenseLimitNotification=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(94018)/* ["default"] */ .Z);}return (__webpack_require__(67875)/* ["default"] */ .Z);}();var CreateAction=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(49823)/* ["default"] */ .Z);}return (__webpack_require__(4214)/* ["default"] */ .Z);}();var EE_LICENSE_LIMIT_QUERY_KEY=['ee','license-limit-info'];var ListPage=function ListPage(){var _useFetchClient=(0,helper_plugin_esm/* useFetchClient */.kY)(),post=_useFetchClient.post;var _useAPIErrorHandler=(0,helper_plugin_esm/* useAPIErrorHandler */.So)(),formatAPIError=_useAPIErrorHandler.formatAPIError;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isModalOpened=_useState2[0],setIsModalOpen=_useState2[1];var permissions=(0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);var _useRBAC=(0,helper_plugin_esm/* useRBAC */.ss)(permissions.settings.users),_useRBAC$allowedActio=_useRBAC.allowedActions,canCreate=_useRBAC$allowedActio.canCreate,canDelete=_useRBAC$allowedActio.canDelete,canRead=_useRBAC$allowedActio.canRead;var queryClient=(0,react_query_es.useQueryClient)();var toggleNotification=(0,helper_plugin_esm/* useNotification */.lm)();var _useIntl=(0,useIntl/* default */.Z)(),formatMessage=_useIntl.formatMessage;var _useLocation=(0,react_router/* useLocation */.TH)(),search=_useLocation.search;(0,helper_plugin_esm/* useFocusWhenNavigate */.go)();useLicenseLimitNotification();var _useAdminUsers=(0,useAdminUsers/* useAdminUsers */.R)(lib_default().parse(search,{ignoreQueryPrefix:true}),{enabled:canRead}),users=_useAdminUsers.users,pagination=_useAdminUsers.pagination,isError=_useAdminUsers.isError,isLoading=_useAdminUsers.isLoading,refetchAdminUsers=_useAdminUsers.refetch;var headers=utils_tableHeaders.map(function(header){return ListPage_objectSpread(ListPage_objectSpread({},header),{},{metadatas:ListPage_objectSpread(ListPage_objectSpread({},header.metadatas),{},{label:formatMessage(header.metadatas.label)})});});var title=formatMessage({id:'global.users',defaultMessage:'Users'});var handleToggle=function handleToggle(){setIsModalOpen(function(prev){return!prev;});};var deleteAllMutation=(0,react_query_es.useMutation)(/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(ids){return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return post('/admin/users/batch-delete',{ids:ids});case 2:case"end":return _context.stop();}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}(),{onSuccess:function onSuccess(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){return regenerator_default().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return refetchAdminUsers();case 2:_context2.next=4;return queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);case 4:case"end":return _context2.stop();}},_callee2);}))();},onError:function onError(error){toggleNotification({type:'warning',message:{id:'notification.error',message:formatAPIError(error),defaultMessage:'An error occured'}});}});return/*#__PURE__*/react.createElement(Main/* Main */.o,{"aria-busy":isLoading},/*#__PURE__*/react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL,{name:"Users"}),/*#__PURE__*/react.createElement(HeaderLayout/* HeaderLayout */.T,{primaryAction:canCreate&&/*#__PURE__*/react.createElement(CreateAction,{onClick:handleToggle}),title:title,subtitle:formatMessage({id:'Settings.permissions.users.listview.header.subtitle',defaultMessage:'All the users who have access to the Strapi admin panel'})}),canRead&&/*#__PURE__*/react.createElement(ActionLayout/* ActionLayout */.Z,{startActions:/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(helper_plugin_esm/* SearchURLQuery */.m,{label:formatMessage({id:'app.component.search.label',defaultMessage:'Search for {target}'},{target:title})}),/*#__PURE__*/react.createElement(Filters/* default */.Z,{displayedFilters:utils_displayedFilters}))}),/*#__PURE__*/react.createElement(ContentLayout/* ContentLayout */.D,{canRead:canRead},!canRead&&/*#__PURE__*/react.createElement(helper_plugin_esm/* NoPermissions */.ZF,null),isError&&/*#__PURE__*/react.createElement("div",null,"TODO: An error occurred"),canRead&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(helper_plugin_esm/* DynamicTable */.tM,{contentType:"Users",isLoading:isLoading,onConfirmDeleteAll:deleteAllMutation.mutateAsync,onConfirmDelete:function onConfirmDelete(id){return deleteAllMutation.mutateAsync([id]);},headers:headers,rows:users,withBulkActions:true,withMainAction:canDelete},/*#__PURE__*/react.createElement(DynamicTable_TableRows,{canDelete:canDelete,headers:headers,rows:users,withBulkActions:true,withMainAction:canDelete})),pagination&&/*#__PURE__*/react.createElement(ListPage_PaginationFooter,{pagination:pagination}))),isModalOpened&&/*#__PURE__*/react.createElement(ListPage_ModalForm,{onSuccess:/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){return regenerator_default().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return refetchAdminUsers();case 2:_context3.next=4;return queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);case 4:case"end":return _context3.stop();}},_callee3);})),onToggle:handleToggle}));};/* harmony default export */ const Users_ListPage = (ListPage);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedListPage/index.js





const ProtectedListPage = () => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions.settings.users.main }, /* @__PURE__ */ react.createElement(Users_ListPage, null));
};
/* harmony default export */ const Users_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 82464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12028);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88376);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65186);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);






const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .lm)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .VP)();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .Y_,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .h, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { fontSize: 32 } }, "\u2709\uFE0F"),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 31605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 81288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40619);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82562);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88376);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86647);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86896);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88767);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71997);








const rotation = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .keyframes */ .F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null));
const fetchData = async () => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .getFetchClient */ .tg)();
  const { data } = await get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .W, { key: role.id, value: role.id.toString() }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 49823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84495);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52624);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29728);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51277);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69483);







const CreateAction = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const { license } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLicenseLimits */ .q5)();
  const { permittedSeats, shouldStopCreate } = license?.data ?? {};
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k, { gap: 2 }, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(permittedSeats) && shouldStopCreate && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Tooltip */ .u,
    {
      description: formatMessage({
        id: "Settings.application.admin-seats.at-limit-tooltip",
        defaultMessage: "At limit: add seats to invite more users"
      }),
      position: "left"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J,
      {
        width: `${14 / 16}rem`,
        height: `${14 / 16}rem`,
        color: "danger500",
        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,
    {
      "data-testid": "create-user-button",
      onClick,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null),
      size: "S",
      disabled: shouldStopCreate
    },
    formatMessage({
      id: "Settings.permissions.users.create",
      defaultMessage: "Invite new user"
    })
  ));
};
CreateAction.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAction);


/***/ }),

/***/ 12201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      {
        target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
      },
      formatMessage({
        id: "app.components.Users.MagicLink.connect",
        defaultMessage: "Copy and share this link to give access to this user"
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login` }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11047);


const o = ({ startActions: t, endActions: e }) => !t && !e ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { gap: 2, wrap: "wrap", children: t }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { gap: 2, shrink: 0, wrap: "wrap", children: e })] });



/***/ }),

/***/ 23293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const v = (h) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...h, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#32324D", d: "M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"
    }
  )
] }), o = v;



/***/ })

}]);