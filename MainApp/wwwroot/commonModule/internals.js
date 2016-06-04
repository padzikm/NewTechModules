define([], function(){
   return {
       "decorate": function(str){
           return typeof(str) === "string" ? str.toUpperCase() : str;
       }
   } 
});