



# 🌗 **DarkMode-React**

**Effortlessly toggle between light and dark modes in your React projects!**  
A simple yet powerful component for bringing dark mode to your users.  
Give your application the look it deserves, day or night! 🌞🌚

🔗 **[🚀 Live Preview](https://darkmode-react.web.app)**

---

## 📖 **Table of Contents**
- [⚙️ Installation Guide](#️-installation-guide)
- [💡 Basic Usage](#-basic-usage)
- [⚙️ Props & Customization](#-props--customization)
- [🎨 Style Customization](#-style-customization)
- [📚 Component Details](#-component-details)
- [⭐ Show Some Love!](#-show-some-love)
- [🚀 Join the Dark Side... Or Not!](#-join-the-dark-side-or-not)
---

## ⚙️ **Installation Guide**  

Get started in seconds with npm! 🎯

```bash
npm install --save darkmode-react-component
```

---

## 💡 **Basic Usage**  

Add **DarkModeReact** to your project with just a few lines:

```tsx
import DarkModeReact from 'darkmode-react-component';

<DarkModeReact />
```

And that’s it! Your users can now switch between themes seamlessly! ⚡

---

## ⚙️ **Props & Customization**  

Fine-tune the behavior of your dark mode switch with these props:

### 🔒 `hiddenLabel`  
Hide the default label for a cleaner look:

```tsx
<DarkModeReact hiddenLabel />
```

### 👁️ `hiddenIcon`  
Prefer no icons? This one’s for you:

```tsx
<DarkModeReact hiddenIcon />
```

### 🌚 `labelDark` & 🌞 `labelLight`  
Customize the labels for a personal touch:

```tsx
<DarkModeReact labelDark="Tema escuro" labelLight="Tema claro" />
```

---

## 🎨 **Style Customization**  

Match the theme switch to your brand’s identity! Here’s how you can modify the colors:

```css
body {
  --dm-color-primary: #41b883; /* Primary color */
  --dm-color-secondary: #34495e; /* Secondary color */
  --dm-color-text: #222; /* Text color in light mode */
  --dm-color-background: #fff; /* Background color in light mode */
}

body.darkmode {
  --dm-color-text: #fff; /* Text color in dark mode */
  --dm-color-background: #222; /* Background color in dark mode */
}
```

💡 _Pro Tip:_ Use custom CSS variables to ensure consistency across your app, and let the `.darkmode` class do the magic! ✨

---

## 📚 **Component Details**  

When you use **DarkModeReact**, the following happens:

- ✅ The `body` tag gets a `.darkmode` class based on the current theme.
- 💾 A `LocalStorage` key saves the user's theme preference, so their choice sticks even when they refresh the page!
- 🎨 Style your app's components by targeting `.darkmode` in your stylesheets.

**Why choose DarkModeReact?**

- ⚡ _Quick to implement_: Integrate in just a few lines.
- 🎨 _Highly customizable_: Tweak styles to match your brand.
- 🌍 _Universal appeal_: Users love dark mode, and it’s better for their eyes!
- 💪 _Optimized for performance_: Fast, efficient, and user-friendly.

---

## ⭐ **Show Some Love!**

Found this component useful? **Star** ⭐ the repository, share it with fellow developers, and contribute your ideas!  
Let's build a stylish and accessible web, together! 💖

Got any suggestions or issues? Head over to the **Issues** section or open a **Pull Request**. Contributions are always welcome! 🙌

---

## 🚀 **Join the Dark Side... Or Not!** 

DarkMode-React makes it easy to let users decide their preferred experience. With smooth transitions, customizable styles, and a straightforward setup, it’s the perfect addition to any modern React app.

