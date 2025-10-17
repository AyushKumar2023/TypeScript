class Product{
    name:string
    price:number
    pId:number
    inCart=false
    isOrderd=false

    constructor(name:string,price:number,pid:number){
        this.name=name
        this.price=price
        this.pId=pid
    }

    addToCart():void{
        this.inCart=true
    }

    buyProduct():string {
        if(this.inCart){
            return `Product ${this.name} with price ${this.price} is ordered`
        }else{
            return `no product in the cart`
        }
    }
}

var product=new Product("Laptop",45000,101)
console.log(product.buyProduct()) 