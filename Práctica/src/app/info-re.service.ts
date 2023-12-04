import { Injectable } from '@angular/core';
import { Receta } from './re/recetas';

@Injectable({
  providedIn: 'root'
})
export class InfoReService {
  Recetas:Array<Receta>=[]

  constructor() { 
    this.Recetas[0]=new Receta("Tacos","./assets/tacos.jpeg",  [["carne asada", "1 libra"],
    ["cebolla", "1 grande"],
    ["cilantro fresco", "1 manojo"],
    ["limón", "1"],
    ["tortillas de maíz", "1 paquete"],
    ["aceite de oliva", "al gusto"],
    ["sal", "al gusto"],
    ["pimienta", "al gusto"]],["Precalentar la parrilla a fuego medio-alto.", "Cortar la carne asada en tiras finas y sazonar con sal y pimienta al gusto.","Pelar y cortar la cebolla en rodajas finas.","Colocar la carne asada y las rodajas de cebolla en la parrilla caliente y cocinar durante 5-7 minutos, volteando una vez, hasta que estén dorados y cocidos.","Calentar las tortillas de maíz en la parrilla durante 30 segundos por cada lado."," Picar el cilantro fresco y exprimir el jugo de limón."," Armar los tacos colocando la carne asada y las rodajas de cebolla en las tortillas de maíz calientes. Espolvorear con cilantro picado y exprimir el jugo de limón por encima."]);
    
    
  
   
   
    this.Recetas[1]=new Receta("Helado","./assets/helados.jpeg",[
      ["chocolate negro", "85 g"],
      ["cacao en polvo", "25 g"],
      ["nata líquida para montar", "250 ml"],
      ["leche", "250 ml"],
      ["azúcar", "100 g"],
      ["yemas de huevo", "3"],
      ["esencia de vainilla", "1 cucharadita"],
    ],[
      "Vertemos la leche, la nata, el azúcar y el cacao en polvo en un cazo y lo ponemos a fuego lento hasta que hierva. Vamos removiendo de vez en cuando para que el cacao en polvo se disuelva y no se vean grumos.",
      "Retiramos del fuego, troceamos el chocolate negro y lo incorporamos a la olla. Removemos hasta que se deshaga y se integren todos los ingredientes.",
      "Batimos las yemas de huevo en un bol y las echamos a la mezcla anterior. Debemos incorporarlas poco a poco y removemos constantemente.",
      "Ponemos de nuevo el cazo al fuego y dejamos que la mezcla espese durante unos minutos sin dejar de remover.",
      "Retiramos del fuego y dejamos enfriar la mezcla.",
      "Una vez frío, si hay máquina de hacer helados, podemos enfriar la mezcla allí durante 30 minutos. Cuando no tenemos heladera ponemos mezcla en un recipiente plano, la metemos en el congelador y removemos cada 30 minutos aproximadamente para ir rompiendo los cristales de hielo que se forman.",
    ]);
    this.Recetas[2]=new Receta("Pizza","./assets/pizza.jpeg",[
      ["harina", "1/2 taza"],
      ["polvo para hornear", "2 cucharaditas"],
      ["levadura de elevado rapido", "2 cucharaditas"],
      ["aceite", "2 cucharadas"],
      ["agua", "2/3 taza"],
      ["carne de res sin grasa y molida", "250 gramos"],
      ["puré de tomate", "1/2 taza"],
      ["agua", "1/3 taza"],
      ["cebolla en polvo", "1/4 cucharada"],
      ["ajo en polvo", "1 pizca"],
      ["orégano", "1/4 cucharadita"],
      ["azúcar", "1 cucharadita"],
      ["albahaca en polvo", "1 pizca"],
      ["sal", "1/2 cucharadita"],
      ["pimienta", "1 pizca"],
      ["queso mozzarella semidescremado rallado", "1 taza"],
      ["champiñones frescos rebanados", "1 taza"],
      ["pimiento verde en rebanadas delgadas", "1"],
      ["pimiento rojo en rebanadas delgadas", "1"],
    ],[
      "Precalentar el horno a tope 220º o más con calor abajo.",
      "Colocar la pizza en la rejilla para que le entre el calor o también encima de papel de horno y colocarlo lo mas abajo posible del horno. Tener en cuenta que en Italia, las pizzas se hacen directamente en la piedra al igual que en nuestro horno a temperaturas que superan los 300º",
      "Tiempo: Unos 8 -10 minutos deberían ser suficientes. De todas formas ya sabéis que cada horno es un mundo, pero como regla básica es poner calor fuerte abajo y la pizza también abajo.",
    ]);
    this.Recetas[3]=new Receta("Empanada","https://www.bing.com/th?id=OSK.HEROoq9__2_v71JCikMaHXVvFTOh1yVrbvadl_79_dp8HN0&pid=cdx&w=320&h=189&c=7",[
      ['carne molida', "1g"],
      ['cebolla', "0.5g"],
      ['pimiento', "0.5g"],
      ['aceitunas', "0.25g"],
      ['pasas', "0.25g"],
      ['huevo', "1g"],
      ['harina', "2g"],
      ['levadura', "1g"],
      ['sal', "1g"],
      ['pimienta', "1g"]
    ],[
      'En una sartén grande, saltea la carne molida hasta que esté dorada. Agrega la cebolla y el pimiento picados y continúa salteando hasta que las verduras estén suaves.',
      'Agrega las aceitunas y las pasas picadas y mezcla bien.',
      'Agrega sal y pimienta al gusto.',
      'En un tazón aparte, mezcla la harina, la levadura y la sal. Agrega agua tibia y mezcla hasta que se forme una masa suave.',
      'Divide la masa en bolas del tamaño de una pelota de golf y extiéndelas con un rodillo hasta que tengan un grosor de aproximadamente 1/8 de pulgada.',
      'Coloca una cucharada de la mezcla de carne en el centro de cada círculo de masa.',
      'Agrega un huevo duro picado encima de la mezcla de carne.',
      'Dobla la masa por la mitad y presiona los bordes para sellar.',
      'Coloca las empanadas en una bandeja para hornear y hornea a 375 grados Fahrenheit durante 20-25 minutos o hasta que estén doradas.'
    ]);

    

  }


}
