const bodyNodes = (node, index) => {
    const nodeElements = node.childNodes;
    console.log(nodeElements[index]);
};

bodyNodes(document.body,0);
bodyNodes(document.body,1);
bodyNodes(document.body,2);
bodyNodes(document.body,3);
bodyNodes(document.body,4);
bodyNodes(document.body,5);
bodyNodes(document.body,6);

// const bodyNodes = () => {
//     for (const node of document.body.childNodes) {
//         console.log(node);
//     }
// };    

// bodyNodes();    

 