document.addEventListener("DOMContentLoaded", function() {

    const appStoreURL = 'https://play.google.com/store/apps/details?id=com.Mindvridge'; // 앱 스토어 URL (Google Play 예시)
    const appStoreURLiOS = 'https://apps.apple.com/app/id6449755259'; // 앱 스토어 URL (App Store 예시)
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var url = window.location.search;
    var roomName = url.split("mindvr");
    const appScheme = "unitydl://mindvridge" + roomName[1]; 

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS
        openApp(appScheme, appStoreURLiOS);
    } else if (/android/i.test(userAgent)) {
        // Android
        openApp(appScheme, appStoreURL);
    } else {
        // Other platforms or fallback
        window.location.href = appStoreURL;
    }

    function openApp(appScheme, appStoreURL) {
        const startTime = new Date().getTime();
        const timeout = 1500;
        window.location.href = appScheme;
        setTimeout(function() {
            const endTime = new Date().getTime();
            if (endTime - startTime < timeout + 100) {
                window.location.href = appStoreURL;
            }
            // `window.close();` 제거됨: 대부분의 브라우저에서는 동작하지 않음.
        }, timeout);
    }
});
