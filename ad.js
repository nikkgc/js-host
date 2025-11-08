 type="text/javascript" data-cfasync="false">
/*<![CDATA[*/
(function(){
    const ua = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    // Detect Windows PC
    const isWindows = platform.indexOf('win') !== -1;

    // Detect mobile
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

    // Block Windows desktop
    if (isWindows && !isMobile) {
        console.log('Windows PC detected — ad script blocked');
        return;
    }

    // Delay before loading the ad script
    setTimeout(() => {
        var x=window,
            s="a3805ceea3950484794dbab838b01978",
            b=[
                ["siteId",661-179+949+78*301+2792738],
                ["minBid",0],
                ["popundersPerIP","0"],
                ["delayBetween",150],
                ["default","PHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0nLy9wbDI2OTM3MTk4LmVmZmVjdGl2ZWdhdGVjcG0uY29tLzcwLzdlLzc5LzcwN2U3OTc1ZGNiMWExMzRkMTVlMzE1MzA4ODdiYzhhLmpzJz48L3NjcmlwdD4="],
                ["defaultPerDay",0],
                ["topmostLayer","auto"],
                ["blockedCountries","HR,SI"]
            ],
            n=[
                "d3d3LnByZW1pdW12ZXJ0aXNpbmcuY29tL3p0ZWNoYW4ubWluLmNzcw==",
                "ZDJqMDQyY2oxNDIxd2kuY2xvdWRmcm9udC5uZXQvU01QQ1hQL3F2anMtdmlkZW8ubWluLmpz"
            ],
            f=-1,o,e,
            k=function(){
                clearTimeout(e);
                f++;
                if(n[f] && !(1788544875000<(new Date).getTime() && 1<f)){
                    o=x.document.createElement("script");
                    o.type="text/javascript";
                    o.async=!0;
                    var d=x.document.getElementsByTagName("script")[0];
                    o.src="https://"+atob(n[f]);
                    o.crossOrigin="anonymous";
                    o.onerror=k;
                    o.onload=function(){clearTimeout(e);x[s.slice(0,16)+s.slice(0,16)]||k()};
                    e=setTimeout(k,5E3);
                    d.parentNode.insertBefore(o,d)
                }
            };
        if(!x[s]){
            try{Object.freeze(x[s]=b)}catch(e){}
            k()
        }
    }, 5000); // 5-second delay
})();
 /*]]>*/
