import React from "react";

// CARRITO LOADER DE QUE SE UTILIZA CUANDO INICIALIZA EL PROYECT
const Gift = () => {
  return (
    <div className="text-[var(--primary-text)]">
      <div style={{ color: "var(--primary-text)" }}>
        <svg
          width="328"
          height="328"
          viewBox="0 0 64 64"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            animation: "bounce 1.5s ease-in-out infinite",
          }}
        >
          <style>
            {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}
          </style>
          <path d="M50.92 41.5L60.92 18.07C60.9719 17.9492 60.9994 17.8193 61.0011 17.6878C61.0028 17.5564 60.9786 17.4259 60.9298 17.3038C60.8811 17.1816 60.8088 17.0703 60.717 16.9762C60.6252 16.882 60.5158 16.8069 60.395 16.755C60.2742 16.7031 60.1443 16.6755 60.0129 16.6739C59.8814 16.6722 59.7509 16.6964 59.6288 16.7451C59.5067 16.7939 59.3953 16.8662 59.3012 16.958C59.207 17.0498 59.1319 17.1592 59.08 17.28L49.34 40.1H18.91L13 13.46C12.9492 13.2344 12.8218 13.0334 12.6395 12.8912C12.4571 12.749 12.2312 12.6743 12 12.68H4C3.73478 12.68 3.48043 12.7853 3.29289 12.9729C3.10536 13.1604 3 13.4148 3 13.68C3 13.9452 3.10536 14.1996 3.29289 14.3871C3.48043 14.5746 3.73478 14.68 4 14.68H11.2L18.88 49.18C18.9308 49.4056 19.0582 49.6066 19.2405 49.7488C19.4229 49.891 19.6488 49.9656 19.88 49.96H50C50.2652 49.96 50.5196 49.8546 50.7071 49.6671C50.8946 49.4796 51 49.2252 51 48.96C51 48.6948 50.8946 48.4404 50.7071 48.2529C50.5196 48.0653 50.2652 47.96 50 47.96H20.66L19.35 42.1H50C50.1952 42.1007 50.3863 42.0442 50.5498 41.9376C50.7132 41.831 50.8419 41.6789 50.92 41.5Z" />
          <path d="M25.2099 51.93C24.3116 51.93 23.4334 52.1965 22.6866 52.6958C21.9398 53.1951 21.3579 53.9048 21.0146 54.7349C20.6712 55.5651 20.5819 56.4785 20.7579 57.3594C20.9339 58.2403 21.3673 59.0493 22.0032 59.6838C22.6391 60.3183 23.449 60.7499 24.3303 60.924C25.2117 61.098 26.1248 61.0067 26.9542 60.6615C27.7836 60.3164 28.492 59.7329 28.9897 58.985C29.4873 58.2371 29.7519 57.3584 29.7499 56.46C29.7499 55.8643 29.6324 55.2744 29.4041 54.7241C29.1759 54.1739 28.8413 53.674 28.4196 53.2533C27.9979 52.8325 27.4973 52.499 26.9465 52.272C26.3958 52.0449 25.8056 51.9287 25.2099 51.93V51.93ZM25.2099 59C24.7075 59 24.2165 58.851 23.7988 58.5719C23.3811 58.2928 23.0555 57.8961 22.8633 57.432C22.671 56.9679 22.6207 56.4572 22.7187 55.9645C22.8167 55.4718 23.0586 55.0192 23.4139 54.664C23.7691 54.3087 24.2217 54.0668 24.7144 53.9688C25.2071 53.8708 25.7178 53.9211 26.1819 54.1133C26.6461 54.3056 27.0427 54.6312 27.3218 55.0489C27.6009 55.4666 27.7499 55.9576 27.7499 56.46C27.7499 57.1337 27.4823 57.7797 27.006 58.2561C26.5296 58.7324 25.8836 59 25.2099 59V59Z" />
          <path d="M43.4999 51.93C42.5999 51.9221 41.7178 52.1818 40.9658 52.6763C40.2137 53.1707 39.6256 53.8776 39.2761 54.707C38.9267 55.5364 38.8316 56.451 39.0031 57.3346C39.1745 58.2182 39.6047 59.0309 40.239 59.6694C40.8733 60.3079 41.6831 60.7435 42.5655 60.9208C43.4479 61.0982 44.3631 61.0092 45.1949 60.6652C46.0266 60.3213 46.7373 59.7379 47.2368 58.9891C47.7362 58.2403 48.0019 57.36 47.9999 56.46C47.9999 55.2637 47.5268 54.116 46.6837 53.2673C45.8407 52.4187 44.6961 51.9379 43.4999 51.93V51.93ZM43.4999 59C42.9959 59.0079 42.501 58.8657 42.078 58.5915C41.6551 58.3173 41.3233 57.9234 41.1249 57.46C40.9265 56.9967 40.8705 56.4847 40.9639 55.9894C41.0574 55.4941 41.2961 55.0378 41.6497 54.6786C42.0032 54.3193 42.4557 54.0734 42.9495 53.9721C43.4433 53.8708 43.956 53.9187 44.4225 54.1097C44.8889 54.3008 45.288 54.6262 45.5689 55.0448C45.8498 55.4633 45.9999 55.9559 45.9999 56.46C46 57.1268 45.7379 57.7668 45.2702 58.242C44.8024 58.7172 44.1666 58.9895 43.4999 59V59Z" />
          <path d="M21.1101 18.22V32.46C21.1101 33.2751 21.4332 34.057 22.0087 34.6344C22.5841 35.2117 23.365 35.5374 24.1801 35.54H45.6901C46.5052 35.5374 47.2861 35.2117 47.8615 34.6344C48.437 34.057 48.7601 33.2751 48.7601 32.46V18.22C49.4021 18.0397 49.968 17.6553 50.3721 17.1249C50.7763 16.5944 50.9967 15.9468 51.0001 15.28V13.91C51.0001 13.0949 50.677 12.313 50.1015 11.7356C49.5261 11.1583 48.7452 10.8326 47.9301 10.83H43.0801C43.5291 10.1394 43.7687 9.3337 43.7701 8.51V7.32C43.7675 6.17508 43.3115 5.0778 42.5019 4.26822C41.6923 3.45863 40.595 3.00264 39.4501 3H38.2601C37.6221 3.00267 36.9926 3.14664 36.4168 3.42155C35.841 3.69647 35.3333 4.09551 34.9301 4.59C34.5299 4.09467 34.0241 3.69491 33.4498 3.41984C32.8754 3.14477 32.2469 3.00134 31.6101 3H30.4201C29.2752 3.00264 28.1779 3.45863 27.3683 4.26822C26.5587 5.0778 26.1028 6.17508 26.1001 7.32V8.51C26.1015 9.3337 26.3412 10.1394 26.7901 10.83H21.9401C21.125 10.8326 20.3441 11.1583 19.7687 11.7356C19.1932 12.313 18.8701 13.0949 18.8701 13.91V15.28C18.8735 15.9468 19.094 16.5944 19.4981 17.1249C19.9022 17.6553 20.4681 18.0397 21.1101 18.22ZM23.1101 32.46V18.35H30.3401V33.54H24.1801C24.0388 33.54 23.8988 33.512 23.7683 33.4576C23.6378 33.4032 23.5194 33.3235 23.42 33.2231C23.3205 33.1227 23.2419 33.0035 23.1887 32.8725C23.1355 32.7416 23.1088 32.6014 23.1101 32.46V32.46ZM32.3401 33.54V18.35H37.5301V33.54H32.3401ZM32.3401 12.83H37.5301V16.35H32.3401V12.83ZM46.7601 32.46C46.7614 32.6014 46.7347 32.7416 46.6816 32.8725C46.6284 33.0035 46.5498 33.1227 46.4503 33.2231C46.3508 33.3235 46.2324 33.4032 46.1019 33.4576C45.9714 33.512 45.8315 33.54 45.6901 33.54H39.5301V18.35H46.7601V32.46ZM49.0001 13.91V15.28C49.0001 15.5638 48.8874 15.8359 48.6867 16.0366C48.4861 16.2373 48.2139 16.35 47.9301 16.35H39.5301V12.83H47.9301C48.0715 12.83 48.2114 12.858 48.3419 12.9124C48.4724 12.9668 48.5908 13.0465 48.6903 13.1469C48.7898 13.2473 48.8684 13.3665 48.9216 13.4975C48.9747 13.6284 49.0014 13.7686 49.0001 13.91ZM38.2601 5H39.4501C40.0654 5 40.6555 5.24443 41.0906 5.67951C41.5257 6.1146 41.7701 6.7047 41.7701 7.32V8.51C41.7701 9.1253 41.5257 9.7154 41.0906 10.1505C40.6555 10.5856 40.0654 10.83 39.4501 10.83H35.9401V7.32C35.9401 6.7047 36.1845 6.1146 36.6196 5.67951C37.0547 5.24443 37.6448 5 38.2601 5V5ZM28.1001 8.51V7.32C28.1001 7.01533 28.1601 6.71365 28.2767 6.43217C28.3933 6.1507 28.5642 5.89494 28.7796 5.67951C28.9951 5.46408 29.2508 5.29319 29.5323 5.1766C29.8138 5.06001 30.1154 5 30.4201 5H31.6101C32.2263 4.99999 32.8175 5.2441 33.2541 5.6789C33.6908 6.1137 33.9375 6.70378 33.9401 7.32V10.83H30.4201C30.1154 10.83 29.8138 10.77 29.5323 10.6534C29.2508 10.5368 28.9951 10.3659 28.7796 10.1505C28.5642 9.93506 28.3933 9.6793 28.2767 9.39783C28.1601 9.11635 28.1001 8.81467 28.1001 8.51V8.51ZM20.8701 13.91C20.8688 13.7686 20.8955 13.6284 20.9487 13.4975C21.0019 13.3665 21.0805 13.2473 21.18 13.1469C21.2794 13.0465 21.3978 12.9668 21.5283 12.9124C21.6588 12.858 21.7988 12.83 21.9401 12.83H30.3401V16.35H21.9401C21.6563 16.35 21.3842 16.2373 21.1835 16.0366C20.9828 15.8359 20.8701 15.5638 20.8701 15.28V13.91Z" />
        </svg>
      </div>
    </div>
  );
};

export default Gift;
