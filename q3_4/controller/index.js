const Product=require('../model/product');
const item=require('../model/shoppingcart');
const products=[];
products.push(new Product("1","blue","jeans","12$"));
products.push(new Product("2","black","shirt","14$"));
products.push(new Product("3","white","dress","16$"));
exports.getAllProducts=(req, res) => {
 
    res.render("shop", {
        products:products,
        }) 

}
exports.getInfo=(req, res) => {
    const id=req.query.id;
       res.render("product", {
           id:id,
           products:products,
   
           }) 
   
   }
   exports.addToCart=(req,res,next)=>{
       let found=0;
       if(req.session["cart"]){
       for(let i=0;i<req.session["cart"].length;i++){
           if(req.body.name===req.session["cart"][i].name){
               req.session["cart"][i].quantity++;
               found=1;
           }
       }
    }
    else{
        req.session["cart"]=[];
    }
       if(found==0){
        req.session["cart"].push(new item(req.body.name,req.body.price,1) );}
       res.redirect(`/shoppingcart`);
   

   }
   exports.shoppingcart=(req,res)=>{
    res.render("shoppingcart", {
        items:req.session["cart"],

        })

   }