// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi696526c727bd986600039c6c-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
