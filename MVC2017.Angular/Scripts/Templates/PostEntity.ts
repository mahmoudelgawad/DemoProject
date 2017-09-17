﻿
module MVC2017.Angular.Scripts.Templates {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/
module APP{
    
    export class PostEntity {
        
        // ID
        public id: number = 0;
        // CREATEDDATE
        public createdDate: Date = new Date(0);
        // TITLE
        public title: string = null;
        // BODY
        public body: string = null;
        // RATE
        public rate: number = null;
    }
}

}