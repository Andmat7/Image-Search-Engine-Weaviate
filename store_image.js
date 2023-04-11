import { client } from './initialize_client.js';
import * as fs from 'fs';
const img = fs.readFileSync('./img/to_insert.jpeg');

const b64 = Buffer.from(img).toString('base64');

await client.data.creator()
  .withClassName('Meme')
  .withProperties({
    image: b64,
    text: 'matrix meme'
  })
  .do();