// una interface es como si crearamos un nuevo tipo de objetos que yo personalizare
export interface User {
  nick: string;
  subnick?: string;
  age?: number;
  email: string;
  friend: boolean;
  uid: any,
  // agregamos el servicon de status para poder ponerlo en userInfo.service.ts
  status: string;
}
