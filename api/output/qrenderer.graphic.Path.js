Ext.data.JsonP.qrenderer_graphic_Path({"tagname":"class","name":"qrenderer.graphic.Path","autodetected":{},"files":[{"filename":"Path.js","href":"Path.html#qrenderer-graphic-Path"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"__dirtyPath","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-__dirtyPath","meta":{"private":true}},{"name":"path","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-path","meta":{"readonly":true}},{"name":"segmentIgnoreThreshold","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-segmentIgnoreThreshold","meta":{}},{"name":"strokeContainThreshold","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-strokeContainThreshold","meta":{}},{"name":"subPixelOptimize","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-subPixelOptimize","meta":{}},{"name":"type","tagname":"property","owner":"qrenderer.graphic.Path","id":"property-type","meta":{}},{"name":"constructor","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-constructor","meta":{}},{"name":"_attrKV","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-_attrKV","meta":{}},{"name":"buildPath","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-buildPath","meta":{}},{"name":"containPoint","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-containPoint","meta":{}},{"name":"createPathProxy","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-createPathProxy","meta":{}},{"name":"dirty","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-dirty","meta":{"protected":true}},{"name":"getBoundingRect","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-getBoundingRect","meta":{}},{"name":"getLineScale","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-getLineScale","meta":{}},{"name":"render","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-render","meta":{}},{"name":"setShape","tagname":"method","owner":"qrenderer.graphic.Path","id":"method-setShape","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.graphic.Path","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Path.html#qrenderer-graphic-Path' target='_blank'>Path.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__dirtyPath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-__dirtyPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-__dirtyPath' class='name expandable'>__dirtyPath</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-path' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-path' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-path' class='name expandable'>path</a> : PathProxy<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-segmentIgnoreThreshold' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-segmentIgnoreThreshold' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-segmentIgnoreThreshold' class='name expandable'>segmentIgnoreThreshold</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This item default to be false. ...</div><div class='long'><p>This item default to be false. But in map series in echarts,\nin order to improve performance, it should be set to true,\nso the shorty segment won't draw.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-strokeContainThreshold' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-strokeContainThreshold' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-strokeContainThreshold' class='name expandable'>strokeContainThreshold</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='property-subPixelOptimize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-subPixelOptimize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-subPixelOptimize' class='name expandable'>subPixelOptimize</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>See subPixelOptimize. ...</div><div class='long'><p>See <code>subPixelOptimize</code>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-property-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;path&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/qrenderer.graphic.Path-method-constructor' class='name expandable'>qrenderer.graphic.Path</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/qrenderer.graphic.Path\" rel=\"qrenderer.graphic.Path\" class=\"docClass\">qrenderer.graphic.Path</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Path ...</div><div class='long'><p>Path</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.graphic.Path\" rel=\"qrenderer.graphic.Path\" class=\"docClass\">qrenderer.graphic.Path</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_attrKV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-_attrKV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-_attrKV' class='name expandable'>_attrKV</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Overwrite _attrKV ...</div><div class='long'><p>Overwrite _attrKV</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-buildPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-buildPath' class='name expandable'>buildPath</a>( <span class='pre'>ctx, shapeCfg, inBundle</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Each subclass should provide its own implement for this method. ...</div><div class='long'><p>Each subclass should provide its own implement for this method.\nWhen build path, some shape may decide if use moveTo to begin a new subpath or closePath, like in circle.</p>\n\n<p>每个子类都需要为此方法提供自己的实现。\n在构建路径时，某些形状需要根据情况决定使用 moveTo 来开始一段子路径，或者直接用 closePath 来封闭路径，比如圆形。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>shapeCfg</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>inBundle</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-containPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-containPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-containPoint' class='name expandable'>containPoint</a>( <span class='pre'>x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createPathProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-createPathProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-createPathProxy' class='name expandable'>createPathProxy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-dirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-dirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-dirty' class='name expandable'>dirty</a>( <span class='pre'>dirtyPath</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dirtyPath</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBoundingRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-getBoundingRect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-getBoundingRect' class='name expandable'>getBoundingRect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get bounding rect of this element, NOTE:\nthis method will return the bounding rect without transforming(translate/sca...</div><div class='long'><p>Get bounding rect of this element, NOTE:\nthis method will return the bounding rect without transforming(translate/scale/rotate/skew).\nHowever, direct modifications to the shape property will be reflected in the bouding-rect.\nFor example,  if we modify this.shape.width directly, then the new width property will be calculated.</p>\n\n<p>获取当前元素的边界矩形，注意：\n此方法返回的是没有经过 transform(translate/scale/rotate/skew) 处理的边界矩形，但是对 shape 属性直接进行的修改会反映在获取的边界矩形上。\n例如，用代码直接对 this.shape.width 进行赋值，那么在计算边界矩形时就会用新的 width 属性进行计算。</p>\n</div></div></div><div id='method-getLineScale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-getLineScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-getLineScale' class='name expandable'>getLineScale</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.graphic.Path'>qrenderer.graphic.Path</span><br/><a href='source/Path.html#qrenderer-graphic-Path-method-setShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.graphic.Path-method-setShape' class='name expandable'>setShape</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object|String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});