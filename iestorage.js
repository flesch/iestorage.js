(function(){
  if (!("localStorage" in window) && document.documentElement.addBehavior) {
    
    window.localStorage = (function(){
            
      var db, name = "localStorage", attr;
      
      db = document.getElementsByTagName("head")[0].appendChild(document.createElement("div"));
      db.addBehavior("#default#userData");
      db.load(name);
      
      attr = db.XMLDocument.documentElement.attributes;
      
      return {
        
        length: attr.length,
        
        getItem: function(key) {
          return db.getAttribute(key);
        },
        
        setItem: function(key, value) {
          db.setAttribute(key, value + "");
          db.save(name);
          this.length = attr.length;
        },
        
        removeItem: function(key) {
          db.removeAttribute(key);
          db.save(name);
          this.length = attr.length;
        },
        
        clear: function(){
          for (var i = 0, a; a = attr[i]; i++) {
            this.removeItem(a.name);
          }
        },
        
        key: function(index){
          if (!index && attr[0]) {
            return attr[0].name;
          }
          return attr[index] ? attr[index].name : null;
        }
        
      };
    })();
    
  }
})();