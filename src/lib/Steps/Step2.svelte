<script>
    import Katex from 'svelte-katex';
    import 'katex/dist/katex.min.css';
    import { onMount } from 'svelte';



</script>

<style>
    .container{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container.text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h3 {
        background-color: #fa96e1;
        border-radius: 5px;
        color: #FFFFFF;
        width: 600px;
        text-align: center;
    }
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

    .code-container {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .code.block {
        /* border: 1px solid red; */
        height: 200px;
        width: 480px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .code.text{
        /* border: 1px solid red; */
        height: 200px;
        width: 480px;
        margin: 10px;
    }


    .line1 { color: rgba(102, 153, 255, 1); }
    .line2 { color: rgba(204, 0, 0, 1); }

</style>

<main class="container">
    <div class="container text">
        <h3>Step 2: Calculate the Big O of each operation.</h3>
    </div>
    <div class="code-container">
        <div class="code block">
            <pre>
                <code class="language-python">
def func(n):
<span class="line1">    total = 0</span>
<span class="line1">    for elem in range(n):</span>
<span class="line2">        total += elem</span>
<span class="line2">        print(total)</span>
                </code>
            </pre>
        </div>
        <div class="code text">
            <p>Here, we can outline the time complexity of each line:</p>
            <ul>
                <li>The blue lines compute only once.</li>
                <li>In our case the blue lines all take <Katex>O(1)</Katex> time because the computer performs just one opration.</li>
                <li>The red lines compute n times (Remember: n is the length of the list).</li>
                <li>Each line inside the for loop takes <Katex>O(1)</Katex> and is performed n times. So the total time complexity for the for loop is <Katex>O((1+1)*n)=O(2n).</Katex></li>
                <li>Combining the operations inside the for-loop and outside the for-loop, we get the total time complexity of <Katex>O(2n+1).</Katex></li>
            </ul>
        </div>
    </div>
</main>