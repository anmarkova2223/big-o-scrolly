<script>
    import quadraticDonut from '../lib/quadratic-donut.png';
    import exponentialDonut from '../lib/exponential-donut.png';
    import graphDonut from '../lib/graph-donut.png';
    import factorialDonut from '../lib/factorial-donut.png';
    import linearDonut from '../lib/linear-donut.png';
    import logDonut from '../lib/log-donut.png';
    import nlognDonut from '../lib/nlogn-donut.png';
    import constantDonut from '../lib/constant-donut.png';

    import Constant from '../lib/Constant.svelte';
    import Exponential from '../lib/Exponential.svelte';
    import Linear from '../lib/Linear.svelte';
    import Factorial from '../lib/Factorial.svelte';
    import Logarithmic from '../lib/Logarithmic.svelte';
    import Quadratic from '../lib/Quadratic.svelte';
    import Quasilinear from '../lib/Quasilinear.svelte';
    import { lab } from 'd3';

    let donuts = [
    { src: constantDonut, label: 'Constant Time', top: 500, left: 35, width: 180, page: Constant },
    { src: logDonut,label: 'Log Time', top: 600, left: 35, width: 180, page: Logarithmic },
    { src: linearDonut,label: 'Linear Time', top: 700, left: 35, width: 180, page: Linear },
    { src: nlognDonut,label: 'nLog(n) Time', top: 800, left: 35, width: 180, page: Quasilinear },
    { src: quadraticDonut,label: 'Quadratic Time', top: 900, left: 35, width: 180, page: Quadratic },
    { src: exponentialDonut,label: 'Exponential Time', top: 1000, left: 35, width: 180, page: Exponential },
    { src: factorialDonut,label: 'Factorial', top: 1100, left: 35, width: 180, page: Factorial }]

    let index = 0
    function prevQuestion() {
        if (index > 0) {
            index -= 1;
        }
    }
    function nextQuestion() {
        if (index < 6) {
            index += 1;
        }
    }

</script>
<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 550px;
        overflow-y: scroll;
        height: 100%;
        position: relative;
    }

    .buttons {
        display: flex;
        top: 20px;
        width: 880px;
        position: absolute;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-inline: 10px;
    }
    .button {
        font-size: 15px;
        background-color: #fa96e1;
        border-radius: 10px;
        padding: 5px 10px;
        box-shadow: none;
        border-color: none;
    }
    .button:hover {
        color: #ffffff;
    }
</style>

<main>
    {#if index === 0}
    <Constant></Constant>
    {:else if index === 1}
    <Linear></Linear>
    {:else if index === 2}
    <Logarithmic></Logarithmic>
    {:else if index === 3}
    <Quasilinear></Quasilinear>
    {:else if index === 4}
    <Quadratic></Quadratic>
    {:else if index === 5}
    <Exponential></Exponential>
    {:else if index === 6}
    <Factorial></Factorial>
    {/if}
    <div class="buttons">
        <button class="button" on:click={prevQuestion}>Previous</button>
        <button class="button" on:click={nextQuestion}>Next</button>
    </div>
</main>