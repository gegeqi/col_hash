function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [], hash = {};
  for(var j=0,elem;(elem = collection_b[j]);j++){
  		hash[elem]=true;
  		}
  for(var i=0,key;(key = collection_a[i]) != null;i++){

  	if(hash[key]){
         result.push(key);
    }
  }
  return result;
}

module.exports = collect_same_elements;
