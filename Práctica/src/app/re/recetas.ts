export class Receta{
    private nombre:string;
    private img:string;
    private receta:Array<[string,string]>;
    private descripcion:string;
    constructor(n:string,di:string,r:Array<[string,string]>,des:string){
        this.nombre=n;
        this.img=di;
        this.receta=r;
        this.descripcion=des;
    }
    N():string{return this.nombre;}
    R():Array<[string,string]>{return this.receta;}
    I():string{return this.img;}
    Des():string{return this.descripcion;}
};