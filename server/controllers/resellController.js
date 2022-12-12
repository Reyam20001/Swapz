const { validationResult } = require('express-validator');

const resellService = require('../services/resellService');

module.exports.getResellableItems = async (req, res) =>
{
    try
    {
        const items = await resellService.DisplayItem();

        res.send({items});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};
module.exports.getOneItem = async (req, res) =>
{
    try
    {
        const itemID = req.params.itemID;
        const item = await resellService.DisplayOneItem(itemID);

        res.send({item});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};
module.exports.postResellableItem = async (req, res) =>
{
    const validatorErrors = validationResult(req).array();
    if(validatorErrors.length > 0)
    {
        const firstError = validatorErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }
    const ItemInfo = 
    {
        title: req.body.title, 
        description: req.body.description ,
        price: req.body.price ,
        addedAt: req.body.addedAt,
        imageURL: req.body.image,
        status: req.body.status,
        counterOffers: req.body.counterOffers
    };

    try
    {
        const newResellItem = await resellService.ResellItem(ItemInfo);

        return res.status(201).send(
            {
                msg: "Item uploaded successfully!",
                Item_ID: newResellItem._id
            });
    }
    catch(err)
    {
        
        return res.status(500).send({error: err.message});
    }
};
module.exports.putPurchase = async (req, res) =>
{
    const info = {status: req.body.status};
    
    try
    {
        const ItemID = req.params.itemID;
       
        const p = await resellService.Purchase(ItemID, info);

        return res.status(201).send(
        {
            msg: "Item purchased"
            //ItemInfo: ItemInfo._id
        });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({error: err.message});
    }
};

module.exports.putEditItemDetails = async (req, res) =>
{
    const ItemInfo = 
    {
        title: req.body.title, 
        description: req.body.description ,
        price: req.body.price ,
        addedAt: req.body.addedAt,
        imageURL: req.body.image,
        status: req.body.status,
        counterOffers: req.body.counterOffers
    };

    try
    {
        const ItemID = req.params.item_ID;
        const p = await resellService.EditItemDetails(ItemID, ItemInfo);

        return res.status(201).send(
        {
            msg: "Item Edited",
            //ItemInfo: ItemInfo._id
        });
    }
    catch(err)
    {
        return res.status(500).send({error: err.message});
    }
};

module.exports.deleteDeleteResellableItem = async (req, res) =>
{
    try
    {
        const ID = req.params.itemID;
        const items = await resellService.DeleteResellableItem(ID);
        res.send({items});
        //return res.status(201).send(
            // {
            // msg:"item deleted",
            // });
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};

module.exports.putNegotiatePrice = async (req, res) =>
{
    const validatorErrors = validationResult(req).array();
    if(validatorErrors.length > 0)
    {
        const firstError = validatorErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }
    try
    {
        const UserID = req.body.userID;
        const ItemID = req.params.itemID;
        const price =req.body.price;
        const status = req.body.status;

        const itemNegotiation = await resellService.NegotiatePrice(ItemID, UserID, price,status);

        return res.status(201).send(
            {
            msg:"item negotiated",
            obj: itemNegotiation
            });
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};

module.exports.AcceptNegotiation = async (req,res) =>
{
try{

        const UserID = req.body.userID;
        const ItemID = req.params.ItemID;
        const price =req.body.price;
       

    const Negotiation = await resellService.AcceptNegotiation(ItemID, UserID, price);
    return res.status(201).send(
        {
        msg:" negotiation accepted",
        // userId: Negotiation.counterOffers.userID,
        // price: Negotiation.counterOffers.price
        });
}
catch(err)
{
    console.log(err);
    res.status(500);
    res.send({error: err});
}
};