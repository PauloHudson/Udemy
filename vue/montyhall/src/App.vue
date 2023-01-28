<template>
  <div id="app">
    <h1> Problema de MontyHall </h1>
    <Gift />
  </div>
</template>

<script>

import Gift from './components/GiftValue'

export default {
    name: 'App',
    components: {Gift}
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Arial', 'sans-serif';
}
body{
    color: #fff;
    background: linear-gradient(90deg, rgb(21, 17, 90) 0%, rgb(52, 52, 163) 17%, rgba(0, 213, 255, 0.623) 100%);
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#app h1{
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.555);
    background-color:  #0004;
    border-radius: 4px;
    padding: 10px;
    text-transform: uppercase;
    margin-bottom: 60px;

}
</style>