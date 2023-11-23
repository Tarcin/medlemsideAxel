var ctx = empty-scene(400, 200)
cloud-circle = circle(20, "solid", "white")
var cloud = overlay-xy(cloud-circle,20,15, cloud-circle)
cloud := overlay-xy(cloud, -20, 15, cloud-circle)
cloud := overlay-xy(cloud, 20,35, rectangle(40, 20, "solid", "white"))
var blue-c = circle(10, "solid", "blue")
var white-c = circle(10, "solid", "white")

wave = overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,overlay-xy(blue-c,10, 0,overlay-xy(white-c,10, 0,blue-c ))))))))))))))))))))

sea = overlay-xy(rectangle(220, 30, "solid", "blue"), 0, -10,wave)

sky = overlay-xy(sea, 0, -90, rectangle(220, 120, "solid", "light-cyan"))
cloudysky = overlay-xy(cloud, -10, -10, sky)
sunnyday = overlay-xy(circle(20, "solid", "gold"), -180, 0, cloudysky)
sunnyday
