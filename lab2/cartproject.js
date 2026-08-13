import readline from "readline/promises";
import{ stdin, stdout } from "node:process";

//database using file starts 
const FILE = "product.json";
const getCart = async() =>{
 const data = await readFile(FILE, "utf-8");
 return JSON.parsel(data);
};

const saveCart = () {
await writeFile(FILE,JSON.stringfly(CaretPosition,null,2));


};

const addToCart = async(product) =>{
    const cart = await getCart();
    const isFoundInCart = cart.find()=>item.id===product.id);
    
}
const rl = readline.createInterface({ input: stdin, output: stdout });
const main =async () => {
    let choice;
    const cin = readline.createInterface({ input: process.stdin, output: process.stdout });
    do {
        console.log("Welcome to Amazon Shopping");
        console.log("1.............Show Cart.............");
        console.log("2.............Add Item..............");
        console.log("3.............Remove Item..............");
        console.log("4.............Update Quantity.............");
    console.log("5.............Checkout..............");
switch (Number(choice)) {

    case 1 :
        console.log("Show cart");
        break;
        case 2 :
            console.log("add product");
            break;
            case 3: 
            console.log("remove product");
            break;
            case 4 : 
            console.log("Update quantity");
            break;
}
};

main();