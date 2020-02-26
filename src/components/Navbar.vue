<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-toolbar app flat class="vertical-toolbar" height="80">
            <v-toolbar-title class="white--text">
                <span>Admin</span>
                <span class="font-weight-light text-uppercase">Dashboard</span>
            </v-toolbar-title>
            <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-btn flat color="white">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer class="white" app fixed v-model="drawer">
            <v-toolbar class="nav-toolbar" flat="" height="80" dark>

                <v-toolbar-title>Topics</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/index.png" alt="">
                    </v-avatar>
                    <p class="subheading mt-3">Dalia Balmus</p>
                </v-flex>
                <v-flex>
                    <Popup @projectAdded="snackbar = true" class="my-3"></Popup>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile class="subheading grey--text ml-3">Components</v-list-tile>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="grey--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{ link.text }}
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>


    </nav>
</template>

<script>

    import Popup from './Popup';

	export default {
		name: "Navbar",
		components: {Popup},
		comments: {
			Popup
        },
		data() {
			return {
                links: [
                    {icon: 'dashboard', text: 'Dashboard', route: '/'},
                    {icon: 'folder', text: 'My Projects', route: '/projects'},
                    {icon: 'person', text: 'Team', route: '/team'},
                    {icon: 'bar_chart', text: 'Charts', route: '/charts'},
                ],
                drawer: true,
                snackbar: false
            }
        }
	}
</script>

<style scoped>
    .nav-toolbar {
        background-color: #1572e8;
    }
    .vertical-toolbar {
        background-color: #1269db;
    }

</style>