const express = require("express");
const router = express.Router();
const WishForm = require("../models/WishForm");

// Add a new user
router.post("/addwish", async (req, res) => {
    try {
        console.log("hello");
        
        const { name, designation, message } = req.body;
        console.log(name, designation, message);

        if (!name || !designation || !message ) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newWish = new WishForm({ name, designation, message });

        await newWish.save();
        res.status(201).json({ message: "Wish Send successfully" });

    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;