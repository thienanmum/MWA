const counter = {
    count: 0,
    increase() {
        //console.log(++this.count);
        function f () {
            console.log(this);
            //console.log(++this.count);
        };
        f();
        // setTimeout(function() {
        //     console.log(this);
        //     console.log(++this.count);
        // }, 1000);
    }
}
counter.increase();