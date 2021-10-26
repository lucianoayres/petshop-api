import mongodb from 'mongodb'

const ObjectID = mongodb.ObjectID

function getClient() {
  const uri = process.env.MONGODB_URI
  return new mongodb.MongoClient(uri, { useUnifiedTopology: true })
}

export { getClient, ObjectID }
