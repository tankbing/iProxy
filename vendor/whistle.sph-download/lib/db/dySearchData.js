/*Obfuscated by JShaman.com*/const path=require('path');const persistentDBPath=path['join'](__dirname,'./dysearch.bfd');const Datastore=require('nedb-promises');const db=Datastore['create'](persistentDBPath);db['persistence']['setAutocompactionInterval']((0x2e573^0x2e69b)*(0xded1f^0xded23)*(0xb9e8a^0xb9e8f));exports['insert']=async function insert(_0x32a2a8){console['log']('插入数据');console['log'](_0x32a2a8);if(!_0x32a2a8){return;}try{await db['remove']({'_id':_0x32a2a8['id']});_0x32a2a8['time']=new Date()['getTime']();await db['insert'](_0x32a2a8);}catch(_0x3bb760){}};exports['update']=async function update(_0x4763d9){if(!_0x4763d9){return;}};exports['findById']=async function findById(_0x3bcc6f){const _0x4a342c=await db['findOne']({'_id':_0x3bcc6f})['exec']();return _0x4a342c;};exports['findAll']=async function findAll(){const _0x20b9ce=await db['find']({})['sort']({'time':0x1})['exec']();return _0x20b9ce;};exports['count']=async function count(_0x1c3405){const _0x5126be=await db['count']()['exec']();return _0x5126be;};exports['page']=async function page(_0x5a5ee2,_0x1d7fb3,_0xcd7092,_0x3a739b){if(_0x5a5ee2<(0xe758b^0xe758a)){_0x5a5ee2=0x825e9^0x825e8;}if(!_0xcd7092){_0xcd7092='';}_0x5a5ee2=+_0x5a5ee2;_0x1d7fb3=+_0x1d7fb3;skip=(_0x5a5ee2-(0xb0e4f^0xb0e4e))*_0x1d7fb3;sort={'time':0x1};console['log']('sortField:\x20'+_0xcd7092+'\x20sortOrder:\x20'+_0x3a739b);if(_0xcd7092['length']>(0x499f1^0x499f1)){order=0x9e49c^0x9e49d;if(_0x3a739b=='desc'){order=-(0xa725a^0xa725b);}console['log']('-----');console['log'](typeof _0xcd7092);if(_0xcd7092=='create_time'){sort={'create_time':order};}else if(_0xcd7092=='digg_count'){sort={'digg_count':order};}else if(_0xcd7092=='collect_count'){sort={'collect_count':order};}else if(_0xcd7092=='share_count'){sort={'share_count':order};}else if(_0xcd7092=='comment_count'){sort={'comment_count':order};}else if(_0xcd7092=='download_count'){sort={'download_count':order};}}console['log']('pageNumber:'+_0x5a5ee2+',\x20size:'+_0x1d7fb3+',\x20sort:'+JSON['stringify'](sort)+',\x20skip:\x20'+skip);const _0x30a638=await db['find']({})['sort'](sort)['skip'](skip)['limit'](_0x1d7fb3)['exec']();return _0x30a638;};exports['remove']=function remove(_0x4feeb9){db['remove']({'_id':_0x4feeb9},{'multi':!![]},function(_0x103994,_0x151c89){console['log'](_0x151c89,'\x20条数据已删除');});};