<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model.trim="firstname"
        />
      </div>
      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model.trim="lastname"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="rate">Hourly rate</label>
        <input type="number" name="rate" id="rate" v-model.number="rate" />
      </div>
      <div class="form-control">
        <h3>Areas of expertise</h3>
        <div>
          <input
            type="checkbox"
            value="frontend"
            v-model="areas"
            id="frontend"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" value="backend" id="backend" v-model="areas" />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" value="career" id="career" v-model="areas" />
          <label for="career">Career Adviosory</label>
        </div>
      </div>
      <base-button mode="outline">Register</base-button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      description: "",
      rate: "",
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstname,
        last: this.lastname,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formData);
    },
  },
};
</script>

<style scoped>
section {
  padding: 1rem 2rem;
}
.form-control {
  margin: 0.5rem 0;
}
.form-control:last-of-type {
  margin-bottom: 2rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #3f7856;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
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
  background-color: #e2f8e4;
  outline: none;
  border-color: #7ec384;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 1rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
