import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const register = functions.https.onCall((data) => {
  if (data.email.matches('.*@accenture.com$')) {
    return admin
      .auth()
      .createUser({
        email: data.email,
        password: data.password,
        displayName: `${data.firstName} ${data.lastName}`,
      })
      .then(() => admin.auth().generateEmailVerificationLink(data.email));
  } else {
    return { error: 'Invalid Login' };
  }
});
