const express = require("express");
const app = express();
const axios = require("axios");
const { parse, stringify } = require("flatted");
const asyncHandler = require("express-async-handler"); // it helps in handling asyn req
app.use(express.json());

app.get(
  "/api/book-search/:id", //have the ID in the parameter as understood in api documentation
  asyncHandler(async (req, res) => {
      try{
          BookISBN= req.params.id
          const id = await axios.get( // doing it using async for time efficiency
            `https://lspl-info4you.glitch.me/search?isbn=${BookISBN}`
      );
  
      if (id.data.ID != null) {
        const book = await axios.get(
          `https://lspl-info4you.glitch.me/info/${id.data.ID}`
        );
        const str = stringify(book);
        const books = JSON.parse(str);// this will parse the data recieved from api
        const data = books[5];
        res.status(200).json({ // tried to made it exactly as asked in the task
          success: true,
          data,
        });
        res.send(book);
      } else {
        res.status(404).json({ // if id doent file the book we will get this response
          success: false,
          message: "there are no book with this ISBN",
        });
      }
    }catch(err){
          console.log(err)
      }
  })
);

app.listen(8000, () => {
  console.log("Server is running at 8000");
});