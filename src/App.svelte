<script>
	import pym from "pym.js";
	import { items, urls, types } from "./config";
	import { getData } from "./utils";
	import Select from "./Select.svelte";
	import Toggle from "./Toggle.svelte";

	let pymParent;
	let pymDiv;
	let pymReady = false;

	let options = Object.keys(items);
	let places;
	let selected = ["population", "agemed", "age10yr"];
	let code = "E07000087";
	let selector = false;
	let change = false;

	function switchItem(key) {
		if (selected.includes(key)) {
			selected = selected.filter((d) => d != key);
		} else {
			selected = [...selected, key];
		}
	}

	function moveItem(key, int) {
		let index = selected.indexOf(key);
		let newindex = index + int;
		if (newindex >= 0 && newindex <= selected.length - 1) {
			let newselected = selected.filter((d) => d != key);
			newselected.splice(newindex, 0, key);
			selected = newselected;
		}
	}

	function makePym() {
		pymParent = new pym.Parent("profile", url, { name: "profile" });
		pymReady = true;
	}

	getData(urls.places).then((res) => {
		res.forEach((d) => {
			d.typepl = types[d.type].pl;
			d.typenm = types[d.type].name;
		});
		places = res.sort((a, b) => a.name.localeCompare(b.name));
	});

	$: url = `${urls.base}${code ? code : ""}/${selector ? "select" : ""}/${
		change ? "change" : ""
	}/${selected.join(",")}`;

	$: !pymReady && pymDiv && url && makePym();
	$: pymReady && url && window.open(url, "profile");
</script>

<header>
	<div class="col-wide">
		<h1>Build your area profile</h1>
	</div>
</header>

<section>
	<div class="col-wide">
		<h3>Select your area</h3>
		{#if places}
			<Select options={places} bind:selected={code} group="typenm" />
		{/if}
	</div>
</section>
	
<section>
	<div class="col-wide">
		<h3>Select profile components</h3>
		<div id="options">
			{#each options as key}
				<div class="btn-group">
					<button
						class="btn"
						class:btn-active={selected.includes(key)}
						prevent
						on:click={() => switchItem(key)}
					>
						{items[key].label}
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="col-wide">
		<h3>Select options</h3>
		<Toggle bind:checked={change} id="change">Include change over time toggle</Toggle>
		<Toggle bind:checked={selector} id="selector">Allow selection of other areas</Toggle>
	</div>
</section>

<section>
	<div class="col-wide">
		<h3>Selected components</h3>
		<div id="selected">
			{#if selected[0]}
				{#each selected as key}
					<div class="btn-group">
						<button class="btn btn-active" on:click={() => moveItem(key, -1)}>
							&lt;
						</button>
						<button class="btn btn-active" on:click={() => switchItem(key)}>
							{items[key].label}
						</button>
						<button class="btn btn-active" on:click={() => moveItem(key, 1)}>
							&gt;
						</button>
					</div>
				{/each}
			{:else}
				<span class="muted">No components selected</span>
			{/if}
		</div>
	</div>
</section>

<section>
	<div id="profile" bind:this={pymDiv} class="col-wide" />
</section>

<section>
	<div class="col-wide">
		<h3>Embed code</h3>
		<div id="code">
			<code>
				{`<div id="profile"></div><script src="http://cdn.ons.gov.uk/vendor/pym/1.3.2/pym.min.js"></script><script>var pymParent = new pym.Parent("profile", "${url}", {name: "profile"});</script>`}
			</code>
		</div>
	</div>
</section>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
	:global(body) {
		font-family: "Open Sans", sans-serif;
	}
	h3 {
		margin-top: 0;
		margin-bottom: 5px;
	}
	section {
		margin-bottom: 20px;
	}
	.btn {
		padding: 2px 4px;
		margin: 0;
		border: 2px solid #206095;
		border-radius: 0;
		cursor: pointer;
		color: #206095;
		background-color: lightgrey;
	}
	.btn-active {
		color: white;
		background-color: #206095;
	}
	#options,
	#selected {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	#selected,
	#code {
		border: 2px solid grey;
		border-radius: 3px;
		padding: 5px;
	}
	#selected {
		padding-bottom: 0;
	}
	.btn-group {
		display: flex;
		flex-direction: row;
		margin-right: 5px;
		margin-bottom: 5px;
	}
	.btn-group > button {
		display: inline;
	}
	.muted {
		color: grey;
		margin-bottom: 5px;
	}
</style>
