function Base(){
  this.handles = [];   
}

Base.prototype.on = function(type,fn){
    var obj = {};
    obj[type] = fn.call(this);
    this.handles.push(obj)
}

Base.prototype.trigger = function(type,value){
    this.handles.forEach((items)=>{
        for(var key in items){
            if(key === type){
                items[key].call(this,value) 
            }
        }
    });
}

Base.extend = function(){
   var args = arguments || []
   var argsArr = Array.prototype.slice.call(args);
   var F = function () {
       Base.call(this)
   }
   F.prototype = new this()
   argsArr.forEach((items)=>{
       for(var key in items){
          F.prototype[key] = items[key]
          F[key] = items[key]
       }
   })
   
   F.prototype.constructor = F;
   
   for(var item in this){
    if(this.hasOwnProperty(item)){
        F[item] = this[item]
    }
   }

   return F;
};

module.exports = Base