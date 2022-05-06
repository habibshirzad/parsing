import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common";
import axios from 'axios'



@Injectable()
export class parseService implements OnApplicationBootstrap{

    onApplicationBootstrap() {
        throw new Error("Method not implemented.");
    }

  
    async parseProduct(){
        let url = 'https://jmart.kz/products?category_id=2879'
        // let url = `https://jmart.kz/products?category_id=2879`


        const getJSONPage = await axios.get(url)
        console.log(getJSONPage)
        let totalPage = getJSONPage.data.data.total_pages;
    }



    // async prs(){
    //     let url = 'https://jmart.kz/products?category_id=2879'
    //     const data = await axios.get(url)
    //     console.log(data,'f')
    //     console.log('asdfasfasdf')
    //     return data
    // }









  


}