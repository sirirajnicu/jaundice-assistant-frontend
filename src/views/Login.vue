<template>
  <body>
  <div class="formContainer">
    <p
        style="color: #60C09E;
        font-size: 40px;
        text-align: center;">Sign in
    </p>
    <CForm ref="loginForm">
      <!--username input field-->
      <CFormLabel for="basic-url">username*</CFormLabel>
      <CInputGroup>
        <CFormInput class="border-black inputField" placeholder="username" aria-label="username"/>
      </CInputGroup>

      <br>
      <!--password input field-->
      <CFormLabel for="basic-url">password*</CFormLabel>
      <CInputGroup>
        <CFormInput
            class="border-black inputField"
            placeholder="password"
            aria-label="password"/>
      </CInputGroup>
      <br>

      <!--Role selection buttons-->
      <label>role*</label>

      <div class="button-row btn-group-toggle" data-toggle="buttons">
        <label class="btn roleSelect">
          <input type="radio" name="userRole" id="option1" value="Postpartum Nurse" autocomplete="off" > Postpartum Nurse
        </label>
        <span class="button-space"></span>
        <label class="btn btn-outline-dark ">
          <input type="radio" name="userRole" id="option2" value="Medical Student" autocomplete="off" > Medical Student
        </label>
      </div>
      <div class="button-row btn-group-toggle" data-toggle="buttons">
        <label class="btn roleSelect">
          <input type="radio" name="userRole" id="option3" value="Neonatal Nurse" autocomplete="off"> Neonatal Nurse
        </label>
        <span class="button-space"></span>
        <label class="btn test">
          <input type="radio" name="userRole" id="option4" value="Pediatrician" autocomplete="off"> Pediatrician
        </label>
      </div>


<!--      <div class="button-row">-->
<!--        <label class="roleSelect">-->
<!--          <input type="radio" name="group1" v-model="selectedGroup" value="Button 1" /> Postpartum Nurse-->
<!--        </label>-->
<!--        <span class="button-space"></span>-->
<!--        <label class="roleSelect">-->
<!--          <input type="radio" name="group1" v-model="selectedGroup" value="Button 2" /> Medical Student-->
<!--        </label>-->
<!--      </div>-->


      <!-- Submit button -->
      <div style="margin-top: 20px; text-align: center">
        <CButton class="login-btn" @click="submitForm">Login</CButton>
      </div>

    </CForm>
<!--    <i class="cil-eye"></i>-->
  </div>

  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
body {
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.formContainer {
  background-color: #ffffff;
  padding: 25px 30px 40px 30px;
  border-radius: 33px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.inputField {
  border-radius: 52px;
  height: 50px;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.button-space {
  width: 60px;
  display: inline-block;
}

.roleSelect {
  background-color: #ffffff;
  width: 35vh;
  height: 6vh;
  border: 1px solid black;
  border-radius: 52px;
  padding-top: 8px;
  cursor: pointer;
  text-align: center;
}

.roleSelect:checked {
  :focus-visible {
    background-color: #60C09E;
  }
  :active {
    background: #D8D8D8;
  }
  //background-color: #D8D8D8;
}

.roleSelect:focus {
  outline: none;
}

.roleSelect input[type="radio"] {
  display: none;
}

.test {
  background-color: #60C09E;

}

.login-btn {
  background-color: #FFC02E;
  color: #ffffff;
  width: 30vh;
  height: 8vh;
  border-radius: 52px;
  font-size: xx-large;
}

</style>

<script>
import axios from "axios";
import { CInputGroup, CFormInput, CInputGroupText, CFormLabel, CForm, CButton} from '@coreui/vue'


export default {
  name: 'Login',
  components: {CButton, CForm, CFormLabel, CFormInput, CInputGroupText, CInputGroup},
  data: () => ({
    username: '',
    password: '',
    selectedGroup: '',
    role: '',
  }),
  methods: {
    getRole() {
      
    },
    submitForm() {
      const form = new FormData();
      form.append('username', this.username)
      form.append('password', this.password)

    }
  }
}

</script>



