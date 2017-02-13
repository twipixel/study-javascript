/***Zheng
 * Scaffolded by Jingjie (Vincent) Zheng on June 24, 2015.
 */

"use strict";

// This should be your main point of entry for your app
var sceneGraphModule = createSceneGraphModule();

window.addEventListener('load', function () {
    // Create model and view modules.
    var modelModule = createModelModule();
    var viewModule = createViewModule();

    // Instantiate a spaceship model.
    var model = new modelModule.SpaceshipModel();

    // Obtain the canvas object.
    var canvas = document.getElementById('canvas');

    // Instantiate a spaceship view with the model and the canvas.
    var view = new viewModule.SpaceshipView(model, canvas);



    // 역행렬 테스트
    //self.model.spaceshipNode.globalTransformation.createInverse().transform([0, 0, -canvas.width - (maxx - minx), 0], 0, ph, 0, 2);
    //self.model.spaceshipNode.translate(ph[2] - ph[0], ph[3] - ph[1]);

    var ph = [];
    var bounds = [0, 0, 10, 10];
    var affine = new AffineTransform();

    console.log('-------------------------------');
    console.log('affine');
    console.log('-------------------------------');
    var tx = 100, ty = 50;
    console.log('translate(' + tx + ',' + ty + ')');
    affine.translate(tx, ty);
    // ph[2] - ph[0] === width, ph[3] - ph[1] === height
    console.log(affine.toString());
    affine.transform(bounds, 0, ph, 0, 2);
    console.log(ph.toString());
    console.log('w', ph[2] - ph[0], 'h', ph[3] - ph[1]);

    var inverse = affine.createInverse();
    var inverse1 = affine.createInverse();
    var affineClone = affine.clone();

    console.log('-------------------------------');
    console.log('inverse');
    console.log('-------------------------------');
    console.log(inverse.toString());
    inverse.transform([0, 0, -canvas.width, 0], 0, ph, 0, 2);
    console.log(ph.toString());
    console.log('w', ph[2] - ph[0], 'h', ph[3] - ph[1]);
    affine.translate(ph[2] - ph[0], ph[3] - ph[1]);
    console.log(affine.toString());

    console.log('-------------------------------');
    console.log('inverse1');
    console.log('-------------------------------');
    console.log(inverse1.toString());
    inverse1.transform([0, 0, 0, 0], 0, ph, 0, 2);
    console.log(ph.toString());
    console.log('w', ph[2] - ph[0], 'h', ph[3] - ph[1]);
    affineClone.translate(ph[2] - ph[0], ph[3] - ph[1]);
    console.log(affineClone.toString());


});