// const Product = require('../../models/Product');
// const User = require('../../models/User');
// const { cloudinary } = require('../../config/cloudinary');
// const { CLOUDINARY_STORAGE } = require('../../config/config');
const ProductModel = require('../models/Product');

module.exports.findAllProducts = async () =>
{
    try
    {
        const products = await ProductModel.find();

        return products
        
    }
    catch(err)
    {
        throw new Error('Could not retrieve products');
    }
}
module.exports.addNewProduct= async (productinfo)=>{
    try{
        const product=new ProductModel({
            title:productinfo.title,
            category:productinfo.category,
            description:productinfo.description,
            city:productinfo.city,
            image:productinfo.image,
            addedAt:productinfo.addedAt,
            active:productinfo.active,

        });
        const createdProduct =await product.save();
        return createdProduct;
    }
    catch(error){
        throw new Error('Could not create product.');
    }
};
module.exports.manageProduct = async(productId, productData) =>
{
    try
    {
        const updatedProduct = await productData.findOneAndUpdate({_id: productId}, {"$set": {"Title": productData.title, "category": productData.category, "description": productData.description, "city": userInfo.city, "image": productData.image, "addedAt": productData.addedAt,"active": productData.active,}});     
         
        return updatedProduct;
    }
    catch(err)
    {
        throw new Error('Could not update product data.');
    }
};

module.exports.findAllComments = async () =>
{
    try
    {
        const comments = await ProductModel.find();

        return comments;
        
    }
    catch(err)
    {
        throw new Error('Could not retrieve comment');
    }
};

module.exports.addComment = async (cm) =>
{
    try
    {
        const feed = new ProductModel(
            {
                comment: cm.comment
            }
        );        

        const addComment = await feed.save();

        return addComment;
    }
    catch(err)
    {
        throw new Error('Could not add comment.');
    }
};


module.exports.replyOnComment = async (reply, cm_ID) =>
{
    try
    {
        const addedReplyComment = await ProductModel.findOneAndUpdate({_id: cm_ID}, {"$set": {"reply": reply.reply}});     

        return addedReplyComment;
    }
    catch(err)
    {
        throw new Error('Could not add reply on comment.');
    }
};

module.exports.deleteProductbyID = async(productId) => 
{
    try
    {
        const user = await ProductModel.findByIdAndDelete(productId);

        return true;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not find product ID.');
    }
    
}