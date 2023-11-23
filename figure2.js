//code in case figure2 is going to be used

const canvas = document.getElementById("myCanvas");
//Axels Figur Canvas
//canvas = document.getElementById("axelCanvas");
const sky = rectangle(220, 140, "solid", "lightCyan");
overlayXY(circle(10, "solid", "white"), 210, 110,
overlayXY(circle(10, "solid", "blue"), 200, 110, 
    overlayXY(circle(10, "solid", "white"), 190, 110,
        overlayXY(circle(10, "solid", "blue"), 180, 110, 
            overlayXY(circle(10, "solid", "white"), 170, 110,
                overlayXY(circle(10, "solid", "blue"), 160, 110, 
                    overlayXY(circle(10, "solid", "white"), 150, 110,
                        overlayXY(circle(10, "solid", "blue"), 140, 110, 
                            overlayXY(circle(10, "solid", "white"), 130, 110,
                                overlayXY(circle(10, "solid", "blue"), 120, 110,
                                    overlayXY(circle(10, "solid", "white"), 110, 110,
                                        overlayXY(circle(10, "solid", "blue"), 100, 110, 
                                            overlayXY(circle(10, "solid", "white"), 90, 110,
                                                overlayXY(circle(10, "solid", "blue"), 80, 110,
                                                    overlayXY(circle(10, "solid", "white"), 70, 110,
                                                        overlayXY(circle(10, "solid", "blue"), 60, 110, 
                                                            overlayXY(circle(10, "solid", "white"), 50, 110,
                                                                overlayXY(circle(10, "solid", "blue"), 40, 110, 
                                                                    overlayXY(circle(10, "solid", "white"), 30, 110,
                                                                        overlayXY(circle(10, "solid", "blue"), 20, 110, 
                                                                            overlayXY(circle(10, "solid", "white"), 10, 110, 
                                                                                overlayXY(circle(10, "solid", "blue"), 0, 110, 
                                                                                    overlayXY(circle(10, "solid", "white"), -10, 110, sky)))))))))))))))))))))));

overlayXY(rectangle(40, 20, "solid", "white"), 30, 52, 
    overlayXY(circle(20, "solid", "white"), 15, 30, 
        overlayXY(circle(20, "solid", "white"), 30, 20, 
            overlayXY(circle(20, "solid", "white"), 45, 30, sky))));
overlayXY(rectangle(220, 20, "solid", "blue"), 0, 120, sky);
overlayXY(circle(40, "solid", "gold"), 170,-30, sky);
overlayXY(sky, 100, 100, canvas);

const svg = document.getElementById("mySVG")
//svg = document.getElementById("axelSVG")
overlayXYsvg(rectangleSVG(220, 140, "solid", "lightCyan"), 0, 0, svg);
overlayXYsvg(circleSVG(10, "solid", "white"), 220, 120, 
overlayXYsvg(circleSVG(10, "solid", "blue"), 210, 120, 
    overlayXYsvg(circleSVG(10, "solid", "white"), 200, 120,
        overlayXYsvg(circleSVG(10, "solid", "blue"), 190, 120, 
            overlayXYsvg(circleSVG(10, "solid", "white"), 180, 120,
                overlayXYsvg(circleSVG(10, "solid", "blue"), 170, 120, 
                    overlayXYsvg(circleSVG(10, "solid", "white"), 160, 120,
                        overlayXYsvg(circleSVG(10, "solid", "blue"), 150, 120, 
                            overlayXYsvg(circleSVG(10, "solid", "white"), 140, 120,
                                overlayXYsvg(circleSVG(10, "solid", "blue"), 130, 120,
                                    overlayXYsvg(circleSVG(10, "solid", "white"), 120, 120,
                                        overlayXYsvg(circleSVG(10, "solid", "blue"), 110, 120, 
                                            overlayXYsvg(circleSVG(10, "solid", "white"), 100, 120,
                                                overlayXYsvg(circleSVG(10, "solid", "blue"), 90, 120,
                                                    overlayXYsvg(circleSVG(10, "solid", "white"), 80, 120,
                                                        overlayXYsvg(circleSVG(10, "solid", "blue"), 70, 120, 
                                                            overlayXYsvg(circleSVG(10, "solid", "white"), 60, 120,
                                                                overlayXYsvg(circleSVG(10, "solid", "blue"), 50, 120, 
                                                                    overlayXYsvg(circleSVG(10, "solid", "white"), 40, 120,
                                                                        overlayXYsvg(circleSVG(10, "solid", "blue"), 30, 120, 
                                                                            overlayXYsvg(circleSVG(10, "solid", "white"), 20, 120, 
                                                                                overlayXYsvg(circleSVG(10, "solid", "blue"), 10, 120, 
                                                                                    overlayXYsvg(circleSVG(10, "solid", "white"), 0, 120, svg)))))))))))))))))))))));

overlayXYsvg(rectangleSVG(40, 20, "solid", "white"), 30, 52, 
    overlayXYsvg(circleSVG(20, "solid", "white"), 35, 50, 
        overlayXYsvg(circleSVG(20, "solid", "white"), 50, 40, 
            overlayXYsvg(circleSVG(20, "solid", "white"), 65, 50, svg))));

overlayXYsvg(rectangleSVG(220, 20, "solid", "blue"), 0, 120, svg);
overlayXYsvg(circleSVG(40, "solid", "gold"), 210,10, svg);
overlayXYsvg(rectangleSVG(40, 140, "solid", "white"), 220, 0, svg);
