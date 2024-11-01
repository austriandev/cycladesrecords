document.addEventListener("DOMContentLoaded", function () {
    // Typing effect for main page (if needed)
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

    // Check if cookies have already been accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex'; // Show the cookie banner if not accepted
    }

    // When "Accept" button is clicked, store the acceptance in localStorage and hide the banner
    acceptCookiesButton.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true'); // Store acceptance in localStorage
        cookieBanner.style.display = 'none'; // Hide the cookie banner
    });

    // Page transition effect (fade-in on load)
    document.body.classList.add("fade-in");

    // Add event listener for all internal links to apply fade-out effect
    const links = document.querySelectorAll("a[href$='.html']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            // Apply fade-out effect
            document.body.classList.add("fade-out");

            // After the fade-out effect, navigate to the new page
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // Match timeout with the duration of fade-out (0.5s)
        });
    });
});
