<script>
    import quadraticDonut from '../lib/quadratic-donut.png';
    import exponentialDonut from '../lib/exponential-donut.png';
    import graphDonut from '../lib/graph-donut.png';
    import factorialDonut from '../lib/factorial-donut.png';
    import linearDonut from '../lib/linear-donut.png';
    import logDonut from '../lib/log-donut.png';
    import nlognDonut from '../lib/nlogn-donut.png';
    import constantDonut from '../lib/constant-donut.png';

    import donutWave from '../lib/donut-wave.png';
    import donutWaveLeft from '../lib/donut-wave-left.png';
    import donutHypeOpen from '../lib/donut-hype-eyes-open.png';
    import donutHypeClosed from '../lib/donut-hype-eyes-closed.png';
    import donutThinkLeft from '../lib/donut-think-left.png';
    import donutThinkRight from '../lib/donut-think-right.png';

    import Constant from '../lib/Constant.svelte';
    import Exponential from '../lib/Exponential.svelte';
    import Linear from '../lib/Linear.svelte';
    import Factorial from '../lib/Factorial.svelte';
    import Logarithmic from '../lib/Logarithmic.svelte';
    import Quadratic from '../lib/Quadratic.svelte';
    import Quasilinear from '../lib/Quasilinear.svelte';
    import { lab } from 'd3';
    import { createEventDispatcher } from 'svelte';

    const dispatcher = createEventDispatcher();

    let donuts = [
    { src: constantDonut, label: 'Constant Time', top: 500, left: 35, width: 180, page: Constant },
    { src: logDonut,label: 'Log Time', top: 600, left: 35, width: 180, page: Logarithmic },
    { src: linearDonut,label: 'Linear Time', top: 700, left: 35, width: 180, page: Linear },
    { src: nlognDonut,label: 'nLog(n) Time', top: 800, left: 35, width: 180, page: Quasilinear },
    { src: quadraticDonut,label: 'Quadratic Time', top: 900, left: 35, width: 180, page: Quadratic },
    { src: exponentialDonut,label: 'Exponential Time', top: 1000, left: 35, width: 180, page: Exponential },
    { src: factorialDonut,label: 'Factorial', top: 1100, left: 35, width: 180, page: Factorial }]

    let donutTexts = [
        "Explanation",
        "The How: Step 1",
        "The How: Step 2",
        "The How: Step 3",
        "The How: Step 4",
        "Graph & Table",
        "Time Complexities",
        "Practice",
        "Sources"
    ]

    let linearDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: linearDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    let logDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: logDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    let quasiDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: nlognDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    let quadDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: quadraticDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    let expDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: exponentialDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    let factorialDonuts = [
        { src: donutWave, label: "Welcome!", top: 100, left: 35, width: 150 },
        { src: donutThinkRight, label: donutTexts[0], top: 200, left: 35, width: 130 },
        { src: donutHypeClosed, label: donutTexts[1],top: 300, left: 35, width: 150 },
        { src: donutWaveLeft, label: donutTexts[2],top: 400, left: 35, width: 150 },
        { src: donutHypeOpen,label: donutTexts[3], top: 500, left: 35, width: 150 },
        { src: donutThinkLeft,label: donutTexts[4], top: 600, left: 35, width: 130 },
        { src: graphDonut,label: donutTexts[5], top: 700, left: 30, width: 190 },
        { src: factorialDonut,label: donutTexts[6], top: 800, left: 35, width: 190 },
        { src: donutThinkRight,label: donutTexts[7], top: 900, left: 60, width: 130 },
        { src: donutWave,label: donutTexts[8], top: 1000, left: 42, width: 150 },
    ]

    function updateDonutsList() {
        const updatedDonutsList = [
            linearDonuts, logDonuts, quasiDonuts, quadDonuts, expDonuts, factorialDonuts,
        ];

        const updatedDonuts = updatedDonutsList[index];
        updateDonuts(updatedDonuts);
    }

    let index = 0
    function prevQuestion() {
        index = (index - 1 + donuts.length) % donuts.length;
        console.log("Previous Question Index:", index);
        updateDonutsList();
    }
    function nextQuestion() {
        index = (index + 1) % donuts.length;
        console.log("Next Question Index:", index);
        updateDonutsList();
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