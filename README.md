
## Live Demo

[View the deployed site on Netlify](https://beamish-treacle-57d025.netlify.app/)

#### YouTube Demo

[Watch on YouTube](https://youtu.be/Vb1RtLl5f5U)

<p align="center">
   <a href="https://youtu.be/Vb1RtLl5f5U">
      <img src="https://img.youtube.com/vi/Vb1RtLl5f5U/0.jpg" alt="Demo Video Thumbnail" width="480" />
   </a>
</p>

## Customizing the Message

To change the proposal or celebration messages and Giphy images:

- Edit the proposal text and Giphy image in [components/ValentineProposal.tsx](components/ValentineProposal.tsx). Update the headings, button labels, and the `src` attribute of the `<img>` tag for the proposal GIF.
- Edit the celebration message and Giphy image in [components/Celebration.tsx](components/Celebration.tsx). Update the congratulatory text, personal notes, and the `src` attribute of the `<img>` tag for the celebration GIF.

You can update the text inside the `<h1>`, `<h2>`, `<p>`, button elements, and the Giphy image URLs to personalize your experience.

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# valentine-day-proposal
