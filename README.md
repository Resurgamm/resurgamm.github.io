# Boyi Li's academic homepage

The site uses the [Swiss theme](https://github.com/Galaxy-Dawn/academic-homepage-templates/tree/main/themes/swiss) from Galaxy-Dawn's Academic Homepage Templates. The upstream MIT notice is in `LICENSE-SWISS`.

Run a local preview from the repository root with Python 3.

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [the homepage](http://127.0.0.1:4173/) or [the full publication list](http://127.0.0.1:4173/publications/).

Edit `index.html` for the homepage and `publications/index.html` for the full publication list. The pages share `assets/css/swiss.css` and `assets/js/swiss.js`.

GitHub Pages serves the static files from the root of the publishing branch. The `.nojekyll` marker enables direct static hosting.
