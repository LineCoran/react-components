type SvgIconProps = {
  id: string;
};

export default function SvgIcons({ id }: SvgIconProps) {
  switch (id) {
    case "search":
      return (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              id="search-a"
              d="M11.7099609,0.572509766 C9.46940104,1.29012044 7.99951172,3.05419922 7.30029297,5.86474609 C6.25146484,10.0805664 4.95166016,10.6181641 0.719970703,9.11865234 C2.23974609,11.9257813 5.32006836,13.0512695 7.30029297,13.0512695 C9.28051758,13.0512695 14.4091797,10.2941895 13.8215332,5.0534668 C13.3114421,3.52709961 12.6075846,2.03344727 11.7099609,0.572509766 Z"
            />
            <path
              id="search-c"
              d="M14.1791377,12.7701494 L19.7100661,18.3101411 C20.0966446,18.6967197 20.0966446,19.3234875 19.7100661,19.7100661 C19.3234875,20.0966446 18.6967197,20.0966446 18.3101411,19.7100661 L12.7803471,14.1712106 C11.4385246,15.2160226 9.75152329,15.8383427 7.91917136,15.8383427 C3.54553379,15.8383427 0,12.2928089 0,7.91917136 C0,3.54553379 3.54553379,0 7.91917136,0 C12.2928089,0 15.8383427,3.54553379 15.8383427,7.91917136 C15.8383427,9.74688445 15.2191696,11.4299819 14.1791377,12.7701494 Z M7.91917136,13.8585499 C11.1993995,13.8585499 13.8585499,11.1993995 13.8585499,7.91917136 C13.8585499,4.63894318 11.1993995,1.97979284 7.91917136,1.97979284 C4.63894318,1.97979284 1.97979284,4.63894318 1.97979284,7.91917136 C1.97979284,11.1993995 4.63894318,13.8585499 7.91917136,13.8585499 Z"
            />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(2 2)">
            <g transform="translate(1 2)">
              <mask id="search-b" fill="#ffffff">
                <use xlinkHref="#search-a" />
              </mask>
              <use fill="#D8D8D8" xlinkHref="#search-a" />
              <g fill="#FFA0A0" mask="url(#search-b)">
                <rect width="24" height="24" transform="translate(-3 -4)" />
              </g>
            </g>
            <mask id="search-d" fill="#ffffff">
              <use xlinkHref="#search-c" />
            </mask>
            <use fill="#000000" fillRule="nonzero" xlinkHref="#search-c" />
            <g fill="#7600FF" mask="url(#search-d)">
              <rect width="24" height="24" transform="translate(-2 -2)" />
            </g>
          </g>
        </svg>
      );
      break;
    case "heart":
      return (
        <svg
          viewBox="0 0 32 32"
          enableBackground="new 0 0 32 32"
          id="Filled_Line"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="30px"
          width="30px"
        >
          <path
            d="M16,8.064c-2.974-2.753-7.796-2.753-10.77,0s-2.974,7.215,0,9.968L16,28l10.77-9.968  c2.974-2.753,2.974-7.215,0-9.968S18.974,5.312,16,8.064z"
            fill="#B83B5E"
            id="XMLID_1338_"
          />
          <path
            d="M7.23,17.032c-2.974-2.753-2.974-7.215,0-9.968c0.257-0.237,0.531-0.447,0.813-0.643  C7.017,6.761,6.052,7.304,5.23,8.064c-2.974,2.753-2.974,7.215,0,9.968L16,28l1.54-1.426L7.23,17.032z"
            fill="#8A2C47"
            id="XMLID_1344_"
          />
          <path
            d="M26.77,8.064c-2.974-2.753-7.796-2.753-10.77,0c-2.974-2.753-7.796-2.753-10.77,0  c-0.91,0.843-1.539,1.846-1.892,2.911C6.342,8.317,12.06,8.343,15,11.064c2.974-2.753,6.796-2.753,9.77,0  c2.069,1.915,2.694,4.656,1.885,7.074l0.115-0.106C29.743,15.28,29.743,10.817,26.77,8.064z"
            fill="#C6627E"
            id="XMLID_1342_"
          />
          <path
            d="  M16,8.064c-2.974-2.753-7.796-2.753-10.77,0s-2.974,7.215,0,9.968L16,28l10.77-9.968c2.974-2.753,2.974-7.215,0-9.968  S18.974,5.312,16,8.064z"
            fill="none"
            id="XMLID_818_"
            stroke="#200F60"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <path
            d="  M22,10.044c0.784,0.113,1.497,0.443,2.052,0.956C24.663,11.565,25,12.293,25,13.048"
            fill="none"
            id="XMLID_1340_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </svg>
      );
      break;
    case "message":
      return (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
          id="Message_And_Communication_Icons"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g>
              <g>
                <rect height="3.9" style={{ fill: "#4DE0F9" }} width="9.5" x="31.9" y="31.3" />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="37.2,19.3 41.4,16.5 41.4,35.1 37.2,35.1"
                  style={{ fill: "#4DE0F9" }}
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M40.5,34.1H10V14.3h30.5V34.1z M11.2,32.9h28.1V15.5H11.2V32.9z"
                  style={{ fill: "#0D5FC3" }}
                />
              </g>
            </g>
            <g>
              <g>
                <rect
                  height="9.2"
                  style={{ fill: "#0D5FC3" }}
                  transform="matrix(0.5369 0.8436 -0.8436 0.5369 31.3013 -22.358)"
                  width="1.2"
                  x="35.4"
                  y="12.7"
                />
              </g>
            </g>
            <g>
              <g>
                <rect
                  height="1.2"
                  style={{ fill: "#0D5FC3" }}
                  transform="matrix(0.8439 0.5365 -0.5365 0.8439 11.5246 -5.0365)"
                  width="9"
                  x="9.9"
                  y="16.7"
                />
              </g>
            </g>
            <g>
              <g>
                <rect height="4.6" style={{ fill: "#4DE0F9" }} width="1.5" x="12.8" y="27.1" />
              </g>
            </g>
            <g>
              <g>
                <rect height="1.5" style={{ fill: "#4DE0F9" }} width="1.5" x="12.8" y="24.2" />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M26.2,18.8c-0.1,0-0.2,0-0.3,0c1.4,1.2,2.3,2.9,2.3,4.9c0,3.4-2.7,6.2-6.1,6.4     c1.1,0.9,2.6,1.5,4.1,1.5c3.5,0,6.4-2.9,6.4-6.4S29.7,18.8,26.2,18.8z"
                  style={{ fill: "#4DE0F9" }}
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M25.2,31.3c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7s7,3.1,7,7C32.2,28.1,29.1,31.3,25.2,31.3z      M25.2,18.4c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8S28.4,18.4,25.2,18.4z"
                  style={{ fill: "#0D5FC3" }}
                />
              </g>
            </g>
            <g>
              <g>
                <g>
                  <polygon
                    points="25.9,27.3 25,26.5 27.4,24.1 25,21.8 25.9,20.9 29.1,24.1     "
                    style={{ fill: "#0D5FC3" }}
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect height="1.2" style={{ fill: "#0D5FC3" }} width="5.8" x="22.4" y="23.5" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
      break;
    default:
      return <svg></svg>;
  }
}
