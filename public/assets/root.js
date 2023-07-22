function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var EVENTS = [
    "onClick",
    "onBlur"
];
var MAP_TO_NATIVE_EVENTS = {
    onClick: "click"
};
var MAP_TO_NATIVE_PROPS = {
    className: "class"
};
var isEvent = function(name) {
    return EVENTS.includes(name);
};
var mapToNativeProps = function(prop) {
    return MAP_TO_NATIVE_PROPS[prop];
};
var mapToNativeEvents = function(prop) {
    return MAP_TO_NATIVE_EVENTS[prop];
};
var jsx = function(tag, props) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    var element;
    if (typeof tag === "function") element = tag();
    else element = document.createElement(tag);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (props) try {
        for(var _iterator = Object.entries(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (isEvent(key)) {
                var nativeEventKey = mapToNativeEvents(key);
                element.addEventListener(nativeEventKey, value);
            }
            if (mapToNativeProps(key)) element.setAttribute(mapToNativeProps(key), value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var child = _step1.value;
            if (child === null) continue;
            if (typeof child === "function") {
                var nestedElement = child();
                element.appendChild(nestedElement);
                continue;
            }
            element.append(child);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return element;
};
var mount = function(element, component) {
    element.appendChild(component);
};
function uniqueId() {
    var prefix;
    var _arguments = arguments;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                prefix = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : "";
                0;
                _state.label = 1;
            case 1:
                if (!true) return [
                    3,
                    3
                ];
                return [
                    4,
                    "".concat(prefix).concat(id++)
                ];
            case 2:
                _state.sent();
                return [
                    3,
                    1
                ];
            case 3:
                return [
                    2
                ];
        }
    });
}
var EventSignal = function() {
    "use strict";
    function EventSignal() {
        var _this = this;
        _class_call_check(this, EventSignal);
        _define_property(this, "name", void 0);
        _define_property(this, "listen", function(handler) {
            document.addEventListener(_this.name, handler);
        });
        _define_property(this, "remove", function(handler) {
            document.removeEventListener(_this.name, handler);
        });
        this.name = uniqueId("useState-");
    }
    _create_class(EventSignal, [
        {
            key: "send",
            value: function send(data) {
                var event = new CustomEvent(this.name, {
                    bubbles: false,
                    detail: data
                });
                document.dispatchEvent(event);
            }
        }
    ]);
    return EventSignal;
}();
var useState = function(value) {
    var newValue = value;
    var eventSignal = new EventSignal();
    eventSignal.listen(function(event) {
        newValue = event.detail;
    });
    return [
        newValue,
        eventSignal.send
    ];
};
const App = ()=>{
    const [counter, setCounter] = useState(0);
    const handleIncrement = ()=>setCounter(counter + 1);
    const handleDecrement = ()=>setCounter(counter - 1);
    return jsx("div", {
        className: "container"
    }, jsx("span", null, counter), jsx("div", {
        className: "buttons"
    }, jsx("button", {
        onClick: handleIncrement
    }, "increment"), jsx("button", {
        onClick: handleDecrement
    }, "decrement")));
};
mount(document.getElementById("root"), jsx(App, null, null));
