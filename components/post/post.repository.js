import { getClient, ObjectID } from "../database/mongo.db.js";

async function createPost(post) {
  const client = getClient();
  try {
    await client.connect();
    const { ops } = await client
      .db("mod3DesafioTest1")
      .collection("posts")
      .insertOne(post);
    return ops[0];
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function updatePost(post) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("mod3DesafioTest1")
      .collection("posts")
      .updateOne(
        // first parameter is the 'filter' with the property to match the item to be updated
        { _id: post._id },
        // second parameter is the new data for the item to be updated
        { $set: { ...post } }
      );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getPost(postId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("mod3DesafioTest1")
      .collection("posts")
      .findOne({ _id: ObjectID(postId) });
    // PS: maybe '_id: postId' might work too
    // but needs to be tested
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getPosts() {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("mod3DesafioTest1")
      .collection("posts")
      .find({})
      .project({ _id: 0 }) // hide '_id' from results
      .toArray();
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  createPost,
  updatePost,
  getPosts,
  getPost,
};
