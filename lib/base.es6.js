class Base {
    constructor(){
        //this.handles = []
        this.events = {}
    }
    // on(type,fn){
    //   var obj = {}
    //   obj[typd] = fn
    //   this.handles.push(obj)
    // }
    on(event,fn){
        (this.events[event] = this.events[event] || [])
         .push(fn)
    }

    // trigger(type,args){
    //     for(let temp of this.handles){
    //         if(Object.keys(temp)[0] === type){
    //             temp[type](args)
    //         }
    //     }
    // }

    trigger(event,value){
        (this.events[event] || [])
          .forEach((fn)=>{
              fn.call(this,value)
          })
    }
}

module.exports = Base