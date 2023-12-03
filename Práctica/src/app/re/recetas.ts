export class Receta{
    private nombre:string;
    private img:string;
    private receta:Array<[string,string]>;
    
    constructor(n:string,di:string,r:Array<[string,string]>){
        this.nombre=n;
        this.img=di;
        this.receta=r;
        
    }
    N():string{return this.nombre;}
    R():Array<[string,string]>{return this.receta;}
    I():string{return this.img;}
    
};