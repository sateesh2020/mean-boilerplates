(function () {
    angular.module('app.controller', [])
        .controller('LoginController',
                    ['$http', '$scope', '$rootScope', '$state', 'authenticateService', '$window',
                    function (http, model, globalScope, state, authenticateService, window) {

                globalScope.user = {};
                model.userName = "";
                model.password = "";
                model.userValid = true;
                model.signIn = function (username, password) {
                    authenticateService.authenticateUser(username, password).then(function (data) {
                        if (data.success) {
                            var userInfo = data.user;
                            window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                            globalScope.user = data.user;
                            state.go('courses');
                        } else {
                            model.userValid = false;
                        }
                    });
                }
        }]);
})();
