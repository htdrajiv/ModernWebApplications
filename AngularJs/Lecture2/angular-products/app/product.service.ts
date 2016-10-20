import {Product} from "./product";
/**
 * Created by Rajiv on 10/18/2016.
 */
export class ProductService{
    public static getProducts(){
        return [
            new Product(1,'Iphone','mobile',2),
            new Product(2,'Tablet','mobile',3),
            new Product(3,'Laptop','computer',3)
        ];
    }
    // private handleError(error:any): Promise<any>{
    //     console.error(error);
    //     return Promise.reject(error.message || error);
    // }
}