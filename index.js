var recipes = {
  ingredients: 'water, salt, meat',
  time: 5
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
}

function deleteFromObjectByKey(object, key){
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object;
}