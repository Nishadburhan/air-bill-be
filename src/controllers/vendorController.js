const express = require("express");
const vendorController = express.Router();

const Vendor = require("../models/vendorModel");
const verifyToken = require("../middlewares/verifyToken");
vendorController.get("/", verifyToken, (req, res) => {
  try {
    if(req.user) {
      Vendor.find({created_by: req.user.id}).then((vendors) => {
        res.status(200).send(vendors);
      }).catch((err) => {
        res.status(400).send(err);
      });
    } else {
      return res.status(401).json({ message: req.message });
    }
  } catch (error) {
    console.error(`Error while fetching the vendors`, error);
    res.status(500).send(error);
  }
});

vendorController.post("/", verifyToken, (req, res) => {
  try {
    if (req.user) {
      const vendor = new Vendor({
        company_name: req.body.company_name,
        email: req.body.email,
        phone: req.body.phone,
        contact_number: req.body.contact_number,
        address: req.body.address,
        gst_number: req.body.gst_number,
        created_by: req.user.id,
      });

      vendor
        .save()
        .then((vendor) => {
          res.status(201).json({ message: "Successfully created the vendor" });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      return res.status(401).json({ message: req.message });
    }
  } catch (error) {
    console.error(`Error while creating the vendor`, error);
    res.status(500).send(error);
  }
});

module.exports = vendorController;
