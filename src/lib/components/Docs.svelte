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

        <Collapsible header={'"define" command'}>
            <div class="mb-s">Usage:</div>
            <pre>define [constant] [global] $&lt;name&gt; &lt;value&gt;</pre>
            <p>
                Sets the value of variable <code>$name</code> to be
                <code>value</code>.
            </p>
            <p>
                This doesn't work in the same way as C defines. These are more
                like variable definitions. Variables only exist after their
                definition, and non-constant variables can be redefined. When a
                variable is used in the code, it is expanded out to its full
                value, except in certain cases with constant variables.
            </p>
            <p>
                By default, variables are not constant, and they are not global.
                Non-global variables only apply within the function that
                contains them (their scope). To modify a global variable from
                within a function, use the <code>global</code> keyword. This keyword
                is not required outside of functions. Local variables override global
                variables with the same name. Constant variables are always global.
            </p>
            <p>
                Constant variables are a special kind of variable meant to be
                used with the in-game Automator "constants" tab. The compiler
                avoids expanding these when possible, including when used as a
                study tree in <code>studies purchase</code>, and when used in
                comparisons. These variables cannot be modified, and it is
                recommended to define them at the start of the code.
            </p>
        </Collapsible>
    </Collapsible>
</div>

<style>
    .mb-s {
        margin-bottom: 8px;
    }
</style>
