import { client } from './initialize_client.js';
import * as fs from 'fs';

const test = Buffer.from( fs.readFileSync('./img/test.png') ).toString('base64');
const resImage = await client.graphql.get()
  .withClassName('Meme')
  .withFields(['image'])
  .withNearImage({ image: test })
  .withLimit(1)
  .do();

// Write result to filesystem
const result = resImage.data.Get.Meme[0].image;
console.log(result)
fs.writeFileSync('./result.jpg', result, 'base64');
