<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>


        <AddMember></AddMember>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card class="text-xs-center ma-3 pa-4">
                        <v-responsive>
                            <v-avatar size="100">
                                <img :src="avatar" alt="Image Desc">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text class="py-4">
                            <div class="subheading">
                                {{ person.name }}
                            </div>
                            <div class="grey--text">
                                {{ person.position }}
                            </div>
                        </v-card-text>
                        <v-card-actions flat color="grey" class="justify-center">
                            <v-btn flat>
                                <v-icon left small>message</v-icon>
                                <span>Messsage</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import  db from '@/fb'
	import AddMember from "../components/AddMember";
	export default {
		components: {AddMember},
		data() {
			return {
				avatar: '/avatar1.png',
				team: []
            }
        },

        created() {
            db.collection('team').onSnapshot((res) => {
				const changes = res.docChanges();

				changes.forEach(change => {
					if (change.type === 'added') {
						this.team.push({
							...change.doc.data(),
							id: change.doc.id
						})
					}
				})
            })
        }
	}
</script>

<style scoped>

</style>