<template>
    <div>
        <!-- {{ countries }} -->
        <div v-if="loggedInUser == null" class="container mt-5">
            <b-row>
                <b-col md="6" offset-md="3" class="jnzwrap ">
                    <b-row>
                        <b-col md="6" sm="12" class="d-flex justify-content-center align-items-center">
                            <h3>Welcome! Please,&nbsp;</h3>
                        </b-col>
                        <b-col md="6" sm="12" class="d-flex justify-content-center align-items-center">
                            <b-button @click="OpenModal({ 'method': 'login' })" variant="primary">Login</b-button>
                            <h3>&nbsp;or&nbsp;</h3>
                            <b-button @click="OpenModal({ 'method': 'signup' })" variant="success">Sign Up</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row><b-col md="6" offset-md="3" ><flagCarousel :countries="countries"/></b-col></b-row>
        </div>

        <b-modal v-model="showModal" :title="getTitle" @ok="doAction" @cancel="afterCancel" no-close-on-backdrop>
            <b-form @submit.prevent="updateAccount">
                <b-form-group label="Username">
                    <b-form-input ref="usernameInput" v-model="updatedUser.username" required></b-form-input>
                </b-form-group>
                <b-form-group v-if="method !== 'login'" label="Email">
                    <b-form-input ref="emailInput" v-model="updatedUser.email" type="email" required></b-form-input>
                </b-form-group>
                <b-form-group label="Password">
                    <b-form-input ref="passwordInput" v-model="updatedUser.password" type="password" required></b-form-input>
                </b-form-group>
                <b-form-group v-if="method !== 'login'" label="Confirm Password">
                    <b-form-input ref="confirmpasswordInput" v-model="updatedUser.confirmpassword" type="password" required></b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>
  
<script>
import flagCarousel from './flagCarousel.vue'
export default {
    name: 'AccountComponent',
    props: {
        countries:null,
        users: Array,
        loggedInUser: null,
    },
    components:{
        flagCarousel
    },
    data() {
        return {
            showModal: false,
            updatedUser: {
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
            },
            method: '',
        };
    },
    methods: {
        OpenModal(payload) {
            console.log('users', this.users);
            this.method = payload.method || '';
            switch (this.method) {
                case 'login':

                    break;
                case 'signup':


                    break;
                case 'update':
                    this.fillUser()
                    break;

                default:
            }
            this.showModal = true;
        },
        doAction() {
            let payload = {};
            let isValid = true;
            switch (this.method) {
                case 'login':
                    payload = { username: this.updatedUser.username, password: this.updatedUser.password }
                    this.$emit('login', payload)
                    this.clearUser()
                    break;
                case 'signup':
                    if (!this.confirmpassword()) {
                        isValid = false;
                        break;
                        }
                    payload = this.updatedUser
                    delete payload.confirmpassword;
                    this.$emit('signup', payload);
                    this.clearUser()

                    break;
                case 'update':
                if (!this.confirmpassword()) {
                        isValid = false;
                        break;
                        }
                    this.$emit('updateUser', this.updatedUser);
                    this.clearUser()
                    // this.showModal=false;
                    break;
                default:
                    alert('Errore, metodo ' + this.method + ' non gestito')
                    break;
            }
            if (isValid) {
                this.showModal = false;
            } else {
                // Se non è valido, imposta il focus sull'input vuoto
                this.$nextTick(() => {
                const emptyInput = Object.keys(this.updatedUser).find(key => !this.updatedUser[key]);
                if (emptyInput) {
                    this.$refs[`${emptyInput}Input`].focus();
                }
                });
            }
            },
        afterCancel() {
            this.clearUser();
        },
        fillUser() {
            this.updatedUser.username = this.users[this.loggedInUser].username;
            this.updatedUser.email = this.users[this.loggedInUser].email;
            this.updatedUser.password = this.users[this.loggedInUser].password;
            this.updatedUser.confirmpassword = this.users[this.loggedInUser].password;
        },
        clearUser() {
            this.updatedUser = { username: '', email: '', password: '', confirmpassword: '' }
        },
        confirmpassword() {
            if (this.updatedUser.password !== this.updatedUser.confirmpassword) {
                alert('Passwords don\'t Match!')
                return false;
            }
            if (this.updatedUser.password === '') {
                alert('Password is empty!')
                return false;
            }
            return true;
        }
    },
    computed: {
        getTitle() {
            switch (this.method) {
                case 'login':
                    return 'Please, log in!'
                case 'signup':
                    return 'Welcome! Please, Sign Up!!'
                case 'update':
                    return 'Update Account'
                default:
                    return 'Error: no action!'
            }
        }
    }
};
</script>
  