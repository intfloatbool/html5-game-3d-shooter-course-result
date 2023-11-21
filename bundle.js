/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/HavokPhysics_es.js":
/*!*******************************!*\
  !*** ./js/HavokPhysics_es.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var HavokPhysics = (() => {
  var _scriptDir = "file:///C:/Users/LL/YandexDisk/RECOVERY_LITE/MY_PROJECTS/html5-3d-game-course/Project-Live-Version/js/HavokPhysics_es.js";
  
  return (
function(HavokPhysics) {
  HavokPhysics = HavokPhysics || {};

var Module=typeof HavokPhysics!="undefined"?HavokPhysics:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var POINTER_SIZE=4;var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAP64,HEAPU64,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf);Module["HEAP64"]=HEAP64=new BigInt64Array(buf);Module["HEAPU64"]=HEAPU64=new BigUint64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){{if(Module["onAbort"]){Module["onAbort"](what)}}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="HavokPhysics.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! HavokPhysics.wasm */ "./js/HavokPhysics.wasm"), __webpack_require__.b).toString()}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];addOnInit(Module["asm"]["__wasm_call_ctors"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}var tempDouble;var tempI64;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function demangle(func){return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function handleException(e){if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)}function jsStackTrace(){var error=new Error;if(!error.stack){try{throw new Error}catch(e){error=e}if(!error.stack){return"(no stack trace available)"}}return error.stack.toString()}var tupleRegistrations={};function runDestructors(destructors){while(destructors.length){var ptr=destructors.pop();var del=destructors.pop();del(ptr)}}function simpleReadValueFromPointer(pointer){return this["fromWireType"](HEAP32[pointer>>2])}var awaitingDependencies={};var registeredTypes={};var typeDependencies={};var char_0=48;var char_9=57;function makeLegalFunctionName(name){if(undefined===name){return"_unknown"}name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return"_"+name}return name}function createNamedFunction(name,body){name=makeLegalFunctionName(name);return new Function("body","return function "+name+"() {\n"+'    "use strict";'+"    return body.apply(this, arguments);\n"+"};\n")(body)}function extendError(baseErrorType,errorName){var errorClass=createNamedFunction(errorName,function(message){this.name=errorName;this.message=message;var stack=new Error(message).stack;if(stack!==undefined){this.stack=this.toString()+"\n"+stack.replace(/^Error(:[^\n]*)?\n/,"")}});errorClass.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){if(this.message===undefined){return this.name}else{return this.name+": "+this.message}};return errorClass}var InternalError=undefined;function throwInternalError(message){throw new InternalError(message)}function whenDependentTypesAreResolved(myTypes,dependentTypes,getTypeConverters){myTypes.forEach(function(type){typeDependencies[type]=dependentTypes});function onComplete(typeConverters){var myTypeConverters=getTypeConverters(typeConverters);if(myTypeConverters.length!==myTypes.length){throwInternalError("Mismatched type converter count")}for(var i=0;i<myTypes.length;++i){registerType(myTypes[i],myTypeConverters[i])}}var typeConverters=new Array(dependentTypes.length);var unregisteredTypes=[];var registered=0;dependentTypes.forEach((dt,i)=>{if(registeredTypes.hasOwnProperty(dt)){typeConverters[i]=registeredTypes[dt]}else{unregisteredTypes.push(dt);if(!awaitingDependencies.hasOwnProperty(dt)){awaitingDependencies[dt]=[]}awaitingDependencies[dt].push(()=>{typeConverters[i]=registeredTypes[dt];++registered;if(registered===unregisteredTypes.length){onComplete(typeConverters)}})}});if(0===unregisteredTypes.length){onComplete(typeConverters)}}function __embind_finalize_value_array(rawTupleType){var reg=tupleRegistrations[rawTupleType];delete tupleRegistrations[rawTupleType];var elements=reg.elements;var elementsLength=elements.length;var elementTypes=elements.map(function(elt){return elt.getterReturnType}).concat(elements.map(function(elt){return elt.setterArgumentType}));var rawConstructor=reg.rawConstructor;var rawDestructor=reg.rawDestructor;whenDependentTypesAreResolved([rawTupleType],elementTypes,function(elementTypes){elements.forEach((elt,i)=>{var getterReturnType=elementTypes[i];var getter=elt.getter;var getterContext=elt.getterContext;var setterArgumentType=elementTypes[i+elementsLength];var setter=elt.setter;var setterContext=elt.setterContext;elt.read=ptr=>{return getterReturnType["fromWireType"](getter(getterContext,ptr))};elt.write=(ptr,o)=>{var destructors=[];setter(setterContext,ptr,setterArgumentType["toWireType"](destructors,o));runDestructors(destructors)}});return[{name:reg.name,"fromWireType":function(ptr){var rv=new Array(elementsLength);for(var i=0;i<elementsLength;++i){rv[i]=elements[i].read(ptr)}rawDestructor(ptr);return rv},"toWireType":function(destructors,o){if(elementsLength!==o.length){throw new TypeError("Incorrect number of tuple elements for "+reg.name+": expected="+elementsLength+", actual="+o.length)}var ptr=rawConstructor();for(var i=0;i<elementsLength;++i){elements[i].write(ptr,o[i])}if(destructors!==null){destructors.push(rawDestructor,ptr)}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:rawDestructor}]})}function embindRepr(v){if(v===null){return"null"}var t=typeof v;if(t==="object"||t==="array"||t==="function"){return v.toString()}else{return""+v}}function embind_init_charCodes(){var codes=new Array(256);for(var i=0;i<256;++i){codes[i]=String.fromCharCode(i)}embind_charCodes=codes}var embind_charCodes=undefined;function readLatin1String(ptr){var ret="";var c=ptr;while(HEAPU8[c]){ret+=embind_charCodes[HEAPU8[c++]]}return ret}var BindingError=undefined;function throwBindingError(message){throw new BindingError(message)}function registerType(rawType,registeredInstance,options={}){if(!("argPackAdvance"in registeredInstance)){throw new TypeError("registerType registeredInstance requires argPackAdvance")}var name=registeredInstance.name;if(!rawType){throwBindingError('type "'+name+'" must have a positive integer typeid pointer')}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else{throwBindingError("Cannot register type '"+name+"' twice")}}registeredTypes[rawType]=registeredInstance;delete typeDependencies[rawType];if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach(cb=>cb())}}function integerReadValueFromPointer(name,shift,signed){switch(shift){case 0:return signed?function readS8FromPointer(pointer){return HEAP8[pointer]}:function readU8FromPointer(pointer){return HEAPU8[pointer]};case 1:return signed?function readS16FromPointer(pointer){return HEAP16[pointer>>1]}:function readU16FromPointer(pointer){return HEAPU16[pointer>>1]};case 2:return signed?function readS32FromPointer(pointer){return HEAP32[pointer>>2]}:function readU32FromPointer(pointer){return HEAPU32[pointer>>2]};case 3:return signed?function readS64FromPointer(pointer){return HEAP64[pointer>>3]}:function readU64FromPointer(pointer){return HEAPU64[pointer>>3]};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_bigint(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);var shift=getShiftFromSize(size);var isUnsignedType=name.indexOf("u")!=-1;if(isUnsignedType){maxRange=(1n<<64n)-1n}registerType(primitiveType,{name:name,"fromWireType":function(value){return value},"toWireType":function(destructors,value){if(typeof value!="bigint"&&typeof value!="number"){throw new TypeError('Cannot convert "'+embindRepr(value)+'" to '+this.name)}if(value<minRange||value>maxRange){throw new TypeError('Passing a number "'+embindRepr(value)+'" from JS side to C/C++ side to an argument of type "'+name+'", which is outside the valid range ['+minRange+", "+maxRange+"]!")}return value},"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,!isUnsignedType),destructorFunction:null})}function getShiftFromSize(size){switch(size){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+size)}}function __embind_register_bool(rawType,name,size,trueValue,falseValue){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(wt){return!!wt},"toWireType":function(destructors,o){return o?trueValue:falseValue},"argPackAdvance":8,"readValueFromPointer":function(pointer){var heap;if(size===1){heap=HEAP8}else if(size===2){heap=HEAP16}else if(size===4){heap=HEAP32}else{throw new TypeError("Unknown boolean type size: "+name)}return this["fromWireType"](heap[pointer>>shift])},destructorFunction:null})}var emval_free_list=[];var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle){if(handle>4&&0===--emval_handle_array[handle].refcount){emval_handle_array[handle]=undefined;emval_free_list.push(handle)}}function count_emval_handles(){var count=0;for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){++count}}return count}function get_first_emval(){for(var i=5;i<emval_handle_array.length;++i){if(emval_handle_array[i]!==undefined){return emval_handle_array[i]}}return null}function init_emval(){Module["count_emval_handles"]=count_emval_handles;Module["get_first_emval"]=get_first_emval}var Emval={toValue:handle=>{if(!handle){throwBindingError("Cannot use deleted val. handle = "+handle)}return emval_handle_array[handle].value},toHandle:value=>{switch(value){case undefined:return 1;case null:return 2;case true:return 3;case false:return 4;default:{var handle=emval_free_list.length?emval_free_list.pop():emval_handle_array.length;emval_handle_array[handle]={refcount:1,value:value};return handle}}}};function __embind_register_emval(rawType,name){name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(handle){var rv=Emval.toValue(handle);__emval_decref(handle);return rv},"toWireType":function(destructors,value){return Emval.toHandle(value)},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:null})}function ensureOverloadTable(proto,methodName,humanName){if(undefined===proto[methodName].overloadTable){var prevFunc=proto[methodName];proto[methodName]=function(){if(!proto[methodName].overloadTable.hasOwnProperty(arguments.length)){throwBindingError("Function '"+humanName+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+proto[methodName].overloadTable+")!")}return proto[methodName].overloadTable[arguments.length].apply(this,arguments)};proto[methodName].overloadTable=[];proto[methodName].overloadTable[prevFunc.argCount]=prevFunc}}function exposePublicSymbol(name,value,numArguments){if(Module.hasOwnProperty(name)){if(undefined===numArguments||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]){throwBindingError("Cannot register public name '"+name+"' twice")}ensureOverloadTable(Module,name,name);if(Module.hasOwnProperty(numArguments)){throwBindingError("Cannot register multiple overloads of a function with the same number of arguments ("+numArguments+")!")}Module[name].overloadTable[numArguments]=value}else{Module[name]=value;if(undefined!==numArguments){Module[name].numArguments=numArguments}}}function enumReadValueFromPointer(name,shift,signed){switch(shift){case 0:return function(pointer){var heap=signed?HEAP8:HEAPU8;return this["fromWireType"](heap[pointer])};case 1:return function(pointer){var heap=signed?HEAP16:HEAPU16;return this["fromWireType"](heap[pointer>>1])};case 2:return function(pointer){var heap=signed?HEAP32:HEAPU32;return this["fromWireType"](heap[pointer>>2])};default:throw new TypeError("Unknown integer type: "+name)}}function __embind_register_enum(rawType,name,size,isSigned){var shift=getShiftFromSize(size);name=readLatin1String(name);function ctor(){}ctor.values={};registerType(rawType,{name:name,constructor:ctor,"fromWireType":function(c){return this.constructor.values[c]},"toWireType":function(destructors,c){return c.value},"argPackAdvance":8,"readValueFromPointer":enumReadValueFromPointer(name,shift,isSigned),destructorFunction:null});exposePublicSymbol(name,ctor)}function getTypeName(type){var ptr=___getTypeName(type);var rv=readLatin1String(ptr);_free(ptr);return rv}function requireRegisteredType(rawType,humanName){var impl=registeredTypes[rawType];if(undefined===impl){throwBindingError(humanName+" has unknown type "+getTypeName(rawType))}return impl}function __embind_register_enum_value(rawEnumType,name,enumValue){var enumType=requireRegisteredType(rawEnumType,"enum");name=readLatin1String(name);var Enum=enumType.constructor;var Value=Object.create(enumType.constructor.prototype,{value:{value:enumValue},constructor:{value:createNamedFunction(enumType.name+"_"+name,function(){})}});Enum.values[enumValue]=Value;Enum[name]=Value}function floatReadValueFromPointer(name,shift){switch(shift){case 2:return function(pointer){return this["fromWireType"](HEAPF32[pointer>>2])};case 3:return function(pointer){return this["fromWireType"](HEAPF64[pointer>>3])};default:throw new TypeError("Unknown float type: "+name)}}function __embind_register_float(rawType,name,size){var shift=getShiftFromSize(size);name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":function(value){return value},"toWireType":function(destructors,value){return value},"argPackAdvance":8,"readValueFromPointer":floatReadValueFromPointer(name,shift),destructorFunction:null})}function new_(constructor,argumentList){if(!(constructor instanceof Function)){throw new TypeError("new_ called with constructor type "+typeof constructor+" which is not a function")}var dummy=createNamedFunction(constructor.name||"unknownFunctionName",function(){});dummy.prototype=constructor.prototype;var obj=new dummy;var r=constructor.apply(obj,argumentList);return r instanceof Object?r:obj}function craftInvokerFunction(humanName,argTypes,classType,cppInvokerFunc,cppTargetFunc){var argCount=argTypes.length;if(argCount<2){throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")}var isClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){if(argTypes[i]!==null&&argTypes[i].destructorFunction===undefined){needsDestructorStack=true;break}}var returns=argTypes[0].name!=="void";var argsList="";var argsListWired="";for(var i=0;i<argCount-2;++i){argsList+=(i!==0?", ":"")+"arg"+i;argsListWired+=(i!==0?", ":"")+"arg"+i+"Wired"}var invokerFnBody="return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n"+"if (arguments.length !== "+(argCount-2)+") {\n"+"throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount-2)+" args!');\n"+"}\n";if(needsDestructorStack){invokerFnBody+="var destructors = [];\n"}var dtorStack=needsDestructorStack?"destructors":"null";var args1=["throwBindingError","invoker","fn","runDestructors","retType","classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){invokerFnBody+="var thisWired = classParam.toWireType("+dtorStack+", this);\n"}for(var i=0;i<argCount-2;++i){invokerFnBody+="var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";args1.push("argType"+i);args2.push(argTypes[i+2])}if(isClassMethodFunc){argsListWired="thisWired"+(argsListWired.length>0?", ":"")+argsListWired}invokerFnBody+=(returns?"var rv = ":"")+"invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";if(needsDestructorStack){invokerFnBody+="runDestructors(destructors);\n"}else{for(var i=isClassMethodFunc?1:2;i<argTypes.length;++i){var paramName=i===1?"thisWired":"arg"+(i-2)+"Wired";if(argTypes[i].destructorFunction!==null){invokerFnBody+=paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";args1.push(paramName+"_dtor");args2.push(argTypes[i].destructorFunction)}}}if(returns){invokerFnBody+="var ret = retType.fromWireType(rv);\n"+"return ret;\n"}else{}invokerFnBody+="}\n";args1.push(invokerFnBody);var invokerFunction=new_(Function,args1).apply(null,args2);return invokerFunction}function heap32VectorToArray(count,firstElement){var array=[];for(var i=0;i<count;i++){array.push(HEAPU32[firstElement+i*4>>2])}return array}function replacePublicSymbol(name,value,numArguments){if(!Module.hasOwnProperty(name)){throwInternalError("Replacing nonexistant public symbol")}if(undefined!==Module[name].overloadTable&&undefined!==numArguments){Module[name].overloadTable[numArguments]=value}else{Module[name]=value;Module[name].argCount=numArguments}}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func}function embind__requireFunction(signature,rawFunction){signature=readLatin1String(signature);function makeDynCaller(){return getWasmTableEntry(rawFunction)}var fp=makeDynCaller();if(typeof fp!="function"){throwBindingError("unknown function pointer with signature "+signature+": "+rawFunction)}return fp}var UnboundTypeError=undefined;function throwUnboundTypeError(message,types){var unboundTypes=[];var seen={};function visit(type){if(seen[type]){return}if(registeredTypes[type]){return}if(typeDependencies[type]){typeDependencies[type].forEach(visit);return}unboundTypes.push(type);seen[type]=true}types.forEach(visit);throw new UnboundTypeError(message+": "+unboundTypes.map(getTypeName).join([", "]))}function __embind_register_function(name,argCount,rawArgTypesAddr,signature,rawInvoker,fn){var argTypes=heap32VectorToArray(argCount,rawArgTypesAddr);name=readLatin1String(name);rawInvoker=embind__requireFunction(signature,rawInvoker);exposePublicSymbol(name,function(){throwUnboundTypeError("Cannot call "+name+" due to unbound types",argTypes)},argCount-1);whenDependentTypesAreResolved([],argTypes,function(argTypes){var invokerArgsArray=[argTypes[0],null].concat(argTypes.slice(1));replacePublicSymbol(name,craftInvokerFunction(name,invokerArgsArray,null,rawInvoker,fn),argCount-1);return[]})}function __embind_register_integer(primitiveType,name,size,minRange,maxRange){name=readLatin1String(name);if(maxRange===-1){maxRange=4294967295}var shift=getShiftFromSize(size);var fromWireType=value=>value;if(minRange===0){var bitshift=32-8*size;fromWireType=value=>value<<bitshift>>>bitshift}var isUnsignedType=name.includes("unsigned");var checkAssertions=(value,toTypeName)=>{};var toWireType;if(isUnsignedType){toWireType=function(destructors,value){checkAssertions(value,this.name);return value>>>0}}else{toWireType=function(destructors,value){checkAssertions(value,this.name);return value}}registerType(primitiveType,{name:name,"fromWireType":fromWireType,"toWireType":toWireType,"argPackAdvance":8,"readValueFromPointer":integerReadValueFromPointer(name,shift,minRange!==0),destructorFunction:null})}function __embind_register_memory_view(rawType,dataTypeIndex,name){var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){handle=handle>>2;var heap=HEAPU32;var size=heap[handle];var data=heap[handle+1];return new TA(buffer,data,size)}name=readLatin1String(name);registerType(rawType,{name:name,"fromWireType":decodeMemoryView,"argPackAdvance":8,"readValueFromPointer":decodeMemoryView},{ignoreDuplicateRegistrations:true})}function __embind_register_std_string(rawType,name){name=readLatin1String(name);var stdStringIsUTF8=name==="std::string";registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var payload=value+4;var str;if(stdStringIsUTF8){var decodeStartPtr=payload;for(var i=0;i<=length;++i){var currentBytePtr=payload+i;if(i==length||HEAPU8[currentBytePtr]==0){var maxRead=currentBytePtr-decodeStartPtr;var stringSegment=UTF8ToString(decodeStartPtr,maxRead);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+1}}}else{var a=new Array(length);for(var i=0;i<length;++i){a[i]=String.fromCharCode(HEAPU8[payload+i])}str=a.join("")}_free(value);return str},"toWireType":function(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value)}var length;var valueIsOfTypeString=typeof value=="string";if(!(valueIsOfTypeString||value instanceof Uint8Array||value instanceof Uint8ClampedArray||value instanceof Int8Array)){throwBindingError("Cannot pass non-string to std::string")}if(stdStringIsUTF8&&valueIsOfTypeString){length=lengthBytesUTF8(value)}else{length=value.length}var base=_malloc(4+length+1);var ptr=base+4;HEAPU32[base>>2]=length;if(stdStringIsUTF8&&valueIsOfTypeString){stringToUTF8(value,ptr,length+1)}else{if(valueIsOfTypeString){for(var i=0;i<length;++i){var charCode=value.charCodeAt(i);if(charCode>255){_free(ptr);throwBindingError("String has UTF-16 code units that do not fit in 8 bits")}HEAPU8[ptr+i]=charCode}}else{for(var i=0;i<length;++i){HEAPU8[ptr+i]=value[i]}}}if(destructors!==null){destructors.push(_free,base)}return base},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}var UTF16Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):undefined;function UTF16ToString(ptr,maxBytesToRead){var endPtr=ptr;var idx=endPtr>>1;var maxIdx=idx+maxBytesToRead/2;while(!(idx>=maxIdx)&&HEAPU16[idx])++idx;endPtr=idx<<1;if(endPtr-ptr>32&&UTF16Decoder)return UTF16Decoder.decode(HEAPU8.subarray(ptr,endPtr));var str="";for(var i=0;!(i>=maxBytesToRead/2);++i){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)break;str+=String.fromCharCode(codeUnit)}return str}function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}function lengthBytesUTF16(str){return str.length*2}function UTF32ToString(ptr,maxBytesToRead){var i=0;var str="";while(!(i>=maxBytesToRead/4)){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)break;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}return str}function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}function __embind_register_std_wstring(rawType,charSize,name){name=readLatin1String(name);var decodeString,encodeString,getHeap,lengthBytesUTF,shift;if(charSize===2){decodeString=UTF16ToString;encodeString=stringToUTF16;lengthBytesUTF=lengthBytesUTF16;getHeap=()=>HEAPU16;shift=1}else if(charSize===4){decodeString=UTF32ToString;encodeString=stringToUTF32;lengthBytesUTF=lengthBytesUTF32;getHeap=()=>HEAPU32;shift=2}registerType(rawType,{name:name,"fromWireType":function(value){var length=HEAPU32[value>>2];var HEAP=getHeap();var str;var decodeStartPtr=value+4;for(var i=0;i<=length;++i){var currentBytePtr=value+4+i*charSize;if(i==length||HEAP[currentBytePtr>>shift]==0){var maxReadBytes=currentBytePtr-decodeStartPtr;var stringSegment=decodeString(decodeStartPtr,maxReadBytes);if(str===undefined){str=stringSegment}else{str+=String.fromCharCode(0);str+=stringSegment}decodeStartPtr=currentBytePtr+charSize}}_free(value);return str},"toWireType":function(destructors,value){if(!(typeof value=="string")){throwBindingError("Cannot pass non-string to C++ string type "+name)}var length=lengthBytesUTF(value);var ptr=_malloc(4+length+charSize);HEAPU32[ptr>>2]=length>>shift;encodeString(value,ptr+4,length+charSize);if(destructors!==null){destructors.push(_free,ptr)}return ptr},"argPackAdvance":8,"readValueFromPointer":simpleReadValueFromPointer,destructorFunction:function(ptr){_free(ptr)}})}function __embind_register_value_array(rawType,name,constructorSignature,rawConstructor,destructorSignature,rawDestructor){tupleRegistrations[rawType]={name:readLatin1String(name),rawConstructor:embind__requireFunction(constructorSignature,rawConstructor),rawDestructor:embind__requireFunction(destructorSignature,rawDestructor),elements:[]}}function __embind_register_value_array_element(rawTupleType,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){tupleRegistrations[rawTupleType].elements.push({getterReturnType:getterReturnType,getter:embind__requireFunction(getterSignature,getter),getterContext:getterContext,setterArgumentType:setterArgumentType,setter:embind__requireFunction(setterSignature,setter),setterContext:setterContext})}function __embind_register_void(rawType,name){name=readLatin1String(name);registerType(rawType,{isVoid:true,name:name,"argPackAdvance":0,"fromWireType":function(){return undefined},"toWireType":function(destructors,o){return undefined}})}var nowIsMonotonic=true;function __emscripten_get_now_is_monotonic(){return nowIsMonotonic}var emval_symbols={};function getStringOrSymbol(address){var symbol=emval_symbols[address];if(symbol===undefined){return readLatin1String(address)}return symbol}var emval_methodCallers=[];function __emval_call_void_method(caller,handle,methodName,args){caller=emval_methodCallers[caller];handle=Emval.toValue(handle);methodName=getStringOrSymbol(methodName);caller(handle,methodName,null,args)}function emval_addMethodCaller(caller){var id=emval_methodCallers.length;emval_methodCallers.push(caller);return id}function emval_lookupTypes(argCount,argTypes){var a=new Array(argCount);for(var i=0;i<argCount;++i){a[i]=requireRegisteredType(HEAPU32[argTypes+i*POINTER_SIZE>>2],"parameter "+i)}return a}var emval_registeredMethods=[];function __emval_get_method_caller(argCount,argTypes){var types=emval_lookupTypes(argCount,argTypes);var retType=types[0];var signatureName=retType.name+"_$"+types.slice(1).map(function(t){return t.name}).join("_")+"$";var returnId=emval_registeredMethods[signatureName];if(returnId!==undefined){return returnId}var params=["retType"];var args=[retType];var argsList="";for(var i=0;i<argCount-1;++i){argsList+=(i!==0?", ":"")+"arg"+i;params.push("argType"+i);args.push(types[1+i])}var functionName=makeLegalFunctionName("methodCaller_"+signatureName);var functionBody="return function "+functionName+"(handle, name, destructors, args) {\n";var offset=0;for(var i=0;i<argCount-1;++i){functionBody+="    var arg"+i+" = argType"+i+".readValueFromPointer(args"+(offset?"+"+offset:"")+");\n";offset+=types[i+1]["argPackAdvance"]}functionBody+="    var rv = handle[name]("+argsList+");\n";for(var i=0;i<argCount-1;++i){if(types[i+1]["deleteObject"]){functionBody+="    argType"+i+".deleteObject(arg"+i+");\n"}}if(!retType.isVoid){functionBody+="    return retType.toWireType(destructors, rv);\n"}functionBody+="};\n";params.push(functionBody);var invokerFunction=new_(Function,params).apply(null,args);returnId=emval_addMethodCaller(invokerFunction);emval_registeredMethods[signatureName]=returnId;return returnId}function _abort(){abort("")}function _emscripten_date_now(){return Date.now()}function getHeapMax(){return 2147483648}function _emscripten_get_heap_max(){return getHeapMax()}var _emscripten_get_now;_emscripten_get_now=()=>performance.now();function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}let alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var printCharBuffers=[null,[],[]];function printChar(stream,curr){var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}var SYSCALLS={varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0}function _proc_exit(code){EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))}function exitJS(status,implicit){EXITSTATUS=status;_proc_exit(status)}InternalError=Module["InternalError"]=extendError(Error,"InternalError");embind_init_charCodes();BindingError=Module["BindingError"]=extendError(Error,"BindingError");init_emval();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");var asmLibraryArg={"_embind_finalize_value_array":__embind_finalize_value_array,"_embind_register_bigint":__embind_register_bigint,"_embind_register_bool":__embind_register_bool,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_function":__embind_register_function,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_void":__embind_register_void,"_emscripten_get_now_is_monotonic":__emscripten_get_now_is_monotonic,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_get_method_caller":__emval_get_method_caller,"abort":_abort,"emscripten_date_now":_emscripten_date_now,"emscripten_get_heap_max":_emscripten_get_heap_max,"emscripten_get_now":_emscripten_get_now,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"fd_write":_fd_write};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["__wasm_call_ctors"]).apply(null,arguments)};var _HP_GetStatistics=Module["_HP_GetStatistics"]=function(){return(_HP_GetStatistics=Module["_HP_GetStatistics"]=Module["asm"]["HP_GetStatistics"]).apply(null,arguments)};var _HP_Shape_CreateSphere=Module["_HP_Shape_CreateSphere"]=function(){return(_HP_Shape_CreateSphere=Module["_HP_Shape_CreateSphere"]=Module["asm"]["HP_Shape_CreateSphere"]).apply(null,arguments)};var _HP_Shape_CreateCapsule=Module["_HP_Shape_CreateCapsule"]=function(){return(_HP_Shape_CreateCapsule=Module["_HP_Shape_CreateCapsule"]=Module["asm"]["HP_Shape_CreateCapsule"]).apply(null,arguments)};var _HP_Shape_CreateCylinder=Module["_HP_Shape_CreateCylinder"]=function(){return(_HP_Shape_CreateCylinder=Module["_HP_Shape_CreateCylinder"]=Module["asm"]["HP_Shape_CreateCylinder"]).apply(null,arguments)};var _HP_Shape_CreateBox=Module["_HP_Shape_CreateBox"]=function(){return(_HP_Shape_CreateBox=Module["_HP_Shape_CreateBox"]=Module["asm"]["HP_Shape_CreateBox"]).apply(null,arguments)};var _HP_Shape_CreateConvexHull=Module["_HP_Shape_CreateConvexHull"]=function(){return(_HP_Shape_CreateConvexHull=Module["_HP_Shape_CreateConvexHull"]=Module["asm"]["HP_Shape_CreateConvexHull"]).apply(null,arguments)};var _HP_Shape_CreateMesh=Module["_HP_Shape_CreateMesh"]=function(){return(_HP_Shape_CreateMesh=Module["_HP_Shape_CreateMesh"]=Module["asm"]["HP_Shape_CreateMesh"]).apply(null,arguments)};var _HP_Shape_CreateHeightField=Module["_HP_Shape_CreateHeightField"]=function(){return(_HP_Shape_CreateHeightField=Module["_HP_Shape_CreateHeightField"]=Module["asm"]["HP_Shape_CreateHeightField"]).apply(null,arguments)};var _HP_Shape_CreateContainer=Module["_HP_Shape_CreateContainer"]=function(){return(_HP_Shape_CreateContainer=Module["_HP_Shape_CreateContainer"]=Module["asm"]["HP_Shape_CreateContainer"]).apply(null,arguments)};var _HP_Shape_Release=Module["_HP_Shape_Release"]=function(){return(_HP_Shape_Release=Module["_HP_Shape_Release"]=Module["asm"]["HP_Shape_Release"]).apply(null,arguments)};var _HP_Shape_GetType=Module["_HP_Shape_GetType"]=function(){return(_HP_Shape_GetType=Module["_HP_Shape_GetType"]=Module["asm"]["HP_Shape_GetType"]).apply(null,arguments)};var _HP_Shape_AddChild=Module["_HP_Shape_AddChild"]=function(){return(_HP_Shape_AddChild=Module["_HP_Shape_AddChild"]=Module["asm"]["HP_Shape_AddChild"]).apply(null,arguments)};var _HP_Shape_RemoveChild=Module["_HP_Shape_RemoveChild"]=function(){return(_HP_Shape_RemoveChild=Module["_HP_Shape_RemoveChild"]=Module["asm"]["HP_Shape_RemoveChild"]).apply(null,arguments)};var _HP_Shape_GetNumChildren=Module["_HP_Shape_GetNumChildren"]=function(){return(_HP_Shape_GetNumChildren=Module["_HP_Shape_GetNumChildren"]=Module["asm"]["HP_Shape_GetNumChildren"]).apply(null,arguments)};var _HP_Shape_SetChildQSTransform=Module["_HP_Shape_SetChildQSTransform"]=function(){return(_HP_Shape_SetChildQSTransform=Module["_HP_Shape_SetChildQSTransform"]=Module["asm"]["HP_Shape_SetChildQSTransform"]).apply(null,arguments)};var _HP_Shape_GetChildQSTransform=Module["_HP_Shape_GetChildQSTransform"]=function(){return(_HP_Shape_GetChildQSTransform=Module["_HP_Shape_GetChildQSTransform"]=Module["asm"]["HP_Shape_GetChildQSTransform"]).apply(null,arguments)};var _HP_Shape_SetFilterInfo=Module["_HP_Shape_SetFilterInfo"]=function(){return(_HP_Shape_SetFilterInfo=Module["_HP_Shape_SetFilterInfo"]=Module["asm"]["HP_Shape_SetFilterInfo"]).apply(null,arguments)};var _HP_Shape_GetFilterInfo=Module["_HP_Shape_GetFilterInfo"]=function(){return(_HP_Shape_GetFilterInfo=Module["_HP_Shape_GetFilterInfo"]=Module["asm"]["HP_Shape_GetFilterInfo"]).apply(null,arguments)};var _HP_Shape_SetMaterial=Module["_HP_Shape_SetMaterial"]=function(){return(_HP_Shape_SetMaterial=Module["_HP_Shape_SetMaterial"]=Module["asm"]["HP_Shape_SetMaterial"]).apply(null,arguments)};var _HP_Shape_GetMaterial=Module["_HP_Shape_GetMaterial"]=function(){return(_HP_Shape_GetMaterial=Module["_HP_Shape_GetMaterial"]=Module["asm"]["HP_Shape_GetMaterial"]).apply(null,arguments)};var _HP_Shape_SetDensity=Module["_HP_Shape_SetDensity"]=function(){return(_HP_Shape_SetDensity=Module["_HP_Shape_SetDensity"]=Module["asm"]["HP_Shape_SetDensity"]).apply(null,arguments)};var _HP_Shape_GetDensity=Module["_HP_Shape_GetDensity"]=function(){return(_HP_Shape_GetDensity=Module["_HP_Shape_GetDensity"]=Module["asm"]["HP_Shape_GetDensity"]).apply(null,arguments)};var _HP_Shape_CastRay=Module["_HP_Shape_CastRay"]=function(){return(_HP_Shape_CastRay=Module["_HP_Shape_CastRay"]=Module["asm"]["HP_Shape_CastRay"]).apply(null,arguments)};var _HP_Shape_BuildMassProperties=Module["_HP_Shape_BuildMassProperties"]=function(){return(_HP_Shape_BuildMassProperties=Module["_HP_Shape_BuildMassProperties"]=Module["asm"]["HP_Shape_BuildMassProperties"]).apply(null,arguments)};var _HP_ShapePathIterator_GetNext=Module["_HP_ShapePathIterator_GetNext"]=function(){return(_HP_ShapePathIterator_GetNext=Module["_HP_ShapePathIterator_GetNext"]=Module["asm"]["HP_ShapePathIterator_GetNext"]).apply(null,arguments)};var _HP_Shape_SetTrigger=Module["_HP_Shape_SetTrigger"]=function(){return(_HP_Shape_SetTrigger=Module["_HP_Shape_SetTrigger"]=Module["asm"]["HP_Shape_SetTrigger"]).apply(null,arguments)};var _HP_Shape_CreateDebugDisplayGeometry=Module["_HP_Shape_CreateDebugDisplayGeometry"]=function(){return(_HP_Shape_CreateDebugDisplayGeometry=Module["_HP_Shape_CreateDebugDisplayGeometry"]=Module["asm"]["HP_Shape_CreateDebugDisplayGeometry"]).apply(null,arguments)};var _HP_DebugGeometry_GetInfo=Module["_HP_DebugGeometry_GetInfo"]=function(){return(_HP_DebugGeometry_GetInfo=Module["_HP_DebugGeometry_GetInfo"]=Module["asm"]["HP_DebugGeometry_GetInfo"]).apply(null,arguments)};var _HP_DebugGeometry_Release=Module["_HP_DebugGeometry_Release"]=function(){return(_HP_DebugGeometry_Release=Module["_HP_DebugGeometry_Release"]=Module["asm"]["HP_DebugGeometry_Release"]).apply(null,arguments)};var _HP_Body_Create=Module["_HP_Body_Create"]=function(){return(_HP_Body_Create=Module["_HP_Body_Create"]=Module["asm"]["HP_Body_Create"]).apply(null,arguments)};var _HP_Body_Release=Module["_HP_Body_Release"]=function(){return(_HP_Body_Release=Module["_HP_Body_Release"]=Module["asm"]["HP_Body_Release"]).apply(null,arguments)};var _HP_Body_SetShape=Module["_HP_Body_SetShape"]=function(){return(_HP_Body_SetShape=Module["_HP_Body_SetShape"]=Module["asm"]["HP_Body_SetShape"]).apply(null,arguments)};var _HP_Body_GetShape=Module["_HP_Body_GetShape"]=function(){return(_HP_Body_GetShape=Module["_HP_Body_GetShape"]=Module["asm"]["HP_Body_GetShape"]).apply(null,arguments)};var _HP_Body_SetMotionType=Module["_HP_Body_SetMotionType"]=function(){return(_HP_Body_SetMotionType=Module["_HP_Body_SetMotionType"]=Module["asm"]["HP_Body_SetMotionType"]).apply(null,arguments)};var _HP_Body_GetMotionType=Module["_HP_Body_GetMotionType"]=function(){return(_HP_Body_GetMotionType=Module["_HP_Body_GetMotionType"]=Module["asm"]["HP_Body_GetMotionType"]).apply(null,arguments)};var _HP_Body_SetEventMask=Module["_HP_Body_SetEventMask"]=function(){return(_HP_Body_SetEventMask=Module["_HP_Body_SetEventMask"]=Module["asm"]["HP_Body_SetEventMask"]).apply(null,arguments)};var _HP_Body_GetEventMask=Module["_HP_Body_GetEventMask"]=function(){return(_HP_Body_GetEventMask=Module["_HP_Body_GetEventMask"]=Module["asm"]["HP_Body_GetEventMask"]).apply(null,arguments)};var _HP_Body_SetMassProperties=Module["_HP_Body_SetMassProperties"]=function(){return(_HP_Body_SetMassProperties=Module["_HP_Body_SetMassProperties"]=Module["asm"]["HP_Body_SetMassProperties"]).apply(null,arguments)};var _HP_Body_GetMassProperties=Module["_HP_Body_GetMassProperties"]=function(){return(_HP_Body_GetMassProperties=Module["_HP_Body_GetMassProperties"]=Module["asm"]["HP_Body_GetMassProperties"]).apply(null,arguments)};var _HP_Body_SetLinearDamping=Module["_HP_Body_SetLinearDamping"]=function(){return(_HP_Body_SetLinearDamping=Module["_HP_Body_SetLinearDamping"]=Module["asm"]["HP_Body_SetLinearDamping"]).apply(null,arguments)};var _HP_Body_GetLinearDamping=Module["_HP_Body_GetLinearDamping"]=function(){return(_HP_Body_GetLinearDamping=Module["_HP_Body_GetLinearDamping"]=Module["asm"]["HP_Body_GetLinearDamping"]).apply(null,arguments)};var _HP_Body_SetAngularDamping=Module["_HP_Body_SetAngularDamping"]=function(){return(_HP_Body_SetAngularDamping=Module["_HP_Body_SetAngularDamping"]=Module["asm"]["HP_Body_SetAngularDamping"]).apply(null,arguments)};var _HP_Body_GetAngularDamping=Module["_HP_Body_GetAngularDamping"]=function(){return(_HP_Body_GetAngularDamping=Module["_HP_Body_GetAngularDamping"]=Module["asm"]["HP_Body_GetAngularDamping"]).apply(null,arguments)};var _HP_Body_SetGravityFactor=Module["_HP_Body_SetGravityFactor"]=function(){return(_HP_Body_SetGravityFactor=Module["_HP_Body_SetGravityFactor"]=Module["asm"]["HP_Body_SetGravityFactor"]).apply(null,arguments)};var _HP_Body_GetGravityFactor=Module["_HP_Body_GetGravityFactor"]=function(){return(_HP_Body_GetGravityFactor=Module["_HP_Body_GetGravityFactor"]=Module["asm"]["HP_Body_GetGravityFactor"]).apply(null,arguments)};var _HP_Body_GetWorld=Module["_HP_Body_GetWorld"]=function(){return(_HP_Body_GetWorld=Module["_HP_Body_GetWorld"]=Module["asm"]["HP_Body_GetWorld"]).apply(null,arguments)};var _HP_Body_SetPosition=Module["_HP_Body_SetPosition"]=function(){return(_HP_Body_SetPosition=Module["_HP_Body_SetPosition"]=Module["asm"]["HP_Body_SetPosition"]).apply(null,arguments)};var _HP_Body_GetPosition=Module["_HP_Body_GetPosition"]=function(){return(_HP_Body_GetPosition=Module["_HP_Body_GetPosition"]=Module["asm"]["HP_Body_GetPosition"]).apply(null,arguments)};var _HP_Body_SetOrientation=Module["_HP_Body_SetOrientation"]=function(){return(_HP_Body_SetOrientation=Module["_HP_Body_SetOrientation"]=Module["asm"]["HP_Body_SetOrientation"]).apply(null,arguments)};var _HP_Body_GetOrientation=Module["_HP_Body_GetOrientation"]=function(){return(_HP_Body_GetOrientation=Module["_HP_Body_GetOrientation"]=Module["asm"]["HP_Body_GetOrientation"]).apply(null,arguments)};var _HP_Body_SetQTransform=Module["_HP_Body_SetQTransform"]=function(){return(_HP_Body_SetQTransform=Module["_HP_Body_SetQTransform"]=Module["asm"]["HP_Body_SetQTransform"]).apply(null,arguments)};var _HP_Body_GetWorldTransformOffset=Module["_HP_Body_GetWorldTransformOffset"]=function(){return(_HP_Body_GetWorldTransformOffset=Module["_HP_Body_GetWorldTransformOffset"]=Module["asm"]["HP_Body_GetWorldTransformOffset"]).apply(null,arguments)};var _HP_Body_GetQTransform=Module["_HP_Body_GetQTransform"]=function(){return(_HP_Body_GetQTransform=Module["_HP_Body_GetQTransform"]=Module["asm"]["HP_Body_GetQTransform"]).apply(null,arguments)};var _HP_Body_SetLinearVelocity=Module["_HP_Body_SetLinearVelocity"]=function(){return(_HP_Body_SetLinearVelocity=Module["_HP_Body_SetLinearVelocity"]=Module["asm"]["HP_Body_SetLinearVelocity"]).apply(null,arguments)};var _HP_Body_GetLinearVelocity=Module["_HP_Body_GetLinearVelocity"]=function(){return(_HP_Body_GetLinearVelocity=Module["_HP_Body_GetLinearVelocity"]=Module["asm"]["HP_Body_GetLinearVelocity"]).apply(null,arguments)};var _HP_Body_SetAngularVelocity=Module["_HP_Body_SetAngularVelocity"]=function(){return(_HP_Body_SetAngularVelocity=Module["_HP_Body_SetAngularVelocity"]=Module["asm"]["HP_Body_SetAngularVelocity"]).apply(null,arguments)};var _HP_Body_GetAngularVelocity=Module["_HP_Body_GetAngularVelocity"]=function(){return(_HP_Body_GetAngularVelocity=Module["_HP_Body_GetAngularVelocity"]=Module["asm"]["HP_Body_GetAngularVelocity"]).apply(null,arguments)};var _HP_Body_ApplyImpulse=Module["_HP_Body_ApplyImpulse"]=function(){return(_HP_Body_ApplyImpulse=Module["_HP_Body_ApplyImpulse"]=Module["asm"]["HP_Body_ApplyImpulse"]).apply(null,arguments)};var _HP_Body_SetTargetQTransform=Module["_HP_Body_SetTargetQTransform"]=function(){return(_HP_Body_SetTargetQTransform=Module["_HP_Body_SetTargetQTransform"]=Module["asm"]["HP_Body_SetTargetQTransform"]).apply(null,arguments)};var _HP_Body_SetActivationState=Module["_HP_Body_SetActivationState"]=function(){return(_HP_Body_SetActivationState=Module["_HP_Body_SetActivationState"]=Module["asm"]["HP_Body_SetActivationState"]).apply(null,arguments)};var _HP_Body_GetActivationState=Module["_HP_Body_GetActivationState"]=function(){return(_HP_Body_GetActivationState=Module["_HP_Body_GetActivationState"]=Module["asm"]["HP_Body_GetActivationState"]).apply(null,arguments)};var _HP_Body_SetActivationControl=Module["_HP_Body_SetActivationControl"]=function(){return(_HP_Body_SetActivationControl=Module["_HP_Body_SetActivationControl"]=Module["asm"]["HP_Body_SetActivationControl"]).apply(null,arguments)};var _HP_Body_SetActivationPriority=Module["_HP_Body_SetActivationPriority"]=function(){return(_HP_Body_SetActivationPriority=Module["_HP_Body_SetActivationPriority"]=Module["asm"]["HP_Body_SetActivationPriority"]).apply(null,arguments)};var _HP_Constraint_Create=Module["_HP_Constraint_Create"]=function(){return(_HP_Constraint_Create=Module["_HP_Constraint_Create"]=Module["asm"]["HP_Constraint_Create"]).apply(null,arguments)};var _HP_Constraint_Release=Module["_HP_Constraint_Release"]=function(){return(_HP_Constraint_Release=Module["_HP_Constraint_Release"]=Module["asm"]["HP_Constraint_Release"]).apply(null,arguments)};var _HP_Constraint_SetParentBody=Module["_HP_Constraint_SetParentBody"]=function(){return(_HP_Constraint_SetParentBody=Module["_HP_Constraint_SetParentBody"]=Module["asm"]["HP_Constraint_SetParentBody"]).apply(null,arguments)};var _HP_Constraint_GetParentBody=Module["_HP_Constraint_GetParentBody"]=function(){return(_HP_Constraint_GetParentBody=Module["_HP_Constraint_GetParentBody"]=Module["asm"]["HP_Constraint_GetParentBody"]).apply(null,arguments)};var _HP_Constraint_SetChildBody=Module["_HP_Constraint_SetChildBody"]=function(){return(_HP_Constraint_SetChildBody=Module["_HP_Constraint_SetChildBody"]=Module["asm"]["HP_Constraint_SetChildBody"]).apply(null,arguments)};var _HP_Constraint_GetChildBody=Module["_HP_Constraint_GetChildBody"]=function(){return(_HP_Constraint_GetChildBody=Module["_HP_Constraint_GetChildBody"]=Module["asm"]["HP_Constraint_GetChildBody"]).apply(null,arguments)};var _HP_Constraint_SetAnchorInParent=Module["_HP_Constraint_SetAnchorInParent"]=function(){return(_HP_Constraint_SetAnchorInParent=Module["_HP_Constraint_SetAnchorInParent"]=Module["asm"]["HP_Constraint_SetAnchorInParent"]).apply(null,arguments)};var _HP_Constraint_SetAnchorInChild=Module["_HP_Constraint_SetAnchorInChild"]=function(){return(_HP_Constraint_SetAnchorInChild=Module["_HP_Constraint_SetAnchorInChild"]=Module["asm"]["HP_Constraint_SetAnchorInChild"]).apply(null,arguments)};var _HP_Constraint_SetCollisionsEnabled=Module["_HP_Constraint_SetCollisionsEnabled"]=function(){return(_HP_Constraint_SetCollisionsEnabled=Module["_HP_Constraint_SetCollisionsEnabled"]=Module["asm"]["HP_Constraint_SetCollisionsEnabled"]).apply(null,arguments)};var _HP_Constraint_GetCollisionsEnabled=Module["_HP_Constraint_GetCollisionsEnabled"]=function(){return(_HP_Constraint_GetCollisionsEnabled=Module["_HP_Constraint_GetCollisionsEnabled"]=Module["asm"]["HP_Constraint_GetCollisionsEnabled"]).apply(null,arguments)};var _HP_Constraint_SetEnabled=Module["_HP_Constraint_SetEnabled"]=function(){return(_HP_Constraint_SetEnabled=Module["_HP_Constraint_SetEnabled"]=Module["asm"]["HP_Constraint_SetEnabled"]).apply(null,arguments)};var _HP_Constraint_GetEnabled=Module["_HP_Constraint_GetEnabled"]=function(){return(_HP_Constraint_GetEnabled=Module["_HP_Constraint_GetEnabled"]=Module["asm"]["HP_Constraint_GetEnabled"]).apply(null,arguments)};var _HP_Constraint_SetAxisMinLimit=Module["_HP_Constraint_SetAxisMinLimit"]=function(){return(_HP_Constraint_SetAxisMinLimit=Module["_HP_Constraint_SetAxisMinLimit"]=Module["asm"]["HP_Constraint_SetAxisMinLimit"]).apply(null,arguments)};var _HP_Constraint_GetAxisMinLimit=Module["_HP_Constraint_GetAxisMinLimit"]=function(){return(_HP_Constraint_GetAxisMinLimit=Module["_HP_Constraint_GetAxisMinLimit"]=Module["asm"]["HP_Constraint_GetAxisMinLimit"]).apply(null,arguments)};var _HP_Constraint_SetAxisMaxLimit=Module["_HP_Constraint_SetAxisMaxLimit"]=function(){return(_HP_Constraint_SetAxisMaxLimit=Module["_HP_Constraint_SetAxisMaxLimit"]=Module["asm"]["HP_Constraint_SetAxisMaxLimit"]).apply(null,arguments)};var _HP_Constraint_GetAxisMaxLimit=Module["_HP_Constraint_GetAxisMaxLimit"]=function(){return(_HP_Constraint_GetAxisMaxLimit=Module["_HP_Constraint_GetAxisMaxLimit"]=Module["asm"]["HP_Constraint_GetAxisMaxLimit"]).apply(null,arguments)};var _HP_Constraint_GetAxisMode=Module["_HP_Constraint_GetAxisMode"]=function(){return(_HP_Constraint_GetAxisMode=Module["_HP_Constraint_GetAxisMode"]=Module["asm"]["HP_Constraint_GetAxisMode"]).apply(null,arguments)};var _HP_Constraint_SetAxisMode=Module["_HP_Constraint_SetAxisMode"]=function(){return(_HP_Constraint_SetAxisMode=Module["_HP_Constraint_SetAxisMode"]=Module["asm"]["HP_Constraint_SetAxisMode"]).apply(null,arguments)};var _HP_Constraint_SetAxisFriction=Module["_HP_Constraint_SetAxisFriction"]=function(){return(_HP_Constraint_SetAxisFriction=Module["_HP_Constraint_SetAxisFriction"]=Module["asm"]["HP_Constraint_SetAxisFriction"]).apply(null,arguments)};var _HP_Constraint_GetAxisFriction=Module["_HP_Constraint_GetAxisFriction"]=function(){return(_HP_Constraint_GetAxisFriction=Module["_HP_Constraint_GetAxisFriction"]=Module["asm"]["HP_Constraint_GetAxisFriction"]).apply(null,arguments)};var _HP_Constraint_SetAxisMotorType=Module["_HP_Constraint_SetAxisMotorType"]=function(){return(_HP_Constraint_SetAxisMotorType=Module["_HP_Constraint_SetAxisMotorType"]=Module["asm"]["HP_Constraint_SetAxisMotorType"]).apply(null,arguments)};var _HP_Constraint_GetAxisMotorType=Module["_HP_Constraint_GetAxisMotorType"]=function(){return(_HP_Constraint_GetAxisMotorType=Module["_HP_Constraint_GetAxisMotorType"]=Module["asm"]["HP_Constraint_GetAxisMotorType"]).apply(null,arguments)};var _HP_Constraint_SetAxisMotorTarget=Module["_HP_Constraint_SetAxisMotorTarget"]=function(){return(_HP_Constraint_SetAxisMotorTarget=Module["_HP_Constraint_SetAxisMotorTarget"]=Module["asm"]["HP_Constraint_SetAxisMotorTarget"]).apply(null,arguments)};var _HP_Constraint_GetAxisMotorTarget=Module["_HP_Constraint_GetAxisMotorTarget"]=function(){return(_HP_Constraint_GetAxisMotorTarget=Module["_HP_Constraint_GetAxisMotorTarget"]=Module["asm"]["HP_Constraint_GetAxisMotorTarget"]).apply(null,arguments)};var _HP_Constraint_SetAxisMotorMaxForce=Module["_HP_Constraint_SetAxisMotorMaxForce"]=function(){return(_HP_Constraint_SetAxisMotorMaxForce=Module["_HP_Constraint_SetAxisMotorMaxForce"]=Module["asm"]["HP_Constraint_SetAxisMotorMaxForce"]).apply(null,arguments)};var _HP_Constraint_GetAxisMotorMaxForce=Module["_HP_Constraint_GetAxisMotorMaxForce"]=function(){return(_HP_Constraint_GetAxisMotorMaxForce=Module["_HP_Constraint_GetAxisMotorMaxForce"]=Module["asm"]["HP_Constraint_GetAxisMotorMaxForce"]).apply(null,arguments)};var _HP_Constraint_SetAxisStiffness=Module["_HP_Constraint_SetAxisStiffness"]=function(){return(_HP_Constraint_SetAxisStiffness=Module["_HP_Constraint_SetAxisStiffness"]=Module["asm"]["HP_Constraint_SetAxisStiffness"]).apply(null,arguments)};var _HP_Constraint_SetAxisDamping=Module["_HP_Constraint_SetAxisDamping"]=function(){return(_HP_Constraint_SetAxisDamping=Module["_HP_Constraint_SetAxisDamping"]=Module["asm"]["HP_Constraint_SetAxisDamping"]).apply(null,arguments)};var _HP_World_Create=Module["_HP_World_Create"]=function(){return(_HP_World_Create=Module["_HP_World_Create"]=Module["asm"]["HP_World_Create"]).apply(null,arguments)};var _HP_World_Release=Module["_HP_World_Release"]=function(){return(_HP_World_Release=Module["_HP_World_Release"]=Module["asm"]["HP_World_Release"]).apply(null,arguments)};var _HP_World_GetBodyBuffer=Module["_HP_World_GetBodyBuffer"]=function(){return(_HP_World_GetBodyBuffer=Module["_HP_World_GetBodyBuffer"]=Module["asm"]["HP_World_GetBodyBuffer"]).apply(null,arguments)};var _HP_World_SetGravity=Module["_HP_World_SetGravity"]=function(){return(_HP_World_SetGravity=Module["_HP_World_SetGravity"]=Module["asm"]["HP_World_SetGravity"]).apply(null,arguments)};var _HP_World_GetGravity=Module["_HP_World_GetGravity"]=function(){return(_HP_World_GetGravity=Module["_HP_World_GetGravity"]=Module["asm"]["HP_World_GetGravity"]).apply(null,arguments)};var _HP_World_AddBody=Module["_HP_World_AddBody"]=function(){return(_HP_World_AddBody=Module["_HP_World_AddBody"]=Module["asm"]["HP_World_AddBody"]).apply(null,arguments)};var _HP_World_RemoveBody=Module["_HP_World_RemoveBody"]=function(){return(_HP_World_RemoveBody=Module["_HP_World_RemoveBody"]=Module["asm"]["HP_World_RemoveBody"]).apply(null,arguments)};var _HP_World_GetNumBodies=Module["_HP_World_GetNumBodies"]=function(){return(_HP_World_GetNumBodies=Module["_HP_World_GetNumBodies"]=Module["asm"]["HP_World_GetNumBodies"]).apply(null,arguments)};var _HP_World_CastRayWithCollector=Module["_HP_World_CastRayWithCollector"]=function(){return(_HP_World_CastRayWithCollector=Module["_HP_World_CastRayWithCollector"]=Module["asm"]["HP_World_CastRayWithCollector"]).apply(null,arguments)};var _HP_World_Step=Module["_HP_World_Step"]=function(){return(_HP_World_Step=Module["_HP_World_Step"]=Module["asm"]["HP_World_Step"]).apply(null,arguments)};var _HP_World_SetIdealStepTime=Module["_HP_World_SetIdealStepTime"]=function(){return(_HP_World_SetIdealStepTime=Module["_HP_World_SetIdealStepTime"]=Module["asm"]["HP_World_SetIdealStepTime"]).apply(null,arguments)};var _HP_World_GetNextCollisionEvent=Module["_HP_World_GetNextCollisionEvent"]=function(){return(_HP_World_GetNextCollisionEvent=Module["_HP_World_GetNextCollisionEvent"]=Module["asm"]["HP_World_GetNextCollisionEvent"]).apply(null,arguments)};var _HP_World_GetNextTriggerEvent=Module["_HP_World_GetNextTriggerEvent"]=function(){return(_HP_World_GetNextTriggerEvent=Module["_HP_World_GetNextTriggerEvent"]=Module["asm"]["HP_World_GetNextTriggerEvent"]).apply(null,arguments)};var _HP_QueryCollector_Create=Module["_HP_QueryCollector_Create"]=function(){return(_HP_QueryCollector_Create=Module["_HP_QueryCollector_Create"]=Module["asm"]["HP_QueryCollector_Create"]).apply(null,arguments)};var _HP_QueryCollector_Release=Module["_HP_QueryCollector_Release"]=function(){return(_HP_QueryCollector_Release=Module["_HP_QueryCollector_Release"]=Module["asm"]["HP_QueryCollector_Release"]).apply(null,arguments)};var _HP_QueryCollector_GetNumHits=Module["_HP_QueryCollector_GetNumHits"]=function(){return(_HP_QueryCollector_GetNumHits=Module["_HP_QueryCollector_GetNumHits"]=Module["asm"]["HP_QueryCollector_GetNumHits"]).apply(null,arguments)};var _HP_QueryCollector_GetCastRayResult=Module["_HP_QueryCollector_GetCastRayResult"]=function(){return(_HP_QueryCollector_GetCastRayResult=Module["_HP_QueryCollector_GetCastRayResult"]=Module["asm"]["HP_QueryCollector_GetCastRayResult"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["main"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["malloc"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["free"]).apply(null,arguments)};var _HP_Debug_StartRecordingStats=Module["_HP_Debug_StartRecordingStats"]=function(){return(_HP_Debug_StartRecordingStats=Module["_HP_Debug_StartRecordingStats"]=Module["asm"]["HP_Debug_StartRecordingStats"]).apply(null,arguments)};var _HP_Debug_StopRecordingStats=Module["_HP_Debug_StopRecordingStats"]=function(){return(_HP_Debug_StopRecordingStats=Module["_HP_Debug_StopRecordingStats"]=Module["asm"]["HP_Debug_StopRecordingStats"]).apply(null,arguments)};var ___errno_location=Module["___errno_location"]=function(){return(___errno_location=Module["___errno_location"]=Module["asm"]["__errno_location"]).apply(null,arguments)};var _htons=Module["_htons"]=function(){return(_htons=Module["_htons"]=Module["asm"]["htons"]).apply(null,arguments)};var _ntohs=Module["_ntohs"]=function(){return(_ntohs=Module["_ntohs"]=Module["asm"]["ntohs"]).apply(null,arguments)};var ___getTypeName=Module["___getTypeName"]=function(){return(___getTypeName=Module["___getTypeName"]=Module["asm"]["__getTypeName"]).apply(null,arguments)};var __embind_initialize_bindings=Module["__embind_initialize_bindings"]=function(){return(__embind_initialize_bindings=Module["__embind_initialize_bindings"]=Module["asm"]["_embind_initialize_bindings"]).apply(null,arguments)};var _htonl=Module["_htonl"]=function(){return(_htonl=Module["_htonl"]=Module["asm"]["htonl"]).apply(null,arguments)};var _setThrew=Module["_setThrew"]=function(){return(_setThrew=Module["_setThrew"]=Module["asm"]["setThrew"]).apply(null,arguments)};var _saveSetjmp=Module["_saveSetjmp"]=function(){return(_saveSetjmp=Module["_saveSetjmp"]=Module["asm"]["saveSetjmp"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["stackSave"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["stackRestore"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["stackAlloc"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args){var entryFunction=Module["_main"];var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();


  return HavokPhysics.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HavokPhysics);

/***/ }),

/***/ "./js/Utils.js":
/*!*********************!*\
  !*** ./js/Utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitUntil: () => (/* binding */ WaitUntil)
/* harmony export */ });
let sleep = ms => new Promise(r => setTimeout(r, ms));
const WaitUntil = async function waitFor(f){
    while(!f()) await sleep(1000);
    return f();
};

/***/ }),

/***/ "./js/project/character/characterModelLoader.js":
/*!******************************************************!*\
  !*** ./js/project/character/characterModelLoader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterModelLoader: () => (/* binding */ CharacterModelLoader)
/* harmony export */ });
/* harmony import */ var _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/modelLoader.js */ "./js/project/common/modelLoader.js");


class CharacterModelLoader {

    constructor(scene) {
        this.scene = scene;
    }

    async LoadAndSetupModelAsync() {
        const playerCharacterData = await new _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__.ModelLoader(this.scene, null, "./Assets/animated_character/", "ninja.glb").LoadAsync();

        const playerCharacterMeshes = playerCharacterData.meshes;
        const playerRootMesh = playerCharacterMeshes[0];
        playerRootMesh.name = "Player";
        const playerRootMeshChilds = playerRootMesh.getChildren();
        const playerBodyTransform = playerRootMeshChilds[0];

        playerBodyTransform.rotation = new BABYLON.Vector3(0, 0, 0);

        playerRootMesh.scaling  = playerRootMesh.scaling.scale(2.0);

        // init ninja body
        const modelBody = playerBodyTransform.getChildMeshes()[0];

        //console.log("MODEL BODY: " + modelBody.name);
        modelBody.rotation.x = new BABYLON.Angle.FromDegrees(90).radians();
        modelBody.scaling = new BABYLON.Vector3(10, 10, 10);

        return playerCharacterData.animationGroups;
    }

}

/***/ }),

/***/ "./js/project/common/GameTimer.js":
/*!****************************************!*\
  !*** ./js/project/common/GameTimer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameTimer)
/* harmony export */ });
class GameTimer {

    static OnTickOneSecondObservable;
    static StartTime;

    static GetElapsedTimeMs() {
        const nowDate = new Date();
        // elapsed time in milliseconds
        const dateDiff = nowDate - GameTimer.StartTime;
        
        return dateDiff;
    }

    static GetElapsedTimeSeconds() {
    
        return GameTimer.GetElapsedTimeMs() * 0.001 ;
    }

    static StartTimer() {
        GameTimer.OnTickOneSecondObservable = new BABYLON.Observable();
        GameTimer.OnTickOnSecondLoopAsync(() => {
            const timeSecondSinceStarted = Math.round(GameTimer.GetElapsedTimeSeconds());
            //console.log("TIMER: " + timeSecondSinceStarted);
            GameTimer.OnTickOneSecondObservable.notifyObservers(timeSecondSinceStarted);
        });
    }

    static async OnTickOnSecondLoopAsync(callBack) {
        while(true) {
            await new Promise((res, rej) => {
                setTimeout(res, 1000);
            });

            callBack();
        }
    }
    
}

/***/ }),

/***/ "./js/project/common/SoundPlayer.js":
/*!******************************************!*\
  !*** ./js/project/common/SoundPlayer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundPlayer)
/* harmony export */ });
class SoundPlayer {

    constructor(scene) {
        this._scene = scene;
        this._soundsMap = new Map();
    }

    PreloadSound(soundKey, soundPath) {
        if(this._soundsMap.has(soundKey)) {
            throw new Error(`[SoundPlayer] sound with key '${soundKey}' is already loaded!`);
        }

        const sound = new BABYLON.Sound(soundKey, soundPath, this._scene);
        this._soundsMap.set(soundKey, sound);

        return this;
    }
    
    PlaySound(soundKey) {
        if(!this._soundsMap.has(soundKey)) {
            throw new Error(`[SoundPlayer] sound with key '${soundKey}' is not presented!`);
        }

        this._soundsMap.get(soundKey).play();
    }
}

/***/ }),

/***/ "./js/project/common/gameBehaviour.js":
/*!********************************************!*\
  !*** ./js/project/common/gameBehaviour.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeGameBehaviour: () => (/* binding */ CompositeGameBehaviour),
/* harmony export */   GameBehaviour: () => (/* binding */ GameBehaviour)
/* harmony export */ });
class GameBehaviour {
    SetEntity(entity) {
        this.entity = entity;
    }
    OnAwake() {}
    OnStart() {}
    OnDisable() {}
    OnDestroy() {}
    OnUpdate(deltaTime) {}
    async InitAsync() {}
}

class CompositeGameBehaviour extends GameBehaviour {

    constructor(childBehaviours) {
        super();
        if(!childBehaviours) {
            this.childBehaviours = [];
        } else {
            if(childBehaviours.length > 0) {
                this.childBehaviours = childBehaviours;
            } else {
                this.childBehaviours = [];
            }
        }
    }

    OnAwake() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnAwake();
        }
    }

    OnStart() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnStart();
        }
    }

    OnDisable() {
        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnDisable();
        }
    }

    OnDestroy() {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnDestroy();
        }

        this.childBehaviours = null;
        this.entity = null;
    }

    OnUpdate(deltaTime) {

        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            beh.OnUpdate(deltaTime);
        }
    }
    async InitAsync() {
        if(!this.childBehaviours)  {
            return;
        }

        for(const beh of this.childBehaviours) {
            await beh.InitAsync();
        } 
    }
}

/***/ }),

/***/ "./js/project/common/modelLoader.js":
/*!******************************************!*\
  !*** ./js/project/common/modelLoader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelLoader: () => (/* binding */ ModelLoader)
/* harmony export */ });
class ModelLoader {
    constructor(scene, modelName, relativePath, fileName) {
        this.scene = scene;
        this.modelName = modelName;
        this.relativePath = relativePath;
        this.fileName = fileName;
    }

    LoadAsync() {
        // returns array of meshes 'result.meshes[]'
        // result.meshes
        
        return BABYLON.SceneLoader.ImportMeshAsync(this.modelName, this.relativePath, this.fileName, this.scene); 
    }
}

/*
    SAMPLE:
    BABYLON.SceneLoader.ImportMeshAsync("", "/relative path/", "myFile"); //Empty string loads all meshes
    BABYLON.SceneLoader.ImportMeshAsync("model1", "/relative path/", "myFile"); //Name of the model loads one model
    BABYLON.SceneLoader.ImportMeshAsync(["model1", "model2"], "/relative path/", "myFile"); //Array of model names
*/

/***/ }),

/***/ "./js/project/components/GameRulesCheats.js":
/*!**************************************************!*\
  !*** ./js/project/components/GameRulesCheats.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameRulesCheats)
/* harmony export */ });
class GameRulesCheats {
    constructor(gameRules) {
        this.gameRules = gameRules;

        const onKeyReceivedBound = this.OnKeyEventReceived.bind(this);
        this.gameRules.scene.onKeyboardObservable.add(onKeyReceivedBound);
    }

    OnKeyEventReceived(keyEvent) {
        switch (keyEvent.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
              this.HandleKeyDown(keyEvent.event.key);
              break;
          }
    }

    HandleKeyDown(keyCode) {
        const key = keyCode.toLowerCase();

        //console.log("[GameRulesCheats] KeyDown: " + key);

        if(key === "k") {
            this.KillRandomZombie();

        } else if(key === "+") {
            this.SpeedUpAllZombies(1);
        } else if(key === "-") {
            this.SpeedUpAllZombies(-1);
        }
       
    }

    KillRandomZombie() {
        const isAnyZombieExists = this.gameRules.currentZombiesCount > 0;
        if(!isAnyZombieExists) {
            return;
        }

        const randomZombie = this.gameRules.CurrentZombiesArray[Math.floor(Math.random()* this.gameRules.CurrentZombiesArray.length)];
        if(!randomZombie) {
            return;
        }
        randomZombie.zombieProps.DealDamage(50);

        //console.log("[GameRulesCheats] KILL RANDOM ZOMBIE!!!");

    }

    SpeedUpAllZombies(addition) {
        for(const zombie of this.gameRules.CurrentZombiesArray){
            if(!zombie) {
                continue;
            }

            let newSpeedModifier = zombie.moveSpeedModifier + addition
            if(newSpeedModifier < 0) {
                newSpeedModifier = 0;
            }

            zombie.moveSpeedModifier = newSpeedModifier;
        }
    }
}

/***/ }),

/***/ "./js/project/components/LocalPlayerBehaviour.js":
/*!*******************************************************!*\
  !*** ./js/project/components/LocalPlayerBehaviour.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalPlayerBehaviour: () => (/* binding */ LocalPlayerBehaviour)
/* harmony export */ });
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");
/* harmony import */ var _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/modelLoader.js */ "./js/project/common/modelLoader.js");
/* harmony import */ var _properties_playerProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properties/playerProps.js */ "./js/project/properties/playerProps.js");
/* harmony import */ var _playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerStates/actionNames.js */ "./js/project/components/playerStates/actionNames.js");
/* harmony import */ var _playerStates_playerFsm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerStates/playerFsm.js */ "./js/project/components/playerStates/playerFsm.js");






class LocalPlayerBehaviour extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__.GameBehaviour {
    constructor(scene, camera, playerAnimationsGroupArray, world, soundPlayer) {
        super();
        this.scene = scene;
        this.camera = camera;
        this.isInitialized = false;
        this.currentMoveInput = new BABYLON.Vector3(0, 0, 0);        
        this.currentRotationInput = new BABYLON.Vector3(0, 0, 0);    
        this.rotationSpeedModifier = 1.0;    
        this.playerAnimationsGroupArray = playerAnimationsGroupArray;
        this.World = world;
        this.SoundPlayer = soundPlayer;
    }

    async InitAsync() {

        this.playerBodyTransform = this.entity.abstractMesh;

        this.childMeshses = this.playerBodyTransform.getChildMeshes();
        for(const childMesh of this.childMeshses) {
            childMesh.isVisible = false;
        }

        this.playerBodyTransform.position = this.playerBodyTransform.position.add(new BABYLON.Vector3(0, 0, 0));
        const physicsBody = new BABYLON.PhysicsBody(this.playerBodyTransform, BABYLON.PhysicsMotionType.DYNAMIC, false, this.scene);

        // new PhysicsShapeCapsule(pointA: Vector3, pointB: Vector3, radius: number, scene: Scene)
        const physicsShape = new BABYLON.PhysicsShapeCapsule(
            new BABYLON.Vector3(0,-32,0),
            new BABYLON.Vector3(0,-5,0),
            5, // radius of the sphere
            this.scene // containing scene
          );

        physicsBody.shape = physicsShape;


        this.physicsBody = this.playerBodyTransform.getPhysicsBody();
        if(!this.physicsBody) {
            throw new Error("[LocalPlayerBehaviour] Physics body is missing!")
        }
        //console.log("[LocalPlayerBehaviour] character mesh name: " + this.playerBodyTransform.name);

        this.setupPlayerCamera();
        
        // disable angular falling from callisions!
        this.physicsBody.setMassProperties({
            inertia: new BABYLON.Vector3(0, 0, 0)
        });


        this.physicsBody.setGravityFactor(100);

        this.playerFSM  = new _playerStates_playerFsm_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);

        this.playerProps = new _properties_playerProps_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.playerProps.SetHp(100);
        this.playerProps.SetMaxHp(100);
        this.playerProps.SetIsDead(false);

        this.SubscribePropsEvents();

        this.SetupWeaponBone();

        await this.CreateWeaponAsync();

        this.isInitialized = true;

    }

    SetupWeaponBone() {

        const characterMesh = this.scene.getMeshById("Ch24");
        const skeleton = this.scene.getSkeletonById("skeleton0");
        const rightHandBone = skeleton.bones[34];

        this.skeleton = skeleton;
        this.rightHandBone = rightHandBone;
        this.characterMesh = characterMesh;
    }

    async CreateWeaponAsync() {
        const weaponModelData = await new _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_1__.ModelLoader(this.scene, null, "./Assets/weapons/", "m4a1.glb").LoadAsync();
        const weaponMeshes = weaponModelData.meshes;
        const weaponRootMesh = weaponMeshes[0];
        weaponRootMesh.name = "Player weapon";

        const scaleFactor = 225;
        weaponRootMesh.scaling = new BABYLON.Vector3(scaleFactor, scaleFactor, scaleFactor);
        weaponRootMesh.position = this.rightHandBone.position.clone();
        weaponRootMesh.attachToBone(this.rightHandBone, this.characterMesh);
        
        weaponRootMesh.rotation = new BABYLON.Vector3(
            new BABYLON.Angle.FromDegrees(-80).radians(),
            new BABYLON.Angle.FromDegrees(55.7).radians(),
            new BABYLON.Angle.FromDegrees(180).radians()
        );
        // centralize
        //weaponRootMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));

        weaponRootMesh.position = new BABYLON.Vector3(5, -10, 15);

        this.weaponRootMesh = weaponRootMesh;

        this.childWeaponMeshes = this.weaponRootMesh.getChildMeshes();

        for(const childMesh of this.childWeaponMeshes) {
            childMesh.isVisible = false;
        }
    }

    SubscribePropsEvents() {
        this.playerProps.HpObservable.add((currentHp) => {
            if(this.playerProps.GetIsDead()) {
                return;
            }
            //console.log("[PLAYER] Hp changed!: " + currentHp);
            if(currentHp <= 0) {
                this.playerProps.SetIsDead(true);
                this.playerProps.SetHp(0);
            }
        });

        this.playerProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                //console.log("[PLAYER] Death!");
                this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEATH);
            }
        });
    }

    OnStart() {
        super.OnStart();
        //"[LocalPlayerBehaviour] OnStart! ");
        this.onKeyReceivedBound = this.onKeyEventReceived.bind(this);
        this.scene.onKeyboardObservable.add(this.onKeyReceivedBound);

        this.playerBodyTransform.name = "PLAYER_BODY_ROOT";

        this.DelayedStartAsync();
    }

    async DelayedStartAsync() {
        await new Promise((res, rej) => {
            setTimeout(res, 1000);
        });

        this.childMeshses = this.playerBodyTransform.getChildMeshes();
        for(const childMesh of this.childMeshses) {
            childMesh.isVisible = true;
        }

        for(const childMesh of this.childWeaponMeshes) {
            childMesh.isVisible = true;
        }
    }

    
    OnUpdate(deltaTime) {

        if(!this.isInitialized)
        {
            return;
        }

        if(this.playerProps.GetIsDead()) {
            return;
        }

        super.OnUpdate(deltaTime);

        this.physicsBody.setAngularVelocity(new BABYLON.Vector3(0, 0, 0));

        this.handleInputLoop(deltaTime);

        this.updateCameraLoop();

        this.playerFSM?.OnUpdate(deltaTime);

    }

    OnDisable() {
        super.OnDisable();
        //console.log("[LocalPlayerBehaviour] OnDisable! ");
    }

    OnDestroy() {
        super.OnDestroy();
        //console.log("[LocalPlayerBehaviour] OnDestroy! ");

        this.scene.onKeyboardObservable.remove(this.onKeyReceivedBound);
    }

    onKeyEventReceived(keyEvent) {
        switch (keyEvent.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
              //console.log("KEY DOWN: ", keyEvent.event.key);
              //console.log(`[LocalPlayerBehaviour] KeyDown ! Key: '${keyEvent.event.key}', Code: '${keyEvent.event.code}' `);

              this.handleKeyDown(keyEvent.event.code);
              break;
            case BABYLON.KeyboardEventTypes.KEYUP:        
              //console.log("KEY UP: ", keyEvent.event.key);
              this.handleKeyUp(keyEvent.event.code);
              break;
          }
    }

    handleKeyDown(keyCode) {
        const key = keyCode;

        if(key === "KeyW") {
            this.currentMoveInput.z = 1;
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].WALK);
        } else if(key === "KeyS") {
            this.currentMoveInput.z = -1;
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].WALK);
        } else if(key === "KeyA") {
            this.currentRotationInput.y = -1;
        } else if(key === "KeyD") {
            this.currentRotationInput.y = 1;
        } else if(key === "Space") { // " " = space 
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].SHOOT);
        }

        // *** CHEATS ***
        if(key === "KeyZ") {
            this.playerProps.DealDamage(10);
        }
        // *** END-CHEATS ***
        
    }

    handleKeyUp(keyCode) {
        const key = keyCode;

        if(key === "KeyW") {
            this.currentMoveInput.z = 0;
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].IDLE);
        } else if(key === "KeyS") {
            this.currentMoveInput.z = 0;
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].IDLE);
        } else if(key === "KeyA") {
            this.currentRotationInput.y = 0;
        } else if(key === "KeyD") {
            this.currentRotationInput.y = 0;
        } else if(key === "Space") { // " " = space
            this.playerFSM.ProcessAction(_playerStates_actionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].STOP_SHOOTING);
        } 
    }

    handleInputLoop(deltaTime) {
        const moveSpeed = 150000 * deltaTime;
        const dir = this.playerBodyTransform.getDirection(BABYLON.Axis.Z);
        this.physicsBody.setLinearVelocity(dir.scale(moveSpeed * this.currentMoveInput.z));

        const rotationSpeed = 500 * this.rotationSpeedModifier * deltaTime;
        const rotation = this.currentRotationInput.scale(rotationSpeed);
        this.physicsBody.setAngularVelocity(rotation);
    }

    setupPlayerCamera() {

        //var CoT = new BABYLON.TransformNode("root");
        //box.parent = CoT; //apply to Box

        this.playerHeadTransform = new BABYLON.TransformNode("PlayerHead");
        this.playerHeadOffset = new BABYLON.Vector3(0, 2000, 200);
        this.playerHeadTransform.position = this.playerBodyTransform.position.add(this.playerHeadOffset);
        

        this.playerHeadTransform.parent = this.playerBodyTransform;

        // The goal distance of camera from target
        this.camera.radius = 78;

        // The goal height of camera above local origin (centre) of target
        this.camera.heightOffset = 5;

        // The goal rotation of camera around local origin (centre) of target in x y plane
        this.camera.rotationOffset = -180;

        // Acceleration of camera in moving from current to goal position
        this.camera.cameraAcceleration = 0.005;

        // The speed at which acceleration is halted
        this.camera.maxCameraSpeed = 100;

        this.camera.lockedTarget = this.playerHeadTransform; //version 2.5 onwards

        this.camera.detachControl();
    }

    updateCameraLoop() {
        this.camera.lockedTarget = this.playerHeadTransform;
    }

    GetAbsolutePosition() {
        return this.playerBodyTransform.absolutePosition;
    }
}

/***/ }),

/***/ "./js/project/components/enemies/enemySpawner.js":
/*!*******************************************************!*\
  !*** ./js/project/components/enemies/enemySpawner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnemySpawner)
/* harmony export */ });
/* harmony import */ var _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/modelLoader.js */ "./js/project/common/modelLoader.js");
/* harmony import */ var _game_gameEntity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/gameEntity.js */ "./js/project/game/gameEntity.js");
/* harmony import */ var _enemyZombieBehaviour_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemyZombieBehaviour.js */ "./js/project/components/enemies/enemyZombieBehaviour.js");




class EnemySpawner {
    
    constructor(scene, world, soundPlayer) {
        this.scene = scene;
        this.world = world;
        this._soundPlayer = soundPlayer;
    }

    async CreateZombieEntityAsync(position, additionHp) {

        if(!this.playerTarget) {
            this.playerTarget = this.world.GetEntity("LOCAL_PLAYER").GetComponent("LocalPlayerBehaviour");
        }

        const modelData = await new _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__.ModelLoader(this.scene, null, "./Assets/zombie-boy/", "zombie-boy.glb").LoadAsync();

        const enemyRootMesh = modelData.meshes[0];
        enemyRootMesh.name = "ZOMBIE";
        enemyRootMesh.scaling = new BABYLON.Vector3(15, 15, 15);
        enemyRootMesh.position = position;

        const animationGroupsArr = modelData.animationGroups;
        const zombieBehaviour = new _enemyZombieBehaviour_js__WEBPACK_IMPORTED_MODULE_2__["default"](enemyRootMesh, animationGroupsArr, this.scene, this._soundPlayer);
        zombieBehaviour.currentTarget = this.playerTarget;
        const zombieEntity = new _game_gameEntity_js__WEBPACK_IMPORTED_MODULE_1__.GameEntity(enemyRootMesh.name, enemyRootMesh)
        .AddComponent(zombieBehaviour, false);

        await zombieEntity.InitAsync();

        const newHp = zombieBehaviour.zombieProps.GetHp() + additionHp;
        zombieBehaviour.zombieProps.SetHp(newHp);

        return {
            entity: zombieEntity,
            behaviour: zombieBehaviour
        };
    }
}

/***/ }),

/***/ "./js/project/components/enemies/enemyZombieBehaviour.js":
/*!***************************************************************!*\
  !*** ./js/project/components/enemies/enemyZombieBehaviour.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnemyZombieBehaviour)
/* harmony export */ });
/* harmony import */ var _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GameTimer.js */ "./js/project/common/GameTimer.js");
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");
/* harmony import */ var _properties_zombieProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/zombieProps.js */ "./js/project/properties/zombieProps.js");
/* harmony import */ var _states_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/zombieActionNames.js */ "./js/project/components/enemies/states/zombieActionNames.js");
/* harmony import */ var _states_zombieFSM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/zombieFSM.js */ "./js/project/components/enemies/states/zombieFSM.js");






class EnemyZombieBehaviour extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__.GameBehaviour {
    constructor(rootMesh, animationGroups, scene, soundPlayer) {
        super();
        this.transformRoot = rootMesh;
        this.animationGroups = animationGroups;
        this.scene = scene;
        this.isInitialized = false;
        this.moveSpeedModifier = 1;

        this.currentTarget = null;
        this.SoundPlayer = soundPlayer;
    }

    async InitAsync() {
        this.idleAnimGroup = this.animationGroups.find(ag => ag.name === "Idle");
        this.deathAnimGroup = this.animationGroups.find(ag => ag.name === "Death");
        this.walkAnimGroup = this.animationGroups.find(ag => ag.name === "Walk");
        this.attackAnimGroup = this.animationGroups.find(ag => ag.name === "Attack");

        this.InitPhysics();

        this.physicsBody = this.transformRoot.getPhysicsBody();
        if(!this.physicsBody) {
            throw new Error("[EnemyZombieBehaviour] Physics body is missing!")
        }

    
        this.physicsBody.setMassProperties({
            inertia: new BABYLON.Vector3(0, 0, 0)
        });

        this.physicsBody.setGravityFactor(100);

        this.zombieFSM  = new _states_zombieFSM_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);

        this.zombieProps = new _properties_zombieProps_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.zombieProps.SetHp(50);
        this.zombieProps.SetMaxHp(50);
        this.zombieProps.SetIsDead(false);

        this.SubscribePropsEvents();
        this.physicsBody.setCollisionCallbackEnabled(true);
        this.bindedCollisionHandler = this.HandleCollisions.bind(this);
        this.collisionObservable = this.physicsBody.getCollisionObservable();
        this.collisionObservable.add(this.bindedCollisionHandler);

        this._lastObstacleDetectedTime = 0;
        this._lastAnotherZombieDetectedTime = 0;
        this._lastDamageTime = 0;
        
        this.isInitialized = true;
    }

    HandleCollisions(colEvent) {
        
        if(!this.zombieWalkStateName) {
            this.zombieWalkStateName = "ZombieWalkState";
        }

        // Process only state is WALK
        if(this.zombieFSM.currentState.constructor.name !== this.zombieWalkStateName) {
            return;
        }

        const colliderName = colEvent.collidedAgainst.transformNode.name;
        const collisionType = this.GetCollisionType(colliderName);

        switch(collisionType) {
            case(this.COL_TYPES.WALL): {
                this.HandleStuckInObstacles();
                break;
            } case (this.COL_TYPES.ANOTHER_ZOMBIE): {
                this.HandleStuckInAnotherZombie(colEvent.collidedAgainst.transformNode);
                break;
            }
        }

        const currentTime = _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].GetElapsedTimeSeconds();
        const timeToDetectObstacles = 1;

        const diff = currentTime - this._lastObstacleDetectedTime;
        this._isInObstacles  = diff < timeToDetectObstacles;

        const zombieDiff = currentTime - this._lastAnotherZombieDetectedTime;
        this._isInAnotherZombie = zombieDiff < timeToDetectObstacles;
    }

    HandleStuckInObstacles() {
        
        this._lastObstacleDetectedTime = _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].GetElapsedTimeSeconds();
    }

    HandleStuckInAnotherZombie(anotherZombieTransform) {
        
        this._lastAnotherZombieDetectedTime = _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].GetElapsedTimeSeconds();

        if(anotherZombieTransform) {

            const myPos = this.transformRoot.absolutePosition;
            const anotherZombiePos = anotherZombieTransform.absolutePosition;
    

            const dirToTarget = anotherZombiePos.subtract(myPos).normalize();
           
            this._toAnotherZombieDir = dirToTarget;

        } else {
            this._toAnotherZombieDir = null;
        }
    }

    GetCollisionType(colName) {
        if(!this.collisionsTypesMap) {
            this.collisionsTypesMap = new Map();
            this.COL_TYPES = {
                FLOOR: "FLOOR",
                WALL: "WALL",
                ANOTHER_ZOMBIE: "ZOMBIE", 
                UNDEFINED_COL: "UNDEFINED_COL"
            };

            this.collisionsTypesMap.set("Object_2", this.COL_TYPES.FLOOR);
            this.collisionsTypesMap.set("Object_3", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("Object_4", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("Object_5", this.COL_TYPES.WALL);
            this.collisionsTypesMap.set("ZOMBIE", this.COL_TYPES.ANOTHER_ZOMBIE);
        }

        if(this.collisionsTypesMap.has(colName)) {
            return this.collisionsTypesMap.get(colName);
        }
        
        return this.COL_TYPES.UNDEFINED_COL;
    }

    SubscribePropsEvents() {
        this.zombieProps.HpObservable.add((currentHp) => {
            if(this.zombieProps.GetIsDead()) {
                return;
            }
            //console.log("[ZOMBIE] Hp changed!: " + currentHp);
            if(currentHp <= 0) {
                this.zombieProps.SetIsDead(true);
                this.zombieProps.SetHp(0);
            }
        });

        this.zombieProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                //console.log("[ZOMBIE] Death!");
                this.zombieFSM.ProcessAction(_states_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEATH);
            }
        });
    }

    InitPhysics() {
    
        const physicsBody = new BABYLON.PhysicsBody(this.transformRoot, BABYLON.PhysicsMotionType.DYNAMIC, false, this.scene);

        // new PhysicsShapeCapsule(pointA: Vector3, pointB: Vector3, radius: number, scene: Scene)
        const physicsShape = new BABYLON.PhysicsShapeCapsule(
            new BABYLON.Vector3(0,25,0),
            new BABYLON.Vector3(0,5,0),
            5, // radius of the sphere
            this.scene // containing scene
          );

        physicsBody.shape = physicsShape;
    }

    OnStart() {

    }

    OnDestroy() {
        this.collisionObservable.remove(this.bindedCollisionHandler);
        this.transformRoot.dispose(false, true);
    }


    OnUpdate(deltaTime) {

        if(!this.isInitialized) {
            return;
        }

        if(this.zombieProps.GetIsDead()) {
            return;
        }

        this.FollowTargetLoop(deltaTime);

        this.zombieFSM.OnUpdate(deltaTime);
    }

    FollowTargetLoop(deltaTime) {

        if(!this.currentTarget || this.currentTarget.playerProps.GetIsDead()) {
            this.physicsBody.setLinearVelocity(BABYLON.Vector3.Zero());
            this.physicsBody.setAngularVelocity(BABYLON.Vector3.Zero());
            this.zombieFSM.ProcessAction(_states_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].IDLE);
            return;
        }

        const currentTime = _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].GetElapsedTimeSeconds();
        const lastDamageTimeDiff = currentTime - this._lastDamageTime;
        const isUnderAttack = lastDamageTimeDiff <= 1;

        const zombiePos = this.transformRoot.absolutePosition;
        const targetPos = this.currentTarget.GetAbsolutePosition();

        const distanceToStop = 30;
        const currentDistance = BABYLON.Vector3.Distance(zombiePos, targetPos);

        if(currentDistance <= distanceToStop) {
            this.zombieFSM.ProcessAction(_states_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].ATTACK);
            return;
        }

        const moveSpeed = 10 * this.moveSpeedModifier * deltaTime;

        const dirToPlayerTarget = targetPos.subtract(zombiePos).normalize();
       
        const targetDir = dirToPlayerTarget.clone();
    
        if(this._isInObstacles) {
            const randomStrength = this.GetRandomStrength(50, 100);

            targetDir.x =  ((dirToPlayerTarget.x > 0) ? 1 : -1);
            targetDir.z = dirToPlayerTarget.z * -1;
            
            this.physicsBody.applyForce(targetDir.scale(randomStrength),  this.transformRoot.position.add(targetDir.scale(moveSpeed)));
        }

        if(this._isInAnotherZombie && this._toAnotherZombieDir) {
            const randomStrength = this.GetRandomStrength(50, 100);
            targetDir.x =  ((this._toAnotherZombieDir.x < 0) ? 1 : -1); // inversed from another zombie
            targetDir.z = dirToPlayerTarget.z;
            
            this.physicsBody.applyForce(targetDir.scale(randomStrength),  this.transformRoot.position.add(targetDir.scale(moveSpeed)));
        }

        if(isUnderAttack) {
            const randomStrength = this.GetRandomStrength(10, 50);
            targetDir.z *= -1;
            targetDir.x *= -1;
        }

        const nextPosition = this.transformRoot.position.add(targetDir.scale(moveSpeed));
        
        const lookAt = BABYLON.Matrix.LookAtLH(
            zombiePos,
            targetPos,
            BABYLON.Vector3.Up()
        ).invert();

        const nextRotation =  BABYLON.Quaternion.FromRotationMatrix( lookAt );
        this.physicsBody.setTargetTransform(nextPosition, nextRotation);

        this.zombieFSM.ProcessAction(_states_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_3__["default"].WALK);
    }

    GetRandomStrength(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    OnShotRecieved() {
        this._lastDamageTime = _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].GetElapsedTimeSeconds();
        this.SoundPlayer.PlaySound("ZOMBIE_ATTACKED");
    }
}

/***/ }),

/***/ "./js/project/components/enemies/states/concrete/ZombieAttackState.js":
/*!****************************************************************************!*\
  !*** ./js/project/components/enemies/states/concrete/ZombieAttackState.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieAttackState)
/* harmony export */ });
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zombieActionNames.js */ "./js/project/components/enemies/states/zombieActionNames.js");
/* harmony import */ var _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZombieDeathState.js */ "./js/project/components/enemies/states/concrete/ZombieDeathState.js");
/* harmony import */ var _ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZombieIdleState.js */ "./js/project/components/enemies/states/concrete/ZombieIdleState.js");
/* harmony import */ var _ZombieMoveState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZombieMoveState.js */ "./js/project/components/enemies/states/concrete/ZombieMoveState.js");






class ZombieAttackState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__.UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].IDLE): {
                return new _ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].DEATH): {

                return new _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].WALK): {
                return new _ZombieMoveState_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
            }
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.zombieBehaviour = zombieBehaviour;
        this.zombieDamage = 10;
        this._timeToDealDamageSeconds = 2.7;
        this._dealDamageTimer = this._timeToDealDamageSeconds * 0.5;
        this.attackAnimGroup = zombieBehaviour.attackAnimGroup;
        this.attackAnimGroup.start(true, 1.0,this.attackAnimGroup.from, this.attackAnimGroup.to, false);
    }

    OnExit() {
        this.attackAnimGroup.stop();
    }

    OnUpdate(deltaTime) {
        if(this._dealDamageTimer >= this._timeToDealDamageSeconds) {
            this.Attack();
            this._dealDamageTimer = 0;
            this.zombieBehaviour.SoundPlayer.PlaySound("ZOMBIE_PUNCH");
                
        }

        this._dealDamageTimer += deltaTime;
    }

    Attack() {

        const currentPlayerTarget = this.zombieBehaviour?.currentTarget;

        if(!currentPlayerTarget) {
            return;
        }

        const minDamage = 2;
        const maxDamage = 8;
        const randomDamage = Math.random() * (maxDamage - minDamage + 1) + minDamage;
        currentPlayerTarget.playerProps.DealDamage(randomDamage);
        //console.log("[Z_A] Attackuation! Damage: " + randomDamage)
    }
}

/***/ }),

/***/ "./js/project/components/enemies/states/concrete/ZombieDeathState.js":
/*!***************************************************************************!*\
  !*** ./js/project/components/enemies/states/concrete/ZombieDeathState.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieDeathState)
/* harmony export */ });
class ZombieDeathState {
    HandleAction(actionName) {
        return null;
    }

    OnEnter(zombieBehaviour) {
        this.zombieBehaviour = zombieBehaviour;
        this.deathAnimGroup = zombieBehaviour.deathAnimGroup;
        this.deathAnimGroup.start(true, 1.0,this.deathAnimGroup.from, this.deathAnimGroup.to, false);
        this.deathAnimGroup.loopAnimation = false;
        zombieBehaviour.physicsBody.dispose();

        this.zombieBehaviour.SoundPlayer.PlaySound("ZOMBIE_DEATH");

        const decayTimeMs = 5 * 1000;

        setTimeout(() => {
            this.OnExit();
            this.zombieBehaviour.OnDestroy()
        }, decayTimeMs);
    }

    OnExit() {
        this.deathAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}

/***/ }),

/***/ "./js/project/components/enemies/states/concrete/ZombieIdleState.js":
/*!**************************************************************************!*\
  !*** ./js/project/components/enemies/states/concrete/ZombieIdleState.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieIdleState)
/* harmony export */ });
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zombieActionNames.js */ "./js/project/components/enemies/states/zombieActionNames.js");
/* harmony import */ var _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZombieDeathState.js */ "./js/project/components/enemies/states/concrete/ZombieDeathState.js");
/* harmony import */ var _ZombieMoveState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZombieMoveState.js */ "./js/project/components/enemies/states/concrete/ZombieMoveState.js");





class ZombieIdleState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__.UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].WALK): {
                return new _ZombieMoveState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].DEATH): {
                return new _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].ATTACK): {
                return null;
            } 
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.idleAnimGroup = zombieBehaviour.idleAnimGroup;
        this.idleAnimGroup.start(true, 1.0,this.idleAnimGroup.from, this.idleAnimGroup.to, false);
    }

    OnExit() {
        this.idleAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}

/***/ }),

/***/ "./js/project/components/enemies/states/concrete/ZombieMoveState.js":
/*!**************************************************************************!*\
  !*** ./js/project/components/enemies/states/concrete/ZombieMoveState.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieWalkState)
/* harmony export */ });
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zombieActionNames.js */ "./js/project/components/enemies/states/zombieActionNames.js");
/* harmony import */ var _ZombieAttackState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZombieAttackState.js */ "./js/project/components/enemies/states/concrete/ZombieAttackState.js");
/* harmony import */ var _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZombieDeathState.js */ "./js/project/components/enemies/states/concrete/ZombieDeathState.js");
/* harmony import */ var _ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZombieIdleState.js */ "./js/project/components/enemies/states/concrete/ZombieIdleState.js");






class ZombieWalkState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__.UnitStateBase {

    HandleAction(actionName) {

        switch(actionName) {
            case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].IDLE): {
                return new _ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].DEATH): {
                return new _ZombieDeathState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            } case(_zombieActionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].ATTACK): {
                return new _ZombieAttackState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }
        }

        return null;
    }

    OnEnter(zombieBehaviour) {
        this.walkAnimGroup = zombieBehaviour.walkAnimGroup;
        this.walkAnimGroup.start(true, 1.0,this.walkAnimGroup.from, this.walkAnimGroup.to, false);
    }

    OnExit() {
        this.walkAnimGroup.stop();
    }

    OnUpdate(deltaTime) {}
}

/***/ }),

/***/ "./js/project/components/enemies/states/zombieActionNames.js":
/*!*******************************************************************!*\
  !*** ./js/project/components/enemies/states/zombieActionNames.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    IDLE : "Idle",
    WALK: "Walk",
    DEATH: "Death",
    ATTACK: "Attack",
    STOP_ATTACK: "StopAttack"
});

/***/ }),

/***/ "./js/project/components/enemies/states/zombieFSM.js":
/*!***********************************************************!*\
  !*** ./js/project/components/enemies/states/zombieFSM.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieFSM)
/* harmony export */ });
/* harmony import */ var _units_unitFsmBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../units/unitFsmBase.js */ "./js/project/components/units/unitFsmBase.js");
/* harmony import */ var _concrete_ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concrete/ZombieIdleState.js */ "./js/project/components/enemies/states/concrete/ZombieIdleState.js");



class ZombieFSM extends _units_unitFsmBase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(zombieBehaviour) {
        super(zombieBehaviour);
        zombieBehaviour.attackAnimGroup.stop();
    }

    CreateDefaultState() {
        return new _concrete_ZombieIdleState_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
}

/***/ }),

/***/ "./js/project/components/gameRulesBehaviour.js":
/*!*****************************************************!*\
  !*** ./js/project/components/gameRulesBehaviour.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameRulesBehaviour)
/* harmony export */ });
/* harmony import */ var _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/GameTimer.js */ "./js/project/common/GameTimer.js");
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");
/* harmony import */ var _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/modelLoader.js */ "./js/project/common/modelLoader.js");
/* harmony import */ var _GameRulesCheats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameRulesCheats.js */ "./js/project/components/GameRulesCheats.js");
/* harmony import */ var _enemies_enemySpawner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemies/enemySpawner.js */ "./js/project/components/enemies/enemySpawner.js");






class GameRulesBehaviour extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__.GameBehaviour {

    static IsProduction = true;

    constructor(scene, world, soundPlayer) {
        super();
        this.scene = scene;
        this.world = world;
        this.enemySpawner = new _enemies_enemySpawner_js__WEBPACK_IMPORTED_MODULE_4__["default"](scene, this.world, soundPlayer);
        this.spawnDelayInSeconds = 2;
        this.spawnTimer = this.spawnDelayInSeconds;
        this.currentZombiesCount = 0;
        this.maxZombiesCount = 10;
        this.isGameDone = false;

        this.CurrentZombiesArray = [];
        this._zombieAdditionHp = 0;
        this._soundPlayer = soundPlayer;
        if(!GameRulesBehaviour.IsProduction) {
            new _GameRulesCheats_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        }
    }

    async InitAsync() {
        const spawnPointsData = await new _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_2__.ModelLoader(this.scene, null, "./Assets/ai-data/", "ai-data-spawn-points.glb").LoadAsync();
        this.spawnPointsArray = spawnPointsData.meshes[0].getChildTransformNodes();
        //console.log("Spawn points length: " + this.spawnPointsArray.length);

        _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_0__["default"].OnTickOneSecondObservable.add((elapsedSeconds) => {

            if(this.isGameDone) {
                return;
            }

            if(elapsedSeconds % 60 === 0) {
                this._zombieAdditionHp += 5;

                //console.log("[GameRulesBehaviour] set _zombieAdditionHp: " + this._zombieAdditionHp);
            }
            if(elapsedSeconds % 120 === 0) {
                this.maxZombiesCount++;

                //console.log("[GameRulesBehaviour] set maxZombiesCount: " + this.maxZombiesCount);
            }
        });

        this.world
            .GetEntity("LOCAL_PLAYER")
            .GetComponent("LocalPlayerBehaviour")
            .playerProps.IsDeadObservable.add((isDead) => {
                if(isDead) {

                    setTimeout(() => {
                        location.reload();
                    }, 5000);

                    this.isGameDone = true;
                }
            });

    }

    OnStart() {
        this.InitialSpawn();

        //test
        this.ShowZombieCountDebugAsync();
    }

    async ShowZombieCountDebugAsync() {
        while(true) {
            await new Promise((res, rej) => {
                setTimeout(res, 1000);
            })

            //console.log("this.currentZombiesCount: " + this.currentZombiesCount);
        }
    }

    InitialSpawn() {
        //console.log("[GameRulesBehaviour] OnStart!!");
    }

    OnUpdate(deltaTime) {

        if(this.isGameDone) {
            return;
        }

        this.HandleSpawnLoop(deltaTime);
    }

    HandleSpawnLoop(deltaTime) {

        if(this.currentZombiesCount >= this.maxZombiesCount) {
            this.spawnTimer = 0;
            return;
        }

        if(this.spawnTimer >= this.spawnDelayInSeconds) {

            this.SpawnZombieAsync();
            this.spawnTimer = 0;

        }
        this.spawnTimer += deltaTime;
    }

    async SpawnZombieAsync() {
        const spawnPoint = this.GetRandomSpawnPoint();
        const zombieData = await this.enemySpawner.CreateZombieEntityAsync(
            //new BABYLON.Vector3(0, 0, 35)
            spawnPoint,
            this._zombieAdditionHp
            );

        this.world.AddEntity(zombieData.entity, true);

        this.CurrentZombiesArray.push(zombieData.behaviour);

        // decrease counter and remove from array on dead
        zombieData.behaviour.zombieProps.IsDeadObservable.add((isDead) => {
            if(isDead) {

                const zombieIndex = this.CurrentZombiesArray.indexOf(zombieData.behaviour);
                if (zombieIndex > -1) {
                    this.CurrentZombiesArray.splice(zombieIndex, 1);
                }

                this.currentZombiesCount--;
            }
        });

        this.currentZombiesCount++;
    }
    

    GetRandomSpawnPoint() {

        const arr = this.spawnPointsArray;

        return arr[Math.floor(Math.random()*this.spawnPointsArray.length)].position.clone();
    }
}

/***/ }),

/***/ "./js/project/components/playerGUIBehaviour.js":
/*!*****************************************************!*\
  !*** ./js/project/components/playerGUIBehaviour.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerGUIBehaviour)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils.js */ "./js/Utils.js");
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");



class PlayerGUIBehaviour extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_1__.GameBehaviour {


    async InitAsync() {
        if(!this.entity) {
            throw new Error(`[PlayerGUIBehaviour] the 'entity' is missing!`);
        }
        this.playerBehaviour = this.entity.GetComponent("LocalPlayerBehaviour");

        await (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.WaitUntil)(() => this.playerBehaviour.isInitialized);

        this.playerProps = this.playerBehaviour.playerProps;
        if(!this.playerProps) {
            throw new Error(`[PlayerGUIBehaviour] the 'playerProps' is missing!`);
        }

        this.SetupGuiElements();
    }

    OnAwake() {}
    OnStart() {
    }
    OnDisable() {}
    OnDestroy() {}
    OnUpdate(deltaTime) {}

    SetupGuiElements() {

        const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        const grid = new BABYLON.GUI.Grid();
        advancedTexture.addControl(grid);

        grid.addColumnDefinition(0.33);
        grid.addColumnDefinition(0.33);
        grid.addColumnDefinition(0.33);
        grid.addRowDefinition(0.33);
        grid.addRowDefinition(0.33);
        grid.addRowDefinition(0.33);

        
        const hpBarSlider = this.CreateHpBarSlider();

        const getNormalizedHp = () => {
            return this.playerProps.GetHp() / this.playerProps.GetMaxHp();
        }

        hpBarSlider.value = getNormalizedHp();
        
        this.playerProps.HpObservable.add((currentHp) => {
            hpBarSlider.value = getNormalizedHp();
        });

        this.playerProps.IsDeadObservable.add((isDead) => {
            if(isDead) {
                hpBarSlider.dispose();
            }
        });

        // elem, row, col
        grid.addControl(hpBarSlider, 0, 1);
    }

    CreateHpBarSlider() {
        const hpBarSlider = new BABYLON.GUI.Slider();
        hpBarSlider.minimum = 0;
        hpBarSlider.maximum = 1;
        hpBarSlider.isThumbClamped = false;
        hpBarSlider.isVertical = false;
        hpBarSlider.displayThumb = false;
        hpBarSlider.height = "20px";
        hpBarSlider.width = "200px";

        hpBarSlider.color = "red";

        hpBarSlider.value = 0.5;
        hpBarSlider.isEnabled = false;

        return hpBarSlider;
    }
}

/***/ }),

/***/ "./js/project/components/playerStates/actionNames.js":
/*!***********************************************************!*\
  !*** ./js/project/components/playerStates/actionNames.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    IDLE : "Idle",
    WALK: "Walk",
    DEATH: "Death",
    SHOOT: "Shoot",
    STOP_SHOOTING: "StopShoot"
});

/***/ }),

/***/ "./js/project/components/playerStates/concrete/DeathState.js":
/*!*******************************************************************!*\
  !*** ./js/project/components/playerStates/concrete/DeathState.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeathState)
/* harmony export */ });
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");


class DeathState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__.UnitStateBase {
    HandleAction(actionName) {
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[DeathState] OnEnter(${playerBehaviour})`);
        this.deathAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Death");
        this.deathAnim.start(false, 1.0, this.deathAnim.from, this.deathAnim.to, false);
        this.deathAnim.loopAnimation = false;
        playerBehaviour.camera.attachControl();
        playerBehaviour.physicsBody.dispose();
        playerBehaviour.SoundPlayer.PlaySound("PLAYER_DEATH");
    };
    OnExit() {
        //console.log(`[DeathState] OnExit()`);
        this.deathAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}

/***/ }),

/***/ "./js/project/components/playerStates/concrete/IdleState.js":
/*!******************************************************************!*\
  !*** ./js/project/components/playerStates/concrete/IdleState.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IdleState)
/* harmony export */ });
/* harmony import */ var _actionNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionNames.js */ "./js/project/components/playerStates/actionNames.js");
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _DeathState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeathState.js */ "./js/project/components/playerStates/concrete/DeathState.js");
/* harmony import */ var _ShootState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShootState.js */ "./js/project/components/playerStates/concrete/ShootState.js");
/* harmony import */ var _WalkState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WalkState.js */ "./js/project/components/playerStates/concrete/WalkState.js");






class IdleState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_1__.UnitStateBase {
    HandleAction(actionName) {

        switch(actionName) {
            case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].WALK): {
                return new _WalkState_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEATH): {
                return new _DeathState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHOOT): {
                return new _ShootState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            }
        }

        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[IdleState] OnEnter(${playerBehaviour})`);

        this.idleAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Idle");
        this.idleAnim.start(true, 1.0, this.idleAnim.from, this.idleAnim.to, false);
    };
    OnExit() {
        //console.log(`[IdleState] OnExit()`);
        this.idleAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}

/***/ }),

/***/ "./js/project/components/playerStates/concrete/ShootState.js":
/*!*******************************************************************!*\
  !*** ./js/project/components/playerStates/concrete/ShootState.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShootState)
/* harmony export */ });
/* harmony import */ var _actionNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionNames.js */ "./js/project/components/playerStates/actionNames.js");
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _DeathState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeathState.js */ "./js/project/components/playerStates/concrete/DeathState.js");
/* harmony import */ var _IdleState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IdleState.js */ "./js/project/components/playerStates/concrete/IdleState.js");
/* harmony import */ var _WalkState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WalkState.js */ "./js/project/components/playerStates/concrete/WalkState.js");





class ShootState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_1__.UnitStateBase {
    static S_SHOOT_VFX = null;
    constructor() {
        super();
        this.shootDelaySeconds = 0.33;
        this.timer = this.shootDelaySeconds;
    }

    HandleAction(actionName) { 

        switch(actionName) {
            case (_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].IDLE): {
                return new _IdleState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEATH): {
                return new _DeathState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].WALK): {
                return new _WalkState_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_0__["default"].STOP_SHOOTING): {
                return new _IdleState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            }
        }
        return null;
    }
    OnEnter(playerBehaviour) {
        //console.log("[ShootState] OnEnter()");
        this.playerBehaviour = playerBehaviour;
        this.shootAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Gunplay");
        this.shootAnim.start(true, 1.0, this.shootAnim.from, this.shootAnim.to, false);
        this.scene = playerBehaviour.scene;    
        this.meshForRay = playerBehaviour.playerBodyTransform;
        this.CastRay();
        this.playerBehaviour.rotationSpeedModifier = 0.05;
        this.CreateParticle();  
        this._damage = 5;
    }

    OnExit() {
        //console.log("[ShootState] OnExit()");
        this.shootAnim.stop();
        this.rayHelper.dispose();
        this.playerBehaviour.rotationSpeedModifier = 1.0;
        //this.muzzleParticle.dispose();
    }
    OnUpdate(deltaTime) {

        this.timer += deltaTime;
        if(this.timer >= this.shootDelaySeconds) {
            this.OnShoot();
            this.timer = 0;
        }      
    }

    OnShoot() {
        //console.log("SHOOT!");
        this.EmitMuzzleParticle();


        const physicsEngine = this.scene.getPhysicsEngine();
        
        if(!physicsEngine) {
            return;
        }

        if(!this.rayHelper || !this.rayHelper.ray)
        {
            return;
        }

        const currentRay = this.rayHelper.ray;

        //console.log("Shoot! Current ray: " + currentRay.direction.toString());

        const shootStartPoint = currentRay.origin;
        const end = currentRay.origin.add(currentRay.direction.scale(currentRay.length));

        const hit = physicsEngine.raycast(shootStartPoint, end);
        //console.log("hit?: " + hit.hasHit);
        if (hit.hasHit && hit.body && hit.body.transformNode) {

            //console.log(`Shoot body name '${hit.body.transformNode.name}' , uId: '${hit.body.transformNode.uniqueId}'`);

            const uniqueId = hit.body.transformNode.uniqueId;
            
            const world = this.playerBehaviour.World;

            if(!world) {
                console.error("world is missing!!!");
            }

            try {
                const enemyEntity = world.GetEntityByUniqueId(uniqueId);
                if(enemyEntity) {
                    //console.log("ENEMY DETECTED!");
                    const zombieComp = enemyEntity.GetComponent("EnemyZombieBehaviour");
                    zombieComp.OnShotRecieved();
                    zombieComp.zombieProps.DealDamage(this._damage);
                
                }
            } catch(err) {
                ///DO nothing
            }
        }

       this.playerBehaviour.SoundPlayer.PlaySound("PLAYER_SHOT");
    }
    CastRay() {       
	    //const ray = new BABYLON.Ray(origin, dir, length);
        const ray = new BABYLON.Ray();
        //console.log("Origin POS: " + ray.origin.toString()); 
		this.rayHelper = new BABYLON.RayHelper(ray);	
        const localMeshDirection = new BABYLON.Vector3(0, 0, 1);
	    const localMeshOrigin = new BABYLON.Vector3(0, 1250, 0.0);
        const length = 100 * 1000;
        this.rayHelper.attachToMesh(this.meshForRay, localMeshDirection, localMeshOrigin, length);	
		this.rayHelper.show(this.scene, new BABYLON.Color3(1, 0, 0));	
    
    }

    CreateParticle() {
        if(ShootState.S_SHOOT_VFX != null) {
            return;
        }
        const muzzleParticle = new BABYLON.ParticleSystem("particles", 500, this.scene);
        //Texture of each particle
        muzzleParticle.particleTexture = new BABYLON.Texture("Assets/textures/flare_texture_0.png", this.scene);
        // Where the particles come from
        muzzleParticle.particleEmitterType = new BABYLON.SphereParticleEmitter(0.01);
        const muzzleNode = new BABYLON.TransformNode("muzzle", this.scene);
        muzzleNode.setParent(this.playerBehaviour.weaponRootMesh);
        muzzleNode.rotation = new BABYLON.Vector3(0, 0, 0);
        muzzleNode.position = new BABYLON.Vector3(-0.02, 0, 0.35);
        muzzleNode.scaling = new BABYLON.Vector3(1, 1, 1);
        muzzleParticle.emitter = muzzleNode;
        const emitScale = 0.5;
        muzzleParticle.minScaleX = 0;
        muzzleParticle.minScaleY = 0;
        muzzleParticle.maxScaleX = emitScale;
        muzzleParticle.maxScaleY = emitScale;
  
        // Colors of all particles
        muzzleParticle.color1 = new BABYLON.Color4(1, 0.3, 0);
        muzzleParticle.color2 = new BABYLON.Color4(0.6, 0.15, 0.15);
        muzzleParticle.colorDead = new BABYLON.Color4(1, 0.82, 0.43);
        // Size of each particle (random between...
        const scale = 0.5;
        muzzleParticle.minSize = 1.5 * scale;
        muzzleParticle.maxSize = 2.5 * scale;
        // Life time of each particle (random between...
        muzzleParticle.minLifeTime = .1;
        muzzleParticle.maxLifeTime = .1;
        // Emission rate
        muzzleParticle.manualEmitCount = 500;
        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        muzzleParticle.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        // Set the gravity of all particles
        muzzleParticle.gravity = new BABYLON.Vector3(0, -9, 0);
        // Direction of each particle after it has been emitted
        muzzleParticle.direction1 = new BABYLON.Vector3(-2, -2, -2);
        muzzleParticle.direction2 = new BABYLON.Vector3(2, 2, 2);
        // Angular speed, in radians
        muzzleParticle.minAngularSpeed = 0;
        muzzleParticle.maxAngularSpeed = Math.PI;
        // Speed
        muzzleParticle.minEmitPower = 0.25;
        muzzleParticle.maxEmitPower = 0.35;
        muzzleParticle.updateSpeed = 0.05;
        muzzleParticle.start();
        ShootState.S_SHOOT_VFX = muzzleParticle;
    }

    EmitMuzzleParticle() {
        if(!ShootState.S_SHOOT_VFX) {
            return;
        }
        ShootState.S_SHOOT_VFX.manualEmitCount = 500;
    }
}

/***/ }),

/***/ "./js/project/components/playerStates/concrete/WalkState.js":
/*!******************************************************************!*\
  !*** ./js/project/components/playerStates/concrete/WalkState.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalkState)
/* harmony export */ });
/* harmony import */ var _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../units/unitStateBase.js */ "./js/project/components/units/unitStateBase.js");
/* harmony import */ var _actionNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionNames.js */ "./js/project/components/playerStates/actionNames.js");
/* harmony import */ var _DeathState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeathState.js */ "./js/project/components/playerStates/concrete/DeathState.js");
/* harmony import */ var _IdleState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IdleState.js */ "./js/project/components/playerStates/concrete/IdleState.js");





class WalkState extends _units_unitStateBase_js__WEBPACK_IMPORTED_MODULE_0__.UnitStateBase {
    HandleAction(actionName) {
        switch(actionName) {
            case(_actionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].IDLE): {
                return new _IdleState_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            } case(_actionNames_js__WEBPACK_IMPORTED_MODULE_1__["default"].DEATH): {
                return new _DeathState_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }
        }
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[WalkState] OnEnter(${playerBehaviour})`);
        this.walkAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Walk");
        this.walkAnim.start(true, 1.0, this.walkAnim.from, this.walkAnim.to, false);
    };
    OnExit() {
        //console.log(`[WalkState] OnExit()`);
        this.walkAnim.stop();
    };
    OnUpdate(deltaTime) {
        
    }
}

/***/ }),

/***/ "./js/project/components/playerStates/playerFsm.js":
/*!*********************************************************!*\
  !*** ./js/project/components/playerStates/playerFsm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerFSM)
/* harmony export */ });
/* harmony import */ var _units_unitFsmBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/unitFsmBase.js */ "./js/project/components/units/unitFsmBase.js");
/* harmony import */ var _concrete_IdleState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concrete/IdleState.js */ "./js/project/components/playerStates/concrete/IdleState.js");



class PlayerFSM extends _units_unitFsmBase_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(playerBehaviour) {
        super(playerBehaviour);
        const deathAnim = playerBehaviour.playerAnimationsGroupArray.find(ag => ag.name === "Death");;
        deathAnim.stop();
    }

    CreateDefaultState() {
        return new _concrete_IdleState_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }

}

/***/ }),

/***/ "./js/project/components/units/unitFsmBase.js":
/*!****************************************************!*\
  !*** ./js/project/components/units/unitFsmBase.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnitFSMBase)
/* harmony export */ });
class UnitFSMBase {
    constructor(unitBehaviour) {
        this.unitBehaviour = unitBehaviour;
        this.currentState = this.CreateDefaultState();
        this.currentState.OnEnter(this.unitBehaviour);
    }

    CreateDefaultState() {
        throw new Error("[UnitFSMBase] CreateDefaultState() is not implemented!");
    }

    ProcessAction(actionName) {
        const state = this.currentState.HandleAction(actionName);
        if(state != null) {
            this.currentState.OnExit()
            this.currentState = state;
            this.currentState.OnEnter(this.unitBehaviour);
        }
    } 

    OnUpdate(deltaTime) {
        this.currentState.OnUpdate(deltaTime);
    }

}

/***/ }),

/***/ "./js/project/components/units/unitStateBase.js":
/*!******************************************************!*\
  !*** ./js/project/components/units/unitStateBase.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NullUnitState: () => (/* binding */ NullUnitState),
/* harmony export */   UnitStateBase: () => (/* binding */ UnitStateBase)
/* harmony export */ });
class UnitStateBase {
    HandleAction(actionName) { throw new Error("HandleAction() not implemented"); }
    OnEnter(playerBehaviour) {throw new Error("OnEnter() not implemented");};
    OnExit() {throw new Error("OnExit() not implemented");};
    OnUpdate(deltaTime) {throw new Error("OnUpdate() not implemented");};
}

class NullUnitState extends UnitStateBase {
    HandleAction(actionName) {
        //console.log(`[NullUnitState] HandleAction(${actionName})`);
        return null;
    }

    OnEnter(playerBehaviour) {
        //console.log(`[NullUnitState] OnEnter(${playerBehaviour})`);
    };
    OnExit() {
        //console.log(`[NullUnitState] OnExit()`);
    };
    OnUpdate(deltaTime) {
        //console.log(`[NullUnitState] OnUpdate(${deltaTime})`);
    }
}

/***/ }),

/***/ "./js/project/game/gameEntity.js":
/*!***************************************!*\
  !*** ./js/project/game/gameEntity.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameEntity: () => (/* binding */ GameEntity)
/* harmony export */ });
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");


class GameEntity extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__.CompositeGameBehaviour {
    
    constructor(idKey, abstractMesh) {
        super(null);
        this.idKey = idKey;
        this.UniqueID = abstractMesh.uniqueId;
        this.abstractMesh = abstractMesh;

        this.componentsMap = new Map();
    }
    AddComponent(gameBehaviour, isCallCallbacks = true) {
        const behaviourTypeName = gameBehaviour.constructor.name;
        if(this.componentsMap.has(behaviourTypeName)) {
            throw new Error(`[GameEntity] the entity with id '${this.idKey}' is already has component with type '${behaviourTypeName}'!`);
        }
        this.childBehaviours.push(gameBehaviour);
        gameBehaviour.SetEntity(this);
        if(isCallCallbacks) {
            gameBehaviour.OnAwake();
            gameBehaviour.OnStart();
        }

        this.componentsMap.set(behaviourTypeName, gameBehaviour);
        
        return this;
    }

    GetComponent(behaviourTypeName) {
        if(!this.componentsMap.has(behaviourTypeName)) {
            throw new Error(`[GameEntity] the entity with id '${this.idKey}' has not component of type: '${behaviourTypeName}'!`);
        }

        return this.componentsMap.get(behaviourTypeName);
    }
}

/***/ }),

/***/ "./js/project/game/sceneInitializer.js":
/*!*********************************************!*\
  !*** ./js/project/game/sceneInitializer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneInitializer: () => (/* binding */ SceneInitializer)
/* harmony export */ });
class SceneInitializer {
    constructor(scene, locationMeshes) {
        this.scene = scene;
        this.locationMeshes = locationMeshes;
    }

    async InitializeAsync() {

        await this.InitPhysicsAsync();

        this.scene.ambientColor = new BABYLON.Color3(1,1,1);

    }


    async InitPhysicsAsync() {
        const gravityFactor = 1;
        const gravityVector = new BABYLON.Vector3(0, -9.81 * gravityFactor, 0);
        const physicsPlugin = new BABYLON.HavokPlugin();
        this.scene.enablePhysics(gravityVector, physicsPlugin);

        for(const locMesh of this.locationMeshes)
        {
            const physicsBody = new BABYLON.PhysicsBody(locMesh, BABYLON.PhysicsMotionType.STATIC, false, this.scene);
            const shape = new BABYLON.PhysicsShapeMesh(
                locMesh,  
                this.scene  
            );
            physicsBody.shape = shape;
            //console.log("apply physics for mesh: " + locMesh.name);
        }
        
    }
}

/***/ }),

/***/ "./js/project/game/worldBehaviour.js":
/*!*******************************************!*\
  !*** ./js/project/game/worldBehaviour.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldBehaviour: () => (/* binding */ WorldBehaviour)
/* harmony export */ });
/* harmony import */ var _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/gameBehaviour.js */ "./js/project/common/gameBehaviour.js");

class WorldBehaviour extends _common_gameBehaviour_js__WEBPACK_IMPORTED_MODULE_0__.CompositeGameBehaviour {
    constructor() {
        super([]);
        this.entities = new Map();
        this._entitiesByUid = new Map();
    }
    AddEntity(gameEntity, isCallCallbacks) {
        if(isCallCallbacks){
            gameEntity.OnAwake();
            gameEntity.OnStart();
        }
        this.childBehaviours.push(gameEntity);
        this.entities.set(gameEntity.idKey, gameEntity);
        //console.log(`[WorldBehaviour] set entity with id '${gameEntity.idKey}', uid: '${gameEntity.UniqueID}'`);
        this._entitiesByUid.set(gameEntity.UniqueID, gameEntity);
        return this;
    }

    GetEntity(idKey) {
        if(!this.entities.has(idKey)) {
            throw new Error("[WorldBehaviour] There is no entity with id: " + idKey);
        }
        return this.entities.get(idKey);
    }

    GetEntityByUniqueId(uniqueIdKey) {
        if(!this._entitiesByUid.has(uniqueIdKey)) {
            throw new Error("[WorldBehaviour] There is no entity with uniqueIdKey: " + uniqueIdKey);
        }
        return this._entitiesByUid.get(uniqueIdKey);
    }
}

/***/ }),

/***/ "./js/project/properties/gameUnitProps.js":
/*!************************************************!*\
  !*** ./js/project/properties/gameUnitProps.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameUnitProps)
/* harmony export */ });
class GameUnitProps {
    constructor() {
        this.hpValue = 0;
        this.HpObservable = new BABYLON.Observable();

        this.maxHpValue = 0;
        this.MaxHpObservable = new BABYLON.Observable();
        
        this.isDead = false;
        this.IsDeadObservable = new BABYLON.Observable();
    }

    GetMaxHp() {
        return this.maxHpValue;
    }
    
    SetMaxHp(value) {
        this.maxHpValue = value;
        this.MaxHpObservable.notifyObservers(this.maxHpValue);
    }

    GetHp() {
        return this.hpValue;
    }
    SetHp(value) {
        this.hpValue = value;
        this.HpObservable.notifyObservers(this.hpValue);
    }

    GetIsDead() {
        return this.isDead;
    }

    SetIsDead(value) {
        this.isDead = value;
        this.IsDeadObservable.notifyObservers(this.isDead);
    }

    DealDamage(damage) {
        const currentHp = this.GetHp();
        let resultHp = currentHp - damage;
        if(resultHp < 0) {
            resultHp = 0;
        } 
        this.SetHp(resultHp);
    }
}

/***/ }),

/***/ "./js/project/properties/playerProps.js":
/*!**********************************************!*\
  !*** ./js/project/properties/playerProps.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerProps)
/* harmony export */ });
/* harmony import */ var _gameUnitProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameUnitProps.js */ "./js/project/properties/gameUnitProps.js");


class PlayerProps extends _gameUnitProps_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    
}

/***/ }),

/***/ "./js/project/properties/zombieProps.js":
/*!**********************************************!*\
  !*** ./js/project/properties/zombieProps.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZombieProps)
/* harmony export */ });
/* harmony import */ var _gameUnitProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameUnitProps.js */ "./js/project/properties/gameUnitProps.js");


class ZombieProps extends _gameUnitProps_js__WEBPACK_IMPORTED_MODULE_0__["default"] {};

/***/ }),

/***/ "./js/HavokPhysics.wasm":
/*!******************************!*\
  !*** ./js/HavokPhysics.wasm ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f97fbe958cd36449e02.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./js/project/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/modelLoader.js */ "./js/project/common/modelLoader.js");
/* harmony import */ var _game_sceneInitializer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/sceneInitializer.js */ "./js/project/game/sceneInitializer.js");
/* harmony import */ var _HavokPhysics_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HavokPhysics_es.js */ "./js/HavokPhysics_es.js");
/* harmony import */ var _game_worldBehaviour_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/worldBehaviour.js */ "./js/project/game/worldBehaviour.js");
/* harmony import */ var _components_LocalPlayerBehaviour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LocalPlayerBehaviour.js */ "./js/project/components/LocalPlayerBehaviour.js");
/* harmony import */ var _game_gameEntity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/gameEntity.js */ "./js/project/game/gameEntity.js");
/* harmony import */ var _character_characterModelLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character/characterModelLoader.js */ "./js/project/character/characterModelLoader.js");
/* harmony import */ var _components_playerGUIBehaviour_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/playerGUIBehaviour.js */ "./js/project/components/playerGUIBehaviour.js");
/* harmony import */ var _components_gameRulesBehaviour_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gameRulesBehaviour.js */ "./js/project/components/gameRulesBehaviour.js");
/* harmony import */ var _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/GameTimer.js */ "./js/project/common/GameTimer.js");
/* harmony import */ var _common_SoundPlayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/SoundPlayer.js */ "./js/project/common/SoundPlayer.js");












const startGameButton = document.getElementById("start-game");
startGameButton.addEventListener("click", () => {
    hideMainMenu();
    startGame();
});

function hideMainMenu() {
    const mainMenuRoot = document.getElementById("menu-buttons");
    mainMenuRoot.hidden = true;
}

async function startGame() {

    const HAVOK = await (0,_HavokPhysics_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    globalThis.HK = HAVOK;

    let playerAnimationsGroupArray = [];
    let gameCamera = null;
    const canvas = document.getElementById("renderCanvas"); // Get the canvas element
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    const createScene =  async function () {
        // Creates a basic Babylon Scene object
        const scene = new BABYLON.Scene(engine);
        // Creates and positions a free camera
        gameCamera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
        // Targets the camera to scene origin
    
        // This attaches the camera to the canvas
        gameCamera.attachControl(canvas, true);
        // Creates a light, aiming 0,1,0 - to the sky
        const light = new BABYLON.HemisphericLight("light", 
            new BABYLON.Vector3(0, 1, 0), scene);
        // Dim the light a small amount - 0 to 1
        light.intensity = 0.7;
 
        const locationData = await new _common_modelLoader_js__WEBPACK_IMPORTED_MODULE_0__.ModelLoader(scene, null, "./Assets/location/", "scene.gltf").LoadAsync();
        const locationMeshes = locationData.meshes;
        locationMeshes[0].name = "Location";
        const meshes =  
            locationMeshes[0]
                .getChildren()[0]
                .getChildren()[0]
                .getChildren();
                
        await new _game_sceneInitializer_js__WEBPACK_IMPORTED_MODULE_1__.SceneInitializer(scene, meshes).InitializeAsync();
        playerAnimationsGroupArray = await new _character_characterModelLoader_js__WEBPACK_IMPORTED_MODULE_6__.CharacterModelLoader(scene).LoadAndSetupModelAsync();
        return scene;
    };
    const scene = await createScene(); //Call the createScene function

    const world = new _game_worldBehaviour_js__WEBPACK_IMPORTED_MODULE_3__.WorldBehaviour();

    _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_9__["default"].StartTime = new Date();
    _common_GameTimer_js__WEBPACK_IMPORTED_MODULE_9__["default"].StartTimer();

    const soundPlayer = new _common_SoundPlayer_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
        .PreloadSound("PLAYER_SHOT", "./Assets/sounds/johandeecke__short-gunshot.wav")
        .PreloadSound("ZOMBIE_PUNCH", "./Assets/sounds/merrick079__punch2.wav")
        .PreloadSound("ZOMBIE_ATTACKED", "./Assets/sounds/tonsil5__zombie-pain-6.wav")
        .PreloadSound("PLAYER_DEATH", "./Assets/sounds/male-death-cry-3.wav")
        .PreloadSound("ZOMBIE_DEATH", "./Assets/sounds/misterkidx__zombie_die_1.wav");

    const gameRulesEntity = new _game_gameEntity_js__WEBPACK_IMPORTED_MODULE_5__.GameEntity(
        "GAME_RULES",
        new BABYLON.TransformNode("GameRules", scene)
    )
        .AddComponent(new _components_gameRulesBehaviour_js__WEBPACK_IMPORTED_MODULE_8__["default"](scene, world, soundPlayer), false);

    const playerEntity = new _game_gameEntity_js__WEBPACK_IMPORTED_MODULE_5__.GameEntity(
        "LOCAL_PLAYER",
        scene.getMeshByName("Player").getChildren()[0],
    )
        .AddComponent(new _components_LocalPlayerBehaviour_js__WEBPACK_IMPORTED_MODULE_4__.LocalPlayerBehaviour(scene, gameCamera, playerAnimationsGroupArray, world, soundPlayer), false)
        .AddComponent(new _components_playerGUIBehaviour_js__WEBPACK_IMPORTED_MODULE_7__["default"]());

    world
        .AddEntity(
            playerEntity,
            false
        )
        .AddEntity(
            gameRulesEntity,
            false
        )
    
    await world.InitAsync();
    
    world.OnAwake();
    world.OnStart();

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => {
            const deltaTime = engine.getDeltaTime() / 1000.0; // ms -> s;
        
            world.OnUpdate(deltaTime);
            scene.render();
    });
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
            engine.resize();
    });

    if(!_components_gameRulesBehaviour_js__WEBPACK_IMPORTED_MODULE_8__["default"].IsProduction)
        scene.debugLayer.show();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxTQUFTO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLDRGQUE0RjtBQUM1Rjs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEMkQ7QUFDSjtBQUNBO0FBQ0M7QUFDSjtBQUNwRDtBQUNPLG1DQUFtQyxtRUFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtFQUFTO0FBQ3ZDO0FBQ0EsK0JBQStCLGtFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0RBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNERBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0REFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0REFBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0VBQWlCO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0VBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBUztBQUNy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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywrREFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFnQjtBQUNsQywrQ0FBK0Msb0ZBQW9CO0FBQ25FO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxzQkFBc0IsbUVBQWM7QUFDcEM7QUFDQSxJQUFJLDREQUFTO0FBQ2IsSUFBSSw0REFBUztBQUNiO0FBQ0EsNEJBQTRCLCtEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUVBQWtCO0FBQzVDO0FBQ0EsNkJBQTZCLDJEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxRkFBb0I7QUFDOUMsMEJBQTBCLHlFQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEseUVBQWtCO0FBQzFCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL0hhdm9rUGh5c2ljc19lcy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9VdGlscy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NoYXJhY3Rlci9jaGFyYWN0ZXJNb2RlbExvYWRlci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbW1vbi9HYW1lVGltZXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21tb24vU291bmRQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21tb24vZ2FtZUJlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbW1vbi9tb2RlbExvYWRlci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvR2FtZVJ1bGVzQ2hlYXRzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9Mb2NhbFBsYXllckJlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9lbmVteVNwYXduZXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvZW5lbXlab21iaWVCZWhhdmlvdXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvc3RhdGVzL2NvbmNyZXRlL1pvbWJpZUF0dGFja1N0YXRlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9lbmVtaWVzL3N0YXRlcy9jb25jcmV0ZS9ab21iaWVEZWF0aFN0YXRlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9lbmVtaWVzL3N0YXRlcy9jb25jcmV0ZS9ab21iaWVJZGxlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvc3RhdGVzL2NvbmNyZXRlL1pvbWJpZU1vdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9zdGF0ZXMvem9tYmllQWN0aW9uTmFtZXMuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvc3RhdGVzL3pvbWJpZUZTTS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZ2FtZVJ1bGVzQmVoYXZpb3VyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9wbGF5ZXJHVUlCZWhhdmlvdXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllclN0YXRlcy9hY3Rpb25OYW1lcy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvcGxheWVyU3RhdGVzL2NvbmNyZXRlL0RlYXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllclN0YXRlcy9jb25jcmV0ZS9JZGxlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllclN0YXRlcy9jb25jcmV0ZS9TaG9vdFN0YXRlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9wbGF5ZXJTdGF0ZXMvY29uY3JldGUvV2Fsa1N0YXRlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9wbGF5ZXJTdGF0ZXMvcGxheWVyRnNtLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy91bml0cy91bml0RnNtQmFzZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvdW5pdHMvdW5pdFN0YXRlQmFzZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2dhbWUvZ2FtZUVudGl0eS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2dhbWUvc2NlbmVJbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2dhbWUvd29ybGRCZWhhdmlvdXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9wcm9wZXJ0aWVzL2dhbWVVbml0UHJvcHMuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9wcm9wZXJ0aWVzL3BsYXllclByb3BzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvcHJvcGVydGllcy96b21iaWVQcm9wcy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhhdm9rUGh5c2ljcyA9ICgoKSA9PiB7XHJcbiAgdmFyIF9zY3JpcHREaXIgPSBpbXBvcnQubWV0YS51cmw7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuZnVuY3Rpb24oSGF2b2tQaHlzaWNzKSB7XHJcbiAgSGF2b2tQaHlzaWNzID0gSGF2b2tQaHlzaWNzIHx8IHt9O1xyXG5cclxudmFyIE1vZHVsZT10eXBlb2YgSGF2b2tQaHlzaWNzIT1cInVuZGVmaW5lZFwiP0hhdm9rUGh5c2ljczp7fTt2YXIgcmVhZHlQcm9taXNlUmVzb2x2ZSxyZWFkeVByb21pc2VSZWplY3Q7TW9kdWxlW1wicmVhZHlcIl09bmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3JlYWR5UHJvbWlzZVJlc29sdmU9cmVzb2x2ZTtyZWFkeVByb21pc2VSZWplY3Q9cmVqZWN0fSk7dmFyIG1vZHVsZU92ZXJyaWRlcz1PYmplY3QuYXNzaWduKHt9LE1vZHVsZSk7dmFyIGFyZ3VtZW50c189W107dmFyIHRoaXNQcm9ncmFtPVwiLi90aGlzLnByb2dyYW1cIjt2YXIgcXVpdF89KHN0YXR1cyx0b1Rocm93KT0+e3Rocm93IHRvVGhyb3d9O3ZhciBFTlZJUk9OTUVOVF9JU19XRUI9dHJ1ZTt2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSPWZhbHNlO3ZhciBzY3JpcHREaXJlY3Rvcnk9XCJcIjtmdW5jdGlvbiBsb2NhdGVGaWxlKHBhdGgpe2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3JldHVybiBNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKHBhdGgsc2NyaXB0RGlyZWN0b3J5KX1yZXR1cm4gc2NyaXB0RGlyZWN0b3J5K3BhdGh9dmFyIHJlYWRfLHJlYWRBc3luYyxyZWFkQmluYXJ5LHNldFdpbmRvd1RpdGxlO2lmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKXtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3NjcmlwdERpcmVjdG9yeT1zZWxmLmxvY2F0aW9uLmhyZWZ9ZWxzZSBpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCImJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3NjcmlwdERpcmVjdG9yeT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY31pZihfc2NyaXB0RGlyKXtzY3JpcHREaXJlY3Rvcnk9X3NjcmlwdERpcn1pZihzY3JpcHREaXJlY3RvcnkuaW5kZXhPZihcImJsb2I6XCIpIT09MCl7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZWxzZXtzY3JpcHREaXJlY3Rvcnk9XCJcIn17cmVhZF89dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5zZW5kKG51bGwpO3JldHVybiB4aHIucmVzcG9uc2VUZXh0fTtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3JlYWRCaW5hcnk9dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfX1yZWFkQXN5bmM9KHVybCxvbmxvYWQsb25lcnJvcik9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCx0cnVlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIub25sb2FkPSgpPT57aWYoeGhyLnN0YXR1cz09MjAwfHx4aHIuc3RhdHVzPT0wJiZ4aHIucmVzcG9uc2Upe29ubG9hZCh4aHIucmVzcG9uc2UpO3JldHVybn1vbmVycm9yKCl9O3hoci5vbmVycm9yPW9uZXJyb3I7eGhyLnNlbmQobnVsbCl9fXNldFdpbmRvd1RpdGxlPXRpdGxlPT5kb2N1bWVudC50aXRsZT10aXRsZX1lbHNle312YXIgb3V0PU1vZHVsZVtcInByaW50XCJdfHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO3ZhciBlcnI9TW9kdWxlW1wicHJpbnRFcnJcIl18fGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oTW9kdWxlLG1vZHVsZU92ZXJyaWRlcyk7bW9kdWxlT3ZlcnJpZGVzPW51bGw7aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInF1aXRcIl0pcXVpdF89TW9kdWxlW1wicXVpdFwiXTt2YXIgUE9JTlRFUl9TSVpFPTQ7dmFyIHdhc21CaW5hcnk7aWYoTW9kdWxlW1wid2FzbUJpbmFyeVwiXSl3YXNtQmluYXJ5PU1vZHVsZVtcIndhc21CaW5hcnlcIl07dmFyIG5vRXhpdFJ1bnRpbWU9TW9kdWxlW1wibm9FeGl0UnVudGltZVwiXXx8dHJ1ZTtpZih0eXBlb2YgV2ViQXNzZW1ibHkhPVwib2JqZWN0XCIpe2Fib3J0KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKX12YXIgd2FzbU1lbW9yeTt2YXIgQUJPUlQ9ZmFsc2U7dmFyIEVYSVRTVEFUVVM7ZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbix0ZXh0KXtpZighY29uZGl0aW9uKXthYm9ydCh0ZXh0KX19dmFyIFVURjhEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGY4XCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEY4QXJyYXlUb1N0cmluZyhoZWFwT3JBcnJheSxpZHgsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRJZHg9aWR4K21heEJ5dGVzVG9SZWFkO3ZhciBlbmRQdHI9aWR4O3doaWxlKGhlYXBPckFycmF5W2VuZFB0cl0mJiEoZW5kUHRyPj1lbmRJZHgpKSsrZW5kUHRyO2lmKGVuZFB0ci1pZHg+MTYmJmhlYXBPckFycmF5LmJ1ZmZlciYmVVRGOERlY29kZXIpe3JldHVybiBVVEY4RGVjb2Rlci5kZWNvZGUoaGVhcE9yQXJyYXkuc3ViYXJyYXkoaWR4LGVuZFB0cikpfXZhciBzdHI9XCJcIjt3aGlsZShpZHg8ZW5kUHRyKXt2YXIgdTA9aGVhcE9yQXJyYXlbaWR4KytdO2lmKCEodTAmMTI4KSl7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTtjb250aW51ZX12YXIgdTE9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyMjQpPT0xOTIpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgodTAmMzEpPDw2fHUxKTtjb250aW51ZX12YXIgdTI9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyNDApPT0yMjQpe3UwPSh1MCYxNSk8PDEyfHUxPDw2fHUyfWVsc2V7dTA9KHUwJjcpPDwxOHx1MTw8MTJ8dTI8PDZ8aGVhcE9yQXJyYXlbaWR4KytdJjYzfWlmKHUwPDY1NTM2KXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApfWVsc2V7dmFyIGNoPXUwLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9fXJldHVybiBzdHJ9ZnVuY3Rpb24gVVRGOFRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7cmV0dXJuIHB0cj9VVEY4QXJyYXlUb1N0cmluZyhIRUFQVTgscHRyLG1heEJ5dGVzVG9SZWFkKTpcIlwifWZ1bmN0aW9uIHN0cmluZ1RvVVRGOEFycmF5KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpe2lmKCEobWF4Qnl0ZXNUb1dyaXRlPjApKXJldHVybiAwO3ZhciBzdGFydElkeD1vdXRJZHg7dmFyIGVuZElkeD1vdXRJZHgrbWF4Qnl0ZXNUb1dyaXRlLTE7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIHU9c3RyLmNoYXJDb2RlQXQoaSk7aWYodT49NTUyOTYmJnU8PTU3MzQzKXt2YXIgdTE9c3RyLmNoYXJDb2RlQXQoKytpKTt1PTY1NTM2KygodSYxMDIzKTw8MTApfHUxJjEwMjN9aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNlIGlmKHU8PTY1NTM1KXtpZihvdXRJZHgrMj49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTIyNHx1Pj4xMjtoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNle2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M319aGVhcFtvdXRJZHhdPTA7cmV0dXJuIG91dElkeC1zdGFydElkeH1mdW5jdGlvbiBzdHJpbmdUb1VURjgoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe3JldHVybiBzdHJpbmdUb1VURjhBcnJheShzdHIsSEVBUFU4LG91dFB0cixtYXhCeXRlc1RvV3JpdGUpfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGOChzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgYz1zdHIuY2hhckNvZGVBdChpKTtpZihjPD0xMjcpe2xlbisrfWVsc2UgaWYoYzw9MjA0Nyl7bGVuKz0yfWVsc2UgaWYoYz49NTUyOTYmJmM8PTU3MzQzKXtsZW4rPTQ7KytpfWVsc2V7bGVuKz0zfX1yZXR1cm4gbGVufXZhciBidWZmZXIsSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUDY0LEhFQVBVNjQsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVHbG9iYWxCdWZmZXJBbmRWaWV3cyhidWYpe2J1ZmZlcj1idWY7TW9kdWxlW1wiSEVBUDhcIl09SEVBUDg9bmV3IEludDhBcnJheShidWYpO01vZHVsZVtcIkhFQVAxNlwiXT1IRUFQMTY9bmV3IEludDE2QXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQMzJcIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGJ1Zik7TW9kdWxlW1wiSEVBUFU4XCJdPUhFQVBVOD1uZXcgVWludDhBcnJheShidWYpO01vZHVsZVtcIkhFQVBVMTZcIl09SEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQVTMyXCJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGJ1Zik7TW9kdWxlW1wiSEVBUEYzMlwiXT1IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQRjY0XCJdPUhFQVBGNjQ9bmV3IEZsb2F0NjRBcnJheShidWYpO01vZHVsZVtcIkhFQVA2NFwiXT1IRUFQNjQ9bmV3IEJpZ0ludDY0QXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQVTY0XCJdPUhFQVBVNjQ9bmV3IEJpZ1VpbnQ2NEFycmF5KGJ1Zil9dmFyIElOSVRJQUxfTUVNT1JZPU1vZHVsZVtcIklOSVRJQUxfTUVNT1JZXCJdfHwxNjc3NzIxNjt2YXIgd2FzbVRhYmxlO3ZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRNQUlOX189W107dmFyIF9fQVRQT1NUUlVOX189W107dmFyIHJ1bnRpbWVJbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBrZWVwUnVudGltZUFsaXZlKCl7cmV0dXJuIG5vRXhpdFJ1bnRpbWV9ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlW1wicHJlUnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlUnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlUnVuXCJdPVtNb2R1bGVbXCJwcmVSdW5cIl1dO3doaWxlKE1vZHVsZVtcInByZVJ1blwiXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVtcInByZVJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKX1mdW5jdGlvbiBpbml0UnVudGltZSgpe3J1bnRpbWVJbml0aWFsaXplZD10cnVlO2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pfWZ1bmN0aW9uIHByZU1haW4oKXtjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUTUFJTl9fKX1mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlW1wicG9zdFJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInBvc3RSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwb3N0UnVuXCJdPVtNb2R1bGVbXCJwb3N0UnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwb3N0UnVuXCJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVtcInBvc3RSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pfWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Jbml0KGNiKXtfX0FUSU5JVF9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYil7X19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKX12YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGw7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX19ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfWlmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYocnVuRGVwZW5kZW5jeVdhdGNoZXIhPT1udWxsKXtjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsfWlmKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCl7dmFyIGNhbGxiYWNrPWRlcGVuZGVuY2llc0Z1bGZpbGxlZDtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtjYWxsYmFjaygpfX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7e2lmKE1vZHVsZVtcIm9uQWJvcnRcIl0pe01vZHVsZVtcIm9uQWJvcnRcIl0od2hhdCl9fXdoYXQ9XCJBYm9ydGVkKFwiK3doYXQrXCIpXCI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7RVhJVFNUQVRVUz0xO3doYXQrPVwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7cmVhZHlQcm9taXNlUmVqZWN0KGUpO3Rocm93IGV9dmFyIGRhdGFVUklQcmVmaXg9XCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsXCI7ZnVuY3Rpb24gaXNEYXRhVVJJKGZpbGVuYW1lKXtyZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChkYXRhVVJJUHJlZml4KX12YXIgd2FzbUJpbmFyeUZpbGU7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7d2FzbUJpbmFyeUZpbGU9XCJIYXZva1BoeXNpY3Mud2FzbVwiO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKX19ZWxzZXt3YXNtQmluYXJ5RmlsZT1uZXcgVVJMKFwiSGF2b2tQaHlzaWNzLndhc21cIixpbXBvcnQubWV0YS51cmwpLnRvU3RyaW5nKCl9ZnVuY3Rpb24gZ2V0QmluYXJ5KGZpbGUpe3RyeXtpZihmaWxlPT13YXNtQmluYXJ5RmlsZSYmd2FzbUJpbmFyeSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHdhc21CaW5hcnkpfWlmKHJlYWRCaW5hcnkpe3JldHVybiByZWFkQmluYXJ5KGZpbGUpfXRocm93XCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwifWNhdGNoKGVycil7YWJvcnQoZXJyKX19ZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZSgpe2lmKCF3YXNtQmluYXJ5JiYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpKXtpZih0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtpZighcmVzcG9uc2VbXCJva1wiXSl7dGhyb3dcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiK3dhc21CaW5hcnlGaWxlK1wiJ1wifXJldHVybiByZXNwb25zZVtcImFycmF5QnVmZmVyXCJdKCl9KS5jYXRjaChmdW5jdGlvbigpe3JldHVybiBnZXRCaW5hcnkod2FzbUJpbmFyeUZpbGUpfSl9fXJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX1mdW5jdGlvbiBjcmVhdGVXYXNtKCl7dmFyIGluZm89e1wiZW52XCI6YXNtTGlicmFyeUFyZyxcIndhc2lfc25hcHNob3RfcHJldmlldzFcIjphc21MaWJyYXJ5QXJnfTtmdW5jdGlvbiByZWNlaXZlSW5zdGFuY2UoaW5zdGFuY2UsbW9kdWxlKXt2YXIgZXhwb3J0cz1pbnN0YW5jZS5leHBvcnRzO01vZHVsZVtcImFzbVwiXT1leHBvcnRzO3dhc21NZW1vcnk9TW9kdWxlW1wiYXNtXCJdW1wibWVtb3J5XCJdO3VwZGF0ZUdsb2JhbEJ1ZmZlckFuZFZpZXdzKHdhc21NZW1vcnkuYnVmZmVyKTt3YXNtVGFibGU9TW9kdWxlW1wiYXNtXCJdW1wiX19pbmRpcmVjdF9mdW5jdGlvbl90YWJsZVwiXTthZGRPbkluaXQoTW9kdWxlW1wiYXNtXCJdW1wiX193YXNtX2NhbGxfY3RvcnNcIl0pO3JlbW92ZVJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpfWFkZFJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KHJlc3VsdCl7cmVjZWl2ZUluc3RhbmNlKHJlc3VsdFtcImluc3RhbmNlXCJdKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVyKXtyZXR1cm4gZ2V0QmluYXJ5UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oYmluYXJ5KXtyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LGluZm8pfSkudGhlbihmdW5jdGlvbihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlfSkudGhlbihyZWNlaXZlcixmdW5jdGlvbihyZWFzb24pe2VycihcImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206IFwiK3JlYXNvbik7YWJvcnQocmVhc29uKX0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXN5bmMoKXtpZighd2FzbUJpbmFyeSYmdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nPT1cImZ1bmN0aW9uXCImJiFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpJiZ0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXt2YXIgcmVzdWx0PVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLGluZm8pO3JldHVybiByZXN1bHQudGhlbihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCxmdW5jdGlvbihyZWFzb24pe2VycihcIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiBcIityZWFzb24pO2VycihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX0pfSl9ZWxzZXtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCl9fWlmKE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXSl7dHJ5e3ZhciBleHBvcnRzPU1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXShpbmZvLHJlY2VpdmVJbnN0YW5jZSk7cmV0dXJuIGV4cG9ydHN9Y2F0Y2goZSl7ZXJyKFwiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogXCIrZSk7cmVhZHlQcm9taXNlUmVqZWN0KGUpfX1pbnN0YW50aWF0ZUFzeW5jKCkuY2F0Y2gocmVhZHlQcm9taXNlUmVqZWN0KTtyZXR1cm57fX12YXIgdGVtcERvdWJsZTt2YXIgdGVtcEk2NDtmdW5jdGlvbiBFeGl0U3RhdHVzKHN0YXR1cyl7dGhpcy5uYW1lPVwiRXhpdFN0YXR1c1wiO3RoaXMubWVzc2FnZT1cIlByb2dyYW0gdGVybWluYXRlZCB3aXRoIGV4aXQoXCIrc3RhdHVzK1wiKVwiO3RoaXMuc3RhdHVzPXN0YXR1c31mdW5jdGlvbiBjYWxsUnVudGltZUNhbGxiYWNrcyhjYWxsYmFja3Mpe3doaWxlKGNhbGxiYWNrcy5sZW5ndGg+MCl7Y2FsbGJhY2tzLnNoaWZ0KCkoTW9kdWxlKX19ZnVuY3Rpb24gZGVtYW5nbGUoZnVuYyl7cmV0dXJuIGZ1bmN9ZnVuY3Rpb24gZGVtYW5nbGVBbGwodGV4dCl7dmFyIHJlZ2V4PS9cXGJfWltcXHdcXGRfXSsvZztyZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LGZ1bmN0aW9uKHgpe3ZhciB5PWRlbWFuZ2xlKHgpO3JldHVybiB4PT09eT94OnkrXCIgW1wiK3grXCJdXCJ9KX1mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oZSl7aWYoZSBpbnN0YW5jZW9mIEV4aXRTdGF0dXN8fGU9PVwidW53aW5kXCIpe3JldHVybiBFWElUU1RBVFVTfXF1aXRfKDEsZSl9ZnVuY3Rpb24ganNTdGFja1RyYWNlKCl7dmFyIGVycm9yPW5ldyBFcnJvcjtpZighZXJyb3Iuc3RhY2spe3RyeXt0aHJvdyBuZXcgRXJyb3J9Y2F0Y2goZSl7ZXJyb3I9ZX1pZighZXJyb3Iuc3RhY2spe3JldHVyblwiKG5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSlcIn19cmV0dXJuIGVycm9yLnN0YWNrLnRvU3RyaW5nKCl9dmFyIHR1cGxlUmVnaXN0cmF0aW9ucz17fTtmdW5jdGlvbiBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl7d2hpbGUoZGVzdHJ1Y3RvcnMubGVuZ3RoKXt2YXIgcHRyPWRlc3RydWN0b3JzLnBvcCgpO3ZhciBkZWw9ZGVzdHJ1Y3RvcnMucG9wKCk7ZGVsKHB0cil9fWZ1bmN0aW9uIHNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVAzMltwb2ludGVyPj4yXSl9dmFyIGF3YWl0aW5nRGVwZW5kZW5jaWVzPXt9O3ZhciByZWdpc3RlcmVkVHlwZXM9e307dmFyIHR5cGVEZXBlbmRlbmNpZXM9e307dmFyIGNoYXJfMD00ODt2YXIgY2hhcl85PTU3O2Z1bmN0aW9uIG1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKXtpZih1bmRlZmluZWQ9PT1uYW1lKXtyZXR1cm5cIl91bmtub3duXCJ9bmFtZT1uYW1lLnJlcGxhY2UoL1teYS16QS1aMC05X10vZyxcIiRcIik7dmFyIGY9bmFtZS5jaGFyQ29kZUF0KDApO2lmKGY+PWNoYXJfMCYmZjw9Y2hhcl85KXtyZXR1cm5cIl9cIituYW1lfXJldHVybiBuYW1lfWZ1bmN0aW9uIGNyZWF0ZU5hbWVkRnVuY3Rpb24obmFtZSxib2R5KXtuYW1lPW1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKTtyZXR1cm4gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLFwicmV0dXJuIGZ1bmN0aW9uIFwiK25hbWUrXCIoKSB7XFxuXCIrJyAgICBcInVzZSBzdHJpY3RcIjsnK1wiICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XFxuXCIrXCJ9O1xcblwiKShib2R5KX1mdW5jdGlvbiBleHRlbmRFcnJvcihiYXNlRXJyb3JUeXBlLGVycm9yTmFtZSl7dmFyIGVycm9yQ2xhc3M9Y3JlYXRlTmFtZWRGdW5jdGlvbihlcnJvck5hbWUsZnVuY3Rpb24obWVzc2FnZSl7dGhpcy5uYW1lPWVycm9yTmFtZTt0aGlzLm1lc3NhZ2U9bWVzc2FnZTt2YXIgc3RhY2s9bmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO2lmKHN0YWNrIT09dW5kZWZpbmVkKXt0aGlzLnN0YWNrPXRoaXMudG9TdHJpbmcoKStcIlxcblwiK3N0YWNrLnJlcGxhY2UoL15FcnJvcig6W15cXG5dKik/XFxuLyxcIlwiKX19KTtlcnJvckNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGJhc2VFcnJvclR5cGUucHJvdG90eXBlKTtlcnJvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1lcnJvckNsYXNzO2Vycm9yQ2xhc3MucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7aWYodGhpcy5tZXNzYWdlPT09dW5kZWZpbmVkKXtyZXR1cm4gdGhpcy5uYW1lfWVsc2V7cmV0dXJuIHRoaXMubmFtZStcIjogXCIrdGhpcy5tZXNzYWdlfX07cmV0dXJuIGVycm9yQ2xhc3N9dmFyIEludGVybmFsRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93SW50ZXJuYWxFcnJvcihtZXNzYWdlKXt0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihtZXNzYWdlKX1mdW5jdGlvbiB3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChteVR5cGVzLGRlcGVuZGVudFR5cGVzLGdldFR5cGVDb252ZXJ0ZXJzKXtteVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSl7dHlwZURlcGVuZGVuY2llc1t0eXBlXT1kZXBlbmRlbnRUeXBlc30pO2Z1bmN0aW9uIG9uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpe3ZhciBteVR5cGVDb252ZXJ0ZXJzPWdldFR5cGVDb252ZXJ0ZXJzKHR5cGVDb252ZXJ0ZXJzKTtpZihteVR5cGVDb252ZXJ0ZXJzLmxlbmd0aCE9PW15VHlwZXMubGVuZ3RoKXt0aHJvd0ludGVybmFsRXJyb3IoXCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50XCIpfWZvcih2YXIgaT0wO2k8bXlUeXBlcy5sZW5ndGg7KytpKXtyZWdpc3RlclR5cGUobXlUeXBlc1tpXSxteVR5cGVDb252ZXJ0ZXJzW2ldKX19dmFyIHR5cGVDb252ZXJ0ZXJzPW5ldyBBcnJheShkZXBlbmRlbnRUeXBlcy5sZW5ndGgpO3ZhciB1bnJlZ2lzdGVyZWRUeXBlcz1bXTt2YXIgcmVnaXN0ZXJlZD0wO2RlcGVuZGVudFR5cGVzLmZvckVhY2goKGR0LGkpPT57aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KGR0KSl7dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XX1lbHNle3VucmVnaXN0ZXJlZFR5cGVzLnB1c2goZHQpO2lmKCFhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShkdCkpe2F3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XT1bXX1hd2FpdGluZ0RlcGVuZGVuY2llc1tkdF0ucHVzaCgoKT0+e3R5cGVDb252ZXJ0ZXJzW2ldPXJlZ2lzdGVyZWRUeXBlc1tkdF07KytyZWdpc3RlcmVkO2lmKHJlZ2lzdGVyZWQ9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX0pfX0pO2lmKDA9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX1mdW5jdGlvbiBfX2VtYmluZF9maW5hbGl6ZV92YWx1ZV9hcnJheShyYXdUdXBsZVR5cGUpe3ZhciByZWc9dHVwbGVSZWdpc3RyYXRpb25zW3Jhd1R1cGxlVHlwZV07ZGVsZXRlIHR1cGxlUmVnaXN0cmF0aW9uc1tyYXdUdXBsZVR5cGVdO3ZhciBlbGVtZW50cz1yZWcuZWxlbWVudHM7dmFyIGVsZW1lbnRzTGVuZ3RoPWVsZW1lbnRzLmxlbmd0aDt2YXIgZWxlbWVudFR5cGVzPWVsZW1lbnRzLm1hcChmdW5jdGlvbihlbHQpe3JldHVybiBlbHQuZ2V0dGVyUmV0dXJuVHlwZX0pLmNvbmNhdChlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWx0KXtyZXR1cm4gZWx0LnNldHRlckFyZ3VtZW50VHlwZX0pKTt2YXIgcmF3Q29uc3RydWN0b3I9cmVnLnJhd0NvbnN0cnVjdG9yO3ZhciByYXdEZXN0cnVjdG9yPXJlZy5yYXdEZXN0cnVjdG9yO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtyYXdUdXBsZVR5cGVdLGVsZW1lbnRUeXBlcyxmdW5jdGlvbihlbGVtZW50VHlwZXMpe2VsZW1lbnRzLmZvckVhY2goKGVsdCxpKT0+e3ZhciBnZXR0ZXJSZXR1cm5UeXBlPWVsZW1lbnRUeXBlc1tpXTt2YXIgZ2V0dGVyPWVsdC5nZXR0ZXI7dmFyIGdldHRlckNvbnRleHQ9ZWx0LmdldHRlckNvbnRleHQ7dmFyIHNldHRlckFyZ3VtZW50VHlwZT1lbGVtZW50VHlwZXNbaStlbGVtZW50c0xlbmd0aF07dmFyIHNldHRlcj1lbHQuc2V0dGVyO3ZhciBzZXR0ZXJDb250ZXh0PWVsdC5zZXR0ZXJDb250ZXh0O2VsdC5yZWFkPXB0cj0+e3JldHVybiBnZXR0ZXJSZXR1cm5UeXBlW1wiZnJvbVdpcmVUeXBlXCJdKGdldHRlcihnZXR0ZXJDb250ZXh0LHB0cikpfTtlbHQud3JpdGU9KHB0cixvKT0+e3ZhciBkZXN0cnVjdG9ycz1bXTtzZXR0ZXIoc2V0dGVyQ29udGV4dCxwdHIsc2V0dGVyQXJndW1lbnRUeXBlW1widG9XaXJlVHlwZVwiXShkZXN0cnVjdG9ycyxvKSk7cnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpfX0pO3JldHVyblt7bmFtZTpyZWcubmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHB0cil7dmFyIHJ2PW5ldyBBcnJheShlbGVtZW50c0xlbmd0aCk7Zm9yKHZhciBpPTA7aTxlbGVtZW50c0xlbmd0aDsrK2kpe3J2W2ldPWVsZW1lbnRzW2ldLnJlYWQocHRyKX1yYXdEZXN0cnVjdG9yKHB0cik7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtpZihlbGVtZW50c0xlbmd0aCE9PW8ubGVuZ3RoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW5jb3JyZWN0IG51bWJlciBvZiB0dXBsZSBlbGVtZW50cyBmb3IgXCIrcmVnLm5hbWUrXCI6IGV4cGVjdGVkPVwiK2VsZW1lbnRzTGVuZ3RoK1wiLCBhY3R1YWw9XCIrby5sZW5ndGgpfXZhciBwdHI9cmF3Q29uc3RydWN0b3IoKTtmb3IodmFyIGk9MDtpPGVsZW1lbnRzTGVuZ3RoOysraSl7ZWxlbWVudHNbaV0ud3JpdGUocHRyLG9baV0pfWlmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaChyYXdEZXN0cnVjdG9yLHB0cil9cmV0dXJuIHB0cn0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpyYXdEZXN0cnVjdG9yfV19KX1mdW5jdGlvbiBlbWJpbmRSZXByKHYpe2lmKHY9PT1udWxsKXtyZXR1cm5cIm51bGxcIn12YXIgdD10eXBlb2YgdjtpZih0PT09XCJvYmplY3RcInx8dD09PVwiYXJyYXlcInx8dD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHYudG9TdHJpbmcoKX1lbHNle3JldHVyblwiXCIrdn19ZnVuY3Rpb24gZW1iaW5kX2luaXRfY2hhckNvZGVzKCl7dmFyIGNvZGVzPW5ldyBBcnJheSgyNTYpO2Zvcih2YXIgaT0wO2k8MjU2OysraSl7Y29kZXNbaV09U3RyaW5nLmZyb21DaGFyQ29kZShpKX1lbWJpbmRfY2hhckNvZGVzPWNvZGVzfXZhciBlbWJpbmRfY2hhckNvZGVzPXVuZGVmaW5lZDtmdW5jdGlvbiByZWFkTGF0aW4xU3RyaW5nKHB0cil7dmFyIHJldD1cIlwiO3ZhciBjPXB0cjt3aGlsZShIRUFQVThbY10pe3JldCs9ZW1iaW5kX2NoYXJDb2Rlc1tIRUFQVThbYysrXV19cmV0dXJuIHJldH12YXIgQmluZGluZ0Vycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiB0aHJvd0JpbmRpbmdFcnJvcihtZXNzYWdlKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKG1lc3NhZ2UpfWZ1bmN0aW9uIHJlZ2lzdGVyVHlwZShyYXdUeXBlLHJlZ2lzdGVyZWRJbnN0YW5jZSxvcHRpb25zPXt9KXtpZighKFwiYXJnUGFja0FkdmFuY2VcImluIHJlZ2lzdGVyZWRJbnN0YW5jZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlXCIpfXZhciBuYW1lPXJlZ2lzdGVyZWRJbnN0YW5jZS5uYW1lO2lmKCFyYXdUeXBlKXt0aHJvd0JpbmRpbmdFcnJvcigndHlwZSBcIicrbmFtZSsnXCIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpfWlmKHJlZ2lzdGVyZWRUeXBlcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7aWYob3B0aW9ucy5pZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zKXtyZXR1cm59ZWxzZXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCByZWdpc3RlciB0eXBlICdcIituYW1lK1wiJyB0d2ljZVwiKX19cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdPXJlZ2lzdGVyZWRJbnN0YW5jZTtkZWxldGUgdHlwZURlcGVuZGVuY2llc1tyYXdUeXBlXTtpZihhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7dmFyIGNhbGxiYWNrcz1hd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtkZWxldGUgYXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07Y2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpfX1mdW5jdGlvbiBpbnRlZ2VyUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCxzaWduZWQpe3N3aXRjaChzaGlmdCl7Y2FzZSAwOnJldHVybiBzaWduZWQ/ZnVuY3Rpb24gcmVhZFM4RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVA4W3BvaW50ZXJdfTpmdW5jdGlvbiByZWFkVThGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUFU4W3BvaW50ZXJdfTtjYXNlIDE6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVAxNltwb2ludGVyPj4xXX06ZnVuY3Rpb24gcmVhZFUxNkZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVTE2W3BvaW50ZXI+PjFdfTtjYXNlIDI6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVAzMltwb2ludGVyPj4yXX06ZnVuY3Rpb24gcmVhZFUzMkZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVTMyW3BvaW50ZXI+PjJdfTtjYXNlIDM6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzY0RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVA2NFtwb2ludGVyPj4zXX06ZnVuY3Rpb24gcmVhZFU2NEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVTY0W3BvaW50ZXI+PjNdfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGludGVnZXIgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludChwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO3ZhciBpc1Vuc2lnbmVkVHlwZT1uYW1lLmluZGV4T2YoXCJ1XCIpIT0tMTtpZihpc1Vuc2lnbmVkVHlwZSl7bWF4UmFuZ2U9KDFuPDw2NG4pLTFufXJlZ2lzdGVyVHlwZShwcmltaXRpdmVUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYodHlwZW9mIHZhbHVlIT1cImJpZ2ludFwiJiZ0eXBlb2YgdmFsdWUhPVwibnVtYmVyXCIpe3Rocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IFwiJytlbWJpbmRSZXByKHZhbHVlKSsnXCIgdG8gJyt0aGlzLm5hbWUpfWlmKHZhbHVlPG1pblJhbmdlfHx2YWx1ZT5tYXhSYW5nZSl7dGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciBcIicrZW1iaW5kUmVwcih2YWx1ZSkrJ1wiIGZyb20gSlMgc2lkZSB0byBDL0MrKyBzaWRlIHRvIGFuIGFyZ3VtZW50IG9mIHR5cGUgXCInK25hbWUrJ1wiLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyttaW5SYW5nZStcIiwgXCIrbWF4UmFuZ2UrXCJdIVwiKX1yZXR1cm4gdmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjppbnRlZ2VyUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCwhaXNVbnNpZ25lZFR5cGUpLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZ2V0U2hpZnRGcm9tU2l6ZShzaXplKXtzd2l0Y2goc2l6ZSl7Y2FzZSAxOnJldHVybiAwO2Nhc2UgMjpyZXR1cm4gMTtjYXNlIDQ6cmV0dXJuIDI7Y2FzZSA4OnJldHVybiAzO2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gdHlwZSBzaXplOiBcIitzaXplKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYm9vbChyYXdUeXBlLG5hbWUsc2l6ZSx0cnVlVmFsdWUsZmFsc2VWYWx1ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih3dCl7cmV0dXJuISF3dH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIG8/dHJ1ZVZhbHVlOmZhbHNlVmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcDtpZihzaXplPT09MSl7aGVhcD1IRUFQOH1lbHNlIGlmKHNpemU9PT0yKXtoZWFwPUhFQVAxNn1lbHNlIGlmKHNpemU9PT00KXtoZWFwPUhFQVAzMn1lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiBcIituYW1lKX1yZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXI+PnNoaWZ0XSl9LGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9dmFyIGVtdmFsX2ZyZWVfbGlzdD1bXTt2YXIgZW12YWxfaGFuZGxlX2FycmF5PVt7fSx7dmFsdWU6dW5kZWZpbmVkfSx7dmFsdWU6bnVsbH0se3ZhbHVlOnRydWV9LHt2YWx1ZTpmYWxzZX1dO2Z1bmN0aW9uIF9fZW12YWxfZGVjcmVmKGhhbmRsZSl7aWYoaGFuZGxlPjQmJjA9PT0tLWVtdmFsX2hhbmRsZV9hcnJheVtoYW5kbGVdLnJlZmNvdW50KXtlbXZhbF9oYW5kbGVfYXJyYXlbaGFuZGxlXT11bmRlZmluZWQ7ZW12YWxfZnJlZV9saXN0LnB1c2goaGFuZGxlKX19ZnVuY3Rpb24gY291bnRfZW12YWxfaGFuZGxlcygpe3ZhciBjb3VudD0wO2Zvcih2YXIgaT01O2k8ZW12YWxfaGFuZGxlX2FycmF5Lmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZV9hcnJheVtpXSE9PXVuZGVmaW5lZCl7Kytjb3VudH19cmV0dXJuIGNvdW50fWZ1bmN0aW9uIGdldF9maXJzdF9lbXZhbCgpe2Zvcih2YXIgaT01O2k8ZW12YWxfaGFuZGxlX2FycmF5Lmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZV9hcnJheVtpXSE9PXVuZGVmaW5lZCl7cmV0dXJuIGVtdmFsX2hhbmRsZV9hcnJheVtpXX19cmV0dXJuIG51bGx9ZnVuY3Rpb24gaW5pdF9lbXZhbCgpe01vZHVsZVtcImNvdW50X2VtdmFsX2hhbmRsZXNcIl09Y291bnRfZW12YWxfaGFuZGxlcztNb2R1bGVbXCJnZXRfZmlyc3RfZW12YWxcIl09Z2V0X2ZpcnN0X2VtdmFsfXZhciBFbXZhbD17dG9WYWx1ZTpoYW5kbGU9PntpZighaGFuZGxlKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9IFwiK2hhbmRsZSl9cmV0dXJuIGVtdmFsX2hhbmRsZV9hcnJheVtoYW5kbGVdLnZhbHVlfSx0b0hhbmRsZTp2YWx1ZT0+e3N3aXRjaCh2YWx1ZSl7Y2FzZSB1bmRlZmluZWQ6cmV0dXJuIDE7Y2FzZSBudWxsOnJldHVybiAyO2Nhc2UgdHJ1ZTpyZXR1cm4gMztjYXNlIGZhbHNlOnJldHVybiA0O2RlZmF1bHQ6e3ZhciBoYW5kbGU9ZW12YWxfZnJlZV9saXN0Lmxlbmd0aD9lbXZhbF9mcmVlX2xpc3QucG9wKCk6ZW12YWxfaGFuZGxlX2FycmF5Lmxlbmd0aDtlbXZhbF9oYW5kbGVfYXJyYXlbaGFuZGxlXT17cmVmY291bnQ6MSx2YWx1ZTp2YWx1ZX07cmV0dXJuIGhhbmRsZX19fX07ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfZW12YWwocmF3VHlwZSxuYW1lKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKGhhbmRsZSl7dmFyIHJ2PUVtdmFsLnRvVmFsdWUoaGFuZGxlKTtfX2VtdmFsX2RlY3JlZihoYW5kbGUpO3JldHVybiBydn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe3JldHVybiBFbXZhbC50b0hhbmRsZSh2YWx1ZSl9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIGVuc3VyZU92ZXJsb2FkVGFibGUocHJvdG8sbWV0aG9kTmFtZSxodW1hbk5hbWUpe2lmKHVuZGVmaW5lZD09PXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUpe3ZhciBwcmV2RnVuYz1wcm90b1ttZXRob2ROYW1lXTtwcm90b1ttZXRob2ROYW1lXT1mdW5jdGlvbigpe2lmKCFwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkZ1bmN0aW9uICdcIitodW1hbk5hbWUrXCInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoXCIrYXJndW1lbnRzLmxlbmd0aCtcIikgLSBleHBlY3RzIG9uZSBvZiAoXCIrcHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZStcIikhXCIpfXJldHVybiBwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZT1bXTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW3ByZXZGdW5jLmFyZ0NvdW50XT1wcmV2RnVuY319ZnVuY3Rpb24gZXhwb3NlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZihNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe2lmKHVuZGVmaW5lZD09PW51bUFyZ3VtZW50c3x8dW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGUmJnVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c10pe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICdcIituYW1lK1wiJyB0d2ljZVwiKX1lbnN1cmVPdmVybG9hZFRhYmxlKE1vZHVsZSxuYW1lLG5hbWUpO2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShudW1Bcmd1bWVudHMpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKFwiK251bUFyZ3VtZW50cytcIikhXCIpfU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c109dmFsdWV9ZWxzZXtNb2R1bGVbbmFtZV09dmFsdWU7aWYodW5kZWZpbmVkIT09bnVtQXJndW1lbnRzKXtNb2R1bGVbbmFtZV0ubnVtQXJndW1lbnRzPW51bUFyZ3VtZW50c319fWZ1bmN0aW9uIGVudW1SZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3ZhciBoZWFwPXNpZ25lZD9IRUFQODpIRUFQVTg7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oaGVhcFtwb2ludGVyXSl9O2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVAxNjpIRUFQVTE2O3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+MV0pfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3ZhciBoZWFwPXNpZ25lZD9IRUFQMzI6SEVBUFUzMjtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXI+PjJdKX07ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBpbnRlZ2VyIHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbnVtKHJhd1R5cGUsbmFtZSxzaXplLGlzU2lnbmVkKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7ZnVuY3Rpb24gY3Rvcigpe31jdG9yLnZhbHVlcz17fTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLGNvbnN0cnVjdG9yOmN0b3IsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci52YWx1ZXNbY119LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLGMpe3JldHVybiBjLnZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZW51bVJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsaXNTaWduZWQpLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSk7ZXhwb3NlUHVibGljU3ltYm9sKG5hbWUsY3Rvcil9ZnVuY3Rpb24gZ2V0VHlwZU5hbWUodHlwZSl7dmFyIHB0cj1fX19nZXRUeXBlTmFtZSh0eXBlKTt2YXIgcnY9cmVhZExhdGluMVN0cmluZyhwdHIpO19mcmVlKHB0cik7cmV0dXJuIHJ2fWZ1bmN0aW9uIHJlcXVpcmVSZWdpc3RlcmVkVHlwZShyYXdUeXBlLGh1bWFuTmFtZSl7dmFyIGltcGw9cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdO2lmKHVuZGVmaW5lZD09PWltcGwpe3Rocm93QmluZGluZ0Vycm9yKGh1bWFuTmFtZStcIiBoYXMgdW5rbm93biB0eXBlIFwiK2dldFR5cGVOYW1lKHJhd1R5cGUpKX1yZXR1cm4gaW1wbH1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbnVtX3ZhbHVlKHJhd0VudW1UeXBlLG5hbWUsZW51bVZhbHVlKXt2YXIgZW51bVR5cGU9cmVxdWlyZVJlZ2lzdGVyZWRUeXBlKHJhd0VudW1UeXBlLFwiZW51bVwiKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7dmFyIEVudW09ZW51bVR5cGUuY29uc3RydWN0b3I7dmFyIFZhbHVlPU9iamVjdC5jcmVhdGUoZW51bVR5cGUuY29uc3RydWN0b3IucHJvdG90eXBlLHt2YWx1ZTp7dmFsdWU6ZW51bVZhbHVlfSxjb25zdHJ1Y3Rvcjp7dmFsdWU6Y3JlYXRlTmFtZWRGdW5jdGlvbihlbnVtVHlwZS5uYW1lK1wiX1wiK25hbWUsZnVuY3Rpb24oKXt9KX19KTtFbnVtLnZhbHVlc1tlbnVtVmFsdWVdPVZhbHVlO0VudW1bbmFtZV09VmFsdWV9ZnVuY3Rpb24gZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KXtzd2l0Y2goc2hpZnQpe2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUEYzMltwb2ludGVyPj4yXSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUEY2NFtwb2ludGVyPj4zXSl9O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZmxvYXQgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0KHJhd1R5cGUsbmFtZSxzaXplKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWV9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtyZXR1cm4gdmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpmbG9hdFJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQpLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gbmV3Xyhjb25zdHJ1Y3Rvcixhcmd1bWVudExpc3Qpe2lmKCEoY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgXCIrdHlwZW9mIGNvbnN0cnVjdG9yK1wiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uXCIpfXZhciBkdW1teT1jcmVhdGVOYW1lZEZ1bmN0aW9uKGNvbnN0cnVjdG9yLm5hbWV8fFwidW5rbm93bkZ1bmN0aW9uTmFtZVwiLGZ1bmN0aW9uKCl7fSk7ZHVtbXkucHJvdG90eXBlPWNvbnN0cnVjdG9yLnByb3RvdHlwZTt2YXIgb2JqPW5ldyBkdW1teTt2YXIgcj1jb25zdHJ1Y3Rvci5hcHBseShvYmosYXJndW1lbnRMaXN0KTtyZXR1cm4gciBpbnN0YW5jZW9mIE9iamVjdD9yOm9ian1mdW5jdGlvbiBjcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsY2xhc3NUeXBlLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMpe3ZhciBhcmdDb3VudD1hcmdUeXBlcy5sZW5ndGg7aWYoYXJnQ291bnQ8Mil7dGhyb3dCaW5kaW5nRXJyb3IoXCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyFcIil9dmFyIGlzQ2xhc3NNZXRob2RGdW5jPWFyZ1R5cGVzWzFdIT09bnVsbCYmY2xhc3NUeXBlIT09bnVsbDt2YXIgbmVlZHNEZXN0cnVjdG9yU3RhY2s9ZmFsc2U7Zm9yKHZhciBpPTE7aTxhcmdUeXBlcy5sZW5ndGg7KytpKXtpZihhcmdUeXBlc1tpXSE9PW51bGwmJmFyZ1R5cGVzW2ldLmRlc3RydWN0b3JGdW5jdGlvbj09PXVuZGVmaW5lZCl7bmVlZHNEZXN0cnVjdG9yU3RhY2s9dHJ1ZTticmVha319dmFyIHJldHVybnM9YXJnVHlwZXNbMF0ubmFtZSE9PVwidm9pZFwiO3ZhciBhcmdzTGlzdD1cIlwiO3ZhciBhcmdzTGlzdFdpcmVkPVwiXCI7Zm9yKHZhciBpPTA7aTxhcmdDb3VudC0yOysraSl7YXJnc0xpc3QrPShpIT09MD9cIiwgXCI6XCJcIikrXCJhcmdcIitpO2FyZ3NMaXN0V2lyZWQrPShpIT09MD9cIiwgXCI6XCJcIikrXCJhcmdcIitpK1wiV2lyZWRcIn12YXIgaW52b2tlckZuQm9keT1cInJldHVybiBmdW5jdGlvbiBcIittYWtlTGVnYWxGdW5jdGlvbk5hbWUoaHVtYW5OYW1lKStcIihcIithcmdzTGlzdCtcIikge1xcblwiK1wiaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IFwiKyhhcmdDb3VudC0yKStcIikge1xcblwiK1widGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIFwiK2h1bWFuTmFtZStcIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCBcIisoYXJnQ291bnQtMikrXCIgYXJncyEnKTtcXG5cIitcIn1cXG5cIjtpZihuZWVkc0Rlc3RydWN0b3JTdGFjayl7aW52b2tlckZuQm9keSs9XCJ2YXIgZGVzdHJ1Y3RvcnMgPSBbXTtcXG5cIn12YXIgZHRvclN0YWNrPW5lZWRzRGVzdHJ1Y3RvclN0YWNrP1wiZGVzdHJ1Y3RvcnNcIjpcIm51bGxcIjt2YXIgYXJnczE9W1widGhyb3dCaW5kaW5nRXJyb3JcIixcImludm9rZXJcIixcImZuXCIsXCJydW5EZXN0cnVjdG9yc1wiLFwicmV0VHlwZVwiLFwiY2xhc3NQYXJhbVwiXTt2YXIgYXJnczI9W3Rocm93QmluZGluZ0Vycm9yLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMscnVuRGVzdHJ1Y3RvcnMsYXJnVHlwZXNbMF0sYXJnVHlwZXNbMV1dO2lmKGlzQ2xhc3NNZXRob2RGdW5jKXtpbnZva2VyRm5Cb2R5Kz1cInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoXCIrZHRvclN0YWNrK1wiLCB0aGlzKTtcXG5cIn1mb3IodmFyIGk9MDtpPGFyZ0NvdW50LTI7KytpKXtpbnZva2VyRm5Cb2R5Kz1cInZhciBhcmdcIitpK1wiV2lyZWQgPSBhcmdUeXBlXCIraStcIi50b1dpcmVUeXBlKFwiK2R0b3JTdGFjaytcIiwgYXJnXCIraStcIik7IC8vIFwiK2FyZ1R5cGVzW2krMl0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2goXCJhcmdUeXBlXCIraSk7YXJnczIucHVzaChhcmdUeXBlc1tpKzJdKX1pZihpc0NsYXNzTWV0aG9kRnVuYyl7YXJnc0xpc3RXaXJlZD1cInRoaXNXaXJlZFwiKyhhcmdzTGlzdFdpcmVkLmxlbmd0aD4wP1wiLCBcIjpcIlwiKSthcmdzTGlzdFdpcmVkfWludm9rZXJGbkJvZHkrPShyZXR1cm5zP1widmFyIHJ2ID0gXCI6XCJcIikrXCJpbnZva2VyKGZuXCIrKGFyZ3NMaXN0V2lyZWQubGVuZ3RoPjA/XCIsIFwiOlwiXCIpK2FyZ3NMaXN0V2lyZWQrXCIpO1xcblwiO2lmKG5lZWRzRGVzdHJ1Y3RvclN0YWNrKXtpbnZva2VyRm5Cb2R5Kz1cInJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTtcXG5cIn1lbHNle2Zvcih2YXIgaT1pc0NsYXNzTWV0aG9kRnVuYz8xOjI7aTxhcmdUeXBlcy5sZW5ndGg7KytpKXt2YXIgcGFyYW1OYW1lPWk9PT0xP1widGhpc1dpcmVkXCI6XCJhcmdcIisoaS0yKStcIldpcmVkXCI7aWYoYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uIT09bnVsbCl7aW52b2tlckZuQm9keSs9cGFyYW1OYW1lK1wiX2R0b3IoXCIrcGFyYW1OYW1lK1wiKTsgLy8gXCIrYXJnVHlwZXNbaV0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2gocGFyYW1OYW1lK1wiX2R0b3JcIik7YXJnczIucHVzaChhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb24pfX19aWYocmV0dXJucyl7aW52b2tlckZuQm9keSs9XCJ2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpO1xcblwiK1wicmV0dXJuIHJldDtcXG5cIn1lbHNle31pbnZva2VyRm5Cb2R5Kz1cIn1cXG5cIjthcmdzMS5wdXNoKGludm9rZXJGbkJvZHkpO3ZhciBpbnZva2VyRnVuY3Rpb249bmV3XyhGdW5jdGlvbixhcmdzMSkuYXBwbHkobnVsbCxhcmdzMik7cmV0dXJuIGludm9rZXJGdW5jdGlvbn1mdW5jdGlvbiBoZWFwMzJWZWN0b3JUb0FycmF5KGNvdW50LGZpcnN0RWxlbWVudCl7dmFyIGFycmF5PVtdO2Zvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXthcnJheS5wdXNoKEhFQVBVMzJbZmlyc3RFbGVtZW50K2kqND4+Ml0pfXJldHVybiBhcnJheX1mdW5jdGlvbiByZXBsYWNlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZighTW9kdWxlLmhhc093blByb3BlcnR5KG5hbWUpKXt0aHJvd0ludGVybmFsRXJyb3IoXCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbFwiKX1pZih1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09bnVtQXJndW1lbnRzKXtNb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdPXZhbHVlfWVsc2V7TW9kdWxlW25hbWVdPXZhbHVlO01vZHVsZVtuYW1lXS5hcmdDb3VudD1udW1Bcmd1bWVudHN9fXZhciB3YXNtVGFibGVNaXJyb3I9W107ZnVuY3Rpb24gZ2V0V2FzbVRhYmxlRW50cnkoZnVuY1B0cil7dmFyIGZ1bmM9d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdO2lmKCFmdW5jKXtpZihmdW5jUHRyPj13YXNtVGFibGVNaXJyb3IubGVuZ3RoKXdhc21UYWJsZU1pcnJvci5sZW5ndGg9ZnVuY1B0cisxO3dhc21UYWJsZU1pcnJvcltmdW5jUHRyXT1mdW5jPXdhc21UYWJsZS5nZXQoZnVuY1B0cil9cmV0dXJuIGZ1bmN9ZnVuY3Rpb24gZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oc2lnbmF0dXJlLHJhd0Z1bmN0aW9uKXtzaWduYXR1cmU9cmVhZExhdGluMVN0cmluZyhzaWduYXR1cmUpO2Z1bmN0aW9uIG1ha2VEeW5DYWxsZXIoKXtyZXR1cm4gZ2V0V2FzbVRhYmxlRW50cnkocmF3RnVuY3Rpb24pfXZhciBmcD1tYWtlRHluQ2FsbGVyKCk7aWYodHlwZW9mIGZwIT1cImZ1bmN0aW9uXCIpe3Rocm93QmluZGluZ0Vycm9yKFwidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlIFwiK3NpZ25hdHVyZStcIjogXCIrcmF3RnVuY3Rpb24pfXJldHVybiBmcH12YXIgVW5ib3VuZFR5cGVFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dVbmJvdW5kVHlwZUVycm9yKG1lc3NhZ2UsdHlwZXMpe3ZhciB1bmJvdW5kVHlwZXM9W107dmFyIHNlZW49e307ZnVuY3Rpb24gdmlzaXQodHlwZSl7aWYoc2Vlblt0eXBlXSl7cmV0dXJufWlmKHJlZ2lzdGVyZWRUeXBlc1t0eXBlXSl7cmV0dXJufWlmKHR5cGVEZXBlbmRlbmNpZXNbdHlwZV0pe3R5cGVEZXBlbmRlbmNpZXNbdHlwZV0uZm9yRWFjaCh2aXNpdCk7cmV0dXJufXVuYm91bmRUeXBlcy5wdXNoKHR5cGUpO3NlZW5bdHlwZV09dHJ1ZX10eXBlcy5mb3JFYWNoKHZpc2l0KTt0aHJvdyBuZXcgVW5ib3VuZFR5cGVFcnJvcihtZXNzYWdlK1wiOiBcIit1bmJvdW5kVHlwZXMubWFwKGdldFR5cGVOYW1lKS5qb2luKFtcIiwgXCJdKSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfZnVuY3Rpb24obmFtZSxhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIsc2lnbmF0dXJlLHJhd0ludm9rZXIsZm4pe3ZhciBhcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3Jhd0ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oc2lnbmF0dXJlLHJhd0ludm9rZXIpO2V4cG9zZVB1YmxpY1N5bWJvbChuYW1lLGZ1bmN0aW9uKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgXCIrbmFtZStcIiBkdWUgdG8gdW5ib3VuZCB0eXBlc1wiLGFyZ1R5cGVzKX0sYXJnQ291bnQtMSk7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sYXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe3ZhciBpbnZva2VyQXJnc0FycmF5PVthcmdUeXBlc1swXSxudWxsXS5jb25jYXQoYXJnVHlwZXMuc2xpY2UoMSkpO3JlcGxhY2VQdWJsaWNTeW1ib2wobmFtZSxjcmFmdEludm9rZXJGdW5jdGlvbihuYW1lLGludm9rZXJBcmdzQXJyYXksbnVsbCxyYXdJbnZva2VyLGZuKSxhcmdDb3VudC0xKTtyZXR1cm5bXX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIocHJpbWl0aXZlVHlwZSxuYW1lLHNpemUsbWluUmFuZ2UsbWF4UmFuZ2Upe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtpZihtYXhSYW5nZT09PS0xKXttYXhSYW5nZT00Mjk0OTY3Mjk1fXZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO3ZhciBmcm9tV2lyZVR5cGU9dmFsdWU9PnZhbHVlO2lmKG1pblJhbmdlPT09MCl7dmFyIGJpdHNoaWZ0PTMyLTgqc2l6ZTtmcm9tV2lyZVR5cGU9dmFsdWU9PnZhbHVlPDxiaXRzaGlmdD4+PmJpdHNoaWZ0fXZhciBpc1Vuc2lnbmVkVHlwZT1uYW1lLmluY2x1ZGVzKFwidW5zaWduZWRcIik7dmFyIGNoZWNrQXNzZXJ0aW9ucz0odmFsdWUsdG9UeXBlTmFtZSk9Pnt9O3ZhciB0b1dpcmVUeXBlO2lmKGlzVW5zaWduZWRUeXBlKXt0b1dpcmVUeXBlPWZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtjaGVja0Fzc2VydGlvbnModmFsdWUsdGhpcy5uYW1lKTtyZXR1cm4gdmFsdWU+Pj4wfX1lbHNle3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZX19cmVnaXN0ZXJUeXBlKHByaW1pdGl2ZVR5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZyb21XaXJlVHlwZSxcInRvV2lyZVR5cGVcIjp0b1dpcmVUeXBlLFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjppbnRlZ2VyUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCxtaW5SYW5nZSE9PTApLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcocmF3VHlwZSxkYXRhVHlwZUluZGV4LG5hbWUpe3ZhciB0eXBlTWFwcGluZz1bSW50OEFycmF5LFVpbnQ4QXJyYXksSW50MTZBcnJheSxVaW50MTZBcnJheSxJbnQzMkFycmF5LFVpbnQzMkFycmF5LEZsb2F0MzJBcnJheSxGbG9hdDY0QXJyYXksQmlnSW50NjRBcnJheSxCaWdVaW50NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXtoYW5kbGU9aGFuZGxlPj4yO3ZhciBoZWFwPUhFQVBVMzI7dmFyIHNpemU9aGVhcFtoYW5kbGVdO3ZhciBkYXRhPWhlYXBbaGFuZGxlKzFdO3JldHVybiBuZXcgVEEoYnVmZmVyLGRhdGEsc2l6ZSl9bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpkZWNvZGVNZW1vcnlWaWV3LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpkZWNvZGVNZW1vcnlWaWV3fSx7aWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9uczp0cnVlfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyhyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgc3RkU3RyaW5nSXNVVEY4PW5hbWU9PT1cInN0ZDo6c3RyaW5nXCI7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBwYXlsb2FkPXZhbHVlKzQ7dmFyIHN0cjtpZihzdGRTdHJpbmdJc1VURjgpe3ZhciBkZWNvZGVTdGFydFB0cj1wYXlsb2FkO2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj1wYXlsb2FkK2k7aWYoaT09bGVuZ3RofHxIRUFQVThbY3VycmVudEJ5dGVQdHJdPT0wKXt2YXIgbWF4UmVhZD1jdXJyZW50Qnl0ZVB0ci1kZWNvZGVTdGFydFB0cjt2YXIgc3RyaW5nU2VnbWVudD1VVEY4VG9TdHJpbmcoZGVjb2RlU3RhcnRQdHIsbWF4UmVhZCk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrMX19fWVsc2V7dmFyIGE9bmV3IEFycmF5KGxlbmd0aCk7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXthW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoSEVBUFU4W3BheWxvYWQraV0pfXN0cj1hLmpvaW4oXCJcIil9X2ZyZWUodmFsdWUpO3JldHVybiBzdHJ9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKXt2YWx1ZT1uZXcgVWludDhBcnJheSh2YWx1ZSl9dmFyIGxlbmd0aDt2YXIgdmFsdWVJc09mVHlwZVN0cmluZz10eXBlb2YgdmFsdWU9PVwic3RyaW5nXCI7aWYoISh2YWx1ZUlzT2ZUeXBlU3RyaW5nfHx2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5KSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nXCIpfWlmKHN0ZFN0cmluZ0lzVVRGOCYmdmFsdWVJc09mVHlwZVN0cmluZyl7bGVuZ3RoPWxlbmd0aEJ5dGVzVVRGOCh2YWx1ZSl9ZWxzZXtsZW5ndGg9dmFsdWUubGVuZ3RofXZhciBiYXNlPV9tYWxsb2MoNCtsZW5ndGgrMSk7dmFyIHB0cj1iYXNlKzQ7SEVBUFUzMltiYXNlPj4yXT1sZW5ndGg7aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtzdHJpbmdUb1VURjgodmFsdWUscHRyLGxlbmd0aCsxKX1lbHNle2lmKHZhbHVlSXNPZlR5cGVTdHJpbmcpe2Zvcih2YXIgaT0wO2k8bGVuZ3RoOysraSl7dmFyIGNoYXJDb2RlPXZhbHVlLmNoYXJDb2RlQXQoaSk7aWYoY2hhckNvZGU+MjU1KXtfZnJlZShwdHIpO3Rocm93QmluZGluZ0Vycm9yKFwiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzXCIpfUhFQVBVOFtwdHIraV09Y2hhckNvZGV9fWVsc2V7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXtIRUFQVThbcHRyK2ldPXZhbHVlW2ldfX19aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLGJhc2UpfXJldHVybiBiYXNlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOmZ1bmN0aW9uKHB0cil7X2ZyZWUocHRyKX19KX12YXIgVVRGMTZEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGYtMTZsZVwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGMTZUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRQdHI9cHRyO3ZhciBpZHg9ZW5kUHRyPj4xO3ZhciBtYXhJZHg9aWR4K21heEJ5dGVzVG9SZWFkLzI7d2hpbGUoIShpZHg+PW1heElkeCkmJkhFQVBVMTZbaWR4XSkrK2lkeDtlbmRQdHI9aWR4PDwxO2lmKGVuZFB0ci1wdHI+MzImJlVURjE2RGVjb2RlcilyZXR1cm4gVVRGMTZEZWNvZGVyLmRlY29kZShIRUFQVTguc3ViYXJyYXkocHRyLGVuZFB0cikpO3ZhciBzdHI9XCJcIjtmb3IodmFyIGk9MDshKGk+PW1heEJ5dGVzVG9SZWFkLzIpOysraSl7dmFyIGNvZGVVbml0PUhFQVAxNltwdHIraSoyPj4xXTtpZihjb2RlVW5pdD09MClicmVhaztzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVVuaXQpfXJldHVybiBzdHJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEYxNihzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7aWYobWF4Qnl0ZXNUb1dyaXRlPT09dW5kZWZpbmVkKXttYXhCeXRlc1RvV3JpdGU9MjE0NzQ4MzY0N31pZihtYXhCeXRlc1RvV3JpdGU8MilyZXR1cm4gMDttYXhCeXRlc1RvV3JpdGUtPTI7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgbnVtQ2hhcnNUb1dyaXRlPW1heEJ5dGVzVG9Xcml0ZTxzdHIubGVuZ3RoKjI/bWF4Qnl0ZXNUb1dyaXRlLzI6c3RyLmxlbmd0aDtmb3IodmFyIGk9MDtpPG51bUNoYXJzVG9Xcml0ZTsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtIRUFQMTZbb3V0UHRyPj4xXT1jb2RlVW5pdDtvdXRQdHIrPTJ9SEVBUDE2W291dFB0cj4+MV09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMTYoc3RyKXtyZXR1cm4gc3RyLmxlbmd0aCoyfWZ1bmN0aW9uIFVURjMyVG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXt2YXIgaT0wO3ZhciBzdHI9XCJcIjt3aGlsZSghKGk+PW1heEJ5dGVzVG9SZWFkLzQpKXt2YXIgdXRmMzI9SEVBUDMyW3B0citpKjQ+PjJdO2lmKHV0ZjMyPT0wKWJyZWFrOysraTtpZih1dGYzMj49NjU1MzYpe3ZhciBjaD11dGYzMi02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHV0ZjMyKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjMyKHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTw0KXJldHVybiAwO3ZhciBzdGFydFB0cj1vdXRQdHI7dmFyIGVuZFB0cj1zdGFydFB0cittYXhCeXRlc1RvV3JpdGUtNDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpe3ZhciB0cmFpbFN1cnJvZ2F0ZT1zdHIuY2hhckNvZGVBdCgrK2kpO2NvZGVVbml0PTY1NTM2KygoY29kZVVuaXQmMTAyMyk8PDEwKXx0cmFpbFN1cnJvZ2F0ZSYxMDIzfUhFQVAzMltvdXRQdHI+PjJdPWNvZGVVbml0O291dFB0cis9NDtpZihvdXRQdHIrND5lbmRQdHIpYnJlYWt9SEVBUDMyW291dFB0cj4+Ml09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMzIoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO2lmKGNvZGVVbml0Pj01NTI5NiYmY29kZVVuaXQ8PTU3MzQzKSsraTtsZW4rPTR9cmV0dXJuIGxlbn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyhyYXdUeXBlLGNoYXJTaXplLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgZGVjb2RlU3RyaW5nLGVuY29kZVN0cmluZyxnZXRIZWFwLGxlbmd0aEJ5dGVzVVRGLHNoaWZ0O2lmKGNoYXJTaXplPT09Mil7ZGVjb2RlU3RyaW5nPVVURjE2VG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMTY7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYxNjtnZXRIZWFwPSgpPT5IRUFQVTE2O3NoaWZ0PTF9ZWxzZSBpZihjaGFyU2l6ZT09PTQpe2RlY29kZVN0cmluZz1VVEYzMlRvU3RyaW5nO2VuY29kZVN0cmluZz1zdHJpbmdUb1VURjMyO2xlbmd0aEJ5dGVzVVRGPWxlbmd0aEJ5dGVzVVRGMzI7Z2V0SGVhcD0oKT0+SEVBUFUzMjtzaGlmdD0yfXJlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7dmFyIGxlbmd0aD1IRUFQVTMyW3ZhbHVlPj4yXTt2YXIgSEVBUD1nZXRIZWFwKCk7dmFyIHN0cjt2YXIgZGVjb2RlU3RhcnRQdHI9dmFsdWUrNDtmb3IodmFyIGk9MDtpPD1sZW5ndGg7KytpKXt2YXIgY3VycmVudEJ5dGVQdHI9dmFsdWUrNCtpKmNoYXJTaXplO2lmKGk9PWxlbmd0aHx8SEVBUFtjdXJyZW50Qnl0ZVB0cj4+c2hpZnRdPT0wKXt2YXIgbWF4UmVhZEJ5dGVzPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PWRlY29kZVN0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkQnl0ZXMpO2lmKHN0cj09PXVuZGVmaW5lZCl7c3RyPXN0cmluZ1NlZ21lbnR9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoMCk7c3RyKz1zdHJpbmdTZWdtZW50fWRlY29kZVN0YXJ0UHRyPWN1cnJlbnRCeXRlUHRyK2NoYXJTaXplfX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKCEodHlwZW9mIHZhbHVlPT1cInN0cmluZ1wiKSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIEMrKyBzdHJpbmcgdHlwZSBcIituYW1lKX12YXIgbGVuZ3RoPWxlbmd0aEJ5dGVzVVRGKHZhbHVlKTt2YXIgcHRyPV9tYWxsb2MoNCtsZW5ndGgrY2hhclNpemUpO0hFQVBVMzJbcHRyPj4yXT1sZW5ndGg+PnNoaWZ0O2VuY29kZVN0cmluZyh2YWx1ZSxwdHIrNCxsZW5ndGgrY2hhclNpemUpO2lmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaChfZnJlZSxwdHIpfXJldHVybiBwdHJ9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3ZhbHVlX2FycmF5KHJhd1R5cGUsbmFtZSxjb25zdHJ1Y3RvclNpZ25hdHVyZSxyYXdDb25zdHJ1Y3RvcixkZXN0cnVjdG9yU2lnbmF0dXJlLHJhd0Rlc3RydWN0b3Ipe3R1cGxlUmVnaXN0cmF0aW9uc1tyYXdUeXBlXT17bmFtZTpyZWFkTGF0aW4xU3RyaW5nKG5hbWUpLHJhd0NvbnN0cnVjdG9yOmVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGNvbnN0cnVjdG9yU2lnbmF0dXJlLHJhd0NvbnN0cnVjdG9yKSxyYXdEZXN0cnVjdG9yOmVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGRlc3RydWN0b3JTaWduYXR1cmUscmF3RGVzdHJ1Y3RvciksZWxlbWVudHM6W119fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3ZhbHVlX2FycmF5X2VsZW1lbnQocmF3VHVwbGVUeXBlLGdldHRlclJldHVyblR5cGUsZ2V0dGVyU2lnbmF0dXJlLGdldHRlcixnZXR0ZXJDb250ZXh0LHNldHRlckFyZ3VtZW50VHlwZSxzZXR0ZXJTaWduYXR1cmUsc2V0dGVyLHNldHRlckNvbnRleHQpe3R1cGxlUmVnaXN0cmF0aW9uc1tyYXdUdXBsZVR5cGVdLmVsZW1lbnRzLnB1c2goe2dldHRlclJldHVyblR5cGU6Z2V0dGVyUmV0dXJuVHlwZSxnZXR0ZXI6ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZ2V0dGVyU2lnbmF0dXJlLGdldHRlciksZ2V0dGVyQ29udGV4dDpnZXR0ZXJDb250ZXh0LHNldHRlckFyZ3VtZW50VHlwZTpzZXR0ZXJBcmd1bWVudFR5cGUsc2V0dGVyOmVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKHNldHRlclNpZ25hdHVyZSxzZXR0ZXIpLHNldHRlckNvbnRleHQ6c2V0dGVyQ29udGV4dH0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQocmF3VHlwZSxuYW1lKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse2lzVm9pZDp0cnVlLG5hbWU6bmFtZSxcImFyZ1BhY2tBZHZhbmNlXCI6MCxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKCl7cmV0dXJuIHVuZGVmaW5lZH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIHVuZGVmaW5lZH19KX12YXIgbm93SXNNb25vdG9uaWM9dHJ1ZTtmdW5jdGlvbiBfX2Vtc2NyaXB0ZW5fZ2V0X25vd19pc19tb25vdG9uaWMoKXtyZXR1cm4gbm93SXNNb25vdG9uaWN9dmFyIGVtdmFsX3N5bWJvbHM9e307ZnVuY3Rpb24gZ2V0U3RyaW5nT3JTeW1ib2woYWRkcmVzcyl7dmFyIHN5bWJvbD1lbXZhbF9zeW1ib2xzW2FkZHJlc3NdO2lmKHN5bWJvbD09PXVuZGVmaW5lZCl7cmV0dXJuIHJlYWRMYXRpbjFTdHJpbmcoYWRkcmVzcyl9cmV0dXJuIHN5bWJvbH12YXIgZW12YWxfbWV0aG9kQ2FsbGVycz1bXTtmdW5jdGlvbiBfX2VtdmFsX2NhbGxfdm9pZF9tZXRob2QoY2FsbGVyLGhhbmRsZSxtZXRob2ROYW1lLGFyZ3Mpe2NhbGxlcj1lbXZhbF9tZXRob2RDYWxsZXJzW2NhbGxlcl07aGFuZGxlPUVtdmFsLnRvVmFsdWUoaGFuZGxlKTttZXRob2ROYW1lPWdldFN0cmluZ09yU3ltYm9sKG1ldGhvZE5hbWUpO2NhbGxlcihoYW5kbGUsbWV0aG9kTmFtZSxudWxsLGFyZ3MpfWZ1bmN0aW9uIGVtdmFsX2FkZE1ldGhvZENhbGxlcihjYWxsZXIpe3ZhciBpZD1lbXZhbF9tZXRob2RDYWxsZXJzLmxlbmd0aDtlbXZhbF9tZXRob2RDYWxsZXJzLnB1c2goY2FsbGVyKTtyZXR1cm4gaWR9ZnVuY3Rpb24gZW12YWxfbG9va3VwVHlwZXMoYXJnQ291bnQsYXJnVHlwZXMpe3ZhciBhPW5ldyBBcnJheShhcmdDb3VudCk7Zm9yKHZhciBpPTA7aTxhcmdDb3VudDsrK2kpe2FbaV09cmVxdWlyZVJlZ2lzdGVyZWRUeXBlKEhFQVBVMzJbYXJnVHlwZXMraSpQT0lOVEVSX1NJWkU+PjJdLFwicGFyYW1ldGVyIFwiK2kpfXJldHVybiBhfXZhciBlbXZhbF9yZWdpc3RlcmVkTWV0aG9kcz1bXTtmdW5jdGlvbiBfX2VtdmFsX2dldF9tZXRob2RfY2FsbGVyKGFyZ0NvdW50LGFyZ1R5cGVzKXt2YXIgdHlwZXM9ZW12YWxfbG9va3VwVHlwZXMoYXJnQ291bnQsYXJnVHlwZXMpO3ZhciByZXRUeXBlPXR5cGVzWzBdO3ZhciBzaWduYXR1cmVOYW1lPXJldFR5cGUubmFtZStcIl8kXCIrdHlwZXMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm5hbWV9KS5qb2luKFwiX1wiKStcIiRcIjt2YXIgcmV0dXJuSWQ9ZW12YWxfcmVnaXN0ZXJlZE1ldGhvZHNbc2lnbmF0dXJlTmFtZV07aWYocmV0dXJuSWQhPT11bmRlZmluZWQpe3JldHVybiByZXR1cm5JZH12YXIgcGFyYW1zPVtcInJldFR5cGVcIl07dmFyIGFyZ3M9W3JldFR5cGVdO3ZhciBhcmdzTGlzdD1cIlwiO2Zvcih2YXIgaT0wO2k8YXJnQ291bnQtMTsrK2kpe2FyZ3NMaXN0Kz0oaSE9PTA/XCIsIFwiOlwiXCIpK1wiYXJnXCIraTtwYXJhbXMucHVzaChcImFyZ1R5cGVcIitpKTthcmdzLnB1c2godHlwZXNbMStpXSl9dmFyIGZ1bmN0aW9uTmFtZT1tYWtlTGVnYWxGdW5jdGlvbk5hbWUoXCJtZXRob2RDYWxsZXJfXCIrc2lnbmF0dXJlTmFtZSk7dmFyIGZ1bmN0aW9uQm9keT1cInJldHVybiBmdW5jdGlvbiBcIitmdW5jdGlvbk5hbWUrXCIoaGFuZGxlLCBuYW1lLCBkZXN0cnVjdG9ycywgYXJncykge1xcblwiO3ZhciBvZmZzZXQ9MDtmb3IodmFyIGk9MDtpPGFyZ0NvdW50LTE7KytpKXtmdW5jdGlvbkJvZHkrPVwiICAgIHZhciBhcmdcIitpK1wiID0gYXJnVHlwZVwiK2krXCIucmVhZFZhbHVlRnJvbVBvaW50ZXIoYXJnc1wiKyhvZmZzZXQ/XCIrXCIrb2Zmc2V0OlwiXCIpK1wiKTtcXG5cIjtvZmZzZXQrPXR5cGVzW2krMV1bXCJhcmdQYWNrQWR2YW5jZVwiXX1mdW5jdGlvbkJvZHkrPVwiICAgIHZhciBydiA9IGhhbmRsZVtuYW1lXShcIithcmdzTGlzdCtcIik7XFxuXCI7Zm9yKHZhciBpPTA7aTxhcmdDb3VudC0xOysraSl7aWYodHlwZXNbaSsxXVtcImRlbGV0ZU9iamVjdFwiXSl7ZnVuY3Rpb25Cb2R5Kz1cIiAgICBhcmdUeXBlXCIraStcIi5kZWxldGVPYmplY3QoYXJnXCIraStcIik7XFxuXCJ9fWlmKCFyZXRUeXBlLmlzVm9pZCl7ZnVuY3Rpb25Cb2R5Kz1cIiAgICByZXR1cm4gcmV0VHlwZS50b1dpcmVUeXBlKGRlc3RydWN0b3JzLCBydik7XFxuXCJ9ZnVuY3Rpb25Cb2R5Kz1cIn07XFxuXCI7cGFyYW1zLnB1c2goZnVuY3Rpb25Cb2R5KTt2YXIgaW52b2tlckZ1bmN0aW9uPW5ld18oRnVuY3Rpb24scGFyYW1zKS5hcHBseShudWxsLGFyZ3MpO3JldHVybklkPWVtdmFsX2FkZE1ldGhvZENhbGxlcihpbnZva2VyRnVuY3Rpb24pO2VtdmFsX3JlZ2lzdGVyZWRNZXRob2RzW3NpZ25hdHVyZU5hbWVdPXJldHVybklkO3JldHVybiByZXR1cm5JZH1mdW5jdGlvbiBfYWJvcnQoKXthYm9ydChcIlwiKX1mdW5jdGlvbiBfZW1zY3JpcHRlbl9kYXRlX25vdygpe3JldHVybiBEYXRlLm5vdygpfWZ1bmN0aW9uIGdldEhlYXBNYXgoKXtyZXR1cm4gMjE0NzQ4MzY0OH1mdW5jdGlvbiBfZW1zY3JpcHRlbl9nZXRfaGVhcF9tYXgoKXtyZXR1cm4gZ2V0SGVhcE1heCgpfXZhciBfZW1zY3JpcHRlbl9nZXRfbm93O19lbXNjcmlwdGVuX2dldF9ub3c9KCk9PnBlcmZvcm1hbmNlLm5vdygpO2Z1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBlbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKHNpemUpe3RyeXt3YXNtTWVtb3J5Lmdyb3coc2l6ZS1idWZmZXIuYnl0ZUxlbmd0aCs2NTUzNT4+PjE2KTt1cGRhdGVHbG9iYWxCdWZmZXJBbmRWaWV3cyh3YXNtTWVtb3J5LmJ1ZmZlcik7cmV0dXJuIDF9Y2F0Y2goZSl7fX1mdW5jdGlvbiBfZW1zY3JpcHRlbl9yZXNpemVfaGVhcChyZXF1ZXN0ZWRTaXplKXt2YXIgb2xkU2l6ZT1IRUFQVTgubGVuZ3RoO3JlcXVlc3RlZFNpemU9cmVxdWVzdGVkU2l6ZT4+PjA7dmFyIG1heEhlYXBTaXplPWdldEhlYXBNYXgoKTtpZihyZXF1ZXN0ZWRTaXplPm1heEhlYXBTaXplKXtyZXR1cm4gZmFsc2V9bGV0IGFsaWduVXA9KHgsbXVsdGlwbGUpPT54KyhtdWx0aXBsZS14JW11bHRpcGxlKSVtdWx0aXBsZTtmb3IodmFyIGN1dERvd249MTtjdXREb3duPD00O2N1dERvd24qPTIpe3ZhciBvdmVyR3Jvd25IZWFwU2l6ZT1vbGRTaXplKigxKy4yL2N1dERvd24pO292ZXJHcm93bkhlYXBTaXplPU1hdGgubWluKG92ZXJHcm93bkhlYXBTaXplLHJlcXVlc3RlZFNpemUrMTAwNjYzMjk2KTt2YXIgbmV3U2l6ZT1NYXRoLm1pbihtYXhIZWFwU2l6ZSxhbGlnblVwKE1hdGgubWF4KHJlcXVlc3RlZFNpemUsb3Zlckdyb3duSGVhcFNpemUpLDY1NTM2KSk7dmFyIHJlcGxhY2VtZW50PWVtc2NyaXB0ZW5fcmVhbGxvY19idWZmZXIobmV3U2l6ZSk7aWYocmVwbGFjZW1lbnQpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9dmFyIHByaW50Q2hhckJ1ZmZlcnM9W251bGwsW10sW11dO2Z1bmN0aW9uIHByaW50Q2hhcihzdHJlYW0sY3Vycil7dmFyIGJ1ZmZlcj1wcmludENoYXJCdWZmZXJzW3N0cmVhbV07aWYoY3Vycj09PTB8fGN1cnI9PT0xMCl7KHN0cmVhbT09PTE/b3V0OmVycikoVVRGOEFycmF5VG9TdHJpbmcoYnVmZmVyLDApKTtidWZmZXIubGVuZ3RoPTB9ZWxzZXtidWZmZXIucHVzaChjdXJyKX19dmFyIFNZU0NBTExTPXt2YXJhcmdzOnVuZGVmaW5lZCxnZXQ6ZnVuY3Rpb24oKXtTWVNDQUxMUy52YXJhcmdzKz00O3ZhciByZXQ9SEVBUDMyW1NZU0NBTExTLnZhcmFyZ3MtND4+Ml07cmV0dXJuIHJldH0sZ2V0U3RyOmZ1bmN0aW9uKHB0cil7dmFyIHJldD1VVEY4VG9TdHJpbmcocHRyKTtyZXR1cm4gcmV0fX07ZnVuY3Rpb24gX2ZkX3dyaXRlKGZkLGlvdixpb3ZjbnQscG51bSl7dmFyIG51bT0wO2Zvcih2YXIgaT0wO2k8aW92Y250O2krKyl7dmFyIHB0cj1IRUFQVTMyW2lvdj4+Ml07dmFyIGxlbj1IRUFQVTMyW2lvdis0Pj4yXTtpb3YrPTg7Zm9yKHZhciBqPTA7ajxsZW47aisrKXtwcmludENoYXIoZmQsSEVBUFU4W3B0citqXSl9bnVtKz1sZW59SEVBUFUzMltwbnVtPj4yXT1udW07cmV0dXJuIDB9ZnVuY3Rpb24gX3Byb2NfZXhpdChjb2RlKXtFWElUU1RBVFVTPWNvZGU7aWYoIWtlZXBSdW50aW1lQWxpdmUoKSl7aWYoTW9kdWxlW1wib25FeGl0XCJdKU1vZHVsZVtcIm9uRXhpdFwiXShjb2RlKTtBQk9SVD10cnVlfXF1aXRfKGNvZGUsbmV3IEV4aXRTdGF0dXMoY29kZSkpfWZ1bmN0aW9uIGV4aXRKUyhzdGF0dXMsaW1wbGljaXQpe0VYSVRTVEFUVVM9c3RhdHVzO19wcm9jX2V4aXQoc3RhdHVzKX1JbnRlcm5hbEVycm9yPU1vZHVsZVtcIkludGVybmFsRXJyb3JcIl09ZXh0ZW5kRXJyb3IoRXJyb3IsXCJJbnRlcm5hbEVycm9yXCIpO2VtYmluZF9pbml0X2NoYXJDb2RlcygpO0JpbmRpbmdFcnJvcj1Nb2R1bGVbXCJCaW5kaW5nRXJyb3JcIl09ZXh0ZW5kRXJyb3IoRXJyb3IsXCJCaW5kaW5nRXJyb3JcIik7aW5pdF9lbXZhbCgpO1VuYm91bmRUeXBlRXJyb3I9TW9kdWxlW1wiVW5ib3VuZFR5cGVFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIlVuYm91bmRUeXBlRXJyb3JcIik7dmFyIGFzbUxpYnJhcnlBcmc9e1wiX2VtYmluZF9maW5hbGl6ZV92YWx1ZV9hcnJheVwiOl9fZW1iaW5kX2ZpbmFsaXplX3ZhbHVlX2FycmF5LFwiX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnRcIjpfX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnQsXCJfZW1iaW5kX3JlZ2lzdGVyX2Jvb2xcIjpfX2VtYmluZF9yZWdpc3Rlcl9ib29sLFwiX2VtYmluZF9yZWdpc3Rlcl9lbXZhbFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsLFwiX2VtYmluZF9yZWdpc3Rlcl9lbnVtXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW51bSxcIl9lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZVwiOl9fZW1iaW5kX3JlZ2lzdGVyX2VudW1fdmFsdWUsXCJfZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0XCI6X19lbWJpbmRfcmVnaXN0ZXJfZmxvYXQsXCJfZW1iaW5kX3JlZ2lzdGVyX2Z1bmN0aW9uXCI6X19lbWJpbmRfcmVnaXN0ZXJfZnVuY3Rpb24sXCJfZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXJcIjpfX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyLFwiX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlld1wiOl9fZW1iaW5kX3JlZ2lzdGVyX21lbW9yeV92aWV3LFwiX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nXCI6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxcIl9lbWJpbmRfcmVnaXN0ZXJfc3RkX3dzdHJpbmdcIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyxcIl9lbWJpbmRfcmVnaXN0ZXJfdmFsdWVfYXJyYXlcIjpfX2VtYmluZF9yZWdpc3Rlcl92YWx1ZV9hcnJheSxcIl9lbWJpbmRfcmVnaXN0ZXJfdmFsdWVfYXJyYXlfZWxlbWVudFwiOl9fZW1iaW5kX3JlZ2lzdGVyX3ZhbHVlX2FycmF5X2VsZW1lbnQsXCJfZW1iaW5kX3JlZ2lzdGVyX3ZvaWRcIjpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLFwiX2Vtc2NyaXB0ZW5fZ2V0X25vd19pc19tb25vdG9uaWNcIjpfX2Vtc2NyaXB0ZW5fZ2V0X25vd19pc19tb25vdG9uaWMsXCJfZW12YWxfY2FsbF92b2lkX21ldGhvZFwiOl9fZW12YWxfY2FsbF92b2lkX21ldGhvZCxcIl9lbXZhbF9kZWNyZWZcIjpfX2VtdmFsX2RlY3JlZixcIl9lbXZhbF9nZXRfbWV0aG9kX2NhbGxlclwiOl9fZW12YWxfZ2V0X21ldGhvZF9jYWxsZXIsXCJhYm9ydFwiOl9hYm9ydCxcImVtc2NyaXB0ZW5fZGF0ZV9ub3dcIjpfZW1zY3JpcHRlbl9kYXRlX25vdyxcImVtc2NyaXB0ZW5fZ2V0X2hlYXBfbWF4XCI6X2Vtc2NyaXB0ZW5fZ2V0X2hlYXBfbWF4LFwiZW1zY3JpcHRlbl9nZXRfbm93XCI6X2Vtc2NyaXB0ZW5fZ2V0X25vdyxcImVtc2NyaXB0ZW5fbWVtY3B5X2JpZ1wiOl9lbXNjcmlwdGVuX21lbWNweV9iaWcsXCJlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwXCI6X2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAsXCJmZF93cml0ZVwiOl9mZF93cml0ZX07dmFyIGFzbT1jcmVhdGVXYXNtKCk7dmFyIF9fX3dhc21fY2FsbF9jdG9ycz1Nb2R1bGVbXCJfX193YXNtX2NhbGxfY3RvcnNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcIl9fX3dhc21fY2FsbF9jdG9yc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJfX3dhc21fY2FsbF9jdG9yc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0dldFN0YXRpc3RpY3M9TW9kdWxlW1wiX0hQX0dldFN0YXRpc3RpY3NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0dldFN0YXRpc3RpY3M9TW9kdWxlW1wiX0hQX0dldFN0YXRpc3RpY3NcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfR2V0U3RhdGlzdGljc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZVNwaGVyZT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlU3BoZXJlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVTcGhlcmU9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZVNwaGVyZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVTcGhlcmVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVDYXBzdWxlPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDYXBzdWxlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVDYXBzdWxlPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDYXBzdWxlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUNhcHN1bGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVDeWxpbmRlcj1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlQ3lsaW5kZXJcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUN5bGluZGVyPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDeWxpbmRlclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVDeWxpbmRlclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUJveD1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlQm94XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVCb3g9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUJveFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVCb3hcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVDb252ZXhIdWxsPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDb252ZXhIdWxsXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVDb252ZXhIdWxsPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDb252ZXhIdWxsXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUNvbnZleEh1bGxcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVNZXNoPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVNZXNoXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVNZXNoPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVNZXNoXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZU1lc2hcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVIZWlnaHRGaWVsZD1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlSGVpZ2h0RmllbGRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUhlaWdodEZpZWxkPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVIZWlnaHRGaWVsZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVIZWlnaHRGaWVsZFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUNvbnRhaW5lcj1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlQ29udGFpbmVyXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVDb250YWluZXI9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUNvbnRhaW5lclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVDb250YWluZXJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9TaGFwZV9SZWxlYXNlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9TaGFwZV9SZWxlYXNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1JlbGVhc2VcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9HZXRUeXBlPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRUeXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXRUeXBlPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRUeXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0dldFR5cGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9BZGRDaGlsZD1Nb2R1bGVbXCJfSFBfU2hhcGVfQWRkQ2hpbGRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0FkZENoaWxkPU1vZHVsZVtcIl9IUF9TaGFwZV9BZGRDaGlsZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9BZGRDaGlsZFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX1JlbW92ZUNoaWxkPU1vZHVsZVtcIl9IUF9TaGFwZV9SZW1vdmVDaGlsZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfUmVtb3ZlQ2hpbGQ9TW9kdWxlW1wiX0hQX1NoYXBlX1JlbW92ZUNoaWxkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1JlbW92ZUNoaWxkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfR2V0TnVtQ2hpbGRyZW49TW9kdWxlW1wiX0hQX1NoYXBlX0dldE51bUNoaWxkcmVuXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXROdW1DaGlsZHJlbj1Nb2R1bGVbXCJfSFBfU2hhcGVfR2V0TnVtQ2hpbGRyZW5cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfR2V0TnVtQ2hpbGRyZW5cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9TZXRDaGlsZFFTVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRDaGlsZFFTVHJhbnNmb3JtXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9TZXRDaGlsZFFTVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRDaGlsZFFTVHJhbnNmb3JtXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1NldENoaWxkUVNUcmFuc2Zvcm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9HZXRDaGlsZFFTVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRDaGlsZFFTVHJhbnNmb3JtXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXRDaGlsZFFTVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRDaGlsZFFTVHJhbnNmb3JtXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0dldENoaWxkUVNUcmFuc2Zvcm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9TZXRGaWx0ZXJJbmZvPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRGaWx0ZXJJbmZvXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9TZXRGaWx0ZXJJbmZvPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRGaWx0ZXJJbmZvXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1NldEZpbHRlckluZm9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9HZXRGaWx0ZXJJbmZvPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRGaWx0ZXJJbmZvXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXRGaWx0ZXJJbmZvPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRGaWx0ZXJJbmZvXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0dldEZpbHRlckluZm9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9TZXRNYXRlcmlhbD1Nb2R1bGVbXCJfSFBfU2hhcGVfU2V0TWF0ZXJpYWxcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX1NldE1hdGVyaWFsPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRNYXRlcmlhbFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9TZXRNYXRlcmlhbFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0dldE1hdGVyaWFsPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXRNYXRlcmlhbFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfR2V0TWF0ZXJpYWw9TW9kdWxlW1wiX0hQX1NoYXBlX0dldE1hdGVyaWFsXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0dldE1hdGVyaWFsXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfU2V0RGVuc2l0eT1Nb2R1bGVbXCJfSFBfU2hhcGVfU2V0RGVuc2l0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfU2V0RGVuc2l0eT1Nb2R1bGVbXCJfSFBfU2hhcGVfU2V0RGVuc2l0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9TZXREZW5zaXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfR2V0RGVuc2l0eT1Nb2R1bGVbXCJfSFBfU2hhcGVfR2V0RGVuc2l0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfR2V0RGVuc2l0eT1Nb2R1bGVbXCJfSFBfU2hhcGVfR2V0RGVuc2l0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9HZXREZW5zaXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQ2FzdFJheT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ2FzdFJheVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfQ2FzdFJheT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ2FzdFJheVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DYXN0UmF5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQnVpbGRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfU2hhcGVfQnVpbGRNYXNzUHJvcGVydGllc1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfQnVpbGRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfU2hhcGVfQnVpbGRNYXNzUHJvcGVydGllc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9CdWlsZE1hc3NQcm9wZXJ0aWVzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVQYXRoSXRlcmF0b3JfR2V0TmV4dD1Nb2R1bGVbXCJfSFBfU2hhcGVQYXRoSXRlcmF0b3JfR2V0TmV4dFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVQYXRoSXRlcmF0b3JfR2V0TmV4dD1Nb2R1bGVbXCJfSFBfU2hhcGVQYXRoSXRlcmF0b3JfR2V0TmV4dFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZVBhdGhJdGVyYXRvcl9HZXROZXh0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfU2V0VHJpZ2dlcj1Nb2R1bGVbXCJfSFBfU2hhcGVfU2V0VHJpZ2dlclwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfU2V0VHJpZ2dlcj1Nb2R1bGVbXCJfSFBfU2hhcGVfU2V0VHJpZ2dlclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9TZXRUcmlnZ2VyXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQ3JlYXRlRGVidWdEaXNwbGF5R2VvbWV0cnk9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZURlYnVnRGlzcGxheUdlb21ldHJ5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DcmVhdGVEZWJ1Z0Rpc3BsYXlHZW9tZXRyeT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlRGVidWdEaXNwbGF5R2VvbWV0cnlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfQ3JlYXRlRGVidWdEaXNwbGF5R2VvbWV0cnlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9EZWJ1Z0dlb21ldHJ5X0dldEluZm89TW9kdWxlW1wiX0hQX0RlYnVnR2VvbWV0cnlfR2V0SW5mb1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfRGVidWdHZW9tZXRyeV9HZXRJbmZvPU1vZHVsZVtcIl9IUF9EZWJ1Z0dlb21ldHJ5X0dldEluZm9cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfRGVidWdHZW9tZXRyeV9HZXRJbmZvXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfRGVidWdHZW9tZXRyeV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9EZWJ1Z0dlb21ldHJ5X1JlbGVhc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0RlYnVnR2VvbWV0cnlfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfRGVidWdHZW9tZXRyeV9SZWxlYXNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0RlYnVnR2VvbWV0cnlfUmVsZWFzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfQ3JlYXRlPU1vZHVsZVtcIl9IUF9Cb2R5X0NyZWF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9DcmVhdGU9TW9kdWxlW1wiX0hQX0JvZHlfQ3JlYXRlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfQ3JlYXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9Cb2R5X1JlbGVhc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfQm9keV9SZWxlYXNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfUmVsZWFzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0U2hhcGU9TW9kdWxlW1wiX0hQX0JvZHlfU2V0U2hhcGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0U2hhcGU9TW9kdWxlW1wiX0hQX0JvZHlfU2V0U2hhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRTaGFwZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0U2hhcGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0U2hhcGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0U2hhcGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0U2hhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRTaGFwZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0TW90aW9uVHlwZT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRNb3Rpb25UeXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldE1vdGlvblR5cGU9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TW90aW9uVHlwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldE1vdGlvblR5cGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldE1vdGlvblR5cGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TW90aW9uVHlwZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRNb3Rpb25UeXBlPU1vZHVsZVtcIl9IUF9Cb2R5X0dldE1vdGlvblR5cGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRNb3Rpb25UeXBlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRFdmVudE1hc2s9TW9kdWxlW1wiX0hQX0JvZHlfU2V0RXZlbnRNYXNrXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldEV2ZW50TWFzaz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRFdmVudE1hc2tcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRFdmVudE1hc2tcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldEV2ZW50TWFzaz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRFdmVudE1hc2tcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0RXZlbnRNYXNrPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEV2ZW50TWFza1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldEV2ZW50TWFza1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0TWFzc1Byb3BlcnRpZXM9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TWFzc1Byb3BlcnRpZXNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0TWFzc1Byb3BlcnRpZXM9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TWFzc1Byb3BlcnRpZXNcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRNYXNzUHJvcGVydGllc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0TWFzc1Byb3BlcnRpZXM9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TWFzc1Byb3BlcnRpZXNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0TWFzc1Byb3BlcnRpZXM9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TWFzc1Byb3BlcnRpZXNcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRNYXNzUHJvcGVydGllc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0TGluZWFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRMaW5lYXJEYW1waW5nXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldExpbmVhckRhbXBpbmc9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TGluZWFyRGFtcGluZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldExpbmVhckRhbXBpbmdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldExpbmVhckRhbXBpbmc9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TGluZWFyRGFtcGluZ1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRMaW5lYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X0dldExpbmVhckRhbXBpbmdcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRMaW5lYXJEYW1waW5nXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRBbmd1bGFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBbmd1bGFyRGFtcGluZ1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRBbmd1bGFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBbmd1bGFyRGFtcGluZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldEFuZ3VsYXJEYW1waW5nXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRBbmd1bGFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRBbmd1bGFyRGFtcGluZ1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRBbmd1bGFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRBbmd1bGFyRGFtcGluZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldEFuZ3VsYXJEYW1waW5nXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRHcmF2aXR5RmFjdG9yPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEdyYXZpdHlGYWN0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0R3Jhdml0eUZhY3Rvcj1Nb2R1bGVbXCJfSFBfQm9keV9TZXRHcmF2aXR5RmFjdG9yXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0R3Jhdml0eUZhY3RvclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0R3Jhdml0eUZhY3Rvcj1Nb2R1bGVbXCJfSFBfQm9keV9HZXRHcmF2aXR5RmFjdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldEdyYXZpdHlGYWN0b3I9TW9kdWxlW1wiX0hQX0JvZHlfR2V0R3Jhdml0eUZhY3RvclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldEdyYXZpdHlGYWN0b3JcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldFdvcmxkPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFdvcmxkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldFdvcmxkPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFdvcmxkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0V29ybGRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldFBvc2l0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X1NldFBvc2l0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldFBvc2l0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X1NldFBvc2l0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0UG9zaXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldFBvc2l0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFBvc2l0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldFBvc2l0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFBvc2l0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0UG9zaXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldE9yaWVudGF0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X1NldE9yaWVudGF0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldE9yaWVudGF0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X1NldE9yaWVudGF0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0T3JpZW50YXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldE9yaWVudGF0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X0dldE9yaWVudGF0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldE9yaWVudGF0aW9uPU1vZHVsZVtcIl9IUF9Cb2R5X0dldE9yaWVudGF0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0T3JpZW50YXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldFFUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX0JvZHlfU2V0UVRyYW5zZm9ybVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRRVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9Cb2R5X1NldFFUcmFuc2Zvcm1cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRRVHJhbnNmb3JtXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRXb3JsZFRyYW5zZm9ybU9mZnNldD1Nb2R1bGVbXCJfSFBfQm9keV9HZXRXb3JsZFRyYW5zZm9ybU9mZnNldFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRXb3JsZFRyYW5zZm9ybU9mZnNldD1Nb2R1bGVbXCJfSFBfQm9keV9HZXRXb3JsZFRyYW5zZm9ybU9mZnNldFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldFdvcmxkVHJhbnNmb3JtT2Zmc2V0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRRVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFFUcmFuc2Zvcm1cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0UVRyYW5zZm9ybT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRRVHJhbnNmb3JtXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0UVRyYW5zZm9ybVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0TGluZWFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TGluZWFyVmVsb2NpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0TGluZWFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfU2V0TGluZWFyVmVsb2NpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRMaW5lYXJWZWxvY2l0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0TGluZWFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TGluZWFyVmVsb2NpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0TGluZWFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TGluZWFyVmVsb2NpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRMaW5lYXJWZWxvY2l0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0QW5ndWxhclZlbG9jaXR5PU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFuZ3VsYXJWZWxvY2l0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRBbmd1bGFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfU2V0QW5ndWxhclZlbG9jaXR5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0QW5ndWxhclZlbG9jaXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRBbmd1bGFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfR2V0QW5ndWxhclZlbG9jaXR5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldEFuZ3VsYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRBbmd1bGFyVmVsb2NpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRBbmd1bGFyVmVsb2NpdHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0FwcGx5SW1wdWxzZT1Nb2R1bGVbXCJfSFBfQm9keV9BcHBseUltcHVsc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfQXBwbHlJbXB1bHNlPU1vZHVsZVtcIl9IUF9Cb2R5X0FwcGx5SW1wdWxzZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0FwcGx5SW1wdWxzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0VGFyZ2V0UVRyYW5zZm9ybT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRUYXJnZXRRVHJhbnNmb3JtXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldFRhcmdldFFUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX0JvZHlfU2V0VGFyZ2V0UVRyYW5zZm9ybVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldFRhcmdldFFUcmFuc2Zvcm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEFjdGl2YXRpb25TdGF0ZT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBY3RpdmF0aW9uU3RhdGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0QWN0aXZhdGlvblN0YXRlPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFjdGl2YXRpb25TdGF0ZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldEFjdGl2YXRpb25TdGF0ZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0QWN0aXZhdGlvblN0YXRlPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEFjdGl2YXRpb25TdGF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRBY3RpdmF0aW9uU3RhdGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0QWN0aXZhdGlvblN0YXRlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0QWN0aXZhdGlvblN0YXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRBY3RpdmF0aW9uQ29udHJvbD1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBY3RpdmF0aW9uQ29udHJvbFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRBY3RpdmF0aW9uQ29udHJvbD1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBY3RpdmF0aW9uQ29udHJvbFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldEFjdGl2YXRpb25Db250cm9sXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRBY3RpdmF0aW9uUHJpb3JpdHk9TW9kdWxlW1wiX0hQX0JvZHlfU2V0QWN0aXZhdGlvblByaW9yaXR5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldEFjdGl2YXRpb25Qcmlvcml0eT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBY3RpdmF0aW9uUHJpb3JpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRBY3RpdmF0aW9uUHJpb3JpdHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0NyZWF0ZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9DcmVhdGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfQ3JlYXRlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0NyZWF0ZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0NyZWF0ZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9SZWxlYXNlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1JlbGVhc2U9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfUmVsZWFzZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1JlbGVhc2VcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldFBhcmVudEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0UGFyZW50Qm9keVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRQYXJlbnRCb2R5PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldFBhcmVudEJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRQYXJlbnRCb2R5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRQYXJlbnRCb2R5PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldFBhcmVudEJvZHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0UGFyZW50Qm9keT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRQYXJlbnRCb2R5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0UGFyZW50Qm9keVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0Q2hpbGRCb2R5PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldENoaWxkQm9keVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRDaGlsZEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0Q2hpbGRCb2R5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0Q2hpbGRCb2R5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRDaGlsZEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0Q2hpbGRCb2R5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldENoaWxkQm9keT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRDaGlsZEJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRDaGlsZEJvZHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEFuY2hvckluUGFyZW50PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEFuY2hvckluUGFyZW50XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEFuY2hvckluUGFyZW50PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEFuY2hvckluUGFyZW50XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5QYXJlbnRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEFuY2hvckluQ2hpbGQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5DaGlsZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBbmNob3JJbkNoaWxkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEFuY2hvckluQ2hpbGRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBbmNob3JJbkNoaWxkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRDb2xsaXNpb25zRW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRDb2xsaXNpb25zRW5hYmxlZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRDb2xsaXNpb25zRW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRDb2xsaXNpb25zRW5hYmxlZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldENvbGxpc2lvbnNFbmFibGVkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRDb2xsaXNpb25zRW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRDb2xsaXNpb25zRW5hYmxlZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRDb2xsaXNpb25zRW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRDb2xsaXNpb25zRW5hYmxlZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldENvbGxpc2lvbnNFbmFibGVkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEVuYWJsZWRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0RW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRFbmFibGVkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0RW5hYmxlZFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfR2V0RW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRFbmFibGVkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldEVuYWJsZWQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0RW5hYmxlZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldEVuYWJsZWRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNNaW5MaW1pdD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTWluTGltaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01pbkxpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNaW5MaW1pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNNaW5MaW1pdFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01pbkxpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNaW5MaW1pdFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRBeGlzTWluTGltaXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01pbkxpbWl0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0QXhpc01pbkxpbWl0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRBeGlzTWF4TGltaXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01heExpbWl0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNNYXhMaW1pdD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTWF4TGltaXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzTWF4TGltaXRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldEF4aXNNYXhMaW1pdD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTWF4TGltaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01heExpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNYXhMaW1pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldEF4aXNNYXhMaW1pdFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vZGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vZGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vZGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vZGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzTW9kZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vZGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vZGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vZGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vZGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzTW9kZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc0ZyaWN0aW9uPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNGcmljdGlvblwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzRnJpY3Rpb249TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc0ZyaWN0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QXhpc0ZyaWN0aW9uXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRBeGlzRnJpY3Rpb249TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc0ZyaWN0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldEF4aXNGcmljdGlvbj1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzRnJpY3Rpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzRnJpY3Rpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclR5cGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVHlwZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUeXBlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclR5cGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUeXBlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUeXBlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclR5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yVHlwZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUeXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yVHlwZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVGFyZ2V0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclRhcmdldFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUYXJnZXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVGFyZ2V0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVGFyZ2V0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUYXJnZXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yVGFyZ2V0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclRhcmdldD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUYXJnZXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUYXJnZXRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNNb3Rvck1heEZvcmNlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNb3Rvck1heEZvcmNlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNNb3Rvck1heEZvcmNlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNb3Rvck1heEZvcmNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yTWF4Rm9yY2VcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldEF4aXNNb3Rvck1heEZvcmNlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNb3Rvck1heEZvcmNlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldEF4aXNNb3Rvck1heEZvcmNlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNb3Rvck1heEZvcmNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yTWF4Rm9yY2VcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNTdGlmZm5lc3M9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc1N0aWZmbmVzc1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzU3RpZmZuZXNzPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNTdGlmZm5lc3NcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzU3RpZmZuZXNzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRBeGlzRGFtcGluZz1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzRGFtcGluZ1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzRGFtcGluZz1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzRGFtcGluZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNEYW1waW5nXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfQ3JlYXRlPU1vZHVsZVtcIl9IUF9Xb3JsZF9DcmVhdGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0NyZWF0ZT1Nb2R1bGVbXCJfSFBfV29ybGRfQ3JlYXRlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1dvcmxkX0NyZWF0ZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX1JlbGVhc2U9TW9kdWxlW1wiX0hQX1dvcmxkX1JlbGVhc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX1JlbGVhc2U9TW9kdWxlW1wiX0hQX1dvcmxkX1JlbGVhc2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfUmVsZWFzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0dldEJvZHlCdWZmZXI9TW9kdWxlW1wiX0hQX1dvcmxkX0dldEJvZHlCdWZmZXJcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0dldEJvZHlCdWZmZXI9TW9kdWxlW1wiX0hQX1dvcmxkX0dldEJvZHlCdWZmZXJcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfR2V0Qm9keUJ1ZmZlclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX1NldEdyYXZpdHk9TW9kdWxlW1wiX0hQX1dvcmxkX1NldEdyYXZpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX1NldEdyYXZpdHk9TW9kdWxlW1wiX0hQX1dvcmxkX1NldEdyYXZpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfU2V0R3Jhdml0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0dldEdyYXZpdHk9TW9kdWxlW1wiX0hQX1dvcmxkX0dldEdyYXZpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0dldEdyYXZpdHk9TW9kdWxlW1wiX0hQX1dvcmxkX0dldEdyYXZpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfR2V0R3Jhdml0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0FkZEJvZHk9TW9kdWxlW1wiX0hQX1dvcmxkX0FkZEJvZHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0FkZEJvZHk9TW9kdWxlW1wiX0hQX1dvcmxkX0FkZEJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfQWRkQm9keVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX1JlbW92ZUJvZHk9TW9kdWxlW1wiX0hQX1dvcmxkX1JlbW92ZUJvZHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX1JlbW92ZUJvZHk9TW9kdWxlW1wiX0hQX1dvcmxkX1JlbW92ZUJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfUmVtb3ZlQm9keVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0dldE51bUJvZGllcz1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0TnVtQm9kaWVzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Xb3JsZF9HZXROdW1Cb2RpZXM9TW9kdWxlW1wiX0hQX1dvcmxkX0dldE51bUJvZGllc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9HZXROdW1Cb2RpZXNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Xb3JsZF9DYXN0UmF5V2l0aENvbGxlY3Rvcj1Nb2R1bGVbXCJfSFBfV29ybGRfQ2FzdFJheVdpdGhDb2xsZWN0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0Nhc3RSYXlXaXRoQ29sbGVjdG9yPU1vZHVsZVtcIl9IUF9Xb3JsZF9DYXN0UmF5V2l0aENvbGxlY3RvclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9DYXN0UmF5V2l0aENvbGxlY3RvclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX1N0ZXA9TW9kdWxlW1wiX0hQX1dvcmxkX1N0ZXBcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX1N0ZXA9TW9kdWxlW1wiX0hQX1dvcmxkX1N0ZXBcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfU3RlcFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX1NldElkZWFsU3RlcFRpbWU9TW9kdWxlW1wiX0hQX1dvcmxkX1NldElkZWFsU3RlcFRpbWVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX1NldElkZWFsU3RlcFRpbWU9TW9kdWxlW1wiX0hQX1dvcmxkX1NldElkZWFsU3RlcFRpbWVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfU2V0SWRlYWxTdGVwVGltZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0dldE5leHRDb2xsaXNpb25FdmVudD1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0TmV4dENvbGxpc2lvbkV2ZW50XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Xb3JsZF9HZXROZXh0Q29sbGlzaW9uRXZlbnQ9TW9kdWxlW1wiX0hQX1dvcmxkX0dldE5leHRDb2xsaXNpb25FdmVudFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9HZXROZXh0Q29sbGlzaW9uRXZlbnRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Xb3JsZF9HZXROZXh0VHJpZ2dlckV2ZW50PU1vZHVsZVtcIl9IUF9Xb3JsZF9HZXROZXh0VHJpZ2dlckV2ZW50XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Xb3JsZF9HZXROZXh0VHJpZ2dlckV2ZW50PU1vZHVsZVtcIl9IUF9Xb3JsZF9HZXROZXh0VHJpZ2dlckV2ZW50XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1dvcmxkX0dldE5leHRUcmlnZ2VyRXZlbnRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9RdWVyeUNvbGxlY3Rvcl9DcmVhdGU9TW9kdWxlW1wiX0hQX1F1ZXJ5Q29sbGVjdG9yX0NyZWF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfUXVlcnlDb2xsZWN0b3JfQ3JlYXRlPU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9DcmVhdGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfUXVlcnlDb2xsZWN0b3JfQ3JlYXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfUXVlcnlDb2xsZWN0b3JfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfUmVsZWFzZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfUXVlcnlDb2xsZWN0b3JfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfUmVsZWFzZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9RdWVyeUNvbGxlY3Rvcl9SZWxlYXNlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfUXVlcnlDb2xsZWN0b3JfR2V0TnVtSGl0cz1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfR2V0TnVtSGl0c1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfUXVlcnlDb2xsZWN0b3JfR2V0TnVtSGl0cz1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfR2V0TnVtSGl0c1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9RdWVyeUNvbGxlY3Rvcl9HZXROdW1IaXRzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfUXVlcnlDb2xsZWN0b3JfR2V0Q2FzdFJheVJlc3VsdD1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfR2V0Q2FzdFJheVJlc3VsdFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfUXVlcnlDb2xsZWN0b3JfR2V0Q2FzdFJheVJlc3VsdD1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfR2V0Q2FzdFJheVJlc3VsdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9RdWVyeUNvbGxlY3Rvcl9HZXRDYXN0UmF5UmVzdWx0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfbWFpbj1Nb2R1bGVbXCJfbWFpblwiXT1mdW5jdGlvbigpe3JldHVybihfbWFpbj1Nb2R1bGVbXCJfbWFpblwiXT1Nb2R1bGVbXCJhc21cIl1bXCJtYWluXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfbWFsbG9jPU1vZHVsZVtcIl9tYWxsb2NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX21hbGxvYz1Nb2R1bGVbXCJfbWFsbG9jXCJdPU1vZHVsZVtcImFzbVwiXVtcIm1hbGxvY1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX2ZyZWU9TW9kdWxlW1wiX2ZyZWVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX2ZyZWU9TW9kdWxlW1wiX2ZyZWVcIl09TW9kdWxlW1wiYXNtXCJdW1wiZnJlZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0RlYnVnX1N0YXJ0UmVjb3JkaW5nU3RhdHM9TW9kdWxlW1wiX0hQX0RlYnVnX1N0YXJ0UmVjb3JkaW5nU3RhdHNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0RlYnVnX1N0YXJ0UmVjb3JkaW5nU3RhdHM9TW9kdWxlW1wiX0hQX0RlYnVnX1N0YXJ0UmVjb3JkaW5nU3RhdHNcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfRGVidWdfU3RhcnRSZWNvcmRpbmdTdGF0c1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0RlYnVnX1N0b3BSZWNvcmRpbmdTdGF0cz1Nb2R1bGVbXCJfSFBfRGVidWdfU3RvcFJlY29yZGluZ1N0YXRzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9EZWJ1Z19TdG9wUmVjb3JkaW5nU3RhdHM9TW9kdWxlW1wiX0hQX0RlYnVnX1N0b3BSZWNvcmRpbmdTdGF0c1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9EZWJ1Z19TdG9wUmVjb3JkaW5nU3RhdHNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcIl9fX2Vycm5vX2xvY2F0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcIl9fX2Vycm5vX2xvY2F0aW9uXCJdPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9odG9ucz1Nb2R1bGVbXCJfaHRvbnNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX2h0b25zPU1vZHVsZVtcIl9odG9uc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJodG9uc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX250b2hzPU1vZHVsZVtcIl9udG9oc1wiXT1mdW5jdGlvbigpe3JldHVybihfbnRvaHM9TW9kdWxlW1wiX250b2hzXCJdPU1vZHVsZVtcImFzbVwiXVtcIm50b2hzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19nZXRUeXBlTmFtZT1Nb2R1bGVbXCJfX19nZXRUeXBlTmFtZVwiXT1mdW5jdGlvbigpe3JldHVybihfX19nZXRUeXBlTmFtZT1Nb2R1bGVbXCJfX19nZXRUeXBlTmFtZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJfX2dldFR5cGVOYW1lXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPU1vZHVsZVtcIl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPU1vZHVsZVtcImFzbVwiXVtcIl9lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5nc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX2h0b25sPU1vZHVsZVtcIl9odG9ubFwiXT1mdW5jdGlvbigpe3JldHVybihfaHRvbmw9TW9kdWxlW1wiX2h0b25sXCJdPU1vZHVsZVtcImFzbVwiXVtcImh0b25sXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc2V0VGhyZXc9TW9kdWxlW1wiX3NldFRocmV3XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zZXRUaHJldz1Nb2R1bGVbXCJfc2V0VGhyZXdcIl09TW9kdWxlW1wiYXNtXCJdW1wic2V0VGhyZXdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zYXZlU2V0am1wPU1vZHVsZVtcIl9zYXZlU2V0am1wXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zYXZlU2V0am1wPU1vZHVsZVtcIl9zYXZlU2V0am1wXCJdPU1vZHVsZVtcImFzbVwiXVtcInNhdmVTZXRqbXBcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrU2F2ZT1Nb2R1bGVbXCJzdGFja1NhdmVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tTYXZlPU1vZHVsZVtcInN0YWNrU2F2ZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJzdGFja1NhdmVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrUmVzdG9yZT1Nb2R1bGVbXCJzdGFja1Jlc3RvcmVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tSZXN0b3JlPU1vZHVsZVtcInN0YWNrUmVzdG9yZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJzdGFja1Jlc3RvcmVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrQWxsb2M9TW9kdWxlW1wic3RhY2tBbGxvY1wiXT1mdW5jdGlvbigpe3JldHVybihzdGFja0FsbG9jPU1vZHVsZVtcInN0YWNrQWxsb2NcIl09TW9kdWxlW1wiYXNtXCJdW1wic3RhY2tBbGxvY1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgY2FsbGVkUnVuO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1mdW5jdGlvbiBydW5DYWxsZXIoKXtpZighY2FsbGVkUnVuKXJ1bigpO2lmKCFjYWxsZWRSdW4pZGVwZW5kZW5jaWVzRnVsZmlsbGVkPXJ1bkNhbGxlcn07ZnVuY3Rpb24gY2FsbE1haW4oYXJncyl7dmFyIGVudHJ5RnVuY3Rpb249TW9kdWxlW1wiX21haW5cIl07dmFyIGFyZ2M9MDt2YXIgYXJndj0wO3RyeXt2YXIgcmV0PWVudHJ5RnVuY3Rpb24oYXJnYyxhcmd2KTtleGl0SlMocmV0LHRydWUpO3JldHVybiByZXR9Y2F0Y2goZSl7cmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihlKX19ZnVuY3Rpb24gcnVuKGFyZ3Mpe2FyZ3M9YXJnc3x8YXJndW1lbnRzXztpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3ByZU1haW4oKTtyZWFkeVByb21pc2VSZXNvbHZlKE1vZHVsZSk7aWYoTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0pTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0oKTtpZihzaG91bGRSdW5Ob3cpY2FsbE1haW4oYXJncyk7cG9zdFJ1bigpfWlmKE1vZHVsZVtcInNldFN0YXR1c1wiXSl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiUnVubmluZy4uLlwiKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlwiKX0sMSk7ZG9SdW4oKX0sMSl9ZWxzZXtkb1J1bigpfX1pZihNb2R1bGVbXCJwcmVJbml0XCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlSW5pdFwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZUluaXRcIl09W01vZHVsZVtcInByZUluaXRcIl1dO3doaWxlKE1vZHVsZVtcInByZUluaXRcIl0ubGVuZ3RoPjApe01vZHVsZVtcInByZUluaXRcIl0ucG9wKCkoKX19dmFyIHNob3VsZFJ1bk5vdz10cnVlO2lmKE1vZHVsZVtcIm5vSW5pdGlhbFJ1blwiXSlzaG91bGRSdW5Ob3c9ZmFsc2U7cnVuKCk7XHJcblxyXG5cclxuICByZXR1cm4gSGF2b2tQaHlzaWNzLnJlYWR5XHJcbn1cclxuKTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgSGF2b2tQaHlzaWNzOyIsImxldCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG5leHBvcnQgY29uc3QgV2FpdFVudGlsID0gYXN5bmMgZnVuY3Rpb24gd2FpdEZvcihmKXtcclxuICAgIHdoaWxlKCFmKCkpIGF3YWl0IHNsZWVwKDEwMDApO1xyXG4gICAgcmV0dXJuIGYoKTtcclxufTsiLCJpbXBvcnQgeyBNb2RlbExvYWRlciB9IGZyb20gXCIuLi9jb21tb24vbW9kZWxMb2FkZXIuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJNb2RlbExvYWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgTG9hZEFuZFNldHVwTW9kZWxBc3luYygpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDaGFyYWN0ZXJEYXRhID0gYXdhaXQgbmV3IE1vZGVsTG9hZGVyKHRoaXMuc2NlbmUsIG51bGwsIFwiLi9Bc3NldHMvYW5pbWF0ZWRfY2hhcmFjdGVyL1wiLCBcIm5pbmphLmdsYlwiKS5Mb2FkQXN5bmMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyQ2hhcmFjdGVyTWVzaGVzID0gcGxheWVyQ2hhcmFjdGVyRGF0YS5tZXNoZXM7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUm9vdE1lc2ggPSBwbGF5ZXJDaGFyYWN0ZXJNZXNoZXNbMF07XHJcbiAgICAgICAgcGxheWVyUm9vdE1lc2gubmFtZSA9IFwiUGxheWVyXCI7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUm9vdE1lc2hDaGlsZHMgPSBwbGF5ZXJSb290TWVzaC5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckJvZHlUcmFuc2Zvcm0gPSBwbGF5ZXJSb290TWVzaENoaWxkc1swXTtcclxuXHJcbiAgICAgICAgcGxheWVyQm9keVRyYW5zZm9ybS5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIHBsYXllclJvb3RNZXNoLnNjYWxpbmcgID0gcGxheWVyUm9vdE1lc2guc2NhbGluZy5zY2FsZSgyLjApO1xyXG5cclxuICAgICAgICAvLyBpbml0IG5pbmphIGJvZHlcclxuICAgICAgICBjb25zdCBtb2RlbEJvZHkgPSBwbGF5ZXJCb2R5VHJhbnNmb3JtLmdldENoaWxkTWVzaGVzKClbMF07XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJNT0RFTCBCT0RZOiBcIiArIG1vZGVsQm9keS5uYW1lKTtcclxuICAgICAgICBtb2RlbEJvZHkucm90YXRpb24ueCA9IG5ldyBCQUJZTE9OLkFuZ2xlLkZyb21EZWdyZWVzKDkwKS5yYWRpYW5zKCk7XHJcbiAgICAgICAgbW9kZWxCb2R5LnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwLCAxMCwgMTApO1xyXG5cclxuICAgICAgICByZXR1cm4gcGxheWVyQ2hhcmFjdGVyRGF0YS5hbmltYXRpb25Hcm91cHM7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVRpbWVyIHtcclxuXHJcbiAgICBzdGF0aWMgT25UaWNrT25lU2Vjb25kT2JzZXJ2YWJsZTtcclxuICAgIHN0YXRpYyBTdGFydFRpbWU7XHJcblxyXG4gICAgc3RhdGljIEdldEVsYXBzZWRUaW1lTXMoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8gZWxhcHNlZCB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIGNvbnN0IGRhdGVEaWZmID0gbm93RGF0ZSAtIEdhbWVUaW1lci5TdGFydFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGRhdGVEaWZmO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBHZXRFbGFwc2VkVGltZVNlY29uZHMoKSB7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gR2FtZVRpbWVyLkdldEVsYXBzZWRUaW1lTXMoKSAqIDAuMDAxIDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgU3RhcnRUaW1lcigpIHtcclxuICAgICAgICBHYW1lVGltZXIuT25UaWNrT25lU2Vjb25kT2JzZXJ2YWJsZSA9IG5ldyBCQUJZTE9OLk9ic2VydmFibGUoKTtcclxuICAgICAgICBHYW1lVGltZXIuT25UaWNrT25TZWNvbmRMb29wQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lU2Vjb25kU2luY2VTdGFydGVkID0gTWF0aC5yb3VuZChHYW1lVGltZXIuR2V0RWxhcHNlZFRpbWVTZWNvbmRzKCkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVElNRVI6IFwiICsgdGltZVNlY29uZFNpbmNlU3RhcnRlZCk7XHJcbiAgICAgICAgICAgIEdhbWVUaW1lci5PblRpY2tPbmVTZWNvbmRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aW1lU2Vjb25kU2luY2VTdGFydGVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgT25UaWNrT25TZWNvbmRMb29wQXN5bmMoY2FsbEJhY2spIHtcclxuICAgICAgICB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXMsIDEwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc01hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBQcmVsb2FkU291bmQoc291bmRLZXksIHNvdW5kUGF0aCkge1xyXG4gICAgICAgIGlmKHRoaXMuX3NvdW5kc01hcC5oYXMoc291bmRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW1NvdW5kUGxheWVyXSBzb3VuZCB3aXRoIGtleSAnJHtzb3VuZEtleX0nIGlzIGFscmVhZHkgbG9hZGVkIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291bmQgPSBuZXcgQkFCWUxPTi5Tb3VuZChzb3VuZEtleSwgc291bmRQYXRoLCB0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fc291bmRzTWFwLnNldChzb3VuZEtleSwgc291bmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgUGxheVNvdW5kKHNvdW5kS2V5KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuX3NvdW5kc01hcC5oYXMoc291bmRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW1NvdW5kUGxheWVyXSBzb3VuZCB3aXRoIGtleSAnJHtzb3VuZEtleX0nIGlzIG5vdCBwcmVzZW50ZWQhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zb3VuZHNNYXAuZ2V0KHNvdW5kS2V5KS5wbGF5KCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgR2FtZUJlaGF2aW91ciB7XHJcbiAgICBTZXRFbnRpdHkoZW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBPbkF3YWtlKCkge31cclxuICAgIE9uU3RhcnQoKSB7fVxyXG4gICAgT25EaXNhYmxlKCkge31cclxuICAgIE9uRGVzdHJveSgpIHt9XHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHt9XHJcbiAgICBhc3luYyBJbml0QXN5bmMoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlR2FtZUJlaGF2aW91ciBleHRlbmRzIEdhbWVCZWhhdmlvdXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNoaWxkQmVoYXZpb3Vycykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYoIWNoaWxkQmVoYXZpb3Vycykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkQmVoYXZpb3VycyA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkQmVoYXZpb3Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQmVoYXZpb3VycyA9IGNoaWxkQmVoYXZpb3VycztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRCZWhhdmlvdXJzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25Bd2FrZSgpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY2hpbGRCZWhhdmlvdXJzKSAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgYmVoIG9mIHRoaXMuY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgICAgIGJlaC5PbkF3YWtlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9uU3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmNoaWxkQmVoYXZpb3VycykgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGJlaCBvZiB0aGlzLmNoaWxkQmVoYXZpb3Vycykge1xyXG4gICAgICAgICAgICBiZWguT25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkRpc2FibGUoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY2hpbGRCZWhhdmlvdXJzKSAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgYmVoIG9mIHRoaXMuY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgICAgIGJlaC5PbkRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0cm95KCkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5jaGlsZEJlaGF2aW91cnMpICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBiZWggb2YgdGhpcy5jaGlsZEJlaGF2aW91cnMpIHtcclxuICAgICAgICAgICAgYmVoLk9uRGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZEJlaGF2aW91cnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY2hpbGRCZWhhdmlvdXJzKSAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgYmVoIG9mIHRoaXMuY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgICAgIGJlaC5PblVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHtcclxuICAgICAgICBpZighdGhpcy5jaGlsZEJlaGF2aW91cnMpICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBiZWggb2YgdGhpcy5jaGlsZEJlaGF2aW91cnMpIHtcclxuICAgICAgICAgICAgYXdhaXQgYmVoLkluaXRBc3luYygpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTW9kZWxMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIG1vZGVsTmFtZSwgcmVsYXRpdmVQYXRoLCBmaWxlTmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlUGF0aDtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZEFzeW5jKCkge1xyXG4gICAgICAgIC8vIHJldHVybnMgYXJyYXkgb2YgbWVzaGVzICdyZXN1bHQubWVzaGVzW10nXHJcbiAgICAgICAgLy8gcmVzdWx0Lm1lc2hlc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBCQUJZTE9OLlNjZW5lTG9hZGVyLkltcG9ydE1lc2hBc3luYyh0aGlzLm1vZGVsTmFtZSwgdGhpcy5yZWxhdGl2ZVBhdGgsIHRoaXMuZmlsZU5hbWUsIHRoaXMuc2NlbmUpOyBcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICAgIFNBTVBMRTpcclxuICAgIEJBQllMT04uU2NlbmVMb2FkZXIuSW1wb3J0TWVzaEFzeW5jKFwiXCIsIFwiL3JlbGF0aXZlIHBhdGgvXCIsIFwibXlGaWxlXCIpOyAvL0VtcHR5IHN0cmluZyBsb2FkcyBhbGwgbWVzaGVzXHJcbiAgICBCQUJZTE9OLlNjZW5lTG9hZGVyLkltcG9ydE1lc2hBc3luYyhcIm1vZGVsMVwiLCBcIi9yZWxhdGl2ZSBwYXRoL1wiLCBcIm15RmlsZVwiKTsgLy9OYW1lIG9mIHRoZSBtb2RlbCBsb2FkcyBvbmUgbW9kZWxcclxuICAgIEJBQllMT04uU2NlbmVMb2FkZXIuSW1wb3J0TWVzaEFzeW5jKFtcIm1vZGVsMVwiLCBcIm1vZGVsMlwiXSwgXCIvcmVsYXRpdmUgcGF0aC9cIiwgXCJteUZpbGVcIik7IC8vQXJyYXkgb2YgbW9kZWwgbmFtZXNcclxuKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUnVsZXNDaGVhdHMge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZVJ1bGVzKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUnVsZXMgPSBnYW1lUnVsZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IG9uS2V5UmVjZWl2ZWRCb3VuZCA9IHRoaXMuT25LZXlFdmVudFJlY2VpdmVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lUnVsZXMuc2NlbmUub25LZXlib2FyZE9ic2VydmFibGUuYWRkKG9uS2V5UmVjZWl2ZWRCb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25LZXlFdmVudFJlY2VpdmVkKGtleUV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXlFdmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQkFCWUxPTi5LZXlib2FyZEV2ZW50VHlwZXMuS0VZRE9XTjpcclxuICAgICAgICAgICAgICB0aGlzLkhhbmRsZUtleURvd24oa2V5RXZlbnQuZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVLZXlEb3duKGtleUNvZGUpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBrZXlDb2RlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbR2FtZVJ1bGVzQ2hlYXRzXSBLZXlEb3duOiBcIiArIGtleSk7XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gXCJrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5LaWxsUmFuZG9tWm9tYmllKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiK1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU3BlZWRVcEFsbFpvbWJpZXMoMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGVlZFVwQWxsWm9tYmllcygtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgS2lsbFJhbmRvbVpvbWJpZSgpIHtcclxuICAgICAgICBjb25zdCBpc0FueVpvbWJpZUV4aXN0cyA9IHRoaXMuZ2FtZVJ1bGVzLmN1cnJlbnRab21iaWVzQ291bnQgPiAwO1xyXG4gICAgICAgIGlmKCFpc0FueVpvbWJpZUV4aXN0cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByYW5kb21ab21iaWUgPSB0aGlzLmdhbWVSdWxlcy5DdXJyZW50Wm9tYmllc0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogdGhpcy5nYW1lUnVsZXMuQ3VycmVudFpvbWJpZXNBcnJheS5sZW5ndGgpXTtcclxuICAgICAgICBpZighcmFuZG9tWm9tYmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmFuZG9tWm9tYmllLnpvbWJpZVByb3BzLkRlYWxEYW1hZ2UoNTApO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0dhbWVSdWxlc0NoZWF0c10gS0lMTCBSQU5ET00gWk9NQklFISEhXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBTcGVlZFVwQWxsWm9tYmllcyhhZGRpdGlvbikge1xyXG4gICAgICAgIGZvcihjb25zdCB6b21iaWUgb2YgdGhpcy5nYW1lUnVsZXMuQ3VycmVudFpvbWJpZXNBcnJheSl7XHJcbiAgICAgICAgICAgIGlmKCF6b21iaWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3U3BlZWRNb2RpZmllciA9IHpvbWJpZS5tb3ZlU3BlZWRNb2RpZmllciArIGFkZGl0aW9uXHJcbiAgICAgICAgICAgIGlmKG5ld1NwZWVkTW9kaWZpZXIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTcGVlZE1vZGlmaWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgem9tYmllLm1vdmVTcGVlZE1vZGlmaWVyID0gbmV3U3BlZWRNb2RpZmllcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQmVoYXZpb3VyIH0gZnJvbSBcIi4uL2NvbW1vbi9nYW1lQmVoYXZpb3VyLmpzXCI7XHJcbmltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9tb2RlbExvYWRlci5qc1wiO1xyXG5pbXBvcnQgUGxheWVyUHJvcHMgZnJvbSBcIi4uL3Byb3BlcnRpZXMvcGxheWVyUHJvcHMuanNcIjtcclxuaW1wb3J0IGFjdGlvbk5hbWVzIGZyb20gXCIuL3BsYXllclN0YXRlcy9hY3Rpb25OYW1lcy5qc1wiO1xyXG5pbXBvcnQgUGxheWVyRlNNIGZyb20gXCIuL3BsYXllclN0YXRlcy9wbGF5ZXJGc20uanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFBsYXllckJlaGF2aW91ciBleHRlbmRzIEdhbWVCZWhhdmlvdXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIGNhbWVyYSwgcGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXksIHdvcmxkLCBzb3VuZFBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vdmVJbnB1dCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7ICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbklucHV0ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTsgICAgXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkTW9kaWZpZXIgPSAxLjA7ICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkgPSBwbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheTtcclxuICAgICAgICB0aGlzLldvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5Tb3VuZFBsYXllciA9IHNvdW5kUGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtID0gdGhpcy5lbnRpdHkuYWJzdHJhY3RNZXNoO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTWVzaHNlcyA9IHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5nZXRDaGlsZE1lc2hlcygpO1xyXG4gICAgICAgIGZvcihjb25zdCBjaGlsZE1lc2ggb2YgdGhpcy5jaGlsZE1lc2hzZXMpIHtcclxuICAgICAgICAgICAgY2hpbGRNZXNoLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLnBvc2l0aW9uLmFkZChuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApKTtcclxuICAgICAgICBjb25zdCBwaHlzaWNzQm9keSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NCb2R5KHRoaXMucGxheWVyQm9keVRyYW5zZm9ybSwgQkFCWUxPTi5QaHlzaWNzTW90aW9uVHlwZS5EWU5BTUlDLCBmYWxzZSwgdGhpcy5zY2VuZSk7XHJcblxyXG4gICAgICAgIC8vIG5ldyBQaHlzaWNzU2hhcGVDYXBzdWxlKHBvaW50QTogVmVjdG9yMywgcG9pbnRCOiBWZWN0b3IzLCByYWRpdXM6IG51bWJlciwgc2NlbmU6IFNjZW5lKVxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NTaGFwZSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NTaGFwZUNhcHN1bGUoXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwtMzIsMCksXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwtNSwwKSxcclxuICAgICAgICAgICAgNSwgLy8gcmFkaXVzIG9mIHRoZSBzcGhlcmVcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSAvLyBjb250YWluaW5nIHNjZW5lXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICBwaHlzaWNzQm9keS5zaGFwZSA9IHBoeXNpY3NTaGFwZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkgPSB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0uZ2V0UGh5c2ljc0JvZHkoKTtcclxuICAgICAgICBpZighdGhpcy5waHlzaWNzQm9keSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbTG9jYWxQbGF5ZXJCZWhhdmlvdXJdIFBoeXNpY3MgYm9keSBpcyBtaXNzaW5nIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0xvY2FsUGxheWVyQmVoYXZpb3VyXSBjaGFyYWN0ZXIgbWVzaCBuYW1lOiBcIiArIHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFBsYXllckNhbWVyYSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRpc2FibGUgYW5ndWxhciBmYWxsaW5nIGZyb20gY2FsbGlzaW9ucyFcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldE1hc3NQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgaW5lcnRpYTogbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRHcmF2aXR5RmFjdG9yKDEwMCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyRlNNICA9IG5ldyBQbGF5ZXJGU00odGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyUHJvcHMgPSBuZXcgUGxheWVyUHJvcHMoKTtcclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLlNldEhwKDEwMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5TZXRNYXhIcCgxMDApO1xyXG4gICAgICAgIHRoaXMucGxheWVyUHJvcHMuU2V0SXNEZWFkKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5TdWJzY3JpYmVQcm9wc0V2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLlNldHVwV2VhcG9uQm9uZSgpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLkNyZWF0ZVdlYXBvbkFzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFNldHVwV2VhcG9uQm9uZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyTWVzaCA9IHRoaXMuc2NlbmUuZ2V0TWVzaEJ5SWQoXCJDaDI0XCIpO1xyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uID0gdGhpcy5zY2VuZS5nZXRTa2VsZXRvbkJ5SWQoXCJza2VsZXRvbjBcIik7XHJcbiAgICAgICAgY29uc3QgcmlnaHRIYW5kQm9uZSA9IHNrZWxldG9uLmJvbmVzWzM0XTtcclxuXHJcbiAgICAgICAgdGhpcy5za2VsZXRvbiA9IHNrZWxldG9uO1xyXG4gICAgICAgIHRoaXMucmlnaHRIYW5kQm9uZSA9IHJpZ2h0SGFuZEJvbmU7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJNZXNoID0gY2hhcmFjdGVyTWVzaDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBDcmVhdGVXZWFwb25Bc3luYygpIHtcclxuICAgICAgICBjb25zdCB3ZWFwb25Nb2RlbERhdGEgPSBhd2FpdCBuZXcgTW9kZWxMb2FkZXIodGhpcy5zY2VuZSwgbnVsbCwgXCIuL0Fzc2V0cy93ZWFwb25zL1wiLCBcIm00YTEuZ2xiXCIpLkxvYWRBc3luYygpO1xyXG4gICAgICAgIGNvbnN0IHdlYXBvbk1lc2hlcyA9IHdlYXBvbk1vZGVsRGF0YS5tZXNoZXM7XHJcbiAgICAgICAgY29uc3Qgd2VhcG9uUm9vdE1lc2ggPSB3ZWFwb25NZXNoZXNbMF07XHJcbiAgICAgICAgd2VhcG9uUm9vdE1lc2gubmFtZSA9IFwiUGxheWVyIHdlYXBvblwiO1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZUZhY3RvciA9IDIyNTtcclxuICAgICAgICB3ZWFwb25Sb290TWVzaC5zY2FsaW5nID0gbmV3IEJBQllMT04uVmVjdG9yMyhzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yKTtcclxuICAgICAgICB3ZWFwb25Sb290TWVzaC5wb3NpdGlvbiA9IHRoaXMucmlnaHRIYW5kQm9uZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHdlYXBvblJvb3RNZXNoLmF0dGFjaFRvQm9uZSh0aGlzLnJpZ2h0SGFuZEJvbmUsIHRoaXMuY2hhcmFjdGVyTWVzaCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2VhcG9uUm9vdE1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKFxyXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5BbmdsZS5Gcm9tRGVncmVlcygtODApLnJhZGlhbnMoKSxcclxuICAgICAgICAgICAgbmV3IEJBQllMT04uQW5nbGUuRnJvbURlZ3JlZXMoNTUuNykucmFkaWFucygpLFxyXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5BbmdsZS5Gcm9tRGVncmVlcygxODApLnJhZGlhbnMoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gY2VudHJhbGl6ZVxyXG4gICAgICAgIC8vd2VhcG9uUm9vdE1lc2guc2V0UG9zaXRpb25XaXRoTG9jYWxWZWN0b3IobmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSk7XHJcblxyXG4gICAgICAgIHdlYXBvblJvb3RNZXNoLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMyg1LCAtMTAsIDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy53ZWFwb25Sb290TWVzaCA9IHdlYXBvblJvb3RNZXNoO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkV2VhcG9uTWVzaGVzID0gdGhpcy53ZWFwb25Sb290TWVzaC5nZXRDaGlsZE1lc2hlcygpO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgY2hpbGRNZXNoIG9mIHRoaXMuY2hpbGRXZWFwb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgY2hpbGRNZXNoLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdWJzY3JpYmVQcm9wc0V2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLkhwT2JzZXJ2YWJsZS5hZGQoKGN1cnJlbnRIcCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllclByb3BzLkdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltQTEFZRVJdIEhwIGNoYW5nZWQhOiBcIiArIGN1cnJlbnRIcCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb3BzLlNldElzRGVhZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvcHMuU2V0SHAoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5Jc0RlYWRPYnNlcnZhYmxlLmFkZCgoaXNEZWFkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRGVhZCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltQTEFZRVJdIERlYXRoIVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRlNNLlByb2Nlc3NBY3Rpb24oYWN0aW9uTmFtZXMuREVBVEgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25TdGFydCgpIHtcclxuICAgICAgICBzdXBlci5PblN0YXJ0KCk7XHJcbiAgICAgICAgLy9cIltMb2NhbFBsYXllckJlaGF2aW91cl0gT25TdGFydCEgXCIpO1xyXG4gICAgICAgIHRoaXMub25LZXlSZWNlaXZlZEJvdW5kID0gdGhpcy5vbktleUV2ZW50UmVjZWl2ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLm9uS2V5Ym9hcmRPYnNlcnZhYmxlLmFkZCh0aGlzLm9uS2V5UmVjZWl2ZWRCb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5uYW1lID0gXCJQTEFZRVJfQk9EWV9ST09UXCI7XHJcblxyXG4gICAgICAgIHRoaXMuRGVsYXllZFN0YXJ0QXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBEZWxheWVkU3RhcnRBc3luYygpIHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXMsIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTWVzaHNlcyA9IHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5nZXRDaGlsZE1lc2hlcygpO1xyXG4gICAgICAgIGZvcihjb25zdCBjaGlsZE1lc2ggb2YgdGhpcy5jaGlsZE1lc2hzZXMpIHtcclxuICAgICAgICAgICAgY2hpbGRNZXNoLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgY2hpbGRNZXNoIG9mIHRoaXMuY2hpbGRXZWFwb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgY2hpbGRNZXNoLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzSW5pdGlhbGl6ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBsYXllclByb3BzLkdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLk9uVXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0QW5ndWxhclZlbG9jaXR5KG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUlucHV0TG9vcChkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYUxvb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJGU00/Lk9uVXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uRGlzYWJsZSgpIHtcclxuICAgICAgICBzdXBlci5PbkRpc2FibGUoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0xvY2FsUGxheWVyQmVoYXZpb3VyXSBPbkRpc2FibGUhIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgc3VwZXIuT25EZXN0cm95KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltMb2NhbFBsYXllckJlaGF2aW91cl0gT25EZXN0cm95ISBcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUub25LZXlib2FyZE9ic2VydmFibGUucmVtb3ZlKHRoaXMub25LZXlSZWNlaXZlZEJvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleUV2ZW50UmVjZWl2ZWQoa2V5RXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleUV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBCQUJZTE9OLktleWJvYXJkRXZlbnRUeXBlcy5LRVlET1dOOlxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJLRVkgRE9XTjogXCIsIGtleUV2ZW50LmV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgW0xvY2FsUGxheWVyQmVoYXZpb3VyXSBLZXlEb3duICEgS2V5OiAnJHtrZXlFdmVudC5ldmVudC5rZXl9JywgQ29kZTogJyR7a2V5RXZlbnQuZXZlbnQuY29kZX0nIGApO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleURvd24oa2V5RXZlbnQuZXZlbnQuY29kZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQkFCWUxPTi5LZXlib2FyZEV2ZW50VHlwZXMuS0VZVVA6ICAgICAgICBcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiS0VZIFVQOiBcIiwga2V5RXZlbnQuZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleVVwKGtleUV2ZW50LmV2ZW50LmNvZGUpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleURvd24oa2V5Q29kZSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleUNvZGU7XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gXCJLZXlXXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUlucHV0LnogPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckZTTS5Qcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWVzLldBTEspO1xyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiS2V5U1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbnB1dC56ID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRlNNLlByb2Nlc3NBY3Rpb24oYWN0aW9uTmFtZXMuV0FMSyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJLZXlBXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um90YXRpb25JbnB1dC55ID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJLZXlEXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um90YXRpb25JbnB1dC55ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIlNwYWNlXCIpIHsgLy8gXCIgXCIgPSBzcGFjZSBcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGU00uUHJvY2Vzc0FjdGlvbihhY3Rpb25OYW1lcy5TSE9PVCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAqKiogQ0hFQVRTICoqKlxyXG4gICAgICAgIGlmKGtleSA9PT0gXCJLZXlaXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5EZWFsRGFtYWdlKDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gKioqIEVORC1DSEVBVFMgKioqXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5VXAoa2V5Q29kZSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleUNvZGU7XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gXCJLZXlXXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUlucHV0LnogPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckZTTS5Qcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWVzLklETEUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiS2V5U1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmVJbnB1dC56ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGU00uUHJvY2Vzc0FjdGlvbihhY3Rpb25OYW1lcy5JRExFKTtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIktleUFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbklucHV0LnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiS2V5RFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvdGF0aW9uSW5wdXQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJTcGFjZVwiKSB7IC8vIFwiIFwiID0gc3BhY2VcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGU00uUHJvY2Vzc0FjdGlvbihhY3Rpb25OYW1lcy5TVE9QX1NIT09USU5HKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUlucHV0TG9vcChkZWx0YVRpbWUpIHtcclxuICAgICAgICBjb25zdCBtb3ZlU3BlZWQgPSAxNTAwMDAgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLmdldERpcmVjdGlvbihCQUJZTE9OLkF4aXMuWik7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRMaW5lYXJWZWxvY2l0eShkaXIuc2NhbGUobW92ZVNwZWVkICogdGhpcy5jdXJyZW50TW92ZUlucHV0LnopKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25TcGVlZCA9IDUwMCAqIHRoaXMucm90YXRpb25TcGVlZE1vZGlmaWVyICogZGVsdGFUaW1lO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5jdXJyZW50Um90YXRpb25JbnB1dC5zY2FsZShyb3RhdGlvblNwZWVkKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eShyb3RhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBQbGF5ZXJDYW1lcmEoKSB7XHJcblxyXG4gICAgICAgIC8vdmFyIENvVCA9IG5ldyBCQUJZTE9OLlRyYW5zZm9ybU5vZGUoXCJyb290XCIpO1xyXG4gICAgICAgIC8vYm94LnBhcmVudCA9IENvVDsgLy9hcHBseSB0byBCb3hcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFkVHJhbnNmb3JtID0gbmV3IEJBQllMT04uVHJhbnNmb3JtTm9kZShcIlBsYXllckhlYWRcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFkT2Zmc2V0ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAyMDAwLCAyMDApO1xyXG4gICAgICAgIHRoaXMucGxheWVySGVhZFRyYW5zZm9ybS5wb3NpdGlvbiA9IHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodGhpcy5wbGF5ZXJIZWFkT2Zmc2V0KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFkVHJhbnNmb3JtLnBhcmVudCA9IHRoaXMucGxheWVyQm9keVRyYW5zZm9ybTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGdvYWwgZGlzdGFuY2Ugb2YgY2FtZXJhIGZyb20gdGFyZ2V0XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucmFkaXVzID0gNzg7XHJcblxyXG4gICAgICAgIC8vIFRoZSBnb2FsIGhlaWdodCBvZiBjYW1lcmEgYWJvdmUgbG9jYWwgb3JpZ2luIChjZW50cmUpIG9mIHRhcmdldFxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmhlaWdodE9mZnNldCA9IDU7XHJcblxyXG4gICAgICAgIC8vIFRoZSBnb2FsIHJvdGF0aW9uIG9mIGNhbWVyYSBhcm91bmQgbG9jYWwgb3JpZ2luIChjZW50cmUpIG9mIHRhcmdldCBpbiB4IHkgcGxhbmVcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbk9mZnNldCA9IC0xODA7XHJcblxyXG4gICAgICAgIC8vIEFjY2VsZXJhdGlvbiBvZiBjYW1lcmEgaW4gbW92aW5nIGZyb20gY3VycmVudCB0byBnb2FsIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuY2FtZXJhQWNjZWxlcmF0aW9uID0gMC4wMDU7XHJcblxyXG4gICAgICAgIC8vIFRoZSBzcGVlZCBhdCB3aGljaCBhY2NlbGVyYXRpb24gaXMgaGFsdGVkXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubWF4Q2FtZXJhU3BlZWQgPSAxMDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmxvY2tlZFRhcmdldCA9IHRoaXMucGxheWVySGVhZFRyYW5zZm9ybTsgLy92ZXJzaW9uIDIuNSBvbndhcmRzXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmRldGFjaENvbnRyb2woKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmFMb29wKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmxvY2tlZFRhcmdldCA9IHRoaXMucGxheWVySGVhZFRyYW5zZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRBYnNvbHV0ZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0uYWJzb2x1dGVQb3NpdGlvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9tb2RlbExvYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBHYW1lRW50aXR5IH0gZnJvbSBcIi4uLy4uL2dhbWUvZ2FtZUVudGl0eS5qc1wiO1xyXG5pbXBvcnQgRW5lbXlab21iaWVCZWhhdmlvdXIgZnJvbSBcIi4vZW5lbXlab21iaWVCZWhhdmlvdXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15U3Bhd25lciB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCB3b3JsZCwgc291bmRQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGxheWVyID0gc291bmRQbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgQ3JlYXRlWm9tYmllRW50aXR5QXN5bmMocG9zaXRpb24sIGFkZGl0aW9uSHApIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyVGFyZ2V0ID0gdGhpcy53b3JsZC5HZXRFbnRpdHkoXCJMT0NBTF9QTEFZRVJcIikuR2V0Q29tcG9uZW50KFwiTG9jYWxQbGF5ZXJCZWhhdmlvdXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb2RlbERhdGEgPSBhd2FpdCBuZXcgTW9kZWxMb2FkZXIodGhpcy5zY2VuZSwgbnVsbCwgXCIuL0Fzc2V0cy96b21iaWUtYm95L1wiLCBcInpvbWJpZS1ib3kuZ2xiXCIpLkxvYWRBc3luYygpO1xyXG5cclxuICAgICAgICBjb25zdCBlbmVteVJvb3RNZXNoID0gbW9kZWxEYXRhLm1lc2hlc1swXTtcclxuICAgICAgICBlbmVteVJvb3RNZXNoLm5hbWUgPSBcIlpPTUJJRVwiO1xyXG4gICAgICAgIGVuZW15Um9vdE1lc2guc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTUsIDE1LCAxNSk7XHJcbiAgICAgICAgZW5lbXlSb290TWVzaC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cHNBcnIgPSBtb2RlbERhdGEuYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgIGNvbnN0IHpvbWJpZUJlaGF2aW91ciA9IG5ldyBFbmVteVpvbWJpZUJlaGF2aW91cihlbmVteVJvb3RNZXNoLCBhbmltYXRpb25Hcm91cHNBcnIsIHRoaXMuc2NlbmUsIHRoaXMuX3NvdW5kUGxheWVyKTtcclxuICAgICAgICB6b21iaWVCZWhhdmlvdXIuY3VycmVudFRhcmdldCA9IHRoaXMucGxheWVyVGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHpvbWJpZUVudGl0eSA9IG5ldyBHYW1lRW50aXR5KGVuZW15Um9vdE1lc2gubmFtZSwgZW5lbXlSb290TWVzaClcclxuICAgICAgICAuQWRkQ29tcG9uZW50KHpvbWJpZUJlaGF2aW91ciwgZmFsc2UpO1xyXG5cclxuICAgICAgICBhd2FpdCB6b21iaWVFbnRpdHkuSW5pdEFzeW5jKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0hwID0gem9tYmllQmVoYXZpb3VyLnpvbWJpZVByb3BzLkdldEhwKCkgKyBhZGRpdGlvbkhwO1xyXG4gICAgICAgIHpvbWJpZUJlaGF2aW91ci56b21iaWVQcm9wcy5TZXRIcChuZXdIcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVudGl0eTogem9tYmllRW50aXR5LFxyXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHpvbWJpZUJlaGF2aW91clxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVRpbWVyIGZyb20gXCIuLi8uLi9jb21tb24vR2FtZVRpbWVyLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IFpvbWJpZVByb3BzIGZyb20gXCIuLi8uLi9wcm9wZXJ0aWVzL3pvbWJpZVByb3BzLmpzXCI7XHJcbmltcG9ydCB6b21iaWVBY3Rpb25OYW1lcyBmcm9tIFwiLi9zdGF0ZXMvem9tYmllQWN0aW9uTmFtZXMuanNcIjtcclxuaW1wb3J0IFpvbWJpZUZTTSBmcm9tIFwiLi9zdGF0ZXMvem9tYmllRlNNLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteVpvbWJpZUJlaGF2aW91ciBleHRlbmRzIEdhbWVCZWhhdmlvdXIge1xyXG4gICAgY29uc3RydWN0b3Iocm9vdE1lc2gsIGFuaW1hdGlvbkdyb3Vwcywgc2NlbmUsIHNvdW5kUGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVJvb3QgPSByb290TWVzaDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkdyb3VwcyA9IGFuaW1hdGlvbkdyb3VwcztcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWRNb2RpZmllciA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5Tb3VuZFBsYXllciA9IHNvdW5kUGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHtcclxuICAgICAgICB0aGlzLmlkbGVBbmltR3JvdXAgPSB0aGlzLmFuaW1hdGlvbkdyb3Vwcy5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiSWRsZVwiKTtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbUdyb3VwID0gdGhpcy5hbmltYXRpb25Hcm91cHMuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIkRlYXRoXCIpO1xyXG4gICAgICAgIHRoaXMud2Fsa0FuaW1Hcm91cCA9IHRoaXMuYW5pbWF0aW9uR3JvdXBzLmZpbmQoYWcgPT4gYWcubmFtZSA9PT0gXCJXYWxrXCIpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQW5pbUdyb3VwID0gdGhpcy5hbmltYXRpb25Hcm91cHMuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIkF0dGFja1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Jbml0UGh5c2ljcygpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5ID0gdGhpcy50cmFuc2Zvcm1Sb290LmdldFBoeXNpY3NCb2R5KCk7XHJcbiAgICAgICAgaWYoIXRoaXMucGh5c2ljc0JvZHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW0VuZW15Wm9tYmllQmVoYXZpb3VyXSBQaHlzaWNzIGJvZHkgaXMgbWlzc2luZyFcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRNYXNzUHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgIGluZXJ0aWE6IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRHcmF2aXR5RmFjdG9yKDEwMCk7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllRlNNICA9IG5ldyBab21iaWVGU00odGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllUHJvcHMgPSBuZXcgWm9tYmllUHJvcHMoKTtcclxuICAgICAgICB0aGlzLnpvbWJpZVByb3BzLlNldEhwKDUwKTtcclxuICAgICAgICB0aGlzLnpvbWJpZVByb3BzLlNldE1heEhwKDUwKTtcclxuICAgICAgICB0aGlzLnpvbWJpZVByb3BzLlNldElzRGVhZChmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuU3Vic2NyaWJlUHJvcHNFdmVudHMoKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldENvbGxpc2lvbkNhbGxiYWNrRW5hYmxlZCh0cnVlKTtcclxuICAgICAgICB0aGlzLmJpbmRlZENvbGxpc2lvbkhhbmRsZXIgPSB0aGlzLkhhbmRsZUNvbGxpc2lvbnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk9ic2VydmFibGUgPSB0aGlzLnBoeXNpY3NCb2R5LmdldENvbGxpc2lvbk9ic2VydmFibGUoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk9ic2VydmFibGUuYWRkKHRoaXMuYmluZGVkQ29sbGlzaW9uSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RPYnN0YWNsZURldGVjdGVkVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGFzdEFub3RoZXJab21iaWVEZXRlY3RlZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2xhc3REYW1hZ2VUaW1lID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIEhhbmRsZUNvbGxpc2lvbnMoY29sRXZlbnQpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZighdGhpcy56b21iaWVXYWxrU3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllV2Fsa1N0YXRlTmFtZSA9IFwiWm9tYmllV2Fsa1N0YXRlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIG9ubHkgc3RhdGUgaXMgV0FMS1xyXG4gICAgICAgIGlmKHRoaXMuem9tYmllRlNNLmN1cnJlbnRTdGF0ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0aGlzLnpvbWJpZVdhbGtTdGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sbGlkZXJOYW1lID0gY29sRXZlbnQuY29sbGlkZWRBZ2FpbnN0LnRyYW5zZm9ybU5vZGUubmFtZTtcclxuICAgICAgICBjb25zdCBjb2xsaXNpb25UeXBlID0gdGhpcy5HZXRDb2xsaXNpb25UeXBlKGNvbGxpZGVyTmFtZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaChjb2xsaXNpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UodGhpcy5DT0xfVFlQRVMuV0FMTCk6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlU3R1Y2tJbk9ic3RhY2xlcygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gY2FzZSAodGhpcy5DT0xfVFlQRVMuQU5PVEhFUl9aT01CSUUpOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZVN0dWNrSW5Bbm90aGVyWm9tYmllKGNvbEV2ZW50LmNvbGxpZGVkQWdhaW5zdC50cmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IEdhbWVUaW1lci5HZXRFbGFwc2VkVGltZVNlY29uZHMoKTtcclxuICAgICAgICBjb25zdCB0aW1lVG9EZXRlY3RPYnN0YWNsZXMgPSAxO1xyXG5cclxuICAgICAgICBjb25zdCBkaWZmID0gY3VycmVudFRpbWUgLSB0aGlzLl9sYXN0T2JzdGFjbGVEZXRlY3RlZFRpbWU7XHJcbiAgICAgICAgdGhpcy5faXNJbk9ic3RhY2xlcyAgPSBkaWZmIDwgdGltZVRvRGV0ZWN0T2JzdGFjbGVzO1xyXG5cclxuICAgICAgICBjb25zdCB6b21iaWVEaWZmID0gY3VycmVudFRpbWUgLSB0aGlzLl9sYXN0QW5vdGhlclpvbWJpZURldGVjdGVkVGltZTtcclxuICAgICAgICB0aGlzLl9pc0luQW5vdGhlclpvbWJpZSA9IHpvbWJpZURpZmYgPCB0aW1lVG9EZXRlY3RPYnN0YWNsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlU3R1Y2tJbk9ic3RhY2xlcygpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9sYXN0T2JzdGFjbGVEZXRlY3RlZFRpbWUgPSBHYW1lVGltZXIuR2V0RWxhcHNlZFRpbWVTZWNvbmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlU3R1Y2tJbkFub3RoZXJab21iaWUoYW5vdGhlclpvbWJpZVRyYW5zZm9ybSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2xhc3RBbm90aGVyWm9tYmllRGV0ZWN0ZWRUaW1lID0gR2FtZVRpbWVyLkdldEVsYXBzZWRUaW1lU2Vjb25kcygpO1xyXG5cclxuICAgICAgICBpZihhbm90aGVyWm9tYmllVHJhbnNmb3JtKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBteVBvcyA9IHRoaXMudHJhbnNmb3JtUm9vdC5hYnNvbHV0ZVBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBhbm90aGVyWm9tYmllUG9zID0gYW5vdGhlclpvbWJpZVRyYW5zZm9ybS5hYnNvbHV0ZVBvc2l0aW9uO1xyXG4gICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXJUb1RhcmdldCA9IGFub3RoZXJab21iaWVQb3Muc3VidHJhY3QobXlQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl90b0Fub3RoZXJab21iaWVEaXIgPSBkaXJUb1RhcmdldDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9Bbm90aGVyWm9tYmllRGlyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q29sbGlzaW9uVHlwZShjb2xOYW1lKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY29sbGlzaW9uc1R5cGVzTWFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLkNPTF9UWVBFUyA9IHtcclxuICAgICAgICAgICAgICAgIEZMT09SOiBcIkZMT09SXCIsXHJcbiAgICAgICAgICAgICAgICBXQUxMOiBcIldBTExcIixcclxuICAgICAgICAgICAgICAgIEFOT1RIRVJfWk9NQklFOiBcIlpPTUJJRVwiLCBcclxuICAgICAgICAgICAgICAgIFVOREVGSU5FRF9DT0w6IFwiVU5ERUZJTkVEX0NPTFwiXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnNUeXBlc01hcC5zZXQoXCJPYmplY3RfMlwiLCB0aGlzLkNPTF9UWVBFUy5GTE9PUik7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLnNldChcIk9iamVjdF8zXCIsIHRoaXMuQ09MX1RZUEVTLldBTEwpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnNUeXBlc01hcC5zZXQoXCJPYmplY3RfNFwiLCB0aGlzLkNPTF9UWVBFUy5XQUxMKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zVHlwZXNNYXAuc2V0KFwiT2JqZWN0XzVcIiwgdGhpcy5DT0xfVFlQRVMuV0FMTCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLnNldChcIlpPTUJJRVwiLCB0aGlzLkNPTF9UWVBFUy5BTk9USEVSX1pPTUJJRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNvbGxpc2lvbnNUeXBlc01hcC5oYXMoY29sTmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLmdldChjb2xOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09MX1RZUEVTLlVOREVGSU5FRF9DT0w7XHJcbiAgICB9XHJcblxyXG4gICAgU3Vic2NyaWJlUHJvcHNFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy56b21iaWVQcm9wcy5IcE9ic2VydmFibGUuYWRkKChjdXJyZW50SHApID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy56b21iaWVQcm9wcy5HZXRJc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJbWk9NQklFXSBIcCBjaGFuZ2VkITogXCIgKyBjdXJyZW50SHApO1xyXG4gICAgICAgICAgICBpZihjdXJyZW50SHAgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b21iaWVQcm9wcy5TZXRJc0RlYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZVByb3BzLlNldEhwKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllUHJvcHMuSXNEZWFkT2JzZXJ2YWJsZS5hZGQoKGlzRGVhZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0RlYWQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJbWk9NQklFXSBEZWF0aCFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZUZTTS5Qcm9jZXNzQWN0aW9uKHpvbWJpZUFjdGlvbk5hbWVzLkRFQVRIKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXRQaHlzaWNzKCkge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcGh5c2ljc0JvZHkgPSBuZXcgQkFCWUxPTi5QaHlzaWNzQm9keSh0aGlzLnRyYW5zZm9ybVJvb3QsIEJBQllMT04uUGh5c2ljc01vdGlvblR5cGUuRFlOQU1JQywgZmFsc2UsIHRoaXMuc2NlbmUpO1xyXG5cclxuICAgICAgICAvLyBuZXcgUGh5c2ljc1NoYXBlQ2Fwc3VsZShwb2ludEE6IFZlY3RvcjMsIHBvaW50QjogVmVjdG9yMywgcmFkaXVzOiBudW1iZXIsIHNjZW5lOiBTY2VuZSlcclxuICAgICAgICBjb25zdCBwaHlzaWNzU2hhcGUgPSBuZXcgQkFCWUxPTi5QaHlzaWNzU2hhcGVDYXBzdWxlKFxyXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsMjUsMCksXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCw1LDApLFxyXG4gICAgICAgICAgICA1LCAvLyByYWRpdXMgb2YgdGhlIHNwaGVyZVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lIC8vIGNvbnRhaW5pbmcgc2NlbmVcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHBoeXNpY3NCb2R5LnNoYXBlID0gcGh5c2ljc1NoYXBlO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbk9ic2VydmFibGUucmVtb3ZlKHRoaXMuYmluZGVkQ29sbGlzaW9uSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Sb290LmRpc3Bvc2UoZmFsc2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnpvbWJpZVByb3BzLkdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuRm9sbG93VGFyZ2V0TG9vcChkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnpvbWJpZUZTTS5PblVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEZvbGxvd1RhcmdldExvb3AoZGVsdGFUaW1lKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRUYXJnZXQgfHwgdGhpcy5jdXJyZW50VGFyZ2V0LnBsYXllclByb3BzLkdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0TGluZWFyVmVsb2NpdHkoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0QW5ndWxhclZlbG9jaXR5KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnpvbWJpZUZTTS5Qcm9jZXNzQWN0aW9uKHpvbWJpZUFjdGlvbk5hbWVzLklETEUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IEdhbWVUaW1lci5HZXRFbGFwc2VkVGltZVNlY29uZHMoKTtcclxuICAgICAgICBjb25zdCBsYXN0RGFtYWdlVGltZURpZmYgPSBjdXJyZW50VGltZSAtIHRoaXMuX2xhc3REYW1hZ2VUaW1lO1xyXG4gICAgICAgIGNvbnN0IGlzVW5kZXJBdHRhY2sgPSBsYXN0RGFtYWdlVGltZURpZmYgPD0gMTtcclxuXHJcbiAgICAgICAgY29uc3Qgem9tYmllUG9zID0gdGhpcy50cmFuc2Zvcm1Sb290LmFic29sdXRlUG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5jdXJyZW50VGFyZ2V0LkdldEFic29sdXRlUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb1N0b3AgPSAzMDtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGlzdGFuY2UgPSBCQUJZTE9OLlZlY3RvcjMuRGlzdGFuY2Uoem9tYmllUG9zLCB0YXJnZXRQb3MpO1xyXG5cclxuICAgICAgICBpZihjdXJyZW50RGlzdGFuY2UgPD0gZGlzdGFuY2VUb1N0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy56b21iaWVGU00uUHJvY2Vzc0FjdGlvbih6b21iaWVBY3Rpb25OYW1lcy5BVFRBQ0spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb3ZlU3BlZWQgPSAxMCAqIHRoaXMubW92ZVNwZWVkTW9kaWZpZXIgKiBkZWx0YVRpbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpclRvUGxheWVyVGFyZ2V0ID0gdGFyZ2V0UG9zLnN1YnRyYWN0KHpvbWJpZVBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCB0YXJnZXREaXIgPSBkaXJUb1BsYXllclRhcmdldC5jbG9uZSgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYodGhpcy5faXNJbk9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TdHJlbmd0aCA9IHRoaXMuR2V0UmFuZG9tU3RyZW5ndGgoNTAsIDEwMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXREaXIueCA9ICAoKGRpclRvUGxheWVyVGFyZ2V0LnggPiAwKSA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIHRhcmdldERpci56ID0gZGlyVG9QbGF5ZXJUYXJnZXQueiAqIC0xO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzQm9keS5hcHBseUZvcmNlKHRhcmdldERpci5zY2FsZShyYW5kb21TdHJlbmd0aCksICB0aGlzLnRyYW5zZm9ybVJvb3QucG9zaXRpb24uYWRkKHRhcmdldERpci5zY2FsZShtb3ZlU3BlZWQpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0luQW5vdGhlclpvbWJpZSAmJiB0aGlzLl90b0Fub3RoZXJab21iaWVEaXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tU3RyZW5ndGggPSB0aGlzLkdldFJhbmRvbVN0cmVuZ3RoKDUwLCAxMDApO1xyXG4gICAgICAgICAgICB0YXJnZXREaXIueCA9ICAoKHRoaXMuX3RvQW5vdGhlclpvbWJpZURpci54IDwgMCkgPyAxIDogLTEpOyAvLyBpbnZlcnNlZCBmcm9tIGFub3RoZXIgem9tYmllXHJcbiAgICAgICAgICAgIHRhcmdldERpci56ID0gZGlyVG9QbGF5ZXJUYXJnZXQuejtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljc0JvZHkuYXBwbHlGb3JjZSh0YXJnZXREaXIuc2NhbGUocmFuZG9tU3RyZW5ndGgpLCAgdGhpcy50cmFuc2Zvcm1Sb290LnBvc2l0aW9uLmFkZCh0YXJnZXREaXIuc2NhbGUobW92ZVNwZWVkKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXNVbmRlckF0dGFjaykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TdHJlbmd0aCA9IHRoaXMuR2V0UmFuZG9tU3RyZW5ndGgoMTAsIDUwKTtcclxuICAgICAgICAgICAgdGFyZ2V0RGlyLnogKj0gLTE7XHJcbiAgICAgICAgICAgIHRhcmdldERpci54ICo9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV4dFBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm1Sb290LnBvc2l0aW9uLmFkZCh0YXJnZXREaXIuc2NhbGUobW92ZVNwZWVkKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9va0F0ID0gQkFCWUxPTi5NYXRyaXguTG9va0F0TEgoXHJcbiAgICAgICAgICAgIHpvbWJpZVBvcyxcclxuICAgICAgICAgICAgdGFyZ2V0UG9zLFxyXG4gICAgICAgICAgICBCQUJZTE9OLlZlY3RvcjMuVXAoKVxyXG4gICAgICAgICkuaW52ZXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRSb3RhdGlvbiA9ICBCQUJZTE9OLlF1YXRlcm5pb24uRnJvbVJvdGF0aW9uTWF0cml4KCBsb29rQXQgKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldFRhcmdldFRyYW5zZm9ybShuZXh0UG9zaXRpb24sIG5leHRSb3RhdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllRlNNLlByb2Nlc3NBY3Rpb24oem9tYmllQWN0aW9uTmFtZXMuV0FMSyk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0UmFuZG9tU3RyZW5ndGgobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBPblNob3RSZWNpZXZlZCgpIHtcclxuICAgICAgICB0aGlzLl9sYXN0RGFtYWdlVGltZSA9IEdhbWVUaW1lci5HZXRFbGFwc2VkVGltZVNlY29uZHMoKTtcclxuICAgICAgICB0aGlzLlNvdW5kUGxheWVyLlBsYXlTb3VuZChcIlpPTUJJRV9BVFRBQ0tFRFwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5pbXBvcnQgem9tYmllQWN0aW9uTmFtZXMgZnJvbSBcIi4uL3pvbWJpZUFjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCBab21iaWVEZWF0aFN0YXRlIGZyb20gXCIuL1pvbWJpZURlYXRoU3RhdGUuanNcIjtcclxuaW1wb3J0IFpvbWJpZUlkbGVTdGF0ZSBmcm9tIFwiLi9ab21iaWVJZGxlU3RhdGUuanNcIjtcclxuaW1wb3J0IFpvbWJpZVdhbGtTdGF0ZSBmcm9tIFwiLi9ab21iaWVNb3ZlU3RhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJpZUF0dGFja1N0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcblxyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5JRExFKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab21iaWVJZGxlU3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5ERUFUSCk6IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZURlYXRoU3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5XQUxLKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab21iaWVXYWxrU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgT25FbnRlcih6b21iaWVCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLnpvbWJpZUJlaGF2aW91ciA9IHpvbWJpZUJlaGF2aW91cjtcclxuICAgICAgICB0aGlzLnpvbWJpZURhbWFnZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuX3RpbWVUb0RlYWxEYW1hZ2VTZWNvbmRzID0gMi43O1xyXG4gICAgICAgIHRoaXMuX2RlYWxEYW1hZ2VUaW1lciA9IHRoaXMuX3RpbWVUb0RlYWxEYW1hZ2VTZWNvbmRzICogMC41O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQW5pbUdyb3VwID0gem9tYmllQmVoYXZpb3VyLmF0dGFja0FuaW1Hcm91cDtcclxuICAgICAgICB0aGlzLmF0dGFja0FuaW1Hcm91cC5zdGFydCh0cnVlLCAxLjAsdGhpcy5hdHRhY2tBbmltR3JvdXAuZnJvbSwgdGhpcy5hdHRhY2tBbmltR3JvdXAudG8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tBbmltR3JvdXAuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMuX2RlYWxEYW1hZ2VUaW1lciA+PSB0aGlzLl90aW1lVG9EZWFsRGFtYWdlU2Vjb25kcykge1xyXG4gICAgICAgICAgICB0aGlzLkF0dGFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9kZWFsRGFtYWdlVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnpvbWJpZUJlaGF2aW91ci5Tb3VuZFBsYXllci5QbGF5U291bmQoXCJaT01CSUVfUFVOQ0hcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RlYWxEYW1hZ2VUaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgQXR0YWNrKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyVGFyZ2V0ID0gdGhpcy56b21iaWVCZWhhdmlvdXI/LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGlmKCFjdXJyZW50UGxheWVyVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbkRhbWFnZSA9IDI7XHJcbiAgICAgICAgY29uc3QgbWF4RGFtYWdlID0gODtcclxuICAgICAgICBjb25zdCByYW5kb21EYW1hZ2UgPSBNYXRoLnJhbmRvbSgpICogKG1heERhbWFnZSAtIG1pbkRhbWFnZSArIDEpICsgbWluRGFtYWdlO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXJUYXJnZXQucGxheWVyUHJvcHMuRGVhbERhbWFnZShyYW5kb21EYW1hZ2UpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbWl9BXSBBdHRhY2t1YXRpb24hIERhbWFnZTogXCIgKyByYW5kb21EYW1hZ2UpXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVEZWF0aFN0YXRlIHtcclxuICAgIEhhbmRsZUFjdGlvbihhY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgT25FbnRlcih6b21iaWVCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLnpvbWJpZUJlaGF2aW91ciA9IHpvbWJpZUJlaGF2aW91cjtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbUdyb3VwID0gem9tYmllQmVoYXZpb3VyLmRlYXRoQW5pbUdyb3VwO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltR3JvdXAuc3RhcnQodHJ1ZSwgMS4wLHRoaXMuZGVhdGhBbmltR3JvdXAuZnJvbSwgdGhpcy5kZWF0aEFuaW1Hcm91cC50bywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltR3JvdXAubG9vcEFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHpvbWJpZUJlaGF2aW91ci5waHlzaWNzQm9keS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllQmVoYXZpb3VyLlNvdW5kUGxheWVyLlBsYXlTb3VuZChcIlpPTUJJRV9ERUFUSFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVjYXlUaW1lTXMgPSA1ICogMTAwMDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuT25FeGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllQmVoYXZpb3VyLk9uRGVzdHJveSgpXHJcbiAgICAgICAgfSwgZGVjYXlUaW1lTXMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbUdyb3VwLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHt9XHJcbn0iLCJpbXBvcnQgeyBVbml0U3RhdGVCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL3VuaXRzL3VuaXRTdGF0ZUJhc2UuanNcIjtcclxuaW1wb3J0IHpvbWJpZUFjdGlvbk5hbWVzIGZyb20gXCIuLi96b21iaWVBY3Rpb25OYW1lcy5qc1wiO1xyXG5pbXBvcnQgWm9tYmllRGVhdGhTdGF0ZSBmcm9tIFwiLi9ab21iaWVEZWF0aFN0YXRlLmpzXCI7XHJcbmltcG9ydCBab21iaWVXYWxrU3RhdGUgZnJvbSBcIi4vWm9tYmllTW92ZVN0YXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVJZGxlU3RhdGUgZXh0ZW5kcyBVbml0U3RhdGVCYXNlIHtcclxuXHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLldBTEspOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZVdhbGtTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2Uoem9tYmllQWN0aW9uTmFtZXMuREVBVEgpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZURlYXRoU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLkFUVEFDSyk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgT25FbnRlcih6b21iaWVCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLmlkbGVBbmltR3JvdXAgPSB6b21iaWVCZWhhdmlvdXIuaWRsZUFuaW1Hcm91cDtcclxuICAgICAgICB0aGlzLmlkbGVBbmltR3JvdXAuc3RhcnQodHJ1ZSwgMS4wLHRoaXMuaWRsZUFuaW1Hcm91cC5mcm9tLCB0aGlzLmlkbGVBbmltR3JvdXAudG8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgdGhpcy5pZGxlQW5pbUdyb3VwLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHt9XHJcbn0iLCJpbXBvcnQgeyBVbml0U3RhdGVCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL3VuaXRzL3VuaXRTdGF0ZUJhc2UuanNcIjtcclxuaW1wb3J0IHpvbWJpZUFjdGlvbk5hbWVzIGZyb20gXCIuLi96b21iaWVBY3Rpb25OYW1lcy5qc1wiO1xyXG5pbXBvcnQgWm9tYmllQXR0YWNrU3RhdGUgZnJvbSBcIi4vWm9tYmllQXR0YWNrU3RhdGUuanNcIjtcclxuaW1wb3J0IFpvbWJpZURlYXRoU3RhdGUgZnJvbSBcIi4vWm9tYmllRGVhdGhTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgWm9tYmllSWRsZVN0YXRlIGZyb20gXCIuL1pvbWJpZUlkbGVTdGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmllV2Fsa1N0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcblxyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5JRExFKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab21iaWVJZGxlU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLkRFQVRIKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBab21iaWVEZWF0aFN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5BVFRBQ0spOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZUF0dGFja1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW50ZXIoem9tYmllQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbUdyb3VwID0gem9tYmllQmVoYXZpb3VyLndhbGtBbmltR3JvdXA7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbUdyb3VwLnN0YXJ0KHRydWUsIDEuMCx0aGlzLndhbGtBbmltR3JvdXAuZnJvbSwgdGhpcy53YWxrQW5pbUdyb3VwLnRvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25FeGl0KCkge1xyXG4gICAgICAgIHRoaXMud2Fsa0FuaW1Hcm91cC5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgSURMRSA6IFwiSWRsZVwiLFxyXG4gICAgV0FMSzogXCJXYWxrXCIsXHJcbiAgICBERUFUSDogXCJEZWF0aFwiLFxyXG4gICAgQVRUQUNLOiBcIkF0dGFja1wiLFxyXG4gICAgU1RPUF9BVFRBQ0s6IFwiU3RvcEF0dGFja1wiXHJcbn0iLCJpbXBvcnQgVW5pdEZTTUJhc2UgZnJvbSBcIi4uLy4uL3VuaXRzL3VuaXRGc21CYXNlLmpzXCI7XHJcbmltcG9ydCBab21iaWVJZGxlU3RhdGUgZnJvbSBcIi4vY29uY3JldGUvWm9tYmllSWRsZVN0YXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVGU00gZXh0ZW5kcyBVbml0RlNNQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih6b21iaWVCZWhhdmlvdXIpIHtcclxuICAgICAgICBzdXBlcih6b21iaWVCZWhhdmlvdXIpO1xyXG4gICAgICAgIHpvbWJpZUJlaGF2aW91ci5hdHRhY2tBbmltR3JvdXAuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZURlZmF1bHRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFpvbWJpZUlkbGVTdGF0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVUaW1lciBmcm9tIFwiLi4vY29tbW9uL0dhbWVUaW1lci5qc1wiO1xyXG5pbXBvcnQgeyBHYW1lQmVoYXZpb3VyIH0gZnJvbSBcIi4uL2NvbW1vbi9nYW1lQmVoYXZpb3VyLmpzXCI7XHJcbmltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9tb2RlbExvYWRlci5qc1wiO1xyXG5pbXBvcnQgR2FtZVJ1bGVzQ2hlYXRzIGZyb20gXCIuL0dhbWVSdWxlc0NoZWF0cy5qc1wiO1xyXG5pbXBvcnQgRW5lbXlTcGF3bmVyIGZyb20gXCIuL2VuZW1pZXMvZW5lbXlTcGF3bmVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUnVsZXNCZWhhdmlvdXIgZXh0ZW5kcyBHYW1lQmVoYXZpb3VyIHtcclxuXHJcbiAgICBzdGF0aWMgSXNQcm9kdWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgd29ybGQsIHNvdW5kUGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuZW5lbXlTcGF3bmVyID0gbmV3IEVuZW15U3Bhd25lcihzY2VuZSwgdGhpcy53b3JsZCwgc291bmRQbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25EZWxheUluU2Vjb25kcyA9IDI7XHJcbiAgICAgICAgdGhpcy5zcGF3blRpbWVyID0gdGhpcy5zcGF3bkRlbGF5SW5TZWNvbmRzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFpvbWJpZXNDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhab21iaWVzQ291bnQgPSAxMDtcclxuICAgICAgICB0aGlzLmlzR2FtZURvbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5DdXJyZW50Wm9tYmllc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5fem9tYmllQWRkaXRpb25IcCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc291bmRQbGF5ZXIgPSBzb3VuZFBsYXllcjtcclxuICAgICAgICBpZighR2FtZVJ1bGVzQmVoYXZpb3VyLklzUHJvZHVjdGlvbikge1xyXG4gICAgICAgICAgICBuZXcgR2FtZVJ1bGVzQ2hlYXRzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBJbml0QXN5bmMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Bhd25Qb2ludHNEYXRhID0gYXdhaXQgbmV3IE1vZGVsTG9hZGVyKHRoaXMuc2NlbmUsIG51bGwsIFwiLi9Bc3NldHMvYWktZGF0YS9cIiwgXCJhaS1kYXRhLXNwYXduLXBvaW50cy5nbGJcIikuTG9hZEFzeW5jKCk7XHJcbiAgICAgICAgdGhpcy5zcGF3blBvaW50c0FycmF5ID0gc3Bhd25Qb2ludHNEYXRhLm1lc2hlc1swXS5nZXRDaGlsZFRyYW5zZm9ybU5vZGVzKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNwYXduIHBvaW50cyBsZW5ndGg6IFwiICsgdGhpcy5zcGF3blBvaW50c0FycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIEdhbWVUaW1lci5PblRpY2tPbmVTZWNvbmRPYnNlcnZhYmxlLmFkZCgoZWxhcHNlZFNlY29uZHMpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNHYW1lRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihlbGFwc2VkU2Vjb25kcyAlIDYwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl96b21iaWVBZGRpdGlvbkhwICs9IDU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltHYW1lUnVsZXNCZWhhdmlvdXJdIHNldCBfem9tYmllQWRkaXRpb25IcDogXCIgKyB0aGlzLl96b21iaWVBZGRpdGlvbkhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihlbGFwc2VkU2Vjb25kcyAlIDEyMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhab21iaWVzQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0dhbWVSdWxlc0JlaGF2aW91cl0gc2V0IG1heFpvbWJpZXNDb3VudDogXCIgKyB0aGlzLm1heFpvbWJpZXNDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53b3JsZFxyXG4gICAgICAgICAgICAuR2V0RW50aXR5KFwiTE9DQUxfUExBWUVSXCIpXHJcbiAgICAgICAgICAgIC5HZXRDb21wb25lbnQoXCJMb2NhbFBsYXllckJlaGF2aW91clwiKVxyXG4gICAgICAgICAgICAucGxheWVyUHJvcHMuSXNEZWFkT2JzZXJ2YWJsZS5hZGQoKGlzRGVhZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNEZWFkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0dhbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsU3Bhd24oKTtcclxuXHJcbiAgICAgICAgLy90ZXN0XHJcbiAgICAgICAgdGhpcy5TaG93Wm9tYmllQ291bnREZWJ1Z0FzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgU2hvd1pvbWJpZUNvdW50RGVidWdBc3luYygpIHtcclxuICAgICAgICB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXMsIDEwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMuY3VycmVudFpvbWJpZXNDb3VudDogXCIgKyB0aGlzLmN1cnJlbnRab21iaWVzQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsU3Bhd24oKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltHYW1lUnVsZXNCZWhhdmlvdXJdIE9uU3RhcnQhIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0dhbWVEb25lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSGFuZGxlU3Bhd25Mb29wKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlU3Bhd25Mb29wKGRlbHRhVGltZSkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRab21iaWVzQ291bnQgPj0gdGhpcy5tYXhab21iaWVzQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blRpbWVyID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGF3blRpbWVyID49IHRoaXMuc3Bhd25EZWxheUluU2Vjb25kcykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5TcGF3blpvbWJpZUFzeW5jKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25UaW1lciA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwYXduVGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIFNwYXduWm9tYmllQXN5bmMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3Bhd25Qb2ludCA9IHRoaXMuR2V0UmFuZG9tU3Bhd25Qb2ludCgpO1xyXG4gICAgICAgIGNvbnN0IHpvbWJpZURhdGEgPSBhd2FpdCB0aGlzLmVuZW15U3Bhd25lci5DcmVhdGVab21iaWVFbnRpdHlBc3luYyhcclxuICAgICAgICAgICAgLy9uZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDM1KVxyXG4gICAgICAgICAgICBzcGF3blBvaW50LFxyXG4gICAgICAgICAgICB0aGlzLl96b21iaWVBZGRpdGlvbkhwXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMud29ybGQuQWRkRW50aXR5KHpvbWJpZURhdGEuZW50aXR5LCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5DdXJyZW50Wm9tYmllc0FycmF5LnB1c2goem9tYmllRGF0YS5iZWhhdmlvdXIpO1xyXG5cclxuICAgICAgICAvLyBkZWNyZWFzZSBjb3VudGVyIGFuZCByZW1vdmUgZnJvbSBhcnJheSBvbiBkZWFkXHJcbiAgICAgICAgem9tYmllRGF0YS5iZWhhdmlvdXIuem9tYmllUHJvcHMuSXNEZWFkT2JzZXJ2YWJsZS5hZGQoKGlzRGVhZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0RlYWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB6b21iaWVJbmRleCA9IHRoaXMuQ3VycmVudFpvbWJpZXNBcnJheS5pbmRleE9mKHpvbWJpZURhdGEuYmVoYXZpb3VyKTtcclxuICAgICAgICAgICAgICAgIGlmICh6b21iaWVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50Wm9tYmllc0FycmF5LnNwbGljZSh6b21iaWVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9tYmllc0NvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Wm9tYmllc0NvdW50Kys7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBHZXRSYW5kb21TcGF3blBvaW50KCkge1xyXG5cclxuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLnNwYXduUG9pbnRzQXJyYXk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuc3Bhd25Qb2ludHNBcnJheS5sZW5ndGgpXS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV2FpdFVudGlsIH0gZnJvbSBcIi4uLy4uL1V0aWxzLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckdVSUJlaGF2aW91ciBleHRlbmRzIEdhbWVCZWhhdmlvdXIge1xyXG5cclxuXHJcbiAgICBhc3luYyBJbml0QXN5bmMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZW50aXR5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW1BsYXllckdVSUJlaGF2aW91cl0gdGhlICdlbnRpdHknIGlzIG1pc3NpbmchYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyQmVoYXZpb3VyID0gdGhpcy5lbnRpdHkuR2V0Q29tcG9uZW50KFwiTG9jYWxQbGF5ZXJCZWhhdmlvdXJcIik7XHJcblxyXG4gICAgICAgIGF3YWl0IFdhaXRVbnRpbCgoKSA9PiB0aGlzLnBsYXllckJlaGF2aW91ci5pc0luaXRpYWxpemVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcyA9IHRoaXMucGxheWVyQmVoYXZpb3VyLnBsYXllclByb3BzO1xyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllclByb3BzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW1BsYXllckdVSUJlaGF2aW91cl0gdGhlICdwbGF5ZXJQcm9wcycgaXMgbWlzc2luZyFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuU2V0dXBHdWlFbGVtZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uQXdha2UoKSB7fVxyXG4gICAgT25TdGFydCgpIHtcclxuICAgIH1cclxuICAgIE9uRGlzYWJsZSgpIHt9XHJcbiAgICBPbkRlc3Ryb3koKSB7fVxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7fVxyXG5cclxuICAgIFNldHVwR3VpRWxlbWVudHMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkdmFuY2VkVGV4dHVyZSA9IEJBQllMT04uR1VJLkFkdmFuY2VkRHluYW1pY1RleHR1cmUuQ3JlYXRlRnVsbHNjcmVlblVJKFwiVUlcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBuZXcgQkFCWUxPTi5HVUkuR3JpZCgpO1xyXG4gICAgICAgIGFkdmFuY2VkVGV4dHVyZS5hZGRDb250cm9sKGdyaWQpO1xyXG5cclxuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMC4zMyk7XHJcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDAuMzMpO1xyXG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigwLjMzKTtcclxuICAgICAgICBncmlkLmFkZFJvd0RlZmluaXRpb24oMC4zMyk7XHJcbiAgICAgICAgZ3JpZC5hZGRSb3dEZWZpbml0aW9uKDAuMzMpO1xyXG4gICAgICAgIGdyaWQuYWRkUm93RGVmaW5pdGlvbigwLjMzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaHBCYXJTbGlkZXIgPSB0aGlzLkNyZWF0ZUhwQmFyU2xpZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldE5vcm1hbGl6ZWRIcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvcHMuR2V0SHAoKSAvIHRoaXMucGxheWVyUHJvcHMuR2V0TWF4SHAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhwQmFyU2xpZGVyLnZhbHVlID0gZ2V0Tm9ybWFsaXplZEhwKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5IcE9ic2VydmFibGUuYWRkKChjdXJyZW50SHApID0+IHtcclxuICAgICAgICAgICAgaHBCYXJTbGlkZXIudmFsdWUgPSBnZXROb3JtYWxpemVkSHAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5Jc0RlYWRPYnNlcnZhYmxlLmFkZCgoaXNEZWFkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRGVhZCkge1xyXG4gICAgICAgICAgICAgICAgaHBCYXJTbGlkZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGVsZW0sIHJvdywgY29sXHJcbiAgICAgICAgZ3JpZC5hZGRDb250cm9sKGhwQmFyU2xpZGVyLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBDcmVhdGVIcEJhclNsaWRlcigpIHtcclxuICAgICAgICBjb25zdCBocEJhclNsaWRlciA9IG5ldyBCQUJZTE9OLkdVSS5TbGlkZXIoKTtcclxuICAgICAgICBocEJhclNsaWRlci5taW5pbXVtID0gMDtcclxuICAgICAgICBocEJhclNsaWRlci5tYXhpbXVtID0gMTtcclxuICAgICAgICBocEJhclNsaWRlci5pc1RodW1iQ2xhbXBlZCA9IGZhbHNlO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLmlzVmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICBocEJhclNsaWRlci5kaXNwbGF5VGh1bWIgPSBmYWxzZTtcclxuICAgICAgICBocEJhclNsaWRlci5oZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgICBocEJhclNsaWRlci53aWR0aCA9IFwiMjAwcHhcIjtcclxuXHJcbiAgICAgICAgaHBCYXJTbGlkZXIuY29sb3IgPSBcInJlZFwiO1xyXG5cclxuICAgICAgICBocEJhclNsaWRlci52YWx1ZSA9IDAuNTtcclxuICAgICAgICBocEJhclNsaWRlci5pc0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhwQmFyU2xpZGVyO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgSURMRSA6IFwiSWRsZVwiLFxyXG4gICAgV0FMSzogXCJXYWxrXCIsXHJcbiAgICBERUFUSDogXCJEZWF0aFwiLFxyXG4gICAgU0hPT1Q6IFwiU2hvb3RcIixcclxuICAgIFNUT1BfU0hPT1RJTkc6IFwiU3RvcFNob290XCJcclxufSIsImltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhTdGF0ZSBleHRlbmRzIFVuaXRTdGF0ZUJhc2Uge1xyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtEZWF0aFN0YXRlXSBPbkVudGVyKCR7cGxheWVyQmVoYXZpb3VyfSlgKTtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbSA9IHBsYXllckJlaGF2aW91ci5wbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheS5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiRGVhdGhcIik7XHJcbiAgICAgICAgdGhpcy5kZWF0aEFuaW0uc3RhcnQoZmFsc2UsIDEuMCwgdGhpcy5kZWF0aEFuaW0uZnJvbSwgdGhpcy5kZWF0aEFuaW0udG8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbS5sb29wQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgcGxheWVyQmVoYXZpb3VyLmNhbWVyYS5hdHRhY2hDb250cm9sKCk7XHJcbiAgICAgICAgcGxheWVyQmVoYXZpb3VyLnBoeXNpY3NCb2R5LmRpc3Bvc2UoKTtcclxuICAgICAgICBwbGF5ZXJCZWhhdmlvdXIuU291bmRQbGF5ZXIuUGxheVNvdW5kKFwiUExBWUVSX0RFQVRIXCIpO1xyXG4gICAgfTtcclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbRGVhdGhTdGF0ZV0gT25FeGl0KClgKTtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbS5zdG9wKCk7XHJcbiAgICB9O1xyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYWN0aW9uTmFtZXMgZnJvbSBcIi4uL2FjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5pbXBvcnQgRGVhdGhTdGF0ZSBmcm9tIFwiLi9EZWF0aFN0YXRlLmpzXCI7XHJcbmltcG9ydCBTaG9vdFN0YXRlIGZyb20gXCIuL1Nob290U3RhdGUuanNcIjtcclxuaW1wb3J0IFdhbGtTdGF0ZSBmcm9tIFwiLi9XYWxrU3RhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkbGVTdGF0ZSBleHRlbmRzIFVuaXRTdGF0ZUJhc2Uge1xyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZShhY3Rpb25OYW1lcy5XQUxLKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXYWxrU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKGFjdGlvbk5hbWVzLkRFQVRIKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWF0aFN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZShhY3Rpb25OYW1lcy5TSE9PVCk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2hvb3RTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtJZGxlU3RhdGVdIE9uRW50ZXIoJHtwbGF5ZXJCZWhhdmlvdXJ9KWApO1xyXG5cclxuICAgICAgICB0aGlzLmlkbGVBbmltID0gcGxheWVyQmVoYXZpb3VyLnBsYXllckFuaW1hdGlvbnNHcm91cEFycmF5LmZpbmQoYWcgPT4gYWcubmFtZSA9PT0gXCJJZGxlXCIpO1xyXG4gICAgICAgIHRoaXMuaWRsZUFuaW0uc3RhcnQodHJ1ZSwgMS4wLCB0aGlzLmlkbGVBbmltLmZyb20sIHRoaXMuaWRsZUFuaW0udG8sIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW0lkbGVTdGF0ZV0gT25FeGl0KClgKTtcclxuICAgICAgICB0aGlzLmlkbGVBbmltLnN0b3AoKTtcclxuICAgIH07XHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBhY3Rpb25OYW1lcyBmcm9tIFwiLi4vYWN0aW9uTmFtZXMuanNcIjtcclxuaW1wb3J0IHsgVW5pdFN0YXRlQmFzZSB9IGZyb20gXCIuLi8uLi91bml0cy91bml0U3RhdGVCYXNlLmpzXCI7XHJcbmltcG9ydCBEZWF0aFN0YXRlIGZyb20gXCIuL0RlYXRoU3RhdGUuanNcIjtcclxuaW1wb3J0IElkbGVTdGF0ZSBmcm9tIFwiLi9JZGxlU3RhdGUuanNcIjtcclxuaW1wb3J0IFdhbGtTdGF0ZSBmcm9tIFwiLi9XYWxrU3RhdGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvb3RTdGF0ZSBleHRlbmRzIFVuaXRTdGF0ZUJhc2Uge1xyXG4gICAgc3RhdGljIFNfU0hPT1RfVkZYID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zaG9vdERlbGF5U2Vjb25kcyA9IDAuMzM7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMuc2hvb3REZWxheVNlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHsgXHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgKGFjdGlvbk5hbWVzLklETEUpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElkbGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2UoYWN0aW9uTmFtZXMuREVBVEgpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERlYXRoU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKGFjdGlvbk5hbWVzLldBTEspOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdhbGtTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2UoYWN0aW9uTmFtZXMuU1RPUF9TSE9PVElORyk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSWRsZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbU2hvb3RTdGF0ZV0gT25FbnRlcigpXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQmVoYXZpb3VyID0gcGxheWVyQmVoYXZpb3VyO1xyXG4gICAgICAgIHRoaXMuc2hvb3RBbmltID0gcGxheWVyQmVoYXZpb3VyLnBsYXllckFuaW1hdGlvbnNHcm91cEFycmF5LmZpbmQoYWcgPT4gYWcubmFtZSA9PT0gXCJHdW5wbGF5XCIpO1xyXG4gICAgICAgIHRoaXMuc2hvb3RBbmltLnN0YXJ0KHRydWUsIDEuMCwgdGhpcy5zaG9vdEFuaW0uZnJvbSwgdGhpcy5zaG9vdEFuaW0udG8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGxheWVyQmVoYXZpb3VyLnNjZW5lOyAgICBcclxuICAgICAgICB0aGlzLm1lc2hGb3JSYXkgPSBwbGF5ZXJCZWhhdmlvdXIucGxheWVyQm9keVRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLkNhc3RSYXkoKTtcclxuICAgICAgICB0aGlzLnBsYXllckJlaGF2aW91ci5yb3RhdGlvblNwZWVkTW9kaWZpZXIgPSAwLjA1O1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlUGFydGljbGUoKTsgIFxyXG4gICAgICAgIHRoaXMuX2RhbWFnZSA9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgT25FeGl0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbU2hvb3RTdGF0ZV0gT25FeGl0KClcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuaW0uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucmF5SGVscGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnBsYXllckJlaGF2aW91ci5yb3RhdGlvblNwZWVkTW9kaWZpZXIgPSAxLjA7XHJcbiAgICAgICAgLy90aGlzLm11enpsZVBhcnRpY2xlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZih0aGlzLnRpbWVyID49IHRoaXMuc2hvb3REZWxheVNlY29uZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5PblNob290KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBPblNob290KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTSE9PVCFcIik7XHJcbiAgICAgICAgdGhpcy5FbWl0TXV6emxlUGFydGljbGUoKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NFbmdpbmUgPSB0aGlzLnNjZW5lLmdldFBoeXNpY3NFbmdpbmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZighcGh5c2ljc0VuZ2luZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5yYXlIZWxwZXIgfHwgIXRoaXMucmF5SGVscGVyLnJheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSYXkgPSB0aGlzLnJheUhlbHBlci5yYXk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTaG9vdCEgQ3VycmVudCByYXk6IFwiICsgY3VycmVudFJheS5kaXJlY3Rpb24udG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob290U3RhcnRQb2ludCA9IGN1cnJlbnRSYXkub3JpZ2luO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IGN1cnJlbnRSYXkub3JpZ2luLmFkZChjdXJyZW50UmF5LmRpcmVjdGlvbi5zY2FsZShjdXJyZW50UmF5Lmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBjb25zdCBoaXQgPSBwaHlzaWNzRW5naW5lLnJheWNhc3Qoc2hvb3RTdGFydFBvaW50LCBlbmQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQ/OiBcIiArIGhpdC5oYXNIaXQpO1xyXG4gICAgICAgIGlmIChoaXQuaGFzSGl0ICYmIGhpdC5ib2R5ICYmIGhpdC5ib2R5LnRyYW5zZm9ybU5vZGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYFNob290IGJvZHkgbmFtZSAnJHtoaXQuYm9keS50cmFuc2Zvcm1Ob2RlLm5hbWV9JyAsIHVJZDogJyR7aGl0LmJvZHkudHJhbnNmb3JtTm9kZS51bmlxdWVJZH0nYCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVJZCA9IGhpdC5ib2R5LnRyYW5zZm9ybU5vZGUudW5pcXVlSWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IHRoaXMucGxheWVyQmVoYXZpb3VyLldvcmxkO1xyXG5cclxuICAgICAgICAgICAgaWYoIXdvcmxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwid29ybGQgaXMgbWlzc2luZyEhIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15RW50aXR5ID0gd29ybGQuR2V0RW50aXR5QnlVbmlxdWVJZCh1bmlxdWVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZihlbmVteUVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFTkVNWSBERVRFQ1RFRCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgem9tYmllQ29tcCA9IGVuZW15RW50aXR5LkdldENvbXBvbmVudChcIkVuZW15Wm9tYmllQmVoYXZpb3VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZUNvbXAuT25TaG90UmVjaWV2ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB6b21iaWVDb21wLnpvbWJpZVByb3BzLkRlYWxEYW1hZ2UodGhpcy5fZGFtYWdlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8vRE8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHRoaXMucGxheWVyQmVoYXZpb3VyLlNvdW5kUGxheWVyLlBsYXlTb3VuZChcIlBMQVlFUl9TSE9UXCIpO1xyXG4gICAgfVxyXG4gICAgQ2FzdFJheSgpIHsgICAgICAgXHJcblx0ICAgIC8vY29uc3QgcmF5ID0gbmV3IEJBQllMT04uUmF5KG9yaWdpbiwgZGlyLCBsZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHJheSA9IG5ldyBCQUJZTE9OLlJheSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJPcmlnaW4gUE9TOiBcIiArIHJheS5vcmlnaW4udG9TdHJpbmcoKSk7IFxyXG5cdFx0dGhpcy5yYXlIZWxwZXIgPSBuZXcgQkFCWUxPTi5SYXlIZWxwZXIocmF5KTtcdFxyXG4gICAgICAgIGNvbnN0IGxvY2FsTWVzaERpcmVjdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMSk7XHJcblx0ICAgIGNvbnN0IGxvY2FsTWVzaE9yaWdpbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTI1MCwgMC4wKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSAxMDAgKiAxMDAwO1xyXG4gICAgICAgIHRoaXMucmF5SGVscGVyLmF0dGFjaFRvTWVzaCh0aGlzLm1lc2hGb3JSYXksIGxvY2FsTWVzaERpcmVjdGlvbiwgbG9jYWxNZXNoT3JpZ2luLCBsZW5ndGgpO1x0XHJcblx0XHR0aGlzLnJheUhlbHBlci5zaG93KHRoaXMuc2NlbmUsIG5ldyBCQUJZTE9OLkNvbG9yMygxLCAwLCAwKSk7XHRcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZVBhcnRpY2xlKCkge1xyXG4gICAgICAgIGlmKFNob290U3RhdGUuU19TSE9PVF9WRlggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG11enpsZVBhcnRpY2xlID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwgNTAwLCB0aGlzLnNjZW5lKTtcclxuICAgICAgICAvL1RleHR1cmUgb2YgZWFjaCBwYXJ0aWNsZVxyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJBc3NldHMvdGV4dHVyZXMvZmxhcmVfdGV4dHVyZV8wLnBuZ1wiLCB0aGlzLnNjZW5lKTtcclxuICAgICAgICAvLyBXaGVyZSB0aGUgcGFydGljbGVzIGNvbWUgZnJvbVxyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBuZXcgQkFCWUxPTi5TcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoMC4wMSk7XHJcbiAgICAgICAgY29uc3QgbXV6emxlTm9kZSA9IG5ldyBCQUJZTE9OLlRyYW5zZm9ybU5vZGUoXCJtdXp6bGVcIiwgdGhpcy5zY2VuZSk7XHJcbiAgICAgICAgbXV6emxlTm9kZS5zZXRQYXJlbnQodGhpcy5wbGF5ZXJCZWhhdmlvdXIud2VhcG9uUm9vdE1lc2gpO1xyXG4gICAgICAgIG11enpsZU5vZGUucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIG11enpsZU5vZGUucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0wLjAyLCAwLCAwLjM1KTtcclxuICAgICAgICBtdXp6bGVOb2RlLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDEsIDEpO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmVtaXR0ZXIgPSBtdXp6bGVOb2RlO1xyXG4gICAgICAgIGNvbnN0IGVtaXRTY2FsZSA9IDAuNTtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5taW5TY2FsZVggPSAwO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1pblNjYWxlWSA9IDA7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWF4U2NhbGVYID0gZW1pdFNjYWxlO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1heFNjYWxlWSA9IGVtaXRTY2FsZTtcclxuICBcclxuICAgICAgICAvLyBDb2xvcnMgb2YgYWxsIHBhcnRpY2xlc1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLjMsIDApO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjYsIDAuMTUsIDAuMTUpO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLjgyLCAwLjQzKTtcclxuICAgICAgICAvLyBTaXplIG9mIGVhY2ggcGFydGljbGUgKHJhbmRvbSBiZXR3ZWVuLi4uXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWluU2l6ZSA9IDEuNSAqIHNjYWxlO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1heFNpemUgPSAyLjUgKiBzY2FsZTtcclxuICAgICAgICAvLyBMaWZlIHRpbWUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5taW5MaWZlVGltZSA9IC4xO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1heExpZmVUaW1lID0gLjE7XHJcbiAgICAgICAgLy8gRW1pc3Npb24gcmF0ZVxyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcclxuICAgICAgICAvLyBCbGVuZCBtb2RlIDogQkxFTkRNT0RFX09ORU9ORSwgb3IgQkxFTkRNT0RFX1NUQU5EQVJEXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xyXG4gICAgICAgIC8vIFNldCB0aGUgZ3Jhdml0eSBvZiBhbGwgcGFydGljbGVzXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTksIDApO1xyXG4gICAgICAgIC8vIERpcmVjdGlvbiBvZiBlYWNoIHBhcnRpY2xlIGFmdGVyIGl0IGhhcyBiZWVuIGVtaXR0ZWRcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygtMiwgLTIsIC0yKTtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5kaXJlY3Rpb24yID0gbmV3IEJBQllMT04uVmVjdG9yMygyLCAyLCAyKTtcclxuICAgICAgICAvLyBBbmd1bGFyIHNwZWVkLCBpbiByYWRpYW5zXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWluQW5ndWxhclNwZWVkID0gMDtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xyXG4gICAgICAgIC8vIFNwZWVkXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWluRW1pdFBvd2VyID0gMC4yNTtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5tYXhFbWl0UG93ZXIgPSAwLjM1O1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLnVwZGF0ZVNwZWVkID0gMC4wNTtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5zdGFydCgpO1xyXG4gICAgICAgIFNob290U3RhdGUuU19TSE9PVF9WRlggPSBtdXp6bGVQYXJ0aWNsZTtcclxuICAgIH1cclxuXHJcbiAgICBFbWl0TXV6emxlUGFydGljbGUoKSB7XHJcbiAgICAgICAgaWYoIVNob290U3RhdGUuU19TSE9PVF9WRlgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTaG9vdFN0YXRlLlNfU0hPT1RfVkZYLm1hbnVhbEVtaXRDb3VudCA9IDUwMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5pbXBvcnQgYWN0aW9uTmFtZXMgZnJvbSBcIi4uL2FjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCBEZWF0aFN0YXRlIGZyb20gXCIuL0RlYXRoU3RhdGUuanNcIjtcclxuaW1wb3J0IElkbGVTdGF0ZSBmcm9tIFwiLi9JZGxlU3RhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGtTdGF0ZSBleHRlbmRzIFVuaXRTdGF0ZUJhc2Uge1xyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlKGFjdGlvbk5hbWVzLklETEUpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElkbGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2UoYWN0aW9uTmFtZXMuREVBVEgpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERlYXRoU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtXYWxrU3RhdGVdIE9uRW50ZXIoJHtwbGF5ZXJCZWhhdmlvdXJ9KWApO1xyXG4gICAgICAgIHRoaXMud2Fsa0FuaW0gPSBwbGF5ZXJCZWhhdmlvdXIucGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIldhbGtcIik7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbS5zdGFydCh0cnVlLCAxLjAsIHRoaXMud2Fsa0FuaW0uZnJvbSwgdGhpcy53YWxrQW5pbS50bywgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbV2Fsa1N0YXRlXSBPbkV4aXQoKWApO1xyXG4gICAgICAgIHRoaXMud2Fsa0FuaW0uc3RvcCgpO1xyXG4gICAgfTtcclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVuaXRGU01CYXNlIGZyb20gXCIuLi91bml0cy91bml0RnNtQmFzZS5qc1wiO1xyXG5pbXBvcnQgSWRsZVN0YXRlIGZyb20gXCIuL2NvbmNyZXRlL0lkbGVTdGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyRlNNIGV4dGVuZHMgVW5pdEZTTUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyQmVoYXZpb3VyKTtcclxuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBwbGF5ZXJCZWhhdmlvdXIucGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIkRlYXRoXCIpOztcclxuICAgICAgICBkZWF0aEFuaW0uc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZURlZmF1bHRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IElkbGVTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXRGU01CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVuaXRCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLnVuaXRCZWhhdmlvdXIgPSB1bml0QmVoYXZpb3VyO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5DcmVhdGVEZWZhdWx0U3RhdGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZS5PbkVudGVyKHRoaXMudW5pdEJlaGF2aW91cik7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlRGVmYXVsdFN0YXRlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIltVbml0RlNNQmFzZV0gQ3JlYXRlRGVmYXVsdFN0YXRlKCkgaXMgbm90IGltcGxlbWVudGVkIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBQcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlLkhhbmRsZUFjdGlvbihhY3Rpb25OYW1lKTtcclxuICAgICAgICBpZihzdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlLk9uRXhpdCgpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlLk9uRW50ZXIodGhpcy51bml0QmVoYXZpb3VyKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLk9uVXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFVuaXRTdGF0ZUJhc2Uge1xyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHsgdGhyb3cgbmV3IEVycm9yKFwiSGFuZGxlQWN0aW9uKCkgbm90IGltcGxlbWVudGVkXCIpOyB9XHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge3Rocm93IG5ldyBFcnJvcihcIk9uRW50ZXIoKSBub3QgaW1wbGVtZW50ZWRcIik7fTtcclxuICAgIE9uRXhpdCgpIHt0aHJvdyBuZXcgRXJyb3IoXCJPbkV4aXQoKSBub3QgaW1wbGVtZW50ZWRcIik7fTtcclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge3Rocm93IG5ldyBFcnJvcihcIk9uVXBkYXRlKCkgbm90IGltcGxlbWVudGVkXCIpO307XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsVW5pdFN0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtOdWxsVW5pdFN0YXRlXSBIYW5kbGVBY3Rpb24oJHthY3Rpb25OYW1lfSlgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHBsYXllckJlaGF2aW91cikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtOdWxsVW5pdFN0YXRlXSBPbkVudGVyKCR7cGxheWVyQmVoYXZpb3VyfSlgKTtcclxuICAgIH07XHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW051bGxVbml0U3RhdGVdIE9uRXhpdCgpYCk7XHJcbiAgICB9O1xyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW051bGxVbml0U3RhdGVdIE9uVXBkYXRlKCR7ZGVsdGFUaW1lfSlgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvc2l0ZUdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVFbnRpdHkgZXh0ZW5kcyBDb21wb3NpdGVHYW1lQmVoYXZpb3VyIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaWRLZXksIGFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgIHN1cGVyKG51bGwpO1xyXG4gICAgICAgIHRoaXMuaWRLZXkgPSBpZEtleTtcclxuICAgICAgICB0aGlzLlVuaXF1ZUlEID0gYWJzdHJhY3RNZXNoLnVuaXF1ZUlkO1xyXG4gICAgICAgIHRoaXMuYWJzdHJhY3RNZXNoID0gYWJzdHJhY3RNZXNoO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBBZGRDb21wb25lbnQoZ2FtZUJlaGF2aW91ciwgaXNDYWxsQ2FsbGJhY2tzID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW91clR5cGVOYW1lID0gZ2FtZUJlaGF2aW91ci5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgIGlmKHRoaXMuY29tcG9uZW50c01hcC5oYXMoYmVoYXZpb3VyVHlwZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW0dhbWVFbnRpdHldIHRoZSBlbnRpdHkgd2l0aCBpZCAnJHt0aGlzLmlkS2V5fScgaXMgYWxyZWFkeSBoYXMgY29tcG9uZW50IHdpdGggdHlwZSAnJHtiZWhhdmlvdXJUeXBlTmFtZX0nIWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoaWxkQmVoYXZpb3Vycy5wdXNoKGdhbWVCZWhhdmlvdXIpO1xyXG4gICAgICAgIGdhbWVCZWhhdmlvdXIuU2V0RW50aXR5KHRoaXMpO1xyXG4gICAgICAgIGlmKGlzQ2FsbENhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBnYW1lQmVoYXZpb3VyLk9uQXdha2UoKTtcclxuICAgICAgICAgICAgZ2FtZUJlaGF2aW91ci5PblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNNYXAuc2V0KGJlaGF2aW91clR5cGVOYW1lLCBnYW1lQmVoYXZpb3VyKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBHZXRDb21wb25lbnQoYmVoYXZpb3VyVHlwZU5hbWUpIHtcclxuICAgICAgICBpZighdGhpcy5jb21wb25lbnRzTWFwLmhhcyhiZWhhdmlvdXJUeXBlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbR2FtZUVudGl0eV0gdGhlIGVudGl0eSB3aXRoIGlkICcke3RoaXMuaWRLZXl9JyBoYXMgbm90IGNvbXBvbmVudCBvZiB0eXBlOiAnJHtiZWhhdmlvdXJUeXBlTmFtZX0nIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c01hcC5nZXQoYmVoYXZpb3VyVHlwZU5hbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lSW5pdGlhbGl6ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIGxvY2F0aW9uTWVzaGVzKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25NZXNoZXMgPSBsb2NhdGlvbk1lc2hlcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBJbml0aWFsaXplQXN5bmMoKSB7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuSW5pdFBoeXNpY3NBc3luYygpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFtYmllbnRDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLDEsMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBJbml0UGh5c2ljc0FzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IGdyYXZpdHlGYWN0b3IgPSAxO1xyXG4gICAgICAgIGNvbnN0IGdyYXZpdHlWZWN0b3IgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC05LjgxICogZ3Jhdml0eUZhY3RvciwgMCk7XHJcbiAgICAgICAgY29uc3QgcGh5c2ljc1BsdWdpbiA9IG5ldyBCQUJZTE9OLkhhdm9rUGx1Z2luKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5lbmFibGVQaHlzaWNzKGdyYXZpdHlWZWN0b3IsIHBoeXNpY3NQbHVnaW4pO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgbG9jTWVzaCBvZiB0aGlzLmxvY2F0aW9uTWVzaGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcGh5c2ljc0JvZHkgPSBuZXcgQkFCWUxPTi5QaHlzaWNzQm9keShsb2NNZXNoLCBCQUJZTE9OLlBoeXNpY3NNb3Rpb25UeXBlLlNUQVRJQywgZmFsc2UsIHRoaXMuc2NlbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NTaGFwZU1lc2goXHJcbiAgICAgICAgICAgICAgICBsb2NNZXNoLCAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lICBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGh5c2ljc0JvZHkuc2hhcGUgPSBzaGFwZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFwcGx5IHBoeXNpY3MgZm9yIG1lc2g6IFwiICsgbG9jTWVzaC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb3NpdGVHYW1lQmVoYXZpb3VyIH0gZnJvbSBcIi4uL2NvbW1vbi9nYW1lQmVoYXZpb3VyLmpzXCJcclxuZXhwb3J0IGNsYXNzIFdvcmxkQmVoYXZpb3VyIGV4dGVuZHMgQ29tcG9zaXRlR2FtZUJlaGF2aW91ciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihbXSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLl9lbnRpdGllc0J5VWlkID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgQWRkRW50aXR5KGdhbWVFbnRpdHksIGlzQ2FsbENhbGxiYWNrcykge1xyXG4gICAgICAgIGlmKGlzQ2FsbENhbGxiYWNrcyl7XHJcbiAgICAgICAgICAgIGdhbWVFbnRpdHkuT25Bd2FrZSgpO1xyXG4gICAgICAgICAgICBnYW1lRW50aXR5Lk9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGlsZEJlaGF2aW91cnMucHVzaChnYW1lRW50aXR5KTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzLnNldChnYW1lRW50aXR5LmlkS2V5LCBnYW1lRW50aXR5KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbV29ybGRCZWhhdmlvdXJdIHNldCBlbnRpdHkgd2l0aCBpZCAnJHtnYW1lRW50aXR5LmlkS2V5fScsIHVpZDogJyR7Z2FtZUVudGl0eS5VbmlxdWVJRH0nYCk7XHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXNCeVVpZC5zZXQoZ2FtZUVudGl0eS5VbmlxdWVJRCwgZ2FtZUVudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0RW50aXR5KGlkS2V5KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZW50aXRpZXMuaGFzKGlkS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbV29ybGRCZWhhdmlvdXJdIFRoZXJlIGlzIG5vIGVudGl0eSB3aXRoIGlkOiBcIiArIGlkS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZ2V0KGlkS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRFbnRpdHlCeVVuaXF1ZUlkKHVuaXF1ZUlkS2V5KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuX2VudGl0aWVzQnlVaWQuaGFzKHVuaXF1ZUlkS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbV29ybGRCZWhhdmlvdXJdIFRoZXJlIGlzIG5vIGVudGl0eSB3aXRoIHVuaXF1ZUlkS2V5OiBcIiArIHVuaXF1ZUlkS2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzQnlVaWQuZ2V0KHVuaXF1ZUlkS2V5KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVbml0UHJvcHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ocFZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLkhwT2JzZXJ2YWJsZSA9IG5ldyBCQUJZTE9OLk9ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXhIcFZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLk1heEhwT2JzZXJ2YWJsZSA9IG5ldyBCQUJZTE9OLk9ic2VydmFibGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzRGVhZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNEZWFkT2JzZXJ2YWJsZSA9IG5ldyBCQUJZTE9OLk9ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYXhIcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhIcFZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBTZXRNYXhIcCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWF4SHBWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuTWF4SHBPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzLm1heEhwVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEhwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhwVmFsdWU7XHJcbiAgICB9XHJcbiAgICBTZXRIcCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaHBWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuSHBPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzLmhwVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldElzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0SXNEZWFkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLklzRGVhZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuaXNEZWFkKTtcclxuICAgIH1cclxuXHJcbiAgICBEZWFsRGFtYWdlKGRhbWFnZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIcCA9IHRoaXMuR2V0SHAoKTtcclxuICAgICAgICBsZXQgcmVzdWx0SHAgPSBjdXJyZW50SHAgLSBkYW1hZ2U7XHJcbiAgICAgICAgaWYocmVzdWx0SHAgPCAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdEhwID0gMDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRoaXMuU2V0SHAocmVzdWx0SHApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVVbml0UHJvcHMgZnJvbSBcIi4vZ2FtZVVuaXRQcm9wcy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyUHJvcHMgZXh0ZW5kcyBHYW1lVW5pdFByb3BzIHtcclxuICAgIFxyXG59IiwiaW1wb3J0IEdhbWVVbml0UHJvcHMgZnJvbSBcIi4vZ2FtZVVuaXRQcm9wcy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmllUHJvcHMgZXh0ZW5kcyBHYW1lVW5pdFByb3BzIHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBNb2RlbExvYWRlciB9IGZyb20gXCIuL2NvbW1vbi9tb2RlbExvYWRlci5qc1wiXHJcbmltcG9ydCB7IFNjZW5lSW5pdGlhbGl6ZXIgfSBmcm9tIFwiLi9nYW1lL3NjZW5lSW5pdGlhbGl6ZXIuanNcIjtcclxuaW1wb3J0IEhhdm9rUGh5c2ljcyBmcm9tIFwiLi4vSGF2b2tQaHlzaWNzX2VzLmpzXCI7XHJcbmltcG9ydCB7IFdvcmxkQmVoYXZpb3VyIH0gZnJvbSBcIi4vZ2FtZS93b3JsZEJlaGF2aW91ci5qc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFBsYXllckJlaGF2aW91ciB9IGZyb20gXCIuL2NvbXBvbmVudHMvTG9jYWxQbGF5ZXJCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IHsgR2FtZUVudGl0eSB9IGZyb20gXCIuL2dhbWUvZ2FtZUVudGl0eS5qc1wiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJNb2RlbExvYWRlciB9IGZyb20gXCIuL2NoYXJhY3Rlci9jaGFyYWN0ZXJNb2RlbExvYWRlci5qc1wiO1xyXG5pbXBvcnQgUGxheWVyR1VJQmVoYXZpb3VyIGZyb20gXCIuL2NvbXBvbmVudHMvcGxheWVyR1VJQmVoYXZpb3VyLmpzXCI7XHJcbmltcG9ydCBHYW1lUnVsZXNCZWhhdmlvdXIgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lUnVsZXNCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IEdhbWVUaW1lciBmcm9tIFwiLi9jb21tb24vR2FtZVRpbWVyLmpzXCI7XHJcbmltcG9ydCBTb3VuZFBsYXllciBmcm9tIFwiLi9jb21tb24vU291bmRQbGF5ZXIuanNcIjtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZVwiKTtcclxuc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBoaWRlTWFpbk1lbnUoKTtcclxuICAgIHN0YXJ0R2FtZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVNYWluTWVudSgpIHtcclxuICAgIGNvbnN0IG1haW5NZW51Um9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25zXCIpO1xyXG4gICAgbWFpbk1lbnVSb290LmhpZGRlbiA9IHRydWU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuXHJcbiAgICBjb25zdCBIQVZPSyA9IGF3YWl0IEhhdm9rUGh5c2ljcygpO1xyXG4gICAgZ2xvYmFsVGhpcy5ISyA9IEhBVk9LO1xyXG5cclxuICAgIGxldCBwbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheSA9IFtdO1xyXG4gICAgbGV0IGdhbWVDYW1lcmEgPSBudWxsO1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIik7IC8vIEdldCB0aGUgY2FudmFzIGVsZW1lbnRcclxuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZShjYW52YXMsIHRydWUpOyAvLyBHZW5lcmF0ZSB0aGUgQkFCWUxPTiAzRCBlbmdpbmVcclxuICAgIGNvbnN0IGNyZWF0ZVNjZW5lID0gIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgYmFzaWMgQmFieWxvbiBTY2VuZSBvYmplY3RcclxuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhbmQgcG9zaXRpb25zIGEgZnJlZSBjYW1lcmFcclxuICAgICAgICBnYW1lQ2FtZXJhID0gbmV3IEJBQllMT04uRm9sbG93Q2FtZXJhKFwiRm9sbG93Q2FtXCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTAsIC0xMCksIHNjZW5lKTtcclxuICAgICAgICAvLyBUYXJnZXRzIHRoZSBjYW1lcmEgdG8gc2NlbmUgb3JpZ2luXHJcbiAgICBcclxuICAgICAgICAvLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xyXG4gICAgICAgIGdhbWVDYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYSBsaWdodCwgYWltaW5nIDAsMSwwIC0gdG8gdGhlIHNreVxyXG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIFxyXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XHJcbiAgICAgICAgLy8gRGltIHRoZSBsaWdodCBhIHNtYWxsIGFtb3VudCAtIDAgdG8gMVxyXG4gICAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNztcclxuIFxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IG5ldyBNb2RlbExvYWRlcihzY2VuZSwgbnVsbCwgXCIuL0Fzc2V0cy9sb2NhdGlvbi9cIiwgXCJzY2VuZS5nbHRmXCIpLkxvYWRBc3luYygpO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTWVzaGVzID0gbG9jYXRpb25EYXRhLm1lc2hlcztcclxuICAgICAgICBsb2NhdGlvbk1lc2hlc1swXS5uYW1lID0gXCJMb2NhdGlvblwiO1xyXG4gICAgICAgIGNvbnN0IG1lc2hlcyA9ICBcclxuICAgICAgICAgICAgbG9jYXRpb25NZXNoZXNbMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZHJlbigpWzBdXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRyZW4oKVswXVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBhd2FpdCBuZXcgU2NlbmVJbml0aWFsaXplcihzY2VuZSwgbWVzaGVzKS5Jbml0aWFsaXplQXN5bmMoKTtcclxuICAgICAgICBwbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheSA9IGF3YWl0IG5ldyBDaGFyYWN0ZXJNb2RlbExvYWRlcihzY2VuZSkuTG9hZEFuZFNldHVwTW9kZWxBc3luYygpO1xyXG4gICAgICAgIHJldHVybiBzY2VuZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzY2VuZSA9IGF3YWl0IGNyZWF0ZVNjZW5lKCk7IC8vQ2FsbCB0aGUgY3JlYXRlU2NlbmUgZnVuY3Rpb25cclxuXHJcbiAgICBjb25zdCB3b3JsZCA9IG5ldyBXb3JsZEJlaGF2aW91cigpO1xyXG5cclxuICAgIEdhbWVUaW1lci5TdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgR2FtZVRpbWVyLlN0YXJ0VGltZXIoKTtcclxuXHJcbiAgICBjb25zdCBzb3VuZFBsYXllciA9IG5ldyBTb3VuZFBsYXllcigpXHJcbiAgICAgICAgLlByZWxvYWRTb3VuZChcIlBMQVlFUl9TSE9UXCIsIFwiLi9Bc3NldHMvc291bmRzL2pvaGFuZGVlY2tlX19zaG9ydC1ndW5zaG90LndhdlwiKVxyXG4gICAgICAgIC5QcmVsb2FkU291bmQoXCJaT01CSUVfUFVOQ0hcIiwgXCIuL0Fzc2V0cy9zb3VuZHMvbWVycmljazA3OV9fcHVuY2gyLndhdlwiKVxyXG4gICAgICAgIC5QcmVsb2FkU291bmQoXCJaT01CSUVfQVRUQUNLRURcIiwgXCIuL0Fzc2V0cy9zb3VuZHMvdG9uc2lsNV9fem9tYmllLXBhaW4tNi53YXZcIilcclxuICAgICAgICAuUHJlbG9hZFNvdW5kKFwiUExBWUVSX0RFQVRIXCIsIFwiLi9Bc3NldHMvc291bmRzL21hbGUtZGVhdGgtY3J5LTMud2F2XCIpXHJcbiAgICAgICAgLlByZWxvYWRTb3VuZChcIlpPTUJJRV9ERUFUSFwiLCBcIi4vQXNzZXRzL3NvdW5kcy9taXN0ZXJraWR4X196b21iaWVfZGllXzEud2F2XCIpO1xyXG5cclxuICAgIGNvbnN0IGdhbWVSdWxlc0VudGl0eSA9IG5ldyBHYW1lRW50aXR5KFxyXG4gICAgICAgIFwiR0FNRV9SVUxFU1wiLFxyXG4gICAgICAgIG5ldyBCQUJZTE9OLlRyYW5zZm9ybU5vZGUoXCJHYW1lUnVsZXNcIiwgc2NlbmUpXHJcbiAgICApXHJcbiAgICAgICAgLkFkZENvbXBvbmVudChuZXcgR2FtZVJ1bGVzQmVoYXZpb3VyKHNjZW5lLCB3b3JsZCwgc291bmRQbGF5ZXIpLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgcGxheWVyRW50aXR5ID0gbmV3IEdhbWVFbnRpdHkoXHJcbiAgICAgICAgXCJMT0NBTF9QTEFZRVJcIixcclxuICAgICAgICBzY2VuZS5nZXRNZXNoQnlOYW1lKFwiUGxheWVyXCIpLmdldENoaWxkcmVuKClbMF0sXHJcbiAgICApXHJcbiAgICAgICAgLkFkZENvbXBvbmVudChuZXcgTG9jYWxQbGF5ZXJCZWhhdmlvdXIoc2NlbmUsIGdhbWVDYW1lcmEsIHBsYXllckFuaW1hdGlvbnNHcm91cEFycmF5LCB3b3JsZCwgc291bmRQbGF5ZXIpLCBmYWxzZSlcclxuICAgICAgICAuQWRkQ29tcG9uZW50KG5ldyBQbGF5ZXJHVUlCZWhhdmlvdXIoKSk7XHJcblxyXG4gICAgd29ybGRcclxuICAgICAgICAuQWRkRW50aXR5KFxyXG4gICAgICAgICAgICBwbGF5ZXJFbnRpdHksXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5BZGRFbnRpdHkoXHJcbiAgICAgICAgICAgIGdhbWVSdWxlc0VudGl0eSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApXHJcbiAgICBcclxuICAgIGF3YWl0IHdvcmxkLkluaXRBc3luYygpO1xyXG4gICAgXHJcbiAgICB3b3JsZC5PbkF3YWtlKCk7XHJcbiAgICB3b3JsZC5PblN0YXJ0KCk7XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgYSByZW5kZXIgbG9vcCB0byByZXBlYXRlZGx5IHJlbmRlciB0aGUgc2NlbmVcclxuICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gZW5naW5lLmdldERlbHRhVGltZSgpIC8gMTAwMC4wOyAvLyBtcyAtPiBzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3b3JsZC5PblVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gICAgLy8gV2F0Y2ggZm9yIGJyb3dzZXIvY2FudmFzIHJlc2l6ZSBldmVudHNcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZW5naW5lLnJlc2l6ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIUdhbWVSdWxlc0JlaGF2aW91ci5Jc1Byb2R1Y3Rpb24pXHJcbiAgICAgICAgc2NlbmUuZGVidWdMYXllci5zaG93KCk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==