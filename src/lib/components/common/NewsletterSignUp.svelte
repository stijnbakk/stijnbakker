<script lang="ts">
	type TLangselect = 'EN' | 'NL';
	export let languageSelect: TLangselect = 'EN';
	export let email: string = '';

	let response = null;
	let errorMessage = '';
	let showSuccess = false;

	// Function to validate email
	const validateEmail = (email: string) => {
		let re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	// Computed value to check if email is valid
	$: isEmailValid = validateEmail(email);

	const handleSubmit = async () => {
		// TODO: add loading state
		if (!isEmailValid) {
			errorMessage = 'Please enter a valid email address.';
			return;
		}
		try {
			const res = await fetch('/newsletter/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, language: languageSelect })
			});
			if (!res.ok) {
				errorMessage = 'Something went wrong. Please try again later.';
			} else {
				showSuccess = true;
				email = '';
			}
		} catch (error) {
			errorMessage = 'Something went wrong. Please try again later.';
		}
	};

	// TODO: Add container query to check size and conditionally make into flex-row or flex-col
	// TODO: add option to 'simplified' widget as prop with default value
</script>

<form
	class="w-full flex flex-col border-black border-[1px] rounded p-4"
	on:submit|preventDefault={handleSubmit}
>
	<p class="font-bold text-xl py-0 my-0 mb-2">Signup for my newsletter</p>
	<p class="my-0 mb-4 text-xs">
		My monthly wrap-up direct in your inbox. Want to get a peek of what you sign up for? Browse the <a
			href="/newsletter">newsletters</a
		>
	</p>
	<div class="w-full gap-2 flex flex-row rounded">
		<input
			type="email"
			id="email"
			required
			class="flex-grow"
			placeholder="stijn@stijnbakker.com"
			bind:value={email}
		/>
		<select bind:value={languageSelect} id="language">
			<option value="EN">English</option>
			<option value="NL">Nederlands</option>
		</select>

		<button
			type="submit"
			class={`bg-black text-center p-3 text-white ${
				isEmailValid ? 'hover:bg-gray-700 hover:cursor-pointer' : 'opacity-20'
			}`}
			disabled={!isEmailValid}
		>
			{#if languageSelect === 'NL'}
				Ik kan niet wachten!
			{:else}
				Sign me up!
			{/if}
		</button>
	</div>

	{#if showSuccess}
		<div class="w-full bg-green-200 mt-2 rounded p-2 text-sm text-green-800">
			{#if languageSelect === 'nl'}
				Yes, die is binnen! Super bedankt, en tot snel!
			{:else}
				Yep, got your email. Thanks a lot! Speak to you soon :-)
			{/if}
		</div>
	{:else if errorMessage !== ''}
		<div class="w-full bg-red-200 mt-2 rounded p-2 text-sm text-red-800">
			Oops, something went wrong. Can you drop me an email to let me know? <a
				href="mailto:stijn@stijnbakker.com">stijn@stijnbakker.com</a
			>
		</div>
	{:else}
		<p class="my-0 mt-2 text-gray-300 text-xs">
			You'll only signup for my newsletter, not for spam or any nonsense. Pinky-promise
		</p>
	{/if}
</form>

<style lang="scss">
	input,
	select,
	button {
		@apply rounded;
	}
	.itemcontainer {
		@apply flex flex-col gap-1;
		label {
			@apply text-gray-400 text-xs;
		}
		input,
		button,
		label {
			@apply flex-grow;
		}
	}
</style>
