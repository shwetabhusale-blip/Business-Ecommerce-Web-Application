const express=require("express"),path=require("path");
const app=express(),PORT=3000;
app.use(express.json()); app.use(express.static(path.join(__dirname,"public")));
const products=[
{id:1,name:"Classic Backpack",category:"Bags",price:899,stock:20,emoji:"🎒",desc:"Durable everyday backpack."},
{id:2,name:"Wireless Headphones",category:"Electronics",price:1499,stock:15,emoji:"🎧",desc:"Comfortable wireless headphones."},
{id:3,name:"Smart Watch",category:"Electronics",price:2299,stock:10,emoji:"⌚",desc:"Stylish smart watch."},
{id:4,name:"Cotton T-Shirt",category:"Fashion",price:599,stock:30,emoji:"👕",desc:"Soft regular-fit cotton T-shirt."},
{id:5,name:"Running Shoes",category:"Footwear",price:1899,stock:12,emoji:"👟",desc:"Lightweight running shoes."},
{id:6,name:"Coffee Mug",category:"Home",price:299,stock:40,emoji:"☕",desc:"Ceramic coffee mug."},
{id:7,name:"Desk Lamp",category:"Home",price:749,stock:18,emoji:"💡",desc:"Compact LED desk lamp."},
{id:8,name:"Sling Bag",category:"Bags",price:699,stock:22,emoji:"👜",desc:"Compact daily sling bag."}];
const users=[],orders=[];let nextOrder=1001;

app.get("/api/products",(req,res)=>{
 const q=(req.query.q||"").toLowerCase(), c=(req.query.category||"All").toLowerCase();
 res.json(products.filter(p=>(!q||(p.name+" "+p.category+" "+p.desc).toLowerCase().includes(q))&&(c==="all"||p.category.toLowerCase()===c)));
});
app.post("/api/register",(req,res)=>{
 const {name,email,password}=req.body;
 if(!name||!email||!password)return res.status(400).json({message:"All fields are required."});
 if(users.some(u=>u.email===email.toLowerCase()))return res.status(409).json({message:"Email already registered."});
 const u={id:users.length+1,name,email:email.toLowerCase(),password};users.push(u);
 res.json({message:"Registration successful.",user:{id:u.id,name:u.name,email:u.email}});
});
app.post("/api/login",(req,res)=>{
 const {email,password}=req.body,u=users.find(x=>x.email===String(email||"").toLowerCase()&&x.password===password);
 if(!u)return res.status(401).json({message:"Invalid email or password."});
 res.json({message:"Login successful.",user:{id:u.id,name:u.name,email:u.email}});
});
app.post("/api/orders",(req,res)=>{
 const {userId,items,address}=req.body;
 if(!userId)return res.status(401).json({message:"Please login first."});
 if(!Array.isArray(items)||!items.length)return res.status(400).json({message:"Cart is empty."});
 if(!address?.trim())return res.status(400).json({message:"Delivery address is required."});
 let total=0,orderItems=[];
 for(const x of items){const p=products.find(y=>y.id===Number(x.id)),q=Number(x.qty);
  if(!p||!Number.isInteger(q)||q<1||q>p.stock)return res.status(400).json({message:"Invalid product or quantity."});
  total+=p.price*q;orderItems.push({productId:p.id,name:p.name,price:p.price,quantity:q});
 }
 const o={id:nextOrder++,userId:Number(userId),items:orderItems,total,address,status:"Placed",createdAt:new Date().toLocaleString("en-IN")};
 orders.push(o);res.json({message:"Order placed successfully.",order:o});
});
app.get("/api/orders/:userId",(req,res)=>res.json(orders.filter(o=>o.userId===Number(req.params.userId))));
app.get("/api/health",(req,res)=>res.json({status:"OK"}));
app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(PORT,()=>console.log("ShopEase running at http://localhost:"+PORT));