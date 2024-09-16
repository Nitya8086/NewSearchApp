const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = "5f0cc2f2cc5849b3a1bc32f8f845cdc6";


router.get('/news',async(req,res)=>{
    const {query} = req.query;
    if(!query){
        return res.status(400).json({error:"Please provide a search keyword"});
    }
    try{
        const response = await axios.get(` https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);

        const articles= response.data.articles;

        res.json(articles);

    }
    catch(e){
        console.error("Error fetching articles:",error.message);
        res.status(500).json({ error: 'Failed to fetch news articles' });
    }
});
module.exports = router;