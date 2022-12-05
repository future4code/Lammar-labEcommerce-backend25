import app from "./app"
import createCharacters from "./endpoints/createCharacters"
import getAllCharacters from "./endpoints/getAllCharacters"
import deleteCharacters from "./endpoints/deleteCharacters"

app.get("/character",getAllCharacters)
app.put("/character", createCharacters)
app.delete("/character/:id", deleteCharacters)





//app.get("/movies")
//app.delete("/movies")