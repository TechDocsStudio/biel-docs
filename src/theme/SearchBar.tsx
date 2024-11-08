import React from 'react';
import { BielSearchButton } from 'biel-react';

export default function SearchBar() {
    // Replace with your <PROJECT_ID>
    const projectId = '<PROJECT_ID>';

    return <BielSearchButton project={projectId} button-style="rounded">Search</BielSearchButton>;
}