# Vue

This guide explains how to integrate the Biel.ai button into your Vue.js application.

## **Prerequisites**

- A Vue.js project set up (preferably using Vue CLI).
- Familiarity with Vue's component structure.
- Your Biel.ai project ID.

## **1. Install via NPM**

Navigate to your Vue project directory and run:

```npm install pushfeedback
```
## **2. Add Biel.ai to Your Component**

### **a. Import the Stylesheet**

In your main `App.vue` or any other global component, add the following to the `<style>` section:

```@import 'pushfeedback/dist/biel-search/biel-search.css';
```
### **b. Use the Component in Vue**

In the script section of the Vue component where you want to use the feedback button, import the Biel.ai module:

```<script>
import 'pushfeedback/dist/biel-search/biel-search.esm.js';

export default {
  name: 'YourComponentName',
  // other component properties...
}
</script>
```
### **c. Add the Feedback Button**

In the template section of your component, add:

```<biel-button project="<YOUR_PROJECT_ID>">Send ASK AI</biel-button>
```
Replace `<YOUR_PROJECT_ID>` with your actual Biel.ai project ID.

## **3. Build and Verify**

If you're using Vue CLI, run:

```npm run serve
```
Navigate to the local server URL (typically `http://localhost:8080/`) to verify the Biel.ai button appears and works correctly on your Vue application.

## **Final Thoughts**

Vue's flexibility and component-driven architecture make it relatively straightforward to integrate third-party modules like Biel.ai. By adding this feedback mechanism, you're enhancing user engagement and potentially gathering valuable insights.

