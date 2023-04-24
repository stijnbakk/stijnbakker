<script lang="ts">
import { useLazyImage as lazyImage, useLazyImage } from 'svelte-lazy-image';
	import type { TProjectAttributes } from '../superfeed.types';

export let attributes: TProjectAttributes;
let { src, title, href } = attributes;

const isImageTransparent = (source:string) => {
    if(source.slice(-4) === ".png"){
        return true
    } else { return false }
}
</script>
<a href={href || "#"} class="flex-col w-full overflow-hidden rounded-md rounded-br-none">
    <!-- image -->
    <div class="w-full p-4">
    <img data-src={src} class={`w-full rounded-md ${isImageTransparent(src) ? "" : "shadow-lg"}`} alt={title} use:useLazyImage/>
    </div>
    <!-- content -->
    <div class="bg-primary text-white rounded-md rounded-br-none p-10 text-center -mt-28 pt-28 shadow-lg">
        <p class=" font-serif text-3xl">{title}</p>
    </div>

</a>