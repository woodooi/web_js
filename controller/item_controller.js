const Plane = require('../models/item_module');

// Create & Save a new item
exports.create = (req, res) => {

    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a item
    const item = {
	  name: req.body.title,
      tank_volume: req.body.volume,
      num_of_seats: req.body.numberOfseats
    }

    // Create and Save a new Item
    Plane.create(item)
	    .then(data =>{res.send(data);})
        .catch(err => {
	        res.status(500).send({
        message: 
    err.message || "Some error occured while creating the Item."
        });
    });
};

// Retrieve all items from the database
exports.findAll = (req, res) => {

    Plane.findAll()

	    .then(data => {
            res.send(data)
    })
        .catch(err => {
	        res.status(500).send({
	    message: 
    err.message || "Some error occured while finding the Item."
        });
    });
};

exports.deleteAll = (req, res) => {
        
        Plane.destroy({ where: {} })
        .then(res.status(204).send())
        .catch (err => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
}       


// update item
exports.findOne = async (req, res) => {
    try {
      const _id = req.params.id;
      const record = await Plane.findOne({ where: { id: _id } });
  
      if (!record) {
        throw new Error('No record found');
      }
  
      console.log(`Retrieved record ${JSON.stringify(record, null, 2)}`);
  
      record.name = req.body.title;
      record.tank_volume = req.body.volume;
  
      await record.save();
  
      // You might want to send a response to the client indicating success.
      res.status(200).json({ message: 'Record updated successfully' });
    } catch (error) {
      // Handle the error appropriately, e.g., send an error response to the client.
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };  

// Delete a item with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Plane.destroy({
       where: {id: id} 
    })
       .then(num => {
	    if(num[0] == 1) {
	    res.send({
    message: "Item was deleted successfully."
            });
        } else {
		res.send({
		    message: `Cannot delete Item with id=${id}. Maybe Item was not found.`
            });
        }
    })
       .catch(err => {
	    res.status(500).send({
    message: "Could not delete Item with id=" + id
        })
    });
};
