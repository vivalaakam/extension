import * as helpers from '../node_modules/node-readability/src/helpers';
helpers.debug();
const cache = {};
export default function (dom) {

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const div = document.createElement('div');
        div.appendChild(range.cloneContents());
        return div.innerHTML;
    }


    if (cache.article) {
        return cache.article;
    }

    const doc = document.implementation.createHTMLDocument('grab');
    doc.body = dom.body.cloneNode(true);

    helpers.setCleanRules([]);

    let react = doc.body.querySelector('#root_react_element');
    if (react) {
        react.parentNode.removeChild(react);
    }

    helpers.prepDocument(doc);

    cache.body = doc.body.innerHTML;

    let articleContent = helpers.grabArticle(doc);
    if (helpers.getInnerText(articleContent, false) === '') {
        doc.body.innerHTML = cache.body;
        articleContent = helpers.grabArticle(doc, true);
        if (helpers.getInnerText(articleContent, false) === '') {
            return cache.article = false;
        }
    }

    return cache.article = articleContent.innerHTML;
}
