function () {
  try {
    var trackers = ga.getAll();
    return trackers.map(function(tracker) {
      return tracker.get('clientId')
    }).filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    }).join(';');
  } catch(e) {}  
  return 'na';
}
