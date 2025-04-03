function copyScript() {
    const scriptURL = "https://your-vercel-app.vercel.app/public/script.lua";
    const loadstringCode = `loadstring(game:HttpGet("${scriptURL}", true))()`;

    navigator.clipboard.writeText(loadstringCode)
        .then(() => alert("Script copied!"))
        .catch(err => alert("Error copying script: " + err));
}
