# ✅ PageTemplate Component - Setup Complete!

## What Was Created

I've created a reusable `PageTemplate` component that makes it super easy to create new pages with consistent styling, fonts, shadows, and dark mode support.

### 📁 Files Created

1. **`/components/PageTemplate.vue`** - The main reusable component
2. **`/components/PageTemplate.README.md`** - Full documentation
3. **`/pages/_template-new-page.vue`** - Quick-start template to copy
4. **`/pages/_example-handwritten.vue`** - Example with handwritten title
5. **`/pages/_example-bold.vue`** - Example with bold title

### 📝 Files Updated

1. **`/pages/hero.vue`** - Now uses PageTemplate
2. **`/pages/exposition.vue`** - Now uses PageTemplate

---

## 🚀 How to Create a New Page (3 Easy Steps)

### Step 1: Copy the Template
```bash
cp pages/_template-new-page.vue pages/my-new-page.vue
```

### Step 2: Edit the File
Open `pages/my-new-page.vue` and customize:

```vue
<template>
  <PageTemplate
    title="My Page Title"           <!-- Change this -->
    title-style="handwritten"        <!-- or "bold" -->
    subtitle="My subtitle"           <!-- Optional -->
    :show-c-t-a="true"               <!-- true = show button -->
    cta-text="Click Here"            <!-- Button text -->
    cta-link="/contact"              <!-- Button link -->
  >
    <p>Your content with <strong>bold text</strong>...</p>
  </PageTemplate>
</template>
```

### Step 3: View Your Page
Navigate to `/my-new-page` in your browser! ✨

---

## 🎨 Component Props Quick Reference

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `title` | String | **required** | Any text |
| `title-style` | String | "handwritten" | "handwritten", "bold", "custom" |
| `subtitle` | String | "" | Any text (optional) |
| `subtitle-style` | String | "normal" | "normal", "handwritten", "custom" |
| `show-c-t-a` | Boolean | false | true/false |
| `cta-text` | String | "En apprendre plus" | Any button text |
| `cta-link` | String | "#" | Any URL or route |

---

## 🎯 Style Examples

### Handwritten Style (Friendly, Approachable)
```vue
<PageTemplate
  title="Inclusens"
  title-style="handwritten"
  subtitle="12 millions de personnes..."
>
```
**Result:** Lazydog cursive font with pink/peach color and shadow

### Bold Style (Formal, Important)
```vue
<PageTemplate
  title="NOTRE EXPOSITION"
  title-style="bold"
  subtitle="Le handicap invisible"
  subtitle-style="handwritten"
>
```
**Result:** Garet Heavy font with large text and shadow

---

## ✨ Features Included

✅ **Automatic Dark Mode** - Everything adapts when color mode changes
✅ **Responsive Design** - Looks great on mobile, tablet, desktop
✅ **Custom Fonts** - Lazydog & Garet fonts loaded automatically
✅ **Shadow Effects** - Matching your Canva designs
✅ **Bold Text Support** - Use `<strong>` tags for emphasis
✅ **SEO Ready** - Built-in meta tags and titles
✅ **Consistent Spacing** - Professional typography

---

## 📖 Content Guidelines

### Use Strong Tags for Emphasis
```vue
<p>
  This is normal text with <strong>important highlighted text</strong>.
</p>
```

### Multiple Paragraphs
```vue
<p>First paragraph...</p>
<p>Second paragraph...</p>
<p>Third paragraph...</p>
```

### Custom Sections
```vue
<div class="mt-16 text-center">
  <p>Special content...</p>
</div>
```

---

## 🎨 Color Palette Used

- **Primary (Pink/Peach):** `#F4A694`
- **Background Light:** `#F7EDEA`
- **Background Dark:** `#111827` (gray-900)
- **Text Light Mode:** `#374151` (gray-700)
- **Text Dark Mode:** `#D1D5DB` (gray-300)
- **Accent:** `#8B7B8B` (purple-gray)

---

## 🔍 Examples in Your Project

### 1. Hero Page (`/hero`)
```vue
title="Inclusens"
title-style="handwritten"
subtitle="12 millions de personnes..."
:show-c-t-a="true"
```

### 2. Exposition Page (`/exposition`)
```vue
title="NOTRE EXPOSITION"
title-style="bold"
subtitle="Le handicap invisible en entreprise"
subtitle-style="handwritten"
```

---

## 💡 Pro Tips

1. **Choose Title Style Based on Mood:**
   - `handwritten` = Friendly, personal, approachable
   - `bold` = Professional, formal, impactful

2. **Mix Subtitle Styles:**
   - Bold title + handwritten subtitle = Great contrast!
   - Handwritten title + normal subtitle = Clean and clear

3. **Test Both Modes:**
   - Always check light mode AND dark mode
   - Shadows adjust automatically

4. **Keep It Simple:**
   - Short, focused paragraphs
   - Use strong tags sparingly for impact
   - Let the template handle the styling

---

## 📚 Need More Help?

- **Full Documentation:** `/components/PageTemplate.README.md`
- **Quick Template:** `/pages/_template-new-page.vue`
- **Examples:** `/pages/_example-handwritten.vue` and `/pages/_example-bold.vue`

---

## 🎉 You're All Set!

Just copy the template, customize the props and content, and you're done! The component handles all the styling, fonts, shadows, and dark mode automatically.

Happy page building! 🚀

