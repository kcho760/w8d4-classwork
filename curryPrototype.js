Function.prototype.curry(numArgs) = () => {
    let that = this
    let args = []

    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.apply(null, args)
        };
        return _curry
    }
}

