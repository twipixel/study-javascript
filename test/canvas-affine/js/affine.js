(function () {

    /**
     * <pre>
     *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     * @param m00
     * @param m10
     * @param m01
     * @param m11
     * @param m02
     * @param m12
     * @constructor
     */
    var Affine = function (m00, m10, m01, m11, m02, m12) {
        if (arguments.length == 6) {
            this.setTransform(m00, m10, m01, m11, m02, m12);
        } else if (arguments.length != 0) {
            throw Error('Insufficient matrix parameters');
        } else {
            this.m00_ = this.m11_ = 1;
            this.m10_ = this.m01_ = this.m02_ = this.m12_ = 0;
        }
    };


    var p = Affine.prototype;


    p.clone = function () {
        return new Affine(this.m00_, this.m10_, this.m01_, this.m11_, this.m02_, this.m12_);
    };


    p.setTransform = function (m00, m10, m01, m11, m02, m12) {
        this.m00_ = m00;
        this.m10_ = m10;
        this.m01_ = m01;
        this.m11_ = m11;
        this.m02_ = m02;
        this.m12_ = m12;
        return this;
    };


    p.copyFrom = function (tx) {
        this.m00_ = tx.m00_;
        this.m10_ = tx.m10_;
        this.m01_ = tx.m01_;
        this.m11_ = tx.m11_;
        this.m02_ = tx.m02_;
        this.m12_ = tx.m12_;
        return this;
    };


    p.scale = function (sx, sy) {
        this.m00_ *= sx;
        this.m10_ *= sx;
        this.m01_ *= sy;
        this.m11_ *= sy;
        return this;
    };


    p.preScale = function (sx, sy) {
        this.m00_ *= sx;
        this.m01_ *= sx;
        this.m02_ *= sx;
        this.m10_ *= sy;
        this.m11_ *= sy;
        this.m12_ *= sy;
        return this;
    };


    p.translate = function (dx, dy) {
        this.m02_ += dx * this.m00_ + dy * this.m01_;
        this.m12_ += dx * this.m10_ + dy * this.m11_;
        return this;
    };


    p.preTranslate = function (dx, dy) {
        this.m02_ += dx;
        this.m12_ += dy;
        return this;
    };


    p.rotate = function (theta, x, y) {
        return this.concatenate(
            this.getRotateInstance(theta, x, y)
        );
    };


    p.preRotate = function (theta, x, y) {
        return this.preConcatenate(
            this.getRotateInstance(theta, x, y)
        );
    };


    /**
     * m01_ => sx
     * m10_ => sy
     *
     * @param shx
     * @param shy
     */
    p.shear = function (shx, shy) {
        var m00 = this.m00_;
        var m10 = this.m10_;
        this.m00_ += shy * this.m01_;
        this.m10_ += shy * this.m11_;
        this.m01_ += shx * m00;
        this.m11_ += shx * m10;
        return this;
    };


    p.preShear = function (shx, shy) {
        var m00 = this.m00_;
        var m01 = this.m01_;
        var m02 = this.m02_;
        this.m00_ += shx * this.m10_;
        this.m01_ += shx * this.m11_;
        this.m02_ += shx * this.m12_;
        this.m10_ += shy * m00;
        this.m11_ += shy * m01;
        this.m12_ += shy * m02;
        return this;
    };


    p.concatenate = function (tx) {
        var m0 = this.m00_;
        var m1 = this.m01_;

        this.m00_ = tx.m00_ * m0 + tx.m10_ * m1;
        this.m01_ = tx.m01_ * m0 + tx.m11_ * m1;
        this.m02_ += tx.m02_ * m0 + tx.m12_ * m1;

        m0 = this.m10_;
        m1 = this.m11_;
        this.m10_ = tx.m00_ * m0 + tx.m10_ * m1;
        this.m11_ = tx.m01_ * m0 + tx.m11_ * m1;
        this.m12_ += tx.m02_ * m0 + tx.m12_ * m1;

        return this;
    };


    p.preConcatenate = function (tx) {
        var m0 = this.m00_;
        var m1 = this.m10_;

        this.m00_ = tx.m00_ * m0 + tx.m01_ * m1;
        this.m10_ = tx.m10_ * m0 + tx.m11_ * m1;

        m0 = this.m01_;
        m1 = this.m11_;

        this.m01_ = tx.m00_ * m0 + tx.m01_ * m1;
        this.m11_ = tx.m10_ * m0 + tx.m11_ * m1;

        m0 = this.m02_;
        m1 = this.m12_;
        this.m02_ = tx.m00_ * m0 + tx.m01_ * m1 + tx.m02_;
        this.m12_ = tx.m10_ * m0 + tx.m11_ * m1 + tx.m12_;

        return this;
    };


    p.transform = function (src, srcOff, dst, dstOff, numPts) {
        var i = srcOff;
        var j = dstOff;
        var srcEnd = srcOff + 2 * numPts;

        while (i < srcEnd) {
            var x = src[i++];
            var y = src[i++];
            dst[j++] = x * this.m00_ + y * this.m01_ + this.m02_;
            dst[j++] = x * this.m10_ + y * this.m11_ + this.m12_;
        }
    };


    p.getDeterminant = function () {
        return this.m00_ * this.m11_ - this.m01_ * this.m10_;
    };


    p.createInverse = function () {
        var det = this.getDeterminant();
        return new Affine(
            this.m11_ / det,
            -this.m10_ / det,
            -this.m01_ / det,
            this.m00_ / det,
            (this.m01_ * this.m12_ - this.m11_ * this.m02_) / det,
            (this.m10_ * this.m02_ - this.m00_ * this.m12_) / det);
    };


    p.getRotateInstance = function(theta, x, y) {
        return new Affine().setToRotation(theta, x, y);
    };


    p.setToRotation = function (theta, x, y) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);

        return this.setTransform(cos, sin, -sin, cos,
            x - x * cos + y * sin, y - x * sin - y * cos);
    };


    p.setToScale = function(sx, sy) {
        return this.setTransform(sx, 0, 0, sy, 0, 0);
    };


    p.toString = function() {
        return 'matrix(' +
            [this.m00_, this.m10_, this.m01_, this.m11_, this.m02_, this.m12_].join(
                ',') +
            ')';
    };

    window.Affine = Affine;

})();
