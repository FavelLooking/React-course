(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
      6814: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t), a.d(t, { default: () => u });
            var s = a(997);
            a(6689);
            var c = a(1597),
              i = a(8112);
            a(9517);
            var l = a(6896),
              n = e([c]);
            let u = (c = (n.then ? (await n)() : n)[0]).Y.withRedux(function ({
              Component: e,
              pageProps: t,
            }) {
              return s.jsx(i.f, {
                children: s.jsx(l.$, { children: s.jsx(e, { ...t }) }),
              });
            });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      6896: (e, t, a) => {
        'use strict';
        a.d(t, { $: () => i, z: () => c });
        var r = a(997),
          s = a(6689);
        let c = (0, s.createContext)(void 0),
          i = ({ children: e }) => {
            let [t, a] = (0, s.useState)(!1);
            return r.jsx(c.Provider, {
              value: {
                clicked: t,
                setClicked: a,
                resetClicked: () => {
                  a(!1);
                },
              },
              children: e,
            });
          };
      },
      8112: (e, t, a) => {
        'use strict';
        a.d(t, { N: () => c, f: () => i });
        var r = a(997),
          s = a(6689);
        let c = (0, s.createContext)({
            isStandartTheme: !0,
            changeTheme: () => {},
          }),
          i = ({ children: e }) => {
            let [t, a] = (0, s.useState)(!0);
            return r.jsx(c.Provider, {
              value: {
                isStandartTheme: t,
                changeTheme: () => {
                  a((e) => !e);
                },
              },
              children: e,
            });
          };
      },
      8011: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { EJ: () => i, bT: () => l, f5: () => n });
            var s = a(9943),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createApi)({
                reducerPath: 'planetsApi',
                baseQuery: (0, s.fetchBaseQuery)({
                  baseUrl: 'https://stapi.co/api/v2/rest/',
                }),
                endpoints: (e) => ({
                  getPlanetById: e.query({
                    query: (e) => `astronomicalObject?uid=${e}`,
                  }),
                  searchPlanet: e.query({
                    query: ({ searchItem: e, currentPage: t }) => ({
                      url: `astronomicalObject/search?pageSize=10&pageNumber=${t - 1}`,
                      method: 'POST',
                      body: new URLSearchParams({ name: e }),
                    }),
                  }),
                }),
              }),
              { useGetPlanetByIdQuery: l, useSearchPlanetQuery: n } = i;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      7010: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { Hf: () => n, hp: () => i });
            var s = a(3258),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createSlice)({
                name: 'currentDetails',
                initialState: {
                  details: { name: '', location: '', type: '' },
                  currentId: '',
                },
                reducers: {
                  changeDetails: (e, t) => {
                    e.details = t.payload;
                  },
                  changeItemId: (e, t) => {
                    e.currentId = t.payload;
                  },
                },
              }),
              { changeDetails: l, changeItemId: n } = i.actions;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      4996: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { B: () => i });
            var s = a(3258),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createSlice)({
                name: 'selectedItems',
                initialState: { isLoading: !0 },
                reducers: {
                  switchLoading: (e, t) => {
                    e.isLoading = t.payload;
                  },
                },
              }),
              { switchLoading: l } = i.actions;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      1597: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { Y: () => l });
            var s = a(5648),
              c = a(5259),
              i = e([c]);
            c = (i.then ? (await i)() : i)[0];
            let l = (0, s.createWrapper)(() => c.h);
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      2598: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { IT: () => u, VE: () => i, fz: () => n, o_: () => l });
            var s = a(3258),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createSlice)({
                name: 'page',
                initialState: { page: 1, totalPages: 0 },
                reducers: {
                  switchPage: (e, t) => {
                    e.page = t.payload;
                  },
                  nextPage: (e) => {
                    e.page += 1;
                  },
                  previousPage: (e) => {
                    e.page -= 1;
                  },
                  setTotalPages: (e, t) => {
                    e.totalPages = t.payload;
                  },
                },
              }),
              {
                switchPage: l,
                nextPage: n,
                previousPage: u,
                setTotalPages: d,
              } = i.actions;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      5306: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { Q: () => i });
            var s = a(3258),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createSlice)({
                name: 'searchResults',
                initialState: { results: null },
                reducers: {
                  setResults: (e, t) => {
                    e.results = t.payload;
                  },
                },
              }),
              { setResults: l } = i.actions;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      7960: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { BF: () => l, ZP: () => d, cl: () => n, hF: () => u });
            var s = a(3258),
              c = e([s]);
            s = (c.then ? (await c)() : c)[0];
            let i = (0, s.createSlice)({
                name: 'selectedItems',
                initialState: { items: [] },
                reducers: {
                  check: (e, t) => {
                    e.items.push(t.payload);
                  },
                  uncheck: (e, t) => {
                    e.items = e.items.filter(
                      (e) => e.title !== t.payload.title,
                    );
                  },
                  unselect: (e) => {
                    e.items = [];
                  },
                },
              }),
              { check: l, uncheck: n, unselect: u } = i.actions,
              d = i.reducer;
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      5259: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { h: () => h });
            var s = a(3258),
              c = a(7960),
              i = a(8011),
              l = a(4996),
              n = a(2598),
              u = a(7010),
              d = a(5306),
              o = e([s, c, i, l, n, u, d]);
            [s, c, i, l, n, u, d] = o.then ? (await o)() : o;
            let h = (0, s.configureStore)({
              reducer: {
                selectedItems: c.ZP,
                isLoading: l.B.reducer,
                pageSlice: n.VE.reducer,
                currentDetails: u.hp.reducer,
                [i.EJ.reducerPath]: i.EJ.reducer,
                searchResults: d.Q.reducer,
              },
              middleware: (e) => e().concat(i.EJ.middleware),
            });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      9517: () => {},
      5648: (e) => {
        'use strict';
        e.exports = require('next-redux-wrapper');
      },
      6689: (e) => {
        'use strict';
        e.exports = require('react');
      },
      997: (e) => {
        'use strict';
        e.exports = require('react/jsx-runtime');
      },
      3258: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit');
      },
      9943: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit/query/react');
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var a = t((t.s = 6814));
  module.exports = a;
})();
