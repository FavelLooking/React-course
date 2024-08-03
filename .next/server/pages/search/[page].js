(() => {
  var e = {};
  (e.id = 669),
    (e.ids = [669, 888, 660]),
    (e.modules = {
      4187: (e) => {
        e.exports = { button: 'Button_button__OFOdO' };
      },
      6136: (e) => {
        e.exports = {
          'card-item': 'CardItem_card-item__gQQDh',
          loader: 'CardItem_loader__ZZKVC',
          'name-title': 'CardItem_name-title__TgUWf',
          'location-title': 'CardItem_location-title__G4Azo',
          'type-title': 'CardItem_type-title__txjBp',
          title: 'CardItem_title__N4VAw',
          location: 'CardItem_location__8yngN',
          type: 'CardItem_type__ACW7P',
          'title-small': 'CardItem_title-small__XsdzW',
          'location-small': 'CardItem_location-small__YtxF0',
          'type-small': 'CardItem_type-small__svgPI',
          checkbox: 'CardItem_checkbox__3lblu',
          'card-container': 'CardItem_card-container__ElJc3',
          alternative: 'CardItem_alternative__Aqdaf',
        };
      },
      8042: (e) => {
        e.exports = {
          details: 'Details_details__SjFMq',
          alternative: 'Details_alternative__fTbMs',
        };
      },
      6459: (e) => {
        e.exports = {
          'flyout-container': 'Flyout_flyout-container__EBTg_',
          'flyout-container--hidden': 'Flyout_flyout-container--hidden__nZ_lL',
          'button-container': 'Flyout_button-container__KDW48',
          flyout__button: 'Flyout_flyout__button__1oM0e',
          download: 'Flyout_download__8mGnN',
        };
      },
      6253: (e) => {
        e.exports = {
          header: 'Header_header__1RJ5C',
          header__search: 'Header_header__search__wVi8J',
          alternative: 'Header_alternative___RxIO',
        };
      },
      3280: (e) => {
        e.exports = { loader: 'Loader_loader__7ZWW3' };
      },
      6649: (e) => {
        e.exports = {
          main: 'Main_main__qK_Jw',
          details: 'Main_details__abUpU',
          'no-results': 'Main_no-results__h5rsY',
          search: 'Main_search__CtvuZ',
          'details-active': 'Main_details-active__MLTaW',
          'main-list': 'Main_main-list__1UbiS',
          'card-background': 'Main_card-background__S8eNT',
          'card-small': 'Main_card-small__gFnkk',
          alternative: 'Main_alternative__gV084',
        };
      },
      7030: (e) => {
        e.exports = {
          pagination: 'Pagination_pagination__MQWKm',
          alternative: 'Pagination_alternative__QziKL',
        };
      },
      7761: (e) => {
        e.exports = {
          wrapper: 'App_wrapper__woZth',
          'main-content': 'App_main-content__dWAXq',
        };
      },
      3055: (e) => {
        e.exports = {
          style: {
            fontFamily: "'__myFont_f901e0', '__myFont_Fallback_f901e0'",
          },
          className: '__className_f901e0',
        };
      },
      6914: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t),
              a.d(t, {
                config: () => g,
                default: () => h,
                getServerSideProps: () => _,
                getStaticPaths: () => m,
                getStaticProps: () => p,
                reportWebVitals: () => x,
                routeModule: () => S,
                unstable_getServerProps: () => j,
                unstable_getServerSideProps: () => f,
                unstable_getStaticParams: () => b,
                unstable_getStaticPaths: () => v,
                unstable_getStaticProps: () => y,
              });
            var s = a(7093),
              n = a(5244),
              i = a(1323),
              c = a(2899),
              l = a.n(c),
              o = a(6814),
              u = a(2336),
              d = e([o, u]);
            [o, u] = d.then ? (await d)() : d;
            let h = (0, i.l)(u, 'default'),
              p = (0, i.l)(u, 'getStaticProps'),
              m = (0, i.l)(u, 'getStaticPaths'),
              _ = (0, i.l)(u, 'getServerSideProps'),
              g = (0, i.l)(u, 'config'),
              x = (0, i.l)(u, 'reportWebVitals'),
              y = (0, i.l)(u, 'unstable_getStaticProps'),
              v = (0, i.l)(u, 'unstable_getStaticPaths'),
              b = (0, i.l)(u, 'unstable_getStaticParams'),
              j = (0, i.l)(u, 'unstable_getServerProps'),
              f = (0, i.l)(u, 'unstable_getServerSideProps'),
              S = new s.PagesRouteModule({
                definition: {
                  kind: n.x.PAGES,
                  page: '/search/[page]',
                  pathname: '/search/[page]',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: o.default, Document: l() },
                userland: u,
              });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      7109: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { Z: () => b });
            var s = a(997),
              n = a(3055),
              i = a.n(n),
              c = a(6689),
              l = a.n(c),
              o = a(7761),
              u = a.n(o),
              d = a(2812),
              h = a(4449),
              p = a(4877),
              m = a(7),
              _ = a(3291),
              g = a(2598),
              x = a(7010),
              y = a(1163),
              v = e([d, h, p, _, g, x]);
            [d, h, p, _, g, x] = v.then ? (await v)() : v;
            let b = ({ serversideData: e }) => {
              let t = (0, y.useRouter)(),
                { page: a } = t.query,
                r = (0, _.useDispatch)(),
                n = (0, _.useSelector)((e) => e.pageSlice.totalPages),
                c = (0, _.useSelector)((e) => e.currentDetails.currentId),
                o = (0, _.useSelector)((e) => e.pageSlice.page);
              l().useEffect(() => {
                if (!a) {
                  t.push('/search/1');
                  return;
                }
                let e = parseInt(a, 10);
                isNaN(e) || e <= 0 || (n && e > n)
                  ? t.push('/not-found')
                  : r((0, g.o_)(e));
              }, [a, t, n, r]);
              let v = () => {
                r((0, x.Hf)('')), t.push(`/search/${o}`);
              };
              return (0, s.jsxs)('div', {
                className: `${u().wrapper} ${i().className}`,
                'data-testid': 'app-wrapper',
                children: [
                  s.jsx(m.S, { children: s.jsx(d.h, {}) }),
                  (0, s.jsxs)('div', {
                    className: u()['main-content'],
                    'data-testid': 'main-content',
                    children: [
                      s.jsx(h.o, {
                        onItemClick: (e) => {
                          r((0, x.Hf)(e)),
                            t.push(`${t.asPath.split('&')[0]}&details=${e}`);
                        },
                        hideDetails: v,
                        serversideData: e,
                      }),
                      c && s.jsx(p.P, { onClose: v }),
                    ],
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
      8751: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { S: () => d });
            var s = a(997),
              n = a(3291),
              i = a(6136),
              c = a.n(i),
              l = a(7960),
              o = a(9495);
            a(6689);
            var u = e([n, l]);
            function d({
              title: e,
              location: t,
              astronomicalObjectType: a,
              onClick: r,
            }) {
              let i = (0, n.useDispatch)(),
                u = (0, n.useSelector)((t) =>
                  t.selectedItems.items.some((t) => t.title === e),
                ),
                { isStandartTheme: d } = (0, o.F)();
              return (0, s.jsxs)('div', {
                className: `${c()['card-container']} ${d ? '' : c().alternative}`,
                children: [
                  (0, s.jsxs)('div', {
                    'data-testid': 'card-item',
                    className: c()['card-item'],
                    onClick: r,
                    children: [
                      (0, s.jsxs)('span', {
                        className: c()['name-title'],
                        children: [
                          'Name:',
                          ' ',
                          s.jsx('span', {
                            className:
                              e.length > 30 ? c()['title-small'] : c().title,
                            children: e,
                          }),
                        ],
                      }),
                      (0, s.jsxs)('span', {
                        className: c()['location-title'],
                        children: [
                          'Location:',
                          ' ',
                          s.jsx('span', {
                            className:
                              t && t.length > 20
                                ? c()['location-small']
                                : c().location,
                            children: t || 'Unknown',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('span', {
                        className: c()['type-title'],
                        children: [
                          'Object Type:',
                          ' ',
                          s.jsx('span', {
                            className:
                              a.length > 20 ? c()['type-small'] : c().type,
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx('input', {
                    type: 'checkbox',
                    className: c().checkbox,
                    title: e,
                    checked: u,
                    onChange: () => {
                      let r = { title: e, location: t ?? '', object: a };
                      u ? i((0, l.cl)(r)) : i((0, l.BF)(r));
                    },
                  }),
                ],
              });
            }
            ([n, l] = u.then ? (await u)() : u), r();
          } catch (e) {
            r(e);
          }
        });
      },
      4877: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { P: () => g });
            var s = a(997),
              n = a(8042),
              i = a.n(n),
              c = a(4187),
              l = a.n(c),
              o = a(4560),
              u = a(9495),
              d = a(8011),
              h = a(2711),
              p = a(3291);
            a(6689);
            var m = a(7010),
              _ = e([d, p, m]);
            function g({ onClose: e }) {
              let t = (0, p.useSelector)((e) => e.currentDetails.currentId),
                a = (0, p.useSelector)((e) => e.currentDetails.details),
                { resetClicked: r } = (0, o._)(),
                { isStandartTheme: n } = (0, u.F)(),
                { data: c, error: m, isLoading: _ } = (0, d.bT)(t);
              return ((0, p.useDispatch)(), _)
                ? s.jsx('div', {
                    className: i()['main-content'],
                    children: s.jsx(h.a, {}),
                  })
                : m
                  ? s.jsx('div', { children: 'Error' })
                  : c
                    ? (0, s.jsxs)('div', {
                        className: `${i().details} ${n ? '' : i().alternative}`,
                        children: [
                          s.jsx('h2', { children: a.name }),
                          s.jsx('p', { children: a.type }),
                          s.jsx('p', { children: a.location }),
                          s.jsx('button', {
                            className: l().button,
                            onClick: () => {
                              e(), r();
                            },
                            children: 'Close',
                          }),
                        ],
                      })
                    : null;
            }
            ([d, p, m] = _.then ? (await _)() : _), r();
          } catch (e) {
            r(e);
          }
        });
      },
      7: (e, t, a) => {
        'use strict';
        a.d(t, { S: () => i });
        var r = a(997),
          s = a(6689),
          n = a.n(s);
        class i extends n().Component {
          static getDerivedStateFromError(e) {
            return { errorMessage: e.toString() };
          }
          render() {
            return this.state.errorMessage
              ? r.jsx('p', {
                  className: 'error',
                  children: 'The universe is not favoring you today.',
                })
              : this.props.children;
          }
          constructor(...e) {
            super(...e), (this.state = { errorMessage: '' });
          }
        }
      },
      8120: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { z: () => p });
            var s = a(997),
              n = a(3291),
              i = a(6459),
              c = a.n(i),
              l = a(4187),
              o = a.n(l),
              u = a(7960),
              d = a(6689),
              h = e([n, u]);
            function p() {
              let e = (0, n.useDispatch)(),
                t = (0, n.useSelector)((e) => e.selectedItems.items.length > 0),
                a = (0, n.useSelector)((e) => e.selectedItems.items.length),
                r = (0, n.useSelector)((e) => e.selectedItems.items),
                [i, l] = (0, d.useState)(null),
                h = (0, d.useRef)(null),
                p = () => {
                  if (0 === r.length) return '';
                  let e = Object.keys(r[0]).join(';'),
                    t = r.map((e) => Object.values(e).join(';')).join('\n');
                  return `${e}
${t}`;
                };
              return (0, s.jsxs)('div', {
                className: t
                  ? c()['flyout-container']
                  : c()['flyout-container--hidden'],
                children: [
                  (0, s.jsxs)('span', {
                    children: [
                      a,
                      ' objects ',
                      1 === a ? 'is' : 'are',
                      ' selected',
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: c()['button-container'],
                    children: [
                      s.jsx('button', {
                        type: 'button',
                        onClick: () => {
                          e((0, u.hF)());
                        },
                        className: `${c().flyout__button} ${o().button}`,
                        children: 'Unselect All',
                      }),
                      s.jsx('button', {
                        type: 'button',
                        className: `${c().flyout__button} ${o().button}`,
                        onClick: () => {
                          let e = p(),
                            t = new Blob([e], { type: 'text/csv' }),
                            a = URL.createObjectURL(t);
                          l(a);
                        },
                        children: 'Download',
                      }),
                      i &&
                        s.jsx('a', {
                          className: c().download,
                          href: i,
                          download: `${a}-Asctronomical-objects.csv`,
                          ref: h,
                          children: 'Download',
                        }),
                    ],
                  }),
                ],
              });
            }
            ([n, u] = h.then ? (await h)() : h), r();
          } catch (e) {
            r(e);
          }
        });
      },
      2812: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { h: () => v });
            var s = a(997),
              n = a(6689),
              i = a(3291),
              c = a(6253),
              l = a.n(c),
              o = a(4187),
              u = a.n(o),
              d = a(4879),
              h = a(9495),
              p = a(8011),
              m = a(4996),
              _ = a(2598),
              g = a(5306),
              x = a(1163),
              y = e([i, p, m, _, g]);
            function v() {
              let [e, t] = (0, n.useState)(!1),
                [a, r] = (0, n.useState)(''),
                c = (0, x.useRouter)(),
                o = (0, i.useDispatch)(),
                m = (0, i.useSelector)((e) => e.pageSlice.page),
                [g, y] = (0, d.A)(''),
                { isStandartTheme: v, changeTheme: b } = (0, h.F)(),
                {
                  data: j,
                  error: f,
                  isFetching: S,
                } = (0, p.f5)({ searchItem: g ?? '', currentPage: m });
              return e || f
                ? s.jsx('div', {
                    children: 'An error occurred. Please try again later.',
                  })
                : (0, s.jsxs)('form', {
                    className: `${l().header} ${v ? '' : l().alternative}`,
                    onSubmit: (e) => {
                      e.preventDefault(),
                        y(a),
                        o((0, _.o_)(1)),
                        c.push('/search/1');
                    },
                    children: [
                      s.jsx('input', {
                        className: l().header__search,
                        type: 'text',
                        placeholder: 'Enter planet or star name',
                        value: a,
                        onChange: (e) => r(e.target.value),
                      }),
                      s.jsx('button', {
                        className: u().button,
                        type: 'submit',
                        children: 'Search',
                      }),
                      s.jsx('button', {
                        className: u().button,
                        type: 'button',
                        onClick: () => {
                          t(!e);
                        },
                        children: 'Get Error',
                      }),
                      s.jsx('button', {
                        className: u().button,
                        type: 'button',
                        onClick: () => {
                          b();
                        },
                        children: 'Next Theme',
                      }),
                    ],
                  });
            }
            ([i, p, m, _, g] = y.then ? (await y)() : y), r();
          } catch (e) {
            r(e);
          }
        });
      },
      2711: (e, t, a) => {
        'use strict';
        a.d(t, { a: () => i });
        var r = a(997),
          s = a(3280),
          n = a.n(s);
        function i() {
          return r.jsx('img', {
            className: n().loader,
            'data-testid': 'loader',
            src: '/images/Planet-trans.gif',
            alt: 'loader',
            width: '200',
            height: '200',
          });
        }
        a(6689);
      },
      4449: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { o: () => _ });
            var s = a(997),
              n = a(6649),
              i = a.n(n),
              c = a(8751),
              l = a(9129),
              o = a(4560),
              u = a(8120),
              d = a(9495),
              h = a(3291),
              p = a(2711);
            a(6689);
            var m = e([c, l, u, h]);
            function _(e) {
              let { onItemClick: t, hideDetails: a, serversideData: r } = e,
                { clicked: n, setClicked: m } = (0, o._)(),
                { isStandartTheme: _ } = (0, d.F)(),
                g = (0, h.useSelector)((e) => e.isLoading.isLoading);
              if (!r || g)
                return s.jsx('div', {
                  className: `${i().main} ${_ ? '' : i().alternative} `,
                  children: s.jsx(p.a, {}),
                });
              let x = (e) => {
                  m(!0), t(e);
                },
                { astronomicalObjects: y } = r;
              return s.jsx('div', {
                className: n
                  ? `${i().main} ${i()['details-active']} ${i()['card-small']} ${_ ? '' : i().alternative}`
                  : `${i().main} ${_ ? '' : i().alternative} `,
                onClick: () => {
                  n && (m(!1), a());
                },
                children:
                  y && y.length > 0
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          y.map((e) =>
                            s.jsx(
                              c.S,
                              {
                                title: e.name,
                                location: e?.location?.name || '',
                                astronomicalObjectType:
                                  e.astronomicalObjectType,
                                onClick: () => x(e.uid),
                              },
                              e.uid,
                            ),
                          ),
                          s.jsx(l.t, {}),
                          s.jsx(u.z, {}),
                        ],
                      })
                    : s.jsx('p', {
                        className: i()['no-results'],
                        children: 'No search results found',
                      }),
              });
            }
            ([c, l, u, h] = m.then ? (await m)() : m), r();
          } catch (e) {
            r(e);
          }
        });
      },
      9129: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { t: () => _ });
            var s = a(997),
              n = a(7030),
              i = a.n(n),
              c = a(4187),
              l = a.n(c),
              o = a(4560),
              u = a(9495),
              d = a(3291),
              h = a(2598);
            a(6689);
            var p = a(1163),
              m = e([d, h]);
            function _() {
              let { clicked: e } = (0, o._)(),
                { isStandartTheme: t } = (0, u.F)(),
                a = (0, d.useDispatch)(),
                r = (0, d.useSelector)((e) => e.pageSlice.page),
                n = (0, d.useSelector)((e) => e.pageSlice.totalPages),
                c = (0, p.useRouter)();
              return (0, s.jsxs)('div', {
                className: `${i().pagination} ${t ? '' : i().alternative}`,
                children: [
                  s.jsx('button', {
                    className: l().button,
                    onClick: () => {
                      a((0, h.IT)()), c.push(`/search/${r - 1}`);
                    },
                    disabled: e || 1 === r,
                    children: 'Previous',
                  }),
                  (0, s.jsxs)('span', { children: [r, ' of ', n] }),
                  s.jsx('button', {
                    className: l().button,
                    onClick: () => {
                      a((0, h.fz)()), c.push(`/search/${r + 1}`);
                    },
                    disabled: e || r === n,
                    children: 'Next',
                  }),
                ],
              });
            }
            ([d, h] = m.then ? (await m)() : m), r();
          } catch (e) {
            r(e);
          }
        });
      },
      6814: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t), a.d(t, { default: () => d });
            var s = a(997);
            a(6689);
            var n = a(1597),
              i = a(8112),
              c = a(968),
              l = a.n(c);
            a(9517);
            var o = a(6896),
              u = e([n]);
            let d = (n = (u.then ? (await u)() : u)[0]).Y.withRedux(function ({
              Component: e,
              pageProps: t,
            }) {
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  s.jsx(l(), {
                    children: s.jsx('link', {
                      rel: 'shortcut icon',
                      href: '../images/favicon.ico',
                    }),
                  }),
                  s.jsx(i.f, {
                    children: s.jsx(o.$, { children: s.jsx(e, { ...t }) }),
                  }),
                ],
              });
            });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      2336: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.r(t),
              a.d(t, {
                default: () => o,
                getStaticPaths: () => c,
                getStaticProps: () => l,
              });
            var s = a(997),
              n = a(7109);
            a(6689);
            var i = e([n]);
            n = (i.then ? (await i)() : i)[0];
            let c = async () => {
                try {
                  let e = await fetch(
                      'https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=0',
                    ),
                    t = (await e.json()).totalPages;
                  return {
                    paths: Array.from({ length: t }, (e, t) => ({
                      params: { page: (t + 1).toString() },
                    })),
                    fallback: 'blocking',
                  };
                } catch (e) {
                  return (
                    console.error('Error fetching data for paths:', e),
                    { paths: [], fallback: !1 }
                  );
                }
              },
              l = async (e) => {
                let { page: t } = e.params;
                console.log(`Fetching data for page ${t}...`);
                try {
                  let e = await fetch(
                    `https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=${t}`,
                  );
                  if (
                    (console.log('Fetch complete, response status:', e.status),
                    !e.ok)
                  )
                    throw Error(`Failed to fetch data: ${e.statusText}`);
                  let a = await e.json();
                  return (
                    console.log('Serverside Data:', a),
                    { props: { serversideData: a } }
                  );
                } catch (e) {
                  return (
                    console.error('Error fetching data:', e),
                    { props: { serversideData: { astronomicalObjects: [] } } }
                  );
                }
              },
              o = ({ serversideData: e }) => s.jsx(n.Z, { serversideData: e });
            r();
          } catch (e) {
            r(e);
          }
        });
      },
      6896: (e, t, a) => {
        'use strict';
        a.d(t, { $: () => i, z: () => n });
        var r = a(997),
          s = a(6689);
        let n = (0, s.createContext)(void 0),
          i = ({ children: e }) => {
            let [t, a] = (0, s.useState)(!1);
            return r.jsx(n.Provider, {
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
        a.d(t, { N: () => n, f: () => i });
        var r = a(997),
          s = a(6689);
        let n = (0, s.createContext)({
            isStandartTheme: !0,
            changeTheme: () => {},
          }),
          i = ({ children: e }) => {
            let [t, a] = (0, s.useState)(!0);
            return r.jsx(n.Provider, {
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
      4560: (e, t, a) => {
        'use strict';
        a.d(t, { _: () => n });
        var r = a(6689),
          s = a(6896);
        let n = () => {
          let e = (0, r.useContext)(s.z);
          if (!e)
            throw Error('useClicked must be used within a ClickedProvider');
          return e;
        };
      },
      9495: (e, t, a) => {
        'use strict';
        a.d(t, { F: () => n });
        var r = a(6689),
          s = a(8112);
        let n = () => {
          let e = (0, r.useContext)(s.N);
          if (!e) throw Error('useTheme must be used within a ThemeProvider');
          return e;
        };
      },
      4879: (e, t, a) => {
        'use strict';
        a.d(t, { A: () => s });
        var r = a(6689);
        let s = (e) => {
          let [t, a] = (0, r.useState)(() => e);
          return (0, r.useEffect)(() => {}, [t]), [t, a];
        };
      },
      8011: (e, t, a) => {
        'use strict';
        a.a(e, async (e, r) => {
          try {
            a.d(t, { EJ: () => i, bT: () => c, f5: () => l });
            var s = a(9943),
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
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
              { useGetPlanetByIdQuery: c, useSearchPlanetQuery: l } = i;
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
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
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
              { changeDetails: c, changeItemId: l } = i.actions;
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
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
            let i = (0, s.createSlice)({
                name: 'selectedItems',
                initialState: { isLoading: !0 },
                reducers: {
                  switchLoading: (e, t) => {
                    e.isLoading = t.payload;
                  },
                },
              }),
              { switchLoading: c } = i.actions;
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
            a.d(t, { Y: () => c });
            var s = a(5648),
              n = a(5259),
              i = e([n]);
            n = (i.then ? (await i)() : i)[0];
            let c = (0, s.createWrapper)(() => n.h);
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
            a.d(t, { IT: () => o, VE: () => i, fz: () => l, o_: () => c });
            var s = a(3258),
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
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
                switchPage: c,
                nextPage: l,
                previousPage: o,
                setTotalPages: u,
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
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
            let i = (0, s.createSlice)({
                name: 'searchResults',
                initialState: { results: null },
                reducers: {
                  setResults: (e, t) => {
                    e.results = t.payload;
                  },
                },
              }),
              { setResults: c } = i.actions;
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
            a.d(t, { BF: () => c, ZP: () => u, cl: () => l, hF: () => o });
            var s = a(3258),
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
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
              { check: c, uncheck: l, unselect: o } = i.actions,
              u = i.reducer;
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
              n = a(7960),
              i = a(8011),
              c = a(4996),
              l = a(2598),
              o = a(7010),
              u = a(5306),
              d = e([s, n, i, c, l, o, u]);
            [s, n, i, c, l, o, u] = d.then ? (await d)() : d;
            let h = (0, s.configureStore)({
              reducer: {
                selectedItems: n.ZP,
                isLoading: c.B.reducer,
                pageSlice: l.VE.reducer,
                currentDetails: o.hp.reducer,
                [i.EJ.reducerPath]: i.EJ.reducer,
                searchResults: u.Q.reducer,
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
      6405: (e) => {
        'use strict';
        e.exports = require('react-dom');
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
      7147: (e) => {
        'use strict';
        e.exports = require('fs');
      },
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      2781: (e) => {
        'use strict';
        e.exports = require('stream');
      },
      9796: (e) => {
        'use strict';
        e.exports = require('zlib');
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var a = (e) => t((t.s = e)),
    r = t.X(0, [899, 342], () => a(6914));
  module.exports = r;
})();
