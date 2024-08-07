function getResponses() {
    const prompt = document.getElementById('prompt').value;

    // Placeholder for API calls to different AI models
    // Replace these with actual API calls
    const chatgptResponse = "Response from ChatGPT: " + prompt;
    const copilotResponse = "Response from Copilot: " + prompt;
    const backboxResponse = "Response from Backbox AI: " + prompt;
    const geminiResponse = "Response from Google Gemini: " + prompt;

    document.getElementById('chatgpt-response').innerText = chatgptResponse;
    document.getElementById('copilot-response').innerText = copilotResponse;
    document.getElementById('backbox-response').innerText = backboxResponse;
    document.getElementById('gemini-response').innerText = geminiResponse;
}
