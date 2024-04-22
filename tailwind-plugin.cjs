const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = plugin(
  function ({ addBase, addComponents, addUtilities, addVariant, matchVariant, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      h3: { fontSize: theme("fontSize.lg") },
      h4: { fontSize: theme("fontSize.base") },
      h5: { fontSize: theme("fontSize.sm") },
      h6: { fontSize: theme("fontSize.xs") },
    });
    addComponents({
      ".swap": {
        "@apply relative inline-grid cursor-pointer select-none place-content-center":
          {},
        "& > *": {
          "@apply col-start-1 row-start-1 transition-opacity transition-transform duration-300 ease-out":
            {},
        },
        "& input": {
          "@apply appearance-none hidden": {},
        },
        "& .swap-on, & .swap-indeterminate, & input:indeterminate ~ .swap-on": {
          "@apply opacity-0": {},
        },
        "& input:checked ~ .swap-off, &.swap-active .swap-off, & input:indeterminate ~ .swap-off":
          {
            "@apply opacity-0": {},
          },
        "& input:checked ~ .swap-on, &.swap-active .swap-on, & input:indeterminate ~ .swap-indeterminate":
          {
            "@apply opacity-100": {},
          },
        "&.swap-rotate .swap-on, &.swap-rotate .swap-indeterminate, &.swap-rotate input:indeterminate ~ .swap-on":
          {
            "@apply rotate-45": {},
          },
        "&.swap-rotate input:checked ~ .swap-off, &.swap-rotate.swap-active .swap-off, &.swap-rotate input:indeterminate ~ .swap-off":
          {
            "@apply -rotate-45": {},
          },
        "&.swap-rotate input:checked ~ .swap-on, &.swap-rotate.swap-active .swap-on, &.swap-rotate input:indeterminate ~ .swap-indeterminate":
          {
            "@apply rotate-0": {},
          },
        "&.swap-flip": {
          transformStyle: "preserve-3d",
          perspective: "16em",
        },
        "&.swap-flip .swap-on, &.swap-flip .swap-indeterminate, &.swap-flip input:indeterminate ~ .swap-on":
          {
            "@apply opacity-100": {},
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          },
        "&.swap-flip input:checked ~ .swap-off, &.swap-flip.swap-active .swap-off, &.swap-flip input:indeterminate ~ .swap-off":
          {
            "@apply opacity-100": {},
            transform: "rotateY(-180deg)",
            backfaceVisibility: "hidden",
          },
        "&.swap-flip input:checked ~ .swap-on, &.swap-flip.swap-active .swap-on, &.swap-flip input:indeterminate ~ .swap-indeterminate":
          {
            transform: "rotateY(0deg)",
          },
      },      
      ".form-group": {
        "@apply mb-6": {},
        "&-inline": {
          "@apply flex flex-wrap gap-6": {},
        },
      },
      ".form-label": {
        "@apply font-medium text-base leading-[22px] text-[#260d13] inline-block mb-2":
          {},
      },
      ".form-helper-text": {
        "@apply text-[#666666] font-normal text-xs mt-1": {},
      },
      ".form-input": {
        "@apply block w-full text-base font-normal leading-normal text-[#212529] bg-white bg-clip-padding border appearance-none px-3 py-1.5 rounded-md border-[#ced4da] transition-all disabled:text-[#b4b4b4] disabled:bg-[#e9ecef]":
          {},
        "&:focus": {
          borderColor: "rgb(128 44 64 / 0.2)",
          boxShadow: "0 0 0 0.25rem rgba(128 44 64 / 0.1)",
          "@apply outline-none": {},
        },
        "&[type='file']": {
          "@apply p-0": {},
          "&::file-selector-button": {
            "@apply pl-8 pr-4 py-2.5 border-0 bg-[#802c40] text-white cursor-pointer text-sm font-medium mr-4 -ml-4":
              {},
          },
        },
        "&[type='color']": {
          "@apply w-12 h-9 px-1 py-0.5 cursor-pointer": {},
          "&::-moz-color-swatch, &::-webkit-color-swatch": {
            "@apply rounded border-0": {},
          },
        },
      },
      ".form-select": {
        "@apply block w-full text-base font-normal leading-normal text-[#212529] bg-white bg-no-repeat border appearance-none pl-3 pr-9 py-1.5 rounded-md border-[#ced4da] transition-all":
          {},
        MozPaddingStart: "calc(0.75rem - 3px)",
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
        backgroundPosition: "right 0.75rem center",
        backgroundSize: "16px 12px",
        "&:focus": {
          borderColor: "rgb(128 44 64 / 0.2)",
          boxShadow: "0 0 0 0.25rem rgba(128 44 64 / 0.1)",
        },
      },
      ".form-textarea": {
        "@apply block w-full text-base font-normal leading-normal text-[#212529] bg-white bg-clip-padding border appearance-none px-3 py-1.5 rounded-md border-[#ced4da] transition-all disabled:text-[#b4b4b4] disabled:bg-[#e9ecef] min-h-[25rem]":
          {},
        "&:focus": {
          borderColor: "rgb(128 44 64 / 0.2)",
          boxShadow: "0 0 0 0.25rem rgba(128 44 64 / 0.1)",
          outline: "0",
        },
      },
      ".form-checkbox": {
        "@apply block w-full text-base font-normal leading-normal text-[#212529] bg-white bg-clip-padding border appearance-none px-3 py-1.5 rounded-md border-[#ced4da] transition-all disabled:text-[#b4b4b4] disabled:bg-[#e9ecef]":
          {},
        "&:focus": {
          borderColor: "rgb(128 44 64 / 0.2)",
          boxShadow: "0 0 0 0.25rem rgba(128 44 64 / 0.1)",
          outline: "0",
        },
        "&[type='checkbox']": {
          "@apply w-[1em] h-[1em] bg-white bg-no-repeat bg-center bg-contain border appearance-none border-solid border-black/25 p-0 rounded-[0.25em] checked:bg-[#802c40] checked:border-[#802c40] cursor-pointer":
            {},
          "&:checked": {
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")",
          },
        },
        "&[type='radio']": {
          "@apply w-[1em] h-[1em] rounded-full bg-white bg-no-repeat bg-center bg-contain border appearance-none border-solid border-black/25 p-0 cursor-pointer checked:bg-[#802c40] checked:border-[#802c40]":
            {},
          "&:checked": {
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")",
          },
        },
        "&[role='switch']": {
          "@apply flex w-12 h-6 items-center bg-no-repeat rounded-[2em] border-black/25 p-0 cursor-pointer":
            {},
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\")",
          backgroundPosition: "left center",
          transition: "background-position 0.15s ease-in-out",
          "&:focus": {
            borderColor: "rgb(128 44 64 / 0.2)",
            boxShadow: "0 0 0 0.25rem rgba(128 44 64 / 0.1)",
          },
          "&::after": {
            content: '"Off"',
            "@apply text-[10px] mr-2 ml-auto text-black/40": {},
          },
          "&:checked": {
            "@apply bg-[#802c40] border-[#802c40] bg-right-top bg-auto text-[#802c40]":
              {},
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            "&::after": {
              "@apply text-white ml-2 mr-auto": {},
              content: '"On"',
            },
          },
        },
      },
      ".form-preview": {
        "@apply border rounded bg-[#f7f7f7] isolate p-4 border-solid border-[#e6e6e6]":
          {},
        "& > *": {
          "@apply last:mt-3": {},
        },
        "&-label": {
          "@apply rounded overflow-hidden aspect-[4/3] relative w-full block cursor-pointer":
            {},
          "& > img": {
            "@apply w-full h-full object-cover absolute inset-0": {},
          },
        },
        "&-delete": {
          "@apply flex justify-center items-center gap-1 bg-[#c31f47] rounded text-white absolute w-auto h-auto text-sm px-1.5 py-1 border-0 left-auto right-2 top-2":
            {},
          "&:before": {
            width: "16px",
            height: "16px",
            content: '""',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='#fff' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' /%3E%3C/svg%3E%0A\")",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          },
        },
        "& input[type='file']": {
          "@apply hidden": {},
        },
      },
      ".invalid-feedback": {
        "@apply text-[#c31f47] text-sm font-normal mt-1 hidden": {},
      },
      ".is-invalid ~ .invalid-feedback, .is-invalid ~ .invalid-tooltip, .was-validated :invalid ~ .invalid-feedback, .was-validated :invalid ~ .invalid-tooltip":
        {
          "@apply block": {},
        },
      ".btn": {
        "&-submit": {
          "@apply font-medium text-sm leading-5 tracking-[2px] text-[#f5f5ef] inline-flex items-center px-5 py-2.5 border-0 bg-[#802c40] flex-grow justify-center max-w-[231px]":
            {},
        },
        "&-reset": {
          "@apply font-medium text-sm leading-5 tracking-[2px] text-[#802c40] inline-flex items-center px-5 py-2.5 border-0 bg-white outline outline-1 outline-[#802c40] -outline-offset-1 justify-center":
            {},
        },
      },
      ".form-button": {
        "@apply flex gap-4": {},
      },
    });
    addUtilities({      
      ".content-auto": {
        "content-visibility": "auto",
      },
      ".content-hidden": {
        "content-visibility": "hidden",
      },
      ".content-visible": {
        "content-visibility": "visible",
      },
    });
    addVariant("hocus", ["&:hover", "&:focus"]);
    addVariant("optional", "&:optional");
    addVariant("group-optional", ":merge(.group):optional &");
    addVariant("peer-optional", ":merge(.peer):optional ~ &");    
  },  
  {
    theme: {},
  },  
);
