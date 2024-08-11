(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
      6814: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t), a.d(t, { default: () => h });
            var s = a(997);
            a(6689);
            var c = a(1597),
              i = a(8112),
              n = a(968),
              l = a.n(n),
              u = a(3291);
            a(9517);
            var d = a(6896),
              o = e([c, u]);
            [c, u] = o.then ? (await o)() : o;
            let h = function ({ Component: e, ...t }) {
              let { store: a, props: r } = c.Y.useWrappedStore(t);
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  s.jsx(l(), {
                    children: s.jsx('link', {
                      rel: 'shortcut icon',
                      href: '../images/favicon.ico',
                    }),
                  }),
                  s.jsx(u.Provider, {
                    store: a,
                    children: s.jsx(i.f, {
                      children: s.jsx(d.$, {
                        children: s.jsx(e, { ...r.pageProps }),
                      }),
                    }),
                  }),
                ],
              });
            };
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
            a.d(t, { EJ: () => i, bT: () => n, f5: () => l });
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
              { useGetPlanetByIdQuery: n, useSearchPlanetQuery: l } = i;
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
            a.d(t, { Hf: () => l, hp: () => i });
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
              { changeDetails: n, changeItemId: l } = i.actions;
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
              { switchLoading: n } = i.actions;
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
            a.d(t, { Y: () => n });
            var s = a(5648),
              c = a(5259),
              i = e([c]);
            c = (i.then ? (await i)() : i)[0];
            let n = (0, s.createWrapper)(() => c.h);
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
            a.d(t, { IT: () => u, VE: () => i, fz: () => l, o_: () => n });
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
                switchPage: n,
                nextPage: l,
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
              { setResults: n } = i.actions;
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
            a.d(t, { BF: () => n, ZP: () => d, cl: () => l, hF: () => u });
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
              { check: n, uncheck: l, unselect: u } = i.actions,
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
              n = a(4996),
              l = a(2598),
              u = a(7010),
              d = a(5306),
              o = e([s, c, i, n, l, u, d]);
            [s, c, i, n, l, u, d] = o.then ? (await o)() : o;
            let h = (0, s.configureStore)({
              reducer: {
                selectedItems: c.ZP,
                isLoading: n.B.reducer,
                pageSlice: l.VE.reducer,
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
      968: (e) => {
        'use strict';
        e.exports = require('next/head');
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
      3291: (e) => {
        'use strict';
        e.exports = import('react-redux');
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var a = t((t.s = 6814));
  module.exports = a;
})();
