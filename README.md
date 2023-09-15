# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 3 most important feature
1. You can add any course from course list
2. You can't add one course twice.
3. You have given a fixed credit. You can't cross the credit limit. A pop up will show if you are crossing the limit.

### How I managed state in my projects
First I have load the data from my custom Api. Store them in a state then show them in the UI. I have also manage state for adding credit count and remove from remaining credit count. Anyone can add more than one course. for that I have store the previous data in state to add recent data with that and show them in the UI. 
