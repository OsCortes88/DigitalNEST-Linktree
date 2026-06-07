# DigitalNEST LinkTree



## 🛠️ Tech Stack

- 🟨 **JavaScript**
- ⚛️ **React**
- 🌬️ **Tailwind CSS**
- ⚡ **Vite**

## Description
DigitalNEST-Linktree is a hub for all professional links associated with me. You can also learn a little bit about me in the About section.

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)

## ⚡ Quick Start
After installing node:
```bash

# 1. Clone the repository
git clone https://github.com/OsCortes88/DigitalNEST-Linktree.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 🟨 JS Feature:
**Why I Picked It:** The feature I decided to implement was the carousel feature. After reading the instructions, what really stood out to me was the word "personality". I wanted to showcase myself as a person, but I wanted to do it in a nice layout that wouldn't contain paragraphs of text. Thus, the carousel seemed like a nice & elegant function to allow the user to switch from one piece of text to another in a slide-show fashion. There were 3 key things I wanted to highlight: my personal life, philosophy, and hobbies, while also displaying my general information.

**How To Use It:** To activate the carousel, you must first click on the profile picture for it to transition in. Then you can navigate through it using the nav buttons that appear along with it. To deactivate the carousel, you can simply reclick the profile pic, and the carousel will transition out, and the general information will be displayed again.

**How It Works:** The way the carousel works is mainly through 2 states. One state is a boolean that keeps track of whether the user has clicked the profile pic or not. If so, it runs the corresponding transitions/translations using tailwind CSS. Similarly, the carousel navigation works with a state that keeps track of the current index we are at. The nav buttons have their respective handle functions to either increase or decrease the current index depending on the button selected. The index is later used to calculate the translation needed to get to the desired slide.

**Potential Improvements:** If given more time, I would change the layout for my about section and link section to be side by side instead of stacked. I would also reset the state of the index that tracks slide position to 0 so it starts at the first element rather than staying on the slide the viewer was previously on.
