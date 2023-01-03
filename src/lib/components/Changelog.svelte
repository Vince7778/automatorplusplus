<script lang="ts">
    import Collapsible from "./Collapsible.svelte";
</script>

<div style="min-width: 300px; width: 60%;">
    <Collapsible header="Changelog" headerElem="h2">
        <Collapsible header="0.2.0 (current)">
            <ul>
                <li><b>Completely reworked parser system</b></li>
                <li>
                    <b>Breaking changes:</b>
                    <ul>
                        <li>
                            Functions now use curly braces, same as other kinds
                            of blocks. Add a <code>{"{"}</code> at the end of
                            the
                            <code>function</code>
                            line and replace <code>endfunction</code> with
                            <code>{"}"}</code>.
                        </li>
                        <li>
                            Arguments must be prefixed by <code>$</code> in the
                            <code>function</code> statement as well.
                        </li>
                        <li>
                            Variables are now less lenient. They can only
                            replace whole values, since they no longer perform
                            pure text replacement. Use the new <code>raw</code> command
                            to bypass this.
                        </li>
                    </ul>
                </li>
                <li>
                    Added <code>raw</code> command, which directly outputs the input
                    string
                </li>
                <li>Added changelog</li>
                <li>Added error checking</li>
                <li>Improved documentation visuals</li>
            </ul>
        </Collapsible>
        <Collapsible header="0.1.1">
            <ul>
                <li>Added editor resizing</li>
                <li>Added inline comments</li>
                <li>Added more compilation options</li>
            </ul>
        </Collapsible>
        <Collapsible header="0.1.0">
            <ul>
                <li>Created the project!</li>
                <li>Added functions</li>
                <li>Added syntax highlighting</li>
                <li>Added minification</li>
            </ul>
        </Collapsible>
    </Collapsible>
</div>
