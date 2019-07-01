<template>
    <div>
        <navbar />
            <div class="row">
                <!-- <tableMyItem :items="myitems" /> -->
                <router-view></router-view>
            </div>
        <footerPage />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'

export default {
    name: 'myItem',
    components:{
        navbar,
        footerPage,
    }

}
</script>

<style>

</style>
