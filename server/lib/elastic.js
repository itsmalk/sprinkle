const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'elasticsearch:9200',
  log: 'info'
});

function indexExists(indexName) {
  return elasticClient.indices.exists({
    index: indexName
  });
}

function initIndex(indexName) {
  return elasticClient.indices.create({
    index: indexName
  });
}

function initDishMapping() {
  return elasticClient.indices.putMapping({
    index: 'dishes',
    type: 'dish',
    body: {
      properties: {
        name: { type: 'string' },
        restaurant: { type: 'string' },
        location: { type: 'geo_point' },
        price: { type: 'float' },
        tags: { type: 'string' },
        rating: { type: 'integer' },
        likes: { type: 'integer' },
        tag_suggest: {
          type: 'completion',
          index_analyzer: 'simple',
          search_analyzer: 'simple',
          payloads: false
        },
        restaurant_suggest: {
          type: 'completion',
          index_analyzer: 'simple',
          search_analyzer: 'simple',
          payloads: false
        },
        dish_suggest: {
          type: 'completion',
          index_analyzer: 'simple',
          search_analyzer: 'simple',
          payloads: false
        },
      }
    }
  });
}
