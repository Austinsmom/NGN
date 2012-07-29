Ext.data.JsonP.NGN_web_RequestProcessor({"component":false,"html_meta":{"author":null,"private":null},"tagname":"class","extends":"Class","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"author":["Corey Butler"],"private":true},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"NGN.web.RequestProcessor","meta":{},"name":"enabled","id":"cfg-enabled"},{"tagname":"cfg","owner":"NGN.web.RequestProcessor","meta":{},"name":"fn","id":"cfg-fn"},{"tagname":"cfg","owner":"NGN.web.RequestProcessor","meta":{},"name":"ignoreContinue","id":"cfg-ignoreContinue"},{"tagname":"cfg","owner":"NGN.web.RequestProcessor","meta":{},"name":"type","id":"cfg-type"}],"method":[{"tagname":"method","owner":"NGN.web.RequestProcessor","meta":{},"name":"disable","id":"method-disable"},{"tagname":"method","owner":"NGN.web.RequestProcessor","meta":{},"name":"enable","id":"method-enable"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"}],"event":[],"property":[{"tagname":"property","owner":"NGN.web.RequestProcessor","meta":{"private":true},"name":"_fn","id":"property-_fn"},{"tagname":"property","owner":"NGN.web.RequestProcessor","meta":{"private":true},"name":"_used","id":"property-_used"},{"tagname":"property","owner":"NGN.web.RequestProcessor","meta":{},"name":"processor","id":"property-processor"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><strong>NGN.web.RequestProcessor</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/NGNX.web.ApiRequestHelper' rel='NGNX.web.ApiRequestHelper' class='docClass'>NGNX.web.ApiRequestHelper</a></div><div class='dependency'><a href='#!/api/NGNX.web.WebRequestHelper' rel='NGNX.web.WebRequestHelper' class='docClass'>NGNX.web.WebRequestHelper</a></div><h4>Files</h4><div class='dependency'><a href='source/RequestProcessor.html#NGN-web-RequestProcessor' target='_blank'>RequestProcessor.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>A middleware class for processing web requests with custom logic.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-enabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-cfg-enabled' class='name expandable'>enabled</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>If this is set to false, the processor is ignored. ...</div><div class='long'><p>If this is set to <code>false</code>, the processor is ignored.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-fn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-cfg-fn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-cfg-fn' class='name expandable'>fn</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function used for processing the request. ...</div><div class='long'><p>The function used for processing the request. This method receives three arguments: <code>request</code>, <code>response</code>, and <code>continue</code> (respectively).\n<code>continue</code> is a method that should always be executed at the end of the processor, otherwise the request may hang. This is automatically\ndone if <a href=\"#!/api/NGN.web.RequestProcessor-cfg-ignoreContinue\" rel=\"NGN.web.RequestProcessor-cfg-ignoreContinue\" class=\"docClass\">ignoreContinue</a> is <code>false</code>.</p>\n\n<p><strong>Example</strong></p>\n\n<pre><code>    function(req,res,cont){\n        if (request.)\n</code></pre>\n\n<p>}</p>\n</div></div></div><div id='cfg-ignoreContinue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-cfg-ignoreContinue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-cfg-ignoreContinue' class='name expandable'>ignoreContinue</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>When set to true, the middleware fn must explicity call the continue() method. ...</div><div class='long'><p>When set to <code>true</code>, the middleware <a href=\"#!/api/NGN.web.RequestProcessor-cfg-fn\" rel=\"NGN.web.RequestProcessor-cfg-fn\" class=\"docClass\">fn</a> must explicity call the <code>continue()</code> method.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-cfg-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of processor. ...</div><div class='long'><p>The type of processor. Acceptable values are listed in the order executed:</p>\n\n<ul>\n<li>preauthentication</li>\n<li>postauthentication</li>\n<li>preauthorization</li>\n<li>postauthorization</li>\n<li>prerequest</li>\n<li>postrequest</li>\n</ul>\n\n\n<p>These are only processed if the NGN.core.HttpServers uses them.</p>\n<p>Defaults to: <code>prerequest</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_fn' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-property-_fn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-property-_fn' class='name expandable'>_fn</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The wrapper function that is called by the NGN.core.HttpServer. ...</div><div class='long'><p>The wrapper function that is called by the <a href=\"#!/api/NGN.core.HttpServer\" rel=\"NGN.core.HttpServer\" class=\"docClass\">NGN.core.HttpServer</a>.</p>\n<p>Defaults to: <code>{value: null, enumerable: true, writable: true}</code></p></div></div></div><div id='property-_used' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-property-_used' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-property-_used' class='name expandable'>_used</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>@proeprty {Boolean}\nIndicates the processor instance is currently in use by a NGN.core.HttpServer. ...</div><div class='long'><p>@proeprty {Boolean}\nIndicates the processor instance is currently in use by a <a href=\"#!/api/NGN.core.HttpServer\" rel=\"NGN.core.HttpServer\" class=\"docClass\">NGN.core.HttpServer</a>.</p>\n<p>Defaults to: <code>{value: false, enumerable: false, writable: true}</code></p></div></div></div><div id='property-processor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-property-processor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-property-processor' class='name not-expandable'>processor</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>The processor function.</p>\n</div><div class='long'><p>The processor function.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-disable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Toggle the middleware on/off ...</div><div class='long'><p>Toggle the middleware on/off</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.RequestProcessor'>NGN.web.RequestProcessor</span><br/><a href='source/RequestProcessor.html#NGN-web-RequestProcessor-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.RequestProcessor-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable the middleware ...</div><div class='long'><p>Enable the middleware</p>\n</div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","private":true,"name":"NGN.web.RequestProcessor","aliases":{},"superclasses":["Class"],"requires":[],"id":"class-NGN.web.RequestProcessor","subclasses":["NGNX.web.ApiRequestHelper","NGNX.web.WebRequestHelper"],"files":[{"href":"RequestProcessor.html#NGN-web-RequestProcessor","filename":"RequestProcessor.js"}]});