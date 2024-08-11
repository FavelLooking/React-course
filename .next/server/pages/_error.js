(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      1323: (e, t) => {
        'use strict';
        Object.defineProperty(t, 'l', {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : 'then' in t && 'function' == typeof t.then
                  ? t.then((t) => e(t, r))
                  : 'function' == typeof t && 'default' === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      4258: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => y,
                default: () => p,
                getServerSideProps: () => g,
                getStaticPaths: () => h,
                getStaticProps: () => f,
                reportWebVitals: () => m,
                routeModule: () => S,
                unstable_getServerProps: () => b,
                unstable_getServerSideProps: () => _,
                unstable_getStaticParams: () => v,
                unstable_getStaticPaths: () => x,
                unstable_getStaticProps: () => P,
              });
            var n = r(7093),
              s = r(5244),
              i = r(1323),
              o = r(2899),
              l = r.n(o),
              c = r(6814),
              u = r(6971),
              d = e([c]);
            c = (d.then ? (await d)() : d)[0];
            let p = (0, i.l)(u, 'default'),
              f = (0, i.l)(u, 'getStaticProps'),
              h = (0, i.l)(u, 'getStaticPaths'),
              g = (0, i.l)(u, 'getServerSideProps'),
              y = (0, i.l)(u, 'config'),
              m = (0, i.l)(u, 'reportWebVitals'),
              P = (0, i.l)(u, 'unstable_getStaticProps'),
              x = (0, i.l)(u, 'unstable_getStaticPaths'),
              v = (0, i.l)(u, 'unstable_getStaticParams'),
              b = (0, i.l)(u, 'unstable_getServerProps'),
              _ = (0, i.l)(u, 'unstable_getServerSideProps'),
              S = new n.PagesRouteModule({
                definition: {
                  kind: s.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: c.default, Document: l() },
                userland: u,
              });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      6971: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let a = r(167),
          n = r(997),
          s = a._(r(6689)),
          i = a._(r(7828)),
          o = {
            400: 'Bad Request',
            404: 'This page could not be found',
            405: 'Method Not Allowed',
            500: 'Internal Server Error',
          };
        function l(e) {
          let { res: t, err: r } = e;
          return {
            statusCode:
              t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
          };
        }
        let c = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { lineHeight: '48px' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
          wrap: { display: 'inline-block' },
        };
        class u extends s.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              r =
                this.props.title || o[e] || 'An unexpected error has occurred';
            return (0, n.jsxs)('div', {
              style: c.error,
              children: [
                (0, n.jsx)(i.default, {
                  children: (0, n.jsx)('title', {
                    children: e
                      ? e + ': ' + r
                      : 'Application error: a client-side exception has occurred',
                  }),
                }),
                (0, n.jsxs)('div', {
                  style: c.desc,
                  children: [
                    (0, n.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                          (t
                            ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                            : ''),
                      },
                    }),
                    e
                      ? (0, n.jsx)('h1', {
                          className: 'next-error-h1',
                          style: c.h1,
                          children: e,
                        })
                      : null,
                    (0, n.jsx)('div', {
                      style: c.wrap,
                      children: (0, n.jsxs)('h2', {
                        style: c.h2,
                        children: [
                          this.props.title || e
                            ? r
                            : (0, n.jsx)(n.Fragment, {
                                children:
                                  'Application error: a client-side exception has occurred (see the browser console for more information)',
                              }),
                          '.',
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (u.displayName = 'ErrorPage'),
          (u.getInitialProps = l),
          (u.origGetInitialProps = l),
          ('function' == typeof t.default ||
            ('object' == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, '__esModule', { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      5495: (e, t) => {
        'use strict';
        function r(e) {
          let {
            ampFirst: t = !1,
            hybrid: r = !1,
            hasQuery: a = !1,
          } = void 0 === e ? {} : e;
          return t || (r && a);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'isInAmpMode', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      7828: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return g;
            },
            defaultHead: function () {
              return d;
            },
          });
        let a = r(167),
          n = r(8760),
          s = r(997),
          i = n._(r(6689)),
          o = a._(r(7215)),
          l = r(8039),
          c = r(1988),
          u = r(5495);
        function d(e) {
          void 0 === e && (e = !1);
          let t = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
          return (
            e ||
              t.push(
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width',
                }),
              ),
            t
          );
        }
        function p(e, t) {
          return 'string' == typeof t || 'number' == typeof t
            ? e
            : t.type === i.default.Fragment
              ? e.concat(
                  i.default.Children.toArray(t.props.children).reduce(
                    (e, t) =>
                      'string' == typeof t || 'number' == typeof t
                        ? e
                        : e.concat(t),
                    [],
                  ),
                )
              : e.concat(t);
        }
        r(1997);
        let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
        function h(e, t) {
          let { inAmpMode: r } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(d(r).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  r = new Set(),
                  a = {};
                return (n) => {
                  let s = !0,
                    i = !1;
                  if (
                    n.key &&
                    'number' != typeof n.key &&
                    n.key.indexOf('$') > 0
                  ) {
                    i = !0;
                    let t = n.key.slice(n.key.indexOf('$') + 1);
                    e.has(t) ? (s = !1) : e.add(t);
                  }
                  switch (n.type) {
                    case 'title':
                    case 'base':
                      t.has(n.type) ? (s = !1) : t.add(n.type);
                      break;
                    case 'meta':
                      for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (n.props.hasOwnProperty(t)) {
                          if ('charSet' === t) r.has(t) ? (s = !1) : r.add(t);
                          else {
                            let e = n.props[t],
                              r = a[t] || new Set();
                            ('name' !== t || !i) && r.has(e)
                              ? (s = !1)
                              : (r.add(e), (a[t] = r));
                          }
                        }
                      }
                  }
                  return s;
                };
              })(),
            )
            .reverse()
            .map((e, t) => {
              let a = e.key || t;
              if (
                !r &&
                'link' === e.type &&
                e.props.href &&
                [
                  'https://fonts.googleapis.com/css',
                  'https://use.typekit.net/',
                ].some((t) => e.props.href.startsWith(t))
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t['data-href'] = t.href),
                  (t.href = void 0),
                  (t['data-optimized-fonts'] = !0),
                  i.default.cloneElement(e, t)
                );
              }
              return i.default.cloneElement(e, { key: a });
            });
        }
        let g = function (e) {
          let { children: t } = e,
            r = (0, i.useContext)(l.AmpStateContext),
            a = (0, i.useContext)(c.HeadManagerContext);
          return (0, s.jsx)(o.default, {
            reduceComponentsToState: h,
            headManager: a,
            inAmpMode: (0, u.isInAmpMode)(r),
            children: t,
          });
        };
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      7215: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let a = r(6689),
          n = () => {},
          s = () => {};
        function i(e) {
          var t;
          let { headManager: r, reduceComponentsToState: i } = e;
          function o() {
            if (r && r.mountedInstances) {
              let t = a.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean),
              );
              r.updateHead(i(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            o(),
            n(() => {
              var t;
              return (
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.add(e.children),
                () => {
                  var t;
                  null == r ||
                    null == (t = r.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            n(
              () => (
                r && (r._pendingUpdate = o),
                () => {
                  r && (r._pendingUpdate = o);
                }
              ),
            ),
            s(
              () => (
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null)),
                () => {
                  r &&
                    r._pendingUpdate &&
                    (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      },
      1997: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'warnOnce', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = (e) => {};
      },
      6814: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => p });
            var n = r(997);
            r(6689);
            var s = r(1597),
              i = r(8112),
              o = r(968),
              l = r.n(o),
              c = r(3291);
            r(9517);
            var u = r(6896),
              d = e([s, c]);
            [s, c] = d.then ? (await d)() : d;
            let p = function ({ Component: e, ...t }) {
              let { store: r, props: a } = s.Y.useWrappedStore(t);
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  n.jsx(l(), {
                    children: n.jsx('link', {
                      rel: 'shortcut icon',
                      href: '../images/favicon.ico',
                    }),
                  }),
                  n.jsx(c.Provider, {
                    store: r,
                    children: n.jsx(i.f, {
                      children: n.jsx(u.$, {
                        children: n.jsx(e, { ...a.pageProps }),
                      }),
                    }),
                  }),
                ],
              });
            };
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      6896: (e, t, r) => {
        'use strict';
        r.d(t, { $: () => i, z: () => s });
        var a = r(997),
          n = r(6689);
        let s = (0, n.createContext)(void 0),
          i = ({ children: e }) => {
            let [t, r] = (0, n.useState)(!1);
            return a.jsx(s.Provider, {
              value: {
                clicked: t,
                setClicked: r,
                resetClicked: () => {
                  r(!1);
                },
              },
              children: e,
            });
          };
      },
      8112: (e, t, r) => {
        'use strict';
        r.d(t, { N: () => s, f: () => i });
        var a = r(997),
          n = r(6689);
        let s = (0, n.createContext)({
            isStandartTheme: !0,
            changeTheme: () => {},
          }),
          i = ({ children: e }) => {
            let [t, r] = (0, n.useState)(!0);
            return a.jsx(s.Provider, {
              value: {
                isStandartTheme: t,
                changeTheme: () => {
                  r((e) => !e);
                },
              },
              children: e,
            });
          };
      },
      8011: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { EJ: () => i, bT: () => o, f5: () => l });
            var n = r(9943),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createApi)({
                reducerPath: 'planetsApi',
                baseQuery: (0, n.fetchBaseQuery)({
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
              { useGetPlanetByIdQuery: o, useSearchPlanetQuery: l } = i;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      7010: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Hf: () => l, hp: () => i });
            var n = r(3258),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createSlice)({
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
              { changeDetails: o, changeItemId: l } = i.actions;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      4996: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { B: () => i });
            var n = r(3258),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createSlice)({
                name: 'selectedItems',
                initialState: { isLoading: !0 },
                reducers: {
                  switchLoading: (e, t) => {
                    e.isLoading = t.payload;
                  },
                },
              }),
              { switchLoading: o } = i.actions;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      1597: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Y: () => o });
            var n = r(5648),
              s = r(5259),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let o = (0, n.createWrapper)(() => s.h);
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      2598: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { IT: () => c, VE: () => i, fz: () => l, o_: () => o });
            var n = r(3258),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createSlice)({
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
                switchPage: o,
                nextPage: l,
                previousPage: c,
                setTotalPages: u,
              } = i.actions;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      5306: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Q: () => i });
            var n = r(3258),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createSlice)({
                name: 'searchResults',
                initialState: { results: null },
                reducers: {
                  setResults: (e, t) => {
                    e.results = t.payload;
                  },
                },
              }),
              { setResults: o } = i.actions;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      7960: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { BF: () => o, ZP: () => u, cl: () => l, hF: () => c });
            var n = r(3258),
              s = e([n]);
            n = (s.then ? (await s)() : s)[0];
            let i = (0, n.createSlice)({
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
              { check: o, uncheck: l, unselect: c } = i.actions,
              u = i.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      5259: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { h: () => p });
            var n = r(3258),
              s = r(7960),
              i = r(8011),
              o = r(4996),
              l = r(2598),
              c = r(7010),
              u = r(5306),
              d = e([n, s, i, o, l, c, u]);
            [n, s, i, o, l, c, u] = d.then ? (await d)() : d;
            let p = (0, n.configureStore)({
              reducer: {
                selectedItems: s.ZP,
                isLoading: o.B.reducer,
                pageSlice: l.VE.reducer,
                currentDetails: c.hp.reducer,
                [i.EJ.reducerPath]: i.EJ.reducer,
                searchResults: u.Q.reducer,
              },
              middleware: (e) => e().concat(i.EJ.middleware),
            });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      9517: () => {},
      5244: (e, t) => {
        'use strict';
        var r;
        Object.defineProperty(t, 'x', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = 'PAGES'),
              (e.PAGES_API = 'PAGES_API'),
              (e.APP_PAGE = 'APP_PAGE'),
              (e.APP_ROUTE = 'APP_ROUTE');
          })(r || (r = {}));
      },
      8039: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.AmpContext;
      },
      1988: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.HeadManagerContext;
      },
      5648: (e) => {
        'use strict';
        e.exports = require('next-redux-wrapper');
      },
      2785: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
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
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      8760: (e, t) => {
        'use strict';
        function r(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            a = new WeakMap();
          return (r = function (e) {
            return e ? a : t;
          })(e);
        }
        t._ = t._interop_require_wildcard = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var a = r(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), a && a.set(e, n), n;
        };
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [899], () => r(4258));
  module.exports = a;
})();
