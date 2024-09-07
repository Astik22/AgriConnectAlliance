document.getElementById('connection-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const mobile = document.getElementById('mobile').value;
    const problem = document.getElementById('problem').value;
    
    const problemEntry = document.createElement('div');
    problemEntry.classList.add('problem-entry');
    problemEntry.innerHTML = `
        <h3>${name}</h3>
        <p>Address: ${address}</p>
        <p>State: ${state}</p>
        <p>Mobile Number: ${mobile}</p>
        <p>Problem: ${problem}</p>
        <button class="like-btn">Like</button>
        <button class="comment-btn">Comment</button>
        <div class="comments-section">
            <textarea class="comment-input" placeholder="Add a comment..."></textarea>
            <button class="submit-comment-btn">Submit Comment</button>
        </div>
        <div class="comments-list"></div>
    `;
    
    document.getElementById('problems-list').appendChild(problemEntry);
    
    
    document.getElementById('connection-form').reset();
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('submit-comment-btn')) {
        const commentInput = event.target.previousElementSibling;
        const commentsList = event.target.parentElement.nextElementSibling;
        
        if (commentInput.value.trim()) {
            const comment = document.createElement('p');
            comment.textContent = commentInput.value;
            commentsList.appendChild(comment);
            commentInput.value = ''; 
        }
    }

    if (event.target.classList.contains('like-btn')) {
        alert('Liked!');
    }
});