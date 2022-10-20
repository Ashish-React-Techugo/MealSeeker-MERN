const Product = require('../models/productModel');
const Category = require('../models/categoryModel')
class ProductController{
    async createProduct(req,res){
        try{
            let {productName,price,discount,category_id} = req.body;
            if(!productName || !price || !discount || !category_id){
                res.json({statusCode:404,status:false,message:'All fields are required'})
            }
            else{
                    let newProduct = new Product({
                        productName,
                        price,
                        discount,
                        category_id,
                    })
                    await newProduct.save();
                    res.json({statusCode:201,status:true,message:'Product Added Successfully!!'})
                }
        }catch(err){
            console.log(err)
            res.json({statusCode:500,status:false,message:'Internal Server Error'})
        }
    }
    async getProducts(req,res){
        try{
            let products = await Product.find();
            res.json({ statusCode: 200, status: true,data:products, message: "List of products!!" })
        }catch(err){
            res.json({statusCode:500,status:false,message:'Internal Server Error'})
        }
    }
    async updateProduct(req,res){
        try{
            const {_id,productName,price,discount,category_id} = req.body;
            if(!productName || !price || !discount || !category_id){
                res.json({statusCode:404,status:false,message:'All fields are required'})
            }
            else{
                let product = await Product.findById(_id);
                if(!product){
                    res.json({statusCode:220,status:false,message:'No such product'})
                }
                else{
                    product.productName=productName;
                    product.price=price;
                    product.discount=discount;
                    await product.save();
                    res.json({statusCode:201,status:true,message:'Product Added Successfully!!'})
                }
            }
        }catch(err){
            res.json({statusCode:500,status:false,message:'Internal Server Error'})
        }
    }
    async createCategory(req,res){
        try{
            const {categoryName}=req.body;
            let newCategory = await Category({
                categoryName
            })
            await newCategory.save();
            res.json({statusCode:201,status:true,message:'Category Created Successfully'})
        }catch(err){
            res.json({statusCode:500,status:false,message:'Internal Server Error'})
        }
    }
}

module.exports = new ProductController()