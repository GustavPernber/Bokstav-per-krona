const clockString="TasteClockBody:9, TasteClockRoughness:8, TasteClockFruitacid:9,"
// [{"sötma":9}, ]

// console.log(array)

const tasteClocks={

    htmlClocks(){
        
    }

}

function clocks(clockString){
    
    const switchName=(name)=>{
        switch (name) {
            case "Body":
                return "Fyllighet"
                break;
            case "Roughness":
                return "Strävhet"
                break;
            case "Fruitacid":
                return "Fruktsyra"
                break;

            case "Sweetnes":
                return "Sötma"
                break;

            case "Bitter":
                return "Beska"
                break;
        
            default:
                return `NOT KNOWN ${name}`
                break;
        }
    }
    let array=clockString.split(', ')

    let newArr=[]
    array.forEach(element => {
        let pair=element.split('Clock')[1]
        let obj={
            name: switchName(pair.split(':')[0]),
            value:pair.split(':')[1]
        }
        // console.log(obj)
        newArr.push(obj)
        // console.log(element.split('Clock'))
        
    });
    return newArr
}

console.log(clocks(clockString))
// console.log(newArr)
// console.log(split)




// const sqlite3 = require('sqlite3').verbose();

// async function func2(id){

//     let db = new sqlite3.Database('C:/Users/Gustav/Google_Drive/VS_Code/Till_prog/BPK/node/db/db.db', (err) => {
    
//         if (err) {
//             console.log('open')
//             console.error(err.message);
//             throw new Error
//         }else{
//             console.log('Connected to the database.');
//         }
    
//     })

//     const query="SELECT * FROM Wine WHERE id=?"
//     // const query="INSERT INTO Wine (id, nameBold) VALUES(?, ?)"
    

    
//     console.log(typeof await queryS(query, [689075]));    
//     // db.all(query, [id], (err, rows)=>{
//     //     if (err) {
//     //         throw err;

//     //     }
//     //     // console.log(rows[0])
//     //     console.log('1')
        
//     // })
    
    
    

//     function queryS(query, params){
//         return new Promise((resolve, reject)=>{
//             db.all(query, params, (err, rows)=>{
//                 if (err) {
//                     throw err;
        
//                 }
                
                
//                 resolve(rows[0])
                
//             })
//         })
    
//     }
// }
// //Takes in query and params, returns results
// func2(1866)

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




