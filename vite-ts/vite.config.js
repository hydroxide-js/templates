import { defineConfig } from 'vite';
import hydroxide from 'vite-plugin-hydroxide';

export default defineConfig({
	plugins: [hydroxide()],
});
