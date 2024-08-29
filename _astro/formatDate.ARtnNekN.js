import{c as R,g as X}from"./_commonjsHelpers.Cpj98o6Y.js";import{c as q}from"./consts.BWtA_dZk.js";var et={exports:{}};(function(_,P){(function(v,M){_.exports=M()})(R,function(){var v=1e3,M=6e4,x=36e5,D="millisecond",m="second",l="minute",i="hour",h="day",Y="week",c="month",y="quarter",O="year",C="date",a="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},w=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},E={s:w,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+w(n,2,"0")+":"+w(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,c),o=t-e<0,u=r.clone().add(n+(o?-1:1),c);return+(-(n+(t-e)/(o?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:c,y:O,w:Y,d:h,D:C,h:i,m:l,s:m,ms:D,Q:y}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},L="en",z={};z[L]=W;var N="$isDayjsObject",I=function(s){return s instanceof J||!(!s||!s[N])},U=function s(r,t,n){var e;if(!r)return L;if(typeof r=="string"){var o=r.toLowerCase();z[o]&&(e=o),t&&(z[o]=t,e=o);var u=r.split("-");if(!e&&u.length>1)return s(u[0])}else{var d=r.name;z[d]=r,e=d}return!n&&e&&(L=e),e||!n&&L},p=function(s,r){if(I(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new J(t)},f=E;f.l=U,f.i=I,f.w=function(s,r){return p(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var J=function(){function s(t){this.$L=U(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[N]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,o=n.utc;if(e===null)return new Date(NaN);if(f.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(S);if(u){var d=u[2]-1||0,$=(u[7]||"0").substring(0,3);return o?new Date(Date.UTC(u[1],d,u[3]||1,u[4]||0,u[5]||0,u[6]||0,$)):new Date(u[1],d,u[3]||1,u[4]||0,u[5]||0,u[6]||0,$)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return f},r.isValid=function(){return this.$d.toString()!==a},r.isSame=function(t,n){var e=p(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return p(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<p(t)},r.$g=function(t,n,e){return f.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,o=!!f.u(n)||n,u=f.p(t),d=function(j,k){var H=f.w(e.$u?Date.UTC(e.$y,k,j):new Date(e.$y,k,j),e);return o?H:H.endOf(h)},$=function(j,k){return f.w(e.toDate()[j].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(k)),e)},g=this.$W,b=this.$M,T=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case O:return o?d(1,0):d(31,11);case c:return o?d(1,b):d(0,b+1);case Y:var V=this.$locale().weekStart||0,G=(g<V?g+7:g)-V;return d(o?T-G:T+(6-G),b);case h:case C:return $(F+"Hours",0);case i:return $(F+"Minutes",1);case l:return $(F+"Seconds",2);case m:return $(F+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,o=f.p(t),u="set"+(this.$u?"UTC":""),d=(e={},e[h]=u+"Date",e[C]=u+"Date",e[c]=u+"Month",e[O]=u+"FullYear",e[i]=u+"Hours",e[l]=u+"Minutes",e[m]=u+"Seconds",e[D]=u+"Milliseconds",e)[o],$=o===h?this.$D+(n-this.$W):n;if(o===c||o===O){var g=this.clone().set(C,1);g.$d[d]($),g.init(),this.$d=g.set(C,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[f.p(t)]()},r.add=function(t,n){var e,o=this;t=Number(t);var u=f.p(n),d=function(b){var T=p(o);return f.w(T.date(T.date()+Math.round(b*t)),o)};if(u===c)return this.set(c,this.$M+t);if(u===O)return this.set(O,this.$y+t);if(u===h)return d(1);if(u===Y)return d(7);var $=(e={},e[l]=M,e[i]=x,e[m]=v,e)[u]||1,g=this.$d.getTime()+t*$;return f.w(g,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||a;var o=t||"YYYY-MM-DDTHH:mm:ssZ",u=f.z(this),d=this.$H,$=this.$m,g=this.$M,b=e.weekdays,T=e.months,F=e.meridiem,V=function(k,H,Z,B){return k&&(k[H]||k(n,o))||Z[H].slice(0,B)},G=function(k){return f.s(d%12||12,k,"0")},j=F||function(k,H,Z){var B=k<12?"AM":"PM";return Z?B.toLowerCase():B};return o.replace(A,function(k,H){return H||function(Z){switch(Z){case"YY":return String(n.$y).slice(-2);case"YYYY":return f.s(n.$y,4,"0");case"M":return g+1;case"MM":return f.s(g+1,2,"0");case"MMM":return V(e.monthsShort,g,T,3);case"MMMM":return V(T,g);case"D":return n.$D;case"DD":return f.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return V(e.weekdaysMin,n.$W,b,2);case"ddd":return V(e.weekdaysShort,n.$W,b,3);case"dddd":return b[n.$W];case"H":return String(d);case"HH":return f.s(d,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return j(d,$,!0);case"A":return j(d,$,!1);case"m":return String($);case"mm":return f.s($,2,"0");case"s":return String(n.$s);case"ss":return f.s(n.$s,2,"0");case"SSS":return f.s(n.$ms,3,"0");case"Z":return u}return null}(k)||u.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var o,u=this,d=f.p(n),$=p(t),g=($.utcOffset()-this.utcOffset())*M,b=this-$,T=function(){return f.m(u,$)};switch(d){case O:o=T()/12;break;case c:o=T();break;case y:o=T()/3;break;case Y:o=(b-g)/6048e5;break;case h:o=(b-g)/864e5;break;case i:o=b/x;break;case l:o=b/M;break;case m:o=b/v;break;default:o=b}return e?o:f.a(o)},r.daysInMonth=function(){return this.endOf(c).$D},r.$locale=function(){return z[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),o=U(t,n,!0);return o&&(e.$L=o),e},r.clone=function(){return f.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),K=J.prototype;return p.prototype=K,[["$ms",D],["$s",m],["$m",l],["$H",i],["$W",h],["$M",c],["$y",O],["$D",C]].forEach(function(s){K[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),p.extend=function(s,r){return s.$i||(s(r,J,p),s.$i=!0),p},p.locale=U,p.isDayjs=I,p.unix=function(s){return p(1e3*s)},p.en=z[L],p.Ls=z,p.p={},p})})(et);var rt=et.exports;const Q=X(rt);var nt={exports:{}};(function(_,P){(function(v,M){_.exports=M()})(R,function(){return function(v,M){var x=M.prototype,D=x.format;x.format=function(m){var l=this,i=this.$locale();if(!this.isValid())return D.bind(this)(m);var h=this.$utils(),Y=(m||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(c){switch(c){case"Q":return Math.ceil((l.$M+1)/3);case"Do":return i.ordinal(l.$D);case"gggg":return l.weekYear();case"GGGG":return l.isoWeekYear();case"wo":return i.ordinal(l.week(),"W");case"w":case"ww":return h.s(l.week(),c==="w"?1:2,"0");case"W":case"WW":return h.s(l.isoWeek(),c==="W"?1:2,"0");case"k":case"kk":return h.s(String(l.$H===0?24:l.$H),c==="k"?1:2,"0");case"X":return Math.floor(l.$d.getTime()/1e3);case"x":return l.$d.getTime();case"z":return"["+l.offsetName()+"]";case"zzz":return"["+l.offsetName("long")+"]";default:return c}});return D.bind(this)(Y)}}})})(nt);var st=nt.exports;const at=X(st);var it={exports:{}};(function(_,P){(function(v,M){_.exports=M()})(R,function(){var v="minute",M=/[+-]\d\d(?::?\d\d)?/g,x=/([+-]|\d\d)/g;return function(D,m,l){var i=m.prototype;l.utc=function(a){var S={date:a,utc:!0,args:arguments};return new m(S)},i.utc=function(a){var S=l(this.toDate(),{locale:this.$L,utc:!0});return a?S.add(this.utcOffset(),v):S},i.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var h=i.parse;i.parse=function(a){a.utc&&(this.$u=!0),this.$utils().u(a.$offset)||(this.$offset=a.$offset),h.call(this,a)};var Y=i.init;i.init=function(){if(this.$u){var a=this.$d;this.$y=a.getUTCFullYear(),this.$M=a.getUTCMonth(),this.$D=a.getUTCDate(),this.$W=a.getUTCDay(),this.$H=a.getUTCHours(),this.$m=a.getUTCMinutes(),this.$s=a.getUTCSeconds(),this.$ms=a.getUTCMilliseconds()}else Y.call(this)};var c=i.utcOffset;i.utcOffset=function(a,S){var A=this.$utils().u;if(A(a))return this.$u?0:A(this.$offset)?c.call(this):this.$offset;if(typeof a=="string"&&(a=function(L){L===void 0&&(L="");var z=L.match(M);if(!z)return null;var N=(""+z[0]).match(x)||["-",0,0],I=N[0],U=60*+N[1]+ +N[2];return U===0?0:I==="+"?U:-U}(a),a===null))return this;var W=Math.abs(a)<=16?60*a:a,w=this;if(S)return w.$offset=W,w.$u=a===0,w;if(a!==0){var E=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(w=this.local().add(W+E,v)).$offset=W,w.$x.$localOffset=E}else w=this.utc();return w};var y=i.format;i.format=function(a){var S=a||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,S)},i.valueOf=function(){var a=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*a},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var O=i.toDate;i.toDate=function(a){return a==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():O.call(this)};var C=i.diff;i.diff=function(a,S,A){if(a&&this.$u===a.$u)return C.call(this,a,S,A);var W=this.local(),w=l(a).local();return C.call(W,w,S,A)}}})})(it);var ot=it.exports;const ut=X(ot),ct={"aside.caution":"Caution","aside.danger":"Danger","aside.note":"Note","aside.tip":"Tip","blog.tableOfContent":"Table of Contents","feed.next":"Next","feed.previous":"Previous","feed.publishedIn":"Published in","footer.articleAuthor":"Article author","footer.articleTitle":"Article title","footer.busuanziSitePV":"Page views:","footer.busuanziSitePVUnit":"","footer.busuanziSiteUV":"Total visitors:","footer.busuanziSiteUVUnit":"","footer.copyrightOne":"Copyright notice: This article is licensed under the","footer.copyrightThree":"","footer.copyrightTwo":"「Attribution-NonCommercial-ShareAlike 4.0 International」","footer.originalLink":"Original link","footer.releaseTime":"Release time","footer.sitemap":"Sitemap","home.goBack":"Go back","home.moreArticles":"More articles","home.readMore":"Read more","home.sticky":"Sticky","message.welcome":"Welcome","message.welcomeTips":"Leave a footprint!","pagination.total":"Total","pagination.unit":"Pages","post.dateFormat":"Do MMMM YYYY","post.lastUpdated":"Last updated","search.labelOne":"Viewing articles under the ","search.labelTwo":"","search.placeholder":"Enter title or abstract keywords","search.search":"Search","search.searchLabelOne":"Found ","search.searchLabelTwo":" article(s) in total","sidebar.categories":"Categories","sidebar.recentArticle":"Recent Articles","sidebar.recentComments":"Recent Comments","sidebar.tags":"Tags","sidebar.uncategorized":"uncategorized","title.draft":"draft","title.minutes":" Minutes","title.words":" Words"},lt={"aside.note":"注意","aside.tip":"提示","aside.caution":"警告","aside.danger":"危险","home.sticky":"置顶","home.goBack":"返回","home.moreArticles":"更多文章","home.readMore":"阅读全文","message.welcome":"欢迎留言","message.welcomeTips":"既然来了就留个脚印吧！","post.lastUpdated":"最后更新","sidebar.categories":"分类","sidebar.uncategorized":"未分类","sidebar.tags":"标签","sidebar.recentArticle":"最近文章","sidebar.recentComments":"最近评论","footer.articleTitle":"本文标题","footer.articleAuthor":"文章作者","footer.releaseTime":"发布时间","footer.originalLink":"原始链接","footer.copyrightOne":"版权声明：本作品采用","footer.copyrightTwo":"「署名-非商业性使用-相同方式共享 4.0 国际」","footer.copyrightThree":"许可协议进行许可","footer.sitemap":"站点地图","footer.busuanziSitePV":"总访问量","footer.busuanziSitePVUnit":"次","footer.busuanziSiteUV":"总访客数","footer.busuanziSiteUVUnit":"人次","feed.publishedIn":"发表于","pagination.total":"共","pagination.unit":"页","title.minutes":"分钟","title.words":"字","title.draft":"草稿","blog.tableOfContent":"文章目录","search.labelOne":"正在查看","search.labelTwo":"下的文章","search.search":"搜索","search.searchLabelOne":"共找到 ","search.searchLabelTwo":" 篇文章","search.placeholder":"输入标题或摘要关键字","feed.previous":"上一条动态","feed.next":"下一条动态"};var ft={exports:{}};(function(_,P){(function(v,M){_.exports=M(rt)})(R,function(v){function M(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var x=M(v);function D(i){return i>1&&i<5&&~~(i/10)!=1}function m(i,h,Y,c){var y=i+" ";switch(Y){case"s":return h||c?"pár sekund":"pár sekundami";case"m":return h?"minuta":c?"minutu":"minutou";case"mm":return h||c?y+(D(i)?"minuty":"minut"):y+"minutami";case"h":return h?"hodina":c?"hodinu":"hodinou";case"hh":return h||c?y+(D(i)?"hodiny":"hodin"):y+"hodinami";case"d":return h||c?"den":"dnem";case"dd":return h||c?y+(D(i)?"dny":"dní"):y+"dny";case"M":return h||c?"měsíc":"měsícem";case"MM":return h||c?y+(D(i)?"měsíce":"měsíců"):y+"měsíci";case"y":return h||c?"rok":"rokem";case"yy":return h||c?y+(D(i)?"roky":"let"):y+"lety"}}var l={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(i){return i+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};return x.default.locale(l,null,!0),l})})(ft);let ht={"aside.caution":"varování","aside.danger":"nouze","aside.note":"vzít na vědomí","aside.tip":"upozornit na něco","blog.tableOfContent":"Obsah","feed.next":"Další","feed.previous":"Předchozí","feed.publishedIn":"Publikováno v","footer.articleAuthor":"Autor článku","footer.articleTitle":"Název článku","footer.busuanziSitePV":"Zobrazení stránky:","footer.busuanziSitePVUnit":"","footer.busuanziSiteUV":"Celkový počet návštěvníků:","footer.busuanziSiteUVUnit":"","footer.copyrightOne":"Oznámení o autorských právech: Tento článek je licencován pod","footer.copyrightThree":"","footer.copyrightTwo":"„Attribution-NonCommercial-ShareAlike 4.0 International“","footer.originalLink":"Původní odkaz","footer.releaseTime":"Čas vydání","footer.sitemap":"Mapa stránek","home.goBack":"Jít zpět","home.moreArticles":"Více článků","home.readMore":"Číst dál","home.sticky":"Připíchnuto","message.welcomeTips":"Zanechte stopu!","message.welcome":"Vítejte","pagination.total":"Celkem","pagination.unit":"Stránky","post.dateFormat":"D. MMMM YYYY","post.lastUpdated":"Poslední aktualizace","search.labelOne":"Zobrazení článků pod","search.labelTwo":"","search.placeholder":"Zadejte klíčová slova názvu nebo abstraktu","search.searchLabelOne":"Nalezeno ","search.searchLabelTwo":" článek(ů) celkem","search.search":"Hledat","sidebar.categories":"Kategorie","sidebar.recentArticle":"Nedávné články","sidebar.recentComments":"Nedávné komentáře","sidebar.tags":"Štítky","sidebar.uncategorized":"nekategorizované","title.draft":"návrh","title.minutes":" Minut","title.words":" Slov"};const tt={en:ct,"zh-cn":lt,cs:ht};function dt(_){return function(v){return tt[_][v]||tt[q.lang][v]}}const mt=dt(q.lang);Q.locale(q.lang);Q.extend(at);Q.extend(ut);function gt(_,P="post.dateFormat"){if(_){const v=mt(P)||"YYYY-MM-DD";return Q(_).utc().format(v)}else return""}export{Q as a,rt as d,gt as f,mt as t};
