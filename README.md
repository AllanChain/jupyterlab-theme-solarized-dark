# jupyterlab-theme-solarized-dark

![Github Actions Status](https://github.com/AllanChain/jupyterlab-theme-solarized-dark/workflows/Build/badge.svg)
![License](https://img.shields.io/github/license/AllanChain/jupyterlab-theme-solarized-dark.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/AllanChain/jupyterlab-theme-solarized-dark)
![GitHub stars](https://img.shields.io/github/stars/AllanChain/jupyterlab-theme-solarized-dark)

[![NPM Version](https://img.shields.io/npm/v/jupyterlab-theme-solarized-dark.svg)](https://npmjs.org/package/jupyterlab-theme-solarized-dark)
![Monthly Downloads](https://img.shields.io/npm/dm/jupyterlab-theme-solarized-dark.svg?label=npm%20downloads)

[![PyPI](https://img.shields.io/pypi/v/jupyterlab_theme_solarized_dark)](https://pypi.org/project/jupyterlab-theme-solarized-dark/)
![PyPI - Downloads](https://img.shields.io/pypi/dm/jupyterlab_theme_solarized_dark?label=pypi%20downloads)

JupyterLab 2.x / 3.x Solarized Dark extension.

The theme is originally created by [Joses W. Ho](https://github.com/josesho) and [Jae Hee Lee](https://github.com/dschaehi) in this [gist](https://gist.github.com/dschaehi/ff6d30e6779a683053a1f078af178cdb)

## Screenshot

![Screenshot](https://user-images.githubusercontent.com/36528777/79721723-6927f680-8315-11ea-8a5b-e2c298eeed09.png)

## Prerequisites

- JupyterLab

## Version

- `v0.2.x` is mainly based on Jae Hee Lee's original theme
- `v1.x` aims to provide a smoother looking.
- Starting from `v2.x`, Jupyterlab `v3.x` support is added.

## Requirements

- JupyterLab >= 2.0 or JupyterLab >= 3.0

## Install

To install it as a prebuilt extension (requires JupyterLab >= 3.0):

```bash
pip install jupyterlab_theme_solarized_dark
```

Or install it as a source extension:

```bash
jupyter labextension install jupyterlab-theme-solarized-dark
```

Apply the theme by checking `Settings -> Jupyterlab Theme -> Jupyterlab Solarized Dark`

To enable theme scrollbars, in JupyterLab, either

- navigate to `Settings -> Advanced Settings Editor -> Theme`, and add `"theme-scrollbars": true` to `User Preferences`
- OR check `Settings -> Jupyterlab Theme -> Theme Scrollbars`

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_theme_solarized_dark directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_theme_solarized_dark
```

Or

```bash
jupyter labextension uninstall jupyterlab-theme-solarized-dark
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-theme-solarized-dark` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
