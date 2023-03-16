<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Your Message</label>
      <textarea
        name="message"
        id="message"
        rows="5"
        v-model.trim="message"
      ></textarea>
    </div>
    <p v-if="!formIsValid">Please, enter a valid email and non-empty message</p>
    <div class="actions">
      <base-button mode="outline">Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      const formData = {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message,
      };
      // console.log(formData);
      this.$store.dispatch("requests/contactCoach", formData);
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(to top, #f2f5fa, #ffffff);
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
  background-color: #f3fff4;
  outline: none;
  border-color: #f3fff4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.actions {
  margin-top: 2rem;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
