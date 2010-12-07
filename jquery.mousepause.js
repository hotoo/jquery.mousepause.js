/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2010/12/07
 */
(function($){
    var timeout = $.browser.msie ? 25 : 15;
    $.fn.mousepause = function(handler){
        this.each(function(){
            var ME=this, timer;
            $(this).mousemove(function(){
                clear();
                timer = window.setTimeout(paused, timeout);
            }).mouseout(function(){
                clear();
            });
            function paused(){
                handler.call(ME);
                timer = null;
            }
            function clear(){
                if(!timer){return;}
                window.clearTimeout(timer);
                timer = null;
            }
        });
        return this;
    };
})(jQuery);
