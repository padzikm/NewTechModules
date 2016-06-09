import {singleton} from 'aurelia-framework'

@singleton(false)
export class Externals {
  text = "";
  decoratedText = "";
  
  decorate(){
      requirejs(['wwwroot/commonModule/common.js'], ext => ext.decorate(this.text, decorated => this.decoratedText = decorated));
  }
}
