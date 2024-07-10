require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello response')
})

app.post("/login", (req, res) => {
  // hard coded
  const USERNAME = "nk";
  const PASSWORD = "8888";

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: "nk",
      username: "nk",
    };
    console.log("JWT_KEY:", process.env.JWT_KEY);

    const token = jwt.sign(user, process.env.JWT_KEY);
    // send response
    res.json({
      token,
      user,
    });


  } else {
    res.status(403);
    res.json({
      message: "wrong login information"
    })
  }
})

// when the user login is successful, we want to send a JWT that is 
// signed. So we import the JWTpackage. Then you sign in with a unique 
// password. In a real application, we will want to have a .env file 
// where we store the secret key. Then use process.env to grab and use 
// it when signing our user model. 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


