const textarea = document.querySelector("textarea"),
result = document.querySelector("[result]"),
encrypt = document.querySelector("[encrypt]"),
decrypt = document.querySelector("[decrypt]"),
copy = document.querySelector('[copy]'),
ps = document.querySelector('[ps]');

textarea.onkeyup = (e) => {
    const text = textarea.value,
    siz = text.length;
    if (text.match(/[^a-z 0-9\n\b]/)) {
        textarea.value = text.substring(0, siz - 1);
    }
}
encrypt.onclick = () => {
    if (textarea.value != "") {
        let code = textarea.value;
        code = code.replaceAll('e', 'enter');
        code = code.replaceAll('i', 'imes');
        code = code.replaceAll('a', 'ai'); 
        code = code.replaceAll('o', 'ober');
        code = code.replaceAll('u', 'ufat');
        result.innerHTML = code;
        copy.removeAttribute('hidden');
        result.removeAttribute('hidden');
        ps.style.display = 'none';

    }
}
decrypt.onclick = () => {
    if (textarea.value != "") {
        let code = textarea.value;
        code = code.replaceAll('enter', 'e');
        code = code.replaceAll('imes', 'i');
        code = code.replaceAll('ai', 'a'); 
        code = code.replaceAll('ober', 'o');
        code = code.replaceAll('ufat', 'u');
        result.innerHTML = code;
        copy.removeAttribute('hidden');
        result.removeAttribute('hidden');
        ps.style.display = 'none';
    }
}
copy.onclick = () => {
    const text = result.textContent;
    navigator.clipboard.writeText(text);
}