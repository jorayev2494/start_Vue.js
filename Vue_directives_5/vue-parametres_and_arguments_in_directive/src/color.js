export default {
  // bind: function(el, bindings, vnode) {
  //   el.style.color = bindings.value;
  //   console.log(bindings);
  // }

  bind: function(el, bindings, vnode) {
    const args = bindings.arg;
    // el.style.color = bindings.value;
    el.style[args] = bindings.value;
    console.log([el, bindings, vnode]);
  }
}
