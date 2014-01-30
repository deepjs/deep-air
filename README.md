# deep-air

local encrypted storage driver (store) for deepjs under Adobe AIR


## Collection store Usage 

```javascript 
	require("deep-air/index");
	deep.store.air.Collection.create("myprotocol");

	deep.store("myprotocol")
	.post({ hello:"world" })
	.get()
	.log();

	deep("myprotocol::?hello=world").log();

	deep.store("myprotocol")
	.put({ id:'test', myVar:"hello", myObject:{ myVar2:12344 }})
	.patch("patched with query",{id:"test/myVar"})
	.get("test")
	.log()
	.put(7777777,{id:"test/myObject/myVar2"})
	.patch({other:true},{id:"test/myObject/myVar2"})
	.get("test")
```

## Object store Usage 

```javascript
	require("deep-air/index");
	deep.store.air.Object.create("myprotocol");

	deep.store("myprotocol")
	.post({ hello:"world" },{ id:"/my/path" })
	.get()
	.log();

	deep("myprotocol::/my/path").log();

	//...

```



