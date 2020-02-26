<template>

    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat color="white" class="success my-4" slot="activator">Add new member</v-btn>
        <v-card class="pa-3">
           <v-card-title class="grey--text subheading">Add New Member</v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Name" v-model="name" prepend-icon="person_add" :rules="inputRules"></v-text-field>
                    <v-text-field label="Position" v-model="position" prepend-icon="domain" :rules="inputRules"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mt-3" @click="submit" :loading="loading">Add member</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>

    
</template>

<script>

    import db from  '@/fb'

	export default {
		name: "AddMember",
        data() {
			return {
				name: '',
				position: '',
				inputRules: [
					v => v.length >= 3 || 'Minimum length is 3 characters'
                ],
                loading: false,
                dialog: false,


            }
        },
        methods: {

			submit() {
				if (this.$refs.form.validate()) {
					this.loading = true;
					const member = {
						name: this.name,
						position: this.position,
					}
					db.collection('team').add(member).then(() => {
						this.loading = false;
						this.dialog = false;
					})
				}
			}
        }
	}
</script>

<style scoped>

</style>