const sqlite3 = require('sqlite3').verbose();

function func2(id){

    let db = new sqlite3.Database('C:/Users/Gustav/Google_Drive/VS_Code/Till_prog/BPK/node/db/db.db', (err) => {
    
        if (err) {
            console.log('open')
            console.error(err.message);
        }else{

            console.log('Connected to the database.');
        }
    
    })

    const query="SELECT * FROM Wine WHERE id=?"
    db.all(query, [id], (err, rows)=>{
        if (err) {
            throw err;

        }
        console.log(rows[0])
        // rows.forEach((row) => {
        //     console.log(row);
        // });
    })

}

func2(1866)
// console.log(func1(2));


















// const sqlite3 = require('sqlite3').verbose();

// const level1="Wine"
// const data = {
//     id: '24568256',
//     nameBold: 'Arc-en-Ciel',
//     nameThin: 'Rosé',
//     cat2: 'Rosé',
//     cat3: 'Fruktigt & Smakrikt vin',
//     cat4: null,
//     usage: 'Serveras vid 8-10°C som sällskapsdryck, eller till rätter av fisk och kyckling, gärna sallader.',
//     taste: 'Fruktig, ungdomlig smak med inslag av vattenmelon, persika, smultron och blodgrapefrukt.',
//     imgUrl: 'https://product-cdn.systembolaget.se/productimages/24568256/24568256_200.png',
//     tasteClocks: [
//       { key: 'TasteClockSweetness', value: 1 },
//       { key: 'TasteClockBody', value: 4 },
//       { key: 'TasteClockFruitacid', value: 9 }
//     ],
//     volume: 1000,
//     price: 79,
//     alcPercentage: 13,
//     assortmentText: 'Ordervaror',
//     apk: 1.6455696202531647,
//     bpk: 0.189873417721519
// };

// async function db(){

//     let db = new sqlite3.Database('C:/Users/Gustav/Google_Drive/VS_Code/Till_prog/BPK/node/db/db.db', (err) => {
    
//         if (err) {
//             console.log('open')
//             console.error(err.message);
//         }
//         console.log('Connected to the database.');
    
//     })

//     db.run(`INSERT INTO wine (id, nameBold) VALUES(?, ?)`, [data.id, data.nameBold], function(err) {
//         if (err) {
//             console.log('insert')
//           return console.log(err.message);
//         }
//         // get the last insert id
//         console.log(`A row has been inserted with rowid ${this.lastID}`);
//     });
// }

// db()




