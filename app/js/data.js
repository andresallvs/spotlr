var myApp = angular.module('myApp');

myApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Item 1 Title',
            image: 'gzy1.png',
            author_avatar: 'profile_friend1.png',
            icon: 'comments-o',
            description: 'Item 1 Description'
        },
        { 
            title: 'Another Item Title',
            image: 'gzy2.png',
            author_avatar: 'profile_friend2.png',
            icon: 'desktop',
            description: 'Item 2 Description'
        },
        { 
            title: 'Yet Anoter Item Title',
            image: 'gzy3.png',
            author_avatar: 'profile_friend3.png',
            icon: 'heart-o',
            description: 'Item 3 Description'
        }
    ]; 
    
    return data;
});