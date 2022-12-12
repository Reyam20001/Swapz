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

module.exports.addNewProduct = async (productInfo) =>
{
    try
    {
        const product = new ProductModel(
            {
                title: productInfo.title,
                category: productInfo.category ,
                description: productInfo.description ,
                price: productInfo.price ,
                city: productInfo.city ,
                addedAt: productInfo.addedAt,
                image: productInfo.image,
                active: productInfo.active
            }
        );        

        const newProduct = await product.save();

        return newProduct;
    }
    catch(err)
    {
        throw new Error('Could not add product.');
    }

};

module.exports.ProductId = async(prodId) => 
{
    try
    {
        const prod = await ProductModel.findById(prodId);
        return prod;
    }
    catch(err)
    {
        throw new Error('Could not find product ID.');
    }
    
}


// module.exports.createProduct = async (productInfo) =>
// {
//     try
//     {
//         const product = new ProductModel({
//             title: productInfo.title

//         });
        
//     }
//     catch
//     {

//     }
// }


// async function getAll() {
//     return await Product.paginate();
// }

// async function findByCategory(category) {
//     return await Product.find({ category: category })
// }

// async function findById(id) {
//     return await Product.findById(id);
// }

// async function edit(id, data) {
//     return await Product.updateOne({ _id: id }, data);
// }

// async function create(data, userId) {
//     let product = new Product({...data})
//     await product.save();

//     return await User.updateOne({ _id: userId }, { $push: { createdSells: product } });
// }

// async function uploadImage(image) {
//     const uploadResponse = await cloudinary.uploader.upload(image, {
//         upload_preset: CLOUDINARY_STORAGE,
//     }, { quality: "auto" });

//     let imageUrl = uploadResponse.url;
//     let index = (imageUrl.indexOf('upload/')) + 6;

//     let compressedImg = imageUrl
//         .substring(0, index) +
//         "/c_fit,q_auto,f_auto,w_800" +
//         imageUrl.substring(index);

//     return compressedImg;
// }

// async function userCollectionUpdate(userId, product) {
//     return await User.updateOne({ _id: userId }, { $push: { createdSells: product } });
// }

// async function findUserById(id) {
//     return await User.findById(id);
// }

// module.exports = {
//     create,
//     getAll,
//     findByCategory,
//     findById,
//     edit,
//     uploadImage,
//     userCollectionUpdate,
//     findUserById
// }
