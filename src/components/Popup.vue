<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="light-blue darken-1 white--text">
            Add new project
        </v-btn>
        <v-card>
            <v-card-title>
                Add a new project
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-spacer></v-spacer>
                    <v-menu>
                        <v-text-field :value="formattedDate" slot="activator" label="Due date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due" :rules="inputRules"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

    import format from 'date-fns/format'
    import db from '@/fb'

	export default {
		data() {
			return {
				title: '',
                content: '',
                due: null,
                inputRules: [
                    v => v.length >= 5 || 'Minimum length is 5 characters'
                ],
                loading: false,
                dialog: false
            }
        },
        methods: {
			submit() {
                if (this.$refs.form.validate()) {
                	this.loading = true;
                	const project = {
                		title: this.title,
                        content: this.content,
                        due: format(this.due, 'Do MMM YYYY'),
                        person: 'Dalia Balmus',
                        status: 'ongoing'
                    }
					db.collection('projects').add(project).then(() => {
						this.loading = false;
						this.dialog = false;
						this.$emit('projectAdded');
                    })
                }
            }
        },
        computed: {
			formattedDate: function() {
                return this.due ? format(this.due, 'Do MM YYYY') : ''
            }
        }
	}
</script>

<style scoped>

</style>