function editElement(reference, match, replacer) {
    const text = reference.textContent;
    let pattern = new RegExp(match,'g');
    reference.textContent = text.replace(pattern, replacer);

}