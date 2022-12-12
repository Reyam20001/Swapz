const ResellModel = require('../models/Resell');

module.exports.ResellItem = async (ItemInfo) => {
    try {
        const resell = new ResellModel(
            {
                title: ItemInfo.title,
                description: ItemInfo.description,
                price: ItemInfo.price,
                addedAt: ItemInfo.addedAt,
                imageURL: ItemInfo.image,
                status: ItemInfo.status,
                counterOffers: ItemInfo.counterOffers
            }
        );

        const newResellItem = await resell.save();

        return newResellItem;
    }
    catch (err) {
        console.log(err);
        //throw new Error('Could not upload resellable item.');
    }
};

module.exports.DisplayItem = async () => {
    try {
        const ResellableItems = await ResellModel.find();

        return ResellableItems

    }
    catch (err) {
        throw new Error('Could not retrieve items');
    }
}

module.exports.DisplayOneItem = async (itemID) => {
    try {
        const ResellableItem = await ResellModel.findById(itemID);

        return ResellableItem

    }
    catch (err) {
        throw new Error('Could not retrieve items');
    }
}

module.exports.Purchase = async (Item_ID, info) => {
    try {
        const stat = info.status;
        const PItem = await ResellModel.findByIdAndUpdate(Item_ID , { $set: { status: stat } });
     
        
        return PItem;
    }
    catch (err) {
        console.log(err);
        throw new Error('Could not purchase item.');
    }
}

module.exports.EditItemDetails = async (item_ID, data) => {
    try {
        const editedItem = await ResellModel.updateOne(item_ID, data);
        return editedItem;
    }
    catch (err) {
        throw new Error('Could not edit item.');
    }
};

// module.exports.AcceptNegotiation = async (ItemID,UserID,price) => {
//     try {
//         const acceptOffer = await ResellModel.findByIdAndUpdate(ItemID,{$set: {counterOffers: {"status" : "accepted", "userID": UserID, "price": price}}});
//         return acceptOffer;
//     }
//    catch (err) {
//     console.log(err);
//         throw new Error('Could not accept item.');
//     }
// }
module.exports.AcceptNegotiation = async (ItemID, UserID) => {
    try {
      const acceptOffer = await ResellModel.updateOne(
        {
          _id: ItemID,
          counterOffers: { $elemMatch: { userID: UserID } }
        },
        {
          $set: { 'counterOffers.$.status': 'Accepted' }
        }
      );
      return acceptOffer;
    } catch (err) {
      console.log(err);
      throw new Error('Could not accept item.');
    }
  };
  
module.exports.NegotiatePrice = async (item_ID,user_ID, price,status) => {
    try {
        const counterOfferList = await ResellModel.findByIdAndUpdate(item_ID, {$push: {counterOffers: {"userID": user_ID, "price": price, "status": status }}})
        
    }
    catch (err) {
        console.log(err);
        throw new Error('Could not negotiate the item price.');
    }
};

module.exports.DeleteResellableItem = async (item_ID) => {
    try {
     const deletedItem = await ResellModel.findByIdAndDelete(item_ID);
     return true;
    }
    catch (err) {
        console.log(err);
       // throw new Error('Could not delete the item');
    }
};

