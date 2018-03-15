const Identity = x => ({
  map: f => Identity(f(x))
});
