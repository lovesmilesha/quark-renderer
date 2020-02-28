Ext.data.JsonP.qrenderer_animation_Timeline({"tagname":"class","name":"qrenderer.animation.Timeline","autodetected":{},"files":[{"filename":"Timeline.js","href":"Timeline.html#qrenderer-animation-Timeline"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"constructor","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-constructor","meta":{}},{"name":"fire","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-fire","meta":{}},{"name":"nextFrame","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-nextFrame","meta":{}},{"name":"pause","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-pause","meta":{}},{"name":"restart","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-restart","meta":{}},{"name":"resume","tagname":"method","owner":"qrenderer.animation.Timeline","id":"method-resume","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.animation.Timeline","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Timeline.html#qrenderer-animation-Timeline' target='_blank'>Timeline.js</a></div></pre><div class='doc-contents'><p>Timeline，时间线，用来计算元素上的某个属性在指定时间点的数值。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/qrenderer.animation.Timeline-method-constructor' class='name expandable'>qrenderer.animation.Timeline</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/qrenderer.animation.Timeline\" rel=\"qrenderer.animation.Timeline\" class=\"docClass\">qrenderer.animation.Timeline</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Timeline ...</div><div class='long'><p>Timeline</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>element</span> : Element<div class='sub-desc'><p>正在进行动画的元素</p>\n</div></li><li><span class='pre'>life</span> : Number<div class='sub-desc'><p>(1000) 动画时长</p>\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>(0) 动画延迟时间</p>\n</div></li><li><span class='pre'>loop</span> : Boolean<div class='sub-desc'><p>(true)</p>\n</div></li><li><span class='pre'>gap</span> : Number<div class='sub-desc'><p>(0) 循环的间隔时间</p>\n</div></li><li><span class='pre'>onframe</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>easing</span> : String (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>ondestroy</span> : Function (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>onrestart</span> : Function (optional)<div class='sub-desc'>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.animation.Timeline\" rel=\"qrenderer.animation.Timeline\" class=\"docClass\">qrenderer.animation.Timeline</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Timeline-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, arg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>arg</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-nextFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-nextFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Timeline-method-nextFrame' class='name expandable'>nextFrame</a>( <span class='pre'>globalTime, deltaTime</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>进入下一帧 ...</div><div class='long'><p>进入下一帧</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>globalTime</span> : Number<div class='sub-desc'><p>当前时间</p>\n</div></li><li><span class='pre'>deltaTime</span> : Number<div class='sub-desc'><p>时间偏移量\n//TODO:try move this into webworker</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Timeline-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>暂停 ...</div><div class='long'><p>暂停</p>\n</div></div></div><div id='method-restart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-restart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Timeline-method-restart' class='name expandable'>restart</a>( <span class='pre'>globalTime</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>重新开始 ...</div><div class='long'><p>重新开始</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>globalTime</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Timeline'>qrenderer.animation.Timeline</span><br/><a href='source/Timeline.html#qrenderer-animation-Timeline-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Timeline-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>恢复运行 ...</div><div class='long'><p>恢复运行</p>\n</div></div></div></div></div></div></div>","meta":{}});