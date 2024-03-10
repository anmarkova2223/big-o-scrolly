<script>
//import cheatsheet from './cheatsheet.js';
import donutHype from '../lib/donut-hype-eyes-open.png';
    import { goto } from '$app/navigation';

    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css'; //having this is what makes the math format nicely

    let selected = '';
    let showAnswer = false;
    let correctAnswer = 'nx';
    let answerText = 'Reveal Answer';
    function select(event) {
        selected = event.target.value;
    }
    function revealAnswer() {
        showAnswer = !showAnswer;
        answerText = showAnswer ? 'Hide Answer' : 'Reveal Answer';
    }

    
</script>

<style>
    .practice.question {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .answer-choices {
    margin-left: 20px;
    text-align: left;
    width: 500px;
  }
  .correct {
    color: green;
  }
  .incorrect {
    color:red;
  }

    /* Adjust the pre element styles if needed */
    pre {
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        justify-content: center;
    }

    pre code {
        text-align: left; /* Ensure code is left-aligned */
    }

    :global(.katex) {
        font-size: inherit; /* Make KaTeX font size same as the regular text */
    }

    :global(.katex-display) {
        font-size: inherit; /* Adjust font size for KaTeX display mode */
    }


</style>
<main>
    <div class="practice">
        <h2>Problem 3</h2>
        <div class="practice question">
        <pre>
            <code class="language-python">
            a = 0;
            for i in range(N):
                for j in reversed(range(i,N)):
                a = a + i + j;                
            </code>
        </pre>
        <div class="answer-choices">
            <h3>Answer Choices</h3>
            <div>
                <label>
                <input type="checkbox" 
                        class="radio" 
                        value="1" 
                        name="status" 
                        on:click={select} checked={selected === '1'}/><Katex>O(1)</Katex>
                </label>
                <label>
                <input type="checkbox" 
                    class="radio" 
                    value="logn" 
                    name="status"
                    on:click={select} checked={selected === 'logn'}/><Katex>O(log(n))</Katex>
                </label>
                <label>
                    <input type="checkbox" 
                        class="radio" 
                        value="n" 
                        name="status"
                        on:click={select} checked={selected === 'n'}/><Katex>O(n)</Katex>
                </label>
                <label>
                    <input type="checkbox" 
                        class="radio" 
                        value="nlog(n)" 
                        name="status"
                        on:click={select} checked={selected === 'nlog(n)'}/><Katex>O(nlog(n))</Katex>
                </label>
                </div>
                <div>
                <label>
                    <input type="checkbox" 
                        class="radio" 
                        value="nx" 
                        name="status"
                        on:click={select} checked={selected === 'nx'}/><Katex>O(n^x)</Katex>
                </label> 
                <label>
                    <input type="checkbox" 
                        class="radio" 
                        value="xn" 
                        name="status"
                        on:click={select} checked={selected === 'xn'}/><Katex>O(x^n)</Katex>
                </label>
                <label>
                    <input type="checkbox" 
                        class="radio" 
                        value="n!" 
                        name="status"
                        on:click={select} checked={selected === 'n!'}/><Katex>O(n!)</Katex>
                </label>
                </div>
            <div>
            <button on:click={revealAnswer}>{answerText}</button>
            {#if showAnswer}
                <p class="answer check {selected === correctAnswer ? 'correct' : 'incorrect'}">{selected === correctAnswer ? 'Correct answer!' : 'Incorrect answer.'}</p>
                <p class="answer explanation"> The above code runs total no of times 
                    = N + (N – 1) + (N – 2) + … 1 + 0 
                    = N * (N + 1) / 2 
                    = 1/2 * N^2 + 1/2 * N 
                    O(N^2) times.
                    </p>
            {/if}
            </div>
        </div>
        </div>
    </div>
</main>