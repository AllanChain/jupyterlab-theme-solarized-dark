# jupyterlab-theme-solarized-dark

[![NPM](https://nodei.co/npm/jupyterlab-theme-solarized-dark.png)](https://npmjs.org/package/jupyterlab-theme-solarized-dark)

JupyterLab 2.x Solarized Dark extension.

Originally created by [Jae Hee Lee](http://jaeheelee.info/) at <https://gist.github.com/dschaehi/ff6d30e6779a683053a1f078af178cdb>

I just created this JupyterLab extension, and also fixed icon color issue on JupyterLab 2.x

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab-theme-solarized-dark
```

To enable theme scrollbar, in JupyterLab, navigate to `Settings -> Advanced Settings Editor -> Theme`, and add `"theme-scrollbars": true` to `User Preferences`

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
