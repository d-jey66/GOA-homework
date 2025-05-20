import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import bcryptjs from 'bcryptjs'

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const userData = []

app.get("/", (req, res) => {
    res.render("index.ejs", {name: "GOA"})
})

app.get("/register", (req, res) => {
    res.render("register.ejs");
  })
  
  app.post("/register", async (req, res) => {
    try {
      const saltRounds = 10
      const hashedPassword = await bcryptjs.hash(req.body.password, saltRounds)
      
      userData.push({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      
      console.log("New user registered:", userData[userData.length - 1])
      
    } catch (error) {
      console.error("Registration error:", error)
      res.render("register.ejs", { message: "Registration failed. Please try again." })
    }
  })

const port = process.env.PORT || 3000

dotenv.config()

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
