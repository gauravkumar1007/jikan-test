
export function getProp(object,keys,defaultVal){
    keys = Array.isArray( keys )? keys : keys.split('.');
    object = object[keys[0]];
    if( object && keys.length>1 ){
        return getProp( object, keys.slice(1) );
    }
    return object === undefined? defaultVal : object;
}

export function cutString(text, len){
    let limit = len || 50;
    if(text && typeof(text) === "string")
        return text.length < limit ? text : `${text.substr(0,limit - 1)}...`;
    return text;
}