export interface Product {
    _id : string;
    productName: string;
    category: string;
    _type :"product";
    price :number;
    image? :{
        _type:"image";
        asset :{
            _ref :string;
            _type : "image";

        }
    };
    slug :{
        _type:"slug";
        current: string;
    
    };
    description :string;
    status:string;
    inventory:number;
    colors :string[];
    

}
