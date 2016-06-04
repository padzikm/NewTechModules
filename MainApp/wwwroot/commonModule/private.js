define([], function(){
   return {
       "decorate": function(str){
           return typeof(str) === "string" ? "Decorated " + str : str;
       }
   } 
});