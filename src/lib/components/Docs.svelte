<div>
    <h2>Documentation</h2>
    <a
        href="https://github.com/Vince7778/automatorplusplus/blob/master/samplescript.app"
        >Sample script</a
    >
    <div class="mw">
        <h3>Functions</h3>
        <div class="mb-s">Usage:</div>
        <pre>function &lt;name&gt; $[arg1 name] $[arg2 name] {"{"}
    (function body)
{"}"}</pre>
        <p>
            Defines a function with a given name and some number of arguments.
            Calls to this function will expand out into a copy of the inner
            code. If an argument with a name such as "x" is given, then all
            occurrences of "$x" in the body will be replaced.
        </p>
        <p>The function can be called after its definition with:</p>
        <pre>call &lt;name&gt; [arg1 value] [arg2 value] ...</pre>
    </div>

    <div class="mw">
        <h3>Comments</h3>
        <p>
            Inline comments are supported, but are always removed during
            compilation.
        </p>
    </div>
</div>

<style>
    .mb-s {
        margin-bottom: 8px;
    }

    .mw {
        width: 60%;
        min-width: 300px;
    }

    pre {
        border: 1px solid var(--bg-hover);
        padding: 3px;
        border-radius: 3px;
    }
</style>
