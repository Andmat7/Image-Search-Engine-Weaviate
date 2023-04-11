import { client } from './initialize_client.js';

const schemaConfig = {
  'class': 'Meme',
  'vectorizer': 'img2vec-neural',
  'vectorIndexType': 'hnsw',
  'moduleConfig': {
      'img2vec-neural': {
          'imageFields': [
              'image'
          ]
      }
  },
  'properties': [
      {
          'name': 'image',
          'dataType': ['blob']
      },
      {
          'name': 'text',
          'dataType': ['string']
      }
  ]
}

await client.schema
  .classCreator()
  .withClass(schemaConfig)
  .do();
import * as fs from 'fs';
