const fs= require('fs/promises');
const path= require('path');
import {fileURLToPath} from 'url';
const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

class ProductManager {
    constructor(filename){
        this.filename=filename;
        this.filepath=path.join(__dirname, filename);
        this.product=[]
    }
    
    async getProducts() {
        const data = await fs.readFile(this.filepath, 'utf-8')
        console.log(data.length)
        this.products = JSON.parse(data)
    
        console.log(this.products.length)
    
        return this.products
      }
}
export default ProductManager