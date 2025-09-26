
---

````markdown
# SkillSwap React Native

SkillSwap is a React Native mobile application built with Expo SDK 53.  
The project is currently in its initial setup phase, featuring navigation scaffolding with bottom tabs and stack navigation. It will evolve into a platform for users to explore, share, and manage skills.

---

## ✨ Features (Current)
- Expo SDK 53 (Bare TypeScript template)
- React Navigation setup
  - Bottom Tab Navigation
  - Stack Navigation
- Expo Vector Icons integration
- Project structured with `src/` folder organization (`screens`, `navigations`, `components`, etc.)

---

## 🛠 Tech Stack
- [Expo](https://expo.dev/) 53
- [React Native](https://reactnative.dev/) 0.79
- [TypeScript](https://www.typescriptlang.org/) ~5.8
- [React Navigation](https://reactnavigation.org/) (stack & bottom tabs)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js **>=18 <20** (recommended: Node 18 LTS)
- Expo CLI (via `npx expo`)

### Installation
Clone the repo and install dependencies:
```bash
git clone https://github.com/The-Engineer-Network/SkillSwap.git
cd SkillSwap
npm install
````

### Running the App

```bash
# Start Metro Bundler
npx expo start

# Run on Android
npx expo start --android

# Run on iOS (Mac only)
npx expo start --ios

# Run on Web
npx expo start --web
```

---

## 📂 Project Structure

```
SkillSwap
├── assets/              # App assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # Context providers
│   ├── hooks/           # Custom hooks
│   ├── navigations/     # Navigation setup
│   │   ├── DashboardNavigator.tsx
│   │   ├── RootStackNavigator.tsx
│   │   └── AuthStackNavigator.tsx
│   └── screens/         # Screen components
│   └── utils/           # Utils folder
├── App.tsx              # Root app component
├── package.json
└── README.md
```

---

## 📸 Screenshots / Demo

*(Coming soon once UI is implemented)*

---

## 👥 Contributors

* **(@Faruq-Hameed)** – Project Creator and Mobile Lead

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

```

---
