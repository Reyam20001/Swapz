const exchangeService = require('../services/ExchangeService');
const { validationResult } = require('express-validator');

module.exports.getExchangeItems = async (req, res) =>
{
    try
    {
        const items = await exchangeService.displayExItems();

        res.send({items});
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};


module.exports.getOneExItem = async (req, res) =>
{
    try
    {
        const itemID = req.params.itemID;
        const item = await exchangeService.DisplayOneItem(itemID);

        res.send({item});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};

module.exports.deleteItemDelete = async(req,res)=>
{
    try{
        const id = req.params.itemID;
        const item = await exchangeService.deleteItem(id);

        res.send({item});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
}

module.exports.putMakeOffers = async(req,res)=>
{
    const validatorErrors = validationResult(req).array();
    if(validatorErrors.length > 0)
    {
        const firstError = validatorErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }
    try{
        const userID = req.body.UserID;
        const itemID = req.params.ItemID;
        const comment = req.body.comment;
        const status = req.body.status;
        const itemOffer = await exchangeService.makeOfferItem(userID, itemID, comment, status);
        return res.status(201).send(
            {
                msg: "Item has been offered",
                obj: itemOffer
            }
        );
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send({error:err});
    }
}

module.exports.postExchangeItem = async (req, res) =>
{
/*     const validatorErrors = validationResult(req).array();
    if(validatorErrors.length > 0)
    {
        const firstError = validatorErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    } */
    const exchangeInfo = 
    {
        title: req.body.title, 
        category: req.body.category,
        description: req.body.description,
        city: req.body.city,
        image: req.body.image,
        addedAt: req.body.addedAt,
        comment: req.body.comment,
        status: req.body.status,
        madeOffers: req.body.madeOffers
    };

    try
    {
        const newExItem = await exchangeService.uploadNewItem(exchangeInfo);

        return res.status(201).send(
            {
                msg: "Item uploaded successfully!",
                Item_ID: newExItem._id
            });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({error: err.message});
    }
};

module.exports.putAcceptOffer = async(req,res)=>
{
    try{
        const userID = req.body.userID;
        const itemID = req.params.itemID;
        const comment = req.body.comment;
        const itemAccept = await exchangeService.acceptOffer(userID, itemID, comment);
        return res.status(201).send(
            {
                msg: "Item has been accepted.",
           /*      obj: itemAccept */
            }
        );
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send({error:err});
    }
}

module.exports.putEditInfo = async (req, res) =>
{
    const exchangeInfo = 
    {
        title: req.body.title, 
        category: req.body.category,
        description: req.body.description,
        city: req.body.city,
        image: req.body.image,
        addedAt: req.body.addedAt,
        comment: req.body.comment,
        status: req.body.status,
        madeOffers: req.body.madeOffers
    };

    try
    {
        const itemID = req.params.item_ID;
        const managedItem = await exchangeService.editItem(itemID, exchangeInfo);

        return res.status(201).send(
            {
                msg: "Item updated successfully!",
               /*  exchangeInfo: managedItem._id */
            });
    }
    catch(err)
    {
        return res.status(500).send({error: err.message});
    }
};




