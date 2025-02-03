document.addEventListener('DOMContentLoaded', function () {
    const typingEffectElements = document.querySelectorAll('.typing-effect');
    typingEffectElements.forEach((typingEffectElement) => {
        const lines = JSON.parse(typingEffectElement.getAttribute('data-lines'));
        let currentLineIndex = 0;
        let currentTextIndex = 0;
         function typeLine() {
            const line = lines[currentLineIndex];
            typingEffectElement.textContent = line.substring(0, currentTextIndex);
            currentTextIndex++;
            if (currentTextIndex <= line.length) {
                setTimeout(typeLine, 200);
            } else if (currentLineIndex < lines.length - 1) {
                currentLineIndex++;
                currentTextIndex = 0;                    
                setTimeout(typeLine, 1000);
            } else {
                // Reset the animation by setting currentLineIndex, currentTextIndex, and currentPlaceholderIndex to 0
                currentLineIndex = 0;
                currentTextIndex = 0;              
                setTimeout(typeLine, 1000); // Add a delay before restarting
            }
        }

        typeLine();
    });
});

  