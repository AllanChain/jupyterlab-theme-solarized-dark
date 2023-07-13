# JupyterLab Theme Solarized Dark

![Github Actions Status](https://github.com/AllanChain/jupyterlab-theme-solarized-dark/workflows/Build/badge.svg)
![License](https://img.shields.io/github/license/AllanChain/jupyterlab-theme-solarized-dark.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/AllanChain/jupyterlab-theme-solarized-dark)
![GitHub stars](https://img.shields.io/github/stars/AllanChain/jupyterlab-theme-solarized-dark)

[![NPM Version](<https://img.shields.io/npm/v/jupyterlab-theme-solarized-dark.svg?logo=npm&label=npm%20(deprecated)>)](https://npmjs.org/package/jupyterlab-theme-solarized-dark)
![Monthly Downloads](https://img.shields.io/npm/dm/jupyterlab-theme-solarized-dark.svg?logo=npm&label=npm%20downloads)

[![PyPI](https://img.shields.io/pypi/v/jupyterlab_theme_solarized_dark?logo=pypi&label=PyPi)](https://pypi.org/project/jupyterlab-theme-solarized-dark/)
![PyPI - Downloads](https://img.shields.io/pypi/dm/jupyterlab_theme_solarized_dark?logo=pypi&label=PyPi%20downloads)

The theme was originally created by [Joses W. Ho](https://github.com/josesho) and [Jae Hee Lee](https://github.com/dschaehi) in this [gist](https://gist.github.com/dschaehi/ff6d30e6779a683053a1f078af178cdb).

## Screenshot

<img width="960" alt="Screenshot" src="https://github.com/AllanChain/jupyterlab-theme-solarized-dark/assets/36528777/de6dd210-d92b-4015-9da9-92dd07a4a9a9">

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_theme_solarized_dark
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_theme_solarized_dark
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

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-theme-solarized-dark` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
