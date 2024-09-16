const express = require('express');
const axios= require('axios');

const router = express.Router();

router.post('/',async(req,res)=>{
    const {text} = req.body;
    if(!text){
        return res.status(400).json({ error: "Text is required for summarization" });

    }
    try{
        const summary = await axios.post('https://api.openai.com/v1/summarize',{
            headers:{
                'Authorization': `Bearer YOUR_API_KEY`,
                'Content-Type': 'application/json'
            },
            data:{
                text:"text",
                max_length: 100
            }
        });
        res.json({summary:summary.data});

    }
    catch(e){
        console.error("Error summarizing text:", error.message);
        res.status(500).json({ error: 'Failed to summarize the article' });
    }
})
module.exports=router