define(['wwwroot/commonModule/internals.js'], function(internals){
   return {
       "decorate": function(str, callback){
           require(['wwwroot/commonModule/private.js'], function(private){
              callback(internals.decorate(private.decorate(str))); 
           });
       }
   } 
});