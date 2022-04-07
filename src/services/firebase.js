import { firebase, fieldValue } from "../lib/firebase";

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

//get suggestions profiles
export async function getUsersSuggetions(uid) {
  const result = await getUserByUserId(uid);
  return result;
}
