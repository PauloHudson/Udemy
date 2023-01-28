<template>
  <div class="door-area">
    <div class="door-frame">
        <!-- quandos essas duas var forem true ele exibe o present. -->
        <Gift v-if="open && hasGift"/>
    </div>

    <div class="door">
            <!-- numéros das portas -->
        <div class="number"> {{number}} </div>
            <!-- maçaneta -->
        <div class="knob"></div>
    </div>
    
  </div>
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
:root{
    --door-border: 5px solid brown;
}

.door-area{
    position: ralative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #AAA;
    margin-bottom: 20px;
    font-size: 3rem;

    display: flex;
    justify-content: center;


}
.door-frame{
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);


    /* o numero está dentro da porta ------ */
    /* quem está dentro do frame é o GIFT> */
    display: flex;
    justify-content: center;
    align-items: flex-end;


}
</style>