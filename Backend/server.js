const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/news');
const app = express();

const PORT = process.env.PORT || 500;

//middleware
app.use('/news',newsRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})