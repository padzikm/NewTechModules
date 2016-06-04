import * as jq from 'jquery' 
import * as under from 'underscore'

export class Welcome {
  aureliaJq = ""
  aureliaUnder = ""
  
  get globalJq(){
    return typeof($.aurelia) === "undefined" ? "undefined" : $.aurelia;
  }
  
  get globalUnder(){
    return typeof(_.aurelia) === "undefined" ? "undefined" : _.aurelia;
  }
  
  get moduleJq(){
    return jq.aurelia;
  }
  
  get moduleUnder(){
    return under.aurelia;
  }

  setJq(){
    jq.aurelia = this.aureliaJq;
  }

  setUnder(){
    under.aurelia = this.aureliaUnder;
  }
}
