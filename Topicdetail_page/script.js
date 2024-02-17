

window.addEventListener('scroll', function() {
    var header = document.getElementById('sticky-header');
    
    var scrollPosition = window.scrollY;

    if (scrollPosition > 60) {
        header.classList.add('shadow');
        
    } else {
        header.classList.remove('shadow');
        
    }
});


// Function to handle upvoting
function upvote() {
    var upvoteCountElement = document.getElementById("upvoteCount");
    var currentCount = parseInt(upvoteCountElement.innerText);
    var newCount = currentCount + 1;
    upvoteCountElement.innerText = newCount;
}

function copyComment() {
    var commentText = document.querySelector(".main-cmnt").textContent;
    navigator.clipboard.writeText(commentText)
        .then(() => {
            alert("Comment copied successfully!");
        })
        .catch((error) => {
            console.error("Failed to copy comment: ", error);
            alert("Failed to copy comment. Please try again.");
        });
}

function reportComment() {
    // Here you can add the logic to generate a report for the comment
    alert("Comment reported successfully!");
    
}
