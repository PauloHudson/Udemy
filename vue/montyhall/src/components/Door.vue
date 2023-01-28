<template>
  
</template>

<script>

import Gift from './GiftValue'

export default {
    name: 'Door',
    components: {Gift},
    props:{
        number: {},
        hasGift: {type: Boolean},

    },
    data: function(){
        //precisamos saber se está aberta ou não 
        //para cada instancia do obj ele vai criar um outro.
        //apartir de mudanças na aplicação ele mudara esses estados internos...

        return{
            open: false,
            selected: false, 
        }
    }
}
</script>

<style>

</style>