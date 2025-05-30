import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/biel",
    },
    {
      type: "category",
      label: "teams",
      items: [
        {
          type: "doc",
          id: "api/invitations-list",
          label: "invitations_list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/invitations-create",
          label: "invitations_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/invitations-retrieve",
          label: "invitations_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/invitations-update",
          label: "invitations_update",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/invitations-partial-update",
          label: "invitations_partial_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/invitations-destroy",
          label: "invitations_destroy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/teams-list",
          label: "teams_list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/teams-create",
          label: "teams_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/teams-retrieve",
          label: "teams_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/teams-update",
          label: "teams_update",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/teams-partial-update",
          label: "teams_partial_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/teams-destroy",
          label: "teams_destroy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/user-invitations",
          label: "user_invitations",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "api/api-auth-login-create",
          label: "api_auth_login_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-auth-logout-retrieve",
          label: "api_auth_logout_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api-auth-logout-create",
          label: "api_auth_logout_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-auth-register-create",
          label: "api_auth_register_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-auth-token-refresh-create",
          label: "api_auth_token_refresh_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-auth-token-verify-create",
          label: "api_auth_token_verify_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-auth-user-retrieve",
          label: "api_auth_user_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api-auth-user-update",
          label: "api_auth_user_update",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/api-auth-user-partial-update",
          label: "api_auth_user_partial_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/api-v-1-messages-feedback-create",
          label: "api_v1_messages_feedback_create",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "chat",
      items: [
        {
          type: "doc",
          id: "api/api-v-1-chat-create",
          label: "api_v1_chat_create",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "project",
      items: [
        {
          type: "doc",
          id: "api/api-v-1-projects-retrieve",
          label: "api_v1_projects_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api-v-1-projects-search-list",
          label: "api_v1_projects_search_list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api-v-1-projects-search-click-create",
          label: "api_v1_projects_search_click_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-v-1-projects-sources-retrieve",
          label: "api_v1_projects_sources_retrieve",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api-v-1-projects-sources-create",
          label: "api_v1_projects_sources_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-v-1-projects-sources-destroy",
          label: "api_v1_projects_sources_destroy",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
