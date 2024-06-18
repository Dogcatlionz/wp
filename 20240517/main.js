let key = "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";

async function chat(q, language) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    });
    const jsonData = await jsonResponse.json();
    return jsonData;
}

document.getElementById("translateButton").addEventListener("click", async () => {
    const query = document.getElementById("query").value;
    const language = document.getElementById("language").value;
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "正在翻譯中...";
    try {
        const response = await chat(`${query} 用${language}回答`, language);
        const content = response.choices[0].message.content;
        responseDiv.innerHTML = `<pre>${content}</pre>`;
    } catch (error) {
        responseDiv.innerHTML = "翻譯時發生錯誤，請稍後再試。";
        console.error(error);
    }
});
