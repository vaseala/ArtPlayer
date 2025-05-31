// import { WebVTTParser, WebVTTSerializer } from './parser';
const { WebVTTParser, WebVTTSerializer } = require('../src/parser.js');
const { zh, en } = require('./data.js');
// function mergeTrees(trees) {
//     const parser = new WebVTTParser();
//     const result = parser.parse('', 'metadata');

//     for (let i = 0; i < trees.length; i++) {
//         const tree = trees[i];

//         if (!tree.updated) {
//             tree.updated = true;

//             for (let j = 0; j < tree.cues.length; j++) {
//                 const cue = tree.cues[j];
//                 const length = cue.tree.children.length;
//                 for (let k = 0; k < length; k++) {
//                     const item = cue.tree.children[k];
//                     // console.log(item);

//                     if (item.type == 'text') {
//                         item.value = `<div class="art-subtitle-${tree.name}">${item.value}</div>`;
//                     } else if (item.type == 'object') {
//                         const childrenLength = item.children?.length || 0;
//                         let html = '';
//                         for (let l = 0; l < childrenLength; l++) {
//                             const child = item.children[l];
//                             if (child.type == 'text') {
//                                 html += `<${item.name}>${child.value}</${item.name}>`;
//                             }
//                         }
//                         item.value = `<div class="art-subtitle-${tree.name}">${html}</div>`;
//                     }
//                     // console.log('---------');
//                     // console.log(item.value);
//                 }
//             }
//         }

//         result.cues.push(...tree.cues);
//     }

//     return result;
// }

function mergeTrees(trees) {
    const parser = new WebVTTParser();
    const result = parser.parse('', 'metadata');

    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];

        if (!tree.updated) {
            tree.updated = true;
            for (let j = 0; j < tree.cues.length; j++) {
                const cue = tree.cues[j];
                for (let k = 0; k < cue.tree.children.length; k++) {
                    const children = cue.tree.children[k];
                    // if (children.value) {
                    console.log(children);
                    children.value = `<div class="art-subtitle-${tree.name}">${children.value}</div>`;
                    // }
                }
            }
        }

        result.cues.push(...tree.cues);
    }

    return result;
}

function mergeTrees(trees) {
    const result = [];
    trees.forEach((tree) => {
        console.log(tree.name);
        tree.cues.forEach((item) => {
            result.push({
                ...item,
                trackName: tree.name,
            });
        });
        // result = [...result, ...tree.cues];
    });
    return {
        cues: result,
    };
}

function artplayerPluginSealaSubtitles() {
    // const { unescape } = art.constructor.utils;
    const parser = new WebVTTParser();
    const seri = new WebVTTSerializer();

    const setSubtitles = (items = []) => {
        const trees = items.map((item, index) => {
            const tree = parser.parse(item.text, 'metadata');
            tree.name = items[index].name;
            return tree;
        });
        // console.log('Trees:');
        // console.log(JSON.stringify(trees, null, 2));

        let lastUrl = '';
        function setTracks(trees = []) {
            const tree = mergeTrees(trees);
            // console.log('Merged Cues:');
            // console.log(JSON.stringify(tree, null, 2));

            // console.log('Merged Tree:');
            // console.log(JSON.stringify(tree, null, 2));

            const vtt = seri.serialize(tree.cues);
            // console.log(unescape(vtt));
            console.log(JSON.stringify(vtt, null, 2));
            return;
            if (lastUrl) URL.revokeObjectURL(lastUrl);
            const url = URL.createObjectURL(new Blob([vtt], { type: 'text/vtt' }));
            lastUrl = url;

            // art.option.subtitle.escape = false;
            // art.subtitle.init({
            //     ...art.option.subtitle,
            //     url,
            //     type: 'vtt',
            //     onVttLoad: unescape,
            // });
        }

        setTracks(trees);
    };

    return {
        setSubtitles,
    };
}
const x = artplayerPluginSealaSubtitles();
x.setSubtitles([
    {
        name: 'zh',
        text: zh,
    },
    {
        name: 'en',
        text: en,
    },
]);
function unescape(str) {
    const map = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"',
    };
    const reg = new RegExp(`(${Object.keys(map).join('|')})`, 'g');
    return str.replace(reg, (tag) => map[tag] || tag);
}
