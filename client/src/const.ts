export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || "https://auth.manus.im";
  const appId = import.meta.env.VITE_APP_ID || "";
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  try {
    // Validate that we have a valid base URL
    if (!oauthPortalUrl || oauthPortalUrl === "undefined") {
      console.error("VITE_OAUTH_PORTAL_URL is not configured");
      throw new Error("OAuth portal URL not configured");
    }

    if (!appId || appId === "undefined") {
      console.error("VITE_APP_ID is not configured");
      throw new Error("OAuth app ID not configured");
    }

    const url = new URL(`${oauthPortalUrl}/app-auth`);
    url.searchParams.set("appId", appId);
    url.searchParams.set("redirectUri", redirectUri);
    url.searchParams.set("state", state);
    url.searchParams.set("type", "signIn");

    return url.toString();
  } catch (error) {
    console.error("Failed to construct login URL:", error);
    // Return a fallback URL or empty string to prevent app crash
    return "";
  }
};
