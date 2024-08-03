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
        r.a(e, async (e, n) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => p,
                getServerSideProps: () => y,
                getStaticPaths: () => h,
                getStaticProps: () => f,
                reportWebVitals: () => m,
                routeModule: () => S,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => _,
                unstable_getStaticParams: () => b,
                unstable_getStaticPaths: () => x,
                unstable_getStaticProps: () => P,
              });
            var a = r(7093),
              i = r(5244),
              s = r(1323),
              o = r(2899),
              l = r.n(o),
              c = r(6814),
              u = r(6971),
              d = e([c]);
            c = (d.then ? (await d)() : d)[0];
            let p = (0, s.l)(u, 'default'),
              f = (0, s.l)(u, 'getStaticProps'),
              h = (0, s.l)(u, 'getStaticPaths'),
              y = (0, s.l)(u, 'getServerSideProps'),
              g = (0, s.l)(u, 'config'),
              m = (0, s.l)(u, 'reportWebVitals'),
              P = (0, s.l)(u, 'unstable_getStaticProps'),
              x = (0, s.l)(u, 'unstable_getStaticPaths'),
              b = (0, s.l)(u, 'unstable_getStaticParams'),
              v = (0, s.l)(u, 'unstable_getServerProps'),
              _ = (0, s.l)(u, 'unstable_getServerSideProps'),
              S = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: c.default, Document: l() },
                userland: u,
              });
            n();
          } catch (e) {
            n(e);
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
        let n = r(167),
          a = r(997),
          i = n._(r(6689)),
          s = n._(r(7828)),
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
        class u extends i.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              r =
                this.props.title || o[e] || 'An unexpected error has occurred';
            return (0, a.jsxs)('div', {
              style: c.error,
              children: [
                (0, a.jsx)(s.default, {
                  children: (0, a.jsx)('title', {
                    children: e
                      ? e + ': ' + r
                      : 'Application error: a client-side exception has occurred',
                  }),
                }),
                (0, a.jsxs)('div', {
                  style: c.desc,
                  children: [
                    (0, a.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                          (t
                            ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                            : ''),
                      },
                    }),
                    e
                      ? (0, a.jsx)('h1', {
                          className: 'next-error-h1',
                          style: c.h1,
                          children: e,
                        })
                      : null,
                    (0, a.jsx)('div', {
                      style: c.wrap,
                      children: (0, a.jsxs)('h2', {
                        style: c.h2,
                        children: [
                          this.props.title || e
                            ? r
                            : (0, a.jsx)(a.Fragment, {
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
            hasQuery: n = !1,
          } = void 0 === e ? {} : e;
          return t || (r && n);
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
              return y;
            },
            defaultHead: function () {
              return d;
            },
          });
        let n = r(167),
          a = r(8760),
          i = r(997),
          s = a._(r(6689)),
          o = n._(r(7215)),
          l = r(8039),
          c = r(1988),
          u = r(5495);
        function d(e) {
          void 0 === e && (e = !1);
          let t = [(0, i.jsx)('meta', { charSet: 'utf-8' })];
          return (
            e ||
              t.push(
                (0, i.jsx)('meta', {
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
            : t.type === s.default.Fragment
              ? e.concat(
                  s.default.Children.toArray(t.props.children).reduce(
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
                  n = {};
                return (a) => {
                  let i = !0,
                    s = !1;
                  if (
                    a.key &&
                    'number' != typeof a.key &&
                    a.key.indexOf('$') > 0
                  ) {
                    s = !0;
                    let t = a.key.slice(a.key.indexOf('$') + 1);
                    e.has(t) ? (i = !1) : e.add(t);
                  }
                  switch (a.type) {
                    case 'title':
                    case 'base':
                      t.has(a.type) ? (i = !1) : t.add(a.type);
                      break;
                    case 'meta':
                      for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (a.props.hasOwnProperty(t)) {
                          if ('charSet' === t) r.has(t) ? (i = !1) : r.add(t);
                          else {
                            let e = a.props[t],
                              r = n[t] || new Set();
                            ('name' !== t || !s) && r.has(e)
                              ? (i = !1)
                              : (r.add(e), (n[t] = r));
                          }
                        }
                      }
                  }
                  return i;
                };
              })(),
            )
            .reverse()
            .map((e, t) => {
              let n = e.key || t;
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
                  s.default.cloneElement(e, t)
                );
              }
              return s.default.cloneElement(e, { key: n });
            });
        }
        let y = function (e) {
          let { children: t } = e,
            r = (0, s.useContext)(l.AmpStateContext),
            n = (0, s.useContext)(c.HeadManagerContext);
          return (0, i.jsx)(o.default, {
            reduceComponentsToState: h,
            headManager: n,
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
              return s;
            },
          });
        let n = r(6689),
          a = () => {},
          i = () => {};
        function s(e) {
          var t;
          let { headManager: r, reduceComponentsToState: s } = e;
          function o() {
            if (r && r.mountedInstances) {
              let t = n.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean),
              );
              r.updateHead(s(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            o(),
            a(() => {
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
            a(
              () => (
                r && (r._pendingUpdate = o),
                () => {
                  r && (r._pendingUpdate = o);
                }
              ),
            ),
            i(
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
        r.a(e, async (e, n) => {
          try {
            r.r(t), r.d(t, { default: () => d });
            var a = r(997);
            r(6689);
            var i = r(1597),
              s = r(8112),
              o = r(968),
              l = r.n(o);
            r(9517);
            var c = r(6896),
              u = e([i]);
            let d = (i = (u.then ? (await u)() : u)[0]).Y.withRedux(function ({
              Component: e,
              pageProps: t,
            }) {
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  a.jsx(l(), {
                    children: a.jsx('link', {
                      rel: 'shortcut icon',
                      href: '../images/favicon.ico',
                    }),
                  }),
                  a.jsx(s.f, {
                    children: a.jsx(c.$, { children: a.jsx(e, { ...t }) }),
                  }),
                ],
              });
            });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      6896: (e, t, r) => {
        'use strict';
        r.d(t, { $: () => s, z: () => i });
        var n = r(997),
          a = r(6689);
        let i = (0, a.createContext)(void 0),
          s = ({ children: e }) => {
            let [t, r] = (0, a.useState)(!1);
            return n.jsx(i.Provider, {
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
        r.d(t, { N: () => i, f: () => s });
        var n = r(997),
          a = r(6689);
        let i = (0, a.createContext)({
            isStandartTheme: !0,
            changeTheme: () => {},
          }),
          s = ({ children: e }) => {
            let [t, r] = (0, a.useState)(!0);
            return n.jsx(i.Provider, {
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
        r.a(e, async (e, n) => {
          try {
            r.d(t, { EJ: () => s, bT: () => o, f5: () => l });
            var a = r(9943),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createApi)({
                reducerPath: 'planetsApi',
                baseQuery: (0, a.fetchBaseQuery)({
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
              { useGetPlanetByIdQuery: o, useSearchPlanetQuery: l } = s;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      7010: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Hf: () => l, hp: () => s });
            var a = r(3258),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createSlice)({
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
              { changeDetails: o, changeItemId: l } = s.actions;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      4996: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { B: () => s });
            var a = r(3258),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createSlice)({
                name: 'selectedItems',
                initialState: { isLoading: !0 },
                reducers: {
                  switchLoading: (e, t) => {
                    e.isLoading = t.payload;
                  },
                },
              }),
              { switchLoading: o } = s.actions;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      1597: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Y: () => o });
            var a = r(5648),
              i = r(5259),
              s = e([i]);
            i = (s.then ? (await s)() : s)[0];
            let o = (0, a.createWrapper)(() => i.h);
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      2598: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { IT: () => c, VE: () => s, fz: () => l, o_: () => o });
            var a = r(3258),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createSlice)({
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
              } = s.actions;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      5306: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Q: () => s });
            var a = r(3258),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createSlice)({
                name: 'searchResults',
                initialState: { results: null },
                reducers: {
                  setResults: (e, t) => {
                    e.results = t.payload;
                  },
                },
              }),
              { setResults: o } = s.actions;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      7960: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { BF: () => o, ZP: () => u, cl: () => l, hF: () => c });
            var a = r(3258),
              i = e([a]);
            a = (i.then ? (await i)() : i)[0];
            let s = (0, a.createSlice)({
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
              { check: o, uncheck: l, unselect: c } = s.actions,
              u = s.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      5259: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { h: () => p });
            var a = r(3258),
              i = r(7960),
              s = r(8011),
              o = r(4996),
              l = r(2598),
              c = r(7010),
              u = r(5306),
              d = e([a, i, s, o, l, c, u]);
            [a, i, s, o, l, c, u] = d.then ? (await d)() : d;
            let p = (0, a.configureStore)({
              reducer: {
                selectedItems: i.ZP,
                isLoading: o.B.reducer,
                pageSlice: l.VE.reducer,
                currentDetails: c.hp.reducer,
                [s.EJ.reducerPath]: s.EJ.reducer,
                searchResults: u.Q.reducer,
              },
              middleware: (e) => e().concat(s.EJ.middleware),
            });
            n();
          } catch (e) {
            n(e);
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
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      8760: (e, t) => {
        'use strict';
        function r(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        t._ = t._interop_require_wildcard = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in e)
            if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, s, o)
                : (a[s] = e[s]);
            }
          return (a.default = e), n && n.set(e, a), a;
        };
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [899], () => r(4258));
  module.exports = n;
})();
