
const fetch=require('node-fetch');

module.exports=(url)=>{

    return fetch(url)
        .then(rez => rez.text())
        .then(parser);

    function parser(html){

        let items=[],item=[];

        const m=html.matchAll(/<td\sclass="tableCell".*?>(.*?)<\/td>/g);

        Array.from(m).forEach((e,i)=>{

            item.push(e[1]);

            if (i && ((i + 1) % 5) === 0) {

                items.push(item.join(','));

                item = [];
            }
        })

        return items;
    }
}