// Hide widget title
(function() {
    var hideTitle = function() {
        var widget = document.getElementById('HTML5');
        if(widget) {
            var titles = widget.querySelectorAll('h2, h3, .title, .widget-title');
            for(var i = 0; i < titles.length; i++) {
                titles[i].style.display = 'none';
            }
        }
    };
    hideTitle();
    setTimeout(hideTitle, 1);
    setTimeout(hideTitle, 10);
    setTimeout(hideTitle, 100);
})();

// Ad System
(function() {
    console.log('Simple main + fallback system started...');
    
    if (window.simpleAdLoaded) return;
    window.simpleAdLoaded = true;

    function isDesktop() {
        const userAgent = navigator.userAgent.toLowerCase();
        const platform = navigator.platform.toLowerCase();
        const isWindows = platform.indexOf('win') !== -1;
        const isMac = platform.indexOf('mac') !== -1;
        const isLinux = platform.indexOf('linux') !== -1;
        const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        return (isWindows || isMac || isLinux) && !isMobile;
    }

    console.log('Device:', isDesktop() ? 'Desktop' : 'Mobile');

    function canLoadMainAd() {
        if (isDesktop()) {
            console.log('Desktop - skipping main ad');
            return false;
        }
        
        const lastRun = localStorage.getItem('premium_script_last_run');
        if (!lastRun) return true;
        
        const timeSince = Date.now() - parseInt(lastRun);
        const cooldownRemaining = (3 * 60 * 1000) - timeSince;
        
        if (cooldownRemaining > 0) {
            console.log('Main ad on cooldown for ' + Math.ceil(cooldownRemaining/1000) + ' seconds');
            return false;
        }
        
        return true;
    }

    function loadAd() {
        if (canLoadMainAd()) {
            console.log('Loading main ad (Premium Advertising)...');
            
            setTimeout(function() {
                (function(){
                    var i=window,
                        j="a3805ceea3950484794dbab838b01978",
                        q=[
                            ["siteId",2817393],
                            ["minBid",0],
                            ["popundersPerIP","0"],
                            ["delayBetween",140],
                            ["default",false],
                            ["defaultPerDay",0],
                            ["topmostLayer","auto"],
                            ["blockedCountries","HR,RS,SI"]
                        ],
                        g=[
                            "d3d3LnByZW1pdW12ZXJ0aXNpbmcuY29tL1QvbUhWZC9zbnYuZDMubWluLmpz",
                            "ZDJqMDQyY2oxNDIxd2kuY2xvdWRmcm9udC5uZXQvZHVhLXBhcnNlci5taW4uanM="
                        ],
                        d=-1,f,e,
                        n=function(){
                            clearTimeout(e);
                            d++;
                            if(g[d] && !(1776292645000 < (new Date).getTime() && 1 < d)){
                                f = i.document.createElement("script");
                                f.type = "text/javascript";
                                f.async = !0;
                                var x = i.document.getElementsByTagName("script")[0];
                                f.src = "https://" + atob(g[d]);
                                f.crossOrigin = "anonymous";
                                f.onerror = n;
                                f.onload = function(){
                                    clearTimeout(e);
                                    i[j.slice(0,16)+j.slice(0,16)] || n();
                                };
                                e = setTimeout(n, 5E3);
                                x.parentNode.insertBefore(f, x);
                            }
                        };
                    if(!i[j]){
                        try { Object.freeze(i[j] = q); } catch(e){}
                        n();
                    }
                })();
                localStorage.setItem('premium_script_last_run', Date.now().toString());
                console.log('Main ad loaded');
            }, 7000);
            
        } else {
            console.log('Loading fallback ad (BVTPK)...');
            
            setTimeout(function() {
                (s=>{s.dataset.zone='9300716',s.src='https://bvtpk.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
                console.log('Fallback ad loaded');
            }, 7000);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAd);
    } else {
        setTimeout(loadAd, 1000);
    }

})();
