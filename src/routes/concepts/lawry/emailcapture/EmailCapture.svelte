<script>
	import { form, field } from 'svelte-forms';
	import { email, required } from 'svelte-forms/validators';

	const emailField = field('email', ' ', [email(), required()]);
	const myForm = form(emailField);
	// let email = ""
	let concept_id = 'lawry';
	$: console.log($emailField);
	$: console.log($myForm);

	const submitEmail = async () => {
		const submittedEmail = await fetch(`/concepts/docr/emailcapture`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				concept_id
			})
		});
	};

    // TODO: add count of unique emails already signed up
</script>

<div class="w-full md:fixed bottom-0 bg-blue-700 p-4 flex gap-3 flex-col md:flex-row z-10">
    <div class="items-center h-full flex-grow text-white">
        <span class="font-sans">Like this concept? Leave your email if you want to see it developed further and keep up-to-date</span>
        <br/><span class="text-sm">I won't spam you with about any other things than this concept</span>
    </div>
	<div class="flex-grow-0 flex gap-2 justify-center">

		<input class="rounded flex-grow" type="email" placeholder="Your email" bind:value={$emailField.value} />
		<button class="px-3 bg-blue-400 text-white hover:opacity-60  rounded" on:click={submitEmail} disabled={!$myForm.valid}>Send!</button>
	</div>
</div>
