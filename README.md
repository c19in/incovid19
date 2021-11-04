
A port of the <https://covid19india.org> frontend available at is
available at <https://github.com/covid19india/covid19india-react>.

The main changes that have been made are:

- The navigation interface has been made as minimal as possible

- Social media and other contact links to the covid19india team have
  been removed to make it clear that they are not responsible for this
  project

- Github pages are served through the `docs` folder rather than the `gh-pages` branch

- The `homepage` field in [package.json](package.json) has been used
  to serve the site from a subdomain. This required the use of
  `process.env.PUBLIC_URL` in some cases, because the original
  codebase implicitly assumed in several places that it would be
  served from a top-level domain.

- The maps are being served from a [separate
  repository](https://github.com/c19in/mini_maps), because I could not
  figure out how to get them served from the subdomain.
  
- Change `API_DOMAIN` etc. in [constants.js](src/constants.js) as
  necessary to point to alternative data sources.

(I am completely new to React, so the way I did this may not be optimal.)


## Testing

The website is written using react and is built using yarn (a node
alternative). To install dependencies:

```
yarn install
```

To test locally:

```
yarn start
```

(this will make a test build available locally).

To deploy:

```
yarn build
```

and sync the created `build` folder to be served by a static
server. To deploy using Github pages, sync to the `docs` folder, e.g.,

```
rsync -av --delete build/ yarn/
```

and commit / push after adding any newly created files.
