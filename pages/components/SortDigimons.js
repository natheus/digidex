export default function sortDigimon() {
    const _args = Array.prototype.slice.call(arguments);
    return function (a, b) {
      for (let x in _args) {
        let ax = a[_args[x].substring(1)];
        let bx = b[_args[x].substring(1)];
        let cx;

        ax = typeof ax == "string" ? ax.toLowerCase() : ax / 1;
        bx = typeof bx == "string" ? bx.toLowerCase() : bx / 1;

        if (_args[x].substring(0, 1) === "-") {
          cx = ax;
          ax = bx;
          bx = cx;
        }
        if (ax !== bx) {
          return ax < bx ? -1 : 1;
        }
      }
    };
  }