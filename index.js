/**
 * @module deep
 * @author Gilles Coomans <gilles.coomans@gmail.com>
 */
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(["require","deepjs/deep"], function(require, deep){

    function writeAirStorage(name, datas)
    {
        var bytes = new air.ByteArray();
        bytes.writeUTFBytes(JSON.stringify(datas));
        air.EncryptedLocalStore.setItem(name, bytes);
    }

    deep.store.air = {};
    /**
     * deep.store.air.Collection
     * @param  {[type]} protocol                 (optional)[description]
     * @param  {[type]} root                (optional)[description]
     * @param  {[type]} schema                    (optional)[description]
     * @param  {[type]} options    (optional){ path:{ required string }, TTL:{ time to live (ms) }}
     */
    deep.store.air.Object = deep.compose.Classes(deep.store.Object,
    function(protocol, root, schema, options){
        options = options || {};
        var name = options.name || protocol;
        if(!name)
            throw deep.errors.Store("deep.store.air.Object need a path at constructor. please provide a options.path or a protocol.");
        var storedValue = air.EncryptedLocalStore.getItem(name);
        this.name = name;
        if(storedValue)
            this.root = JSON.parse(storedValue.readUTFBytes(storedValue.length));
        if(!this.root)
        {
            this.root = {};
            writeAirStorage(name, this.root);
        }
        deep.utils.up(options, this);
    },
    {
        post:deep.compose.after(function(result){
            writeAirStorage(this.name, this.root);
        }),
        put:deep.compose.after(function(result){
            writeAirStorage(this.name, this.root);
        }),
        patch:deep.compose.after(function(result){
            writeAirStorage(this.name, this.root);
        }),
        del:deep.compose.after(function(result){
            writeAirStorage(this.name, this.root);
        }),
        flush:deep.compose.after(function(result){
            writeAirStorage(this.name, this.root);
        })
    });
    deep.store.air.Object.create = function(protocol, root, schema, options)
    {
        return new deep.store.air.Object(protocol, root, schema, options);
    };

    /**
     * deep.store.air.Collection
     * @param  {[type]} protocol                 (optional)[description]
     * @param  {[type]} collection                (optional)[description]
     * @param  {[type]} schema                    (optional)[description]
     * @param  {[type]} options    (optional){ path:{ required string }, TTL:{ time to live (ms) }}
     */
    deep.store.air.Collection = deep.compose.Classes(deep.store.Collection,
    function(protocol, collection, schema, options){
        options = options || {};
        var name = options.name || protocol;
        if(!name)
            throw deep.errors.Store("deep.store.air.Collection need a path at constructor. please provide a options.path or a protocol.");
        var storedValue = air.EncryptedLocalStore.getItem(name);
        this.name = name;
        if(storedValue)
            this.collection = JSON.parse(storedValue.readUTFBytes(storedValue.length));
        if(!this.collection)
        {
            this.collection = [];
            writeAirStorage(name, this.collection);
        }
        deep.utils.up(options, this);
    },
    {
        post:deep.compose.after(function(result){
            writeAirStorage(this.name, this.collection);
        }),
        put:deep.compose.after(function(result){
            writeAirStorage(this.name, this.collection);
        }),
        patch:deep.compose.after(function(result){
            writeAirStorage(this.name, this.collection);
        }),
        del:deep.compose.after(function(result){
            writeAirStorage(this.name, this.collection);
        }),
        flush:deep.compose.after(function(opt){
            writeAirStorage(this.name, this.collection);
        })
    });
    deep.store.air.Collection.create = function(protocol, collection, schema, options)
    {
        return new deep.store.air.Collection(protocol, collection, schema, options);
    };


    return deep;
});
