bakgrunn = rectangle(150, 150,"solid","blue")
step-1 = overlay-xy(rectangle(70, 25, "solid", "green"), 0, 0, bakgrunn)
step-2 = overlay-xy(rectangle(80, 40, "solid", "yellow"),0, -25, step-1)
step-3 = overlay-xy(rectangle(80, 50, "solid", "maroon"), -30, -60, step-2)
step-4 = overlay-xy(rectangle(50, 60, "solid", "orange"), -100, 0, step-3)
step-5 = overlay-xy(rectangle(35, 80, "solid", "pink"), -70, -0, step-4)
step-6 = overlay-xy(rectangle(30, 100, "solid", "purple"), 0, -50, step-5)
step-7 = overlay-xy(rectangle(120, 50, "solid", "red"), -30, -100, step-6)
step-7
