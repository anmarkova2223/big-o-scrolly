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
    pre {
    width: 200px;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    }

    pre code {
        /* border: 4px solid red; */
        text-align: left;
        width: 200px; /* Ensure code is left-aligned */
    }

    .code-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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

    h3 {
        background-color: #fa96e1;
        border-radius: 5px;
        color: #FFFFFF;
        width: 600px;
        text-align: center;
        
    }

</style>

<main class="container">
        <div class="container text">
          <div>
            <h1>How do you go about calculating Big O?</h1>
            <h2>Big O Notation Rules:</h2>
            <h3>Step 1: Break your algorithm/code into individual operations.</h3>
        </div>

    <div class="code-container">
        <div class="code block">
            <pre>
                <code class="language-python">
def func(n):
    total = 0
    for elem in range(n):
        total += elem
        print(total)
                </code>
            </pre>
        </div>
        <div class="code text">
            <p>Here, we can break the code into the following operations:</p>
            <ol>
                <li>Initialize the variable <code>total</code> to 0</li>
                <li>Iterate through the range of the given value n and add each number to <code>total</code></li>
                <li>Print the value of <code>total</code> after each addition</li>
            </ol>
        </div>
    </div>
</main>