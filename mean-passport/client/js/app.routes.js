(function () {
    angular.module('app.routes', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/login');

            $stateProvider
            // Login ========================================
                .state('login', {
                    url: '/login',
                    templateUrl: '../partials/login.html'
                })
                .state('assesment', {
                    url:'/assesment',
                    templateUrl:'../partials/questionare.html'
                })
                .state('courses', {
                    url:'/courses',
                    templateUrl:'../partials/courses.html'
                })
                .state('admin',{
                    url:'/admin',
                    templateUrl:'../partials/admin.html'
                });
        }]);
})();
