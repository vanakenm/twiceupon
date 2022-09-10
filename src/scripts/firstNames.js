import fs from "fs"

let data = fs.readFileSync("./src/data/firstNamesM.txt", "utf8") 
let names = data.split("\r").map(l => l.split(" "))
    .flat().map(n => n.trim())
    .filter(n => n.length > 0)
    .map(n => { return {"name": n, "gender": "M"}});

try {
    fs.writeFileSync("./src/data/firstNames.json", JSON.stringify(names))
} catch (err) {
    console.error(err)
}
