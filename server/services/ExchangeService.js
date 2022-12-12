// const User = require('../../models/User');
// const { cloudinary } = require('../../config/cloudinary');
// const { CLOUDINARY_STORAGE } = require('../../config/config');
const exchangeModel = require('../models/Exchange');

module.exports.displayExItems = async () =>
{
    try
    {
        const exItems = await exchangeModel.find();

        return exItems;
        
    }
    catch(err)
    {
        throw new Error('Could not retrieve items.');
    }
}

module.exports.DisplayOneItem = async (itemID) => {
    try {
        const exItem = await exchangeModel.findById(itemID);

        return exItem;

    }
    catch (err) {
        throw new Error('Could not retrieve item.');
    }
}


module.exports.editItem = async (itemID, itemData) =>
{
    try
    {
         const editItem =  await exchangeModel.updateOne(itemID, itemData);
        return editItem;
    }
    catch(err)
    {
        throw new Error('Could not update data.');
    }
}


module.exports.makeOfferItem = async(userID, ItemID,comment,status) => {
    try{
        const offerList = await exchangeModel.findByIdAndUpdate(ItemID, { $push: { madeOffers: {"userID":userID, "comment":comment,  "status": status} }});
        return offerList;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not add offer.');
    }

}

module.exports.acceptOffer= async(ItemID, UserID)=> {
    try{
        const acceptExchange = await exchangeModel.updateOne(
            {
            _id:ItemID,
             madeOffers: { $elemMatch: {userID: UserID}},
            },
            {
                $set: {'madeOffers.$.status':'Accepted'}
            }
            );
             
           
    return acceptExchange;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not accept exchange');
    };

};

module.exports.deleteItem = async (itemID) =>
{
    try{
        const deleteItem = await exchangeModel.findByIdAndDelete(itemID);
        return true;
    }
    catch(err)
    {
        throw new Error('Could not delete item.');
    }

}

module.exports.uploadNewItem = async (exchangeInfo) =>
{
    try
    {
        const exchange = new exchangeModel(
            {
                title: exchangeInfo.title,
                category: exchangeInfo.category,
                description: exchangeInfo.description ,
                city: exchangeInfo.city ,
                image: exchangeInfo.image,
                addedAt: exchangeInfo.addedAt,
                comment: exchangeInfo.comment,
                status: exchangeInfo.status,
                madeOffers: exchangeInfo.madeOffers
            }
        );        

        const newExchange = await exchange.save();

        return newExchange;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not add exchange item.');
    }
};

/* module.exports.addtoWishlist = async(itemID, item) => {

    try{
        const wishListItem = await exchangeModel.updateOne({_id: itemID}, { $push: { createdExchange: item} })
        return wishListItem;
    }
    catch(err) 
    {
        throw new Error('Could not add to wishlist.');
    }
} */
