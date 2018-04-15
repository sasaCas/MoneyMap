// importamos Dexie
import Dexie from 'dexie';

// Creamos(para exportar) una clase que herede de Dexie
export class TransactionAppDB extends Dexie{
// Esta clase nos sirve para crear nuestra base de datos
// y estpecificar las tablas.

  constructor(){
    // hacemos super porque estamos override el constructor.
    super("MoneyMapAppDB")

    // Aquí podemos usar this
    this.version(1).stores({
    // Y aquí las tablas
    // el , ++id , es para que se autoincremente
    transactions: '++id,amount,lat,lng,title,imageUrl'

  });
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
