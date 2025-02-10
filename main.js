// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadInitialData();
});

function initializeApp() {
    // Initialize visualizations
    initializeValueChain();
    initializeCalculator();
    
    // Set initial theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // View mode changes
    document.getElementById('viewMode').addEventListener('change', (e) => {
        updateValueChainView(e.target.value);
    });
    
    // Scope filter changes
    document.getElementById('scopeFilter').addEventListener('change', (e) => {
        filterByScope(e.target.value);
    });
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
}
