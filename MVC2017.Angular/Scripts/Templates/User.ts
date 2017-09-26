


    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]
    //
    // More info: http://frhagn.github.io/Typewriter/
    module TPApp{
    
   export enum ClubType {
        FirstClass= 1,SecondClass= 2,
    }
    
   export interface IUserOptions {
        
         BirthDate: Date;
         Address: string;
    }
    
   export interface UserBase {
        
         BirthDate: Date;
         Address: string;
    }
   export interface User extends UserBase{
        
         Name: string;
         Age: number;
    }
}


