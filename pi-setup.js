(function() {
    if (document.getElementById('pi-sdk-script')) return;

    const script = document.createElement('script');
    script.id = 'pi-sdk-script';
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.async = true;
    
    script.onload = function() {
        if (window.Pi) {
            try {
                window.Pi.init({ version: "2.0", sandbox: true });
                window.isPiSdkReady = true;
                console.log("Pi SDK Initialized Successfully!");
            } catch (e) {
                console.error("Pi SDK Init Error:", e);
            }
        }
    };
    
    document.head.appendChild(script);
})();
