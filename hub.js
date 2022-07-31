(function($) {

    let bindTab = function(ident, url) {
        $("#"+ident+"-btn").each(function() {
            let tabFrame = $("#"+ident+"-tab iframe");
            const tabBootstrap = new bootstrap.Tab(this);
            this.addEventListener('click', event => {
                event.preventDefault();
                tabBootstrap.show();
                if (!tabFrame.is(".loaded")) {
                    tabFrame.addClass("loaded");
                    tabFrame.attr("src", url);
                }
            });
        });
    };

    // Logistics calculator
    bindTab("logistics-calc", "https://www.ogma.run/factory");

    // Route planner
    bindTab("route-planner", "https://www.logiwaze.com/");

    // Foxhole wiki
    bindTab("wiki", "https://foxhole.fandom.com/wiki/Foxhole_Wiki");

    // Artillery spotting
    bindTab("artillery-spotting", "https://forsakenngs.github.io/foxhole-spotter/");

})(jQuery);
