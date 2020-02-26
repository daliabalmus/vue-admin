<template>
    <div id="dashboard">

        <h1 class="subheading grey--text">Dashboard</h1>

        <v-container class="my-5">

            <v-layout row class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn small flat v-on="on" color="grey" @click="sortBy('title')">
                            <v-icon left small>folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sort project by name</span>
                </v-tooltip>

                <v-tooltip top>
                    <template>
                        <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                            <v-icon left small>person</v-icon>
                            <span class="caption text-lowercase">By person</span>
                        </v-btn>
                    </template>
                    <span>Sort project by person</span>
                </v-tooltip>


            </v-layout>

            <v-card class="ma-4" v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-4 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">
                            Project Title
                        </div>
                        <div>{{project.title}}</div>
                    </v-flex>
                    <v-flex xs-6 sm4 md2>
                        <div class="caption grey--text">
                            Name
                        </div>
                        <div>{{project.person}}</div>
                    </v-flex>
                    <v-flex xs-6 sm4 md2>
                        <div class="caption grey--text">
                            Due by
                        </div>
                        <div>{{project.due}}</div>
                    </v-flex>
                    <v-flex xs-2 sm4 md2>
                        <div>
                            <v-chip small class="right" :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

    </div>
</template>

<script>
	// import Navbar from '../components/Navbar'

    import db from '@/fb'

	export default {

		// Navbar
		data() {
			return {
				projects: []
			}
		},
		methods: {
			sortBy(prop) {
				this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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

<style>
    .v-card {
        box-shadow: none;
        border: 1px solid #f2f2f2 !important;
    }
    .project.complete {
        border-left: 4px solid #2BBBAD;
    }
    .project.ongoing {
        border-left: 4px solid #ffbb33;
    }
    .project.overdue {
        border-left: 4px solid #CC0000;
    }
    .v-chip.complete {
        background: #2BBBAD;
    }
    .v-chip.ongoing {
        background: #ffbb33;
    }
    .v-chip.overdue {
        background: #CC0000;
    }
</style>