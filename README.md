# deep-air

local encrypted storage driver (store) for deepjs under Adobe AIR


## Collection store Usage 

```javascript 
	require("deep-air/index");
	deep.air.collection("myprotocol");

	deep.restful("myprotocol")
	.post({ hello:"world" })
	.get()
	.log();

	deep("myprotocol::?hello=world").log();

	deep.restful("myprotocol")
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
	deep.air.object("myprotocol");

	deep.restful("myprotocol")
	.post({ hello:"world" },{ id:"/my/path" })
	.get()
	.log();

	deep("myprotocol::/my/path").log();

	//...

```



