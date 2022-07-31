(function($) {

    // Logistics calculator
    $("#logistics-calc-btn").each(function() {
        let tabFrame = $("#logistics-calc-tab iframe");
        const tabBootstrap = new bootstrap.Tab(this);
        this.addEventListener('click', event => {
            event.preventDefault();
            tabBootstrap.show();
            if (!tabFrame.is(".loaded")) {
                tabFrame.addClass("loaded");
                tabFrame.attr("src", "https://www.ogma.run/factory");
            }
        });
    });

    // Route planner
    $("#route-planner-btn").each(function() {
        let tabFrame = $("#route-planner-tab iframe");
        const tabBootstrap = new bootstrap.Tab(this);
        this.addEventListener('click', event => {
            event.preventDefault();
            tabBootstrap.show();
            if (!tabFrame.is(".loaded")) {
                tabFrame.addClass("loaded");
                tabFrame.attr("src", "https://www.logiwaze.com/");
            }
        });
    });

    // Artillery spotting
    $("#artillery-spotting-btn").each(function() {
        let tabFrame = $("#artillery-spotting-tab iframe");
        const tabBootstrap = new bootstrap.Tab(this);
        this.addEventListener('click', event => {
            event.preventDefault();
            tabBootstrap.show();
            if (!tabFrame.is(".loaded")) {
                tabFrame.addClass("loaded");
                tabFrame.attr("src", "https://forsakenngs.github.io/foxhole-spotter/");
            }
        });
    });

})(jQuery);
