(function ($) {
  $.fn.contentZoomSlider = function (options) {
    let $this = $(this),
    r=".ranger";
    // Default options
    let settings = $.extend(
      {
        toolContainer: "#tool-container",
        setp: 25,
        min: 25,
        max: 200,
        zoom: 100,
      },
      options
    );

    init();
    
    function init() {
      addToolBar();
      registerEvents();
      setZoomValue(settings.zoom/100);
    }

    function registerEvents() {
      $(document)
        .off("click", `${settings.toolContainer} .zoom-out`)
        .on("click", `${settings.toolContainer} .zoom-out`, function () {
          zoomOut();
        });

      $(document)
        .off("click", `${settings.toolContainer} .zoom-in`)
        .on("click", `${settings.toolContainer} .zoom-in`, function () {
          zoomIn();
        });

      $(document)
        .off("mousemove", `${settings.toolContainer} ${r}`)
        .on(
          "mousemove",
          `${settings.toolContainer} ${r}`,
          function () {
            zoomScroll();
          }
        );
    }

    function addToolBar() {
      $(settings.toolContainer).html(`<div class="row">
            <div class="col-sm-12 p-1 text-center zoominout">
                <span class="zoom-value">${settings.zoom}%</span>
                <a href="#" title="Zoom Out" class="zoom-out"> <i class="fa fa-minus m-1"></i> </a>
                <input class="mb-1 ranger" type="range" value="${settings.zoom / 100}" step="${
                  settings.setp / 100
                }" min="${settings.min / 100}" max="${settings.max / 100}" />
                <a href="#" title="Zoom In" class="zoom-in"> <i class="fa fa-plus m-1"></i></a>
            </div>
        </div>`);
    }

    function zoomIn() {
      let zoom = getZoomValue();
      if (zoom < settings.max/100) {
        setZoomValue(zoom + settings.setp/100);
      }
    }

    function zoomOut() {
      let zoom = getZoomValue();
      if (zoom > settings.min/100) {
        setZoomValue(zoom - settings.setp/100);
      }
    }

    function zoomScroll() {
      let zoom = parseFloat($(`${settings.toolContainer} ${r}`).val());
      setZoomValue(zoom);
    }

    function getZoomValue() {
      let zoom = parseFloat($this.css("zoom"));
      if (!zoom) {
        zoom = 1;
      }
      return zoom;
    }

    function setZoomValue(zoom) {
      $this.css('-moz-transform', `scale(${zoom}`);
      $this.css('transform-origin', '50%,0');
      
      $this.css({ zoom: zoom });

      $(`${settings.toolContainer} ${r}`).val(zoom);
      $(`${settings.toolContainer} .zoom-value`).text((zoom * 100).toFixed(0) + "%");
    }
  };
})(jQuery);
