import Vue from "vue";
import Vuex from "vuex";
import firebaseService from "./services/firebaseService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    accessToken: "",
    user: "",
    logon: false,
    loginDialog: false,
    signupDialog: false
  },
  getters: {
    getLoginDialog: function(state) {
      return state.loginDialog;
    },
    getSignupDialog: function(state) {
      return state.signupDialog;
    },
    getLogState: function(state) {
      return state.logon;
    }
  },
  mutations: {
    openLoginModal: function(state) {
      state.loginDialog = true;
    },
    closeLoginModal: function(state) {
      state.loginDialog = false;
    },
    openSignupModal: function(state) {
      state.signupDialog = true;
    },
    closeSignupModal: function(state) {
      state.signupDialog = false;
    },
    signWithGoogle: async function(state) {
      let result = await firebaseService.signWithGoogle();

      state.accessToken = result.credential.accessToken;
      state.user = result.user;

      if (result) {
        console.log(result);

        state.loginDialog = false;

        alert("구글 로그인 성공!");
      }
    },
    signWithFacebook: async function(state) {
      let result = await firebaseService.signWithFacebook();

      state.accessToken = result.credential.accessToken;
      state.user = result.user;

      if (result) {
        console.log(result);

        state.loginDialog = false;

        alert("페이스북 로그인 성공!");

        this.$router.replace("Home");
      }
    },
    signWithEmail: async function(state, payload) {
      let result = await firebaseService.siginWithEmail(
        payload.email,
        payload.password
      );

      if (result) {
        console.log(result);

        state.loginDialog = false;

        alert("로그인 성공!");
      }
    },
    signOut: async function(state) {
      firebaseService.signout();

      state.logon = false;
      state.user = null;
      state.accessToken = null;
    }
  }
});
