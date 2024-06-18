document.addEventListener('DOMContentLoaded', function() {
    // Galerie d'images avec lightbox
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            lightbox.appendChild(imgElement);
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });

    // Formulaire de commentaires
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const commentText = document.getElementById('comment').value;
        const commentSection = document.getElementById('comments-section');

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const commentUser = document.createElement('h4');
        commentUser.textContent = username;
        const commentContent = document.createElement('p');
        commentContent.textContent = commentText;

        commentDiv.appendChild(commentUser);
        commentDiv.appendChild(commentContent);
        commentSection.appendChild(commentDiv);

        // Clear form fields
        commentForm.reset();
    });
});
