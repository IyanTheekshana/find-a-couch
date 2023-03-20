<template>
  <div>
    <base-dialog
      :show="!!errorMsg"
      title="An error occured"
      @close="handleError"
    >
      <p>{{ errorMsg }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Authenticating...">
      <base-spinner></base-spinner>
    </base-dialog>
    <div class="contain">
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model.trim="password"
          />
        </div>
        <small v-if="!formIsValid"
          >Invalid credentials, please check again!</small
        >
        <div class="actions">
          <base-button mode="outline">{{ submitButtonCaption }}</base-button>
          <base-button type="button" mode="flat" @click="switchauthMode">{{
            switchModeButtonCaption
          }}</base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      errorMsg: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup";
      } else {
        return "Login";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === "" || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      this.isLoading = true;
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", actionPayload);
          this.$router.replace("/");
        } else {
          await this.$store.dispatch("signup", actionPayload);
        }
        const redirectUrl = "/" + (this.$route.query.redirect || "coaches");
        this.$router.replace(redirectUrl);
      } catch (err) {
        console.error(err);
        this.errorMsg = err.message || "Failed to authenticate, try again";
      }

      this.isLoading = false;
    },
    handleError() {
      this.errorMsg = null;
    },
    switchauthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
.contain {
  height: 60vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

form {
  margin: 1rem;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(240deg, #67ebfa, #98f8e1, #fff 70%);
  box-shadow: rgba(0, 0, 0, 0.055) 0px 1px 4px;
  padding: 1rem 2rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: #3f7856;
}

input,
textarea {
  display: block;
  width: 100%;
  border: none;
  font: inherit;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.055) 0px 1px 4px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #f3fff4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.actions {
  margin-top: 2rem;
}
</style>
