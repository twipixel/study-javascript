(function () {

    'use strict';

    var DisplayObject = function (id, parent) {
        this.id = id;
        this.localTransformation = new Affine();
        this.globalTransformation = new Affine();

        this.parent = typeof parent !== 'undefined' ? parent : null;

        if (parent) {
            parent.addChild(this);
        }

        this.children = [];

        this.localBoundingBox = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };

        this.isInteractableWithMouse = false;

        this.listeners = [];
    };


    var p = DisplayObject.prototype;


    p.notify = function () {
        _.each(this.listeners, function (listener) {
            listener.update();
        });
    };


    p.addListener = function (listener) {
        this.listeners.push(listener);
    };


    p.removeListener = function (listener) {
        var index = this.lisnteners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    };


    p.addChild = function (node) {
        this.children.push(node);
        node.parent = this;
        this.updateAllGlobalTransformation();
    };


    p.removeChild = function (node) {
        var index = this.children.indexOf(node);
        if (index > -1) {
            var removed = this.children.splice(index, 1);
            removed.parent = null;
        }
    };


    p.applyTransformationToContext = function (context, transformation) {
        context.transform(transformation.m00_,
            transformation.m10_,
            transformation.m01_,
            transformation.m11_,
            transformation.m12_,
            transformation.m02_,
            transformation.m12_);
    };


    p.updateGlobalTransformation = function () {
        if (!this.parent) {
            this.globalTransformation.copyFrom(this.localTransformation);
        } else {
            var parentClone = this.parent.globalTransformation.clone();
            parentClone.concatenate(this.localTransformation);
            this.globalTransformation.copyFrom(parentClone);
        }
    };


    p.updateAllGlobalTransformation = function () {
        this.updateGlobalTransformation();
        _.each(this.children, function (child) {
                child.updateAllGlobalTransformation();
            }
        );
    };


    p.renderAll = function (context) {
        context.save();
        this.applyTransformationToContext(context, this.localTransformation);
        this.renderLocal(context);
        _.each(this.children, function (child) {
            child.renderAll(context);
        });
        context.restore();
    };


    p.rotate = function (theta, x, y) {
        this.localTransformation.rotate(theta, x, y);
        this.updateAllGlobalTransformation();
        this.notify();
    };


    p.translate = function(dx, dy) {
        this.localTransformation.translate(dx, dy);
        this.updateAllGlobalTransformation();
        this.notify();
    };


    p.scale = fucntion(sx, sy) {
        this.localTransformation.scale(sx, sy);
        this.updateAllGlobalTransformation();
        this.notify();
    };


    p.performHitDetection = function(point) {
        if(this.isInteractableWithMouse) {
            var inverseGlobal = this.globalTransformation.createInverse();
            var transformpoint = [undefined, undefined];

        }
    };

})();