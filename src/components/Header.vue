<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Seokwon</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>POST</v-btn>
      <v-btn flat @click.stop="openLoginModal" v-show="!$store.getters.getLogState">로그인</v-btn>
      <v-dialog v-model="$store.state.loginDialog" max-width="350">
        <LoginModal />
      </v-dialog>
      <v-btn flat @click="openSignupModal" v-show="!$store.getters.getLogState">회원가입</v-btn>
      <v-dialog v-model="$store.state.signupDialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" flat="flat" @click="signupDialog = false">Disagree</v-btn>

            <v-btn color="green darken-1" flat="flat" @click="signupDialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn flat @click="signOut" v-show="$store.getters.getLogState">로그아웃</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import LoginModal from "./LoginModal.vue";

export default {
  name: "Header",
  components: {
    LoginModal
  },
  data() {
    return {
      loginDialog: false,
      signupDialog: false
    };
  },
  mounted() {
    this.$store.watch(this.$store.getters.getLoginDialog, loginDialog => {
      alert("ㅎㅎㅎ");
    });
  },
  methods: {
    openLoginModal() {
      this.$store.commit("openLoginModal");
    },
    openSignupModal() {
      this.$store.commit("openSignupModal");
    },
    signOut() {
      this.$store.commit("signOut");
    }
  }
};
</script>