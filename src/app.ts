import express from "express"
import path from "path"
const app = express()

// Template Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>console.log('Server Running !'))