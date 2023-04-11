# Image Search Engine with Weaviate 

Weaviate is a vector database that allows you to create and query embeddings with pre-trained deep learning models. It integrates with ResNet-50 to vectorize images, making it possible to build an image similarity search engine with relative ease.

## Instructions.

### Run Docker Compose

```bash
docker-compose up
```
### Install the Weaviate Client

Create a new Node.js project and install the Weaviate TS client.
```bash
npm init
```

### Initialize the Client
Initialize the client and fetch the schema just to make sure the database is up and running.
```bash
node test_client.js
```

### Create a Schema
Create a schema that contains an image property.
```bash
node create_schema.js
```

### Store an Image
Images must first be converted to base64. Once converted, store it in the corresponding class in the schema. Weaviate will automatically use the neural network in the background to vectorize it and update the embedding.

```bash
node store_image.js
```

### Query an Image
After storing a few images, we can provide an image as a query input. The database will use HNSW to quickly find similar-looking images.

```bash
node query_image.js
```