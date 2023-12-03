export class Receta{
    private nombre:string;
    private img:string;
    private receta:Array<[string,string]>;
    private empleo:Array<string>;
    constructor(n:string,di:string,r:Array<[string,string]>,empleo:Array<string>){
        this.nombre=n;
        this.img=di;
        this.receta=r;
        this.empleo=empleo;
        
    }
    N():string{return this.nombre;}
    R():Array<[string,string]>{return this.receta;}
    I():string{return this.img;}
    E():Array<string>{return this.empleo;}
    
};