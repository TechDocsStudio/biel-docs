import React from 'react';

export default function SearchBar() {
    // Replace with your <PROJECT_ID>
    const projectId = 'dl1kps0old';
    const headerTitle = 'Biel.ai chatbot';
    // @ts-ignore: Not a React component
    return <biel-search-button project={projectId} button-style="rounded" header-title={headerTitle} clean-titles="true">Search</biel-search-button>;
}
