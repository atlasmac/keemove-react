const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "./imagePosts")
let postList = []

const getPosts = () => {
 fs.readdir(dirPath, (err, files) => {
    
    if (err) {
      return console.log("failed to list contents of directory" + err)
    }
    files.forEach((file, i) => {
      let obj = {}
      let post
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, el, i) => {
          if (/^---/.test(el)) {
            acc.push(i)
          }
          return acc
        }
        const parseMetaData = ({lines, metadataIndices})=>{
          if (metadataIndices.length > 0){
            let metadata = lines.slice(metadataIndices[0] + 1, 
            metadataIndices[1])
            metadata.forEach((line)=>{
              obj[line.split(": ")[0]] = line.split(': ')[1]
            })
            console.log(obj)
            return obj
          }
        }
        const lines = contents.split("\n")
        const metadataIndices = lines.reduce(getMetadataIndices, [])
        const metadata = parseMetaData({ lines, metadataIndices })
        post = {
          id: i + 1,
          thumbnail: metadata.thumbnail ? metadata.thumbnail : "No thumbnail given",
          date: metadata.date ? metadata.date : "No date given",
        }
        postList.push(post)
        if (i === files.length - 1){
          let data = JSON.stringify(postList)
          fs.writeFileSync("src/images.json", data)
        }
      })
    })
  })
  return
}

getPosts()