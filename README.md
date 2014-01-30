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
	.logState()
	.patch("patched with query",{id:"test", query:"/myVar"})
	.logState()
	.get("test")
	.logState()
	.put(7777777,{id:"test", query:"/myObject/myVar2"})
	.logState()
	.patch({other:true},{id:"test", query:"/myObject/myVar2"})
	.logState()
	.get("test")
	.logState();
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



