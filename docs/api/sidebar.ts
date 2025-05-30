import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/biel-ai-rest-api",
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "doc",
          id: "api/send-message",
          label: "Send a message to the AI chat",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/send-feedback",
          label: "Send feedback for a message",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Projects",
      items: [
        {
          type: "doc",
          id: "api/get-project",
          label: "Get project details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/search-project",
          label: "Search project sources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/track-search-click",
          label: "Track search result click",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-sources",
          label: "List project sources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-source",
          label: "Add project source",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-source",
          label: "Delete project source",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
