export default function BrandLogo({
  className,
  isScrolled = false,
}: {
  className?: string;
  isScrolled?: boolean;
}) {
  const mainColor = isScrolled ? "#ffffff" : "#F84901";
  const gradientStart = isScrolled ? "#ffffff" : "#F84901";
  const gradientEnd = isScrolled ? "#cccccc" : "#9D2F02";

  return (
    <svg
      viewBox="0 0 3913 2408"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g opacity="0.5" filter="url(#filter0_d_2018_156)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2714.07 2399.99C3374.09 2396.79 3908.14 1860.76 3908.14 1200C3908.14 539.236 3374.09 3.20733 2714.07 0.0146484C3151.95 221.556 3452.14 675.721 3452.14 1200C3452.14 1724.28 3151.95 2178.44 2714.07 2399.99Z"
          fill={mainColor}
        />
      </g>
      <path
        opacity="0.8"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1960 0.0146484C2010.78 25.7087 2059.72 54.5318 2106.54 86.2304C2463.47 327.846 2698.07 736.526 2698.07 1200C2698.07 1663.47 2463.47 2072.15 2106.54 2313.77C2059.72 2345.47 2010.79 2374.29 1960 2399.99C2061.5 2399.5 2160.02 2386.4 2254.07 2362.2C2771.64 2228.98 3154.07 1759.15 3154.07 1200C3154.07 640.848 2771.64 171.018 2254.07 37.8056C2160.02 13.5973 2061.5 0.505611 1960 0.0146484Z"
        fill={mainColor}
      />
      <path
        d="M2400 1200C2400 1644.17 2158.68 2031.98 1800 2239.46C1707.15 2293.17 1606.43 2334.8 1500 2362.19C1404.11 2386.87 1303.59 2400 1200 2400C1198.02 2400 1196.05 2400 1194.07 2399.99C534.057 2396.79 0 1860.76 0 1200C0 539.236 534.057 3.20702 1194.07 0.0143394C1196.05 0.00478522 1198.02 0 1200 0C1303.59 0 1404.11 13.1259 1500 37.8053C1606.43 65.1988 1707.15 106.827 1800 160.539C2158.68 368.024 2400 755.831 2400 1200Z"
        fill="url(#paint0_linear_2018_156)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1800 2239.46C1707.15 2293.17 1606.43 2334.8 1500 2362.19C1404.11 2386.87 1303.59 2400 1200 2400C1198.02 2400 1196.05 2400 1194.07 2399.99C534.057 2396.79 0 1860.76 0 1200C0 539.236 534.057 3.20702 1194.07 0.0143394C1196.05 0.00478522 1198.02 0 1200 0C1303.59 0 1404.11 13.1259 1500 37.8053C1606.43 65.1988 1707.15 106.827 1800 160.539C2158.68 368.024 2400 755.831 2400 1200C2400 1644.17 2158.68 2031.98 1800 2239.46Z"
        fill="url(#paint1_linear_2018_156)"
      />
      <defs>
        <filter
          id="filter0_d_2018_156"
          x="2710.07"
          y="0.0146484"
          width="1202.07"
          height="2407.97"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2018_156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2018_156"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2018_156"
          x1="2400"
          y1="1200"
          x2="0"
          y2="1200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={gradientStart} />
          <stop offset="1" stop-color={gradientEnd} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2018_156"
          x1="2400"
          y1="1200"
          x2="0"
          y2="1200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={gradientStart} />
          <stop offset="1" stop-color={gradientEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
}
