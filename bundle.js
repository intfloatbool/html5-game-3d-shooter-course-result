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

    const canvas = document.getElementById("renderCanvas"); // Get the canvas element

    const HAVOK = await (0,_HavokPhysics_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    globalThis.HK = HAVOK;

    let playerAnimationsGroupArray = [];
    let gameCamera = null;
    
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    // show Loading UI
    const loadingScreen = new BABYLON.DefaultLoadingScreen(canvas);
    loadingScreen.displayLoadingUI();

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


    loadingScreen.hideLoadingUI();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxTQUFTO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLDRGQUE0RjtBQUM1Rjs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEMkQ7QUFDSjtBQUNBO0FBQ0M7QUFDSjtBQUNwRDtBQUNPLG1DQUFtQyxtRUFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtFQUFTO0FBQ3ZDO0FBQ0EsK0JBQStCLGtFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsK0RBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNERBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0REFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0REFBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0VBQWlCO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0VBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBUztBQUNy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QUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtEQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWdCO0FBQ2xDLCtDQUErQyxvRkFBb0I7QUFDbkU7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLHNCQUFzQixtRUFBYztBQUNwQztBQUNBLElBQUksNERBQVM7QUFDYixJQUFJLDREQUFTO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJEQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5RUFBa0I7QUFDNUM7QUFDQSw2QkFBNkIsMkRBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFGQUFvQjtBQUM5QywwQkFBMEIseUVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSx5RUFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvSGF2b2tQaHlzaWNzX2VzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL1V0aWxzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY2hhcmFjdGVyL2NoYXJhY3Rlck1vZGVsTG9hZGVyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tbW9uL0dhbWVUaW1lci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbW1vbi9Tb3VuZFBsYXllci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbW1vbi9nYW1lQmVoYXZpb3VyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tbW9uL21vZGVsTG9hZGVyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9HYW1lUnVsZXNDaGVhdHMuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL0xvY2FsUGxheWVyQmVoYXZpb3VyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9lbmVtaWVzL2VuZW15U3Bhd25lci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9lbmVteVpvbWJpZUJlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9zdGF0ZXMvY29uY3JldGUvWm9tYmllQXR0YWNrU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvc3RhdGVzL2NvbmNyZXRlL1pvbWJpZURlYXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL2VuZW1pZXMvc3RhdGVzL2NvbmNyZXRlL1pvbWJpZUlkbGVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9zdGF0ZXMvY29uY3JldGUvWm9tYmllTW92ZVN0YXRlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9lbmVtaWVzL3N0YXRlcy96b21iaWVBY3Rpb25OYW1lcy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvZW5lbWllcy9zdGF0ZXMvem9tYmllRlNNLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9nYW1lUnVsZXNCZWhhdmlvdXIuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllckdVSUJlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvcGxheWVyU3RhdGVzL2FjdGlvbk5hbWVzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy9wbGF5ZXJTdGF0ZXMvY29uY3JldGUvRGVhdGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvcGxheWVyU3RhdGVzL2NvbmNyZXRlL0lkbGVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L2NvbXBvbmVudHMvcGxheWVyU3RhdGVzL2NvbmNyZXRlL1Nob290U3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllclN0YXRlcy9jb25jcmV0ZS9XYWxrU3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3BsYXllclN0YXRlcy9wbGF5ZXJGc20uanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9jb21wb25lbnRzL3VuaXRzL3VuaXRGc21CYXNlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvY29tcG9uZW50cy91bml0cy91bml0U3RhdGVCYXNlLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvZ2FtZS9nYW1lRW50aXR5LmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvZ2FtZS9zY2VuZUluaXRpYWxpemVyLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci8uL2pzL3Byb2plY3QvZ2FtZS93b3JsZEJlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L3Byb3BlcnRpZXMvZ2FtZVVuaXRQcm9wcy5qcyIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvLi9qcy9wcm9qZWN0L3Byb3BlcnRpZXMvcGxheWVyUHJvcHMuanMiLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9wcm9wZXJ0aWVzL3pvbWJpZVByb3BzLmpzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGZsb2F0Ym9vbC13ZWItc2hvb3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9pbnRmbG9hdGJvb2wtd2ViLXNob290ZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaW50ZmxvYXRib29sLXdlYi1zaG9vdGVyLy4vanMvcHJvamVjdC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSGF2b2tQaHlzaWNzID0gKCgpID0+IHtcclxuICB2YXIgX3NjcmlwdERpciA9IGltcG9ydC5tZXRhLnVybDtcclxuICBcclxuICByZXR1cm4gKFxyXG5mdW5jdGlvbihIYXZva1BoeXNpY3MpIHtcclxuICBIYXZva1BoeXNpY3MgPSBIYXZva1BoeXNpY3MgfHwge307XHJcblxyXG52YXIgTW9kdWxlPXR5cGVvZiBIYXZva1BoeXNpY3MhPVwidW5kZWZpbmVkXCI/SGF2b2tQaHlzaWNzOnt9O3ZhciByZWFkeVByb21pc2VSZXNvbHZlLHJlYWR5UHJvbWlzZVJlamVjdDtNb2R1bGVbXCJyZWFkeVwiXT1uZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVhZHlQcm9taXNlUmVzb2x2ZT1yZXNvbHZlO3JlYWR5UHJvbWlzZVJlamVjdD1yZWplY3R9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIEVOVklST05NRU5UX0lTX1dFQj10cnVlO3ZhciBFTlZJUk9OTUVOVF9JU19XT1JLRVI9ZmFsc2U7dmFyIHNjcmlwdERpcmVjdG9yeT1cIlwiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0ocGF0aCxzY3JpcHREaXJlY3RvcnkpfXJldHVybiBzY3JpcHREaXJlY3RvcnkrcGF0aH12YXIgcmVhZF8scmVhZEFzeW5jLHJlYWRCaW5hcnksc2V0V2luZG93VGl0bGU7aWYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpe2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZn1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7c2NyaXB0RGlyZWN0b3J5PWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjfWlmKF9zY3JpcHREaXIpe3NjcmlwdERpcmVjdG9yeT1fc2NyaXB0RGlyfWlmKHNjcmlwdERpcmVjdG9yeS5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXtzY3JpcHREaXJlY3Rvcnk9c2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLHNjcmlwdERpcmVjdG9yeS5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1lbHNle3NjcmlwdERpcmVjdG9yeT1cIlwifXtyZWFkXz11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnNlbmQobnVsbCk7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9O2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7cmVhZEJpbmFyeT11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSl9fXJlYWRBc3luYz0odXJsLG9ubG9hZCxvbmVycm9yKT0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLHRydWUpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5vbmxvYWQ9KCk9PntpZih4aHIuc3RhdHVzPT0yMDB8fHhoci5zdGF0dXM9PTAmJnhoci5yZXNwb25zZSl7b25sb2FkKHhoci5yZXNwb25zZSk7cmV0dXJufW9uZXJyb3IoKX07eGhyLm9uZXJyb3I9b25lcnJvcjt4aHIuc2VuZChudWxsKX19c2V0V2luZG93VGl0bGU9dGl0bGU9PmRvY3VtZW50LnRpdGxlPXRpdGxlfWVsc2V7fXZhciBvdXQ9TW9kdWxlW1wicHJpbnRcIl18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbXCJwcmludEVyclwiXXx8Y29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihNb2R1bGUsbW9kdWxlT3ZlcnJpZGVzKTttb2R1bGVPdmVycmlkZXM9bnVsbDtpZihNb2R1bGVbXCJhcmd1bWVudHNcIl0pYXJndW1lbnRzXz1Nb2R1bGVbXCJhcmd1bWVudHNcIl07aWYoTW9kdWxlW1widGhpc1Byb2dyYW1cIl0pdGhpc1Byb2dyYW09TW9kdWxlW1widGhpc1Byb2dyYW1cIl07aWYoTW9kdWxlW1wicXVpdFwiXSlxdWl0Xz1Nb2R1bGVbXCJxdWl0XCJdO3ZhciBQT0lOVEVSX1NJWkU9NDt2YXIgd2FzbUJpbmFyeTtpZihNb2R1bGVbXCJ3YXNtQmluYXJ5XCJdKXdhc21CaW5hcnk9TW9kdWxlW1wid2FzbUJpbmFyeVwiXTt2YXIgbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdfHx0cnVlO2lmKHR5cGVvZiBXZWJBc3NlbWJseSE9XCJvYmplY3RcIil7YWJvcnQoXCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkXCIpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgRVhJVFNUQVRVUztmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLHRleHQpe2lmKCFjb25kaXRpb24pe2Fib3J0KHRleHQpfX12YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLGhlYXAsb3V0SWR4LG1heEJ5dGVzVG9Xcml0ZSl7aWYoIShtYXhCeXRlc1RvV3JpdGU+MCkpcmV0dXJuIDA7dmFyIHN0YXJ0SWR4PW91dElkeDt2YXIgZW5kSWR4PW91dElkeCttYXhCeXRlc1RvV3JpdGUtMTtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgdT1zdHIuY2hhckNvZGVBdChpKTtpZih1Pj01NTI5NiYmdTw9NTczNDMpe3ZhciB1MT1zdHIuY2hhckNvZGVBdCgrK2kpO3U9NjU1MzYrKCh1JjEwMjMpPDwxMCl8dTEmMTAyM31pZih1PD0xMjcpe2lmKG91dElkeD49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPXV9ZWxzZSBpZih1PD0yMDQ3KXtpZihvdXRJZHgrMT49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTE5Mnx1Pj42O2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2UgaWYodTw9NjU1MzUpe2lmKG91dElkeCsyPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjI0fHU+PjEyO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2V7aWYob3V0SWR4KzM+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yNDB8dT4+MTg7aGVhcFtvdXRJZHgrK109MTI4fHU+PjEyJjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfX1oZWFwW291dElkeF09MDtyZXR1cm4gb3V0SWR4LXN0YXJ0SWR4fWZ1bmN0aW9uIHN0cmluZ1RvVVRGOChzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7cmV0dXJuIHN0cmluZ1RvVVRGOEFycmF5KHN0cixIRUFQVTgsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEY4KHN0cil7dmFyIGxlbj0wO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjPXN0ci5jaGFyQ29kZUF0KGkpO2lmKGM8PTEyNyl7bGVuKyt9ZWxzZSBpZihjPD0yMDQ3KXtsZW4rPTJ9ZWxzZSBpZihjPj01NTI5NiYmYzw9NTczNDMpe2xlbis9NDsrK2l9ZWxzZXtsZW4rPTN9fXJldHVybiBsZW59dmFyIGJ1ZmZlcixIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQNjQsSEVBUFU2NCxIRUFQRjY0O2Z1bmN0aW9uIHVwZGF0ZUdsb2JhbEJ1ZmZlckFuZFZpZXdzKGJ1Zil7YnVmZmVyPWJ1ZjtNb2R1bGVbXCJIRUFQOFwiXT1IRUFQOD1uZXcgSW50OEFycmF5KGJ1Zik7TW9kdWxlW1wiSEVBUDE2XCJdPUhFQVAxNj1uZXcgSW50MTZBcnJheShidWYpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQVThcIl09SEVBUFU4PW5ldyBVaW50OEFycmF5KGJ1Zik7TW9kdWxlW1wiSEVBUFUxNlwiXT1IRUFQVTE2PW5ldyBVaW50MTZBcnJheShidWYpO01vZHVsZVtcIkhFQVBVMzJcIl09SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYnVmKTtNb2R1bGVbXCJIRUFQRjMyXCJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShidWYpO01vZHVsZVtcIkhFQVBGNjRcIl09SEVBUEY2ND1uZXcgRmxvYXQ2NEFycmF5KGJ1Zik7TW9kdWxlW1wiSEVBUDY0XCJdPUhFQVA2ND1uZXcgQmlnSW50NjRBcnJheShidWYpO01vZHVsZVtcIkhFQVBVNjRcIl09SEVBUFU2ND1uZXcgQmlnVWludDY0QXJyYXkoYnVmKX12YXIgSU5JVElBTF9NRU1PUlk9TW9kdWxlW1wiSU5JVElBTF9NRU1PUllcIl18fDE2Nzc3MjE2O3ZhciB3YXNtVGFibGU7dmFyIF9fQVRQUkVSVU5fXz1bXTt2YXIgX19BVElOSVRfXz1bXTt2YXIgX19BVE1BSU5fXz1bXTt2YXIgX19BVFBPU1RSVU5fXz1bXTt2YXIgcnVudGltZUluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIGtlZXBSdW50aW1lQWxpdmUoKXtyZXR1cm4gbm9FeGl0UnVudGltZX1mdW5jdGlvbiBwcmVSdW4oKXtpZihNb2R1bGVbXCJwcmVSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVSdW5cIl09W01vZHVsZVtcInByZVJ1blwiXV07d2hpbGUoTW9kdWxlW1wicHJlUnVuXCJdLmxlbmd0aCl7YWRkT25QcmVSdW4oTW9kdWxlW1wicHJlUnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pfWZ1bmN0aW9uIGluaXRSdW50aW1lKCl7cnVudGltZUluaXRpYWxpemVkPXRydWU7Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyl9ZnVuY3Rpb24gcHJlTWFpbigpe2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRNQUlOX18pfWZ1bmN0aW9uIHBvc3RSdW4oKXtpZihNb2R1bGVbXCJwb3N0UnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicG9zdFJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInBvc3RSdW5cIl09W01vZHVsZVtcInBvc3RSdW5cIl1dO3doaWxlKE1vZHVsZVtcInBvc3RSdW5cIl0ubGVuZ3RoKXthZGRPblBvc3RSdW4oTW9kdWxlW1wicG9zdFJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyl9ZnVuY3Rpb24gYWRkT25QcmVSdW4oY2Ipe19fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPbkluaXQoY2Ipe19fQVRJTklUX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpfXZhciBydW5EZXBlbmRlbmNpZXM9MDt2YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbDt2YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7ZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzKys7aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfX1mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMtLTtpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9aWYocnVuRGVwZW5kZW5jaWVzPT0wKXtpZihydW5EZXBlbmRlbmN5V2F0Y2hlciE9PW51bGwpe2NsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO3J1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGx9aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX1mdW5jdGlvbiBhYm9ydCh3aGF0KXt7aWYoTW9kdWxlW1wib25BYm9ydFwiXSl7TW9kdWxlW1wib25BYm9ydFwiXSh3aGF0KX19d2hhdD1cIkFib3J0ZWQoXCIrd2hhdCtcIilcIjtlcnIod2hhdCk7QUJPUlQ9dHJ1ZTtFWElUU1RBVFVTPTE7d2hhdCs9XCIuIEJ1aWxkIHdpdGggLXNBU1NFUlRJT05TIGZvciBtb3JlIGluZm8uXCI7dmFyIGU9bmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcih3aGF0KTtyZWFkeVByb21pc2VSZWplY3QoZSk7dGhyb3cgZX12YXIgZGF0YVVSSVByZWZpeD1cImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIjtmdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpe3JldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpfXZhciB3YXNtQmluYXJ5RmlsZTtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXt3YXNtQmluYXJ5RmlsZT1cIkhhdm9rUGh5c2ljcy53YXNtXCI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpfX1lbHNle3dhc21CaW5hcnlGaWxlPW5ldyBVUkwoXCJIYXZva1BoeXNpY3Mud2FzbVwiLGltcG9ydC5tZXRhLnVybCkudG9TdHJpbmcoKX1mdW5jdGlvbiBnZXRCaW5hcnkoZmlsZSl7dHJ5e2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9Y2F0Y2goZXJyKXthYm9ydChlcnIpfX1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKCl7aWYoIXdhc21CaW5hcnkmJihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUikpe2lmKHR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe2lmKCFyZXNwb25zZVtcIm9rXCJdKXt0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrd2FzbUJpbmFyeUZpbGUrXCInXCJ9cmV0dXJuIHJlc3BvbnNlW1wiYXJyYXlCdWZmZXJcIl0oKX0pLmNhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX19cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZ2V0QmluYXJ5KHdhc21CaW5hcnlGaWxlKX0pfWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17XCJlbnZcIjphc21MaWJyYXJ5QXJnLFwid2FzaV9zbmFwc2hvdF9wcmV2aWV3MVwiOmFzbUxpYnJhcnlBcmd9O2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSxtb2R1bGUpe3ZhciBleHBvcnRzPWluc3RhbmNlLmV4cG9ydHM7TW9kdWxlW1wiYXNtXCJdPWV4cG9ydHM7d2FzbU1lbW9yeT1Nb2R1bGVbXCJhc21cIl1bXCJtZW1vcnlcIl07dXBkYXRlR2xvYmFsQnVmZmVyQW5kVmlld3Mod2FzbU1lbW9yeS5idWZmZXIpO3dhc21UYWJsZT1Nb2R1bGVbXCJhc21cIl1bXCJfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlXCJdO2FkZE9uSW5pdChNb2R1bGVbXCJhc21cIl1bXCJfX3dhc21fY2FsbF9jdG9yc1wiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIil9YWRkUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZXIpe3JldHVybiBnZXRCaW5hcnlQcm9taXNlKCkudGhlbihmdW5jdGlvbihiaW5hcnkpe3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW5mbyl9KS50aGVuKGZ1bmN0aW9uKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2V9KS50aGVuKHJlY2VpdmVyLGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogXCIrcmVhc29uKTthYm9ydChyZWFzb24pfSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYygpe2lmKCF3YXNtQmluYXJ5JiZ0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmc9PVwiZnVuY3Rpb25cIiYmIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkmJnR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZXN1bHQ9V2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzcG9uc2UsaW5mbyk7cmV0dXJuIHJlc3VsdC50aGVuKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0LGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6IFwiK3JlYXNvbik7ZXJyKFwiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb25cIik7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpfSl9KX1lbHNle3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX19aWYoTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKXt0cnl7dmFyIGV4cG9ydHM9TW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKGluZm8scmVjZWl2ZUluc3RhbmNlKTtyZXR1cm4gZXhwb3J0c31jYXRjaChlKXtlcnIoXCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiBcIitlKTtyZWFkeVByb21pc2VSZWplY3QoZSl9fWluc3RhbnRpYXRlQXN5bmMoKS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybnt9fXZhciB0ZW1wRG91YmxlO3ZhciB0ZW1wSTY0O2Z1bmN0aW9uIEV4aXRTdGF0dXMoc3RhdHVzKXt0aGlzLm5hbWU9XCJFeGl0U3RhdHVzXCI7dGhpcy5tZXNzYWdlPVwiUHJvZ3JhbSB0ZXJtaW5hdGVkIHdpdGggZXhpdChcIitzdGF0dXMrXCIpXCI7dGhpcy5zdGF0dXM9c3RhdHVzfWZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBkZW1hbmdsZShmdW5jKXtyZXR1cm4gZnVuY31mdW5jdGlvbiBkZW1hbmdsZUFsbCh0ZXh0KXt2YXIgcmVnZXg9L1xcYl9aW1xcd1xcZF9dKy9nO3JldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsZnVuY3Rpb24oeCl7dmFyIHk9ZGVtYW5nbGUoeCk7cmV0dXJuIHg9PT15P3g6eStcIiBbXCIreCtcIl1cIn0pfWZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihlKXtpZihlIGluc3RhbmNlb2YgRXhpdFN0YXR1c3x8ZT09XCJ1bndpbmRcIil7cmV0dXJuIEVYSVRTVEFUVVN9cXVpdF8oMSxlKX1mdW5jdGlvbiBqc1N0YWNrVHJhY2UoKXt2YXIgZXJyb3I9bmV3IEVycm9yO2lmKCFlcnJvci5zdGFjayl7dHJ5e3Rocm93IG5ldyBFcnJvcn1jYXRjaChlKXtlcnJvcj1lfWlmKCFlcnJvci5zdGFjayl7cmV0dXJuXCIobm8gc3RhY2sgdHJhY2UgYXZhaWxhYmxlKVwifX1yZXR1cm4gZXJyb3Iuc3RhY2sudG9TdHJpbmcoKX12YXIgdHVwbGVSZWdpc3RyYXRpb25zPXt9O2Z1bmN0aW9uIHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKXt3aGlsZShkZXN0cnVjdG9ycy5sZW5ndGgpe3ZhciBwdHI9ZGVzdHJ1Y3RvcnMucG9wKCk7dmFyIGRlbD1kZXN0cnVjdG9ycy5wb3AoKTtkZWwocHRyKX19ZnVuY3Rpb24gc2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUDMyW3BvaW50ZXI+PjJdKX12YXIgYXdhaXRpbmdEZXBlbmRlbmNpZXM9e307dmFyIHJlZ2lzdGVyZWRUeXBlcz17fTt2YXIgdHlwZURlcGVuZGVuY2llcz17fTt2YXIgY2hhcl8wPTQ4O3ZhciBjaGFyXzk9NTc7ZnVuY3Rpb24gbWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpe2lmKHVuZGVmaW5lZD09PW5hbWUpe3JldHVyblwiX3Vua25vd25cIn1uYW1lPW5hbWUucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLFwiJFwiKTt2YXIgZj1uYW1lLmNoYXJDb2RlQXQoMCk7aWYoZj49Y2hhcl8wJiZmPD1jaGFyXzkpe3JldHVyblwiX1wiK25hbWV9cmV0dXJuIG5hbWV9ZnVuY3Rpb24gY3JlYXRlTmFtZWRGdW5jdGlvbihuYW1lLGJvZHkpe25hbWU9bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpO3JldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsXCJyZXR1cm4gZnVuY3Rpb24gXCIrbmFtZStcIigpIHtcXG5cIisnICAgIFwidXNlIHN0cmljdFwiOycrXCIgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcXG5cIitcIn07XFxuXCIpKGJvZHkpfWZ1bmN0aW9uIGV4dGVuZEVycm9yKGJhc2VFcnJvclR5cGUsZXJyb3JOYW1lKXt2YXIgZXJyb3JDbGFzcz1jcmVhdGVOYW1lZEZ1bmN0aW9uKGVycm9yTmFtZSxmdW5jdGlvbihtZXNzYWdlKXt0aGlzLm5hbWU9ZXJyb3JOYW1lO3RoaXMubWVzc2FnZT1tZXNzYWdlO3ZhciBzdGFjaz1uZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7aWYoc3RhY2shPT11bmRlZmluZWQpe3RoaXMuc3RhY2s9dGhpcy50b1N0cmluZygpK1wiXFxuXCIrc3RhY2sucmVwbGFjZSgvXkVycm9yKDpbXlxcbl0qKT9cXG4vLFwiXCIpfX0pO2Vycm9yQ2xhc3MucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYmFzZUVycm9yVHlwZS5wcm90b3R5cGUpO2Vycm9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWVycm9yQ2xhc3M7ZXJyb3JDbGFzcy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtpZih0aGlzLm1lc3NhZ2U9PT11bmRlZmluZWQpe3JldHVybiB0aGlzLm5hbWV9ZWxzZXtyZXR1cm4gdGhpcy5uYW1lK1wiOiBcIit0aGlzLm1lc3NhZ2V9fTtyZXR1cm4gZXJyb3JDbGFzc312YXIgSW50ZXJuYWxFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dJbnRlcm5hbEVycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBJbnRlcm5hbEVycm9yKG1lc3NhZ2UpfWZ1bmN0aW9uIHdoZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKG15VHlwZXMsZGVwZW5kZW50VHlwZXMsZ2V0VHlwZUNvbnZlcnRlcnMpe215VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKXt0eXBlRGVwZW5kZW5jaWVzW3R5cGVdPWRlcGVuZGVudFR5cGVzfSk7ZnVuY3Rpb24gb25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl7dmFyIG15VHlwZUNvbnZlcnRlcnM9Z2V0VHlwZUNvbnZlcnRlcnModHlwZUNvbnZlcnRlcnMpO2lmKG15VHlwZUNvbnZlcnRlcnMubGVuZ3RoIT09bXlUeXBlcy5sZW5ndGgpe3Rocm93SW50ZXJuYWxFcnJvcihcIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnRcIil9Zm9yKHZhciBpPTA7aTxteVR5cGVzLmxlbmd0aDsrK2kpe3JlZ2lzdGVyVHlwZShteVR5cGVzW2ldLG15VHlwZUNvbnZlcnRlcnNbaV0pfX12YXIgdHlwZUNvbnZlcnRlcnM9bmV3IEFycmF5KGRlcGVuZGVudFR5cGVzLmxlbmd0aCk7dmFyIHVucmVnaXN0ZXJlZFR5cGVzPVtdO3ZhciByZWdpc3RlcmVkPTA7ZGVwZW5kZW50VHlwZXMuZm9yRWFjaCgoZHQsaSk9PntpZihyZWdpc3RlcmVkVHlwZXMuaGFzT3duUHJvcGVydHkoZHQpKXt0eXBlQ29udmVydGVyc1tpXT1yZWdpc3RlcmVkVHlwZXNbZHRdfWVsc2V7dW5yZWdpc3RlcmVkVHlwZXMucHVzaChkdCk7aWYoIWF3YWl0aW5nRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KGR0KSl7YXdhaXRpbmdEZXBlbmRlbmNpZXNbZHRdPVtdfWF3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XS5wdXNoKCgpPT57dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XTsrK3JlZ2lzdGVyZWQ7aWYocmVnaXN0ZXJlZD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fSl9fSk7aWYoMD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fWZ1bmN0aW9uIF9fZW1iaW5kX2ZpbmFsaXplX3ZhbHVlX2FycmF5KHJhd1R1cGxlVHlwZSl7dmFyIHJlZz10dXBsZVJlZ2lzdHJhdGlvbnNbcmF3VHVwbGVUeXBlXTtkZWxldGUgdHVwbGVSZWdpc3RyYXRpb25zW3Jhd1R1cGxlVHlwZV07dmFyIGVsZW1lbnRzPXJlZy5lbGVtZW50czt2YXIgZWxlbWVudHNMZW5ndGg9ZWxlbWVudHMubGVuZ3RoO3ZhciBlbGVtZW50VHlwZXM9ZWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsdCl7cmV0dXJuIGVsdC5nZXR0ZXJSZXR1cm5UeXBlfSkuY29uY2F0KGVsZW1lbnRzLm1hcChmdW5jdGlvbihlbHQpe3JldHVybiBlbHQuc2V0dGVyQXJndW1lbnRUeXBlfSkpO3ZhciByYXdDb25zdHJ1Y3Rvcj1yZWcucmF3Q29uc3RydWN0b3I7dmFyIHJhd0Rlc3RydWN0b3I9cmVnLnJhd0Rlc3RydWN0b3I7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW3Jhd1R1cGxlVHlwZV0sZWxlbWVudFR5cGVzLGZ1bmN0aW9uKGVsZW1lbnRUeXBlcyl7ZWxlbWVudHMuZm9yRWFjaCgoZWx0LGkpPT57dmFyIGdldHRlclJldHVyblR5cGU9ZWxlbWVudFR5cGVzW2ldO3ZhciBnZXR0ZXI9ZWx0LmdldHRlcjt2YXIgZ2V0dGVyQ29udGV4dD1lbHQuZ2V0dGVyQ29udGV4dDt2YXIgc2V0dGVyQXJndW1lbnRUeXBlPWVsZW1lbnRUeXBlc1tpK2VsZW1lbnRzTGVuZ3RoXTt2YXIgc2V0dGVyPWVsdC5zZXR0ZXI7dmFyIHNldHRlckNvbnRleHQ9ZWx0LnNldHRlckNvbnRleHQ7ZWx0LnJlYWQ9cHRyPT57cmV0dXJuIGdldHRlclJldHVyblR5cGVbXCJmcm9tV2lyZVR5cGVcIl0oZ2V0dGVyKGdldHRlckNvbnRleHQscHRyKSl9O2VsdC53cml0ZT0ocHRyLG8pPT57dmFyIGRlc3RydWN0b3JzPVtdO3NldHRlcihzZXR0ZXJDb250ZXh0LHB0cixzZXR0ZXJBcmd1bWVudFR5cGVbXCJ0b1dpcmVUeXBlXCJdKGRlc3RydWN0b3JzLG8pKTtydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl9fSk7cmV0dXJuW3tuYW1lOnJlZy5uYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24ocHRyKXt2YXIgcnY9bmV3IEFycmF5KGVsZW1lbnRzTGVuZ3RoKTtmb3IodmFyIGk9MDtpPGVsZW1lbnRzTGVuZ3RoOysraSl7cnZbaV09ZWxlbWVudHNbaV0ucmVhZChwdHIpfXJhd0Rlc3RydWN0b3IocHRyKTtyZXR1cm4gcnZ9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLG8pe2lmKGVsZW1lbnRzTGVuZ3RoIT09by5sZW5ndGgpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgbnVtYmVyIG9mIHR1cGxlIGVsZW1lbnRzIGZvciBcIityZWcubmFtZStcIjogZXhwZWN0ZWQ9XCIrZWxlbWVudHNMZW5ndGgrXCIsIGFjdHVhbD1cIitvLmxlbmd0aCl9dmFyIHB0cj1yYXdDb25zdHJ1Y3RvcigpO2Zvcih2YXIgaT0wO2k8ZWxlbWVudHNMZW5ndGg7KytpKXtlbGVtZW50c1tpXS53cml0ZShwdHIsb1tpXSl9aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKHJhd0Rlc3RydWN0b3IscHRyKX1yZXR1cm4gcHRyfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOnJhd0Rlc3RydWN0b3J9XX0pfWZ1bmN0aW9uIGVtYmluZFJlcHIodil7aWYodj09PW51bGwpe3JldHVyblwibnVsbFwifXZhciB0PXR5cGVvZiB2O2lmKHQ9PT1cIm9iamVjdFwifHx0PT09XCJhcnJheVwifHx0PT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdi50b1N0cmluZygpfWVsc2V7cmV0dXJuXCJcIit2fX1mdW5jdGlvbiBlbWJpbmRfaW5pdF9jaGFyQ29kZXMoKXt2YXIgY29kZXM9bmV3IEFycmF5KDI1Nik7Zm9yKHZhciBpPTA7aTwyNTY7KytpKXtjb2Rlc1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpfWVtYmluZF9jaGFyQ29kZXM9Y29kZXN9dmFyIGVtYmluZF9jaGFyQ29kZXM9dW5kZWZpbmVkO2Z1bmN0aW9uIHJlYWRMYXRpbjFTdHJpbmcocHRyKXt2YXIgcmV0PVwiXCI7dmFyIGM9cHRyO3doaWxlKEhFQVBVOFtjXSl7cmV0Kz1lbWJpbmRfY2hhckNvZGVzW0hFQVBVOFtjKytdXX1yZXR1cm4gcmV0fXZhciBCaW5kaW5nRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93QmluZGluZ0Vycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IobWVzc2FnZSl9ZnVuY3Rpb24gcmVnaXN0ZXJUeXBlKHJhd1R5cGUscmVnaXN0ZXJlZEluc3RhbmNlLG9wdGlvbnM9e30pe2lmKCEoXCJhcmdQYWNrQWR2YW5jZVwiaW4gcmVnaXN0ZXJlZEluc3RhbmNlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2VcIil9dmFyIG5hbWU9cmVnaXN0ZXJlZEluc3RhbmNlLm5hbWU7aWYoIXJhd1R5cGUpe3Rocm93QmluZGluZ0Vycm9yKCd0eXBlIFwiJytuYW1lKydcIiBtdXN0IGhhdmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIHR5cGVpZCBwb2ludGVyJyl9aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KHJhd1R5cGUpKXtpZihvcHRpb25zLmlnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnMpe3JldHVybn1lbHNle3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJ1wiK25hbWUrXCInIHR3aWNlXCIpfX1yZWdpc3RlcmVkVHlwZXNbcmF3VHlwZV09cmVnaXN0ZXJlZEluc3RhbmNlO2RlbGV0ZSB0eXBlRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2lmKGF3YWl0aW5nRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KHJhd1R5cGUpKXt2YXIgY2FsbGJhY2tzPWF3YWl0aW5nRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2RlbGV0ZSBhd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtjYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSl9fWZ1bmN0aW9uIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzhGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDhbcG9pbnRlcl19OmZ1bmN0aW9uIHJlYWRVOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVThbcG9pbnRlcl19O2Nhc2UgMTpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDE2W3BvaW50ZXI+PjFdfTpmdW5jdGlvbiByZWFkVTE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMTZbcG9pbnRlcj4+MV19O2Nhc2UgMjpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDMyW3BvaW50ZXI+PjJdfTpmdW5jdGlvbiByZWFkVTMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbcG9pbnRlcj4+Ml19O2Nhc2UgMzpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTNjRGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDY0W3BvaW50ZXI+PjNdfTpmdW5jdGlvbiByZWFkVTY0RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVNjRbcG9pbnRlcj4+M119O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50KHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5kZXhPZihcInVcIikhPS0xO2lmKGlzVW5zaWduZWRUeXBlKXttYXhSYW5nZT0oMW48PDY0biktMW59cmVnaXN0ZXJUeXBlKHByaW1pdGl2ZVR5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWV9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtpZih0eXBlb2YgdmFsdWUhPVwiYmlnaW50XCImJnR5cGVvZiB2YWx1ZSE9XCJudW1iZXJcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgXCInK2VtYmluZFJlcHIodmFsdWUpKydcIiB0byAnK3RoaXMubmFtZSl9aWYodmFsdWU8bWluUmFuZ2V8fHZhbHVlPm1heFJhbmdlKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyIFwiJytlbWJpbmRSZXByKHZhbHVlKSsnXCIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSBcIicrbmFtZSsnXCIsIHdoaWNoIGlzIG91dHNpZGUgdGhlIHZhbGlkIHJhbmdlIFsnK21pblJhbmdlK1wiLCBcIittYXhSYW5nZStcIl0hXCIpfXJldHVybiB2YWx1ZX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LCFpc1Vuc2lnbmVkVHlwZSksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBnZXRTaGlmdEZyb21TaXplKHNpemUpe3N3aXRjaChzaXplKXtjYXNlIDE6cmV0dXJuIDA7Y2FzZSAyOnJldHVybiAxO2Nhc2UgNDpyZXR1cm4gMjtjYXNlIDg6cmV0dXJuIDM7ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biB0eXBlIHNpemU6IFwiK3NpemUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9ib29sKHJhd1R5cGUsbmFtZSxzaXplLHRydWVWYWx1ZSxmYWxzZVZhbHVlKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHd0KXtyZXR1cm4hIXd0fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gbz90cnVlVmFsdWU6ZmFsc2VWYWx1ZX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmZ1bmN0aW9uKHBvaW50ZXIpe3ZhciBoZWFwO2lmKHNpemU9PT0xKXtoZWFwPUhFQVA4fWVsc2UgaWYoc2l6ZT09PTIpe2hlYXA9SEVBUDE2fWVsc2UgaWYoc2l6ZT09PTQpe2hlYXA9SEVBUDMyfWVsc2V7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6IFwiK25hbWUpfXJldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+c2hpZnRdKX0sZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX12YXIgZW12YWxfZnJlZV9saXN0PVtdO3ZhciBlbXZhbF9oYW5kbGVfYXJyYXk9W3t9LHt2YWx1ZTp1bmRlZmluZWR9LHt2YWx1ZTpudWxsfSx7dmFsdWU6dHJ1ZX0se3ZhbHVlOmZhbHNlfV07ZnVuY3Rpb24gX19lbXZhbF9kZWNyZWYoaGFuZGxlKXtpZihoYW5kbGU+NCYmMD09PS0tZW12YWxfaGFuZGxlX2FycmF5W2hhbmRsZV0ucmVmY291bnQpe2VtdmFsX2hhbmRsZV9hcnJheVtoYW5kbGVdPXVuZGVmaW5lZDtlbXZhbF9mcmVlX2xpc3QucHVzaChoYW5kbGUpfX1mdW5jdGlvbiBjb3VudF9lbXZhbF9oYW5kbGVzKCl7dmFyIGNvdW50PTA7Zm9yKHZhciBpPTU7aTxlbXZhbF9oYW5kbGVfYXJyYXkubGVuZ3RoOysraSl7aWYoZW12YWxfaGFuZGxlX2FycmF5W2ldIT09dW5kZWZpbmVkKXsrK2NvdW50fX1yZXR1cm4gY291bnR9ZnVuY3Rpb24gZ2V0X2ZpcnN0X2VtdmFsKCl7Zm9yKHZhciBpPTU7aTxlbXZhbF9oYW5kbGVfYXJyYXkubGVuZ3RoOysraSl7aWYoZW12YWxfaGFuZGxlX2FycmF5W2ldIT09dW5kZWZpbmVkKXtyZXR1cm4gZW12YWxfaGFuZGxlX2FycmF5W2ldfX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBpbml0X2VtdmFsKCl7TW9kdWxlW1wiY291bnRfZW12YWxfaGFuZGxlc1wiXT1jb3VudF9lbXZhbF9oYW5kbGVzO01vZHVsZVtcImdldF9maXJzdF9lbXZhbFwiXT1nZXRfZmlyc3RfZW12YWx9dmFyIEVtdmFsPXt0b1ZhbHVlOmhhbmRsZT0+e2lmKCFoYW5kbGUpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gXCIraGFuZGxlKX1yZXR1cm4gZW12YWxfaGFuZGxlX2FycmF5W2hhbmRsZV0udmFsdWV9LHRvSGFuZGxlOnZhbHVlPT57c3dpdGNoKHZhbHVlKXtjYXNlIHVuZGVmaW5lZDpyZXR1cm4gMTtjYXNlIG51bGw6cmV0dXJuIDI7Y2FzZSB0cnVlOnJldHVybiAzO2Nhc2UgZmFsc2U6cmV0dXJuIDQ7ZGVmYXVsdDp7dmFyIGhhbmRsZT1lbXZhbF9mcmVlX2xpc3QubGVuZ3RoP2VtdmFsX2ZyZWVfbGlzdC5wb3AoKTplbXZhbF9oYW5kbGVfYXJyYXkubGVuZ3RoO2VtdmFsX2hhbmRsZV9hcnJheVtoYW5kbGVdPXtyZWZjb3VudDoxLHZhbHVlOnZhbHVlfTtyZXR1cm4gaGFuZGxlfX19fTtmdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oaGFuZGxlKXt2YXIgcnY9RW12YWwudG9WYWx1ZShoYW5kbGUpO19fZW12YWxfZGVjcmVmKGhhbmRsZSk7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHZhbHVlKX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZW5zdXJlT3ZlcmxvYWRUYWJsZShwcm90byxtZXRob2ROYW1lLGh1bWFuTmFtZSl7aWYodW5kZWZpbmVkPT09cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZSl7dmFyIHByZXZGdW5jPXByb3RvW21ldGhvZE5hbWVdO3Byb3RvW21ldGhvZE5hbWVdPWZ1bmN0aW9uKCl7aWYoIXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkpe3Rocm93QmluZGluZ0Vycm9yKFwiRnVuY3Rpb24gJ1wiK2h1bWFuTmFtZStcIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzIChcIithcmd1bWVudHMubGVuZ3RoK1wiKSAtIGV4cGVjdHMgb25lIG9mIChcIitwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlK1wiKSFcIil9cmV0dXJuIHByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlPVtdO3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbcHJldkZ1bmMuYXJnQ291bnRdPXByZXZGdW5jfX1mdW5jdGlvbiBleHBvc2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7aWYodW5kZWZpbmVkPT09bnVtQXJndW1lbnRzfHx1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJ1wiK25hbWUrXCInIHR3aWNlXCIpfWVuc3VyZU92ZXJsb2FkVGFibGUoTW9kdWxlLG5hbWUsbmFtZSk7aWYoTW9kdWxlLmhhc093blByb3BlcnR5KG51bUFyZ3VtZW50cykpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoXCIrbnVtQXJndW1lbnRzK1wiKSFcIil9TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXT12YWx1ZX1lbHNle01vZHVsZVtuYW1lXT12YWx1ZTtpZih1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5udW1Bcmd1bWVudHM9bnVtQXJndW1lbnRzfX19ZnVuY3Rpb24gZW51bVJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsc2lnbmVkKXtzd2l0Y2goc2hpZnQpe2Nhc2UgMDpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVA4OkhFQVBVODtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXJdKX07Y2FzZSAxOnJldHVybiBmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcD1zaWduZWQ/SEVBUDE2OkhFQVBVMTY7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oaGVhcFtwb2ludGVyPj4xXSl9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVAzMjpIRUFQVTMyO3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+Ml0pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGludGVnZXIgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2VudW0ocmF3VHlwZSxuYW1lLHNpemUsaXNTaWduZWQpe3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtmdW5jdGlvbiBjdG9yKCl7fWN0b3IudmFsdWVzPXt9O3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsY29uc3RydWN0b3I6Y3RvcixcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLnZhbHVlc1tjXX0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsYyl7cmV0dXJuIGMudmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjplbnVtUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCxpc1NpZ25lZCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KTtleHBvc2VQdWJsaWNTeW1ib2wobmFtZSxjdG9yKX1mdW5jdGlvbiBnZXRUeXBlTmFtZSh0eXBlKXt2YXIgcHRyPV9fX2dldFR5cGVOYW1lKHR5cGUpO3ZhciBydj1yZWFkTGF0aW4xU3RyaW5nKHB0cik7X2ZyZWUocHRyKTtyZXR1cm4gcnZ9ZnVuY3Rpb24gcmVxdWlyZVJlZ2lzdGVyZWRUeXBlKHJhd1R5cGUsaHVtYW5OYW1lKXt2YXIgaW1wbD1yZWdpc3RlcmVkVHlwZXNbcmF3VHlwZV07aWYodW5kZWZpbmVkPT09aW1wbCl7dGhyb3dCaW5kaW5nRXJyb3IoaHVtYW5OYW1lK1wiIGhhcyB1bmtub3duIHR5cGUgXCIrZ2V0VHlwZU5hbWUocmF3VHlwZSkpfXJldHVybiBpbXBsfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2VudW1fdmFsdWUocmF3RW51bVR5cGUsbmFtZSxlbnVtVmFsdWUpe3ZhciBlbnVtVHlwZT1yZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmF3RW51bVR5cGUsXCJlbnVtXCIpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgRW51bT1lbnVtVHlwZS5jb25zdHJ1Y3Rvcjt2YXIgVmFsdWU9T2JqZWN0LmNyZWF0ZShlbnVtVHlwZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUse3ZhbHVlOnt2YWx1ZTplbnVtVmFsdWV9LGNvbnN0cnVjdG9yOnt2YWx1ZTpjcmVhdGVOYW1lZEZ1bmN0aW9uKGVudW1UeXBlLm5hbWUrXCJfXCIrbmFtZSxmdW5jdGlvbigpe30pfX0pO0VudW0udmFsdWVzW2VudW1WYWx1ZV09VmFsdWU7RW51bVtuYW1lXT1WYWx1ZX1mdW5jdGlvbiBmbG9hdFJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQpe3N3aXRjaChzaGlmdCl7Y2FzZSAyOnJldHVybiBmdW5jdGlvbihwb2ludGVyKXtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShIRUFQRjMyW3BvaW50ZXI+PjJdKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihwb2ludGVyKXtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShIRUFQRjY0W3BvaW50ZXI+PjNdKX07ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBmbG9hdCB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfZmxvYXQocmF3VHlwZSxuYW1lLHNpemUpe3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24odmFsdWUpe3JldHVybiB2YWx1ZX0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe3JldHVybiB2YWx1ZX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBuZXdfKGNvbnN0cnVjdG9yLGFyZ3VtZW50TGlzdCl7aWYoIShjb25zdHJ1Y3RvciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSBcIit0eXBlb2YgY29uc3RydWN0b3IrXCIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb25cIil9dmFyIGR1bW15PWNyZWF0ZU5hbWVkRnVuY3Rpb24oY29uc3RydWN0b3IubmFtZXx8XCJ1bmtub3duRnVuY3Rpb25OYW1lXCIsZnVuY3Rpb24oKXt9KTtkdW1teS5wcm90b3R5cGU9Y29uc3RydWN0b3IucHJvdG90eXBlO3ZhciBvYmo9bmV3IGR1bW15O3ZhciByPWNvbnN0cnVjdG9yLmFwcGx5KG9iaixhcmd1bWVudExpc3QpO3JldHVybiByIGluc3RhbmNlb2YgT2JqZWN0P3I6b2JqfWZ1bmN0aW9uIGNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxhcmdUeXBlcyxjbGFzc1R5cGUsY3BwSW52b2tlckZ1bmMsY3BwVGFyZ2V0RnVuYyl7dmFyIGFyZ0NvdW50PWFyZ1R5cGVzLmxlbmd0aDtpZihhcmdDb3VudDwyKXt0aHJvd0JpbmRpbmdFcnJvcihcImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzIVwiKX12YXIgaXNDbGFzc01ldGhvZEZ1bmM9YXJnVHlwZXNbMV0hPT1udWxsJiZjbGFzc1R5cGUhPT1udWxsO3ZhciBuZWVkc0Rlc3RydWN0b3JTdGFjaz1mYWxzZTtmb3IodmFyIGk9MTtpPGFyZ1R5cGVzLmxlbmd0aDsrK2kpe2lmKGFyZ1R5cGVzW2ldIT09bnVsbCYmYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uPT09dW5kZWZpbmVkKXtuZWVkc0Rlc3RydWN0b3JTdGFjaz10cnVlO2JyZWFrfX12YXIgcmV0dXJucz1hcmdUeXBlc1swXS5uYW1lIT09XCJ2b2lkXCI7dmFyIGFyZ3NMaXN0PVwiXCI7dmFyIGFyZ3NMaXN0V2lyZWQ9XCJcIjtmb3IodmFyIGk9MDtpPGFyZ0NvdW50LTI7KytpKXthcmdzTGlzdCs9KGkhPT0wP1wiLCBcIjpcIlwiKStcImFyZ1wiK2k7YXJnc0xpc3RXaXJlZCs9KGkhPT0wP1wiLCBcIjpcIlwiKStcImFyZ1wiK2krXCJXaXJlZFwifXZhciBpbnZva2VyRm5Cb2R5PVwicmV0dXJuIGZ1bmN0aW9uIFwiK21ha2VMZWdhbEZ1bmN0aW9uTmFtZShodW1hbk5hbWUpK1wiKFwiK2FyZ3NMaXN0K1wiKSB7XFxuXCIrXCJpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gXCIrKGFyZ0NvdW50LTIpK1wiKSB7XFxuXCIrXCJ0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gXCIraHVtYW5OYW1lK1wiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkIFwiKyhhcmdDb3VudC0yKStcIiBhcmdzIScpO1xcblwiK1wifVxcblwiO2lmKG5lZWRzRGVzdHJ1Y3RvclN0YWNrKXtpbnZva2VyRm5Cb2R5Kz1cInZhciBkZXN0cnVjdG9ycyA9IFtdO1xcblwifXZhciBkdG9yU3RhY2s9bmVlZHNEZXN0cnVjdG9yU3RhY2s/XCJkZXN0cnVjdG9yc1wiOlwibnVsbFwiO3ZhciBhcmdzMT1bXCJ0aHJvd0JpbmRpbmdFcnJvclwiLFwiaW52b2tlclwiLFwiZm5cIixcInJ1bkRlc3RydWN0b3JzXCIsXCJyZXRUeXBlXCIsXCJjbGFzc1BhcmFtXCJdO3ZhciBhcmdzMj1bdGhyb3dCaW5kaW5nRXJyb3IsY3BwSW52b2tlckZ1bmMsY3BwVGFyZ2V0RnVuYyxydW5EZXN0cnVjdG9ycyxhcmdUeXBlc1swXSxhcmdUeXBlc1sxXV07aWYoaXNDbGFzc01ldGhvZEZ1bmMpe2ludm9rZXJGbkJvZHkrPVwidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZShcIitkdG9yU3RhY2srXCIsIHRoaXMpO1xcblwifWZvcih2YXIgaT0wO2k8YXJnQ291bnQtMjsrK2kpe2ludm9rZXJGbkJvZHkrPVwidmFyIGFyZ1wiK2krXCJXaXJlZCA9IGFyZ1R5cGVcIitpK1wiLnRvV2lyZVR5cGUoXCIrZHRvclN0YWNrK1wiLCBhcmdcIitpK1wiKTsgLy8gXCIrYXJnVHlwZXNbaSsyXS5uYW1lK1wiXFxuXCI7YXJnczEucHVzaChcImFyZ1R5cGVcIitpKTthcmdzMi5wdXNoKGFyZ1R5cGVzW2krMl0pfWlmKGlzQ2xhc3NNZXRob2RGdW5jKXthcmdzTGlzdFdpcmVkPVwidGhpc1dpcmVkXCIrKGFyZ3NMaXN0V2lyZWQubGVuZ3RoPjA/XCIsIFwiOlwiXCIpK2FyZ3NMaXN0V2lyZWR9aW52b2tlckZuQm9keSs9KHJldHVybnM/XCJ2YXIgcnYgPSBcIjpcIlwiKStcImludm9rZXIoZm5cIisoYXJnc0xpc3RXaXJlZC5sZW5ndGg+MD9cIiwgXCI6XCJcIikrYXJnc0xpc3RXaXJlZCtcIik7XFxuXCI7aWYobmVlZHNEZXN0cnVjdG9yU3RhY2spe2ludm9rZXJGbkJvZHkrPVwicnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpO1xcblwifWVsc2V7Zm9yKHZhciBpPWlzQ2xhc3NNZXRob2RGdW5jPzE6MjtpPGFyZ1R5cGVzLmxlbmd0aDsrK2kpe3ZhciBwYXJhbU5hbWU9aT09PTE/XCJ0aGlzV2lyZWRcIjpcImFyZ1wiKyhpLTIpK1wiV2lyZWRcIjtpZihhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb24hPT1udWxsKXtpbnZva2VyRm5Cb2R5Kz1wYXJhbU5hbWUrXCJfZHRvcihcIitwYXJhbU5hbWUrXCIpOyAvLyBcIithcmdUeXBlc1tpXS5uYW1lK1wiXFxuXCI7YXJnczEucHVzaChwYXJhbU5hbWUrXCJfZHRvclwiKTthcmdzMi5wdXNoKGFyZ1R5cGVzW2ldLmRlc3RydWN0b3JGdW5jdGlvbil9fX1pZihyZXR1cm5zKXtpbnZva2VyRm5Cb2R5Kz1cInZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7XFxuXCIrXCJyZXR1cm4gcmV0O1xcblwifWVsc2V7fWludm9rZXJGbkJvZHkrPVwifVxcblwiO2FyZ3MxLnB1c2goaW52b2tlckZuQm9keSk7dmFyIGludm9rZXJGdW5jdGlvbj1uZXdfKEZ1bmN0aW9uLGFyZ3MxKS5hcHBseShudWxsLGFyZ3MyKTtyZXR1cm4gaW52b2tlckZ1bmN0aW9ufWZ1bmN0aW9uIGhlYXAzMlZlY3RvclRvQXJyYXkoY291bnQsZmlyc3RFbGVtZW50KXt2YXIgYXJyYXk9W107Zm9yKHZhciBpPTA7aTxjb3VudDtpKyspe2FycmF5LnB1c2goSEVBUFUzMltmaXJzdEVsZW1lbnQraSo0Pj4yXSl9cmV0dXJuIGFycmF5fWZ1bmN0aW9uIHJlcGxhY2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKCFNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3Rocm93SW50ZXJuYWxFcnJvcihcIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sXCIpfWlmKHVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlJiZ1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c109dmFsdWV9ZWxzZXtNb2R1bGVbbmFtZV09dmFsdWU7TW9kdWxlW25hbWVdLmFyZ0NvdW50PW51bUFyZ3VtZW50c319dmFyIHdhc21UYWJsZU1pcnJvcj1bXTtmdW5jdGlvbiBnZXRXYXNtVGFibGVFbnRyeShmdW5jUHRyKXt2YXIgZnVuYz13YXNtVGFibGVNaXJyb3JbZnVuY1B0cl07aWYoIWZ1bmMpe2lmKGZ1bmNQdHI+PXdhc21UYWJsZU1pcnJvci5sZW5ndGgpd2FzbVRhYmxlTWlycm9yLmxlbmd0aD1mdW5jUHRyKzE7d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdPWZ1bmM9d2FzbVRhYmxlLmdldChmdW5jUHRyKX1yZXR1cm4gZnVuY31mdW5jdGlvbiBlbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzaWduYXR1cmUscmF3RnVuY3Rpb24pe3NpZ25hdHVyZT1yZWFkTGF0aW4xU3RyaW5nKHNpZ25hdHVyZSk7ZnVuY3Rpb24gbWFrZUR5bkNhbGxlcigpe3JldHVybiBnZXRXYXNtVGFibGVFbnRyeShyYXdGdW5jdGlvbil9dmFyIGZwPW1ha2VEeW5DYWxsZXIoKTtpZih0eXBlb2YgZnAhPVwiZnVuY3Rpb25cIil7dGhyb3dCaW5kaW5nRXJyb3IoXCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgXCIrc2lnbmF0dXJlK1wiOiBcIityYXdGdW5jdGlvbil9cmV0dXJuIGZwfXZhciBVbmJvdW5kVHlwZUVycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiB0aHJvd1VuYm91bmRUeXBlRXJyb3IobWVzc2FnZSx0eXBlcyl7dmFyIHVuYm91bmRUeXBlcz1bXTt2YXIgc2Vlbj17fTtmdW5jdGlvbiB2aXNpdCh0eXBlKXtpZihzZWVuW3R5cGVdKXtyZXR1cm59aWYocmVnaXN0ZXJlZFR5cGVzW3R5cGVdKXtyZXR1cm59aWYodHlwZURlcGVuZGVuY2llc1t0eXBlXSl7dHlwZURlcGVuZGVuY2llc1t0eXBlXS5mb3JFYWNoKHZpc2l0KTtyZXR1cm59dW5ib3VuZFR5cGVzLnB1c2godHlwZSk7c2Vlblt0eXBlXT10cnVlfXR5cGVzLmZvckVhY2godmlzaXQpO3Rocm93IG5ldyBVbmJvdW5kVHlwZUVycm9yKG1lc3NhZ2UrXCI6IFwiK3VuYm91bmRUeXBlcy5tYXAoZ2V0VHlwZU5hbWUpLmpvaW4oW1wiLCBcIl0pKX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9mdW5jdGlvbihuYW1lLGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcixzaWduYXR1cmUscmF3SW52b2tlcixmbil7dmFyIGFyZ1R5cGVzPWhlYXAzMlZlY3RvclRvQXJyYXkoYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmF3SW52b2tlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzaWduYXR1cmUscmF3SW52b2tlcik7ZXhwb3NlUHVibGljU3ltYm9sKG5hbWUsZnVuY3Rpb24oKXt0aHJvd1VuYm91bmRUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBcIituYW1lK1wiIGR1ZSB0byB1bmJvdW5kIHR5cGVzXCIsYXJnVHlwZXMpfSxhcmdDb3VudC0xKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxhcmdUeXBlcyxmdW5jdGlvbihhcmdUeXBlcyl7dmFyIGludm9rZXJBcmdzQXJyYXk9W2FyZ1R5cGVzWzBdLG51bGxdLmNvbmNhdChhcmdUeXBlcy5zbGljZSgxKSk7cmVwbGFjZVB1YmxpY1N5bWJvbChuYW1lLGNyYWZ0SW52b2tlckZ1bmN0aW9uKG5hbWUsaW52b2tlckFyZ3NBcnJheSxudWxsLHJhd0ludm9rZXIsZm4pLGFyZ0NvdW50LTEpO3JldHVybltdfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcihwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2lmKG1heFJhbmdlPT09LTEpe21heFJhbmdlPTQyOTQ5NjcyOTV9dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGZyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU7aWYobWluUmFuZ2U9PT0wKXt2YXIgYml0c2hpZnQ9MzItOCpzaXplO2Zyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU8PGJpdHNoaWZ0Pj4+Yml0c2hpZnR9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoXCJ1bnNpZ25lZFwiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9fWVsc2V7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfX1yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnJvbVdpcmVUeXBlLFwidG9XaXJlVHlwZVwiOnRvV2lyZVR5cGUsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyhyYXdUeXBlLGRhdGFUeXBlSW5kZXgsbmFtZSl7dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSxCaWdJbnQ2NEFycmF5LEJpZ1VpbnQ2NEFycmF5XTt2YXIgVEE9dHlwZU1hcHBpbmdbZGF0YVR5cGVJbmRleF07ZnVuY3Rpb24gZGVjb2RlTWVtb3J5VmlldyhoYW5kbGUpe2hhbmRsZT1oYW5kbGU+PjI7dmFyIGhlYXA9SEVBUFUzMjt2YXIgc2l6ZT1oZWFwW2hhbmRsZV07dmFyIGRhdGE9aGVhcFtoYW5kbGUrMV07cmV0dXJuIG5ldyBUQShidWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmRlY29kZU1lbW9yeVZpZXcsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nKHJhd1R5cGUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzdGRTdHJpbmdJc1VURjg9bmFtZT09PVwic3RkOjpzdHJpbmdcIjtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24odmFsdWUpe3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHBheWxvYWQ9dmFsdWUrNDt2YXIgc3RyO2lmKHN0ZFN0cmluZ0lzVVRGOCl7dmFyIGRlY29kZVN0YXJ0UHRyPXBheWxvYWQ7Zm9yKHZhciBpPTA7aTw9bGVuZ3RoOysraSl7dmFyIGN1cnJlbnRCeXRlUHRyPXBheWxvYWQraTtpZihpPT1sZW5ndGh8fEhFQVBVOFtjdXJyZW50Qnl0ZVB0cl09PTApe3ZhciBtYXhSZWFkPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PVVURjhUb1N0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50fWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDApO3N0cis9c3RyaW5nU2VnbWVudH1kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0cisxfX19ZWxzZXt2YXIgYT1uZXcgQXJyYXkobGVuZ3RoKTtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe2FbaV09U3RyaW5nLmZyb21DaGFyQ29kZShIRUFQVThbcGF5bG9hZCtpXSl9c3RyPWEuam9pbihcIlwiKX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe3ZhbHVlPW5ldyBVaW50OEFycmF5KHZhbHVlKX12YXIgbGVuZ3RoO3ZhciB2YWx1ZUlzT2ZUeXBlU3RyaW5nPXR5cGVvZiB2YWx1ZT09XCJzdHJpbmdcIjtpZighKHZhbHVlSXNPZlR5cGVTdHJpbmd8fHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmdcIil9aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtsZW5ndGg9bGVuZ3RoQnl0ZXNVVEY4KHZhbHVlKX1lbHNle2xlbmd0aD12YWx1ZS5sZW5ndGh9dmFyIGJhc2U9X21hbGxvYyg0K2xlbmd0aCsxKTt2YXIgcHRyPWJhc2UrNDtIRUFQVTMyW2Jhc2U+PjJdPWxlbmd0aDtpZihzdGRTdHJpbmdJc1VURjgmJnZhbHVlSXNPZlR5cGVTdHJpbmcpe3N0cmluZ1RvVVRGOCh2YWx1ZSxwdHIsbGVuZ3RoKzEpfWVsc2V7aWYodmFsdWVJc09mVHlwZVN0cmluZyl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXt2YXIgY2hhckNvZGU9dmFsdWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT4yNTUpe19mcmVlKHB0cik7dGhyb3dCaW5kaW5nRXJyb3IoXCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHNcIil9SEVBUFU4W3B0citpXT1jaGFyQ29kZX19ZWxzZXtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe0hFQVBVOFtwdHIraV09dmFsdWVbaV19fX1pZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2goX2ZyZWUsYmFzZSl9cmV0dXJuIGJhc2V9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfXZhciBVVEYxNkRlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0Zi0xNmxlXCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEYxNlRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZFB0cj1wdHI7dmFyIGlkeD1lbmRQdHI+PjE7dmFyIG1heElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQvMjt3aGlsZSghKGlkeD49bWF4SWR4KSYmSEVBUFUxNltpZHhdKSsraWR4O2VuZFB0cj1pZHg8PDE7aWYoZW5kUHRyLXB0cj4zMiYmVVRGMTZEZWNvZGVyKXJldHVybiBVVEYxNkRlY29kZXIuZGVjb2RlKEhFQVBVOC5zdWJhcnJheShwdHIsZW5kUHRyKSk7dmFyIHN0cj1cIlwiO2Zvcih2YXIgaT0wOyEoaT49bWF4Qnl0ZXNUb1JlYWQvMik7KytpKXt2YXIgY29kZVVuaXQ9SEVBUDE2W3B0citpKjI+PjFdO2lmKGNvZGVVbml0PT0wKWJyZWFrO3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCl9cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjE2KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mn1IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYxNihzdHIpe3JldHVybiBzdHIubGVuZ3RoKjJ9ZnVuY3Rpb24gVVRGMzJUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBpPTA7dmFyIHN0cj1cIlwiO3doaWxlKCEoaT49bWF4Qnl0ZXNUb1JlYWQvNCkpe3ZhciB1dGYzMj1IRUFQMzJbcHRyK2kqND4+Ml07aWYodXRmMzI9PTApYnJlYWs7KytpO2lmKHV0ZjMyPj02NTUzNil7dmFyIGNoPXV0ZjMyLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodXRmMzIpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIHN0cmluZ1RvVVRGMzIoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe2lmKG1heEJ5dGVzVG9Xcml0ZT09PXVuZGVmaW5lZCl7bWF4Qnl0ZXNUb1dyaXRlPTIxNDc0ODM2NDd9aWYobWF4Qnl0ZXNUb1dyaXRlPDQpcmV0dXJuIDA7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgZW5kUHRyPXN0YXJ0UHRyK21heEJ5dGVzVG9Xcml0ZS00O2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtpZihjb2RlVW5pdD49NTUyOTYmJmNvZGVVbml0PD01NzM0Myl7dmFyIHRyYWlsU3Vycm9nYXRlPXN0ci5jaGFyQ29kZUF0KCsraSk7Y29kZVVuaXQ9NjU1MzYrKChjb2RlVW5pdCYxMDIzKTw8MTApfHRyYWlsU3Vycm9nYXRlJjEwMjN9SEVBUDMyW291dFB0cj4+Ml09Y29kZVVuaXQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYzMihzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpKytpO2xlbis9NH1yZXR1cm4gbGVufWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nKHJhd1R5cGUsY2hhclNpemUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBkZWNvZGVTdHJpbmcsZW5jb2RlU3RyaW5nLGdldEhlYXAsbGVuZ3RoQnl0ZXNVVEYsc2hpZnQ7aWYoY2hhclNpemU9PT0yKXtkZWNvZGVTdHJpbmc9VVRGMTZUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYxNjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjE2O2dldEhlYXA9KCk9PkhFQVBVMTY7c2hpZnQ9MX1lbHNlIGlmKGNoYXJTaXplPT09NCl7ZGVjb2RlU3RyaW5nPVVURjMyVG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMzI7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYzMjtnZXRIZWFwPSgpPT5IRUFQVTMyO3NoaWZ0PTJ9cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBIRUFQPWdldEhlYXAoKTt2YXIgc3RyO3ZhciBkZWNvZGVTdGFydFB0cj12YWx1ZSs0O2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj12YWx1ZSs0K2kqY2hhclNpemU7aWYoaT09bGVuZ3RofHxIRUFQW2N1cnJlbnRCeXRlUHRyPj5zaGlmdF09PTApe3ZhciBtYXhSZWFkQnl0ZXM9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9ZGVjb2RlU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWRCeXRlcyk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrY2hhclNpemV9fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYoISh0eXBlb2YgdmFsdWU9PVwic3RyaW5nXCIpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlIFwiK25hbWUpfXZhciBsZW5ndGg9bGVuZ3RoQnl0ZXNVVEYodmFsdWUpO3ZhciBwdHI9X21hbGxvYyg0K2xlbmd0aCtjaGFyU2l6ZSk7SEVBUFUzMltwdHI+PjJdPWxlbmd0aD4+c2hpZnQ7ZW5jb2RlU3RyaW5nKHZhbHVlLHB0cis0LGxlbmd0aCtjaGFyU2l6ZSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLHB0cil9cmV0dXJuIHB0cn0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpmdW5jdGlvbihwdHIpe19mcmVlKHB0cil9fSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdmFsdWVfYXJyYXkocmF3VHlwZSxuYW1lLGNvbnN0cnVjdG9yU2lnbmF0dXJlLHJhd0NvbnN0cnVjdG9yLGRlc3RydWN0b3JTaWduYXR1cmUscmF3RGVzdHJ1Y3Rvcil7dHVwbGVSZWdpc3RyYXRpb25zW3Jhd1R5cGVdPXtuYW1lOnJlYWRMYXRpbjFTdHJpbmcobmFtZSkscmF3Q29uc3RydWN0b3I6ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oY29uc3RydWN0b3JTaWduYXR1cmUscmF3Q29uc3RydWN0b3IpLHJhd0Rlc3RydWN0b3I6ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZGVzdHJ1Y3RvclNpZ25hdHVyZSxyYXdEZXN0cnVjdG9yKSxlbGVtZW50czpbXX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdmFsdWVfYXJyYXlfZWxlbWVudChyYXdUdXBsZVR5cGUsZ2V0dGVyUmV0dXJuVHlwZSxnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyLGdldHRlckNvbnRleHQsc2V0dGVyQXJndW1lbnRUeXBlLHNldHRlclNpZ25hdHVyZSxzZXR0ZXIsc2V0dGVyQ29udGV4dCl7dHVwbGVSZWdpc3RyYXRpb25zW3Jhd1R1cGxlVHlwZV0uZWxlbWVudHMucHVzaCh7Z2V0dGVyUmV0dXJuVHlwZTpnZXR0ZXJSZXR1cm5UeXBlLGdldHRlcjplbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyKSxnZXR0ZXJDb250ZXh0OmdldHRlckNvbnRleHQsc2V0dGVyQXJndW1lbnRUeXBlOnNldHRlckFyZ3VtZW50VHlwZSxzZXR0ZXI6ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oc2V0dGVyU2lnbmF0dXJlLHNldHRlciksc2V0dGVyQ29udGV4dDpzZXR0ZXJDb250ZXh0fSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdm9pZChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7aXNWb2lkOnRydWUsbmFtZTpuYW1lLFwiYXJnUGFja0FkdmFuY2VcIjowLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oKXtyZXR1cm4gdW5kZWZpbmVkfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gdW5kZWZpbmVkfX0pfXZhciBub3dJc01vbm90b25pYz10cnVlO2Z1bmN0aW9uIF9fZW1zY3JpcHRlbl9nZXRfbm93X2lzX21vbm90b25pYygpe3JldHVybiBub3dJc01vbm90b25pY312YXIgZW12YWxfc3ltYm9scz17fTtmdW5jdGlvbiBnZXRTdHJpbmdPclN5bWJvbChhZGRyZXNzKXt2YXIgc3ltYm9sPWVtdmFsX3N5bWJvbHNbYWRkcmVzc107aWYoc3ltYm9sPT09dW5kZWZpbmVkKXtyZXR1cm4gcmVhZExhdGluMVN0cmluZyhhZGRyZXNzKX1yZXR1cm4gc3ltYm9sfXZhciBlbXZhbF9tZXRob2RDYWxsZXJzPVtdO2Z1bmN0aW9uIF9fZW12YWxfY2FsbF92b2lkX21ldGhvZChjYWxsZXIsaGFuZGxlLG1ldGhvZE5hbWUsYXJncyl7Y2FsbGVyPWVtdmFsX21ldGhvZENhbGxlcnNbY2FsbGVyXTtoYW5kbGU9RW12YWwudG9WYWx1ZShoYW5kbGUpO21ldGhvZE5hbWU9Z2V0U3RyaW5nT3JTeW1ib2wobWV0aG9kTmFtZSk7Y2FsbGVyKGhhbmRsZSxtZXRob2ROYW1lLG51bGwsYXJncyl9ZnVuY3Rpb24gZW12YWxfYWRkTWV0aG9kQ2FsbGVyKGNhbGxlcil7dmFyIGlkPWVtdmFsX21ldGhvZENhbGxlcnMubGVuZ3RoO2VtdmFsX21ldGhvZENhbGxlcnMucHVzaChjYWxsZXIpO3JldHVybiBpZH1mdW5jdGlvbiBlbXZhbF9sb29rdXBUeXBlcyhhcmdDb3VudCxhcmdUeXBlcyl7dmFyIGE9bmV3IEFycmF5KGFyZ0NvdW50KTtmb3IodmFyIGk9MDtpPGFyZ0NvdW50OysraSl7YVtpXT1yZXF1aXJlUmVnaXN0ZXJlZFR5cGUoSEVBUFUzMlthcmdUeXBlcytpKlBPSU5URVJfU0laRT4+Ml0sXCJwYXJhbWV0ZXIgXCIraSl9cmV0dXJuIGF9dmFyIGVtdmFsX3JlZ2lzdGVyZWRNZXRob2RzPVtdO2Z1bmN0aW9uIF9fZW12YWxfZ2V0X21ldGhvZF9jYWxsZXIoYXJnQ291bnQsYXJnVHlwZXMpe3ZhciB0eXBlcz1lbXZhbF9sb29rdXBUeXBlcyhhcmdDb3VudCxhcmdUeXBlcyk7dmFyIHJldFR5cGU9dHlwZXNbMF07dmFyIHNpZ25hdHVyZU5hbWU9cmV0VHlwZS5uYW1lK1wiXyRcIit0eXBlcy5zbGljZSgxKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQubmFtZX0pLmpvaW4oXCJfXCIpK1wiJFwiO3ZhciByZXR1cm5JZD1lbXZhbF9yZWdpc3RlcmVkTWV0aG9kc1tzaWduYXR1cmVOYW1lXTtpZihyZXR1cm5JZCE9PXVuZGVmaW5lZCl7cmV0dXJuIHJldHVybklkfXZhciBwYXJhbXM9W1wicmV0VHlwZVwiXTt2YXIgYXJncz1bcmV0VHlwZV07dmFyIGFyZ3NMaXN0PVwiXCI7Zm9yKHZhciBpPTA7aTxhcmdDb3VudC0xOysraSl7YXJnc0xpc3QrPShpIT09MD9cIiwgXCI6XCJcIikrXCJhcmdcIitpO3BhcmFtcy5wdXNoKFwiYXJnVHlwZVwiK2kpO2FyZ3MucHVzaCh0eXBlc1sxK2ldKX12YXIgZnVuY3Rpb25OYW1lPW1ha2VMZWdhbEZ1bmN0aW9uTmFtZShcIm1ldGhvZENhbGxlcl9cIitzaWduYXR1cmVOYW1lKTt2YXIgZnVuY3Rpb25Cb2R5PVwicmV0dXJuIGZ1bmN0aW9uIFwiK2Z1bmN0aW9uTmFtZStcIihoYW5kbGUsIG5hbWUsIGRlc3RydWN0b3JzLCBhcmdzKSB7XFxuXCI7dmFyIG9mZnNldD0wO2Zvcih2YXIgaT0wO2k8YXJnQ291bnQtMTsrK2kpe2Z1bmN0aW9uQm9keSs9XCIgICAgdmFyIGFyZ1wiK2krXCIgPSBhcmdUeXBlXCIraStcIi5yZWFkVmFsdWVGcm9tUG9pbnRlcihhcmdzXCIrKG9mZnNldD9cIitcIitvZmZzZXQ6XCJcIikrXCIpO1xcblwiO29mZnNldCs9dHlwZXNbaSsxXVtcImFyZ1BhY2tBZHZhbmNlXCJdfWZ1bmN0aW9uQm9keSs9XCIgICAgdmFyIHJ2ID0gaGFuZGxlW25hbWVdKFwiK2FyZ3NMaXN0K1wiKTtcXG5cIjtmb3IodmFyIGk9MDtpPGFyZ0NvdW50LTE7KytpKXtpZih0eXBlc1tpKzFdW1wiZGVsZXRlT2JqZWN0XCJdKXtmdW5jdGlvbkJvZHkrPVwiICAgIGFyZ1R5cGVcIitpK1wiLmRlbGV0ZU9iamVjdChhcmdcIitpK1wiKTtcXG5cIn19aWYoIXJldFR5cGUuaXNWb2lkKXtmdW5jdGlvbkJvZHkrPVwiICAgIHJldHVybiByZXRUeXBlLnRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsIHJ2KTtcXG5cIn1mdW5jdGlvbkJvZHkrPVwifTtcXG5cIjtwYXJhbXMucHVzaChmdW5jdGlvbkJvZHkpO3ZhciBpbnZva2VyRnVuY3Rpb249bmV3XyhGdW5jdGlvbixwYXJhbXMpLmFwcGx5KG51bGwsYXJncyk7cmV0dXJuSWQ9ZW12YWxfYWRkTWV0aG9kQ2FsbGVyKGludm9rZXJGdW5jdGlvbik7ZW12YWxfcmVnaXN0ZXJlZE1ldGhvZHNbc2lnbmF0dXJlTmFtZV09cmV0dXJuSWQ7cmV0dXJuIHJldHVybklkfWZ1bmN0aW9uIF9hYm9ydCgpe2Fib3J0KFwiXCIpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX2RhdGVfbm93KCl7cmV0dXJuIERhdGUubm93KCl9ZnVuY3Rpb24gZ2V0SGVhcE1heCgpe3JldHVybiAyMTQ3NDgzNjQ4fWZ1bmN0aW9uIF9lbXNjcmlwdGVuX2dldF9oZWFwX21heCgpe3JldHVybiBnZXRIZWFwTWF4KCl9dmFyIF9lbXNjcmlwdGVuX2dldF9ub3c7X2Vtc2NyaXB0ZW5fZ2V0X25vdz0oKT0+cGVyZm9ybWFuY2Uubm93KCk7ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LHNyYyxudW0pe0hFQVBVOC5jb3B5V2l0aGluKGRlc3Qsc3JjLHNyYytudW0pfWZ1bmN0aW9uIGVtc2NyaXB0ZW5fcmVhbGxvY19idWZmZXIoc2l6ZSl7dHJ5e3dhc21NZW1vcnkuZ3JvdyhzaXplLWJ1ZmZlci5ieXRlTGVuZ3RoKzY1NTM1Pj4+MTYpO3VwZGF0ZUdsb2JhbEJ1ZmZlckFuZFZpZXdzKHdhc21NZW1vcnkuYnVmZmVyKTtyZXR1cm4gMX1jYXRjaChlKXt9fWZ1bmN0aW9uIF9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwKHJlcXVlc3RlZFNpemUpe3ZhciBvbGRTaXplPUhFQVBVOC5sZW5ndGg7cmVxdWVzdGVkU2l6ZT1yZXF1ZXN0ZWRTaXplPj4+MDt2YXIgbWF4SGVhcFNpemU9Z2V0SGVhcE1heCgpO2lmKHJlcXVlc3RlZFNpemU+bWF4SGVhcFNpemUpe3JldHVybiBmYWxzZX1sZXQgYWxpZ25VcD0oeCxtdWx0aXBsZSk9PngrKG11bHRpcGxlLXglbXVsdGlwbGUpJW11bHRpcGxlO2Zvcih2YXIgY3V0RG93bj0xO2N1dERvd248PTQ7Y3V0RG93bio9Mil7dmFyIG92ZXJHcm93bkhlYXBTaXplPW9sZFNpemUqKDErLjIvY3V0RG93bik7b3Zlckdyb3duSGVhcFNpemU9TWF0aC5taW4ob3Zlckdyb3duSGVhcFNpemUscmVxdWVzdGVkU2l6ZSsxMDA2NjMyOTYpO3ZhciBuZXdTaXplPU1hdGgubWluKG1heEhlYXBTaXplLGFsaWduVXAoTWF0aC5tYXgocmVxdWVzdGVkU2l6ZSxvdmVyR3Jvd25IZWFwU2l6ZSksNjU1MzYpKTt2YXIgcmVwbGFjZW1lbnQ9ZW1zY3JpcHRlbl9yZWFsbG9jX2J1ZmZlcihuZXdTaXplKTtpZihyZXBsYWNlbWVudCl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX12YXIgcHJpbnRDaGFyQnVmZmVycz1bbnVsbCxbXSxbXV07ZnVuY3Rpb24gcHJpbnRDaGFyKHN0cmVhbSxjdXJyKXt2YXIgYnVmZmVyPXByaW50Q2hhckJ1ZmZlcnNbc3RyZWFtXTtpZihjdXJyPT09MHx8Y3Vycj09PTEwKXsoc3RyZWFtPT09MT9vdXQ6ZXJyKShVVEY4QXJyYXlUb1N0cmluZyhidWZmZXIsMCkpO2J1ZmZlci5sZW5ndGg9MH1lbHNle2J1ZmZlci5wdXNoKGN1cnIpfX12YXIgU1lTQ0FMTFM9e3ZhcmFyZ3M6dW5kZWZpbmVkLGdldDpmdW5jdGlvbigpe1NZU0NBTExTLnZhcmFyZ3MrPTQ7dmFyIHJldD1IRUFQMzJbU1lTQ0FMTFMudmFyYXJncy00Pj4yXTtyZXR1cm4gcmV0fSxnZXRTdHI6ZnVuY3Rpb24ocHRyKXt2YXIgcmV0PVVURjhUb1N0cmluZyhwdHIpO3JldHVybiByZXR9fTtmdW5jdGlvbiBfZmRfd3JpdGUoZmQsaW92LGlvdmNudCxwbnVtKXt2YXIgbnVtPTA7Zm9yKHZhciBpPTA7aTxpb3ZjbnQ7aSsrKXt2YXIgcHRyPUhFQVBVMzJbaW92Pj4yXTt2YXIgbGVuPUhFQVBVMzJbaW92KzQ+PjJdO2lvdis9ODtmb3IodmFyIGo9MDtqPGxlbjtqKyspe3ByaW50Q2hhcihmZCxIRUFQVThbcHRyK2pdKX1udW0rPWxlbn1IRUFQVTMyW3BudW0+PjJdPW51bTtyZXR1cm4gMH1mdW5jdGlvbiBfcHJvY19leGl0KGNvZGUpe0VYSVRTVEFUVVM9Y29kZTtpZigha2VlcFJ1bnRpbWVBbGl2ZSgpKXtpZihNb2R1bGVbXCJvbkV4aXRcIl0pTW9kdWxlW1wib25FeGl0XCJdKGNvZGUpO0FCT1JUPXRydWV9cXVpdF8oY29kZSxuZXcgRXhpdFN0YXR1cyhjb2RlKSl9ZnVuY3Rpb24gZXhpdEpTKHN0YXR1cyxpbXBsaWNpdCl7RVhJVFNUQVRVUz1zdGF0dXM7X3Byb2NfZXhpdChzdGF0dXMpfUludGVybmFsRXJyb3I9TW9kdWxlW1wiSW50ZXJuYWxFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkludGVybmFsRXJyb3JcIik7ZW1iaW5kX2luaXRfY2hhckNvZGVzKCk7QmluZGluZ0Vycm9yPU1vZHVsZVtcIkJpbmRpbmdFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkJpbmRpbmdFcnJvclwiKTtpbml0X2VtdmFsKCk7VW5ib3VuZFR5cGVFcnJvcj1Nb2R1bGVbXCJVbmJvdW5kVHlwZUVycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiVW5ib3VuZFR5cGVFcnJvclwiKTt2YXIgYXNtTGlicmFyeUFyZz17XCJfZW1iaW5kX2ZpbmFsaXplX3ZhbHVlX2FycmF5XCI6X19lbWJpbmRfZmluYWxpemVfdmFsdWVfYXJyYXksXCJfZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludCxcIl9lbWJpbmRfcmVnaXN0ZXJfYm9vbFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wsXCJfZW1iaW5kX3JlZ2lzdGVyX2VtdmFsXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW12YWwsXCJfZW1iaW5kX3JlZ2lzdGVyX2VudW1cIjpfX2VtYmluZF9yZWdpc3Rlcl9lbnVtLFwiX2VtYmluZF9yZWdpc3Rlcl9lbnVtX3ZhbHVlXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZSxcIl9lbWJpbmRfcmVnaXN0ZXJfZmxvYXRcIjpfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdCxcIl9lbWJpbmRfcmVnaXN0ZXJfZnVuY3Rpb25cIjpfX2VtYmluZF9yZWdpc3Rlcl9mdW5jdGlvbixcIl9lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlclwiOl9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIsXCJfZW1iaW5kX3JlZ2lzdGVyX21lbW9yeV92aWV3XCI6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsXCJfZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmdcIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nLFwiX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZ1wiOl9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nLFwiX2VtYmluZF9yZWdpc3Rlcl92YWx1ZV9hcnJheVwiOl9fZW1iaW5kX3JlZ2lzdGVyX3ZhbHVlX2FycmF5LFwiX2VtYmluZF9yZWdpc3Rlcl92YWx1ZV9hcnJheV9lbGVtZW50XCI6X19lbWJpbmRfcmVnaXN0ZXJfdmFsdWVfYXJyYXlfZWxlbWVudCxcIl9lbWJpbmRfcmVnaXN0ZXJfdm9pZFwiOl9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQsXCJfZW1zY3JpcHRlbl9nZXRfbm93X2lzX21vbm90b25pY1wiOl9fZW1zY3JpcHRlbl9nZXRfbm93X2lzX21vbm90b25pYyxcIl9lbXZhbF9jYWxsX3ZvaWRfbWV0aG9kXCI6X19lbXZhbF9jYWxsX3ZvaWRfbWV0aG9kLFwiX2VtdmFsX2RlY3JlZlwiOl9fZW12YWxfZGVjcmVmLFwiX2VtdmFsX2dldF9tZXRob2RfY2FsbGVyXCI6X19lbXZhbF9nZXRfbWV0aG9kX2NhbGxlcixcImFib3J0XCI6X2Fib3J0LFwiZW1zY3JpcHRlbl9kYXRlX25vd1wiOl9lbXNjcmlwdGVuX2RhdGVfbm93LFwiZW1zY3JpcHRlbl9nZXRfaGVhcF9tYXhcIjpfZW1zY3JpcHRlbl9nZXRfaGVhcF9tYXgsXCJlbXNjcmlwdGVuX2dldF9ub3dcIjpfZW1zY3JpcHRlbl9nZXRfbm93LFwiZW1zY3JpcHRlbl9tZW1jcHlfYmlnXCI6X2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyxcImVtc2NyaXB0ZW5fcmVzaXplX2hlYXBcIjpfZW1zY3JpcHRlbl9yZXNpemVfaGVhcCxcImZkX3dyaXRlXCI6X2ZkX3dyaXRlfTt2YXIgYXNtPWNyZWF0ZVdhc20oKTt2YXIgX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcIl9fX3dhc21fY2FsbF9jdG9yc1wiXT1mdW5jdGlvbigpe3JldHVybihfX193YXNtX2NhbGxfY3RvcnM9TW9kdWxlW1wiX19fd2FzbV9jYWxsX2N0b3JzXCJdPU1vZHVsZVtcImFzbVwiXVtcIl9fd2FzbV9jYWxsX2N0b3JzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfR2V0U3RhdGlzdGljcz1Nb2R1bGVbXCJfSFBfR2V0U3RhdGlzdGljc1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfR2V0U3RhdGlzdGljcz1Nb2R1bGVbXCJfSFBfR2V0U3RhdGlzdGljc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9HZXRTdGF0aXN0aWNzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQ3JlYXRlU3BoZXJlPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVTcGhlcmVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZVNwaGVyZT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlU3BoZXJlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZVNwaGVyZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUNhcHN1bGU9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUNhcHN1bGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUNhcHN1bGU9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUNhcHN1bGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfQ3JlYXRlQ2Fwc3VsZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUN5bGluZGVyPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDeWxpbmRlclwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfQ3JlYXRlQ3lsaW5kZXI9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUN5bGluZGVyXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUN5bGluZGVyXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQ3JlYXRlQm94PU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVCb3hcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUJveD1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlQm94XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUJveFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUNvbnZleEh1bGw9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUNvbnZleEh1bGxcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUNvbnZleEh1bGw9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUNvbnZleEh1bGxcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfQ3JlYXRlQ29udmV4SHVsbFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZU1lc2g9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZU1lc2hcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZU1lc2g9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZU1lc2hcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfQ3JlYXRlTWVzaFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0NyZWF0ZUhlaWdodEZpZWxkPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVIZWlnaHRGaWVsZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfQ3JlYXRlSGVpZ2h0RmllbGQ9TW9kdWxlW1wiX0hQX1NoYXBlX0NyZWF0ZUhlaWdodEZpZWxkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUhlaWdodEZpZWxkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfQ3JlYXRlQ29udGFpbmVyPU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVDb250YWluZXJcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZUNvbnRhaW5lcj1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlQ29udGFpbmVyXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0NyZWF0ZUNvbnRhaW5lclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX1JlbGVhc2U9TW9kdWxlW1wiX0hQX1NoYXBlX1JlbGVhc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX1JlbGVhc2U9TW9kdWxlW1wiX0hQX1NoYXBlX1JlbGVhc2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfUmVsZWFzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0dldFR5cGU9TW9kdWxlW1wiX0hQX1NoYXBlX0dldFR5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0dldFR5cGU9TW9kdWxlW1wiX0hQX1NoYXBlX0dldFR5cGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfR2V0VHlwZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0FkZENoaWxkPU1vZHVsZVtcIl9IUF9TaGFwZV9BZGRDaGlsZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfQWRkQ2hpbGQ9TW9kdWxlW1wiX0hQX1NoYXBlX0FkZENoaWxkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0FkZENoaWxkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfUmVtb3ZlQ2hpbGQ9TW9kdWxlW1wiX0hQX1NoYXBlX1JlbW92ZUNoaWxkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9SZW1vdmVDaGlsZD1Nb2R1bGVbXCJfSFBfU2hhcGVfUmVtb3ZlQ2hpbGRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfUmVtb3ZlQ2hpbGRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9HZXROdW1DaGlsZHJlbj1Nb2R1bGVbXCJfSFBfU2hhcGVfR2V0TnVtQ2hpbGRyZW5cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0dldE51bUNoaWxkcmVuPU1vZHVsZVtcIl9IUF9TaGFwZV9HZXROdW1DaGlsZHJlblwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9HZXROdW1DaGlsZHJlblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX1NldENoaWxkUVNUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX1NoYXBlX1NldENoaWxkUVNUcmFuc2Zvcm1cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX1NldENoaWxkUVNUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX1NoYXBlX1NldENoaWxkUVNUcmFuc2Zvcm1cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfU2V0Q2hpbGRRU1RyYW5zZm9ybVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0dldENoaWxkUVNUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX1NoYXBlX0dldENoaWxkUVNUcmFuc2Zvcm1cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0dldENoaWxkUVNUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX1NoYXBlX0dldENoaWxkUVNUcmFuc2Zvcm1cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfR2V0Q2hpbGRRU1RyYW5zZm9ybVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX1NldEZpbHRlckluZm89TW9kdWxlW1wiX0hQX1NoYXBlX1NldEZpbHRlckluZm9cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX1NldEZpbHRlckluZm89TW9kdWxlW1wiX0hQX1NoYXBlX1NldEZpbHRlckluZm9cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfU2V0RmlsdGVySW5mb1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX0dldEZpbHRlckluZm89TW9kdWxlW1wiX0hQX1NoYXBlX0dldEZpbHRlckluZm9cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0dldEZpbHRlckluZm89TW9kdWxlW1wiX0hQX1NoYXBlX0dldEZpbHRlckluZm9cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfR2V0RmlsdGVySW5mb1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1NoYXBlX1NldE1hdGVyaWFsPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRNYXRlcmlhbFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfU2hhcGVfU2V0TWF0ZXJpYWw9TW9kdWxlW1wiX0hQX1NoYXBlX1NldE1hdGVyaWFsXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1NldE1hdGVyaWFsXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfU2hhcGVfR2V0TWF0ZXJpYWw9TW9kdWxlW1wiX0hQX1NoYXBlX0dldE1hdGVyaWFsXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXRNYXRlcmlhbD1Nb2R1bGVbXCJfSFBfU2hhcGVfR2V0TWF0ZXJpYWxcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfU2hhcGVfR2V0TWF0ZXJpYWxcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9TZXREZW5zaXR5PU1vZHVsZVtcIl9IUF9TaGFwZV9TZXREZW5zaXR5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9TZXREZW5zaXR5PU1vZHVsZVtcIl9IUF9TaGFwZV9TZXREZW5zaXR5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1NldERlbnNpdHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9HZXREZW5zaXR5PU1vZHVsZVtcIl9IUF9TaGFwZV9HZXREZW5zaXR5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9HZXREZW5zaXR5PU1vZHVsZVtcIl9IUF9TaGFwZV9HZXREZW5zaXR5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0dldERlbnNpdHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DYXN0UmF5PU1vZHVsZVtcIl9IUF9TaGFwZV9DYXN0UmF5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9DYXN0UmF5PU1vZHVsZVtcIl9IUF9TaGFwZV9DYXN0UmF5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0Nhc3RSYXlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9CdWlsZE1hc3NQcm9wZXJ0aWVzPU1vZHVsZVtcIl9IUF9TaGFwZV9CdWlsZE1hc3NQcm9wZXJ0aWVzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9CdWlsZE1hc3NQcm9wZXJ0aWVzPU1vZHVsZVtcIl9IUF9TaGFwZV9CdWlsZE1hc3NQcm9wZXJ0aWVzXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX0J1aWxkTWFzc1Byb3BlcnRpZXNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZVBhdGhJdGVyYXRvcl9HZXROZXh0PU1vZHVsZVtcIl9IUF9TaGFwZVBhdGhJdGVyYXRvcl9HZXROZXh0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZVBhdGhJdGVyYXRvcl9HZXROZXh0PU1vZHVsZVtcIl9IUF9TaGFwZVBhdGhJdGVyYXRvcl9HZXROZXh0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlUGF0aEl0ZXJhdG9yX0dldE5leHRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9TZXRUcmlnZ2VyPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRUcmlnZ2VyXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9TaGFwZV9TZXRUcmlnZ2VyPU1vZHVsZVtcIl9IUF9TaGFwZV9TZXRUcmlnZ2VyXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1NoYXBlX1NldFRyaWdnZXJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9TaGFwZV9DcmVhdGVEZWJ1Z0Rpc3BsYXlHZW9tZXRyeT1Nb2R1bGVbXCJfSFBfU2hhcGVfQ3JlYXRlRGVidWdEaXNwbGF5R2VvbWV0cnlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1NoYXBlX0NyZWF0ZURlYnVnRGlzcGxheUdlb21ldHJ5PU1vZHVsZVtcIl9IUF9TaGFwZV9DcmVhdGVEZWJ1Z0Rpc3BsYXlHZW9tZXRyeVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9TaGFwZV9DcmVhdGVEZWJ1Z0Rpc3BsYXlHZW9tZXRyeVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0RlYnVnR2VvbWV0cnlfR2V0SW5mbz1Nb2R1bGVbXCJfSFBfRGVidWdHZW9tZXRyeV9HZXRJbmZvXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9EZWJ1Z0dlb21ldHJ5X0dldEluZm89TW9kdWxlW1wiX0hQX0RlYnVnR2VvbWV0cnlfR2V0SW5mb1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9EZWJ1Z0dlb21ldHJ5X0dldEluZm9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9EZWJ1Z0dlb21ldHJ5X1JlbGVhc2U9TW9kdWxlW1wiX0hQX0RlYnVnR2VvbWV0cnlfUmVsZWFzZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfRGVidWdHZW9tZXRyeV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9EZWJ1Z0dlb21ldHJ5X1JlbGVhc2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfRGVidWdHZW9tZXRyeV9SZWxlYXNlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9DcmVhdGU9TW9kdWxlW1wiX0hQX0JvZHlfQ3JlYXRlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0NyZWF0ZT1Nb2R1bGVbXCJfSFBfQm9keV9DcmVhdGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9DcmVhdGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1JlbGVhc2U9TW9kdWxlW1wiX0hQX0JvZHlfUmVsZWFzZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9SZWxlYXNlPU1vZHVsZVtcIl9IUF9Cb2R5X1JlbGVhc2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9SZWxlYXNlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRTaGFwZT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRTaGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRTaGFwZT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRTaGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldFNoYXBlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRTaGFwZT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRTaGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRTaGFwZT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRTaGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldFNoYXBlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRNb3Rpb25UeXBlPU1vZHVsZVtcIl9IUF9Cb2R5X1NldE1vdGlvblR5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0TW90aW9uVHlwZT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRNb3Rpb25UeXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0TW90aW9uVHlwZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0TW90aW9uVHlwZT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRNb3Rpb25UeXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldE1vdGlvblR5cGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TW90aW9uVHlwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldE1vdGlvblR5cGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEV2ZW50TWFzaz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRFdmVudE1hc2tcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0RXZlbnRNYXNrPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEV2ZW50TWFza1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldEV2ZW50TWFza1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0RXZlbnRNYXNrPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEV2ZW50TWFza1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRFdmVudE1hc2s9TW9kdWxlW1wiX0hQX0JvZHlfR2V0RXZlbnRNYXNrXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0RXZlbnRNYXNrXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRNYXNzUHJvcGVydGllc1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRNYXNzUHJvcGVydGllc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldE1hc3NQcm9wZXJ0aWVzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRNYXNzUHJvcGVydGllc1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRNYXNzUHJvcGVydGllcz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRNYXNzUHJvcGVydGllc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldE1hc3NQcm9wZXJ0aWVzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRMaW5lYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X1NldExpbmVhckRhbXBpbmdcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0TGluZWFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9TZXRMaW5lYXJEYW1waW5nXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0TGluZWFyRGFtcGluZ1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0TGluZWFyRGFtcGluZz1Nb2R1bGVbXCJfSFBfQm9keV9HZXRMaW5lYXJEYW1waW5nXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldExpbmVhckRhbXBpbmc9TW9kdWxlW1wiX0hQX0JvZHlfR2V0TGluZWFyRGFtcGluZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldExpbmVhckRhbXBpbmdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEFuZ3VsYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFuZ3VsYXJEYW1waW5nXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldEFuZ3VsYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFuZ3VsYXJEYW1waW5nXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0QW5ndWxhckRhbXBpbmdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldEFuZ3VsYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEFuZ3VsYXJEYW1waW5nXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldEFuZ3VsYXJEYW1waW5nPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEFuZ3VsYXJEYW1waW5nXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0QW5ndWxhckRhbXBpbmdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEdyYXZpdHlGYWN0b3I9TW9kdWxlW1wiX0hQX0JvZHlfU2V0R3Jhdml0eUZhY3RvclwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRHcmF2aXR5RmFjdG9yPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEdyYXZpdHlGYWN0b3JcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRHcmF2aXR5RmFjdG9yXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRHcmF2aXR5RmFjdG9yPU1vZHVsZVtcIl9IUF9Cb2R5X0dldEdyYXZpdHlGYWN0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0R3Jhdml0eUZhY3Rvcj1Nb2R1bGVbXCJfSFBfQm9keV9HZXRHcmF2aXR5RmFjdG9yXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0R3Jhdml0eUZhY3RvclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0V29ybGQ9TW9kdWxlW1wiX0hQX0JvZHlfR2V0V29ybGRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0V29ybGQ9TW9kdWxlW1wiX0hQX0JvZHlfR2V0V29ybGRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRXb3JsZFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0UG9zaXRpb249TW9kdWxlW1wiX0hQX0JvZHlfU2V0UG9zaXRpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0UG9zaXRpb249TW9kdWxlW1wiX0hQX0JvZHlfU2V0UG9zaXRpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRQb3NpdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0UG9zaXRpb249TW9kdWxlW1wiX0hQX0JvZHlfR2V0UG9zaXRpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0UG9zaXRpb249TW9kdWxlW1wiX0hQX0JvZHlfR2V0UG9zaXRpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRQb3NpdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0T3JpZW50YXRpb249TW9kdWxlW1wiX0hQX0JvZHlfU2V0T3JpZW50YXRpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0T3JpZW50YXRpb249TW9kdWxlW1wiX0hQX0JvZHlfU2V0T3JpZW50YXRpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRPcmllbnRhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfR2V0T3JpZW50YXRpb249TW9kdWxlW1wiX0hQX0JvZHlfR2V0T3JpZW50YXRpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0T3JpZW50YXRpb249TW9kdWxlW1wiX0hQX0JvZHlfR2V0T3JpZW50YXRpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRPcmllbnRhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0UVRyYW5zZm9ybT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRRVHJhbnNmb3JtXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldFFUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX0JvZHlfU2V0UVRyYW5zZm9ybVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldFFUcmFuc2Zvcm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldFdvcmxkVHJhbnNmb3JtT2Zmc2V0PU1vZHVsZVtcIl9IUF9Cb2R5X0dldFdvcmxkVHJhbnNmb3JtT2Zmc2V0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldFdvcmxkVHJhbnNmb3JtT2Zmc2V0PU1vZHVsZVtcIl9IUF9Cb2R5X0dldFdvcmxkVHJhbnNmb3JtT2Zmc2V0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfR2V0V29ybGRUcmFuc2Zvcm1PZmZzZXRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldFFUcmFuc2Zvcm09TW9kdWxlW1wiX0hQX0JvZHlfR2V0UVRyYW5zZm9ybVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRRVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9Cb2R5X0dldFFUcmFuc2Zvcm1cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRRVHJhbnNmb3JtXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRMaW5lYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRMaW5lYXJWZWxvY2l0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRMaW5lYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRMaW5lYXJWZWxvY2l0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldExpbmVhclZlbG9jaXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRMaW5lYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRMaW5lYXJWZWxvY2l0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9HZXRMaW5lYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRMaW5lYXJWZWxvY2l0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldExpbmVhclZlbG9jaXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRBbmd1bGFyVmVsb2NpdHk9TW9kdWxlW1wiX0hQX0JvZHlfU2V0QW5ndWxhclZlbG9jaXR5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldEFuZ3VsYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBbmd1bGFyVmVsb2NpdHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9TZXRBbmd1bGFyVmVsb2NpdHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X0dldEFuZ3VsYXJWZWxvY2l0eT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRBbmd1bGFyVmVsb2NpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfR2V0QW5ndWxhclZlbG9jaXR5PU1vZHVsZVtcIl9IUF9Cb2R5X0dldEFuZ3VsYXJWZWxvY2l0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X0dldEFuZ3VsYXJWZWxvY2l0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfQXBwbHlJbXB1bHNlPU1vZHVsZVtcIl9IUF9Cb2R5X0FwcGx5SW1wdWxzZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9BcHBseUltcHVsc2U9TW9kdWxlW1wiX0hQX0JvZHlfQXBwbHlJbXB1bHNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfQXBwbHlJbXB1bHNlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9TZXRUYXJnZXRRVHJhbnNmb3JtPU1vZHVsZVtcIl9IUF9Cb2R5X1NldFRhcmdldFFUcmFuc2Zvcm1cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0VGFyZ2V0UVRyYW5zZm9ybT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRUYXJnZXRRVHJhbnNmb3JtXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0VGFyZ2V0UVRyYW5zZm9ybVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0JvZHlfU2V0QWN0aXZhdGlvblN0YXRlPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFjdGl2YXRpb25TdGF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQm9keV9TZXRBY3RpdmF0aW9uU3RhdGU9TW9kdWxlW1wiX0hQX0JvZHlfU2V0QWN0aXZhdGlvblN0YXRlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0QWN0aXZhdGlvblN0YXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQm9keV9HZXRBY3RpdmF0aW9uU3RhdGU9TW9kdWxlW1wiX0hQX0JvZHlfR2V0QWN0aXZhdGlvblN0YXRlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X0dldEFjdGl2YXRpb25TdGF0ZT1Nb2R1bGVbXCJfSFBfQm9keV9HZXRBY3RpdmF0aW9uU3RhdGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQm9keV9HZXRBY3RpdmF0aW9uU3RhdGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEFjdGl2YXRpb25Db250cm9sPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFjdGl2YXRpb25Db250cm9sXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Cb2R5X1NldEFjdGl2YXRpb25Db250cm9sPU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFjdGl2YXRpb25Db250cm9sXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0JvZHlfU2V0QWN0aXZhdGlvbkNvbnRyb2xcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Cb2R5X1NldEFjdGl2YXRpb25Qcmlvcml0eT1Nb2R1bGVbXCJfSFBfQm9keV9TZXRBY3RpdmF0aW9uUHJpb3JpdHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0JvZHlfU2V0QWN0aXZhdGlvblByaW9yaXR5PU1vZHVsZVtcIl9IUF9Cb2R5X1NldEFjdGl2YXRpb25Qcmlvcml0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Cb2R5X1NldEFjdGl2YXRpb25Qcmlvcml0eVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfQ3JlYXRlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0NyZWF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9DcmVhdGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfQ3JlYXRlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfQ3JlYXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9SZWxlYXNlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1JlbGVhc2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9SZWxlYXNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfUmVsZWFzZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0UGFyZW50Qm9keT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRQYXJlbnRCb2R5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldFBhcmVudEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0UGFyZW50Qm9keVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldFBhcmVudEJvZHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldFBhcmVudEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0UGFyZW50Qm9keVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRQYXJlbnRCb2R5PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldFBhcmVudEJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRQYXJlbnRCb2R5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRDaGlsZEJvZHk9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0Q2hpbGRCb2R5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldENoaWxkQm9keT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRDaGlsZEJvZHlcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRDaGlsZEJvZHlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldENoaWxkQm9keT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRDaGlsZEJvZHlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0Q2hpbGRCb2R5PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldENoaWxkQm9keVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldENoaWxkQm9keVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5QYXJlbnQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5QYXJlbnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5QYXJlbnQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5QYXJlbnRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBbmNob3JJblBhcmVudFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5DaGlsZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBbmNob3JJbkNoaWxkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEFuY2hvckluQ2hpbGQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QW5jaG9ySW5DaGlsZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEFuY2hvckluQ2hpbGRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldENvbGxpc2lvbnNFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldENvbGxpc2lvbnNFbmFibGVkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldENvbGxpc2lvbnNFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldENvbGxpc2lvbnNFbmFibGVkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0Q29sbGlzaW9uc0VuYWJsZWRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldENvbGxpc2lvbnNFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldENvbGxpc2lvbnNFbmFibGVkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldENvbGxpc2lvbnNFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldENvbGxpc2lvbnNFbmFibGVkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0Q29sbGlzaW9uc0VuYWJsZWRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEVuYWJsZWQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0RW5hYmxlZFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEVuYWJsZWRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRFbmFibGVkXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRFbmFibGVkPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEVuYWJsZWRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0RW5hYmxlZD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRFbmFibGVkXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0RW5hYmxlZFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01pbkxpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNaW5MaW1pdFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzTWluTGltaXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01pbkxpbWl0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QXhpc01pbkxpbWl0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRBeGlzTWluTGltaXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01pbkxpbWl0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X0dldEF4aXNNaW5MaW1pdD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTWluTGltaXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzTWluTGltaXRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNNYXhMaW1pdD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTWF4TGltaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01heExpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNNYXhMaW1pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNNYXhMaW1pdFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01heExpbWl0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNYXhMaW1pdFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRBeGlzTWF4TGltaXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01heExpbWl0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfR2V0QXhpc01heExpbWl0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9HZXRBeGlzTW9kZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTW9kZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRBeGlzTW9kZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTW9kZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldEF4aXNNb2RlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRBeGlzTW9kZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTW9kZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9TZXRBeGlzTW9kZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTW9kZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNNb2RlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRBeGlzRnJpY3Rpb249TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc0ZyaWN0aW9uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNGcmljdGlvbj1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzRnJpY3Rpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzRnJpY3Rpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldEF4aXNGcmljdGlvbj1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzRnJpY3Rpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc0ZyaWN0aW9uPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNGcmljdGlvblwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldEF4aXNGcmljdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVHlwZT1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUeXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclR5cGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVHlwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclR5cGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclR5cGU9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yVHlwZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUeXBlPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclR5cGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUeXBlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUYXJnZXQ9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yVGFyZ2V0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNNb3RvclRhcmdldD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUYXJnZXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JUYXJnZXRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclRhcmdldD1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JUYXJnZXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yVGFyZ2V0PU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclRhcmdldFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X0dldEF4aXNNb3RvclRhcmdldFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yTWF4Rm9yY2U9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yTWF4Rm9yY2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yTWF4Rm9yY2U9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc01vdG9yTWF4Rm9yY2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9TZXRBeGlzTW90b3JNYXhGb3JjZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yTWF4Rm9yY2U9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yTWF4Rm9yY2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yTWF4Rm9yY2U9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfR2V0QXhpc01vdG9yTWF4Rm9yY2VcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfQ29uc3RyYWludF9HZXRBeGlzTW90b3JNYXhGb3JjZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX0NvbnN0cmFpbnRfU2V0QXhpc1N0aWZmbmVzcz1Nb2R1bGVbXCJfSFBfQ29uc3RyYWludF9TZXRBeGlzU3RpZmZuZXNzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNTdGlmZm5lc3M9TW9kdWxlW1wiX0hQX0NvbnN0cmFpbnRfU2V0QXhpc1N0aWZmbmVzc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Db25zdHJhaW50X1NldEF4aXNTdGlmZm5lc3NcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Db25zdHJhaW50X1NldEF4aXNEYW1waW5nPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNEYW1waW5nXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9Db25zdHJhaW50X1NldEF4aXNEYW1waW5nPU1vZHVsZVtcIl9IUF9Db25zdHJhaW50X1NldEF4aXNEYW1waW5nXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0NvbnN0cmFpbnRfU2V0QXhpc0RhbXBpbmdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9Xb3JsZF9DcmVhdGU9TW9kdWxlW1wiX0hQX1dvcmxkX0NyZWF0ZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfQ3JlYXRlPU1vZHVsZVtcIl9IUF9Xb3JsZF9DcmVhdGVcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfQ3JlYXRlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfV29ybGRfUmVsZWFzZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfUmVsZWFzZT1Nb2R1bGVbXCJfSFBfV29ybGRfUmVsZWFzZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9SZWxlYXNlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfR2V0Qm9keUJ1ZmZlcj1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0Qm9keUJ1ZmZlclwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfR2V0Qm9keUJ1ZmZlcj1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0Qm9keUJ1ZmZlclwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9HZXRCb2R5QnVmZmVyXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfU2V0R3Jhdml0eT1Nb2R1bGVbXCJfSFBfV29ybGRfU2V0R3Jhdml0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfU2V0R3Jhdml0eT1Nb2R1bGVbXCJfSFBfV29ybGRfU2V0R3Jhdml0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9TZXRHcmF2aXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfR2V0R3Jhdml0eT1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0R3Jhdml0eVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfR2V0R3Jhdml0eT1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0R3Jhdml0eVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9HZXRHcmF2aXR5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfQWRkQm9keT1Nb2R1bGVbXCJfSFBfV29ybGRfQWRkQm9keVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfQWRkQm9keT1Nb2R1bGVbXCJfSFBfV29ybGRfQWRkQm9keVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9BZGRCb2R5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfUmVtb3ZlQm9keT1Nb2R1bGVbXCJfSFBfV29ybGRfUmVtb3ZlQm9keVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfUmVtb3ZlQm9keT1Nb2R1bGVbXCJfSFBfV29ybGRfUmVtb3ZlQm9keVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9SZW1vdmVCb2R5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfR2V0TnVtQm9kaWVzPU1vZHVsZVtcIl9IUF9Xb3JsZF9HZXROdW1Cb2RpZXNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0dldE51bUJvZGllcz1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0TnVtQm9kaWVzXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1dvcmxkX0dldE51bUJvZGllc1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0Nhc3RSYXlXaXRoQ29sbGVjdG9yPU1vZHVsZVtcIl9IUF9Xb3JsZF9DYXN0UmF5V2l0aENvbGxlY3RvclwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfQ2FzdFJheVdpdGhDb2xsZWN0b3I9TW9kdWxlW1wiX0hQX1dvcmxkX0Nhc3RSYXlXaXRoQ29sbGVjdG9yXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1dvcmxkX0Nhc3RSYXlXaXRoQ29sbGVjdG9yXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfU3RlcD1Nb2R1bGVbXCJfSFBfV29ybGRfU3RlcFwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfU3RlcD1Nb2R1bGVbXCJfSFBfV29ybGRfU3RlcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9TdGVwXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfU2V0SWRlYWxTdGVwVGltZT1Nb2R1bGVbXCJfSFBfV29ybGRfU2V0SWRlYWxTdGVwVGltZVwiXT1mdW5jdGlvbigpe3JldHVybihfSFBfV29ybGRfU2V0SWRlYWxTdGVwVGltZT1Nb2R1bGVbXCJfSFBfV29ybGRfU2V0SWRlYWxTdGVwVGltZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9Xb3JsZF9TZXRJZGVhbFN0ZXBUaW1lXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfV29ybGRfR2V0TmV4dENvbGxpc2lvbkV2ZW50PU1vZHVsZVtcIl9IUF9Xb3JsZF9HZXROZXh0Q29sbGlzaW9uRXZlbnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0dldE5leHRDb2xsaXNpb25FdmVudD1Nb2R1bGVbXCJfSFBfV29ybGRfR2V0TmV4dENvbGxpc2lvbkV2ZW50XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1dvcmxkX0dldE5leHRDb2xsaXNpb25FdmVudFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1dvcmxkX0dldE5leHRUcmlnZ2VyRXZlbnQ9TW9kdWxlW1wiX0hQX1dvcmxkX0dldE5leHRUcmlnZ2VyRXZlbnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX1dvcmxkX0dldE5leHRUcmlnZ2VyRXZlbnQ9TW9kdWxlW1wiX0hQX1dvcmxkX0dldE5leHRUcmlnZ2VyRXZlbnRcIl09TW9kdWxlW1wiYXNtXCJdW1wiSFBfV29ybGRfR2V0TmV4dFRyaWdnZXJFdmVudFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX0hQX1F1ZXJ5Q29sbGVjdG9yX0NyZWF0ZT1Nb2R1bGVbXCJfSFBfUXVlcnlDb2xsZWN0b3JfQ3JlYXRlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9RdWVyeUNvbGxlY3Rvcl9DcmVhdGU9TW9kdWxlW1wiX0hQX1F1ZXJ5Q29sbGVjdG9yX0NyZWF0ZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9RdWVyeUNvbGxlY3Rvcl9DcmVhdGVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9RdWVyeUNvbGxlY3Rvcl9SZWxlYXNlPU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9SZWxlYXNlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9RdWVyeUNvbGxlY3Rvcl9SZWxlYXNlPU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9SZWxlYXNlXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1F1ZXJ5Q29sbGVjdG9yX1JlbGVhc2VcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9RdWVyeUNvbGxlY3Rvcl9HZXROdW1IaXRzPU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9HZXROdW1IaXRzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9RdWVyeUNvbGxlY3Rvcl9HZXROdW1IaXRzPU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9HZXROdW1IaXRzXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1F1ZXJ5Q29sbGVjdG9yX0dldE51bUhpdHNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9IUF9RdWVyeUNvbGxlY3Rvcl9HZXRDYXN0UmF5UmVzdWx0PU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9HZXRDYXN0UmF5UmVzdWx0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9IUF9RdWVyeUNvbGxlY3Rvcl9HZXRDYXN0UmF5UmVzdWx0PU1vZHVsZVtcIl9IUF9RdWVyeUNvbGxlY3Rvcl9HZXRDYXN0UmF5UmVzdWx0XCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX1F1ZXJ5Q29sbGVjdG9yX0dldENhc3RSYXlSZXN1bHRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9tYWluPU1vZHVsZVtcIl9tYWluXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9tYWluPU1vZHVsZVtcIl9tYWluXCJdPU1vZHVsZVtcImFzbVwiXVtcIm1haW5cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9tYWxsb2M9TW9kdWxlW1wiX21hbGxvY1wiXT1mdW5jdGlvbigpe3JldHVybihfbWFsbG9jPU1vZHVsZVtcIl9tYWxsb2NcIl09TW9kdWxlW1wiYXNtXCJdW1wibWFsbG9jXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfZnJlZT1Nb2R1bGVbXCJfZnJlZVwiXT1mdW5jdGlvbigpe3JldHVybihfZnJlZT1Nb2R1bGVbXCJfZnJlZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJmcmVlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfRGVidWdfU3RhcnRSZWNvcmRpbmdTdGF0cz1Nb2R1bGVbXCJfSFBfRGVidWdfU3RhcnRSZWNvcmRpbmdTdGF0c1wiXT1mdW5jdGlvbigpe3JldHVybihfSFBfRGVidWdfU3RhcnRSZWNvcmRpbmdTdGF0cz1Nb2R1bGVbXCJfSFBfRGVidWdfU3RhcnRSZWNvcmRpbmdTdGF0c1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJIUF9EZWJ1Z19TdGFydFJlY29yZGluZ1N0YXRzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfSFBfRGVidWdfU3RvcFJlY29yZGluZ1N0YXRzPU1vZHVsZVtcIl9IUF9EZWJ1Z19TdG9wUmVjb3JkaW5nU3RhdHNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX0hQX0RlYnVnX1N0b3BSZWNvcmRpbmdTdGF0cz1Nb2R1bGVbXCJfSFBfRGVidWdfU3RvcFJlY29yZGluZ1N0YXRzXCJdPU1vZHVsZVtcImFzbVwiXVtcIkhQX0RlYnVnX1N0b3BSZWNvcmRpbmdTdGF0c1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZXJybm9fbG9jYXRpb249TW9kdWxlW1wiX19fZXJybm9fbG9jYXRpb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19fZXJybm9fbG9jYXRpb249TW9kdWxlW1wiX19fZXJybm9fbG9jYXRpb25cIl09TW9kdWxlW1wiYXNtXCJdW1wiX19lcnJub19sb2NhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX2h0b25zPU1vZHVsZVtcIl9odG9uc1wiXT1mdW5jdGlvbigpe3JldHVybihfaHRvbnM9TW9kdWxlW1wiX2h0b25zXCJdPU1vZHVsZVtcImFzbVwiXVtcImh0b25zXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfbnRvaHM9TW9kdWxlW1wiX250b2hzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9udG9ocz1Nb2R1bGVbXCJfbnRvaHNcIl09TW9kdWxlW1wiYXNtXCJdW1wibnRvaHNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2dldFR5cGVOYW1lPU1vZHVsZVtcIl9fX2dldFR5cGVOYW1lXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2dldFR5cGVOYW1lPU1vZHVsZVtcIl9fX2dldFR5cGVOYW1lXCJdPU1vZHVsZVtcImFzbVwiXVtcIl9fZ2V0VHlwZU5hbWVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3M9TW9kdWxlW1wiX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5nc1wiXT1mdW5jdGlvbigpe3JldHVybihfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPU1vZHVsZVtcIl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3NcIl09TW9kdWxlW1wiYXNtXCJdW1wiX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfaHRvbmw9TW9kdWxlW1wiX2h0b25sXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9odG9ubD1Nb2R1bGVbXCJfaHRvbmxcIl09TW9kdWxlW1wiYXNtXCJdW1wiaHRvbmxcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zZXRUaHJldz1Nb2R1bGVbXCJfc2V0VGhyZXdcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3NldFRocmV3PU1vZHVsZVtcIl9zZXRUaHJld1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJzZXRUaHJld1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3NhdmVTZXRqbXA9TW9kdWxlW1wiX3NhdmVTZXRqbXBcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3NhdmVTZXRqbXA9TW9kdWxlW1wiX3NhdmVTZXRqbXBcIl09TW9kdWxlW1wiYXNtXCJdW1wic2F2ZVNldGptcFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tTYXZlPU1vZHVsZVtcInN0YWNrU2F2ZVwiXT1mdW5jdGlvbigpe3JldHVybihzdGFja1NhdmU9TW9kdWxlW1wic3RhY2tTYXZlXCJdPU1vZHVsZVtcImFzbVwiXVtcInN0YWNrU2F2ZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tSZXN0b3JlPU1vZHVsZVtcInN0YWNrUmVzdG9yZVwiXT1mdW5jdGlvbigpe3JldHVybihzdGFja1Jlc3RvcmU9TW9kdWxlW1wic3RhY2tSZXN0b3JlXCJdPU1vZHVsZVtcImFzbVwiXVtcInN0YWNrUmVzdG9yZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tBbGxvYz1Nb2R1bGVbXCJzdGFja0FsbG9jXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrQWxsb2M9TW9kdWxlW1wic3RhY2tBbGxvY1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJzdGFja0FsbG9jXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBjYWxsTWFpbihhcmdzKXt2YXIgZW50cnlGdW5jdGlvbj1Nb2R1bGVbXCJfbWFpblwiXTt2YXIgYXJnYz0wO3ZhciBhcmd2PTA7dHJ5e3ZhciByZXQ9ZW50cnlGdW5jdGlvbihhcmdjLGFyZ3YpO2V4aXRKUyhyZXQsdHJ1ZSk7cmV0dXJuIHJldH1jYXRjaChlKXtyZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGUpfX1mdW5jdGlvbiBydW4oYXJncyl7YXJncz1hcmdzfHxhcmd1bWVudHNfO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59cHJlUnVuKCk7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1mdW5jdGlvbiBkb1J1bigpe2lmKGNhbGxlZFJ1bilyZXR1cm47Y2FsbGVkUnVuPXRydWU7TW9kdWxlW1wiY2FsbGVkUnVuXCJdPXRydWU7aWYoQUJPUlQpcmV0dXJuO2luaXRSdW50aW1lKCk7cHJlTWFpbigpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO2lmKHNob3VsZFJ1bk5vdyljYWxsTWFpbihhcmdzKTtwb3N0UnVuKCl9aWYoTW9kdWxlW1wic2V0U3RhdHVzXCJdKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJSdW5uaW5nLi4uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpfSwxKTtkb1J1bigpfSwxKX1lbHNle2RvUnVuKCl9fWlmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5wb3AoKSgpfX12YXIgc2hvdWxkUnVuTm93PXRydWU7aWYoTW9kdWxlW1wibm9Jbml0aWFsUnVuXCJdKXNob3VsZFJ1bk5vdz1mYWxzZTtydW4oKTtcclxuXHJcblxyXG4gIHJldHVybiBIYXZva1BoeXNpY3MucmVhZHlcclxufVxyXG4pO1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBIYXZva1BoeXNpY3M7IiwibGV0IHNsZWVwID0gbXMgPT4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XHJcbmV4cG9ydCBjb25zdCBXYWl0VW50aWwgPSBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yKGYpe1xyXG4gICAgd2hpbGUoIWYoKSkgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICByZXR1cm4gZigpO1xyXG59OyIsImltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9tb2RlbExvYWRlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3Rlck1vZGVsTG9hZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBMb2FkQW5kU2V0dXBNb2RlbEFzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNoYXJhY3RlckRhdGEgPSBhd2FpdCBuZXcgTW9kZWxMb2FkZXIodGhpcy5zY2VuZSwgbnVsbCwgXCIuL0Fzc2V0cy9hbmltYXRlZF9jaGFyYWN0ZXIvXCIsIFwibmluamEuZ2xiXCIpLkxvYWRBc3luYygpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJDaGFyYWN0ZXJNZXNoZXMgPSBwbGF5ZXJDaGFyYWN0ZXJEYXRhLm1lc2hlcztcclxuICAgICAgICBjb25zdCBwbGF5ZXJSb290TWVzaCA9IHBsYXllckNoYXJhY3Rlck1lc2hlc1swXTtcclxuICAgICAgICBwbGF5ZXJSb290TWVzaC5uYW1lID0gXCJQbGF5ZXJcIjtcclxuICAgICAgICBjb25zdCBwbGF5ZXJSb290TWVzaENoaWxkcyA9IHBsYXllclJvb3RNZXNoLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9keVRyYW5zZm9ybSA9IHBsYXllclJvb3RNZXNoQ2hpbGRzWzBdO1xyXG5cclxuICAgICAgICBwbGF5ZXJCb2R5VHJhbnNmb3JtLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgcGxheWVyUm9vdE1lc2guc2NhbGluZyAgPSBwbGF5ZXJSb290TWVzaC5zY2FsaW5nLnNjYWxlKDIuMCk7XHJcblxyXG4gICAgICAgIC8vIGluaXQgbmluamEgYm9keVxyXG4gICAgICAgIGNvbnN0IG1vZGVsQm9keSA9IHBsYXllckJvZHlUcmFuc2Zvcm0uZ2V0Q2hpbGRNZXNoZXMoKVswXTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1PREVMIEJPRFk6IFwiICsgbW9kZWxCb2R5Lm5hbWUpO1xyXG4gICAgICAgIG1vZGVsQm9keS5yb3RhdGlvbi54ID0gbmV3IEJBQllMT04uQW5nbGUuRnJvbURlZ3JlZXMoOTApLnJhZGlhbnMoKTtcclxuICAgICAgICBtb2RlbEJvZHkuc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAsIDEwLCAxMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwbGF5ZXJDaGFyYWN0ZXJEYXRhLmFuaW1hdGlvbkdyb3VwcztcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVGltZXIge1xyXG5cclxuICAgIHN0YXRpYyBPblRpY2tPbmVTZWNvbmRPYnNlcnZhYmxlO1xyXG4gICAgc3RhdGljIFN0YXJ0VGltZTtcclxuXHJcbiAgICBzdGF0aWMgR2V0RWxhcHNlZFRpbWVNcygpIHtcclxuICAgICAgICBjb25zdCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAvLyBlbGFwc2VkIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgY29uc3QgZGF0ZURpZmYgPSBub3dEYXRlIC0gR2FtZVRpbWVyLlN0YXJ0VGltZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0ZURpZmY7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEdldEVsYXBzZWRUaW1lU2Vjb25kcygpIHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBHYW1lVGltZXIuR2V0RWxhcHNlZFRpbWVNcygpICogMC4wMDEgO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBTdGFydFRpbWVyKCkge1xyXG4gICAgICAgIEdhbWVUaW1lci5PblRpY2tPbmVTZWNvbmRPYnNlcnZhYmxlID0gbmV3IEJBQllMT04uT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIEdhbWVUaW1lci5PblRpY2tPblNlY29uZExvb3BBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTZWNvbmRTaW5jZVN0YXJ0ZWQgPSBNYXRoLnJvdW5kKEdhbWVUaW1lci5HZXRFbGFwc2VkVGltZVNlY29uZHMoKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUSU1FUjogXCIgKyB0aW1lU2Vjb25kU2luY2VTdGFydGVkKTtcclxuICAgICAgICAgICAgR2FtZVRpbWVyLk9uVGlja09uZVNlY29uZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRpbWVTZWNvbmRTaW5jZVN0YXJ0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBPblRpY2tPblNlY29uZExvb3BBc3luYyhjYWxsQmFjaykge1xyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlcywgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5fc291bmRzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFByZWxvYWRTb3VuZChzb3VuZEtleSwgc291bmRQYXRoKSB7XHJcbiAgICAgICAgaWYodGhpcy5fc291bmRzTWFwLmhhcyhzb3VuZEtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbU291bmRQbGF5ZXJdIHNvdW5kIHdpdGgga2V5ICcke3NvdW5kS2V5fScgaXMgYWxyZWFkeSBsb2FkZWQhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBCQUJZTE9OLlNvdW5kKHNvdW5kS2V5LCBzb3VuZFBhdGgsIHRoaXMuX3NjZW5lKTtcclxuICAgICAgICB0aGlzLl9zb3VuZHNNYXAuc2V0KHNvdW5kS2V5LCBzb3VuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBQbGF5U291bmQoc291bmRLZXkpIHtcclxuICAgICAgICBpZighdGhpcy5fc291bmRzTWFwLmhhcyhzb3VuZEtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbU291bmRQbGF5ZXJdIHNvdW5kIHdpdGgga2V5ICcke3NvdW5kS2V5fScgaXMgbm90IHByZXNlbnRlZCFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NvdW5kc01hcC5nZXQoc291bmRLZXkpLnBsYXkoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBHYW1lQmVoYXZpb3VyIHtcclxuICAgIFNldEVudGl0eShlbnRpdHkpIHtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgIH1cclxuICAgIE9uQXdha2UoKSB7fVxyXG4gICAgT25TdGFydCgpIHt9XHJcbiAgICBPbkRpc2FibGUoKSB7fVxyXG4gICAgT25EZXN0cm95KCkge31cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge31cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVHYW1lQmVoYXZpb3VyIGV4dGVuZHMgR2FtZUJlaGF2aW91ciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZighY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRCZWhhdmlvdXJzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoY2hpbGRCZWhhdmlvdXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRCZWhhdmlvdXJzID0gY2hpbGRCZWhhdmlvdXJzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEJlaGF2aW91cnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkF3YWtlKCkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5jaGlsZEJlaGF2aW91cnMpICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBiZWggb2YgdGhpcy5jaGlsZEJlaGF2aW91cnMpIHtcclxuICAgICAgICAgICAgYmVoLk9uQXdha2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25TdGFydCgpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY2hpbGRCZWhhdmlvdXJzKSAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgYmVoIG9mIHRoaXMuY2hpbGRCZWhhdmlvdXJzKSB7XHJcbiAgICAgICAgICAgIGJlaC5PblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9uRGlzYWJsZSgpIHtcclxuICAgICAgICBpZighdGhpcy5jaGlsZEJlaGF2aW91cnMpICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBiZWggb2YgdGhpcy5jaGlsZEJlaGF2aW91cnMpIHtcclxuICAgICAgICAgICAgYmVoLk9uRGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmNoaWxkQmVoYXZpb3VycykgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGJlaCBvZiB0aGlzLmNoaWxkQmVoYXZpb3Vycykge1xyXG4gICAgICAgICAgICBiZWguT25EZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkQmVoYXZpb3VycyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5jaGlsZEJlaGF2aW91cnMpICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBiZWggb2YgdGhpcy5jaGlsZEJlaGF2aW91cnMpIHtcclxuICAgICAgICAgICAgYmVoLk9uVXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgSW5pdEFzeW5jKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmNoaWxkQmVoYXZpb3VycykgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGJlaCBvZiB0aGlzLmNoaWxkQmVoYXZpb3Vycykge1xyXG4gICAgICAgICAgICBhd2FpdCBiZWguSW5pdEFzeW5jKCk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBNb2RlbExvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgbW9kZWxOYW1lLCByZWxhdGl2ZVBhdGgsIGZpbGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gbW9kZWxOYW1lO1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVQYXRoID0gcmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkQXN5bmMoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJucyBhcnJheSBvZiBtZXNoZXMgJ3Jlc3VsdC5tZXNoZXNbXSdcclxuICAgICAgICAvLyByZXN1bHQubWVzaGVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIEJBQllMT04uU2NlbmVMb2FkZXIuSW1wb3J0TWVzaEFzeW5jKHRoaXMubW9kZWxOYW1lLCB0aGlzLnJlbGF0aXZlUGF0aCwgdGhpcy5maWxlTmFtZSwgdGhpcy5zY2VuZSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICAgU0FNUExFOlxyXG4gICAgQkFCWUxPTi5TY2VuZUxvYWRlci5JbXBvcnRNZXNoQXN5bmMoXCJcIiwgXCIvcmVsYXRpdmUgcGF0aC9cIiwgXCJteUZpbGVcIik7IC8vRW1wdHkgc3RyaW5nIGxvYWRzIGFsbCBtZXNoZXNcclxuICAgIEJBQllMT04uU2NlbmVMb2FkZXIuSW1wb3J0TWVzaEFzeW5jKFwibW9kZWwxXCIsIFwiL3JlbGF0aXZlIHBhdGgvXCIsIFwibXlGaWxlXCIpOyAvL05hbWUgb2YgdGhlIG1vZGVsIGxvYWRzIG9uZSBtb2RlbFxyXG4gICAgQkFCWUxPTi5TY2VuZUxvYWRlci5JbXBvcnRNZXNoQXN5bmMoW1wibW9kZWwxXCIsIFwibW9kZWwyXCJdLCBcIi9yZWxhdGl2ZSBwYXRoL1wiLCBcIm15RmlsZVwiKTsgLy9BcnJheSBvZiBtb2RlbCBuYW1lc1xyXG4qLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVSdWxlc0NoZWF0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lUnVsZXMpIHtcclxuICAgICAgICB0aGlzLmdhbWVSdWxlcyA9IGdhbWVSdWxlcztcclxuXHJcbiAgICAgICAgY29uc3Qgb25LZXlSZWNlaXZlZEJvdW5kID0gdGhpcy5PbktleUV2ZW50UmVjZWl2ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVSdWxlcy5zY2VuZS5vbktleWJvYXJkT2JzZXJ2YWJsZS5hZGQob25LZXlSZWNlaXZlZEJvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBPbktleUV2ZW50UmVjZWl2ZWQoa2V5RXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleUV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBCQUJZTE9OLktleWJvYXJkRXZlbnRUeXBlcy5LRVlET1dOOlxyXG4gICAgICAgICAgICAgIHRoaXMuSGFuZGxlS2V5RG93bihrZXlFdmVudC5ldmVudC5rZXkpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEhhbmRsZUtleURvd24oa2V5Q29kZSkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleUNvZGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltHYW1lUnVsZXNDaGVhdHNdIEtleURvd246IFwiICsga2V5KTtcclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSBcImtcIikge1xyXG4gICAgICAgICAgICB0aGlzLktpbGxSYW5kb21ab21iaWUoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCIrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGVlZFVwQWxsWm9tYmllcygxKTtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICB0aGlzLlNwZWVkVXBBbGxab21iaWVzKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBLaWxsUmFuZG9tWm9tYmllKCkge1xyXG4gICAgICAgIGNvbnN0IGlzQW55Wm9tYmllRXhpc3RzID0gdGhpcy5nYW1lUnVsZXMuY3VycmVudFpvbWJpZXNDb3VudCA+IDA7XHJcbiAgICAgICAgaWYoIWlzQW55Wm9tYmllRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVpvbWJpZSA9IHRoaXMuZ2FtZVJ1bGVzLkN1cnJlbnRab21iaWVzQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiB0aGlzLmdhbWVSdWxlcy5DdXJyZW50Wm9tYmllc0FycmF5Lmxlbmd0aCldO1xyXG4gICAgICAgIGlmKCFyYW5kb21ab21iaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByYW5kb21ab21iaWUuem9tYmllUHJvcHMuRGVhbERhbWFnZSg1MCk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbR2FtZVJ1bGVzQ2hlYXRzXSBLSUxMIFJBTkRPTSBaT01CSUUhISFcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFNwZWVkVXBBbGxab21iaWVzKGFkZGl0aW9uKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IHpvbWJpZSBvZiB0aGlzLmdhbWVSdWxlcy5DdXJyZW50Wm9tYmllc0FycmF5KXtcclxuICAgICAgICAgICAgaWYoIXpvbWJpZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdTcGVlZE1vZGlmaWVyID0gem9tYmllLm1vdmVTcGVlZE1vZGlmaWVyICsgYWRkaXRpb25cclxuICAgICAgICAgICAgaWYobmV3U3BlZWRNb2RpZmllciA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1NwZWVkTW9kaWZpZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB6b21iaWUubW92ZVNwZWVkTW9kaWZpZXIgPSBuZXdTcGVlZE1vZGlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IHsgTW9kZWxMb2FkZXIgfSBmcm9tIFwiLi4vY29tbW9uL21vZGVsTG9hZGVyLmpzXCI7XHJcbmltcG9ydCBQbGF5ZXJQcm9wcyBmcm9tIFwiLi4vcHJvcGVydGllcy9wbGF5ZXJQcm9wcy5qc1wiO1xyXG5pbXBvcnQgYWN0aW9uTmFtZXMgZnJvbSBcIi4vcGxheWVyU3RhdGVzL2FjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCBQbGF5ZXJGU00gZnJvbSBcIi4vcGxheWVyU3RhdGVzL3BsYXllckZzbS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsUGxheWVyQmVoYXZpb3VyIGV4dGVuZHMgR2FtZUJlaGF2aW91ciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgY2FtZXJhLCBwbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheSwgd29ybGQsIHNvdW5kUGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW92ZUlucHV0ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdGF0aW9uSW5wdXQgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApOyAgICBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWRNb2RpZmllciA9IDEuMDsgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheSA9IHBsYXllckFuaW1hdGlvbnNHcm91cEFycmF5O1xyXG4gICAgICAgIHRoaXMuV29ybGQgPSB3b3JsZDtcclxuICAgICAgICB0aGlzLlNvdW5kUGxheWVyID0gc291bmRQbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgSW5pdEFzeW5jKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0gPSB0aGlzLmVudGl0eS5hYnN0cmFjdE1lc2g7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRNZXNoc2VzID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLmdldENoaWxkTWVzaGVzKCk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNoaWxkTWVzaCBvZiB0aGlzLmNoaWxkTWVzaHNlcykge1xyXG4gICAgICAgICAgICBjaGlsZE1lc2guaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0ucG9zaXRpb24gPSB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0ucG9zaXRpb24uYWRkKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NCb2R5ID0gbmV3IEJBQllMT04uUGh5c2ljc0JvZHkodGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLCBCQUJZTE9OLlBoeXNpY3NNb3Rpb25UeXBlLkRZTkFNSUMsIGZhbHNlLCB0aGlzLnNjZW5lKTtcclxuXHJcbiAgICAgICAgLy8gbmV3IFBoeXNpY3NTaGFwZUNhcHN1bGUocG9pbnRBOiBWZWN0b3IzLCBwb2ludEI6IFZlY3RvcjMsIHJhZGl1czogbnVtYmVyLCBzY2VuZTogU2NlbmUpXHJcbiAgICAgICAgY29uc3QgcGh5c2ljc1NoYXBlID0gbmV3IEJBQllMT04uUGh5c2ljc1NoYXBlQ2Fwc3VsZShcclxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLC0zMiwwKSxcclxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLC01LDApLFxyXG4gICAgICAgICAgICA1LCAvLyByYWRpdXMgb2YgdGhlIHNwaGVyZVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lIC8vIGNvbnRhaW5pbmcgc2NlbmVcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHBoeXNpY3NCb2R5LnNoYXBlID0gcGh5c2ljc1NoYXBlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keSA9IHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5nZXRQaHlzaWNzQm9keSgpO1xyXG4gICAgICAgIGlmKCF0aGlzLnBoeXNpY3NCb2R5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltMb2NhbFBsYXllckJlaGF2aW91cl0gUGh5c2ljcyBib2R5IGlzIG1pc3NpbmchXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbTG9jYWxQbGF5ZXJCZWhhdmlvdXJdIGNoYXJhY3RlciBtZXNoIG5hbWU6IFwiICsgdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLm5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwUGxheWVyQ2FtZXJhKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZGlzYWJsZSBhbmd1bGFyIGZhbGxpbmcgZnJvbSBjYWxsaXNpb25zIVxyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0TWFzc1Byb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICBpbmVydGlhOiBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldEdyYXZpdHlGYWN0b3IoMTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJGU00gID0gbmV3IFBsYXllckZTTSh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcyA9IG5ldyBQbGF5ZXJQcm9wcygpO1xyXG4gICAgICAgIHRoaXMucGxheWVyUHJvcHMuU2V0SHAoMTAwKTtcclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLlNldE1heEhwKDEwMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5TZXRJc0RlYWQoZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLlN1YnNjcmliZVByb3BzRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0dXBXZWFwb25Cb25lKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuQ3JlYXRlV2VhcG9uQXN5bmMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgU2V0dXBXZWFwb25Cb25lKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJNZXNoID0gdGhpcy5zY2VuZS5nZXRNZXNoQnlJZChcIkNoMjRcIik7XHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSB0aGlzLnNjZW5lLmdldFNrZWxldG9uQnlJZChcInNrZWxldG9uMFwiKTtcclxuICAgICAgICBjb25zdCByaWdodEhhbmRCb25lID0gc2tlbGV0b24uYm9uZXNbMzRdO1xyXG5cclxuICAgICAgICB0aGlzLnNrZWxldG9uID0gc2tlbGV0b247XHJcbiAgICAgICAgdGhpcy5yaWdodEhhbmRCb25lID0gcmlnaHRIYW5kQm9uZTtcclxuICAgICAgICB0aGlzLmNoYXJhY3Rlck1lc2ggPSBjaGFyYWN0ZXJNZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIENyZWF0ZVdlYXBvbkFzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IHdlYXBvbk1vZGVsRGF0YSA9IGF3YWl0IG5ldyBNb2RlbExvYWRlcih0aGlzLnNjZW5lLCBudWxsLCBcIi4vQXNzZXRzL3dlYXBvbnMvXCIsIFwibTRhMS5nbGJcIikuTG9hZEFzeW5jKCk7XHJcbiAgICAgICAgY29uc3Qgd2VhcG9uTWVzaGVzID0gd2VhcG9uTW9kZWxEYXRhLm1lc2hlcztcclxuICAgICAgICBjb25zdCB3ZWFwb25Sb290TWVzaCA9IHdlYXBvbk1lc2hlc1swXTtcclxuICAgICAgICB3ZWFwb25Sb290TWVzaC5uYW1lID0gXCJQbGF5ZXIgd2VhcG9uXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gMjI1O1xyXG4gICAgICAgIHdlYXBvblJvb3RNZXNoLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHNjYWxlRmFjdG9yLCBzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IpO1xyXG4gICAgICAgIHdlYXBvblJvb3RNZXNoLnBvc2l0aW9uID0gdGhpcy5yaWdodEhhbmRCb25lLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgd2VhcG9uUm9vdE1lc2guYXR0YWNoVG9Cb25lKHRoaXMucmlnaHRIYW5kQm9uZSwgdGhpcy5jaGFyYWN0ZXJNZXNoKTtcclxuICAgICAgICBcclxuICAgICAgICB3ZWFwb25Sb290TWVzaC5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLkFuZ2xlLkZyb21EZWdyZWVzKC04MCkucmFkaWFucygpLFxyXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5BbmdsZS5Gcm9tRGVncmVlcyg1NS43KS5yYWRpYW5zKCksXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLkFuZ2xlLkZyb21EZWdyZWVzKDE4MCkucmFkaWFucygpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBjZW50cmFsaXplXHJcbiAgICAgICAgLy93ZWFwb25Sb290TWVzaC5zZXRQb3NpdGlvbldpdGhMb2NhbFZlY3RvcihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApKTtcclxuXHJcbiAgICAgICAgd2VhcG9uUm9vdE1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDUsIC0xMCwgMTUpO1xyXG5cclxuICAgICAgICB0aGlzLndlYXBvblJvb3RNZXNoID0gd2VhcG9uUm9vdE1lc2g7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRXZWFwb25NZXNoZXMgPSB0aGlzLndlYXBvblJvb3RNZXNoLmdldENoaWxkTWVzaGVzKCk7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBjaGlsZE1lc2ggb2YgdGhpcy5jaGlsZFdlYXBvbk1lc2hlcykge1xyXG4gICAgICAgICAgICBjaGlsZE1lc2guaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN1YnNjcmliZVByb3BzRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyUHJvcHMuSHBPYnNlcnZhYmxlLmFkZCgoY3VycmVudEhwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyUHJvcHMuR2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW1BMQVlFUl0gSHAgY2hhbmdlZCE6IFwiICsgY3VycmVudEhwKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudEhwIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvcHMuU2V0SXNEZWFkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9wcy5TZXRIcCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLklzRGVhZE9ic2VydmFibGUuYWRkKChpc0RlYWQpID0+IHtcclxuICAgICAgICAgICAgaWYoaXNEZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW1BMQVlFUl0gRGVhdGghXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJGU00uUHJvY2Vzc0FjdGlvbihhY3Rpb25OYW1lcy5ERUFUSCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0KCkge1xyXG4gICAgICAgIHN1cGVyLk9uU3RhcnQoKTtcclxuICAgICAgICAvL1wiW0xvY2FsUGxheWVyQmVoYXZpb3VyXSBPblN0YXJ0ISBcIik7XHJcbiAgICAgICAgdGhpcy5vbktleVJlY2VpdmVkQm91bmQgPSB0aGlzLm9uS2V5RXZlbnRSZWNlaXZlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUub25LZXlib2FyZE9ic2VydmFibGUuYWRkKHRoaXMub25LZXlSZWNlaXZlZEJvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLm5hbWUgPSBcIlBMQVlFUl9CT0RZX1JPT1RcIjtcclxuXHJcbiAgICAgICAgdGhpcy5EZWxheWVkU3RhcnRBc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIERlbGF5ZWRTdGFydEFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlcywgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRNZXNoc2VzID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLmdldENoaWxkTWVzaGVzKCk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNoaWxkTWVzaCBvZiB0aGlzLmNoaWxkTWVzaHNlcykge1xyXG4gICAgICAgICAgICBjaGlsZE1lc2guaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBjaGlsZE1lc2ggb2YgdGhpcy5jaGlsZFdlYXBvbk1lc2hlcykge1xyXG4gICAgICAgICAgICBjaGlsZE1lc2guaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNJbml0aWFsaXplZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyUHJvcHMuR2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIuT25VcGRhdGUoZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkobmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRMb29wKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FtZXJhTG9vcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckZTTT8uT25VcGRhdGUoZGVsdGFUaW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25EaXNhYmxlKCkge1xyXG4gICAgICAgIHN1cGVyLk9uRGlzYWJsZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJbTG9jYWxQbGF5ZXJCZWhhdmlvdXJdIE9uRGlzYWJsZSEgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdHJveSgpIHtcclxuICAgICAgICBzdXBlci5PbkRlc3Ryb3koKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0xvY2FsUGxheWVyQmVoYXZpb3VyXSBPbkRlc3Ryb3khIFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5vbktleWJvYXJkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5vbktleVJlY2VpdmVkQm91bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RXZlbnRSZWNlaXZlZChrZXlFdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5RXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEJBQllMT04uS2V5Ym9hcmRFdmVudFR5cGVzLktFWURPV046XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIktFWSBET1dOOiBcIiwga2V5RXZlbnQuZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBbTG9jYWxQbGF5ZXJCZWhhdmlvdXJdIEtleURvd24gISBLZXk6ICcke2tleUV2ZW50LmV2ZW50LmtleX0nLCBDb2RlOiAnJHtrZXlFdmVudC5ldmVudC5jb2RlfScgYCk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihrZXlFdmVudC5ldmVudC5jb2RlKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCQUJZTE9OLktleWJvYXJkRXZlbnRUeXBlcy5LRVlVUDogICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJLRVkgVVA6IFwiLCBrZXlFdmVudC5ldmVudC5rZXkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5VXAoa2V5RXZlbnQuZXZlbnQuY29kZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5RG93bihrZXlDb2RlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5Q29kZTtcclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSBcIktleVdcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5wdXQueiA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRlNNLlByb2Nlc3NBY3Rpb24oYWN0aW9uTmFtZXMuV0FMSyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJLZXlTXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUlucHV0LnogPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGU00uUHJvY2Vzc0FjdGlvbihhY3Rpb25OYW1lcy5XQUxLKTtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIktleUFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbklucHV0LnkgPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIktleURcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbklucHV0LnkgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiU3BhY2VcIikgeyAvLyBcIiBcIiA9IHNwYWNlIFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckZTTS5Qcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWVzLlNIT09UKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICoqKiBDSEVBVFMgKioqXHJcbiAgICAgICAgaWYoa2V5ID09PSBcIktleVpcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb3BzLkRlYWxEYW1hZ2UoMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAqKiogRU5ELUNIRUFUUyAqKipcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlVcChrZXlDb2RlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5Q29kZTtcclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSBcIktleVdcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb3ZlSW5wdXQueiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRlNNLlByb2Nlc3NBY3Rpb24oYWN0aW9uTmFtZXMuSURMRSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJLZXlTXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW92ZUlucHV0LnogPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckZTTS5Qcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWVzLklETEUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT09IFwiS2V5QVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvdGF0aW9uSW5wdXQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGtleSA9PT0gXCJLZXlEXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um90YXRpb25JbnB1dC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYoa2V5ID09PSBcIlNwYWNlXCIpIHsgLy8gXCIgXCIgPSBzcGFjZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckZTTS5Qcm9jZXNzQWN0aW9uKGFjdGlvbk5hbWVzLlNUT1BfU0hPT1RJTkcpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5wdXRMb29wKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGNvbnN0IG1vdmVTcGVlZCA9IDE1MDAwMCAqIGRlbHRhVGltZTtcclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnBsYXllckJvZHlUcmFuc2Zvcm0uZ2V0RGlyZWN0aW9uKEJBQllMT04uQXhpcy5aKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldExpbmVhclZlbG9jaXR5KGRpci5zY2FsZShtb3ZlU3BlZWQgKiB0aGlzLmN1cnJlbnRNb3ZlSW5wdXQueikpO1xyXG5cclxuICAgICAgICBjb25zdCByb3RhdGlvblNwZWVkID0gNTAwICogdGhpcy5yb3RhdGlvblNwZWVkTW9kaWZpZXIgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLmN1cnJlbnRSb3RhdGlvbklucHV0LnNjYWxlKHJvdGF0aW9uU3BlZWQpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0QW5ndWxhclZlbG9jaXR5KHJvdGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFBsYXllckNhbWVyYSgpIHtcclxuXHJcbiAgICAgICAgLy92YXIgQ29UID0gbmV3IEJBQllMT04uVHJhbnNmb3JtTm9kZShcInJvb3RcIik7XHJcbiAgICAgICAgLy9ib3gucGFyZW50ID0gQ29UOyAvL2FwcGx5IHRvIEJveFxyXG5cclxuICAgICAgICB0aGlzLnBsYXllckhlYWRUcmFuc2Zvcm0gPSBuZXcgQkFCWUxPTi5UcmFuc2Zvcm1Ob2RlKFwiUGxheWVySGVhZFwiKTtcclxuICAgICAgICB0aGlzLnBsYXllckhlYWRPZmZzZXQgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIwMDAsIDIwMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFkVHJhbnNmb3JtLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh0aGlzLnBsYXllckhlYWRPZmZzZXQpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnBsYXllckhlYWRUcmFuc2Zvcm0ucGFyZW50ID0gdGhpcy5wbGF5ZXJCb2R5VHJhbnNmb3JtO1xyXG5cclxuICAgICAgICAvLyBUaGUgZ29hbCBkaXN0YW5jZSBvZiBjYW1lcmEgZnJvbSB0YXJnZXRcclxuICAgICAgICB0aGlzLmNhbWVyYS5yYWRpdXMgPSA3ODtcclxuXHJcbiAgICAgICAgLy8gVGhlIGdvYWwgaGVpZ2h0IG9mIGNhbWVyYSBhYm92ZSBsb2NhbCBvcmlnaW4gKGNlbnRyZSkgb2YgdGFyZ2V0XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuaGVpZ2h0T2Zmc2V0ID0gNTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGdvYWwgcm90YXRpb24gb2YgY2FtZXJhIGFyb3VuZCBsb2NhbCBvcmlnaW4gKGNlbnRyZSkgb2YgdGFyZ2V0IGluIHggeSBwbGFuZVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uT2Zmc2V0ID0gLTE4MDtcclxuXHJcbiAgICAgICAgLy8gQWNjZWxlcmF0aW9uIG9mIGNhbWVyYSBpbiBtb3ZpbmcgZnJvbSBjdXJyZW50IHRvIGdvYWwgcG9zaXRpb25cclxuICAgICAgICB0aGlzLmNhbWVyYS5jYW1lcmFBY2NlbGVyYXRpb24gPSAwLjAwNTtcclxuXHJcbiAgICAgICAgLy8gVGhlIHNwZWVkIGF0IHdoaWNoIGFjY2VsZXJhdGlvbiBpcyBoYWx0ZWRcclxuICAgICAgICB0aGlzLmNhbWVyYS5tYXhDYW1lcmFTcGVlZCA9IDEwMDtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubG9ja2VkVGFyZ2V0ID0gdGhpcy5wbGF5ZXJIZWFkVHJhbnNmb3JtOyAvL3ZlcnNpb24gMi41IG9ud2FyZHNcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZGV0YWNoQ29udHJvbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhbWVyYUxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubG9ja2VkVGFyZ2V0ID0gdGhpcy5wbGF5ZXJIZWFkVHJhbnNmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEFic29sdXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyQm9keVRyYW5zZm9ybS5hYnNvbHV0ZVBvc2l0aW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTW9kZWxMb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL21vZGVsTG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVFbnRpdHkgfSBmcm9tIFwiLi4vLi4vZ2FtZS9nYW1lRW50aXR5LmpzXCI7XHJcbmltcG9ydCBFbmVteVpvbWJpZUJlaGF2aW91ciBmcm9tIFwiLi9lbmVteVpvbWJpZUJlaGF2aW91ci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlTcGF3bmVyIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHdvcmxkLCBzb3VuZFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5fc291bmRQbGF5ZXIgPSBzb3VuZFBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBDcmVhdGVab21iaWVFbnRpdHlBc3luYyhwb3NpdGlvbiwgYWRkaXRpb25IcCkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5wbGF5ZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUYXJnZXQgPSB0aGlzLndvcmxkLkdldEVudGl0eShcIkxPQ0FMX1BMQVlFUlwiKS5HZXRDb21wb25lbnQoXCJMb2NhbFBsYXllckJlaGF2aW91clwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGVsRGF0YSA9IGF3YWl0IG5ldyBNb2RlbExvYWRlcih0aGlzLnNjZW5lLCBudWxsLCBcIi4vQXNzZXRzL3pvbWJpZS1ib3kvXCIsIFwiem9tYmllLWJveS5nbGJcIikuTG9hZEFzeW5jKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZW15Um9vdE1lc2ggPSBtb2RlbERhdGEubWVzaGVzWzBdO1xyXG4gICAgICAgIGVuZW15Um9vdE1lc2gubmFtZSA9IFwiWk9NQklFXCI7XHJcbiAgICAgICAgZW5lbXlSb290TWVzaC5zY2FsaW5nID0gbmV3IEJBQllMT04uVmVjdG9yMygxNSwgMTUsIDE1KTtcclxuICAgICAgICBlbmVteVJvb3RNZXNoLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3Vwc0FyciA9IG1vZGVsRGF0YS5hbmltYXRpb25Hcm91cHM7XHJcbiAgICAgICAgY29uc3Qgem9tYmllQmVoYXZpb3VyID0gbmV3IEVuZW15Wm9tYmllQmVoYXZpb3VyKGVuZW15Um9vdE1lc2gsIGFuaW1hdGlvbkdyb3Vwc0FyciwgdGhpcy5zY2VuZSwgdGhpcy5fc291bmRQbGF5ZXIpO1xyXG4gICAgICAgIHpvbWJpZUJlaGF2aW91ci5jdXJyZW50VGFyZ2V0ID0gdGhpcy5wbGF5ZXJUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgem9tYmllRW50aXR5ID0gbmV3IEdhbWVFbnRpdHkoZW5lbXlSb290TWVzaC5uYW1lLCBlbmVteVJvb3RNZXNoKVxyXG4gICAgICAgIC5BZGRDb21wb25lbnQoem9tYmllQmVoYXZpb3VyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHpvbWJpZUVudGl0eS5Jbml0QXN5bmMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3SHAgPSB6b21iaWVCZWhhdmlvdXIuem9tYmllUHJvcHMuR2V0SHAoKSArIGFkZGl0aW9uSHA7XHJcbiAgICAgICAgem9tYmllQmVoYXZpb3VyLnpvbWJpZVByb3BzLlNldEhwKG5ld0hwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW50aXR5OiB6b21iaWVFbnRpdHksXHJcbiAgICAgICAgICAgIGJlaGF2aW91cjogem9tYmllQmVoYXZpb3VyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lVGltZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9HYW1lVGltZXIuanNcIjtcclxuaW1wb3J0IHsgR2FtZUJlaGF2aW91ciB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2FtZUJlaGF2aW91ci5qc1wiO1xyXG5pbXBvcnQgWm9tYmllUHJvcHMgZnJvbSBcIi4uLy4uL3Byb3BlcnRpZXMvem9tYmllUHJvcHMuanNcIjtcclxuaW1wb3J0IHpvbWJpZUFjdGlvbk5hbWVzIGZyb20gXCIuL3N0YXRlcy96b21iaWVBY3Rpb25OYW1lcy5qc1wiO1xyXG5pbXBvcnQgWm9tYmllRlNNIGZyb20gXCIuL3N0YXRlcy96b21iaWVGU00uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15Wm9tYmllQmVoYXZpb3VyIGV4dGVuZHMgR2FtZUJlaGF2aW91ciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb290TWVzaCwgYW5pbWF0aW9uR3JvdXBzLCBzY2VuZSwgc291bmRQbGF5ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUm9vdCA9IHJvb3RNZXNoO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uR3JvdXBzID0gYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZE1vZGlmaWVyID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLlNvdW5kUGxheWVyID0gc291bmRQbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgSW5pdEFzeW5jKCkge1xyXG4gICAgICAgIHRoaXMuaWRsZUFuaW1Hcm91cCA9IHRoaXMuYW5pbWF0aW9uR3JvdXBzLmZpbmQoYWcgPT4gYWcubmFtZSA9PT0gXCJJZGxlXCIpO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltR3JvdXAgPSB0aGlzLmFuaW1hdGlvbkdyb3Vwcy5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiRGVhdGhcIik7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbUdyb3VwID0gdGhpcy5hbmltYXRpb25Hcm91cHMuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIldhbGtcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tBbmltR3JvdXAgPSB0aGlzLmFuaW1hdGlvbkdyb3Vwcy5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiQXR0YWNrXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkluaXRQaHlzaWNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkgPSB0aGlzLnRyYW5zZm9ybVJvb3QuZ2V0UGh5c2ljc0JvZHkoKTtcclxuICAgICAgICBpZighdGhpcy5waHlzaWNzQm9keSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbRW5lbXlab21iaWVCZWhhdmlvdXJdIFBoeXNpY3MgYm9keSBpcyBtaXNzaW5nIVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldE1hc3NQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgaW5lcnRpYTogbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LnNldEdyYXZpdHlGYWN0b3IoMTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy56b21iaWVGU00gID0gbmV3IFpvbWJpZUZTTSh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy56b21iaWVQcm9wcyA9IG5ldyBab21iaWVQcm9wcygpO1xyXG4gICAgICAgIHRoaXMuem9tYmllUHJvcHMuU2V0SHAoNTApO1xyXG4gICAgICAgIHRoaXMuem9tYmllUHJvcHMuU2V0TWF4SHAoNTApO1xyXG4gICAgICAgIHRoaXMuem9tYmllUHJvcHMuU2V0SXNEZWFkKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5TdWJzY3JpYmVQcm9wc0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0Q29sbGlzaW9uQ2FsbGJhY2tFbmFibGVkKHRydWUpO1xyXG4gICAgICAgIHRoaXMuYmluZGVkQ29sbGlzaW9uSGFuZGxlciA9IHRoaXMuSGFuZGxlQ29sbGlzaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uT2JzZXJ2YWJsZSA9IHRoaXMucGh5c2ljc0JvZHkuZ2V0Q29sbGlzaW9uT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uT2JzZXJ2YWJsZS5hZGQodGhpcy5iaW5kZWRDb2xsaXNpb25IYW5kbGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdE9ic3RhY2xlRGV0ZWN0ZWRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9sYXN0QW5vdGhlclpvbWJpZURldGVjdGVkVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGFzdERhbWFnZVRpbWUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgSGFuZGxlQ29sbGlzaW9ucyhjb2xFdmVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnpvbWJpZVdhbGtTdGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy56b21iaWVXYWxrU3RhdGVOYW1lID0gXCJab21iaWVXYWxrU3RhdGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3Mgb25seSBzdGF0ZSBpcyBXQUxLXHJcbiAgICAgICAgaWYodGhpcy56b21iaWVGU00uY3VycmVudFN0YXRlLmNvbnN0cnVjdG9yLm5hbWUgIT09IHRoaXMuem9tYmllV2Fsa1N0YXRlTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xsaWRlck5hbWUgPSBjb2xFdmVudC5jb2xsaWRlZEFnYWluc3QudHJhbnNmb3JtTm9kZS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGNvbGxpc2lvblR5cGUgPSB0aGlzLkdldENvbGxpc2lvblR5cGUoY29sbGlkZXJOYW1lKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKGNvbGxpc2lvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSh0aGlzLkNPTF9UWVBFUy5XQUxMKToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVTdHVja0luT2JzdGFjbGVzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBjYXNlICh0aGlzLkNPTF9UWVBFUy5BTk9USEVSX1pPTUJJRSk6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlU3R1Y2tJbkFub3RoZXJab21iaWUoY29sRXZlbnQuY29sbGlkZWRBZ2FpbnN0LnRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gR2FtZVRpbWVyLkdldEVsYXBzZWRUaW1lU2Vjb25kcygpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVUb0RldGVjdE9ic3RhY2xlcyA9IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBjdXJyZW50VGltZSAtIHRoaXMuX2xhc3RPYnN0YWNsZURldGVjdGVkVGltZTtcclxuICAgICAgICB0aGlzLl9pc0luT2JzdGFjbGVzICA9IGRpZmYgPCB0aW1lVG9EZXRlY3RPYnN0YWNsZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHpvbWJpZURpZmYgPSBjdXJyZW50VGltZSAtIHRoaXMuX2xhc3RBbm90aGVyWm9tYmllRGV0ZWN0ZWRUaW1lO1xyXG4gICAgICAgIHRoaXMuX2lzSW5Bbm90aGVyWm9tYmllID0gem9tYmllRGlmZiA8IHRpbWVUb0RldGVjdE9ic3RhY2xlcztcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVTdHVja0luT2JzdGFjbGVzKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2xhc3RPYnN0YWNsZURldGVjdGVkVGltZSA9IEdhbWVUaW1lci5HZXRFbGFwc2VkVGltZVNlY29uZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVTdHVja0luQW5vdGhlclpvbWJpZShhbm90aGVyWm9tYmllVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbGFzdEFub3RoZXJab21iaWVEZXRlY3RlZFRpbWUgPSBHYW1lVGltZXIuR2V0RWxhcHNlZFRpbWVTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIGlmKGFub3RoZXJab21iaWVUcmFuc2Zvcm0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG15UG9zID0gdGhpcy50cmFuc2Zvcm1Sb290LmFic29sdXRlUG9zaXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGFub3RoZXJab21iaWVQb3MgPSBhbm90aGVyWm9tYmllVHJhbnNmb3JtLmFic29sdXRlUG9zaXRpb247XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpclRvVGFyZ2V0ID0gYW5vdGhlclpvbWJpZVBvcy5zdWJ0cmFjdChteVBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3RvQW5vdGhlclpvbWJpZURpciA9IGRpclRvVGFyZ2V0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl90b0Fub3RoZXJab21iaWVEaXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZXRDb2xsaXNpb25UeXBlKGNvbE5hbWUpIHtcclxuICAgICAgICBpZighdGhpcy5jb2xsaXNpb25zVHlwZXNNYXApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zVHlwZXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ09MX1RZUEVTID0ge1xyXG4gICAgICAgICAgICAgICAgRkxPT1I6IFwiRkxPT1JcIixcclxuICAgICAgICAgICAgICAgIFdBTEw6IFwiV0FMTFwiLFxyXG4gICAgICAgICAgICAgICAgQU5PVEhFUl9aT01CSUU6IFwiWk9NQklFXCIsIFxyXG4gICAgICAgICAgICAgICAgVU5ERUZJTkVEX0NPTDogXCJVTkRFRklORURfQ09MXCJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLnNldChcIk9iamVjdF8yXCIsIHRoaXMuQ09MX1RZUEVTLkZMT09SKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zVHlwZXNNYXAuc2V0KFwiT2JqZWN0XzNcIiwgdGhpcy5DT0xfVFlQRVMuV0FMTCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLnNldChcIk9iamVjdF80XCIsIHRoaXMuQ09MX1RZUEVTLldBTEwpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnNUeXBlc01hcC5zZXQoXCJPYmplY3RfNVwiLCB0aGlzLkNPTF9UWVBFUy5XQUxMKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zVHlwZXNNYXAuc2V0KFwiWk9NQklFXCIsIHRoaXMuQ09MX1RZUEVTLkFOT1RIRVJfWk9NQklFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY29sbGlzaW9uc1R5cGVzTWFwLmhhcyhjb2xOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xsaXNpb25zVHlwZXNNYXAuZ2V0KGNvbE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5DT0xfVFlQRVMuVU5ERUZJTkVEX0NPTDtcclxuICAgIH1cclxuXHJcbiAgICBTdWJzY3JpYmVQcm9wc0V2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnpvbWJpZVByb3BzLkhwT2JzZXJ2YWJsZS5hZGQoKGN1cnJlbnRIcCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnpvbWJpZVByb3BzLkdldElzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltaT01CSUVdIEhwIGNoYW5nZWQhOiBcIiArIGN1cnJlbnRIcCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZVByb3BzLlNldElzRGVhZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllUHJvcHMuU2V0SHAoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy56b21iaWVQcm9wcy5Jc0RlYWRPYnNlcnZhYmxlLmFkZCgoaXNEZWFkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRGVhZCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIltaT01CSUVdIERlYXRoIVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllRlNNLlByb2Nlc3NBY3Rpb24oem9tYmllQWN0aW9uTmFtZXMuREVBVEgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdFBoeXNpY3MoKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwaHlzaWNzQm9keSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NCb2R5KHRoaXMudHJhbnNmb3JtUm9vdCwgQkFCWUxPTi5QaHlzaWNzTW90aW9uVHlwZS5EWU5BTUlDLCBmYWxzZSwgdGhpcy5zY2VuZSk7XHJcblxyXG4gICAgICAgIC8vIG5ldyBQaHlzaWNzU2hhcGVDYXBzdWxlKHBvaW50QTogVmVjdG9yMywgcG9pbnRCOiBWZWN0b3IzLCByYWRpdXM6IG51bWJlciwgc2NlbmU6IFNjZW5lKVxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NTaGFwZSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NTaGFwZUNhcHN1bGUoXHJcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwyNSwwKSxcclxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLDUsMCksXHJcbiAgICAgICAgICAgIDUsIC8vIHJhZGl1cyBvZiB0aGUgc3BoZXJlXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUgLy8gY29udGFpbmluZyBzY2VuZVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcGh5c2ljc0JvZHkuc2hhcGUgPSBwaHlzaWNzU2hhcGU7XHJcbiAgICB9XHJcblxyXG4gICAgT25TdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5iaW5kZWRDb2xsaXNpb25IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVJvb3QuZGlzcG9zZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuem9tYmllUHJvcHMuR2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Gb2xsb3dUYXJnZXRMb29wKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMuem9tYmllRlNNLk9uVXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgRm9sbG93VGFyZ2V0TG9vcChkZWx0YVRpbWUpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudFRhcmdldCB8fCB0aGlzLmN1cnJlbnRUYXJnZXQucGxheWVyUHJvcHMuR2V0SXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRMaW5lYXJWZWxvY2l0eShCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllRlNNLlByb2Nlc3NBY3Rpb24oem9tYmllQWN0aW9uTmFtZXMuSURMRSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gR2FtZVRpbWVyLkdldEVsYXBzZWRUaW1lU2Vjb25kcygpO1xyXG4gICAgICAgIGNvbnN0IGxhc3REYW1hZ2VUaW1lRGlmZiA9IGN1cnJlbnRUaW1lIC0gdGhpcy5fbGFzdERhbWFnZVRpbWU7XHJcbiAgICAgICAgY29uc3QgaXNVbmRlckF0dGFjayA9IGxhc3REYW1hZ2VUaW1lRGlmZiA8PSAxO1xyXG5cclxuICAgICAgICBjb25zdCB6b21iaWVQb3MgPSB0aGlzLnRyYW5zZm9ybVJvb3QuYWJzb2x1dGVQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSB0aGlzLmN1cnJlbnRUYXJnZXQuR2V0QWJzb2x1dGVQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0YW5jZVRvU3RvcCA9IDMwO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREaXN0YW5jZSA9IEJBQllMT04uVmVjdG9yMy5EaXN0YW5jZSh6b21iaWVQb3MsIHRhcmdldFBvcyk7XHJcblxyXG4gICAgICAgIGlmKGN1cnJlbnREaXN0YW5jZSA8PSBkaXN0YW5jZVRvU3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnpvbWJpZUZTTS5Qcm9jZXNzQWN0aW9uKHpvbWJpZUFjdGlvbk5hbWVzLkFUVEFDSyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdmVTcGVlZCA9IDEwICogdGhpcy5tb3ZlU3BlZWRNb2RpZmllciAqIGRlbHRhVGltZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlyVG9QbGF5ZXJUYXJnZXQgPSB0YXJnZXRQb3Muc3VidHJhY3Qoem9tYmllUG9zKS5ub3JtYWxpemUoKTtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IGRpclRvUGxheWVyVGFyZ2V0LmNsb25lKCk7XHJcbiAgICBcclxuICAgICAgICBpZih0aGlzLl9pc0luT2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVN0cmVuZ3RoID0gdGhpcy5HZXRSYW5kb21TdHJlbmd0aCg1MCwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldERpci54ID0gICgoZGlyVG9QbGF5ZXJUYXJnZXQueCA+IDApID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgdGFyZ2V0RGlyLnogPSBkaXJUb1BsYXllclRhcmdldC56ICogLTE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3NCb2R5LmFwcGx5Rm9yY2UodGFyZ2V0RGlyLnNjYWxlKHJhbmRvbVN0cmVuZ3RoKSwgIHRoaXMudHJhbnNmb3JtUm9vdC5wb3NpdGlvbi5hZGQodGFyZ2V0RGlyLnNjYWxlKG1vdmVTcGVlZCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2lzSW5Bbm90aGVyWm9tYmllICYmIHRoaXMuX3RvQW5vdGhlclpvbWJpZURpcikge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21TdHJlbmd0aCA9IHRoaXMuR2V0UmFuZG9tU3RyZW5ndGgoNTAsIDEwMCk7XHJcbiAgICAgICAgICAgIHRhcmdldERpci54ID0gICgodGhpcy5fdG9Bbm90aGVyWm9tYmllRGlyLnggPCAwKSA/IDEgOiAtMSk7IC8vIGludmVyc2VkIGZyb20gYW5vdGhlciB6b21iaWVcclxuICAgICAgICAgICAgdGFyZ2V0RGlyLnogPSBkaXJUb1BsYXllclRhcmdldC56O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzQm9keS5hcHBseUZvcmNlKHRhcmdldERpci5zY2FsZShyYW5kb21TdHJlbmd0aCksICB0aGlzLnRyYW5zZm9ybVJvb3QucG9zaXRpb24uYWRkKHRhcmdldERpci5zY2FsZShtb3ZlU3BlZWQpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc1VuZGVyQXR0YWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVN0cmVuZ3RoID0gdGhpcy5HZXRSYW5kb21TdHJlbmd0aCgxMCwgNTApO1xyXG4gICAgICAgICAgICB0YXJnZXREaXIueiAqPSAtMTtcclxuICAgICAgICAgICAgdGFyZ2V0RGlyLnggKj0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0UG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVJvb3QucG9zaXRpb24uYWRkKHRhcmdldERpci5zY2FsZShtb3ZlU3BlZWQpKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsb29rQXQgPSBCQUJZTE9OLk1hdHJpeC5Mb29rQXRMSChcclxuICAgICAgICAgICAgem9tYmllUG9zLFxyXG4gICAgICAgICAgICB0YXJnZXRQb3MsXHJcbiAgICAgICAgICAgIEJBQllMT04uVmVjdG9yMy5VcCgpXHJcbiAgICAgICAgKS5pbnZlcnQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dFJvdGF0aW9uID0gIEJBQllMT04uUXVhdGVybmlvbi5Gcm9tUm90YXRpb25NYXRyaXgoIGxvb2tBdCApO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0JvZHkuc2V0VGFyZ2V0VHJhbnNmb3JtKG5leHRQb3NpdGlvbiwgbmV4dFJvdGF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy56b21iaWVGU00uUHJvY2Vzc0FjdGlvbih6b21iaWVBY3Rpb25OYW1lcy5XQUxLKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRSYW5kb21TdHJlbmd0aChtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU2hvdFJlY2lldmVkKCkge1xyXG4gICAgICAgIHRoaXMuX2xhc3REYW1hZ2VUaW1lID0gR2FtZVRpbWVyLkdldEVsYXBzZWRUaW1lU2Vjb25kcygpO1xyXG4gICAgICAgIHRoaXMuU291bmRQbGF5ZXIuUGxheVNvdW5kKFwiWk9NQklFX0FUVEFDS0VEXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVW5pdFN0YXRlQmFzZSB9IGZyb20gXCIuLi8uLi8uLi91bml0cy91bml0U3RhdGVCYXNlLmpzXCI7XHJcbmltcG9ydCB6b21iaWVBY3Rpb25OYW1lcyBmcm9tIFwiLi4vem9tYmllQWN0aW9uTmFtZXMuanNcIjtcclxuaW1wb3J0IFpvbWJpZURlYXRoU3RhdGUgZnJvbSBcIi4vWm9tYmllRGVhdGhTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgWm9tYmllSWRsZVN0YXRlIGZyb20gXCIuL1pvbWJpZUlkbGVTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgWm9tYmllV2Fsa1N0YXRlIGZyb20gXCIuL1pvbWJpZU1vdmVTdGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmllQXR0YWNrU3RhdGUgZXh0ZW5kcyBVbml0U3RhdGVCYXNlIHtcclxuXHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLklETEUpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZUlkbGVTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLkRFQVRIKToge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9tYmllRGVhdGhTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLldBTEspOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZVdhbGtTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHpvbWJpZUJlaGF2aW91cikge1xyXG4gICAgICAgIHRoaXMuem9tYmllQmVoYXZpb3VyID0gem9tYmllQmVoYXZpb3VyO1xyXG4gICAgICAgIHRoaXMuem9tYmllRGFtYWdlID0gMTA7XHJcbiAgICAgICAgdGhpcy5fdGltZVRvRGVhbERhbWFnZVNlY29uZHMgPSAyLjc7XHJcbiAgICAgICAgdGhpcy5fZGVhbERhbWFnZVRpbWVyID0gdGhpcy5fdGltZVRvRGVhbERhbWFnZVNlY29uZHMgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tBbmltR3JvdXAgPSB6b21iaWVCZWhhdmlvdXIuYXR0YWNrQW5pbUdyb3VwO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQW5pbUdyb3VwLnN0YXJ0KHRydWUsIDEuMCx0aGlzLmF0dGFja0FuaW1Hcm91cC5mcm9tLCB0aGlzLmF0dGFja0FuaW1Hcm91cC50bywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICB0aGlzLmF0dGFja0FuaW1Hcm91cC5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5fZGVhbERhbWFnZVRpbWVyID49IHRoaXMuX3RpbWVUb0RlYWxEYW1hZ2VTZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYWxEYW1hZ2VUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllQmVoYXZpb3VyLlNvdW5kUGxheWVyLlBsYXlTb3VuZChcIlpPTUJJRV9QVU5DSFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZGVhbERhbWFnZVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBBdHRhY2soKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJUYXJnZXQgPSB0aGlzLnpvbWJpZUJlaGF2aW91cj8uY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgaWYoIWN1cnJlbnRQbGF5ZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWluRGFtYWdlID0gMjtcclxuICAgICAgICBjb25zdCBtYXhEYW1hZ2UgPSA4O1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbURhbWFnZSA9IE1hdGgucmFuZG9tKCkgKiAobWF4RGFtYWdlIC0gbWluRGFtYWdlICsgMSkgKyBtaW5EYW1hZ2U7XHJcbiAgICAgICAgY3VycmVudFBsYXllclRhcmdldC5wbGF5ZXJQcm9wcy5EZWFsRGFtYWdlKHJhbmRvbURhbWFnZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltaX0FdIEF0dGFja3VhdGlvbiEgRGFtYWdlOiBcIiArIHJhbmRvbURhbWFnZSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJpZURlYXRoU3RhdGUge1xyXG4gICAgSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHpvbWJpZUJlaGF2aW91cikge1xyXG4gICAgICAgIHRoaXMuem9tYmllQmVoYXZpb3VyID0gem9tYmllQmVoYXZpb3VyO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltR3JvdXAgPSB6b21iaWVCZWhhdmlvdXIuZGVhdGhBbmltR3JvdXA7XHJcbiAgICAgICAgdGhpcy5kZWF0aEFuaW1Hcm91cC5zdGFydCh0cnVlLCAxLjAsdGhpcy5kZWF0aEFuaW1Hcm91cC5mcm9tLCB0aGlzLmRlYXRoQW5pbUdyb3VwLnRvLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kZWF0aEFuaW1Hcm91cC5sb29wQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgem9tYmllQmVoYXZpb3VyLnBoeXNpY3NCb2R5LmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy56b21iaWVCZWhhdmlvdXIuU291bmRQbGF5ZXIuUGxheVNvdW5kKFwiWk9NQklFX0RFQVRIXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWNheVRpbWVNcyA9IDUgKiAxMDAwO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5PbkV4aXQoKTtcclxuICAgICAgICAgICAgdGhpcy56b21iaWVCZWhhdmlvdXIuT25EZXN0cm95KClcclxuICAgICAgICB9LCBkZWNheVRpbWVNcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25FeGl0KCkge1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltR3JvdXAuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge31cclxufSIsImltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5pbXBvcnQgem9tYmllQWN0aW9uTmFtZXMgZnJvbSBcIi4uL3pvbWJpZUFjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCBab21iaWVEZWF0aFN0YXRlIGZyb20gXCIuL1pvbWJpZURlYXRoU3RhdGUuanNcIjtcclxuaW1wb3J0IFpvbWJpZVdhbGtTdGF0ZSBmcm9tIFwiLi9ab21iaWVNb3ZlU3RhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJpZUlkbGVTdGF0ZSBleHRlbmRzIFVuaXRTdGF0ZUJhc2Uge1xyXG5cclxuICAgIEhhbmRsZUFjdGlvbihhY3Rpb25OYW1lKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaChhY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2Uoem9tYmllQWN0aW9uTmFtZXMuV0FMSyk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9tYmllV2Fsa1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZSh6b21iaWVBY3Rpb25OYW1lcy5ERUFUSCk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9tYmllRGVhdGhTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2Uoem9tYmllQWN0aW9uTmFtZXMuQVRUQUNLKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBPbkVudGVyKHpvbWJpZUJlaGF2aW91cikge1xyXG4gICAgICAgIHRoaXMuaWRsZUFuaW1Hcm91cCA9IHpvbWJpZUJlaGF2aW91ci5pZGxlQW5pbUdyb3VwO1xyXG4gICAgICAgIHRoaXMuaWRsZUFuaW1Hcm91cC5zdGFydCh0cnVlLCAxLjAsdGhpcy5pZGxlQW5pbUdyb3VwLmZyb20sIHRoaXMuaWRsZUFuaW1Hcm91cC50bywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICB0aGlzLmlkbGVBbmltR3JvdXAuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge31cclxufSIsImltcG9ydCB7IFVuaXRTdGF0ZUJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vdW5pdHMvdW5pdFN0YXRlQmFzZS5qc1wiO1xyXG5pbXBvcnQgem9tYmllQWN0aW9uTmFtZXMgZnJvbSBcIi4uL3pvbWJpZUFjdGlvbk5hbWVzLmpzXCI7XHJcbmltcG9ydCBab21iaWVBdHRhY2tTdGF0ZSBmcm9tIFwiLi9ab21iaWVBdHRhY2tTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgWm9tYmllRGVhdGhTdGF0ZSBmcm9tIFwiLi9ab21iaWVEZWF0aFN0YXRlLmpzXCI7XHJcbmltcG9ydCBab21iaWVJZGxlU3RhdGUgZnJvbSBcIi4vWm9tYmllSWRsZVN0YXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVXYWxrU3RhdGUgZXh0ZW5kcyBVbml0U3RhdGVCYXNlIHtcclxuXHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLklETEUpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZUlkbGVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2Uoem9tYmllQWN0aW9uTmFtZXMuREVBVEgpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvbWJpZURlYXRoU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKHpvbWJpZUFjdGlvbk5hbWVzLkFUVEFDSyk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9tYmllQXR0YWNrU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgT25FbnRlcih6b21iaWVCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLndhbGtBbmltR3JvdXAgPSB6b21iaWVCZWhhdmlvdXIud2Fsa0FuaW1Hcm91cDtcclxuICAgICAgICB0aGlzLndhbGtBbmltR3JvdXAuc3RhcnQodHJ1ZSwgMS4wLHRoaXMud2Fsa0FuaW1Hcm91cC5mcm9tLCB0aGlzLndhbGtBbmltR3JvdXAudG8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbUdyb3VwLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHt9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBJRExFIDogXCJJZGxlXCIsXHJcbiAgICBXQUxLOiBcIldhbGtcIixcclxuICAgIERFQVRIOiBcIkRlYXRoXCIsXHJcbiAgICBBVFRBQ0s6IFwiQXR0YWNrXCIsXHJcbiAgICBTVE9QX0FUVEFDSzogXCJTdG9wQXR0YWNrXCJcclxufSIsImltcG9ydCBVbml0RlNNQmFzZSBmcm9tIFwiLi4vLi4vdW5pdHMvdW5pdEZzbUJhc2UuanNcIjtcclxuaW1wb3J0IFpvbWJpZUlkbGVTdGF0ZSBmcm9tIFwiLi9jb25jcmV0ZS9ab21iaWVJZGxlU3RhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJpZUZTTSBleHRlbmRzIFVuaXRGU01CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHpvbWJpZUJlaGF2aW91cikge1xyXG4gICAgICAgIHN1cGVyKHpvbWJpZUJlaGF2aW91cik7XHJcbiAgICAgICAgem9tYmllQmVoYXZpb3VyLmF0dGFja0FuaW1Hcm91cC5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlRGVmYXVsdFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgWm9tYmllSWRsZVN0YXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVRpbWVyIGZyb20gXCIuLi9jb21tb24vR2FtZVRpbWVyLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IHsgTW9kZWxMb2FkZXIgfSBmcm9tIFwiLi4vY29tbW9uL21vZGVsTG9hZGVyLmpzXCI7XHJcbmltcG9ydCBHYW1lUnVsZXNDaGVhdHMgZnJvbSBcIi4vR2FtZVJ1bGVzQ2hlYXRzLmpzXCI7XHJcbmltcG9ydCBFbmVteVNwYXduZXIgZnJvbSBcIi4vZW5lbWllcy9lbmVteVNwYXduZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVSdWxlc0JlaGF2aW91ciBleHRlbmRzIEdhbWVCZWhhdmlvdXIge1xyXG5cclxuICAgIHN0YXRpYyBJc1Byb2R1Y3Rpb24gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCB3b3JsZCwgc291bmRQbGF5ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5lbmVteVNwYXduZXIgPSBuZXcgRW5lbXlTcGF3bmVyKHNjZW5lLCB0aGlzLndvcmxkLCBzb3VuZFBsYXllcik7XHJcbiAgICAgICAgdGhpcy5zcGF3bkRlbGF5SW5TZWNvbmRzID0gMjtcclxuICAgICAgICB0aGlzLnNwYXduVGltZXIgPSB0aGlzLnNwYXduRGVsYXlJblNlY29uZHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Wm9tYmllc0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLm1heFpvbWJpZXNDb3VudCA9IDEwO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lRG9uZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLkN1cnJlbnRab21iaWVzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLl96b21iaWVBZGRpdGlvbkhwID0gMDtcclxuICAgICAgICB0aGlzLl9zb3VuZFBsYXllciA9IHNvdW5kUGxheWVyO1xyXG4gICAgICAgIGlmKCFHYW1lUnVsZXNCZWhhdmlvdXIuSXNQcm9kdWN0aW9uKSB7XHJcbiAgICAgICAgICAgIG5ldyBHYW1lUnVsZXNDaGVhdHModGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHtcclxuICAgICAgICBjb25zdCBzcGF3blBvaW50c0RhdGEgPSBhd2FpdCBuZXcgTW9kZWxMb2FkZXIodGhpcy5zY2VuZSwgbnVsbCwgXCIuL0Fzc2V0cy9haS1kYXRhL1wiLCBcImFpLWRhdGEtc3Bhd24tcG9pbnRzLmdsYlwiKS5Mb2FkQXN5bmMoKTtcclxuICAgICAgICB0aGlzLnNwYXduUG9pbnRzQXJyYXkgPSBzcGF3blBvaW50c0RhdGEubWVzaGVzWzBdLmdldENoaWxkVHJhbnNmb3JtTm9kZXMoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3Bhd24gcG9pbnRzIGxlbmd0aDogXCIgKyB0aGlzLnNwYXduUG9pbnRzQXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgR2FtZVRpbWVyLk9uVGlja09uZVNlY29uZE9ic2VydmFibGUuYWRkKChlbGFwc2VkU2Vjb25kcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pc0dhbWVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGVsYXBzZWRTZWNvbmRzICUgNjAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbWJpZUFkZGl0aW9uSHAgKz0gNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0dhbWVSdWxlc0JlaGF2aW91cl0gc2V0IF96b21iaWVBZGRpdGlvbkhwOiBcIiArIHRoaXMuX3pvbWJpZUFkZGl0aW9uSHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVsYXBzZWRTZWNvbmRzICUgMTIwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFpvbWJpZXNDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJbR2FtZVJ1bGVzQmVoYXZpb3VyXSBzZXQgbWF4Wm9tYmllc0NvdW50OiBcIiArIHRoaXMubWF4Wm9tYmllc0NvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndvcmxkXHJcbiAgICAgICAgICAgIC5HZXRFbnRpdHkoXCJMT0NBTF9QTEFZRVJcIilcclxuICAgICAgICAgICAgLkdldENvbXBvbmVudChcIkxvY2FsUGxheWVyQmVoYXZpb3VyXCIpXHJcbiAgICAgICAgICAgIC5wbGF5ZXJQcm9wcy5Jc0RlYWRPYnNlcnZhYmxlLmFkZCgoaXNEZWFkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0RlYWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR2FtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLkluaXRpYWxTcGF3bigpO1xyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICB0aGlzLlNob3dab21iaWVDb3VudERlYnVnQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBTaG93Wm9tYmllQ291bnREZWJ1Z0FzeW5jKCkge1xyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlcywgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5jdXJyZW50Wm9tYmllc0NvdW50OiBcIiArIHRoaXMuY3VycmVudFpvbWJpZXNDb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEluaXRpYWxTcGF3bigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiW0dhbWVSdWxlc0JlaGF2aW91cl0gT25TdGFydCEhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzR2FtZURvbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5IYW5kbGVTcGF3bkxvb3AoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVTcGF3bkxvb3AoZGVsdGFUaW1lKSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFpvbWJpZXNDb3VudCA+PSB0aGlzLm1heFpvbWJpZXNDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVGltZXIgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnNwYXduVGltZXIgPj0gdGhpcy5zcGF3bkRlbGF5SW5TZWNvbmRzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNwYXduWm9tYmllQXN5bmMoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bhd25UaW1lciArPSBkZWx0YVRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgU3Bhd25ab21iaWVBc3luYygpIHtcclxuICAgICAgICBjb25zdCBzcGF3blBvaW50ID0gdGhpcy5HZXRSYW5kb21TcGF3blBvaW50KCk7XHJcbiAgICAgICAgY29uc3Qgem9tYmllRGF0YSA9IGF3YWl0IHRoaXMuZW5lbXlTcGF3bmVyLkNyZWF0ZVpvbWJpZUVudGl0eUFzeW5jKFxyXG4gICAgICAgICAgICAvL25ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMzUpXHJcbiAgICAgICAgICAgIHNwYXduUG9pbnQsXHJcbiAgICAgICAgICAgIHRoaXMuX3pvbWJpZUFkZGl0aW9uSHBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy53b3JsZC5BZGRFbnRpdHkoem9tYmllRGF0YS5lbnRpdHksIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLkN1cnJlbnRab21iaWVzQXJyYXkucHVzaCh6b21iaWVEYXRhLmJlaGF2aW91cik7XHJcblxyXG4gICAgICAgIC8vIGRlY3JlYXNlIGNvdW50ZXIgYW5kIHJlbW92ZSBmcm9tIGFycmF5IG9uIGRlYWRcclxuICAgICAgICB6b21iaWVEYXRhLmJlaGF2aW91ci56b21iaWVQcm9wcy5Jc0RlYWRPYnNlcnZhYmxlLmFkZCgoaXNEZWFkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRGVhZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHpvbWJpZUluZGV4ID0gdGhpcy5DdXJyZW50Wm9tYmllc0FycmF5LmluZGV4T2Yoem9tYmllRGF0YS5iZWhhdmlvdXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHpvbWJpZUluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRab21iaWVzQXJyYXkuc3BsaWNlKHpvbWJpZUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRab21iaWVzQ291bnQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRab21iaWVzQ291bnQrKztcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIEdldFJhbmRvbVNwYXduUG9pbnQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuc3Bhd25Qb2ludHNBcnJheTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5zcGF3blBvaW50c0FycmF5Lmxlbmd0aCldLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBXYWl0VW50aWwgfSBmcm9tIFwiLi4vLi4vVXRpbHMuanNcIjtcclxuaW1wb3J0IHsgR2FtZUJlaGF2aW91ciB9IGZyb20gXCIuLi9jb21tb24vZ2FtZUJlaGF2aW91ci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyR1VJQmVoYXZpb3VyIGV4dGVuZHMgR2FtZUJlaGF2aW91ciB7XHJcblxyXG5cclxuICAgIGFzeW5jIEluaXRBc3luYygpIHtcclxuICAgICAgICBpZighdGhpcy5lbnRpdHkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUGxheWVyR1VJQmVoYXZpb3VyXSB0aGUgJ2VudGl0eScgaXMgbWlzc2luZyFgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCZWhhdmlvdXIgPSB0aGlzLmVudGl0eS5HZXRDb21wb25lbnQoXCJMb2NhbFBsYXllckJlaGF2aW91clwiKTtcclxuXHJcbiAgICAgICAgYXdhaXQgV2FpdFVudGlsKCgpID0+IHRoaXMucGxheWVyQmVoYXZpb3VyLmlzSW5pdGlhbGl6ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclByb3BzID0gdGhpcy5wbGF5ZXJCZWhhdmlvdXIucGxheWVyUHJvcHM7XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyUHJvcHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUGxheWVyR1VJQmVoYXZpb3VyXSB0aGUgJ3BsYXllclByb3BzJyBpcyBtaXNzaW5nIWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5TZXR1cEd1aUVsZW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Bd2FrZSgpIHt9XHJcbiAgICBPblN0YXJ0KCkge1xyXG4gICAgfVxyXG4gICAgT25EaXNhYmxlKCkge31cclxuICAgIE9uRGVzdHJveSgpIHt9XHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHt9XHJcblxyXG4gICAgU2V0dXBHdWlFbGVtZW50cygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWR2YW5jZWRUZXh0dXJlID0gQkFCWUxPTi5HVUkuQWR2YW5jZWREeW5hbWljVGV4dHVyZS5DcmVhdGVGdWxsc2NyZWVuVUkoXCJVSVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IG5ldyBCQUJZTE9OLkdVSS5HcmlkKCk7XHJcbiAgICAgICAgYWR2YW5jZWRUZXh0dXJlLmFkZENvbnRyb2woZ3JpZCk7XHJcblxyXG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigwLjMzKTtcclxuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMC4zMyk7XHJcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDAuMzMpO1xyXG4gICAgICAgIGdyaWQuYWRkUm93RGVmaW5pdGlvbigwLjMzKTtcclxuICAgICAgICBncmlkLmFkZFJvd0RlZmluaXRpb24oMC4zMyk7XHJcbiAgICAgICAgZ3JpZC5hZGRSb3dEZWZpbml0aW9uKDAuMzMpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBocEJhclNsaWRlciA9IHRoaXMuQ3JlYXRlSHBCYXJTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Tm9ybWFsaXplZEhwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJQcm9wcy5HZXRIcCgpIC8gdGhpcy5wbGF5ZXJQcm9wcy5HZXRNYXhIcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHBCYXJTbGlkZXIudmFsdWUgPSBnZXROb3JtYWxpemVkSHAoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLkhwT2JzZXJ2YWJsZS5hZGQoKGN1cnJlbnRIcCkgPT4ge1xyXG4gICAgICAgICAgICBocEJhclNsaWRlci52YWx1ZSA9IGdldE5vcm1hbGl6ZWRIcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllclByb3BzLklzRGVhZE9ic2VydmFibGUuYWRkKChpc0RlYWQpID0+IHtcclxuICAgICAgICAgICAgaWYoaXNEZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBocEJhclNsaWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZWxlbSwgcm93LCBjb2xcclxuICAgICAgICBncmlkLmFkZENvbnRyb2woaHBCYXJTbGlkZXIsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUhwQmFyU2xpZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhwQmFyU2xpZGVyID0gbmV3IEJBQllMT04uR1VJLlNsaWRlcigpO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLm1pbmltdW0gPSAwO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLm1heGltdW0gPSAxO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLmlzVGh1bWJDbGFtcGVkID0gZmFsc2U7XHJcbiAgICAgICAgaHBCYXJTbGlkZXIuaXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLmRpc3BsYXlUaHVtYiA9IGZhbHNlO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLmhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLndpZHRoID0gXCIyMDBweFwiO1xyXG5cclxuICAgICAgICBocEJhclNsaWRlci5jb2xvciA9IFwicmVkXCI7XHJcblxyXG4gICAgICAgIGhwQmFyU2xpZGVyLnZhbHVlID0gMC41O1xyXG4gICAgICAgIGhwQmFyU2xpZGVyLmlzRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gaHBCYXJTbGlkZXI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBJRExFIDogXCJJZGxlXCIsXHJcbiAgICBXQUxLOiBcIldhbGtcIixcclxuICAgIERFQVRIOiBcIkRlYXRoXCIsXHJcbiAgICBTSE9PVDogXCJTaG9vdFwiLFxyXG4gICAgU1RPUF9TSE9PVElORzogXCJTdG9wU2hvb3RcIlxyXG59IiwiaW1wb3J0IHsgVW5pdFN0YXRlQmFzZSB9IGZyb20gXCIuLi8uLi91bml0cy91bml0U3RhdGVCYXNlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWF0aFN0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW0RlYXRoU3RhdGVdIE9uRW50ZXIoJHtwbGF5ZXJCZWhhdmlvdXJ9KWApO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltID0gcGxheWVyQmVoYXZpb3VyLnBsYXllckFuaW1hdGlvbnNHcm91cEFycmF5LmZpbmQoYWcgPT4gYWcubmFtZSA9PT0gXCJEZWF0aFwiKTtcclxuICAgICAgICB0aGlzLmRlYXRoQW5pbS5zdGFydChmYWxzZSwgMS4wLCB0aGlzLmRlYXRoQW5pbS5mcm9tLCB0aGlzLmRlYXRoQW5pbS50bywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltLmxvb3BBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICBwbGF5ZXJCZWhhdmlvdXIuY2FtZXJhLmF0dGFjaENvbnRyb2woKTtcclxuICAgICAgICBwbGF5ZXJCZWhhdmlvdXIucGh5c2ljc0JvZHkuZGlzcG9zZSgpO1xyXG4gICAgICAgIHBsYXllckJlaGF2aW91ci5Tb3VuZFBsYXllci5QbGF5U291bmQoXCJQTEFZRVJfREVBVEhcIik7XHJcbiAgICB9O1xyXG4gICAgT25FeGl0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtEZWF0aFN0YXRlXSBPbkV4aXQoKWApO1xyXG4gICAgICAgIHRoaXMuZGVhdGhBbmltLnN0b3AoKTtcclxuICAgIH07XHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBhY3Rpb25OYW1lcyBmcm9tIFwiLi4vYWN0aW9uTmFtZXMuanNcIjtcclxuaW1wb3J0IHsgVW5pdFN0YXRlQmFzZSB9IGZyb20gXCIuLi8uLi91bml0cy91bml0U3RhdGVCYXNlLmpzXCI7XHJcbmltcG9ydCBEZWF0aFN0YXRlIGZyb20gXCIuL0RlYXRoU3RhdGUuanNcIjtcclxuaW1wb3J0IFNob290U3RhdGUgZnJvbSBcIi4vU2hvb3RTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgV2Fsa1N0YXRlIGZyb20gXCIuL1dhbGtTdGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRsZVN0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBzd2l0Y2goYWN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlKGFjdGlvbk5hbWVzLldBTEspOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdhbGtTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2UoYWN0aW9uTmFtZXMuREVBVEgpOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERlYXRoU3RhdGUoKTtcclxuICAgICAgICAgICAgfSBjYXNlKGFjdGlvbk5hbWVzLlNIT09UKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTaG9vdFN0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW0lkbGVTdGF0ZV0gT25FbnRlcigke3BsYXllckJlaGF2aW91cn0pYCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRsZUFuaW0gPSBwbGF5ZXJCZWhhdmlvdXIucGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIklkbGVcIik7XHJcbiAgICAgICAgdGhpcy5pZGxlQW5pbS5zdGFydCh0cnVlLCAxLjAsIHRoaXMuaWRsZUFuaW0uZnJvbSwgdGhpcy5pZGxlQW5pbS50bywgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbSWRsZVN0YXRlXSBPbkV4aXQoKWApO1xyXG4gICAgICAgIHRoaXMuaWRsZUFuaW0uc3RvcCgpO1xyXG4gICAgfTtcclxuICAgIE9uVXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGFjdGlvbk5hbWVzIGZyb20gXCIuLi9hY3Rpb25OYW1lcy5qc1wiO1xyXG5pbXBvcnQgeyBVbml0U3RhdGVCYXNlIH0gZnJvbSBcIi4uLy4uL3VuaXRzL3VuaXRTdGF0ZUJhc2UuanNcIjtcclxuaW1wb3J0IERlYXRoU3RhdGUgZnJvbSBcIi4vRGVhdGhTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgSWRsZVN0YXRlIGZyb20gXCIuL0lkbGVTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgV2Fsa1N0YXRlIGZyb20gXCIuL1dhbGtTdGF0ZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdFN0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBzdGF0aWMgU19TSE9PVF9WRlggPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNob290RGVsYXlTZWNvbmRzID0gMC4zMztcclxuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5zaG9vdERlbGF5U2Vjb25kcztcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkgeyBcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAoYWN0aW9uTmFtZXMuSURMRSk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSWRsZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZShhY3Rpb25OYW1lcy5ERUFUSCk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGVhdGhTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9IGNhc2UoYWN0aW9uTmFtZXMuV0FMSyk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2Fsa1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZShhY3Rpb25OYW1lcy5TVE9QX1NIT09USU5HKToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJZGxlU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltTaG9vdFN0YXRlXSBPbkVudGVyKClcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCZWhhdmlvdXIgPSBwbGF5ZXJCZWhhdmlvdXI7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuaW0gPSBwbGF5ZXJCZWhhdmlvdXIucGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkuZmluZChhZyA9PiBhZy5uYW1lID09PSBcIkd1bnBsYXlcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuaW0uc3RhcnQodHJ1ZSwgMS4wLCB0aGlzLnNob290QW5pbS5mcm9tLCB0aGlzLnNob290QW5pbS50bywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwbGF5ZXJCZWhhdmlvdXIuc2NlbmU7ICAgIFxyXG4gICAgICAgIHRoaXMubWVzaEZvclJheSA9IHBsYXllckJlaGF2aW91ci5wbGF5ZXJCb2R5VHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuQ2FzdFJheSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQmVoYXZpb3VyLnJvdGF0aW9uU3BlZWRNb2RpZmllciA9IDAuMDU7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVQYXJ0aWNsZSgpOyAgXHJcbiAgICAgICAgdGhpcy5fZGFtYWdlID0gNTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIltTaG9vdFN0YXRlXSBPbkV4aXQoKVwiKTtcclxuICAgICAgICB0aGlzLnNob290QW5pbS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yYXlIZWxwZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQmVoYXZpb3VyLnJvdGF0aW9uU3BlZWRNb2RpZmllciA9IDEuMDtcclxuICAgICAgICAvL3RoaXMubXV6emxlUGFydGljbGUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmKHRoaXMudGltZXIgPj0gdGhpcy5zaG9vdERlbGF5U2Vjb25kcykge1xyXG4gICAgICAgICAgICB0aGlzLk9uU2hvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIE9uU2hvb3QoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNIT09UIVwiKTtcclxuICAgICAgICB0aGlzLkVtaXRNdXp6bGVQYXJ0aWNsZSgpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcGh5c2ljc0VuZ2luZSA9IHRoaXMuc2NlbmUuZ2V0UGh5c2ljc0VuZ2luZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFwaHlzaWNzRW5naW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnJheUhlbHBlciB8fCAhdGhpcy5yYXlIZWxwZXIucmF5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFJheSA9IHRoaXMucmF5SGVscGVyLnJheTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNob290ISBDdXJyZW50IHJheTogXCIgKyBjdXJyZW50UmF5LmRpcmVjdGlvbi50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvb3RTdGFydFBvaW50ID0gY3VycmVudFJheS5vcmlnaW47XHJcbiAgICAgICAgY29uc3QgZW5kID0gY3VycmVudFJheS5vcmlnaW4uYWRkKGN1cnJlbnRSYXkuZGlyZWN0aW9uLnNjYWxlKGN1cnJlbnRSYXkubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhpdCA9IHBoeXNpY3NFbmdpbmUucmF5Y2FzdChzaG9vdFN0YXJ0UG9pbnQsIGVuZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImhpdD86IFwiICsgaGl0Lmhhc0hpdCk7XHJcbiAgICAgICAgaWYgKGhpdC5oYXNIaXQgJiYgaGl0LmJvZHkgJiYgaGl0LmJvZHkudHJhbnNmb3JtTm9kZSkge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgU2hvb3QgYm9keSBuYW1lICcke2hpdC5ib2R5LnRyYW5zZm9ybU5vZGUubmFtZX0nICwgdUlkOiAnJHtoaXQuYm9keS50cmFuc2Zvcm1Ob2RlLnVuaXF1ZUlkfSdgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gaGl0LmJvZHkudHJhbnNmb3JtTm9kZS51bmlxdWVJZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0gdGhpcy5wbGF5ZXJCZWhhdmlvdXIuV29ybGQ7XHJcblxyXG4gICAgICAgICAgICBpZighd29ybGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3b3JsZCBpcyBtaXNzaW5nISEhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5lbXlFbnRpdHkgPSB3b3JsZC5HZXRFbnRpdHlCeVVuaXF1ZUlkKHVuaXF1ZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15RW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVORU1ZIERFVEVDVEVEIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b21iaWVDb21wID0gZW5lbXlFbnRpdHkuR2V0Q29tcG9uZW50KFwiRW5lbXlab21iaWVCZWhhdmlvdXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgem9tYmllQ29tcC5PblNob3RSZWNpZXZlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZUNvbXAuem9tYmllUHJvcHMuRGVhbERhbWFnZSh0aGlzLl9kYW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLy9ETyBub3RoaW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgdGhpcy5wbGF5ZXJCZWhhdmlvdXIuU291bmRQbGF5ZXIuUGxheVNvdW5kKFwiUExBWUVSX1NIT1RcIik7XHJcbiAgICB9XHJcbiAgICBDYXN0UmF5KCkgeyAgICAgICBcclxuXHQgICAgLy9jb25zdCByYXkgPSBuZXcgQkFCWUxPTi5SYXkob3JpZ2luLCBkaXIsIGxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgcmF5ID0gbmV3IEJBQllMT04uUmF5KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk9yaWdpbiBQT1M6IFwiICsgcmF5Lm9yaWdpbi50b1N0cmluZygpKTsgXHJcblx0XHR0aGlzLnJheUhlbHBlciA9IG5ldyBCQUJZTE9OLlJheUhlbHBlcihyYXkpO1x0XHJcbiAgICAgICAgY29uc3QgbG9jYWxNZXNoRGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAxKTtcclxuXHQgICAgY29uc3QgbG9jYWxNZXNoT3JpZ2luID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAxMjUwLCAwLjApO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IDEwMCAqIDEwMDA7XHJcbiAgICAgICAgdGhpcy5yYXlIZWxwZXIuYXR0YWNoVG9NZXNoKHRoaXMubWVzaEZvclJheSwgbG9jYWxNZXNoRGlyZWN0aW9uLCBsb2NhbE1lc2hPcmlnaW4sIGxlbmd0aCk7XHRcclxuXHRcdHRoaXMucmF5SGVscGVyLnNob3codGhpcy5zY2VuZSwgbmV3IEJBQllMT04uQ29sb3IzKDEsIDAsIDApKTtcdFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlUGFydGljbGUoKSB7XHJcbiAgICAgICAgaWYoU2hvb3RTdGF0ZS5TX1NIT09UX1ZGWCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXV6emxlUGFydGljbGUgPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCA1MDAsIHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIC8vVGV4dHVyZSBvZiBlYWNoIHBhcnRpY2xlXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcIkFzc2V0cy90ZXh0dXJlcy9mbGFyZV90ZXh0dXJlXzAucG5nXCIsIHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIC8vIFdoZXJlIHRoZSBwYXJ0aWNsZXMgY29tZSBmcm9tXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUucGFydGljbGVFbWl0dGVyVHlwZSA9IG5ldyBCQUJZTE9OLlNwaGVyZVBhcnRpY2xlRW1pdHRlcigwLjAxKTtcclxuICAgICAgICBjb25zdCBtdXp6bGVOb2RlID0gbmV3IEJBQllMT04uVHJhbnNmb3JtTm9kZShcIm11enpsZVwiLCB0aGlzLnNjZW5lKTtcclxuICAgICAgICBtdXp6bGVOb2RlLnNldFBhcmVudCh0aGlzLnBsYXllckJlaGF2aW91ci53ZWFwb25Sb290TWVzaCk7XHJcbiAgICAgICAgbXV6emxlTm9kZS5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgbXV6emxlTm9kZS5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTAuMDIsIDAsIDAuMzUpO1xyXG4gICAgICAgIG11enpsZU5vZGUuc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuZW1pdHRlciA9IG11enpsZU5vZGU7XHJcbiAgICAgICAgY29uc3QgZW1pdFNjYWxlID0gMC41O1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1pblNjYWxlWCA9IDA7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWluU2NhbGVZID0gMDtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5tYXhTY2FsZVggPSBlbWl0U2NhbGU7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWF4U2NhbGVZID0gZW1pdFNjYWxlO1xyXG4gIFxyXG4gICAgICAgIC8vIENvbG9ycyBvZiBhbGwgcGFydGljbGVzXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDAuMywgMCk7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuNiwgMC4xNSwgMC4xNSk7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUuY29sb3JEZWFkID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDAuODIsIDAuNDMpO1xyXG4gICAgICAgIC8vIFNpemUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cclxuICAgICAgICBjb25zdCBzY2FsZSA9IDAuNTtcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5taW5TaXplID0gMS41ICogc2NhbGU7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWF4U2l6ZSA9IDIuNSAqIHNjYWxlO1xyXG4gICAgICAgIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1pbkxpZmVUaW1lID0gLjE7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWF4TGlmZVRpbWUgPSAuMTtcclxuICAgICAgICAvLyBFbWlzc2lvbiByYXRlXHJcbiAgICAgICAgbXV6emxlUGFydGljbGUubWFudWFsRW1pdENvdW50ID0gNTAwO1xyXG4gICAgICAgIC8vIEJsZW5kIG1vZGUgOiBCTEVORE1PREVfT05FT05FLCBvciBCTEVORE1PREVfU1RBTkRBUkRcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBncmF2aXR5IG9mIGFsbCBwYXJ0aWNsZXNcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAtOSwgMCk7XHJcbiAgICAgICAgLy8gRGlyZWN0aW9uIG9mIGVhY2ggcGFydGljbGUgYWZ0ZXIgaXQgaGFzIGJlZW4gZW1pdHRlZFxyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0yLCAtMiwgLTIpO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDIsIDIsIDIpO1xyXG4gICAgICAgIC8vIEFuZ3VsYXIgc3BlZWQsIGluIHJhZGlhbnNcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5taW5Bbmd1bGFyU3BlZWQgPSAwO1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1heEFuZ3VsYXJTcGVlZCA9IE1hdGguUEk7XHJcbiAgICAgICAgLy8gU3BlZWRcclxuICAgICAgICBtdXp6bGVQYXJ0aWNsZS5taW5FbWl0UG93ZXIgPSAwLjI1O1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLm1heEVtaXRQb3dlciA9IDAuMzU7XHJcbiAgICAgICAgbXV6emxlUGFydGljbGUudXBkYXRlU3BlZWQgPSAwLjA1O1xyXG4gICAgICAgIG11enpsZVBhcnRpY2xlLnN0YXJ0KCk7XHJcbiAgICAgICAgU2hvb3RTdGF0ZS5TX1NIT09UX1ZGWCA9IG11enpsZVBhcnRpY2xlO1xyXG4gICAgfVxyXG5cclxuICAgIEVtaXRNdXp6bGVQYXJ0aWNsZSgpIHtcclxuICAgICAgICBpZighU2hvb3RTdGF0ZS5TX1NIT09UX1ZGWCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNob290U3RhdGUuU19TSE9PVF9WRlgubWFudWFsRW1pdENvdW50ID0gNTAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVW5pdFN0YXRlQmFzZSB9IGZyb20gXCIuLi8uLi91bml0cy91bml0U3RhdGVCYXNlLmpzXCI7XHJcbmltcG9ydCBhY3Rpb25OYW1lcyBmcm9tIFwiLi4vYWN0aW9uTmFtZXMuanNcIjtcclxuaW1wb3J0IERlYXRoU3RhdGUgZnJvbSBcIi4vRGVhdGhTdGF0ZS5qc1wiO1xyXG5pbXBvcnQgSWRsZVN0YXRlIGZyb20gXCIuL0lkbGVTdGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Fsa1N0YXRlIGV4dGVuZHMgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UoYWN0aW9uTmFtZXMuSURMRSk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSWRsZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0gY2FzZShhY3Rpb25OYW1lcy5ERUFUSCk6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGVhdGhTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW1dhbGtTdGF0ZV0gT25FbnRlcigke3BsYXllckJlaGF2aW91cn0pYCk7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbSA9IHBsYXllckJlaGF2aW91ci5wbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheS5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiV2Fsa1wiKTtcclxuICAgICAgICB0aGlzLndhbGtBbmltLnN0YXJ0KHRydWUsIDEuMCwgdGhpcy53YWxrQW5pbS5mcm9tLCB0aGlzLndhbGtBbmltLnRvLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgT25FeGl0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtXYWxrU3RhdGVdIE9uRXhpdCgpYCk7XHJcbiAgICAgICAgdGhpcy53YWxrQW5pbS5zdG9wKCk7XHJcbiAgICB9O1xyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVW5pdEZTTUJhc2UgZnJvbSBcIi4uL3VuaXRzL3VuaXRGc21CYXNlLmpzXCI7XHJcbmltcG9ydCBJZGxlU3RhdGUgZnJvbSBcIi4vY29uY3JldGUvSWRsZVN0YXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJGU00gZXh0ZW5kcyBVbml0RlNNQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJCZWhhdmlvdXIpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXJCZWhhdmlvdXIpO1xyXG4gICAgICAgIGNvbnN0IGRlYXRoQW5pbSA9IHBsYXllckJlaGF2aW91ci5wbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheS5maW5kKGFnID0+IGFnLm5hbWUgPT09IFwiRGVhdGhcIik7O1xyXG4gICAgICAgIGRlYXRoQW5pbS5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlRGVmYXVsdFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSWRsZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdEZTTUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IodW5pdEJlaGF2aW91cikge1xyXG4gICAgICAgIHRoaXMudW5pdEJlaGF2aW91ciA9IHVuaXRCZWhhdmlvdXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLkNyZWF0ZURlZmF1bHRTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlLk9uRW50ZXIodGhpcy51bml0QmVoYXZpb3VyKTtcclxuICAgIH1cclxuXHJcbiAgICBDcmVhdGVEZWZhdWx0U3RhdGUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW1VuaXRGU01CYXNlXSBDcmVhdGVEZWZhdWx0U3RhdGUoKSBpcyBub3QgaW1wbGVtZW50ZWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFByb2Nlc3NBY3Rpb24oYWN0aW9uTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGUuSGFuZGxlQWN0aW9uKGFjdGlvbk5hbWUpO1xyXG4gICAgICAgIGlmKHN0YXRlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuT25FeGl0KClcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuT25FbnRlcih0aGlzLnVuaXRCZWhhdmlvdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuT25VcGRhdGUoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgVW5pdFN0YXRlQmFzZSB7XHJcbiAgICBIYW5kbGVBY3Rpb24oYWN0aW9uTmFtZSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kbGVBY3Rpb24oKSBub3QgaW1wbGVtZW50ZWRcIik7IH1cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7dGhyb3cgbmV3IEVycm9yKFwiT25FbnRlcigpIG5vdCBpbXBsZW1lbnRlZFwiKTt9O1xyXG4gICAgT25FeGl0KCkge3Rocm93IG5ldyBFcnJvcihcIk9uRXhpdCgpIG5vdCBpbXBsZW1lbnRlZFwiKTt9O1xyXG4gICAgT25VcGRhdGUoZGVsdGFUaW1lKSB7dGhyb3cgbmV3IEVycm9yKFwiT25VcGRhdGUoKSBub3QgaW1wbGVtZW50ZWRcIik7fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxVbml0U3RhdGUgZXh0ZW5kcyBVbml0U3RhdGVCYXNlIHtcclxuICAgIEhhbmRsZUFjdGlvbihhY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW051bGxVbml0U3RhdGVdIEhhbmRsZUFjdGlvbigke2FjdGlvbk5hbWV9KWApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW50ZXIocGxheWVyQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgW051bGxVbml0U3RhdGVdIE9uRW50ZXIoJHtwbGF5ZXJCZWhhdmlvdXJ9KWApO1xyXG4gICAgfTtcclxuICAgIE9uRXhpdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbTnVsbFVuaXRTdGF0ZV0gT25FeGl0KClgKTtcclxuICAgIH07XHJcbiAgICBPblVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBbTnVsbFVuaXRTdGF0ZV0gT25VcGRhdGUoJHtkZWx0YVRpbWV9KWApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9zaXRlR2FtZUJlaGF2aW91ciB9IGZyb20gXCIuLi9jb21tb24vZ2FtZUJlaGF2aW91ci5qc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUVudGl0eSBleHRlbmRzIENvbXBvc2l0ZUdhbWVCZWhhdmlvdXIge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihpZEtleSwgYWJzdHJhY3RNZXNoKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCk7XHJcbiAgICAgICAgdGhpcy5pZEtleSA9IGlkS2V5O1xyXG4gICAgICAgIHRoaXMuVW5pcXVlSUQgPSBhYnN0cmFjdE1lc2gudW5pcXVlSWQ7XHJcbiAgICAgICAgdGhpcy5hYnN0cmFjdE1lc2ggPSBhYnN0cmFjdE1lc2g7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c01hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIEFkZENvbXBvbmVudChnYW1lQmVoYXZpb3VyLCBpc0NhbGxDYWxsYmFja3MgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3VyVHlwZU5hbWUgPSBnYW1lQmVoYXZpb3VyLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgaWYodGhpcy5jb21wb25lbnRzTWFwLmhhcyhiZWhhdmlvdXJUeXBlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbR2FtZUVudGl0eV0gdGhlIGVudGl0eSB3aXRoIGlkICcke3RoaXMuaWRLZXl9JyBpcyBhbHJlYWR5IGhhcyBjb21wb25lbnQgd2l0aCB0eXBlICcke2JlaGF2aW91clR5cGVOYW1lfSchYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hpbGRCZWhhdmlvdXJzLnB1c2goZ2FtZUJlaGF2aW91cik7XHJcbiAgICAgICAgZ2FtZUJlaGF2aW91ci5TZXRFbnRpdHkodGhpcyk7XHJcbiAgICAgICAgaWYoaXNDYWxsQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGdhbWVCZWhhdmlvdXIuT25Bd2FrZSgpO1xyXG4gICAgICAgICAgICBnYW1lQmVoYXZpb3VyLk9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c01hcC5zZXQoYmVoYXZpb3VyVHlwZU5hbWUsIGdhbWVCZWhhdmlvdXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIEdldENvbXBvbmVudChiZWhhdmlvdXJUeXBlTmFtZSkge1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbXBvbmVudHNNYXAuaGFzKGJlaGF2aW91clR5cGVOYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFtHYW1lRW50aXR5XSB0aGUgZW50aXR5IHdpdGggaWQgJyR7dGhpcy5pZEtleX0nIGhhcyBub3QgY29tcG9uZW50IG9mIHR5cGU6ICcke2JlaGF2aW91clR5cGVOYW1lfSchYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzTWFwLmdldChiZWhhdmlvdXJUeXBlTmFtZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmVJbml0aWFsaXplciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgbG9jYXRpb25NZXNoZXMpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbk1lc2hlcyA9IGxvY2F0aW9uTWVzaGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIEluaXRpYWxpemVBc3luYygpIHtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5Jbml0UGh5c2ljc0FzeW5jKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYW1iaWVudENvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDEsMSwxKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIEluaXRQaHlzaWNzQXN5bmMoKSB7XHJcbiAgICAgICAgY29uc3QgZ3Jhdml0eUZhY3RvciA9IDE7XHJcbiAgICAgICAgY29uc3QgZ3Jhdml0eVZlY3RvciA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTkuODEgKiBncmF2aXR5RmFjdG9yLCAwKTtcclxuICAgICAgICBjb25zdCBwaHlzaWNzUGx1Z2luID0gbmV3IEJBQllMT04uSGF2b2tQbHVnaW4oKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmVuYWJsZVBoeXNpY3MoZ3Jhdml0eVZlY3RvciwgcGh5c2ljc1BsdWdpbik7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBsb2NNZXNoIG9mIHRoaXMubG9jYXRpb25NZXNoZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBwaHlzaWNzQm9keSA9IG5ldyBCQUJZTE9OLlBoeXNpY3NCb2R5KGxvY01lc2gsIEJBQllMT04uUGh5c2ljc01vdGlvblR5cGUuU1RBVElDLCBmYWxzZSwgdGhpcy5zY2VuZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IEJBQllMT04uUGh5c2ljc1NoYXBlTWVzaChcclxuICAgICAgICAgICAgICAgIGxvY01lc2gsICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUgIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwaHlzaWNzQm9keS5zaGFwZSA9IHNoYXBlO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXBwbHkgcGh5c2ljcyBmb3IgbWVzaDogXCIgKyBsb2NNZXNoLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvc2l0ZUdhbWVCZWhhdmlvdXIgfSBmcm9tIFwiLi4vY29tbW9uL2dhbWVCZWhhdmlvdXIuanNcIlxyXG5leHBvcnQgY2xhc3MgV29ybGRCZWhhdmlvdXIgZXh0ZW5kcyBDb21wb3NpdGVHYW1lQmVoYXZpb3VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFtdKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuX2VudGl0aWVzQnlVaWQgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBBZGRFbnRpdHkoZ2FtZUVudGl0eSwgaXNDYWxsQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgaWYoaXNDYWxsQ2FsbGJhY2tzKXtcclxuICAgICAgICAgICAgZ2FtZUVudGl0eS5PbkF3YWtlKCk7XHJcbiAgICAgICAgICAgIGdhbWVFbnRpdHkuT25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoaWxkQmVoYXZpb3Vycy5wdXNoKGdhbWVFbnRpdHkpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGdhbWVFbnRpdHkuaWRLZXksIGdhbWVFbnRpdHkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYFtXb3JsZEJlaGF2aW91cl0gc2V0IGVudGl0eSB3aXRoIGlkICcke2dhbWVFbnRpdHkuaWRLZXl9JywgdWlkOiAnJHtnYW1lRW50aXR5LlVuaXF1ZUlEfSdgKTtcclxuICAgICAgICB0aGlzLl9lbnRpdGllc0J5VWlkLnNldChnYW1lRW50aXR5LlVuaXF1ZUlELCBnYW1lRW50aXR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBHZXRFbnRpdHkoaWRLZXkpIHtcclxuICAgICAgICBpZighdGhpcy5lbnRpdGllcy5oYXMoaWRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltXb3JsZEJlaGF2aW91cl0gVGhlcmUgaXMgbm8gZW50aXR5IHdpdGggaWQ6IFwiICsgaWRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5nZXQoaWRLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEVudGl0eUJ5VW5pcXVlSWQodW5pcXVlSWRLZXkpIHtcclxuICAgICAgICBpZighdGhpcy5fZW50aXRpZXNCeVVpZC5oYXModW5pcXVlSWRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltXb3JsZEJlaGF2aW91cl0gVGhlcmUgaXMgbm8gZW50aXR5IHdpdGggdW5pcXVlSWRLZXk6IFwiICsgdW5pcXVlSWRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXNCeVVpZC5nZXQodW5pcXVlSWRLZXkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVuaXRQcm9wcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhwVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuSHBPYnNlcnZhYmxlID0gbmV3IEJBQllMT04uT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1heEhwVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuTWF4SHBPYnNlcnZhYmxlID0gbmV3IEJBQllMT04uT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc0RlYWRPYnNlcnZhYmxlID0gbmV3IEJBQllMT04uT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1heEhwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heEhwVmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFNldE1heEhwKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYXhIcFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5NYXhIcE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMubWF4SHBWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0SHAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHBWYWx1ZTtcclxuICAgIH1cclxuICAgIFNldEhwKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ocFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5IcE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuaHBWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0SXNEZWFkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRGVhZDtcclxuICAgIH1cclxuXHJcbiAgICBTZXRJc0RlYWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmlzRGVhZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuSXNEZWFkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcy5pc0RlYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIERlYWxEYW1hZ2UoZGFtYWdlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEhwID0gdGhpcy5HZXRIcCgpO1xyXG4gICAgICAgIGxldCByZXN1bHRIcCA9IGN1cnJlbnRIcCAtIGRhbWFnZTtcclxuICAgICAgICBpZihyZXN1bHRIcCA8IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0SHAgPSAwO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGhpcy5TZXRIcChyZXN1bHRIcCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVVuaXRQcm9wcyBmcm9tIFwiLi9nYW1lVW5pdFByb3BzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJQcm9wcyBleHRlbmRzIEdhbWVVbml0UHJvcHMge1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgR2FtZVVuaXRQcm9wcyBmcm9tIFwiLi9nYW1lVW5pdFByb3BzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVQcm9wcyBleHRlbmRzIEdhbWVVbml0UHJvcHMge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4vY29tbW9uL21vZGVsTG9hZGVyLmpzXCJcclxuaW1wb3J0IHsgU2NlbmVJbml0aWFsaXplciB9IGZyb20gXCIuL2dhbWUvc2NlbmVJbml0aWFsaXplci5qc1wiO1xyXG5pbXBvcnQgSGF2b2tQaHlzaWNzIGZyb20gXCIuLi9IYXZva1BoeXNpY3NfZXMuanNcIjtcclxuaW1wb3J0IHsgV29ybGRCZWhhdmlvdXIgfSBmcm9tIFwiLi9nYW1lL3dvcmxkQmVoYXZpb3VyLmpzXCI7XHJcbmltcG9ydCB7IExvY2FsUGxheWVyQmVoYXZpb3VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2NhbFBsYXllckJlaGF2aW91ci5qc1wiO1xyXG5pbXBvcnQgeyBHYW1lRW50aXR5IH0gZnJvbSBcIi4vZ2FtZS9nYW1lRW50aXR5LmpzXCI7XHJcbmltcG9ydCB7IENoYXJhY3Rlck1vZGVsTG9hZGVyIH0gZnJvbSBcIi4vY2hhcmFjdGVyL2NoYXJhY3Rlck1vZGVsTG9hZGVyLmpzXCI7XHJcbmltcG9ydCBQbGF5ZXJHVUlCZWhhdmlvdXIgZnJvbSBcIi4vY29tcG9uZW50cy9wbGF5ZXJHVUlCZWhhdmlvdXIuanNcIjtcclxuaW1wb3J0IEdhbWVSdWxlc0JlaGF2aW91ciBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVSdWxlc0JlaGF2aW91ci5qc1wiO1xyXG5pbXBvcnQgR2FtZVRpbWVyIGZyb20gXCIuL2NvbW1vbi9HYW1lVGltZXIuanNcIjtcclxuaW1wb3J0IFNvdW5kUGxheWVyIGZyb20gXCIuL2NvbW1vbi9Tb3VuZFBsYXllci5qc1wiO1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lXCIpO1xyXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhpZGVNYWluTWVudSgpO1xyXG4gICAgc3RhcnRHYW1lKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGlkZU1haW5NZW51KCkge1xyXG4gICAgY29uc3QgbWFpbk1lbnVSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvbnNcIik7XHJcbiAgICBtYWluTWVudVJvb3QuaGlkZGVuID0gdHJ1ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyQ2FudmFzXCIpOyAvLyBHZXQgdGhlIGNhbnZhcyBlbGVtZW50XHJcblxyXG4gICAgY29uc3QgSEFWT0sgPSBhd2FpdCBIYXZva1BoeXNpY3MoKTtcclxuICAgIGdsb2JhbFRoaXMuSEsgPSBIQVZPSztcclxuXHJcbiAgICBsZXQgcGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkgPSBbXTtcclxuICAgIGxldCBnYW1lQ2FtZXJhID0gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3QgZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKGNhbnZhcywgdHJ1ZSk7IC8vIEdlbmVyYXRlIHRoZSBCQUJZTE9OIDNEIGVuZ2luZVxyXG5cclxuICAgIC8vIHNob3cgTG9hZGluZyBVSVxyXG4gICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IG5ldyBCQUJZTE9OLkRlZmF1bHRMb2FkaW5nU2NyZWVuKGNhbnZhcyk7XHJcbiAgICBsb2FkaW5nU2NyZWVuLmRpc3BsYXlMb2FkaW5nVUkoKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVTY2VuZSA9ICBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGJhc2ljIEJhYnlsb24gU2NlbmUgb2JqZWN0XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYW5kIHBvc2l0aW9ucyBhIGZyZWUgY2FtZXJhXHJcbiAgICAgICAgZ2FtZUNhbWVyYSA9IG5ldyBCQUJZTE9OLkZvbGxvd0NhbWVyYShcIkZvbGxvd0NhbVwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEwLCAtMTApLCBzY2VuZSk7XHJcbiAgICAgICAgLy8gVGFyZ2V0cyB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxyXG4gICAgXHJcbiAgICAgICAgLy8gVGhpcyBhdHRhY2hlcyB0aGUgY2FtZXJhIHRvIHRoZSBjYW52YXNcclxuICAgICAgICBnYW1lQ2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgbGlnaHQsIGFpbWluZyAwLDEsMCAtIHRvIHRoZSBza3lcclxuICAgICAgICBjb25zdCBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBcclxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xyXG4gICAgICAgIC8vIERpbSB0aGUgbGlnaHQgYSBzbWFsbCBhbW91bnQgLSAwIHRvIDFcclxuICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjc7XHJcbiBcclxuICAgICAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBuZXcgTW9kZWxMb2FkZXIoc2NlbmUsIG51bGwsIFwiLi9Bc3NldHMvbG9jYXRpb24vXCIsIFwic2NlbmUuZ2x0ZlwiKS5Mb2FkQXN5bmMoKTtcclxuICAgICAgICBjb25zdCBsb2NhdGlvbk1lc2hlcyA9IGxvY2F0aW9uRGF0YS5tZXNoZXM7XHJcbiAgICAgICAgbG9jYXRpb25NZXNoZXNbMF0ubmFtZSA9IFwiTG9jYXRpb25cIjtcclxuICAgICAgICBjb25zdCBtZXNoZXMgPSAgXHJcbiAgICAgICAgICAgIGxvY2F0aW9uTWVzaGVzWzBdXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRyZW4oKVswXVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkcmVuKClbMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgbmV3IFNjZW5lSW5pdGlhbGl6ZXIoc2NlbmUsIG1lc2hlcykuSW5pdGlhbGl6ZUFzeW5jKCk7XHJcbiAgICAgICAgcGxheWVyQW5pbWF0aW9uc0dyb3VwQXJyYXkgPSBhd2FpdCBuZXcgQ2hhcmFjdGVyTW9kZWxMb2FkZXIoc2NlbmUpLkxvYWRBbmRTZXR1cE1vZGVsQXN5bmMoKTtcclxuICAgICAgICByZXR1cm4gc2NlbmU7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2NlbmUgPSBhd2FpdCBjcmVhdGVTY2VuZSgpOyAvL0NhbGwgdGhlIGNyZWF0ZVNjZW5lIGZ1bmN0aW9uXHJcblxyXG4gICAgY29uc3Qgd29ybGQgPSBuZXcgV29ybGRCZWhhdmlvdXIoKTtcclxuXHJcbiAgICBHYW1lVGltZXIuU3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgIEdhbWVUaW1lci5TdGFydFRpbWVyKCk7XHJcblxyXG4gICAgY29uc3Qgc291bmRQbGF5ZXIgPSBuZXcgU291bmRQbGF5ZXIoKVxyXG4gICAgICAgIC5QcmVsb2FkU291bmQoXCJQTEFZRVJfU0hPVFwiLCBcIi4vQXNzZXRzL3NvdW5kcy9qb2hhbmRlZWNrZV9fc2hvcnQtZ3Vuc2hvdC53YXZcIilcclxuICAgICAgICAuUHJlbG9hZFNvdW5kKFwiWk9NQklFX1BVTkNIXCIsIFwiLi9Bc3NldHMvc291bmRzL21lcnJpY2swNzlfX3B1bmNoMi53YXZcIilcclxuICAgICAgICAuUHJlbG9hZFNvdW5kKFwiWk9NQklFX0FUVEFDS0VEXCIsIFwiLi9Bc3NldHMvc291bmRzL3RvbnNpbDVfX3pvbWJpZS1wYWluLTYud2F2XCIpXHJcbiAgICAgICAgLlByZWxvYWRTb3VuZChcIlBMQVlFUl9ERUFUSFwiLCBcIi4vQXNzZXRzL3NvdW5kcy9tYWxlLWRlYXRoLWNyeS0zLndhdlwiKVxyXG4gICAgICAgIC5QcmVsb2FkU291bmQoXCJaT01CSUVfREVBVEhcIiwgXCIuL0Fzc2V0cy9zb3VuZHMvbWlzdGVya2lkeF9fem9tYmllX2RpZV8xLndhdlwiKTtcclxuXHJcbiAgICBjb25zdCBnYW1lUnVsZXNFbnRpdHkgPSBuZXcgR2FtZUVudGl0eShcclxuICAgICAgICBcIkdBTUVfUlVMRVNcIixcclxuICAgICAgICBuZXcgQkFCWUxPTi5UcmFuc2Zvcm1Ob2RlKFwiR2FtZVJ1bGVzXCIsIHNjZW5lKVxyXG4gICAgKVxyXG4gICAgICAgIC5BZGRDb21wb25lbnQobmV3IEdhbWVSdWxlc0JlaGF2aW91cihzY2VuZSwgd29ybGQsIHNvdW5kUGxheWVyKSwgZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckVudGl0eSA9IG5ldyBHYW1lRW50aXR5KFxyXG4gICAgICAgIFwiTE9DQUxfUExBWUVSXCIsXHJcbiAgICAgICAgc2NlbmUuZ2V0TWVzaEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZHJlbigpWzBdLFxyXG4gICAgKVxyXG4gICAgICAgIC5BZGRDb21wb25lbnQobmV3IExvY2FsUGxheWVyQmVoYXZpb3VyKHNjZW5lLCBnYW1lQ2FtZXJhLCBwbGF5ZXJBbmltYXRpb25zR3JvdXBBcnJheSwgd29ybGQsIHNvdW5kUGxheWVyKSwgZmFsc2UpXHJcbiAgICAgICAgLkFkZENvbXBvbmVudChuZXcgUGxheWVyR1VJQmVoYXZpb3VyKCkpO1xyXG5cclxuICAgIHdvcmxkXHJcbiAgICAgICAgLkFkZEVudGl0eShcclxuICAgICAgICAgICAgcGxheWVyRW50aXR5LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgIClcclxuICAgICAgICAuQWRkRW50aXR5KFxyXG4gICAgICAgICAgICBnYW1lUnVsZXNFbnRpdHksXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKVxyXG4gICAgXHJcbiAgICBhd2FpdCB3b3JsZC5Jbml0QXN5bmMoKTtcclxuICAgIFxyXG4gICAgd29ybGQuT25Bd2FrZSgpO1xyXG4gICAgd29ybGQuT25TdGFydCgpO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGEgcmVuZGVyIGxvb3AgdG8gcmVwZWF0ZWRseSByZW5kZXIgdGhlIHNjZW5lXHJcbiAgICBlbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IGVuZ2luZS5nZXREZWx0YVRpbWUoKSAvIDEwMDAuMDsgLy8gbXMgLT4gcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgd29ybGQuT25VcGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XHJcbiAgICB9KTtcclxuICAgIC8vIFdhdGNoIGZvciBicm93c2VyL2NhbnZhcyByZXNpemUgZXZlbnRzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVuZ2luZS5yZXNpemUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCFHYW1lUnVsZXNCZWhhdmlvdXIuSXNQcm9kdWN0aW9uKVxyXG4gICAgICAgIHNjZW5lLmRlYnVnTGF5ZXIuc2hvdygpO1xyXG5cclxuXHJcbiAgICBsb2FkaW5nU2NyZWVuLmhpZGVMb2FkaW5nVUkoKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9