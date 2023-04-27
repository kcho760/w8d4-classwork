
Function.prototype.myBind = function(context) { // [pavlov, meow]
    let that = this;
    let args = Array.prototype.slice.call(arguments);
    let bindTimeArgs = args.slice(1); //this will be [meow]

    return function() {
        let callArgs = Array.prototype.slice.call(arguments); //[markov]
        // let callTimeArgs = arguments
        return that.apply(context, bindTimeArgs.concat(callArgs));
    };
}

// meowAt (meow-er, meow-recipient)

// this.name says meow to {}

// fluffy.meowAt.bind(baxter)(tree)
// baxter says meow to tree

Function.prototype.myBind = function(context, ...otherArgs) {//, ...otherArgs) { //otherArgs = [meow]
    let that = this;
    // let bindTimeArgs = otherArgs;

    return function(callArgs) {
        return that.apply(context, otherArgs.concat(callArgs));
    };
}


markov.says.myBind(pavlov, "meow")("Markov");





Function.prototype.myApply = function (ctx, callArgs = []) {
    return this.bind(ctx, ...callArgs)();
    // return this.bind(ctx)(...callArgs)
  };
  
  Function.prototype.myCall = function (ctx, ...callArgs) {
    return this.bind(ctx, ...callArgs)();
    // return this.bind(ctx)(...callArgs)
  }