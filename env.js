// Инициализируем глобальный объект для переменных окружения
window.__ENV = {};

// Функция для получения переменных окружения из Cloudflare Pages
async function loadEnvironmentVariables() {
    try {
        const response = await fetch('/_env');
        if (response.ok) {
            const envVars = await response.json();
            window.__ENV = {
                NAME: envVars.NAME || '__NAME__',
                NUM: envVars.NUM || '__NUM__'
            };
            console.log('Environment variables loaded successfully');
        } else {
            console.warn('Failed to load environment variables');
        }
    } catch (error) {
        console.error('Error loading environment variables:', error);
    }
}

// Загружаем переменные окружения при загрузке страницы
loadEnvironmentVariables(); 