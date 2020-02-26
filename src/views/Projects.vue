<template>
    <div class="about">
        <h1 class="subheading grey--text">On this page is shown only user's projects</h1>

        <v-container>
            <v-expansion-panel class="my-5">
                <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
                    <template v-slot:header>
                        <div>{{ project.title }}</div>
                    </template>
                    <v-card>
                        <v-card-text class="px-4 grey--text">
                            <div>
                                <div class="font-weight-bold">due by {{ project.due }}</div>
                                {{ project.content }}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-container>

    </div>
</template>

<script>
    import db from '@/fb'
    export default {
		data() {
			return {
				projects: [
					]
			}
		},
        computed: {
            myProjects:function () {
				return this.projects.filter( project => {
					return project.person === 'Dalia Balmus';
				});
			}
        },
		created() {
			db.collection('projects').onSnapshot(res => {
				const changes = res.docChanges();

				changes.forEach(change => {
					if (change.type === 'added') {
						this.projects.push({
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
    .v-expansion-panel {
        box-shadow: none;
        border: 1px solid #f2f2f2;
    }
    .theme--light.v-expansion-panel .v-expansion-panel__container {
        border: 1px solid #f2f2f2;
    }
    .v-card.v-sheet {
        border-bottom: none !important;
        border-left: none !important;
        border-right: none !important;
        border-top: 1px solid #f2f2f2;
    }
</style>
