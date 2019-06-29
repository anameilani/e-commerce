<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="item.image" alt="Image Product">
        <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.price}}</p>
            <p class="card-text">Stock: {{item.stock}}</p>
            <div v-if="status = 'login'">
                <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardItem',
    props: ['status', 'item'],

}
</script>

<style scoped>

</style>
