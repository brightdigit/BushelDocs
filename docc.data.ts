import * as fs from 'fs';

const baseURL =
  process.env.ENVIRONMENT=== 'production'
    ? 'https://docs.getbushel.app'
    : 'http://localhost:3000'
    
const modules = fs.readdirSync("public/swift-docc").filter( (name) => {
  return name.toLocaleLowerCase().startsWith("bushel")
}).map((name) => {
  const lowerCase = name.toLocaleLowerCase()
  return { 
    text: name, 
    link: `${baseURL}/swift-docc/${name}/documentation/${lowerCase}/`, 
    target: "_self"
  }
})
// example.data.js
export default {
    load() {
      return modules
    }
  }