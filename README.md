# Velma - Colors

---

This package contains the color library of Velma. 

## What is the color library?

This package makes it easy to manage the colors in velma. You have some extra funcionality like mixing colors.

## Installation

Run the following command to install the package:

```bash
npm install @velmalabs/colors
```

## Usage

Import the library into your project as follows:

```bash
  import {colorMix} from '@velmalabs/colors'
```

## Examples


### Get the primary color

```bash
  colorMix('primary')
```

### Get a alpha variant of the primary color

```bash
  colorMix('primary/.5')
```

### Get a alpha variant of a random color

```bash
  colorMix('#fff/.5')
```


### Mix percentage between color and contrast

```bash
  colorMix('#fff-.5')
```

### Combine mix percentage and alpha between color and contrast

```bash
  colorMix('#fff-.5/.5')
```


## Resources

- [Svelte Documentation](https://svelte.dev/docs)
