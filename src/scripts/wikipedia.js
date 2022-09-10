import cheerio from "cheerio"
import fetch from "node-fetch"
import fs from "fs"

let urls = ["https://fr.wikipedia.org/wiki/Liste_des_familles_de_la_noblesse_fran%C3%A7aise_d%27Ancien_R%C3%A9gime_(A_%C3%A0_K)",
"https://fr.wikipedia.org/wiki/Liste_des_familles_de_la_noblesse_fran%C3%A7aise_d%27Ancien_R%C3%A9gime_(L_%C3%A0_Z)"]


async function fetchData() {
    let families = []   
    for(let url of urls) {
        let response = await fetch(url);
        let text = await response.text();
        
        let $ = cheerio.load(text);
        
        let titles = $("ul > li > b").map((i, el) => $(el).text()).get().map(t => t.replace(/\(d[eu']\)/g, "").trim())
        families = families.concat(titles)
    };
    return families;
}


let families = await fetchData()



try {
    fs.writeFileSync("./src/data/names.json", JSON.stringify(families))
} catch (err) {
    console.error(err)
}




