<script>
    import Collapsible from "./Collapsible.svelte";
</script>

<div style="min-width: 300px; width: 60%;">
    <Collapsible header="Documentation" headerElem="h2">
        <a
            href="https://github.com/Vince7778/automatorplusplus/blob/master/samplescript.app"
            >Sample script</a
        >
        <Collapsible header="Functions">
            <div class="mb-s">Usage:</div>
            <pre>function &lt;name&gt; $[arg1 name] $[arg2 name] {"{"}
    (function body)
{"}"}</pre>
            <p>
                Defines a function with a given name and some number of
                arguments. Calls to this function will expand out into a copy of
                the inner code. If an argument with a name such as "$x" is
                given, then all occurrences of "$x" in the body will be
                replaced.
            </p>
            <p>The function can be called after its definition with:</p>
            <pre>call &lt;name&gt; [arg1 value] [arg2 value] ...</pre>
            <p>
                If you want to exclude an argument, use <code>null</code> as its
                value. Arguments can be in quotes (but the quotes won't be copied).
            </p>
            <p>
                Note that the variables can mostly only replace individual
                values. One exception to this is with "ec$x completions", where
                $x can replace the number.
            </p>
        </Collapsible>

        <Collapsible header="Comments">
            <p>
                Inline comments are supported, but are always removed during
                compilation.
            </p>
        </Collapsible>

        <Collapsible header={'"raw" command'}>
            <div class="mb-s">Usage:</div>
            <pre>raw "[raw text]"</pre>
            <p>
                The raw command copies the text inside of the string and puts it
                unchanged (besides variables) into the output. For instance, you
                could do <code>raw "$prestige"</code> and it would put the value
                of the <code>$prestige</code> variable into a command.
            </p>
            <p>Since it bypasses the error system, use it with care.</p>
        </Collapsible>

        <Collapsible header="Errors">
            <p>The code automatically checks for errors.</p>
            <p>
                If you get an error at the end of the input, there needs to be a
                newline there.
            </p>
            <p>
                If you have some code that <i>should</i> be correct, but it
                gives an error, use the <code>raw</code> command to include it anyways.
            </p>
        </Collapsible>
    </Collapsible>
</div>

<style>
    .mb-s {
        margin-bottom: 8px;
    }
</style>
