# darkmode-react

A component darkmode injection in your document page with React

<a href="https://darkmode-react.web.app" target="_blank">Live Preview</a>

Install

```bash
npm install --save darkmode-react-component
```

Usage basic

```tsx
import DarkModeReact from 'darkmode-react-component';

<DarkModeReact />
```

Prop hiddenLabel
```tsx
<DarkModeVue hiddenLabel />
```

Prop hiddenIcon
```tsx
<DarkModeVue hiddenIcon />
```

Prop labelDark and labelLight
```tsx
<DarkModeVue labelDark="Tema escuro" labelLight="Tema claro" />
```

Style modification and usage in your styles

```css
body {
  --dm-color-primary: #41b883;
  --dm-color-secondary: #34495e;
  --dm-color-text: #222;
  --dm-color-background: #fff;
}

body.darkmode {
  --dm-color-text: #fff;
  --dm-color-background: #222;
}
```

Create your variable colors and update this with class .darkmode.

### Description class of components

If DarkModeReact usage in a page, a class in body document is update with class darkmode.
In LocalStorage is created a key store with value current mode.
Do you usage children body.darkmode styles for your application.
I recomend create a variables colors in css and update this with toggle class of body document.
