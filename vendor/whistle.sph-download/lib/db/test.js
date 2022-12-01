
const path = require("path");
const persistentDBPath = path.join(__dirname, "./dysearch.bfd");
const Datastore = require("nedb-promises");
const db = Datastore.create(persistentDBPath);
async function  find(){

   
    // await db.remove({ _id: '11111' }, {}, function (err, numRemoved) {
    //     console.log(numRemoved+'+ddd')
    // });
    // for (let i=0; i<100;i++){
    //     console.log(i)
    //     await db.insert({_id:i+'id',s:i}).then(()=>{
    //         console.log('iiiiiiiixxxxx')
    //         return 10000001
    //     });
    // }

    num =3;
    size=20;
    skip = (num - 1) * size;
    sort = {}
    sortField='';
    if (!sortField) {
      // sortField = 'time';
      // sortOrder = 1; // 升序
      // sortOrder = -1; // 降序
      sort = { 's': 1 };
    }
    console.log('pageNumber:'+num+', size:'+size+', sortField:'+sort+', skip: '+skip)
    const docs = await db.find({}).sort(sort).skip(skip).limit(size).exec();
    // console.log(docs)
    console.log(docs.length)
    return docs;
    // sort={ 's' : -1 }
    // sortField='s'
    // sortOrder=-1
    // num = 1;
    // size=3;
    // skip = (num-1)*size;
    // const docs = await db.find({}).sort(sort).skip(skip).limit(size).exec();
    // console.log(docs)

    // const count =await db.count({});
    // console.log(count)

}



 let a =find();
 console.log(a)