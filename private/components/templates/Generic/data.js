const data = {
  mainMenu: [
    {
      name: 'Global Picture',
      link: '/',
    },
    {
      name: 'Profile',
      icon: 'pie graph',
      link: '',
      children: [
        {
          name: 'Country Profiles',
          link: '/country-profiles',
          icon: 'area graph'
        },
        {
          name: 'Multilateral Profiles',
          link: '/multilateral-profiles',
          icon: 'area graph'
        },
      ]
    },
    {
      name: 'Unbudling Aid',
      link: '/unbundling-aid',
    },
    {
      name: 'Spotlight on Uganda',
      link: '/spotlight-on-uganda',
    },
    {
      name: 'Other Visualizations',
      icon: 'pie graph',
      link: '',
      children: [
        {
          name: 'Unbundling other official flows',
          link: '',
          icon: 'barcode'
        },
        {
          name: 'Where are the poor and where will they be?',
          link: '',
          icon: 'users'
        },
        {
          name: 'Are domestic public resources able to meet the needs of the poorest people?',
          link: '',
          icon: 'area graph'
        },
        {
          name: 'Different providers, different priorities',
          link: '',
          icon: 'area graph'
        },
      ]
    },
    {
      name: 'Methodology',
      link: '/methodology',
    },
  ]


};

export default data;