module.exports = blog = ({ title, authorData, image, font }) => `<html>
<head>
  <meta charset="utf-8" />
  <style>
  @font-face {
    font-family: 'MatterVF';    
    src: url(data:application/x-font-woff;charset=utf-8;base64,${font})
            format('woff supports variations'),
            url(data:application/x-font-woff;charset=utf-8;base64,${font}) format('woff-variations');
    font-style: normal;
    font-weight: 300 900;
    font-display: swap;
}
    body {
      font-family: "MatterVF", "sans-serif";
      overflow: hidden;
      color: white;
    }
  </style>
</head>

<body>
  <section>
    <div
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        padding: 40px 57px 22px;
        box-sizing: border-box;
      "
    >
      <img
        style="
          object-fit: cover;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        "
        src="${image}"
      />
      <div
        style="
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.35) 40%,
            rgba(0, 0, 0, 0.25) 60%,
            rgba(0, 0, 0, 0.55) 100%
          );
        "
      ></div>
      <div style="position: relative; height: 100%">
        <h1 style="margin: 0; font-size: 72px">
          ${title}
        </h1>
        <div
          style="
            display: flex;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            justify-content: space-between;
            align-items: center;
          "
        >
          ${
              authorData
                  ? `<div style="display: flex; align-items: center">
            <div
              style="
                margin-right: 15px;
                width: 100px;
                height: 100px;
                overflow: hidden;
                border-radius: 100%;
                position: relative;
                background-color: #f7a600;
              "
            >
              <img
                style="
                  position: absolute;
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                "
                src="${authorData.image}"
              />
            </div>
            <div>
              <p style="font-size: 36px; margin: 0; font-weight: 700">
                ${authorData.name}
              </p>
              <p
                style="
                  font-size: 28px;
                  margin: 0;
                  font-weight: 600px;
                  opacity: 75%;
                "
              >
              ${authorData.role}
              </p>
            </div>
          </div>`
                  : ''
          }
          <svg
            width="251"
            height="48"
            viewBox="0 0 251 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3166_87881)">
              <path
                d="M16.877 28.6008C16.5086 29.3382 15.4563 29.3382 15.0879 28.6008L13.0093 24.4402C12.8687 24.1588 12.8687 23.8277 13.0093 23.5464L15.0879 19.3858C15.4563 18.6483 16.5086 18.6483 16.877 19.3858L18.9557 23.5464C19.0963 23.8277 19.0963 24.1588 18.9557 24.4402L16.877 28.6008Z"
                fill="white"
              />
              <path
                d="M16.877 44.596C16.5086 45.3334 15.4563 45.3334 15.0879 44.596L13.0093 40.4354C12.8687 40.154 12.8687 39.8229 13.0093 39.5416L15.0879 35.381C15.4563 34.6435 16.5086 34.6435 16.877 35.381L18.9557 39.5416C19.0963 39.8229 19.0963 40.154 18.9557 40.4354L16.877 44.596Z"
                fill="white"
              />
              <path
                d="M0 36.006C0 35.1149 1.07754 34.6688 1.70739 35.2992L11.0805 44.6797C11.7101 45.3098 11.2638 46.3866 10.3731 46.3866H0.999999C0.447715 46.3866 0 45.9389 0 45.3866V36.006ZM0 29.9774C0 30.2425 0.105248 30.4967 0.292612 30.6842L15.6895 46.0934C15.8771 46.2811 16.1316 46.3866 16.3969 46.3866H26.3556C27.2463 46.3866 27.6926 45.3098 27.063 44.6797L1.70739 19.304C1.07754 18.6736 0 19.1197 0 20.0108V29.9774ZM0 13.9822C0 14.2473 0.105248 14.5015 0.292612 14.689L31.672 46.0934C31.8596 46.2811 32.114 46.3866 32.3794 46.3866H42.3381C43.2288 46.3866 43.675 45.3098 43.0454 44.6797L1.70739 3.30875C1.07754 2.6784 0 3.12448 0 4.01558V13.9822ZM15.9825 13.9822C15.9825 14.2473 16.0877 14.5015 16.2751 14.689L46.24 44.6778C46.8699 45.3082 47.9474 44.8621 47.9474 43.971V34.0044C47.9474 33.7393 47.8422 33.4851 47.6548 33.2976L17.6899 3.30875C17.06 2.6784 15.9825 3.12448 15.9825 4.01558V13.9822ZM33.6723 3.30875C33.0425 2.6784 31.9649 3.12448 31.9649 4.01558V13.9822C31.9649 14.2473 32.0702 14.5015 32.2575 14.689L46.24 28.6826C46.8699 29.313 47.9474 28.8669 47.9474 27.9758V18.0092C47.9474 17.7441 47.8422 17.4899 47.6548 17.3024L33.6723 3.30875Z"
                fill="white"
              />
              <path
                d="M67.9856 37.6494L51.9153 21.5663C51.2855 20.936 50.2079 21.3821 50.2079 22.2731V45.3866C50.2079 45.9389 50.6557 46.3866 51.2079 46.3866H75.7158C76.2681 46.3866 76.7158 45.9389 76.7158 45.3866V42.2681C76.7158 41.7158 76.2673 41.2723 75.7168 41.2276C72.8071 40.9914 70.0634 39.7289 67.9856 37.6494ZM57.8795 41.2681C56.468 41.2681 55.3223 40.1216 55.3223 38.7089C55.3223 37.2962 56.468 36.1497 57.8795 36.1497C59.2911 36.1497 60.4367 37.2962 60.4367 38.7089C60.4367 40.1216 59.2911 41.2681 57.8795 41.2681Z"
                fill="white"
              />
              <path
                d="M0 45.3866C0 45.9389 0.447715 46.3866 1 46.3866H10.3731C11.2638 46.3866 11.7101 45.3098 11.0805 44.6797L1.70739 35.2992C1.07754 34.6688 0 35.1149 0 36.006V45.3866Z"
                fill="white"
              />
              <path
                d="M15.9825 17.5952L1.70739 3.30875C1.07754 2.6784 0 3.12448 0 4.01558V13.9822C0 14.2473 0.105247 14.5015 0.292612 14.689L15.9825 30.3914V17.5952Z"
                fill="white"
              />
              <path
                d="M1.70739 19.3039C1.07754 18.6736 0 19.1197 0 20.0108V29.9774C0 30.2425 0.105247 30.4967 0.292612 30.6842L15.9825 46.3866V33.5904L1.70739 19.3039Z"
                fill="white"
              />
              <path
                d="M31.9649 18.0092C31.9649 17.7441 31.8597 17.4899 31.6723 17.3024L17.6898 3.30876C17.06 2.6784 15.9825 3.12448 15.9825 4.01558V13.9822C15.9825 14.2473 16.0877 14.5015 16.2751 14.689L31.9649 30.3914V18.0092Z"
                fill="white"
              />
              <path
                d="M15.9825 46.3866H26.3556C27.2463 46.3866 27.6926 45.3098 27.063 44.6797L15.9825 33.5904V46.3866Z"
                fill="white"
              />
              <path
                d="M15.9825 17.5952V29.9774C15.9825 30.2425 16.0877 30.4967 16.2751 30.6842L31.9649 46.3866V34.0044C31.9649 33.7393 31.8597 33.4851 31.6723 33.2976L15.9825 17.5952Z"
                fill="white"
              />
              <path
                d="M95.3634 40.0001H101.931V29.1009H107.418C113.445 29.1009 117.311 25.5233 117.311 19.9905C117.311 14.4577 113.445 10.8801 107.418 10.8801H95.3634V40.0001ZM101.931 23.4849V16.4961H106.753C109.247 16.4961 110.743 17.8273 110.743 19.9905C110.743 22.1537 109.247 23.4849 106.753 23.4849H101.931Z"
                fill="white"
              />
              <path
                d="M129.192 40.3329C135.594 40.3329 140.249 35.7569 140.249 29.5169C140.249 23.2769 135.594 18.7009 129.192 18.7009C122.708 18.7009 118.136 23.2769 118.136 29.5169C118.136 35.7569 122.708 40.3329 129.192 40.3329ZM124.204 29.5169C124.204 26.1889 126.2 23.9009 129.192 23.9009C132.144 23.9009 134.139 26.1889 134.139 29.5169C134.139 32.8449 132.144 35.1329 129.192 35.1329C126.2 35.1329 124.204 32.8449 124.204 29.5169Z"
                fill="white"
              />
              <path
                d="M150.759 40.3329C155.664 40.3329 158.989 37.2545 158.989 33.6353C158.989 25.1489 147.725 27.8945 147.725 24.5665C147.725 23.6513 148.681 23.0689 150.052 23.0689C151.466 23.0689 153.17 23.9425 153.71 25.8561L158.615 23.8177C157.659 20.7809 154.126 18.7009 149.845 18.7009C145.231 18.7009 142.363 21.4465 142.363 24.7329C142.363 32.6785 153.461 30.4737 153.461 33.7601C153.461 34.9249 152.38 35.7153 150.759 35.7153C148.431 35.7153 146.81 34.0929 146.311 32.1377L141.406 34.0513C142.487 37.2129 145.646 40.3329 150.759 40.3329Z"
                fill="white"
              />
              <path
                d="M174.789 39.7921L174.373 34.5089C173.667 34.8833 172.752 35.0081 172.004 35.0081C170.508 35.0081 169.51 33.9265 169.51 32.0545V24.1089H174.581V19.0337H169.51V12.9601H163.4V19.0337H160.074V24.1089H163.4V32.8449C163.4 37.9201 166.85 40.3329 171.38 40.3329C172.627 40.3329 173.791 40.1249 174.789 39.7921Z"
                fill="white"
              />
              <path
                d="M196.093 10.8801V22.1953H184.538V10.8801H177.97V40.0001H184.538V27.8113H196.093V40.0001H202.702V10.8801H196.093Z"
                fill="white"
              />
              <path
                d="M217.28 40.3329C223.681 40.3329 228.337 35.7569 228.337 29.5169C228.337 23.2769 223.681 18.7009 217.28 18.7009C210.796 18.7009 206.223 23.2769 206.223 29.5169C206.223 35.7569 210.796 40.3329 217.28 40.3329ZM212.292 29.5169C212.292 26.1889 214.287 23.9009 217.28 23.9009C220.231 23.9009 222.226 26.1889 222.226 29.5169C222.226 32.8449 220.231 35.1329 217.28 35.1329C214.287 35.1329 212.292 32.8449 212.292 29.5169Z"
                fill="white"
              />
              <path
                d="M240.13 39.3345C242.417 39.3345 244.453 38.5441 245.534 37.1713V39.1681C245.534 41.4977 243.664 43.1201 240.795 43.1201C238.759 43.1201 236.971 42.1217 236.68 40.4161L231.11 41.2897C231.859 45.2417 235.891 47.9041 240.795 47.9041C247.238 47.9041 251.52 44.1185 251.52 38.5025V19.0337H245.493V20.8225C244.37 19.5329 242.458 18.7009 240.006 18.7009C234.186 18.7009 230.528 22.6945 230.528 29.0177C230.528 35.3409 234.186 39.3345 240.13 39.3345ZM236.473 29.0177C236.473 25.8977 238.301 23.9009 241.128 23.9009C243.996 23.9009 245.825 25.8977 245.825 29.0177C245.825 32.1377 243.996 34.1345 241.128 34.1345C238.301 34.1345 236.473 32.1377 236.473 29.0177Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3166_87881">
                <rect width="251" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
</body>
</html>
`
