(function(){
angular.module('assesment',['app.controller','app.service','app.routes'])
        .run(['$window','$rootScope','authenticateService','$state',
              function(window,globalScope,authenticateService,state){
            var navElement = document.getElementById('mainNav');
            angular.element(window).on('scroll',function(){
                if(window.scrollY > 350){
                   angular.element(navElement).addClass('shrink');
                }else{
                   angular.element(navElement).removeClass('shrink');
                }
            });
            globalScope.$on('$stateChangeStart', function(e,toState,toParams,fromState,fromParams){
                var isLogin = toState.name === "login";
                if(isLogin){
                   return; // no need to redirect 
                }
                // now, redirect only not authenticated
                if(authenticateService.isUserAuthorised() === false) {
                    e.preventDefault(); // stop current execution
                    state.go('login'); // go to login
                }
            });
        }])
        .controller('AssesmentController',['$scope','dataservice',function(model,dataservice){
            model.questions=[];
            getQuestions();
            function getQuestions() {
                return dataservice.getQuestions().then(function (data) {
                    model.questions = data;
                    return model.questions;
                });
            }    
        }])
        .directive('questionareRadio',function(){
            return {
                restrict:'EA',
                scope:{
                    question:'=',
                    answers:'='
                },
                templateUrl:'../partials/question-radio.html',
                link:function(scope, elem, attrs){
                }
            }    
        })
        .directive('questionareCheckbox',function(){
            return {
                restrict:'EA',
                scope:{
                    question:'=',
                    answers:'='
                },
                templateUrl:'../partials/question-radio.html',
                link:function(scope, elem, attrs){
                }
            }    
        }).directive('navbar',function(){
            return {
                restrict:'E',
                replace:true,
                templateUrl:'../partials/navbar.html'
            }
        });
    
})();