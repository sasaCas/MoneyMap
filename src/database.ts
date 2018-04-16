// importamos Dexie
import Dexie from 'dexie';

// Creamos(para exportar) una clase que herede de Dexie
export class TransactionAppDB extends Dexie{
// Esta clase nos sirve para crear nuestra base de datos
// y estpecificar las tablas.

  // IMPORTANTE !!. En el vídeo no lo dice a tiempo
  // que hay que declarar esta línea así que te puedes
  // encontrar con un error frustrante. No obstante, en los comentarios,
  // Uriel nos da esta línea para declarar , transactions ,.
  // Y un poco más adelante sí que explica esta línea
  // de declaración de , transactions ,. El tipo de tabla
  // será , ITransaction , y , number , ES EL TIPO DE DATO
  // DE LA LLAVE PRIMARIA, en este caso el , id ,.
  transactions: Dexie.Table<ITransaction, number>;

  constructor(){
    // hacemos super porque estamos override el constructor.
    super("MoneyMapAppDB")

    // Aquí podemos usar this
    this.version(1).stores({
    // Y aquí las tablas
    // el , ++id , es para que se autoincremente
    transactions: '++id,amount,lat,lng,title,imageUrl'

  });

  // Aquí enlazamos el MODELO que es la clase construída abajo
  this.transactions.mapToClass(Transaction);
 }
}

// Vamos a usar interfaces para especificar los tipos
// de datos que contendrán las tablas.
export interface ICategory{
  // Se construirá más adelante.
}

export interface ITransaction{
  // El id será el identificador primario
  // El signo , ? , quiere decir que este
  // atributo va a ser opcional.
  id?: number;
  // La razón de que sea opcional es que si ya existe la
  // transacción guardada en la base de datos, este dato
  // ya existe y no debemos generarlo de nuevo.

  amount: number; // el monto
  lat: number; // latitud
  lng: number; // longitud
  title: string; // la reseña breve de la descripción
  imageUrl: string; // para la imagen, más adelante se explica cómo.

}

// Esta clase será lo que se conoce como MODELO
export class Transaction implements ITransaction{
  id?: number;
  amount: number;
  lat: number;
  lng: number;
  title: string;
  imageUrl: string;

  constructor(amount:number, title:string, lat?:number, lng?:number,
              id?:number, imageUrl?:string){
    this.amount = amount;
    this.title = title;

    if(lat) this.lat = lat;
    if(lng) this.lng = lng;
    if(id) this.id = id;
    if(imageUrl) this.imageUrl = imageUrl;
  }

  // Creamos este metodo , save() , que cogerá el modelo y
  // lo grabará en la base de datos
    save(){
    return db.transactions.add(this);
  }
}

// Ahora vamos a exportar una instancia a la base de datos
// que será recogida(importada) dentro del componente
// principal , app.component.ts ,.
export let db = new TransactionAppDB();
