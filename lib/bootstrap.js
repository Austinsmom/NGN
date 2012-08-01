require('colors');
var fs  = require('fs'),
	p	= require('path');

// Array prototype additions
Array.prototype.remove = function(from, to) {
	if(from.isString()){
  		while(this.indexOf(from) !== -1){
  			this.slice(this.indexOf(from),1);
  		}
  		return this;
  	} else {
  		var rest = this.slice((to || from) + 1 || this.length);
  		this.length = from < 0 ? this.length + from : from;
  		return this.push.apply(this, rest);
	}
};

// Loop through the library and require each of the modules
var namespace = {};
require('wrench').readdirSyncRecursive(__dirname).forEach(function( file ){
    if (p.join(__dirname,file) !== __filename 
    	&& file !== 'NGN.core.js' 
    	&& file !== 'NGN.js'
    	&& file !== 'BaseClass.js' 
    	&& file !== 'bootstrap.js' 
    	&& file.indexOf('.js') >= 0) {
        var path    = p.normalize(file).split(p.sep),
            pkg     = namespace;
        
        for (var position=0; position<path.length; position++) {

            if (pkg[path[position].replace('.js','')] == undefined)
                pkg[path[position].replace('.js','')] = position == path.length-1 ? require(p.join(__dirname,file)) : {};
            
            if (position !== path.length-1)
                pkg = pkg[path[position]];
        }

    }
});

// Include the namespace
var NGN = require('./NGN');

// Export the module as a global variable
global.__NGN = new NGN({namespace:namespace});

// Create Extension & Pointers
global.__NGNX = __NGN.ngnx || {};
Object.defineProperty(global,'NGNX',{
	enumerable:	true,
	get:		function(){ return global.__NGNX; }
});
Object.defineProperty(global,'ngnx',{
	enumerable:	true,
	get:		function(){ return global.__NGNX; }
});

// Remove redundant namespace for NGNX
if (global.__NGN.ngnx !== undefined)
	delete global.__NGN.ngnx;

// Create Primary Pointers
Object.defineProperty(global,'NGN',{
	enumerable:	true,
	get:		function(){ return global.__NGN;}
});
Object.defineProperty(global,'ngn',{
	enumerable:	true,
	get:		function(){ return global.__NGN;}
});

// Include any API custom libraries
var ng          = {};
function extendAPI(dir) {
	
	dir = fs.existsSync(dir) == true ? p.resolve(dir) : p.join(process.cwd(),dir);
	
	var newglobals = fs.readdirSync(dir);

	// Add custom extension libraries
	for (var i=0; i<newglobals.length; i++){
	    if (    newglobals[i].indexOf('.js') < 0 
	        &&  newglobals[i].indexOf('.md') < 0 
	        &&  newglobals[i].indexOf('.json') < 0
	        // Add more?
	    ) {
	        // New global variables
	        ng[newglobals[i]] = {};
	        require('wrench').readdirSyncRecursive(p.join(dir,newglobals[i])).forEach(function( file ){
	            if (p.join(__dirname,file) !== __filename && file.indexOf('.js') >= 0) {
	                var path    = p.basename(file).split(p.sep),
	                    pkg     = ng[newglobals[i]];
	              
	                for (var position=0; position<path.length; position++) {
	                    
	                    if (pkg[path[position]] == undefined)
	                        pkg[path[position]] = position == path.length-1 ? require(p.join(dir,newglobals[i],file)) : {};
	                    
	                    if (position !== path.length-1)
	                        pkg = pkg[path[position]];
	                }   
	            }
	        });
	        global[newglobals[i].toUpperCase()] =
	        global[newglobals[i].toLowerCase()] =
	        global[newglobals[i]] = ng[newglobals[i]];
	        
	        global.__NGN._xtn.push(newglobals[i]);
	    }
	}
}

/*
 * Process the configuration
 * Look for a configuration file called ngn.config.json 
 */
var root = process.cwd();
if (fs.existsSync(p.join(root,'ngn.config.json'))) {
	var _cfg = require(p.join(root,'ngn.config.json'));
	for (var item in _cfg){
		if (_cfg.hasOwnProperty(item)){
			switch (item.trim().toLowerCase()) {
				case 'extensions':
					if (Array.isArray(_cfg[item])) {
						for (var i=0;i<_cfg[item].length;i++){
							if (!fs.existsSync(_cfg[item][i]))
								console.log('ERROR:'.red.bold.underline+' Unable to instantiate API at '.red+_cfg[item][i].red.bold);
							else
								extendAPI(_cfg[item][i]);
						}
					}
					break;
				/*case 'application':
					for(var appItem in _cfg['application']){
						if(_cfg['application'].hasOwnProperty(appItem)){
							global.application[appItem] = _cfg['application'][appItem]; 
						}
					}
					break;*/
				default:
					currentEnv = (process.env.NODE_ENV||'default').toString().trim().toLowerCase();
					if (currentEnv == item.trim().toLowerCase()){
						for(var prop in _cfg[item]){
							if (_cfg[item].hasOwnProperty(prop)){
								global.__NGN.createConfigurationProperty(prop,_cfg[item][prop]);
							}
						}
					}
					break;
			}
		}
	}
}



// Export as module
module.exports = exports = function( config ) {
    
    var scope = typeof config == 'string' ? config : null; 
    
    config = config || {};
    
    scope = scope !== null ? scope : (config.scope == 'application' ? 'NGN' : config.scope || 'NGN');
    
    if (scope !== 'NGN')
        delete global.NGN;
    
    if ( typeof config === 'object' ) {
        if (config.scope !== undefined)
            delete config.scope;
        global.__NGN = new NGN(config);
    }
    
    Object.defineProperty(global,scope,{
    	enumerable:	true,
    	get:		function(){ return global.__NGN; }
    });
    
    Object.defineProperty(global,scope+'X',{
    	enumerable:	true,
    	get:		function(){ return global.__NGNX; }
    });

};