(function() {
    const script = document.createElement('script');
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.onload = function() {
        if (window.Pi) {
            window.Pi.init({ version: "2.0", sandbox: true });
            console.log("Pi SDK Initialized Successfully!");
        }
    };
    document.head.appendChild(script);
})();
