"use strict";

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.repositories = [];
    this.formElm = document.getElementById("repo_form");
    this.listElm = document.getElementById('repo_list');
    this.inputElm = document.querySelector('input[name=repository]');
    this.registerHendlers();
  }

  _createClass(App, [{
    key: "registerHendlers",
    value: function registerHendlers() {
      var _this = this;

      this.formElm.onsubmit = function (event) {
        return _this.addReposiroty(event);
      };
    }
  }, {
    key: "setLoading",
    value: function setLoading() {
      var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (loading === true) {
        var loadingElm = document.createElement('span');
        loadingElm.appendChild(document.createTextNode("Carregando"));
        loadingElm.setAttribute('id', 'loading');
        this.formElm.appendChild(loadingElm);
      } else {
        document.getElementById('loading').remove();
      }
    }
  }, {
    key: "addReposiroty",
    value: function () {
      var _addReposiroty = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var repoInput, response, _response$data, name, description, html_url, avatar_url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                repoInput = this.inputElm.value;

                if (!(repoInput === 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                ;
                this.setLoading();
                _context.prev = 6;
                _context.next = 9;
                return _api["default"].get("/repos/".concat(repoInput));

              case 9:
                response = _context.sent;
                _response$data = response.data, name = _response$data.name, description = _response$data.description, html_url = _response$data.html_url, avatar_url = _response$data.owner.avatar_url;
                this.repositories.push({
                  name: name,
                  description: description,
                  avatar_url: avatar_url,
                  html_url: html_url
                });
                this.inputElm.value = '';
                this.render();
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](6);
                alert("O repositório não existe!");

              case 19:
                this.setLoading(false);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 16]]);
      }));

      function addReposiroty(_x) {
        return _addReposiroty.apply(this, arguments);
      }

      return addReposiroty;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.listElm.innerHTML = '';
      this.repositories.forEach(function (repo) {
        var imgEL = document.createElement("img");
        imgEL.setAttribute('src', repo.avatar_url);
        var titleEl = document.createElement('strong');
        titleEl.appendChild(document.createTextNode(repo.name));
        var descriptionEl = document.createElement('p');
        descriptionEl.appendChild(document.createTextNode(repo.description));
        var linkEl = document.createElement("a");
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute("href", repo.html_url);
        linkEl.appendChild(document.createTextNode("Acessar"));
        var listItemEl = document.createElement('li');
        listItemEl.appendChild(imgEL);
        listItemEl.appendChild(titleEl);
        listItemEl.appendChild(descriptionEl);
        listItemEl.appendChild(linkEl);

        _this2.listElm.appendChild(listItemEl);
      });
    }
  }]);

  return App;
}();

new App();
