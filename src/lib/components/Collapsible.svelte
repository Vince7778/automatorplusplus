<script lang="ts">
    export let header: string;
    export let headerElem: string = "h3";

    let expanded = false;
</script>

<div class="collapsible">
    <svelte:element this={headerElem}>
        <button
            on:click={() => {
                expanded = !expanded;
            }}
        >
            <svg viewBox="0 0 20 20" fill="none">
                <path
                    class:hidden={expanded}
                    d="M10 1V19"
                    stroke="white"
                    stroke-width="2"
                />
                <path d="M1 10L19 10" stroke="white" stroke-width="2" />
            </svg>
            {header}
        </button>
    </svelte:element>
    <div class:hidden={!expanded} class="content-div">
        <slot />
    </div>
</div>

<style>
    .hidden {
        display: none;
    }

    svg {
        width: 0.7em;
        height: 0.7em;
    }

    button {
        display: block;
        border: none;
    }

    .content-div {
        border-radius: 5px;
        padding: 10px;
        margin-top: 0;

        border: 1px solid var(--bg-light);
    }

    .collapsible {
        margin-bottom: 7px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 3px;
    }
</style>
