const ScrollEffectTwo = ({ top }: { top: number }) => {
  console.log(top);

  return (
    <main className="h-[120vh] w-screen overflow-scroll flex flex-col justify-end">
      <div className="flex justify-between px-20 items-center gap-x-40 uppercase font-mono text-13 leading-16 tracking-10 gap-y-24 relative z-1 ">
        <div
          style={{
            transform: `translateY(-${top / 6}vh)`,
          }}
        >
          Careers
        </div>
        <div
          style={{
            transform: `translateY(-${top / 3.5}vh)`,
          }}
        >
          Privacy Policy
        </div>
        <div
          style={{
            transform: `translateY(-${top / 3.5}vh)`,
          }}
        >
          Cookie policy
        </div>
        <div
          style={{
            transform: `translateY(-${top / 6}vh)`,
          }}
        >
          terms of Service
        </div>
      </div>
      <div className="800:mt-10 h-50 600:h-300 1000:h-[35vh]"></div>
      <div
        className="origin-bottom flex items-end   z-2 pointer-events-none  600:h-300 1000:h-[65vh] fixed bottom-0 left-0 right-0"
        aria-hidden="true"
        style={{ transform: `scaleY(${top / 200})` }}
      >
        <svg
          viewBox="0 0 1271 599"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3463_437)">
            <g filter="url(#filter0_f_3463_437)">
              <path
                d="M1113 614H1287V291H1113V614Z"
                fill="url(#paint0_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter1_f_3463_437)">
              <path
                d="M972 614H1146V210H972V614Z"
                fill="url(#paint1_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter2_f_3463_437)">
              <path
                d="M831 614H1005L1005 136H831V614Z"
                fill="url(#paint2_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter3_f_3463_437)">
              <path
                d="M158 614H-16L-16.0002 291H158L158 614Z"
                fill="url(#paint3_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter4_f_3463_437)">
              <path
                d="M299 614H125L125 210H299L299 614Z"
                fill="url(#paint4_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter5_f_3463_437)">
              <path
                d="M440 614H266L266 136H440L440 614Z"
                fill="url(#paint5_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter6_f_3463_437)">
              <path
                d="M582 614H407L407 84H582L582 614Z"
                fill="url(#paint6_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter7_f_3463_437)">
              <path
                d="M689 614H864L864 84H689V614Z"
                fill="url(#paint7_linear_3463_437)"
              />
            </g>
            <g filter="url(#filter8_f_3463_437)">
              <path
                d="M722 614H549L549 30H722L722 614Z"
                fill="url(#paint8_linear_3463_437)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3463_437"
              x="1083"
              y="261"
              width="234"
              height="383"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter1_f_3463_437"
              x="942"
              y="180"
              width="234"
              height="464"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter2_f_3463_437"
              x="801"
              y="106"
              width="234"
              height="538"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter3_f_3463_437"
              x="-46"
              y="261"
              width="234"
              height="383"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter4_f_3463_437"
              x="94.9995"
              y="180"
              width="234"
              height="464"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter5_f_3463_437"
              x="236"
              y="106"
              width="234"
              height="538"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter6_f_3463_437"
              x="377"
              y="54"
              width="235"
              height="590"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter7_f_3463_437"
              x="659"
              y="54"
              width="235"
              height="590"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <filter
              id="filter8_f_3463_437"
              x="519"
              y="0"
              width="233"
              height="644"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3463_437"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3463_437"
              x1="1200"
              y1="614"
              x2="1200"
              y2="291"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3463_437"
              x1="1059"
              y1="614"
              x2="1059"
              y2="210"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3463_437"
              x1="918"
              y1="614"
              x2="918"
              y2="136"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3463_437"
              x1="71"
              y1="614"
              x2="71"
              y2="291"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3463_437"
              x1="212"
              y1="614"
              x2="212"
              y2="210"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3463_437"
              x1="353"
              y1="614"
              x2="353"
              y2="136"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_3463_437"
              x1="494.5"
              y1="614"
              x2="494.5"
              y2="84"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_3463_437"
              x1="776.5"
              y1="614"
              x2="776.5"
              y2="84"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_3463_437"
              x1="635.5"
              y1="614"
              x2="635.5"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0066" />
              <stop offset="0.432692" stop-color="#FF237B" />
              <stop
                offset="0.774038"
                stop-color="#FF76AD"
                stop-opacity="0.84"
              />
              <stop offset="1" stop-color="#FFADCE" stop-opacity="0.31" />
            </linearGradient>
            <clipPath id="clip0_3463_437">
              <rect width="1271" height="599" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default ScrollEffectTwo;
