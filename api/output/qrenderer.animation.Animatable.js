Ext.data.JsonP.qrenderer_animation_Animatable({"tagname":"class","name":"qrenderer.animation.Animatable","autodetected":{},"files":[{"filename":"Animatable.js","href":"Animatable.html#qrenderer-animation-Animatable"}],"abstract":true,"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"animationProcessList","tagname":"property","owner":"qrenderer.animation.Animatable","id":"property-animationProcessList","meta":{"readonly":true}},{"name":"constructor","tagname":"method","owner":"qrenderer.animation.Animatable","id":"method-constructor","meta":{"abstract":true}},{"name":"animate","tagname":"method","owner":"qrenderer.animation.Animatable","id":"method-animate","meta":{}},{"name":"removeAnimationProcess","tagname":"method","owner":"qrenderer.animation.Animatable","id":"method-removeAnimationProcess","meta":{}},{"name":"stopAnimation","tagname":"method","owner":"qrenderer.animation.Animatable","id":"method-stopAnimation","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.animation.Animatable","short_doc":"This is an abstract class for animating. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Animatable.html#qrenderer-animation-Animatable' target='_blank'>Animatable.js</a></div></pre><div class='doc-contents'><p>This is an abstract class for animating. Any class needes animation functions can minxin this implementation.\nThe class mixines Animatable should also mixin Eventful to provide the event functions.</p>\n\n<p>动画抽象类。任何需要动画功能的类都可以 mixin 此实现。\n混入 Animatable 的类必须同时混入 Eventful ，因为动画过程中需要使用事件机制。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animationProcessList' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Animatable'>qrenderer.animation.Animatable</span><br/><a href='source/Animatable.html#qrenderer-animation-Animatable-property-animationProcessList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Animatable-property-animationProcessList' class='name expandable'>animationProcessList</a> : <a href=\"#!/api/qrenderer.animation.AnimationProcess\" rel=\"qrenderer.animation.AnimationProcess\" class=\"docClass\">qrenderer.animation.AnimationProcess</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>A list to store the animation processes on current element instance. ...</div><div class='long'><p>A list to store the animation processes on current element instance.</p>\n\n<p>当前元素上的动画过程列表。</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Animatable'>qrenderer.animation.Animatable</span><br/><a href='source/Animatable.html#qrenderer-animation-Animatable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/qrenderer.animation.Animatable-method-constructor' class='name expandable'>qrenderer.animation.Animatable</a>( <span class='pre'></span> ) : <a href=\"#!/api/qrenderer.animation.Animatable\" rel=\"qrenderer.animation.Animatable\" class=\"docClass\">qrenderer.animation.Animatable</a><span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Animatable ...</div><div class='long'><p>Animatable</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.animation.Animatable\" rel=\"qrenderer.animation.Animatable\" class=\"docClass\">qrenderer.animation.Animatable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-animate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Animatable'>qrenderer.animation.Animatable</span><br/><a href='source/Animatable.html#qrenderer-animation-Animatable-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Animatable-method-animate' class='name expandable'>animate</a>( <span class='pre'>path, [loop]</span> ) : <a href=\"#!/api/qrenderer.animation.AnimationProcess\" rel=\"qrenderer.animation.AnimationProcess\" class=\"docClass\">qrenderer.animation.AnimationProcess</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creat the AnimationProcess instance. ...</div><div class='long'><p>Creat the AnimationProcess instance.</p>\n\n<p>创建 AnimationProcess 实例。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>The path to fetch value from object, like 'a.b.c'.</p>\n\n<p>从对象上获取属性的路径，例如 'a.b.c'。</p>\n</div></li><li><span class='pre'>loop</span> : Boolean (optional)<div class='sub-desc'><p>Whether to loop animation.</p>\n\n<p>动画是否循环播放。</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.animation.AnimationProcess\" rel=\"qrenderer.animation.AnimationProcess\" class=\"docClass\">qrenderer.animation.AnimationProcess</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeAnimationProcess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Animatable'>qrenderer.animation.Animatable</span><br/><a href='source/Animatable.html#qrenderer-animation-Animatable-method-removeAnimationProcess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Animatable-method-removeAnimationProcess' class='name expandable'>removeAnimationProcess</a>( <span class='pre'>animationProcess</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove the AnimationProcess。 ...</div><div class='long'><p>Remove the AnimationProcess。</p>\n\n<p>删除动画过程。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>animationProcess</span> : AnimationProcess<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.animation.Animatable'>qrenderer.animation.Animatable</span><br/><a href='source/Animatable.html#qrenderer-animation-Animatable-method-stopAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.animation.Animatable-method-stopAnimation' class='name expandable'>stopAnimation</a>( <span class='pre'>forwardToLast</span> ) : <a href=\"#!/api/qrenderer.animation.Animatable\" rel=\"qrenderer.animation.Animatable\" class=\"docClass\">qrenderer.animation.Animatable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Stop the animation. ...</div><div class='long'><p>Stop the animation.</p>\n\n<p>停止动画。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>forwardToLast</span> : Boolean<div class='sub-desc'><p>If move to last frame before stop.</p>\n\n<p>在停止动画之前是否强制移动到最后一帧。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.animation.Animatable\" rel=\"qrenderer.animation.Animatable\" class=\"docClass\">qrenderer.animation.Animatable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});