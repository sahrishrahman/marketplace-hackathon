export interface Product  {
    _id:string;
     productName:string;
    description:string;
    _type :"product";
    price:number;
   /* image? :{
        asset :{
            _ref :string;
            _type : "image";
        }
    }*/
    status:string;
    color:any;
    category:string;
    imageUrl: string[];
    slug:{
        _type :"slug"
        current : string;
    }
}