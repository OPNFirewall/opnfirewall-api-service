class SubnetMask {
    constructor(cidr) {
        this.cidr = cidr
    }

    get netmask () {
        var mask=[];
        for(var i=0;i<4;i++) {
          var n = Math.min(this.cidr, 8);
          mask.push(256 - Math.pow(2, 8-n));
          bitCount -= n;
        }
        return mask.join('.');
    };
}