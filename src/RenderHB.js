  import Handlebars from 'handlebars';

export function RenderHB(element, source, data){
  this.element=document.getElementById(element),
  this.source=source,
  this.template=Handlebars.compile(this.source),
  this.data= data,
  this.html=this.template(this.data),
  this.render=function(){
    element.innerHTML=this.html;
  }
}
