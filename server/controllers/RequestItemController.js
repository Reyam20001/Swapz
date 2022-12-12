const ProductService = require('../services/RequestproductService');


module.exports.getProducts=async(req,res) =>{
    try{
        const products =await ProductService.findAllProducts();
        res.send({products});
    }
    catch(error){
       //This inform server error , therfore status code should be 500.
        res.status(500);
        res.send({
            error:err
        });
    }
};

module.exports.postProduct=async(req,res)=>{
    const productinfo={
        title:req.body.title,
        category:req.body.category,
        description:req.body.description,
        city:req.body.city,
        image:req.body.image,
        addedAt:req.body.addedAt,
        active:req.body.active

    };
    try{
        const createdProduct=await ProductService.addNewProduct(productinfo);
        return res.status(201).send({
            msg: 'Product created successfully.',
            productid:createdProduct._id
        });
    }
    
    catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
};


module.exports.updateProduct = async (req, res) =>
{
    const userInfo = 
    {
        _id: req.body._id,
        title:req.body.title,
        category:req.body.category,
        description:req.body.description,
        city:req.body.city,
        image:req.body.image,
        addedAt:req.body.addedAt,
        active:req.body.active
    };

    try
    {
        const updateProduct = await ProductService.man(productinfo._id, productinfo);

        return res.status(201).send(
            {
                msg: "product updated successfully!",
                productInfo: updateProduct._id
            });
    }
    catch(err)
    {
        return res.status(500).send({error: err.message});
    }
};

module.exports.getComment = async (req, res) =>
{
    try
    {
        const feed = await ProductService.findAllComments();

        res.send({feed});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};

module.exports.postComment = async (req, res) =>
{
    const commentInfo = 
    {
        comment: req.body.comment
    };

    try
    {
        const newComment = await ProductService.addComment(commentInfo);

        return res.status(201).send(
            {
                msg: "Comment added successfully!",
                commentInfo: newComment._id
            });
    }
    catch(err)
    {
        return res.status(500).send({error: err.message});
    }
};

module.exports.deleteProduct = async (req, res) =>
{
    try
    {
        const id = req.params.productid;
        const product = await ProductService.deleteProductbyID(id);

        res.send({product});
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};