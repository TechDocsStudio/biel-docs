import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/biel-ai-rest-api-beta",
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
      ],
    },
    {
      type: "category",
      label: "Sources",
      items: [
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
        {
          type: "doc",
          id: "api/sync-project",
          label: "Sync project data",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
