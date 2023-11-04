---
title: Icons in SvelteKit
description: How I do icons in sveltekit, with iconify
author: Stijn Bakker
date: 2023-06-22
published: false
---

```bash
yarn add -D @iconify/svelte
```

```.svelte
<script>
import Icon from '@iconify/svelte';
</script>

<Icon icon="mdi-light:home" />
```

See also: [https://iconify.design/docs/icon-components/svelte/](https://iconify.design/docs/icon-components/svelte/)
