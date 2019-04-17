export class LogServiceEB {
  line:Number;
  constructor(){
    this.line=0;
  }

  logMe(msg: string){
    console.log("LOG_EB-{{line}} ="+msg);
  }
}