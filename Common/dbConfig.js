const mongoose = require('mongoose')
const DBName = 'TMBD'
const password='Jayamani12'
const name ='sanjaymech2313'

mongoose.connect(`mongodb+srv://${name}:${password}@sanjay.jhuniif.mongodb.net/${DBName}`,
{useNewUrlParser: true, useUnifiedTopology: true }
)