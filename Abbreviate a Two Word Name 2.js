function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}