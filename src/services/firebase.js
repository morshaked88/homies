import { firebase, fieldValue, FieldValue } from "../lib/firebase";

//on register check of user exist already
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

//get user from firestore of userID == userID
export async function getUserByUserId(uid) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection("users");

  if (following.length > 0) {
    query = query.where("userId", "not-in", [...following, userId]);
  } else {
    query = query.where("userId", "!=", userId);
  }
  const result = await query.limit(10).get();

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));

  return profiles;
}

export async function updateFollowUser(follower, followed, isFollowing) {
  return firebase
    .firestore()
    .collection("users")
    .doc(follower)
    .update({
      following: isFollowing
        ? FieldValue.arrayRemove(followed)
        : FieldValue.arrayUnion(followed),
    });
}

export async function UpdateAddToFollowers(followed, follower, isFollowing) {
  return firebase
    .firestore()
    .collection("users")
    .doc(followed)
    .update({
      followers: isFollowing
        ? FieldValue.arrayRemove(follower)
        : FieldValue.arrayUnion(follower),
    });
}
