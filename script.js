document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for main page
    const text = "A NEW ELECTRONIC BLEND IS RISING. STAY TUNED.";
    const typingElement = document.querySelector(".typing-text");
    const typingSpeed = 50;
    const pauseDuration = 2000;

    if (typingElement) {
        let index = 0;
        let isAdding = true;

        function type() {
            typingElement.innerHTML = text.substring(0, index);

            if (isAdding) {
                if (index < text.length) {
                    index++;
                } else {
                    isAdding = false;
                    setTimeout(type, pauseDuration);
                    return;
                }
            } else {
                if (index > 0) {
                    index--;
                } else {
                    isAdding = true;
                }
            }

            setTimeout(type, typingSpeed);
        }

        type();
    }

    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});
