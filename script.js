document.addEventListener('DOMContentLoaded', function () {
    const text1Textarea = document.getElementById('text1');
    const text2Textarea = document.getElementById('text2');
    const compareBtn = document.getElementById('compareBtn');
    const diffOutputDiv = document.getElementById('diffOutput');

    if (!text1Textarea || !text2Textarea || !compareBtn || !diffOutputDiv) {
        console.error('One or more essential HTML elements are missing.');
        // Optionally, display an error message to the user in the UI
        if (diffOutputDiv) {
            diffOutputDiv.innerHTML = '<p style="color: red;">Error: Could not initialize the comparison tool. Essential page elements are missing.</p>';
        }
        return;
    }

    compareBtn.addEventListener('click', function () {
        const text1 = text1Textarea.value;
        const text2 = text2Textarea.value;

        // Initialize Diff Match Patch
        let dmp;
        try {
            dmp = new diff_match_patch();
        } catch (e) {
            console.error("Error initializing diff_match_patch:", e);
            diffOutputDiv.innerHTML = '<p style="color: red;">Error: Could not initialize the diff library. Please ensure lib/diff_match_patch.js is loaded correctly.</p>';
            return;
        }
        

        const diffs = dmp.diff_main(text1, text2);
        dmp.diff_cleanupSemantic(diffs); // Optional: Makes the diff more human-readable

        // Generate HTML representation of the diff
        // The diff_prettyHtml method from the library creates HTML with <ins> and <del>
        // which are already styled in style.css
        const diffHtml = dmp.diff_prettyHtml(diffs);
        
        if (diffOutputDiv) {
            if (text1 === text2) {
                diffOutputDiv.innerHTML = '<p>The texts are identical.</p>';
            } else if (!diffHtml || diffHtml.length === 0) {
                 diffOutputDiv.innerHTML = '<p>No differences found, or texts are identical.</p>';
            }
            else {
                diffOutputDiv.innerHTML = diffHtml;
            }
        } else {
            console.error("Diff output container 'diffOutput' not found.");
        }
    });
});
