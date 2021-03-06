const { join } = require('path');
const polka = require('polka');

const { PORT=3000 } = process.env;
const dir = join(__dirname, 'public');
const serve = require('serve-static')(dir);

polka()
	.get('/', serve) // OR move `public/index.html` into root dir
	.use('assets', serve)
	.get('/health', (req, res) => {
		res.end('OK');
	})
	.listen(PORT).then(_ => {
		console.log(`> Running on localhost:${PORT}`);
	});
