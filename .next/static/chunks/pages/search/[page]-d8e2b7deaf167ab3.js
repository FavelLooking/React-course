(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [669],
  {
    8254: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/search/[page]',
        function () {
          return a(2866);
        },
      ]);
    },
    2711: function (e, t, a) {
      'use strict';
      a.d(t, {
        a: function () {
          return l;
        },
      });
      var n = a(5893),
        s = a(8037),
        c = a.n(s);
      function l() {
        return (0, n.jsx)('img', {
          className: c().loader,
          'data-testid': 'loader',
          src: '/images/Planet-trans.gif',
          alt: 'loader',
          width: '200',
          height: '200',
        });
      }
      a(7294);
    },
    2866: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return B;
          },
        });
      var n = a(5893),
        s = a(1836),
        c = a.n(s),
        l = a(7294),
        r = a(9282),
        o = a.n(r),
        i = a(5007),
        u = a(8440),
        d = a.n(u),
        _ = a(4467),
        m = a.n(_);
      let h = (e) => {
        let [t, a] = (0, l.useState)(() => {
          {
            let t = localStorage.getItem('lastSearch');
            return null != t ? t : e;
          }
        });
        return (
          (0, l.useEffect)(() => {
            localStorage.setItem('lastSearch', t);
          }, [t]),
          [t, a]
        );
      };
      var p = a(8112);
      let v = () => {
        let e = (0, l.useContext)(p.N);
        if (!e) throw Error('useTheme must be used within a ThemeProvider');
        return e;
      };
      var f = a(8823),
        x = a(4996),
        j = a(2598),
        b = a(5306),
        g = a(1163);
      function N() {
        let [e, t] = (0, l.useState)(!1),
          [a, s] = (0, l.useState)(''),
          c = (0, g.useRouter)(),
          r = (0, i.I0)(),
          o = (0, i.v9)((e) => e.pageSlice.page),
          [u, _] = h(''),
          { isStandartTheme: p, changeTheme: N } = v(),
          {
            data: y,
            error: C,
            isFetching: I,
          } = (0, f.f5)({ searchItem: null != u ? u : '', currentPage: o });
        return ((0, l.useEffect)(() => {
          y && (r((0, j.K$)(y.page.totalPages)), r((0, b.i)(y)));
        }, [y, r]),
        (0, l.useEffect)(() => {
          r((0, x.A)(I));
        }, [I, r]),
        e || C)
          ? (0, n.jsx)('div', {
              children: 'An error occurred. Please try again later.',
            })
          : (0, n.jsxs)('form', {
              className: ''
                .concat(d().header, ' ')
                .concat(p ? '' : d().alternative),
              onSubmit: (e) => {
                e.preventDefault(), _(a), r((0, j.o_)(1)), c.push('/search/1');
              },
              children: [
                (0, n.jsx)('input', {
                  className: d().header__search,
                  type: 'text',
                  placeholder: 'Enter planet or star name',
                  value: a,
                  onChange: (e) => s(e.target.value),
                }),
                (0, n.jsx)('button', {
                  className: m().button,
                  type: 'submit',
                  children: 'Search',
                }),
                (0, n.jsx)('button', {
                  className: m().button,
                  type: 'button',
                  onClick: () => {
                    t(!e);
                  },
                  children: 'Get Error',
                }),
                (0, n.jsx)('button', {
                  className: m().button,
                  type: 'button',
                  onClick: () => {
                    N();
                  },
                  children: 'Next Theme',
                }),
              ],
            });
      }
      var y = a(4245),
        C = a.n(y),
        I = a(6319),
        k = a.n(I),
        w = a(7960);
      function S(e) {
        let {
            title: t,
            location: a,
            astronomicalObjectType: s,
            onClick: c,
          } = e,
          l = (0, i.I0)(),
          r = (0, i.v9)((e) =>
            e.selectedItems.items.some((e) => e.title === t),
          ),
          { isStandartTheme: o } = v();
        return (0, n.jsxs)('div', {
          className: ''
            .concat(k()['card-container'], ' ')
            .concat(o ? '' : k().alternative),
          children: [
            (0, n.jsxs)('div', {
              'data-testid': 'card-item',
              className: k()['card-item'],
              onClick: c,
              children: [
                (0, n.jsxs)('span', {
                  className: k()['name-title'],
                  children: [
                    'Name:',
                    ' ',
                    (0, n.jsx)('span', {
                      className: t.length > 30 ? k()['title-small'] : k().title,
                      children: t,
                    }),
                  ],
                }),
                (0, n.jsxs)('span', {
                  className: k()['location-title'],
                  children: [
                    'Location:',
                    ' ',
                    (0, n.jsx)('span', {
                      className:
                        a && a.length > 20
                          ? k()['location-small']
                          : k().location,
                      children: a || 'Unknown',
                    }),
                  ],
                }),
                (0, n.jsxs)('span', {
                  className: k()['type-title'],
                  children: [
                    'Object Type:',
                    ' ',
                    (0, n.jsx)('span', {
                      className: s.length > 20 ? k()['type-small'] : k().type,
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)('input', {
              type: 'checkbox',
              className: k().checkbox,
              title: t,
              checked: r,
              onChange: () => {
                let e = { title: t, location: null != a ? a : '', object: s };
                r ? l((0, w.cl)(e)) : l((0, w.BF)(e));
              },
            }),
          ],
        });
      }
      var E = a(2126),
        O = a.n(E),
        F = a(6896);
      let M = () => {
        let e = (0, l.useContext)(F.z);
        if (!e) throw Error('useClicked must be used within a ClickedProvider');
        return e;
      };
      function T() {
        let { clicked: e } = M(),
          { isStandartTheme: t } = v(),
          a = (0, i.I0)(),
          s = (0, i.v9)((e) => e.pageSlice.page),
          c = (0, i.v9)((e) => e.pageSlice.totalPages),
          l = (0, g.useRouter)();
        return (0, n.jsxs)('div', {
          className: ''
            .concat(O().pagination, ' ')
            .concat(t ? '' : O().alternative),
          children: [
            (0, n.jsx)('button', {
              className: m().button,
              onClick: () => {
                a((0, j.IT)()), l.push('/search/'.concat(s - 1));
              },
              disabled: e || 1 === s,
              children: 'Previous',
            }),
            (0, n.jsxs)('span', { children: [s, ' of ', c] }),
            (0, n.jsx)('button', {
              className: m().button,
              onClick: () => {
                a((0, j.fz)()), l.push('/search/'.concat(s + 1));
              },
              disabled: e || s === c,
              children: 'Next',
            }),
          ],
        });
      }
      var P = a(7314),
        D = a.n(P);
      function A() {
        let e = (0, i.I0)(),
          t = (0, i.v9)((e) => e.selectedItems.items.length > 0),
          a = (0, i.v9)((e) => e.selectedItems.items.length),
          s = (0, i.v9)((e) => e.selectedItems.items),
          [c, r] = (0, l.useState)(null),
          o = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          c &&
            o.current &&
            (o.current.click(), URL.revokeObjectURL(c), r(null));
        }, [c]);
        let u = () => {
          if (0 === s.length) return '';
          let e = Object.keys(s[0]).join(';'),
            t = s.map((e) => Object.values(e).join(';')).join('\n');
          return ''.concat(e, '\n').concat(t);
        };
        return (0, n.jsxs)('div', {
          className: t
            ? D()['flyout-container']
            : D()['flyout-container--hidden'],
          children: [
            (0, n.jsxs)('span', {
              children: [a, ' objects ', 1 === a ? 'is' : 'are', ' selected'],
            }),
            (0, n.jsxs)('div', {
              className: D()['button-container'],
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  onClick: () => {
                    e((0, w.hF)());
                  },
                  className: ''
                    .concat(D().flyout__button, ' ')
                    .concat(m().button),
                  children: 'Unselect All',
                }),
                (0, n.jsx)('button', {
                  type: 'button',
                  className: ''
                    .concat(D().flyout__button, ' ')
                    .concat(m().button),
                  onClick: () => {
                    let e = new Blob([u()], { type: 'text/csv' });
                    r(URL.createObjectURL(e));
                  },
                  children: 'Download',
                }),
                c &&
                  (0, n.jsx)('a', {
                    className: D().download,
                    href: c,
                    download: ''.concat(a, '-Asctronomical-objects.csv'),
                    ref: o,
                    children: 'Download',
                  }),
              ],
            }),
          ],
        });
      }
      var L = a(2711);
      function R(e) {
        let { onItemClick: t, hideDetails: a } = e,
          { clicked: s, setClicked: c } = M(),
          { isStandartTheme: l } = v(),
          r = (0, i.v9)((e) => e.isLoading.isLoading),
          o = (0, i.v9)((e) => e.searchResults.results);
        if (!o || r)
          return (0, n.jsx)('div', {
            className: ''
              .concat(C().main, ' ')
              .concat(l ? '' : C().alternative, ' '),
            children: (0, n.jsx)(L.a, {}),
          });
        let u = (e) => {
            c(!0), t(e);
          },
          { astronomicalObjects: d } = o;
        return (0, n.jsx)('div', {
          className: s
            ? ''
                .concat(C().main, ' ')
                .concat(C()['details-active'], ' ')
                .concat(C()['card-small'], ' ')
                .concat(l ? '' : C().alternative)
            : ''.concat(C().main, ' ').concat(l ? '' : C().alternative, ' '),
          onClick: () => {
            s && (c(!1), a());
          },
          children:
            d && d.length > 0
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    d.map((e) => {
                      var t;
                      return (0, n.jsx)(
                        S,
                        {
                          title: e.name,
                          location:
                            (null == e
                              ? void 0
                              : null === (t = e.location) || void 0 === t
                                ? void 0
                                : t.name) || '',
                          astronomicalObjectType: e.astronomicalObjectType,
                          onClick: () => u(e.uid),
                        },
                        e.uid,
                      );
                    }),
                    (0, n.jsx)(T, {}),
                    (0, n.jsx)(A, {}),
                  ],
                })
              : (0, n.jsx)('p', {
                  className: C()['no-results'],
                  children: 'No search results found',
                }),
        });
      }
      var U = a(407),
        W = a.n(U),
        z = a(7010);
      function K(e) {
        let { onClose: t } = e,
          a = (0, i.v9)((e) => e.currentDetails.currentId),
          s = (0, i.v9)((e) => e.currentDetails.details),
          { resetClicked: c } = M(),
          { isStandartTheme: r } = v(),
          { data: o, error: u, isLoading: d } = (0, f.bT)(a),
          _ = (0, i.I0)();
        return ((0, l.useEffect)(() => {
          o &&
            _(
              (0, z.v1)({
                name: o.astronomicalObject.name,
                location: o.astronomicalObject.location
                  ? o.astronomicalObject.location.name
                  : 'Unknown location',
                type: o.astronomicalObject.astronomicalObjectType,
              }),
            );
        }, [a, o, _]),
        d)
          ? (0, n.jsx)('div', {
              className: W()['main-content'],
              children: (0, n.jsx)(L.a, {}),
            })
          : u
            ? (0, n.jsx)('div', { children: 'Error' })
            : o
              ? (0, n.jsxs)('div', {
                  className: ''
                    .concat(W().details, ' ')
                    .concat(r ? '' : W().alternative),
                  children: [
                    (0, n.jsx)('h2', { children: s.name }),
                    (0, n.jsx)('p', { children: s.type }),
                    (0, n.jsx)('p', { children: s.location }),
                    (0, n.jsx)('button', {
                      className: m().button,
                      onClick: () => {
                        t(), c();
                      },
                      children: 'Close',
                    }),
                  ],
                })
              : null;
      }
      class Z extends l.Component {
        static getDerivedStateFromError(e) {
          return { errorMessage: e.toString() };
        }
        render() {
          return this.state.errorMessage
            ? (0, n.jsx)('p', {
                className: 'error',
                children: 'The universe is not favoring you today.',
              })
            : this.props.children;
        }
        constructor(...e) {
          super(...e), (this.state = { errorMessage: '' });
        }
      }
      var q = a(5259),
        B = () => {
          let e = (0, g.useRouter)(),
            { page: t } = e.query,
            a = (0, i.I0)(),
            s = (0, i.v9)((e) => e.pageSlice.totalPages),
            r = (0, i.v9)((e) => e.currentDetails.currentId),
            u = (0, i.v9)((e) => e.pageSlice.page);
          (0, l.useEffect)(() => {
            if (!t) {
              e.push('/search/1');
              return;
            }
            let n = parseInt(t, 10);
            isNaN(n) || n <= 0 || (s && n > s)
              ? e.push('/not-found')
              : a((0, j.o_)(n));
          }, [t, e, s, a]);
          let d = () => {
            a((0, z.Hf)('')), e.push('/search/'.concat(u));
          };
          return (0, n.jsx)(i.zt, {
            store: q.h,
            children: (0, n.jsxs)('div', {
              className: ''.concat(o().wrapper, ' ').concat(c().className),
              'data-testid': 'app-wrapper',
              children: [
                (0, n.jsx)(Z, { children: (0, n.jsx)(N, {}) }),
                (0, n.jsxs)('div', {
                  className: o()['main-content'],
                  'data-testid': 'main-content',
                  children: [
                    (0, n.jsx)(R, {
                      onItemClick: (t) => {
                        a((0, z.Hf)(t)),
                          e.push(
                            ''.concat(location.pathname, '&details=').concat(t),
                          );
                      },
                      hideDetails: d,
                    }),
                    r && (0, n.jsx)(K, { onClose: d }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    4467: function (e) {
      e.exports = { button: 'Button_button__OFOdO' };
    },
    6319: function (e) {
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
    407: function (e) {
      e.exports = {
        details: 'Details_details__SjFMq',
        alternative: 'Details_alternative__fTbMs',
      };
    },
    7314: function (e) {
      e.exports = {
        'flyout-container': 'Flyout_flyout-container__EBTg_',
        'flyout-container--hidden': 'Flyout_flyout-container--hidden__nZ_lL',
        'button-container': 'Flyout_button-container__KDW48',
        flyout__button: 'Flyout_flyout__button__1oM0e',
        download: 'Flyout_download__8mGnN',
      };
    },
    8440: function (e) {
      e.exports = {
        header: 'Header_header__1RJ5C',
        header__search: 'Header_header__search__wVi8J',
        alternative: 'Header_alternative___RxIO',
      };
    },
    8037: function (e) {
      e.exports = { loader: 'Loader_loader__7ZWW3' };
    },
    4245: function (e) {
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
    2126: function (e) {
      e.exports = {
        pagination: 'Pagination_pagination__MQWKm',
        alternative: 'Pagination_alternative__QziKL',
      };
    },
    9282: function (e) {
      e.exports = {
        wrapper: 'App_wrapper__woZth',
        'main-content': 'App_main-content__dWAXq',
      };
    },
    1836: function (e) {
      e.exports = {
        style: { fontFamily: "'__myFont_f901e0', '__myFont_Fallback_f901e0'" },
        className: '__className_f901e0',
      };
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 8254));
    }),
      (_N_E = e.O());
  },
]);
