<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !firstname.isValid }">
        <label for="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model.trim="firstname.val"
          @blur="clearValidity('firstname')"
        />
        <small v-if="!firstname.isValid">First name must not be empty</small>
      </div>
      <div class="form-control" :class="{ invalid: !lastname.isValid }">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model.trim="lastname.val"
          @blur="clearValidity('lastname')"
        />
        <small v-if="!lastname.isValid">Last name must not be empty</small>
      </div>
      <div class="form-control" :class="{ invalid: !description.isValid }">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          v-model="description.val"
          @blur="clearValidity('description')"
        ></textarea>
        <small v-if="!description.isValid">Description must not be empty</small>
      </div>
      <div class="form-control" :class="{ invalid: !rate.isValid }">
        <label for="rate">Hourly rate</label>
        <input
          type="number"
          name="rate"
          id="rate"
          v-model.number="rate.val"
          @blur="clearValidity('rate')"
        />
        <small v-if="!rate.isValid"
          >Rate must not be empty and must be greater than 0</small
        >
      </div>
      <div class="form-control" :class="{ invalid: !areas.isValid }">
        <h3>Areas of expertise</h3>
        <div>
          <input
            type="checkbox"
            value="frontend"
            v-model="areas.val"
            id="frontend"
            @blur="clearValidity('areas')"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="backend"
            id="backend"
            v-model="areas.val"
            @blur="clearValidity('areas')"
          />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="career"
            id="career"
            v-model="areas.val"
            @blur="clearValidity('areas')"
          />
          <label for="career">Career Adviosory</label>
        </div>
        <small v-if="!areas.isValid">Must choose at least one area</small>
      </div>
      <p v-if="!formIsValid">Please complete this form correctly</p>
      <base-button mode="outline">Register</base-button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstname: {
        val: "",
        isValid: true,
      },
      lastname: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstname.val === "") {
        this.firstname.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastname.val === "") {
        this.lastname.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        first: this.firstname.val,
        last: this.lastname.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      // console.log(formData);
      this.$emit("save-data", formData);
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
  background-color: #f3fff4;
  outline: none;
  border-color: #f3fff4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
