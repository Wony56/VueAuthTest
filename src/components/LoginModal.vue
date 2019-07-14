<template>
  <v-card>
    <v-card-title class="headline">Log in</v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn block color="secondary" @click="signWithEmail">Sign in with E-mail</v-btn>
              <v-btn block color="error" @click="signWithGoogle">Sign in with Google</v-btn>
              <v-btn block color="primary" @click="signWithFacebook">Sign in with Facebook</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn block color="primary" flat @click="changeLoginToSignup">Sign up</v-btn>
      <v-btn block color="primary" flat @click="closeLoginModal">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LoginModal",
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => v.length >= 8 || "8자 이상 입력하세요"]
    };
  },
  methods: {
    closeLoginModal() {
      this.$store.commit("closeLoginModal");
    },
    changeLoginToSignup() {
      this.$store.commit("closeLoginModal");
      this.$store.commit("openSignupModal");
    },
    signWithEmail() {
      this.$store.commit("signWithEmail", {
        email: this.email,
        password: this.password
      });
    },
    signWithGoogle() {
      this.$store.commit("signWithGoogle");
    },
    signWithFacebook() {
      this.$store.commit("signWithFacebook");
    }
  }
};
</script>

