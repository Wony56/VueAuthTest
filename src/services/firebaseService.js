import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4WyDVLvJV1ZXAH2KOUQDs2JFtQjqv3Do",
  authDomain: "ssafy-web-pjt.firebaseapp.com",
  databaseURL: "https://ssafy-web-pjt.firebaseio.com",
  projectId: "ssafy-web-pjt",
  storageBucket: "",
  messagingSenderId: "363817638878",
  appId: "1:363817638878:web:aea49aa578e86b59"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

export default {
  signWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        return result;
      })
      .catch(error => {
        alert(error.message);
      });
  },
  signWithFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        return result;
      })
      .catch(error => {
        alert(error.message);
      });
  },
  siginWithEmail(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        let errorCode = error.code;

        if (errorCode === "auth/invalid-email") {
          alert("유효한 이메일이 아닙니다.");
        } else if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          alert("아이디 또는 패스워드가 틀렸습니다.");
        }
      });
  },
  signupWithEmail(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        let errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          alert("이미 등록된 아이디입니다.");
        } else if (errorCode === "auth/weak-password") {
          alert("비밀번호가 적절하지 않습니다.");
        }
      });
  },
  signout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("로그아웃되었습니다.");
      })
      .catch(error => {
        console.log(error.message);
      });
  }
};
