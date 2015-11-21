(function(){
    
    angular.module('app.service',[])
            .factory('dataservice',['$http',function(http){
                var dataservices = {
                    getQuestions:getQuestions
                }    
                return dataservices;
                
                function getQuestions(){
                    return http.get('data/questions.json')
                            .then(returnQuestions)
                            .catch(function (message) {
                                console.log('XHR failed while Getting Questions');
                            });

                        function returnQuestions(data, status, headers, config) {
                            return data.data;
                        };
                    }
            }])
            .factory('authenticateService',['$http',
                                            function(http){
                var authservices = {
                    authenticateUser:authenticateUser,
                    isUserAuthorised:isUserAuthorised
                };
                return authservices;
                function authenticateUser(username,password){
                    var request = {
                        url:"/api/authenticate",
                        method:"POST",
                        data:{
                            userName:username,
                            password:password
                        }
                    };
                    return http(request)
                        .then(sendAuthenticateResponse)
                        .catch(function(message){
                            console.log('XHR Failed for Authentication');
                        });
                    function sendAuthenticateResponse(response){
                            return response.data;
                    }
                }
                function isUserAuthorised(){
                    var sessionInfo = window.sessionStorage.getItem('userInfo');
                    if(sessionInfo){
                        return true;
                        var userData = JSON.parse(sessionInfo);
                        //return user == userData.userName;
                    }else{
                        return false;
                    }
                }
            }]);
})();