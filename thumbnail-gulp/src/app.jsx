    var options = {
       thumbnailData: [
            {title: 'Videos',
            number: 32,
            header: "Learn React",
            description: "fantastic new way to learn to program in react, Facebooks reative",
            imageUrl: "http://formatjs.io/img/react.svg"},
              {title: 'Videos',
            number: 12,
            header: "Angular JS",
            description: "fantastic new way to learn to program in angular, googles javascript framework",
            imageUrl: "http://www.w3schools.com/angular/pic_angular.jpg"}

        ]
        
    };

    
    //React, render class
    var element = React.createElement(ThumbnailList, options);
    
    
    //React after render place in body
    React.render(element, document.querySelector('.target'));