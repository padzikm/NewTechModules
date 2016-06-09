import * as jq from 'jquery' 
import * as under from 'underscore'

export class Welcome {
  aureliaJq = ""
  aureliaUnder = ""
  
  get globalJq(){
    return typeof($.aurelia) === "undefined" ? "undefined" : $.aurelia;
  }

  get globalJqVersion(){
    return $.fn.jquery;
  }
  
  get globalUnder(){
    return typeof(_.aurelia) === "undefined" ? "undefined" : _.aurelia;
  }

  get globalUnderVersion(){
    return _.VERSION;
  }
  
  get moduleJq(){
    return jq.aurelia;
  }

  get moduleJqVersion(){
    return jq.fn.jquery;
  }
  
  get moduleUnder(){
    return under.aurelia;
  }

  get moduleUnderVersion(){
    return under.VERSION;
  }

  setJq(){
    jq.aurelia = this.aureliaJq;
  }

  setUnder(){
    under.aurelia = this.aureliaUnder;
  }
}
