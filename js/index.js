let mainData = document.getElementById("data");
let txtArea = document.getElementById('txtarea')
txtArea.onclick = function() {
    this.innerText = null;
}


async function getData() {

    let txtArea = document.getElementById('txtarea').value;

    let lang = document.getElementById('langs').value;

    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: `${txtArea}`,
            source: "en",
            target: `${lang}`
        }),
        headers: { "Content-Type": "application/json" }
    });
    let data = await res.json();
    appendData(data);
}

function appendData(el) {

    mainData.innerHTML = null;

    let p = document.createElement("p");
    p.innerHTML = el.translatedText;

    mainData.append(p);
}