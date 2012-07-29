Ext.data.JsonP.NGN_core_Command({"component":false,"html_meta":{"private":null},"tagname":"class","extends":"NGN.core","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"private":true},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"NGN.core","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"createRef","id":"method-createRef"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"NGN.core.Command","meta":{},"name":"exec","id":"method-exec"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"on","id":"method-on"}],"event":[{"tagname":"event","owner":"NGN.core.Command","meta":{},"name":"close","id":"event-close"},{"tagname":"event","owner":"NGN.core.Command","meta":{},"name":"disconnect","id":"event-disconnect"},{"tagname":"event","owner":"NGN.core.Command","meta":{},"name":"exit","id":"event-exit"},{"tagname":"event","owner":"NGN.core.Command","meta":{},"name":"message","id":"event-message"},{"tagname":"event","owner":"NGN.core.Command","meta":{},"name":"response","id":"event-response"}],"property":[{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><strong>NGN.core.Command</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Command.html#NGN-core-Command' target='_blank'>Command.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>A light utility wrapper around node's child_process.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-prototype' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRef' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-createRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-createRef' class='name expandable'>createRef</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, Booean overwriteExisting</span> )</div><div class='description'><div class='short'>Creates a global variable. ...</div><div class='long'><p>Creates a global variable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The namespace to be created.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object which is being referenced.</p>\n</div></li><li><span class='pre'>overwriteExisting</span> : Booean<div class='sub-desc'><p>Recreate the namespace using the new object.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-exec' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-method-exec' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-method-exec' class='name expandable'>exec</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> cmd, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> options], <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Execute a command using a node child_process. ...</div><div class='long'><p>Execute a command using a <a href=\"http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback\">node child_process</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmd</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Command</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Options</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The callback method to execute upon completion of the command. Three arguments are passed: <code>error</code>, <code>stdout</code>, and <code>stderr</code>.</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the <a href=\"#!/api/NGN-property-BUS\" rel=\"NGN-property-BUS\" class=\"docClass\">NGN.BUS</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-event-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-event-close' class='name expandable'>close</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the process closes. ...</div><div class='long'><p>Fired when the process closes.</p>\n</div></div></div><div id='event-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-event-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-event-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the process disconnects. ...</div><div class='long'><p>Fired when the process disconnects.</p>\n</div></div></div><div id='event-exit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-event-exit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-event-exit' class='name expandable'>exit</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the process exits. ...</div><div class='long'><p>Fired when the process exits.</p>\n</div></div></div><div id='event-message' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-event-message' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-event-message' class='name expandable'>message</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the process responds with a message. ...</div><div class='long'><p>Fired when the process responds with a message. This differs from <a href=\"#!/api/NGN.core.Command-event-response\" rel=\"NGN.core.Command-event-response\" class=\"docClass\">response</a> based on what is returned.</p>\n</div></div></div><div id='event-response' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.Command'>NGN.core.Command</span><br/><a href='source/Command.html#NGN-core-Command-event-response' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Command-event-response' class='name expandable'>response</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the process responds with a message. ...</div><div class='long'><p>Fired when the process responds with a message. This differs from <a href=\"#!/api/NGN.core.Command-event-message\" rel=\"NGN.core.Command-event-message\" class=\"docClass\">message</a> based on wht is returned.</p>\n</div></div></div></div></div></div></div>","private":true,"name":"NGN.core.Command","aliases":{},"superclasses":["Class","NGN.core"],"requires":[],"id":"class-NGN.core.Command","subclasses":[],"files":[{"href":"Command.html#NGN-core-Command","filename":"Command.js"}]});