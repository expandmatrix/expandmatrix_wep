import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "687b7f32501665ffb9df2ce4", 
  requiresAuth: true // Ensure authentication is required for all operations
});
