Open your MadCap Flare project and navigate to Resources > Stylesheets.

none
Copy code
Resources > Stylesheets
Add the following to your main stylesheet:

css
Copy code
@import url('https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css');
Navigate to Resources > Master Pages and open your master page (e.g., Default.htm).

none
Copy code
Resources > Master Pages > Default.htm (or your specific master page)
Before the </head> tag, insert:

html
Copy code
<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
Near the </body> tag, place:

html
Copy code
<biel-button project="<YOUR_PROJECT_ID>">Send ASK AI</biel-button>
(Remember to replace <YOUR_PROJECT_ID>.)

Build your project.

Test to ensure the feedback button appears and functions correctly on every topic.




