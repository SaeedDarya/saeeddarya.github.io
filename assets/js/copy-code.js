document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre > code");
  codeBlocks.forEach((block) => {
    // Create the copy button
    const button = document.createElement("button");
    button.innerText = "Copy Code";
    button.classList.add("copy-button");

    // Add click event to copy the code
    button.addEventListener("click", () => {
      navigator.clipboard
        .writeText(block.innerText)
        .then(() => {
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy Code"), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });

    // Insert the button before the code block
    block.parentNode.style.position = "relative";
    block.parentNode.appendChild(button);
  });
});
