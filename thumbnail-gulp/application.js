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
    var Badge = React.createClass({displayName: "Badge",
        render: function() {
            return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
        }
    });
    
 React.createElement("div", {class: "col-sm-5 target"}

            )
    var ThumbnailList = React.createClass({displayName: "ThumbnailList",
        render: function(){
            var list = this.props.thumbnailData.map(function(thumbnailProps){
                return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
            });
                    return React.createElement("div", null, 
        list
        )
        }
        

    });
    var Thumbnail = React.createClass({displayName: "Thumbnail",
        render: function(){
            return React.createElement("div", {className: "thumbnail"}, 
                      React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
                      React.createElement("div", {className: "caption"}, 
                        React.createElement("h3", null, this.props.header), 
                        React.createElement("p", null, this.props.description), 
                        React.createElement("p", null, " ", React.createElement(Badge, {title: this.props.title, number: this.props.number}))
                      )
                    )
        }
    });