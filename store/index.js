export const state = () => ({
  posts: [
    'Das Artefakt zeigt seine eigene Gemachtheit und wirkt subjektiv auf die Betrachter*innen.',
    'Es hinterfragt sich selbst und den Kontext; es stellt keine neue Lösung dar.',
    'Die Ästhetik richtet sich an der Geschichte und/oder dem Kontext aus, nicht den eigenen Präferenzen.',
    'Missverständnisse und Irritationen sind erwünscht, begründen sich aber auf dem zu reflektierenden Forschungsgegenstand und nicht der Schaulust.',
    'Die Neusetzung muss in sich funktionieren und darf nicht fingieren.',
    'Das Artefakt und die/der Erschaffer*in sind nicht wissend und dürfen auch keinen anderen Anschein erwecken.',
    'Die Einflüsse und Gedanken werden den Betrachter*innen zugänglich gemacht und nicht verschleiert.',
    'Das Artefakt und die/der Erschaffer*in sind offen für andere Deutungen und Schlüsse.',
    'Es ist aktuell; im hier und jetzt; zeitlich begrenzt.',
    'Es ist präzise und demütig.'
  ]
});

export const mutations = {
  sortManifest(state) {
    state.posts.sort(function () {
      return .5 - Math.random();
    });
    /*
    let randomised = state.posts;
    let m = randomised.length, t, i;
    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = randomised[m];
      randomised[m] = randomised[i];
      randomised[i] = t;
    }
    state.posts = randomised;
     */
  },
};
