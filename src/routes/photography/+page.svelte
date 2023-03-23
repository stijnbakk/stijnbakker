<script>
	// TODO: add ratio and loading animations
	// TODO: add lazy loading
	// TODO: add progressive image formatting
	// TODO: add image captions
	// TODO: sort out feature images
	// TODO: add image lightbox
	const images = [
		'amsterdam1.jpg',
		'amsterdam2.jpg',
		'amsterdam3.jpeg',
		'amsterdam3.jpg',
		'beach1.jpeg',
		'beach2.jpeg',
		'beach3.jpeg',
		'beach4.jpeg',
		'beach5.jpeg',
		'beach6.jpeg',
		'greece1.jpeg',
		'greece2.jpeg',
		'greece3.jpeg',
		'greece4.jpeg',
		'greece5.jpeg',
		'greece6.jpeg',
		'greece7.jpeg',
		'greece8.jpeg',
		'greece9.jpeg',
		'greece10.jpeg',
		'greece11.jpeg',
		'greece12.jpeg',
		'greece13.jpeg',
		'greece14.jpeg',
		'greece15.jpeg',
		'greece16.jpeg',
		'greece17.jpeg',
		'haarlem1.jpeg',
		'haarlem1.jpg',
		'haarlem2.jpeg',
		'haarlem2.JPG',
		'ijmuiden1.jpeg',
		'ijmuiden1.JPG',
		'jungle1.jpeg',
		'london1.jpeg',
		'london2.jpeg',
		'london3.jpeg',
		'london4.jpeg',
		'london5.jpeg',
		'nature1.jpeg',
		'paraty1.jpeg',
		'paraty2.jpeg',
		'paraty3.jpeg',
		'paraty4.jpeg',
		'people1.jpeg',
		'rio1.jpeg',
		'rio2.jpeg',
		'rio3.jpeg',
		'rio4.jpeg',
		'rio6.jpeg',
		'rio7.jpeg',
		'rio8.jpeg',
		'rio9.jpeg',
		'rio10.jpeg',
		'rotterdam1.jpeg',
		'street1.jpeg',
		'street1.jpg',
		'street3.jpeg',
		'street4.jpg',
		'street5.jpg',
		'turtle1.jpeg',
		'zaandam1.jpeg'
	];
</script>

<div class="md:columns-2 gap-5 max-w-7xl mx-auto py-20 px-5">
	{#each images as image}
		<div class="mb-5">
			<img src="/photography/{image}" alt={image} />
		</div>
	{/each}
</div>
