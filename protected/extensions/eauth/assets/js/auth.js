jQuery(function($){var popup;$.fn.eauth=function(options){return options=$.extend({id:"",popup:{width:450,height:380}},options),this.each(function(){var el=$(this);el.click(function(){void 0!==popup&&popup.close();var redirect_uri,url=redirect_uri=this.href;url+=url.indexOf("?")>=0?"&":"?",-1===url.indexOf("redirect_uri=")&&(url+="redirect_uri="+encodeURIComponent(redirect_uri)+"&"),url+="js";var centerWidth=($(window).width()-options.popup.width)/2,centerHeight=($(window).height()-options.popup.height)/2;return popup=window.open(url,"yii_eauth_popup","width="+options.popup.width+",height="+options.popup.height+",left="+centerWidth+",top="+centerHeight+",resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes"),popup.focus(),!1})})}});