
# Content Zoom Slider

Jquery plugin to zoom in/out area in browser with slider. 

![](/example/content-zoom-slider-demo.gif?raw=true "Title")

## Requirements
Jquery

bootstrap css (for best view)

## Usage

You can refer my youtube video, in which i have explained full implementation. [click here](https://www.youtube.com/embed/C6DM_xQ7BsY)


1. Download and include "content-zoom-slider.min.js" file from src folder.
```html
 <script src="../src/content-zoom-slider.min.js"></script>
```
2. Initialize plugin
```html
<div id="content">
      Content area
</div>
<div class="zoom-tool-bar">

</div>

<script>
      $(function () {
        $("#content").contentZoomSlider({
          toolContainer: ".zoom-tool-bar"
        });
 });
</script>
```
## Options
``` html
<script>
 $("#content").contentZoomSlider({
            toolContainer: ".zoom-tool-bar", // element where slider bar will show
            setp: 25, // step size
            min: 25, // min range
            max: 200, // max range
            zoom: 100, // default zoom size
        });
  </script>
```
