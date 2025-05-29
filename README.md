# Text Comparison Tool

This is a simple web-based tool to compare two blocks of text and highlight the differences. It's designed to be easy to use and helps users quickly identify what has changed between two versions of a text.

## Features

*   Side-by-side input for original and changed text.
*   Clear highlighting of inserted and deleted text in the comparison results.
*   Basic SEO meta tags for search engine visibility.
*   Social media sharing tags (Open Graph for Facebook, Twitter Cards).

## How to Use

1.  Open the `index.html` file in a web browser.
2.  Paste the first text block into the "Original Text" area.
3.  Paste the second text block into the "Changed Text" area.
4.  Click the "Compare Texts" button.
5.  The differences will be displayed below, with additions highlighted in green and deletions in red.

## Technical Details

*   **Frontend:** HTML, CSS, JavaScript
*   **Text Differencing:** Uses the `diff-match-patch` JavaScript library (included in the `lib` directory).

## Setup (for local use/development)

1.  Clone or download the repository/files.
2.  Ensure you have all the files:
    *   `index.html`
    *   `style.css`
    *   `script.js`
    *   `lib/diff_match_patch.js` (This library is essential for the comparison functionality)
    *   `README.md` (this file)
3.  Open `index.html` directly in your web browser. No special server setup is required for the basic functionality.

## SEO & Social Media

The tool includes:
*   **Meta Description & Keywords:** For search engines like Google and Bing.
*   **Open Graph Tags:** For richer sharing on Facebook.
*   **Twitter Card Tags:** For enhanced display on Twitter.

The `index.html` file contains placeholder URLs for `og:url`, `og:image`, `twitter:url`, and `twitter:image`. These should be updated with actual URLs when deploying the tool to a live website. The footer also contains a placeholder "Your Tool Name" and a link for a Privacy Policy.