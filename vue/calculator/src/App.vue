<template>
    <div id="app">
        <h1> Olá Mundo</h1>
        <Calculator/>
    </div>
</template>

<script>

import Calculator from './main/Calculator'

export default {
    components: {Calculator}
}
</script>

<style>

@font-face{
    font-family: "Poppins";
    src: url("./fonts/Poppins-Thin.ttf");
}

*{
    font-family: "Poppins";

}
body{
    margin: 0;

}
#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;
    align-items: center;

    color: #fff;
    background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
}
h1{
    font-size: 3vh;
    text-transform: uppercase;
}

</style>